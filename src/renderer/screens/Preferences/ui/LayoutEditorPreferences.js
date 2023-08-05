// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
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

import Autocomplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Keyboard104 from "@renderer/screens/Editor/Keyboard104";
import PreferenceSection from "../components/PreferenceSection";
import PreferenceSwitch from "../components/PreferenceSwitch";
import PreferenceWithHeading from "../components/PreferenceWithHeading";

const Store = require("@renderer/localStore");
const settings = new Store();

const db = new KeymapDB();

const LayoutSelect = (props) => {
  const { layout, setLayout } = props;

  const changeLayout = (_, value) => {
    setLayout(value.name || props.layout);
  };

  return (
    <Autocomplete
      size="small"
      sx={{ minWidth: "15em" }}
      value={db.getSupportedLayouts().find((item) => item.name === layout)}
      groupBy={(option) => option.language || option.group}
      onChange={changeLayout}
      options={db.getSupportedLayouts()}
      getOptionLabel={(option) => option.name}
      disableClearable
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
  );
};

function LayoutEditorPreferences(props) {
  const { t, i18n } = useTranslation();

  const [layout, setLayout] = useState("English (US)");
  const [hideUnavailableFeatures, setHideUnavailableFeatures] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const initializeHostKeyboardLayout = async () => {
    const layoutSetting = await settings.get("keyboard.layout", "English (US)");
    setLayout(layoutSetting);
  };

  const changeLayout = async (layout) => {
    db.setLayout(layout);
    setLayout(layout);
    settings.set("keyboard.layout", layout);
  };

  const toggleHideUnavailableFeatures = () => {
    settings.set(
      "ui.hideFeaturesNotAvailableInCurrentFirmware",
      !hideUnavailableFeatures
    );
    setHideUnavailableFeatures(!hideUnavailableFeatures);
  };

  useEffect(() => {
    const initialize = async () => {
      const hideUnavail = settings.get(
        "ui.hideFeaturesNotAvailableInCurrentFirmware",
        true
      );
      await setHideUnavailableFeatures(hideUnavail);
      if (!loaded) {
        await initializeHostKeyboardLayout();
      }

      await setLoaded(true);
    };

    initialize();
  }, [loaded]);

  return (
    <PreferenceSection name="ui.layoutEditor">
      <PreferenceWithHeading
        heading={t("preferences.ui.host.label")}
        subheading={t("preferences.ui.host.help")}
      >
        {loaded ? (
          <LayoutSelect layout={layout} setLayout={changeLayout} />
        ) : (
          <Skeleton variant="rectangular" />
        )}
      </PreferenceWithHeading>
      <Paper variant="outlined" square sx={{ p: 2, mt: 1 }}>
        <Keyboard104 onKeySelect={() => null} layout={layout} />
      </Paper>
      <Divider sx={{ my: 2, mx: -2 }} />
      <PreferenceSwitch
        loaded={loaded}
        option="ui.hideUnavailableFeatures"
        checked={hideUnavailableFeatures}
        onChange={toggleHideUnavailableFeatures}
      />
    </PreferenceSection>
  );
}

export { LayoutEditorPreferences as default };
