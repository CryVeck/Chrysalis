/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2020-2022  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */

import addCategories from "../addCategories";

const mousekeys = addCategories(
  ["mousekeys"],
  [
    // Mouse movement
    {
      code: 20481,
      label: {
        hint: "Mouse",
        base: "Up",
      },
    },
    {
      code: 20482,
      label: {
        hint: "Mouse",
        base: "Down",
      },
    },
    {
      code: 20484,
      label: {
        hint: "Mouse",
        base: "Left",
      },
    },
    {
      code: 20488,
      label: {
        hint: "Mouse",
        base: "Right",
      },
    },

    // Mouse wheel
    {
      code: 20497,
      label: {
        hint: {
          full: "Mouse Wheel",
          "1u": "M.Whl",
        },
        base: "Up",
      },
    },
    {
      code: 20498,
      label: {
        hint: {
          full: "Mouse Wheel",
          "1u": "M.Whl",
        },
        base: "Down",
      },
    },
    {
      code: 20500,
      label: {
        hint: {
          full: "Mouse Wheel",
          "1u": "M.Whl",
        },
        base: "Left",
      },
    },
    {
      code: 20504,
      label: {
        hint: {
          full: "Mouse Wheel",
          "1u": "M.Whl",
        },
        base: "Right",
      },
    },

    // Mouse buttons
    {
      code: 20545,
      label: {
        hint: {
          full: "Mouse Button",
          "1u": "M.Btn",
        },
        base: "Left",
      },
    },
    {
      code: 20546,
      label: {
        hint: {
          full: "Mouse Button",
          "1u": "M.Btn",
        },
        base: "Right",
      },
    },
    {
      code: 20548,
      label: {
        hint: {
          full: "Mouse Button",
          "1u": "M.Btn",
        },
        base: "Middle",
      },
    },
    {
      code: 20552,
      label: {
        hint: {
          full: "Mouse Button",
          "1u": "M.Btn",
        },
        base: "Back",
      },
    },
    {
      code: 20560,
      label: {
        hint: {
          full: "Mouse Button",
          "1u": "M.Btn",
        },
        base: "Forward",
      },
    },

    // Mouse warp
    {
      code: 20576,
      label: {
        hint: {
          full: "Mouse Warp",
          "1u": "Warp",
        },
        base: "End",
      },
    },
    {
      code: 20513,
      label: {
        hint: {
          full: "Mouse Warp",
          "1u": "Warp",
        },
        base: {
          full: "North",
          "1u": "North",
        },
      },
    },
    {
      code: 20514,
      label: {
        hint: {
          full: "Mouse Warp",
          "1u": "Warp",
        },
        base: {
          full: "South",
          "1u": "South",
        },
      },
    },
    {
      code: 20515,
      label: {
        hint: {
          full: "Mouse Warp",
          "1u": "Warp",
        },
        base: {
          full: "Zoom",
          "1u": "Zoom",
        },
      },
    },
    {
      code: 20516,
      label: {
        hint: {
          full: "Mouse Warp",
          "1u": "Warp",
        },
        base: {
          full: "West",
          "1u": "West",
        },
      },
    },
    {
      code: 20517,
      label: {
        hint: {
          full: "Mouse Warp",
          "1u": "Warp",
        },
        base: {
          full: "North-West",
          "1u": "NW",
        },
      },
    },
    {
      code: 20518,
      label: {
        hint: {
          full: "Mouse Warp",
          "1u": "Warp",
        },
        base: {
          full: "South-West",
          "1u": "SW",
        },
      },
    },
    {
      code: 20520,
      label: {
        hint: {
          full: "Mouse Warp",
          "1u": "Warp",
        },
        base: {
          full: "East",
          "1u": "East",
        },
      },
    },
    {
      code: 20521,
      label: {
        hint: {
          full: "Mouse Warp",
          "1u": "Warp",
        },
        base: {
          full: "North-East",
          "1u": "NE",
        },
      },
    },
    {
      code: 20522,
      label: {
        hint: {
          full: "Mouse Warp",
          "1u": "Warp",
        },
        base: {
          full: "South-East",
          "1u": "SE",
        },
      },
    },
  ]
);

export { mousekeys };
