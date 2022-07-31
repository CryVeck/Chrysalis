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

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { useTranslation } from "react-i18next";

const ConfirmationDialog = (props) => {
  const { t } = useTranslation();
  return (
    <Dialog
      disableEscapeKeyDown
      open={props.open}
      onClose={props.onCancel}
      fullWidth
    >
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel} color="primary">
          {props.cancelLabel || t("dialog.cancel")}
        </Button>
        <Button onClick={props.onConfirm} color="primary">
          {props.confirmLabel || t("dialog.ok")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { ConfirmationDialog as default };
