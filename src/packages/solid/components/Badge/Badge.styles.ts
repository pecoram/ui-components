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

import theme from 'theme';
import { getHexColor } from '../../../../shared/utils/index'; // TODO ts path aliasing

type BadgeStyle = {
  container: {
    display: string;
    flexDirection: string;
    //alignItems: string;
    width: number;
    height: number;
    color: number;
    gap: number;
    borderRadius: number;
    border: {
      width: number;
      color: number;
    };
  };

  textStyle: {
    textAlign: string;
    color: number;
  };
};

const styles: BadgeStyle = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    //alignItems: 'center',
    gap: 10,
    width: 200,
    height: theme.typography.tag1.lineHeight + 20,
    color: getHexColor(...(theme.color.fillBrand as [string, number])),
    borderRadius: theme.radius.sm,
    border: {
      width: theme.stroke.sm,
      color: getHexColor(...(theme.color.strokeInverse as [string, number]))
    }
  },

  textStyle: {
    ...theme.typography.tag1,
    textAlign: 'center'
  }
};

export default styles;
