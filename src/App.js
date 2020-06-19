import React from "react";
import Navbar from "./components/navbar/Navbar";
import Music from "./components/music/Music";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Media from "./components/media/Media";
import Footer from "./components/footer/Footer";
import Cursor from "./components/cursor/Cursor"; 
import SimpleReactLightbox from "simple-react-lightbox";
import { Route, Switch } from "react-router";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
       <Cursor />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/music" exact component={Music} />
        <Route path="/contact" exact component={Contact} />
        <SimpleReactLightbox><Route path="/media" exact component={Media} /></SimpleReactLightbox>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
