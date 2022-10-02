// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2021-2022  Keyboardio, Inc.
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

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { GlobalContext } from "@renderer/components/GlobalContext";
import { PageTitle } from "@renderer/components/PageTitle";
import { navigate } from "@renderer/routerHistory";
import openURL from "@renderer/utils/openURL";
import React from "react";

import { useTranslation } from "react-i18next";

const OnlyCustomScreen = (props) => {
  const [activeDevice] = React.useContext(GlobalContext).state.activeDevice;

  const { t } = useTranslation();

  const enableOnlyCustom = async () => {
    await activeDevice.keymap_onlyCustom(true);
    await activeDevice.defaultLayer(0);

    await navigate("/editor");
  };

  const openFeatureRequest = async () => {
    const url =
      "https://github.com/keyboardio/Chrysalis/issues/new?labels=enhancement&template=feature_request.md";
    const opener = openURL(url);
    await opener();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <PageTitle title={t("app.actionRequired")} />

      <Card
        sx={{
          margin: 4,
          maxWidth: "50%",
        }}
      >
        <CardContent>
          <Typography component="p" gutterBottom>
            {t("editor.onlyCustom.warning")}
          </Typography>
        </CardContent>
        <Divider variant="middle" />
        <CardActions>
          <Box component="span" mr={1}>
            <Button onClick={openFeatureRequest} variant="outlined">
              {t("editor.onlyCustom.openFR")}
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button onClick={enableOnlyCustom} color="primary" variant="outlined">
            {t("editor.onlyCustom.fixItButton")}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default OnlyCustomScreen;
