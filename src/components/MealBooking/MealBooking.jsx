import React from "react";
import DatePicker from "../DatePicker/DatePicker";
import Select from "../Select/Select";
import Box from "../Box/Box";
import FormField from "../FormField/FormField";
import Form from "../Form/Form";
import "./MealBooking.scss";
import SubmitButton from "../SubmitButton/SubmitButton";
import { generateNormalizedArray } from "../../utils/helpers";
import UserStore from "../../stores/UserStore";
import SiteModal from "../SiteModal/SiteModal";

class MealBooking extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleGuestsChange = this.handleGuestsChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    this.state = {
      date: props.defaultDate,
      guests: 1,
      modalOpen: false,
      modalTitle: "",
      modalText: ""
    };
  }

  async handleFormSubmit() {
    try {
      this.setState({
        modalOpen: true,
        modalTitle: this.props.modalSuccess.title,
        modalText: "הזמנת ארוחה בהצלחה"
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleGuestsChange(event) {
    this.setState({
      guests: event.target.value
    });
  }

  handleDateChange(value) {
    this.setState({
      date: value
    });
  }

  render() {
    const { guests, date, modalOpen, modalText, modalTitle } = this.state;
    const { maxGuests, allowedDates } = this.props;

    return (
      <div className="meal-booking">
        <Form onSubmit={this.handleFormSubmit}>
          <div className="meal-disclaimer">
            <Box>
              <p>
                אורח יקר,
                <br />
                באפשרותך לשריין מקום לארוחה לפי תאריך, שעה ומספר סועדים.
                לידיעתך, השריון תקף לחצי שעה הראשונה של הארוחה בלבד.
              </p>
            </Box>
          </div>
          <Box>
            <Box>
              <FormField title="בחר מספר אורחים">
                <Select
                  items={generateNormalizedArray(maxGuests)}
                  value={guests}
                  onChange={this.handleGuestsChange}
                  name="guests"
                />
              </FormField>
            </Box>
            <Box>
              <FormField title="בחר תאריך">
                <DatePicker
                  selected={date}
                  onChange={this.handleDateChange}
                  allowedDates={allowedDates}
                />
              </FormField>
            </Box>
            <Box>
              <SubmitButton>הזמן</SubmitButton>
            </Box>
          </Box>
        </Form>
        <SiteModal
          open={modalOpen}
          title={modalTitle}
          text={modalText}
          onClose={() => this.setState({ modalOpen: false })}
        />
      </div>
    );
  }
}

MealBooking.contextType = UserStore;

export default MealBooking;
