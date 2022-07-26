/* chrysalis-hardware-keyboardio-atreus2 -- Chrysalis Atreus2 support
 * Copyright (C) 2019-2022  Keyboardio, Inc.
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

import { flash, flashers } from "@api/flash";
import Keymap from "./components/Keymap";

const Atreus2 = {
  info: {
    vendor: "Keyboardio",
    product: "Atreus",
    displayName: "Keyboardio Atreus",
    urls: [
      {
        name: "Homepage",
        url: "https://shop.keyboard.io/products/keyboardio-atreus",
      },
      {
        name: "Forum",
        url: "https://community.keyboard.io/",
      },
      {
        name: "Chat",
        url: "https://keyboard.io/discord-invite",
      },
    ],
  },
  usb: {
    vendorId: 0x1209,
    productId: 0x2303,
    bootloader: {
      vendorId: 0x1209,
      productId: 0x2302,
    },
  },
  keyboard: {
    rows: 4,
    columns: 12,
  },
  components: {
    keymap: Keymap,
  },

  flashSteps: (options) => {
    if (options?.factoryReset) {
      return ["factoryRestore", "bootloaderTrigger", "bootloaderWait", "flash"];
    }

    return [
      "saveEEPROM",
      "bootloaderTrigger",
      "bootloaderWait",
      "flash",
      "reconnect",
      "restoreEEPROM",
    ];
  },
  flash: async (port, filename, options) => {
    const board = {
      name: "Keyboardio Atreus",
      baud: 9600,
      productId: ["0x2302", "0x2303"],
      protocol: "avr109",
      signature: new Buffer.from([0x43, 0x41, 0x54, 0x45, 0x52, 0x49, 0x4e]),
    };
    return flash(flashers.avr109, board, port, filename, options);
  },
};

export { Atreus2 };
