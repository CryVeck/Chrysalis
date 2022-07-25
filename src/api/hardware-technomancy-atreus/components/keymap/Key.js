// -*- mode: js-jsx -*-
/* chrysalis-bundle-keyboardio -- Chrysalis Bundle for Keyboard.io
 * Copyright (C) 2018-2022  Keyboardio, Inc.
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
import React from "react";

const db = new KeymapDB();

const Key = (props) => {
  const { x, y, keyObj, row, col, layer, onClick } = props;
  const keyIndex = parseInt(row) * 11 + parseInt(col);
  const stroke = props.active ? "#f3b3b3" : "#b3b3b3";
  const height = props.height || 48;
  const bottom = y + height - 16;
  const legend = keyObj && db.format(keyObj, { layerNames: props.layerNames });
  return (
    <g
      onClick={onClick}
      className="key"
      data-key-index={keyIndex}
      data-layer={layer}
    >
      <rect
        x={x}
        y={y}
        rx={3}
        width="48"
        height={height}
        stroke={stroke}
        strokeWidth={1.55}
        fill="#ffffff"
      />
      <text x={x + 3} y={y + 14}>
        {legend?.hint}
      </text>
      <text x={x + 3} y={bottom}>
        {legend?.main}
      </text>
    </g>
  );
};
export default Key;
