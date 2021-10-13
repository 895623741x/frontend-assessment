import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallDetail from "./CallDetail";
import Homepage from "./Homepage";

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/:callId" component={CallDetail} />
         </Switch>
      </Router>
   );
}

export default App;
