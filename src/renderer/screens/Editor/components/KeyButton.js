// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2020-2022  Keyboardio, Inc.
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

import KeymapDB from "@api/focus/keymap/db";
import Button from "@mui/material/Button";
import React from "react";

const db = new KeymapDB();

const KeyButton = (props) => {
  const { classes, keyObj, onKeyChange, noHint } = props;

  const onClick = (keyCode) => {
    return () => {
      onKeyChange(keyCode);
    };
  };

  const label = db.format(keyObj, { keycapSize: "full" });
  return (
    <Button
      variant="contained"
      size="small"
      sx={{ m: 1 }}
      onClick={onClick(keyObj.code)}
    >
      {!noHint && label.hint} {label.main}
    </Button>
  );
};

export default KeyButton;
