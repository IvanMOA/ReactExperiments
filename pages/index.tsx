import { Button, Collapse } from "@material-ui/core";
import { ModalContext } from "../components/Modal/ModalContext";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import * as E from "fp-ts/Either";
import * as O from "fp-ts/Option";
import { Navbar } from "../components/HomePageSections/Navbars/Navbar";

const Index = () => {
  const { openModalWith } = useContext(ModalContext);
  const openModal = () => openModalWith(<h1>TestA</h1>, {});
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Index;
