import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import "./calender.css";

export class Calender extends Component {
  calendarComponentRef = React.createRef();
  state = {
    events: [
      { id: 1, title: "انگولار", date: "2022-09-21" },
      {
        title: "ریکت",
        start: "2022-11-09",
        end: "2022-11-09",
        allDay: true,
      },
      {
        title: "ریکت",
        start: "2022-11-16",
        end: "2022-11-16",
        allDay: true,
      },
      {
        title: "ریکت",
        start: "2022-11-23",
        end: "2022-11-23",
        allDay: true,
      },
      {
        title: "ریکت",
        start: "2022-11-06",
        end: "2022-11-06",
        allDay: true,
      },
      {
        title: "انگولار",
        start: "2022-11-27",
        end: "2022-11-27",
        allDay: true,
      },
      {
        title: "انگولار",
        start: "2022-11-13",
        end: "2022-09-13",
        allDay: true,
      },
      {
        title: "انگولار",
        start: "2022-11-20",
        end: "2022-11-20",
        allDay: true,
      },
    ],
  };

  handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  handleSelectedDates = (info) => {
    alert("selected " + info.startStr + " to " + info.endStr);
    const title = prompt("What's the name of the title");
    console.log(info);
    if (title != null) {
      const newEvent = {
        title,

        start: info.startStr,
        end: info.endStr,
      };
      const data = [...this.state.events, newEvent];
      this.setState({ events: data });
      console.log("here", data);
    } else {
      console.log("nothing");
    }
  };

  render() {
    return (
      <div>
        <FullCalendar
          schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
          ref={this.calendarComponentRef}
          defaultView="dayGridMonth"
          dateClick={this.handleDateClick}
          displayEventTime={true}
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          selectable={true}
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            resourceTimeGridPlugin,
          ]}
          eventClick={(event) => {
            console.log(event.event._def.publicId);
          }}
          events={this.state.events}
          select={this.handleSelectedDates}
          eventLimit={3}
        />
      </div>
    );
  }
}
