export class TodoModel {
  text: string;
  date: TodoDate;
  status: boolean;
  id: number;
  constructor(text: string, date: TodoDate, status: boolean, id: number) {
    this.text = text;
    this.date = date;
    this.status = status;
    this.id = id;
  }
}
export class TodoDate {
  year: string;
  month: string;
  date: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  constructor(
    year: string,
    month: number,
    date: string,
    day: number,
    hour: string,
    minute: string,
    second: string
  ) {
    this.year = year;
    this.month = this.formatMonth(month);
    this.date = date;
    this.day = this.formatDate(day);
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }
  formatDate(e: number) {
    const weekday = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return weekday[e - 1];
  }
  formatMonth(e: number) {
    const month = [
      "January",
      "February",
      "Mars",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return month[e - 1];
  }
}
