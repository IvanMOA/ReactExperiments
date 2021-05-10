import styled from "@emotion/styled";
import { getMqUp } from "../../../helpers/styledHelpers";
import React from "react";
import Image from "next/image";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NameContainer>
        <Typography variant="h5">Axel Morales</Typography>
      </NameContainer>
      <LinksContainer>
        <DesktopLinks>
          <Typography>
            <a>Contact</a>
          </Typography>
          <Typography>
            <a>About</a>
          </Typography>
          <Typography>
            <a>About</a>
          </Typography>
        </DesktopLinks>
        <MobileLinks></MobileLinks>
      </LinksContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  height: 50px;
  padding: 0em 1em;
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main}33;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${getMqUp("md")} {
    height: 50px;
    padding: 0em 10em;
  }
`;

const NameContainer = styled.div`
  background: ${({ theme }) => theme.palette.primary.main};
  height: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
  border-radius: 0 0 1em 1em;
  box-shadow: ${({ theme }) => theme.shadows[4]};
`;

const LinksContainer = styled.div``;

const DesktopLinks = styled.div`
  display: none;
  flex-direction: row;

  & * {
    margin: 0 0.5em;
  }

  ${getMqUp("md")} {
    display: flex;
    display: flex;
  }
`;

const MobileLinks = styled.div``;
