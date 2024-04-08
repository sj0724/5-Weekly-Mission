export const calculateDate = (date) => {
  if (date < 60 * 2) {
    return { time: date, result: "minute" };
  }
  if (date <= 60 * 59) {
    const minute = Math.floor(date / (60 * 59));
    return { time: minute, result: "minutes" };
  }
  if (date < 60 * 60 * 24) {
    const day = Math.floor(date / (60 * 60 * 24));
    return { time: day, result: "hours" };
  }
  if (date < 60 * 60 * 24 * 30) {
    const day = Math.floor(date / (60 * 60 * 24));
    return { time: day, result: "days" };
  }
  if (date < 60 * 60 * 24 * 30 * 12) {
    const month = Math.floor(date / (60 * 60 * 24 * 30));
    return { time: month, result: "months" };
  }
  if (date >= 60 * 60 * 24 * 30 * 12) {
    const year = Math.floor(date / (60 * 60 * 24 * 30 * 12));
    return { time: year, result: "years" };
  }
};

export const changeDate = (date) => {
  const dateFormate =
    date.getFullYear() +
    "." +
    (date.getMonth() + 1 < 9
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    "." +
    (date.getDate() < 9 ? "0" + date.getDate() : date.getDate());

  return dateFormate;
};
