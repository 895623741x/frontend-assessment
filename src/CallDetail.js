import React, { useEffect, useState } from "react";
import axios from "axios";
// import { data } from "./data";

function CallDetail(props) {
   // console.log(props);
   const [callInfo, setCallInfo] = useState([]);
   const id = props.match.params.callId;
   useEffect(() => {
      axios.get(`https://aircall-job.herokuapp.com/activities/${id}`).then((res) => {
         console.log(res.data);
         setCallInfo(res.data);
      });

      // props.match.params.cityName
   }, []);

   console.log(callInfo);
   return <div></div>;
}

export default CallDetail;
