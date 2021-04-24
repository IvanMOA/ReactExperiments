import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PdfViewer } from './Experiments/PdfViewer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <PdfViewer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
