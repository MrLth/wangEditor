/**
 * @description justify menu entry
 * @author wangfupeng
 */

import JustifyLeftMenu from './JustifyLeftMenu'
import JustifyRightMenu from './JustifyRightMenu'
import JustifyCenterMenu from './JustifyCenterMenu'

export const justifyLeftMenuConf = {
  key: 'justifyLeft',
  factory() {
    return new JustifyLeftMenu()
  },
}

export const justifyRightMenuConf = {
  key: 'justifyRight',
  factory() {
    return new JustifyRightMenu()
  },
}

export const justifyCenterMenuConf = {
  key: 'justifyCenter',
  factory() {
    return new JustifyCenterMenu()
  },
}
