import React from "react";
import "./Calendar.css";

const calendar = () => {
  const RenderDays = () => {
    const dayArray = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    return dayArray.map((day) => <li key={day}>{day}</li>);
  };
  const RenderDates = () => {
    let dayArray = [null, null, null, null];
    const numArray = new Array(30);
    for (let i = 1; i <= numArray.length; i++) {
      dayArray.push(i);
    }
    return dayArray.map((day, i) => {
      return (
        <li className="tooltip" key={i}>
          {day}
          <span className="tooltiptext">
            <header>
              Some heading
            </header>
            <p>Date: 17 Nov 2020</p>
            <p>time: 9am - 10pm</p>
            <p>It is a long established fact that a reader will be distracted by the readable content</p>
          </span>
        </li>
      );
    });
  };
  return (
    <div className="container-calendar">
      <div className="calendar">
        <header>
          <h4>Nov 2019</h4>
          <div className="arrows">&#60;</div>
          <div className="arrows">&#62;</div>
          <select>
            <option>March</option>
          </select>
        </header>
        <ul className="weekdays">
          <RenderDays />
        </ul>
        <ul className="days">
          <RenderDates />
        </ul>
      </div>
      <div className="image">
      <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1754292.jpg"></img> 
      </div>
      
    </div>
  );
};
export default calendar;
