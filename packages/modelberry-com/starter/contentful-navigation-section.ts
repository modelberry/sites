import { ContentfulAsset } from './contentful-asset'
import { ContentfulReference } from './contentful-reference'
import { ContentfulNavigationAction } from './contentful-navigation-action'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful/plain"}
 * - {@type navigationSection}
 * - {@displayField title}
 * - {@description Navigation section}
 * - {@name navigationSection}
 */
export interface ContentfulNavigationSection {
  /** @modelberry {@ignore} */
  __typename?: string
  /** @modelberry {@ignore} */
  sys: {
    id?: string
  }
  /** @modelberry
   * - {@name Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title?: string
  /** @modelberry
   * - {@name Logo}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   */
  logo?: ContentfulAsset | ContentfulReference
  /** @modelberry
   * - {@name Logo action}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-action}
   */
  logoAction?: ContentfulNavigationAction | ContentfulReference
  /** @modelberry
   * - {@name Header}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-navigationSegment}
   * - {@widgetId entryLinksEditor}
   */
  headerCollection?: {
    items: (ContentfulNavigationSegment | ContentfulReference)[]
  }
  /** @modelberry
   * - {@name Footer}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-navigationSegment}
   * - {@widgetId entryLinksEditor}
   */
  footerCollection?: {
    items: (ContentfulNavigationSegment | ContentfulReference)[]
  }
  /** @modelberry
   * - {@name Information}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-navigationSegment}
   * - {@widgetId entryLinksEditor}
   */
  informationCollection?: {
    items: (ContentfulNavigationSegment | ContentfulReference)[]
  }
  /** @modelberry
   * - {@name Sitemap}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-navigationSegment}
   * - {@widgetId entryLinksEditor}
   */
  sitemapCollection?: {
    items: (ContentfulNavigationSegment | ContentfulReference)[]
  }
  /** @modelberry
   * - {@name Social}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-navigationSegment}
   */
  social?: ContentfulNavigationSegment | ContentfulReference
  /** @modelberry
   * - {@name Actions}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-navigationSegment}
   */
  actions?: ContentfulNavigationSegment | ContentfulReference
  /** @modelberry
   * - {@name Legal}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-navigationSegment}
   */
  legal?: ContentfulNavigationSegment | ContentfulReference
}
