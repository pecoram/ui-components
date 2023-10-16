/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/** @type { import('storybook-solidjs-vite').StorybookConfig } */

import { mergeConfig } from 'vite';

const config = {
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: 'storybook-solidjs-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../../../shared/public'],
  viteFinal: async (config, { configType }) => {
    // console.log('PREVIEW VITE');
    // if (configType === 'PRODUCTION') {
    //   mergeConfig(config, {
    //     base: ''
    //     // base: process.cwd(),
    //     // publicDir: '../../shared/public'
    //   });
    // }
    // config.base = process.cwd();
    // config.base = '';
    // config.root = '';
    // config.server.fsServe = undefined;
    // console.log(config.base);
    return config;
  },
};
export default config;
