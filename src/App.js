import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Rent from "./components/Rent/Rent";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      {/* navbar component */}
      <Navbar />
      <Switch>
        {/* By default we will be in rent homes page */}
        <Route exact path="/" component={Rent} />

        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
