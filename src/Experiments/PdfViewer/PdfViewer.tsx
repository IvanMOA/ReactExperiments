import React from 'react';
import pdf from '@assets/sample.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export const PdfViewer = () => {
  return (
    <Document options={{ cMapUrl: 'cmaps/', cMapPacked: true }} file={pdf}>
      <Page pageNumber={1} />
      <Page pageNumber={2} />
    </Document>
  );
};
