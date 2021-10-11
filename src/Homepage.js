import React, { useEffect, useState } from "react";
import Header from "./Header";
import Functions from "./Functions";
import axios from "axios";
import "./css/app.css";
import Call from "./Call";
// import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
// import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

function Homepage() {
   const [calls, setCalls] = useState([]);
   const [existingDates, setExistingDates] = useState([]);

   useEffect(() => {
      axios.get(`https://aircall-job.herokuapp.com/activities`).then((res) => {
         console.log(res.data);

         setCalls(res.data);
      });
   }, []);

   console.log(existingDates);

   const convertDate = (time) => {
      const date = time.substring(0, 10);
      return date;
   };

   const convertHourAndMin = (time) => {
      const hour = time.substring(11, 13);
      let hourAndMin = time.substring(11, 16);

      if (hour >= 12) {
         hourAndMin += " PM";
      } else {
         hourAndMin += " AM";
      }

      return hourAndMin;
   };

   const mapAllCallsHandler = (call, index) => {
      const isMissed = call.call_type;
      const callDate = convertDate(call.created_at);
      const minAndHour = convertHourAndMin(call.created_at);
      // check if the call is the first call of the day
      const isFirstCallOnThisDate = !existingDates.includes(callDate);
      // console.log(isFirstCallOnThisDate);

      if (isFirstCallOnThisDate) {
         setExistingDates([...existingDates, callDate]);
         return (
            <Call
               isFirstCallOnThisDate={isFirstCallOnThisDate}
               callDate={callDate}
               created_at={minAndHour}
               to={call.to}
               from={call.from}
               type={isMissed}
               key={index}
            />
         );
      } else {
         return (
            <Call
               isFirstCallOnThisDate={isFirstCallOnThisDate}
               callDate={callDate}
               created_at={minAndHour}
               to={call.to}
               from={call.from}
               type={isMissed}
               key={index}
            />
         );
      }
   };

   return (
      <div className="container">
         <Header />
         <div className="container-view">
            {calls.map((call, index) => {
               return mapAllCallsHandler(call, index);
            })}
         </div>
         <Functions />
      </div>
   );
}

export default Homepage;
