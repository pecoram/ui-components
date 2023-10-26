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
import { Text, Show, View, hexColor } from '@lightningjs/solid';
import Icon, { type IconProps } from '../Icon/Icon';
import styles from './Badge.styles';

type BadgeProps = {
  /**
   * Badge text
   */
  title: string;
  /**
   * side of the text where icon will appear on
   */
  iconAlign: string;
  /**
   * width of icon
   */
  iconWidth: number;
  /**
   * height of icon
   */
  iconHeight: number;
  /**
   * Object containing all properties supported in the [Icon component](?path=/docs/components-icon--icon)
   */
  icon: Partial<IconProps>;
};

const Badge: Component<BadgeProps> = (props: BadgeProps) => {
  return (
    <View {...props} {...styles.container}>
      <Show when={props.iconAlign === 'left'}>
        <Icon
          color={hexColor(props.icon.color)}
          icon={props.icon.icon}
          width={props.iconWidth}
          height={props.iconHeight}
        />
      </Show>
      <Text style={styles.textStyle}>{props.title}</Text>
      <Show when={props.iconAlign === 'right'}>
        <Icon
          color={hexColor(props.icon.color)}
          icon={props.icon.icon}
          width={props.iconWidth}
          height={props.iconHeight}
        />
      </Show>
    </View>
  );
};

export default Badge;
