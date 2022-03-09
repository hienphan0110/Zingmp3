import "../styles/App.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Canhan from "./Canhan";
import Khampha from "./Khampha";
import Listmusic from "./Listmusic";
import Footer from "./Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <Listmusic />
        <Footer />
        <Switch>
          <Route path="/canhan" exact>
            <Canhan />
          </Route>
          <Route path="/Zingmp3">
            <Khampha />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
