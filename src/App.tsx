import React, { useState } from 'react';
import img from './assets/Logo.png';
import pdf from './assets/sample.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

console.log(pdf, img);

const App = () => {
  return (
    <div>
      <Document options={{ cMapUrl: 'cmaps/', cMapPacked: true }} file={pdf}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document>
    </div>
  );
};

export default App;
