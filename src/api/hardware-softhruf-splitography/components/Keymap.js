// -*- mode: js-jsx -*-
/* chrysalis-hardware-softhruf-splitography -- Chrysalis SOFT/HRUF Splitography library
 * Copyright (C) 2019-2022  Keyboard.io, Inc.
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

const Keymap = (props) => {
  const keymap =
    props.keymap ||
    Array(48)
      .fill()
      .map(() => 0);
  const layer = props.index;
  const onKeySelect = props.onKeySelect;
  const selectedKey = props.selectedKey;
  const keyIndex = (row, col) => {
    return row * 12 + col;
  };

  const Key = (props) => {
    if (!keymap) return null;
    const { x, y, row, col, transform } = props;
    const width = props.width || 1,
      height = props.height || 1,
      bottom = y + height * 40 - 4;
    const key = keymap[keyIndex(row, col)],
      stroke = selectedKey == keyIndex(row, col) ? "#f3b3b3" : "#b3b3b3";
    const legend = key && db.format(key, { layerNames: props.layerNames });
    return (
      <g
        transform={transform}
        onClick={onKeySelect}
        data-layer={layer}
        data-key-index={keyIndex(row, col)}
        className="key"
      >
        <rect
          x={x}
          y={y}
          rx={3}
          width={width * 40 + 8}
          height={height * 40 + 8}
          stroke={stroke}
          strokeWidth="1.55"
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

  return (
    <svg
      viewBox="0 0 700 213"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className || "layer"}
    >
      <g>
        <Key layerNames={props.layerNames} x={1} y={1} row={0} col={0} />
        <Key layerNames={props.layerNames} x={55} y={1} row={0} col={1} />
        <Key layerNames={props.layerNames} x={109} y={1} row={0} col={2} />
        <Key layerNames={props.layerNames} x={163} y={1} row={0} col={3} />
        <Key layerNames={props.layerNames} x={217} y={1} row={0} col={4} />
        <Key layerNames={props.layerNames} x={271} y={1} row={0} col={5} />
        <Key layerNames={props.layerNames} x={379} y={1} row={0} col={6} />
        <Key layerNames={props.layerNames} x={433} y={1} row={0} col={7} />
        <Key layerNames={props.layerNames} x={487} y={1} row={0} col={8} />
        <Key layerNames={props.layerNames} x={541} y={1} row={0} col={9} />
        <Key layerNames={props.layerNames} x={595} y={1} row={0} col={10} />
        <Key layerNames={props.layerNames} x={649} y={1} row={0} col={11} />

        <Key layerNames={props.layerNames} x={1} y={55} row={1} col={0} />
        <Key layerNames={props.layerNames} x={55} y={55} row={1} col={1} />
        <Key layerNames={props.layerNames} x={109} y={55} row={1} col={2} />
        <Key layerNames={props.layerNames} x={163} y={55} row={1} col={3} />
        <Key layerNames={props.layerNames} x={217} y={55} row={1} col={4} />
        <Key layerNames={props.layerNames} x={271} y={55} row={1} col={5} />
        <Key layerNames={props.layerNames} x={379} y={55} row={1} col={6} />
        <Key layerNames={props.layerNames} x={433} y={55} row={1} col={7} />
        <Key layerNames={props.layerNames} x={487} y={55} row={1} col={8} />
        <Key layerNames={props.layerNames} x={541} y={55} row={1} col={9} />
        <Key layerNames={props.layerNames} x={595} y={55} row={1} col={10} />
        <Key layerNames={props.layerNames} x={649} y={55} row={1} col={11} />

        <Key layerNames={props.layerNames} x={1} y={109} row={2} col={0} />
        <Key layerNames={props.layerNames} x={55} y={109} row={2} col={1} />
        <Key layerNames={props.layerNames} x={109} y={109} row={2} col={2} />
        <Key layerNames={props.layerNames} x={163} y={109} row={2} col={3} />
        <Key layerNames={props.layerNames} x={217} y={109} row={2} col={4} />
        <Key layerNames={props.layerNames} x={271} y={109} row={2} col={5} />
        <Key layerNames={props.layerNames} x={379} y={109} row={2} col={6} />
        <Key layerNames={props.layerNames} x={433} y={109} row={2} col={7} />
        <Key layerNames={props.layerNames} x={487} y={109} row={2} col={8} />
        <Key layerNames={props.layerNames} x={541} y={109} row={2} col={9} />
        <Key layerNames={props.layerNames} x={595} y={109} row={2} col={10} />
        <Key layerNames={props.layerNames} x={649} y={109} row={2} col={11} />

        <Key layerNames={props.layerNames} x={190} y={163} row={3} col={4} />
        <Key layerNames={props.layerNames} x={244} y={163} row={3} col={5} />
        <Key layerNames={props.layerNames} x={406} y={163} row={3} col={6} />
        <Key layerNames={props.layerNames} x={460} y={163} row={3} col={7} />
      </g>
    </svg>
  );
};

export default Keymap;
