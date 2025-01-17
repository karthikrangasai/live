#!/usr/bin/env node
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const {spawnSync} = require('child_process');
const fs = require('fs');

switch (process.platform) {
  case 'darwin':
  case 'linux':
    try {
      const result = spawnSync(
        'python3 -m venv ./venv \
            && source ./venv/bin/activate \
            && pip install --upgrade pip \
            && pip install -r requirements.txt \
            && python -W ignore make_models.py',
        {
          shell: true,
          cwd: './models/',
        },
      );

      // Delete error log file if process returned with exit code 0, which
      // means the models were created successfully.
      if (result.status !== 0) {
        fs.writeFileSync('./models/error.log', result.stderr.toString());
      }
    } catch (error) {
      fs.writeFileSync('./models/error.log', error.toString());
    }
    break;
  case 'win32':
    // TODO: Implement
    break;
}
