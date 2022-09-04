import React from "react";

function JournalDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();

  // const dayswork = {dayswork}
  // const qs = {qs}
  // const themes = {themes}
  // const dateyear = {dateyear}
  // const datemonth = {datemonth}
  // const dateday = {dateday}
  // const journaldate = new Date(2022, 9, 3)

  return(
    <div>
    <div> {month} </div>
    <div> {day}, </div>
    <div> {year} </div>
    </div>
  )
}

export default JournalDate;