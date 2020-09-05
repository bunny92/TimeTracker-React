export const add0 = (num) => String("0" + num).slice(-2);
export const toAmPm = (date) => {
  if (typeof date === "string" || typeof date === "number") {
    date = new Date(date);
  }

  if (date instanceof Date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return hours + ":" + add0(minutes) + ":" + add0(seconds) + " " + amPm;
  } else {
    console.error("input is not a date");
    return false;
  }
};
