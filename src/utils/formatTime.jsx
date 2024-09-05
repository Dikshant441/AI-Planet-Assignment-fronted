export const getDateDiff = (date1, date2) => {
  const diff = new Date(date2.getTime() - date1.getTime());
  return {
    day: diff.getUTCDate() - 1,
    hour: diff.getUTCHours(),
    minute: diff.getUTCMinutes(),
    second: diff.getUTCSeconds(),
  };
};

export const formatDate = (date) => {
  let d = new Date(date),
    day = d.getDate().toString();

  if (day.length < 2) day = "0" + day;

  return [day].join("-");
};

export const formatDate1 = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear().toString().slice(-2);

  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedHour = hours % 12 || 12;

  // Calculate suffix for the day
  const daySuffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  return `${day}${daySuffix} ${month}'${year} ${formattedHour}:${minutes} ${ampm}`;
};
