import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Fp } from "./Experiments";
const PdfViewer = lazy(() => import("./Experiments/PdfViewer/PdfViewer"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Fp />
          </Route>
          <Route exact path="/fp">
            <Suspense fallback={<h1>Loading bro...</h1>}>
              <PdfViewer />
            </Suspense>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
