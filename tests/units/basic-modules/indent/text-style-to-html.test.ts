/**
 * @description indent - text style to html test
 * @author wangfupeng
 */

import { styleToHtml } from '../../../../packages/basic-modules/src/modules/indent/style-to-html'

describe('indent - text style to html', () => {
  it('text style to html', () => {
    const indent = '32px'
    const elem = { type: 'paragraph', indent, children: [] }
    const html = styleToHtml(elem, '<p>hello</p>')
    expect(html).toBe(`<p style="padding-left: ${indent};">hello</p>`)
  })
})
