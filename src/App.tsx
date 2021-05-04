import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Fp } from "./Experiments";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {/* <Fp /> */}
          </Route>
          <Route exact path="/fp">
            {/* <PdfViewer /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
