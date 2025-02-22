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

import type { Component } from 'solid-js';
import { View } from '@lightningjs/solid';
import styles from './Icon.styles';

type IconProps = {
  /**
   * icon color (can only be applied on png icons)
   */
  color: number;
  /* 
   * when `true`, icon width and height will not dynamically resize to the final texture's `finalW` and `finalH` properties
  fixed?: boolean; */

  /**
   * path to image or inline SVG XML
   */
  icon?: string;
};

const Icon: Component<IconProps> = (props: IconProps) => {
  return (
    <View
      {...props}
      // TODO, wait to see if fixed is needed
      src={props.icon}
      y={10}
      x={10}
      style={styles.container}
    ></View>
  );
};

export default Icon;
