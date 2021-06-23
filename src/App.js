import React, { useState } from "react";
import { Head } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SubHead } from "./components";
import { Home, Photo, Person, Archive, Gallery } from "./pages";

function App() {
  const [archive, setArchive] = useState(["", "", ""]);
  const [gallery, setGallery] = useState(["", "", ""]);
  const archiveChange = (event) => {
    const temp = archive;
    if (event.tag === "year") {
      temp[0] = event.value;
      setArchive([...temp]);
    } else if (event.tag === "photographer") {
      temp[1] = event.value;
      setArchive([...temp]);
    } else {
      temp[2] = event.value;
      setArchive([...temp]);
    }
  };
  const galleryChange = (event) => {
    const temp = gallery;
    if (event.tag === "year") {
      temp[0] = event.value;
      setGallery([...temp]);
    } else if (event.tag === "photographer") {
      temp[1] = event.value;
      setGallery([...temp]);
    } else {
      temp[2] = event.value;
      setGallery([...temp]);
    }
  };
  return (
    <Router>
      <Route path="/" component={Head} />
      <Route path="/person/:id" component={SubHead} />
      <Route path="/photo/:id" component={SubHead} />
      <Route path="/archive">
        <SubHead onChange={archiveChange}></SubHead>
      </Route>
      <Route path="/gallery">
        <SubHead onChange={galleryChange}></SubHead>
      </Route>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/person/:id" component={Person} />
        <Route path="/photo/:id" component={Photo} />
        <Route path="/archive">
          <Archive archive={archive}></Archive>
        </Route>
        <Route path="/gallery" component={Gallery} children={gallery} />
      </Switch>
    </Router>
  );
}

export default App;
