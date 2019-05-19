import moment from "moment";

export const getDateRange = (startDate, daysCount) => {
  const _startDate = moment(startDate);
  return Array(daysCount)
    .fill()
    .map((_, idx) =>
      moment(_startDate)
        .add(idx, "days")
        .toDate()
    );
};

export const generateNormalizedArray = count => {
  return Array(count)
    .fill()
    .map((_, idx) => idx + 1);
};

export const generateTimes = (start = 0, end = 23) => {
  const times = [];
  for (let i = start; i <= end; i++) {
    const hour = i < 10 ? `0${i}` : i;
    times.push(`${hour}:00`, `${hour}:30`);
  }
  return times;
};
