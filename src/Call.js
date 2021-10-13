import React from "react";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { Link } from "react-router-dom";

function Call({ isFirstCallOnThisDate, callDate, created_at, to, from, type, callId }) {
   console.log(callId);
   if (type === "missed") {
      if (!isFirstCallOnThisDate) {
         // if this call is the first call of the day, we add a title on the top of all the calls on this day
         return (
            <div>
               <h5>{callDate}</h5>
               <Link to={`/${callId}`}>
                  <div className="call-info">
                     <PhoneMissedIcon />
                     <b>{to}</b>
                     <span>try to call on {from} </span>
                     <span>{created_at}</span>
                  </div>
               </Link>
            </div>
         );
      } else {
         return (
            <div>
               <Link to={`/${callId}`}>
                  <div className="call-info">
                     <PhoneMissedIcon />
                     <b>{to}</b>
                     <span>try to call on {from} </span>
                     <span>{created_at}</span>
                  </div>
               </Link>
            </div>
         );
      }
   } else {
      if (isFirstCallOnThisDate) {
         return (
            <div>
               <h5>{callDate}</h5>
               <Link to={`/${callId}`}>
                  <div className="call-info">
                     <PhoneCallbackIcon />
                     <b>{to}</b>
                     <span>try to call on {from} </span>
                     <span>{created_at}</span>
                  </div>
               </Link>
            </div>
         );
      } else {
         return (
            <div>
               <Link to={`/${callId}`}>
                  <div className="call-info">
                     <PhoneCallbackIcon />
                     <b>{to}</b>
                     <span>try to call on {from} </span>
                     <span>{created_at}</span>
                  </div>
               </Link>
            </div>
         );
      }
   }
}

export default Call;
