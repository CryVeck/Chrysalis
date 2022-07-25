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

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

export const LegacyAlert = (props) => {
  const { t } = useTranslation();

  return (
    <Alert
      severity="error"
      action={
        <Button color="primary" onClick={props.migrateLegacy}>
          {t("editor.legacy.migrate")}
        </Button>
      }
      sx={{
        zIndex: "modal",
        position: "relative",
      }}
    >
      <Typography component="p">{t("editor.legacy.warning")}</Typography>
    </Alert>
  );
};
