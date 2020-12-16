import React, { Component, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./customcalander.css";

function MyApp() {
    const [value, onChange] = useState(new Date());
  
    return (
      <div  >
          
        <Calendar
          onChange={onChange}
          value={value}
        />
        {console.log(value)}
        <input type="hidden" value={value} id="Calendardate" />
        
      </div>
    );
    
  }
  
  
export default MyApp;
