import React, { useState, useContext, useEffect, useCallback } from "react";
import Loader from "react-loader";
import SiteModal from "../../../components/SiteModal/SiteModal";
import Box from "../../../components/Box/Box";
import UserStore from "../../../stores/UserStore";
import { EventsApi, UserApi } from "../../../utils/api";
import { getDateRange } from "../../../utils/helpers";
import FormField from "../../../components/FormField/FormField";
import Select from "../../../components/Select/Select";
import DatePicker from "../../../components/DatePicker/DatePicker";
import { eventTypes } from "../consts";
import moment from "moment";
import classNames from "classnames";

const dateFormat = "DD/MM/YYYY";
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const generateCategorySelect = categories => {
  return categories.map(cat => ({
    text: eventTypes[cat],
    value: cat
  }));
};

const AllEvents = () => {
  const [allowedDates, setAllowedDates] = useState(
    getDateRange(new Date(), 10)
  );
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(allowedDates[0]);
  const [category, setCategory] = useState('');
  let [filteredEvents, setFilteredEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const { user } = useContext(UserStore).user;

  const handleSubmit = useCallback(
    async id => {
      const _event = events.find(ev => ev._id === id);
      await EventsApi.add(_event._id, 1);
      // if (_event.counter === 0) {
      //   setModalText("אין מקום באירוע זה");
      //   setModalOpen(true);
      //   return;
      // }
    },
    [events]
  );

  const filterEvents = (_events, _category, _date) => {
    const _mDate = moment(_date, dateFormat)
      .startOf("day")
      .toISOString();
    return _events.filter(event => {
      const isInDate =
        moment(event.string.date, dateFormat).toISOString() === _mDate;
      return (
        isInDate &&
        event.category
          .map(x => x.toLowerCase())
          .includes(_category.toLowerCase())
      );
    });
  };

  const handleCategoryChange = useCallback(
    event => {
      const cat = event.target.value;
      setCategory(cat);
      setFilteredEvents(filterEvents(events, cat, date));
    },
    [category, date]
  );

  const handleDateChange = useCallback(
    date => {
      setDate(date);
      setFilteredEvents(filterEvents(events, category, date));
    },
    [category, date]
  );

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await EventsApi.get(user.hotel);
        setSuccess(true);
        const _events = result.data.data;
        setEvents(_events);
        const _categories = _events
          .map(ev => ev.category.map(cat => cat.toLowerCase()))
          .flat()
          .filter(onlyUnique);
        setCategories(generateCategorySelect(_categories));
        const currentCategory = _categories[0];
        setCategory(currentCategory);
        const _dates = _events.map(ev => ev.string.date).filter(onlyUnique);
        setAllowedDates(_dates.map(x => moment(x, dateFormat).toDate()));
        setDate(moment(_dates[0], dateFormat).toDate());
        setFilteredEvents(filterEvents(_events, currentCategory, _dates[0]));
      } catch (e) {
        setEvents(null);
      }
      setLoading(false);
    })();
  }, [user.hotel]);

  return (
    <Loader loaded={!loading}>
      <Box>
        <Box>
          <FormField title="קטגוריה">
            <Select
              placeholder="בחר קטגוריה"
              items={categories}
              value={category}
              detailed
              onChange={handleCategoryChange}
            />
          </FormField>
          <FormField title="בחר תאריך">
            <DatePicker
              selected={date}
              onChange={handleDateChange}
              allowedDates={allowedDates}
            />
          </FormField>
        </Box>

        {filteredEvents.length === 0 ? (
          <Box>לא נמצאו אירועים</Box>
        ) : (
            <EventList events={filteredEvents} onItemClick={handleSubmit} />
          )}
      </Box>
      <SiteModal
        open={modalOpen}
        title="אירועים ופעילויות"
        text={modalText}
        onClose={() => setModalOpen(false)}
      />
    </Loader>
  );
};

const EventList = ({ events, onItemClick }) => (
  <ul className="event-list">
    {events.map((event, idx) => (
      <EventItem key={idx} {...event} onClick={onItemClick} />
    ))}
  </ul>
);
const EventItem = ({
  _id,
  name,
  onClick,
  location,
  string,
  content,
  counter,
  capacity
}) => {
  const _onClick = () => {
    onClick(_id);
  };
  return (
    <li
      onClick={_onClick}
      className={classNames("event-item", { full: counter === capacity })}
    >
      <div className="event-item-top">
        <h3 className="event-item-name">{name}</h3>
        <span className="event-item-details">
          {location}, {string.time}
        </span>
      </div>
      <p className="event-item-content">{content}</p>
    </li>
  );
};

export default AllEvents;
