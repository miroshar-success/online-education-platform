import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/journal" component={Blog} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
