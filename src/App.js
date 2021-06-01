import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/style/style.scss";
import Login from "./Redux/Connect/login.connect";
import RouteList from "./Route";
import { Provider } from "react-redux";
import store from "./Redux";
import { Suspense } from "react";
import Loading from "./Components/Loading";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Suspense fallback={<Loading />}>
            <Route path="/" component={RouteList} />
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
