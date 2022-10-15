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
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import usePluginEffect from "@renderer/hooks/usePluginEffect";
import usePluginVisibility from "@renderer/hooks/usePluginVisibility";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Collapsible from "../components/Collapsible";
import KeyButton from "../components/KeyButton";

const db = new KeymapDB();

const MouseMovementKeys = (props) => {
  const { t } = useTranslation();

  const mouseUp = db.lookup(20481);
  const mouseLeft = db.lookup(20484);
  const mouseDown = db.lookup(20482);
  const mouseRight = db.lookup(20488);

  return (
    <div>
      <Typography color="textSecondary" gutterBottom>
        {t("editor.sidebar.mousekeys.movement")}
      </Typography>
      <Box mx="auto" p={1} textAlign="center">
        <KeyButton onKeyChange={props.onKeyChange} keyObj={mouseUp} noHint />
        <br />
        <KeyButton onKeyChange={props.onKeyChange} keyObj={mouseLeft} noHint />
        <KeyButton onKeyChange={props.onKeyChange} keyObj={mouseRight} noHint />
        <br />
        <KeyButton onKeyChange={props.onKeyChange} keyObj={mouseDown} noHint />
      </Box>
    </div>
  );
};

const MouseButtonKeys = (props) => {
  const { t } = useTranslation();
  const left = db.lookup(20545);
  const middle = db.lookup(20548);
  const right = db.lookup(20546);
  const back = db.lookup(20552);
  const fwd = db.lookup(20560);

  return (
    <div>
      <Typography color="textSecondary" gutterBottom>
        {t("editor.sidebar.mousekeys.buttons")}
      </Typography>

      <Box mx="auto" p={1} textAlign="center">
        <KeyButton onKeyChange={props.onKeyChange} keyObj={left} noHint />
        <KeyButton onKeyChange={props.onKeyChange} keyObj={middle} noHint />
        <KeyButton onKeyChange={props.onKeyChange} keyObj={right} noHint />
        <br />
        <KeyButton onKeyChange={props.onKeyChange} keyObj={back} noHint />
        <KeyButton onKeyChange={props.onKeyChange} keyObj={fwd} noHint />
      </Box>
    </div>
  );
};

const MouseWheelKeys = (props) => {
  const { t } = useTranslation();
  const up = db.lookup(20497);
  const down = db.lookup(20498);
  const left = db.lookup(20500);
  const right = db.lookup(20504);
  return (
    <div>
      <Typography color="textSecondary" gutterBottom>
        {t("editor.sidebar.mousekeys.wheel")}
      </Typography>
      <Box mx="auto" p={1} textAlign="center">
        <KeyButton onKeyChange={props.onKeyChange} keyObj={up} noHint />
        <br />
        <KeyButton onKeyChange={props.onKeyChange} keyObj={left} noHint />
        <KeyButton onKeyChange={props.onKeyChange} keyObj={right} noHint />
        <br />
        <KeyButton onKeyChange={props.onKeyChange} keyObj={down} noHint />
      </Box>
    </div>
  );
};

const MouseWarpKeys = (props) => {
  const { t } = useTranslation();
  const warpNW = db.lookup(20517);
  const warpNE = db.lookup(20521);
  const warpSW = db.lookup(20518);
  const warpSE = db.lookup(20522);
  const warpEnd = db.lookup(20576);
  const warpN = db.lookup(20513);
  const warpS = db.lookup(20514);
  const warpZ = db.lookup(20515);
  const warpW = db.lookup(20516);
  const warpE = db.lookup(20520);

  const { onKeyChange } = props;

  if (props.gridSize == 2) {
    return (
      <div>
        <Typography color="textSecondary" gutterBottom>
          {t("editor.sidebar.mousekeys.warp")}
        </Typography>
        <KeyButton onKeyChange={onKeyChange} keyObj={warpNW} noHint />
        <KeyButton onKeyChange={onKeyChange} keyObj={warpNE} noHint />
        <br />
        <KeyButton onKeyChange={onKeyChange} keyObj={warpSW} noHint />
        <KeyButton onKeyChange={onKeyChange} keyObj={warpSE} noHint />
        <br />
        <KeyButton onKeyChange={onKeyChange} keyObj={warpEnd} noHint />
      </div>
    );
  } else {
    return (
      <div>
        <Typography color="textSecondary" gutterBottom>
          {t("editor.sidebar.mousekeys.warp")}
        </Typography>
        <KeyButton
          onKeyChange={onKeyChange}
          keyObj={warpNW}
          noHint
          keycapSize="1u"
        />
        <KeyButton
          onKeyChange={onKeyChange}
          keyObj={warpN}
          noHint
          keycapSize="1u"
        />
        <KeyButton
          onKeyChange={onKeyChange}
          keyObj={warpNE}
          noHint
          keycapSize="1u"
        />
        <br />
        <KeyButton
          onKeyChange={onKeyChange}
          keyObj={warpW}
          noHint
          keycapSize="1u"
        />
        <KeyButton
          onKeyChange={onKeyChange}
          keyObj={warpZ}
          noHint
          keycapSize="1u"
        />
        <KeyButton
          onKeyChange={onKeyChange}
          keyObj={warpE}
          noHint
          keycapSize="1u"
        />
        <br />
        <KeyButton
          onKeyChange={onKeyChange}
          keyObj={warpSW}
          noHint
          keycapSize="1u"
        />
        <KeyButton
          onKeyChange={onKeyChange}
          keyObj={warpS}
          noHint
          keycapSize="1u"
        />
        <KeyButton
          onKeyChange={onKeyChange}
          keyObj={warpSE}
          noHint
          keycapSize="1u"
        />
        <br />
        <KeyButton onKeyChange={onKeyChange} keyObj={warpEnd} noHint />
      </div>
    );
  }
};

const MouseKeys = (props) => {
  const { t } = useTranslation();
  const [gridSize, setGridSize] = useState(undefined);

  const initialize = async (_, activeDevice) => {
    const _gridSize = (await activeDevice.mousekeys_warp_grid_size()) || "2";

    setGridSize(parseInt(_gridSize));
  };

  const loaded = usePluginEffect(initialize);
  const pluginVisible = usePluginVisibility("MouseKeys");
  if (!pluginVisible) return null;
  if (!loaded) return null;

  const subWidgets = [
    MouseMovementKeys,
    MouseButtonKeys,
    MouseWheelKeys,
    MouseWarpKeys,
  ];
  const widgets = subWidgets.map((Widget, index) => {
    return (
      <Widget
        key={`mousekeys-group-${index}`}
        onKeyChange={props.onKeyChange}
        warpGridSize={gridSize}
      />
    );
  });

  return (
    <Collapsible
      title={t("editor.sidebar.mousekeys.title")}
      help={t("editor.sidebar.mousekeys.help")}
    >
      {widgets}
    </Collapsible>
  );
};

export { MouseKeys as default };
