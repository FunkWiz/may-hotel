import React, { useEffect, useState } from "react";
import { UserApi } from "../../../utils/api";
import Loader from "react-loader";
import Box from "../../../components/Box/Box";

const MyEvents = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await UserApi.events();
        const _events = result.data.data.map(ev => ev.reservation.event);
        setEvents(_events);
      } catch (e) {}
      setLoading(false);
    })();
  }, []);
  return (
    <Box>
      <Loader loaded={!loading}>
        <MyEventList events={events} />
      </Loader>
    </Box>
  );
};

export default MyEvents;

const MyEventList = ({ events }) => (
  <ul className="event-list">
    {events.map((event, idx) => (
      <MyEventItem key={idx} {...event} />
    ))}
  </ul>
);
const MyEventItem = ({ name, location, string, content }) => {
  return (
    <li className="my-event-item">
      <div className="my-event-item-top">
        <h3 className="my-event-item-name">{name}</h3>
        <span className="my-event-item-details">
          {location}, {string.time}
        </span>
      </div>
      <p className="my-event-item-content">{content}</p>
    </li>
  );
};
