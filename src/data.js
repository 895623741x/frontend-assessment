import axios from "axios";

export const data = axios.get(`https://aircall-job.herokuapp.com/activities`).then((res) => {
   return res.data;
});

console.log(data);
