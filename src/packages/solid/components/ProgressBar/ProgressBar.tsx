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
import { View, hexColor } from '@lightningjs/solid';
import styles from './ProgressBar.styles';

type ProgressBarProps = {
  animationSettings: object;
  borderRadius: number;
  /**
   * color of the backdrop bar, representing the total progress
   */
  color: number;
  /**
   * a numeric value of the current progress represented as a decimal between 0 and 1
   */
  progress: number;
  /**
   * color of the overlay bar, representing the current progress
   */
  progressColor: number;
  /**
   * total width of the component
   */
  width: number;
};

const ProgressBar: Component<ProgressBarProps> = (props: ProgressBarProps) => {
  return (
    <View style={styles.container} {...props} color={hexColor(props.color)}>
      <View
        style={styles.progressBar}
        animate
        animationSettings={props.animationSettings}
        width={props.width * props.progress}
        borderRadius={props.borderRadius}
        color={hexColor(props.progressColor)}
      />
    </View>
  );
};

export default ProgressBar;
