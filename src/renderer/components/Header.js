// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2018, 2019, 2020  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useState } from "react";

import "../../api/keymap";
import "../../api/colormap";
import "typeface-roboto/index.css";
import "typeface-source-code-pro/index.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import BoardMenu from "./BoardMenu";
import MainMenu from "./MainMenu/MainMenu";

function Header({ contextBar, connected, pages, device, cancelContext }) {
  const [mainMenu, setMainMenuOpen] = useState(false);
  const [boardAnchor, setBoardMenuAnchor] = useState(null);

  function openMainMenu() {
    setMainMenuOpen(true);
  }

  function closeMainMenu() {
    setMainMenuOpen(false);
  }

  function openBoardMenu(event) {
    setBoardMenuAnchor(event.currentTarget);
  }

  function closeBoardMenu() {
    setBoardMenuAnchor(null);
  }

  function contextOnClick() {
    if (contextBar) {
      cancelContext(true);
    } else {
      openMainMenu();
    }
  }

  return (
    <>
      <MainMenu
        connected={connected}
        pages={pages}
        open={mainMenu}
        closeMenu={closeMainMenu}
      />
      <AppBar
        position="sticky"
        color={contextBar ? "secondary" : "primary"}
        id="appbar"
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={contextOnClick}
            sx={{ mr: 2 }}
          >
            {contextBar ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            id="page-title"
            component="div"
          />
          <Box sx={{ flexGrow: 1 }} />
          {device && (
            <Button
              onClick={openBoardMenu}
              disabled={!device.urls}
              sx={{ color: "inherit" }}
            >
              {device.displayName}
            </Button>
          )}
          {device && device.urls && (
            <BoardMenu
              boardAnchor={boardAnchor}
              boardClose={closeBoardMenu}
              device={device}
            />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
