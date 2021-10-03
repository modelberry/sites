import { ContentfulAsset } from './contentful-asset'
import { ContentfulReference } from './contentful-reference'
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful/plain"}
 * - {@type globals}
 * - {@displayField title}
 * - {@description Globals}
 * - {@name globals}
 */
export interface ContentfulGlobals {
  /** @modelberry {@ignore} */
  __typename?: string
  /** @modelberry {@ignore} */
  sys: {
    id?: string
  }
  /** @modelberry
   * - {@name Titel binnen Contentful}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Alleen gebruikt in Contentful, wordt nooit getoond op de site zelf}
   */
  title: string
  /** @modelberry
   * - {@name Site auteur}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Beschiknaar in alle secties}
   */
  siteAuthor?: string
  /** @modelberry
   * - {@name Site omschrijving}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Omschrijving van de site, gebruikt door zoek machines zoals Google}
   */
  siteDescription?: string
  /** @modelberry
   * - {@name Site titel}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Titel van de site, gebruikt door zoek machines zoals Google}
   */
  siteHeading?: string
  /** @modelberry
   * - {@name Site sleutelwoorden}
   * - {@type Array}
   * - {@itemsType Symbol}
   * - {@widgetId tagEditor}
   * - {@helpText Sleutelwoorden voor de site, gebruikt door zoek machines zoals Google}
   */
  siteKeywordsCollection?: {
    items: string[]
  }
  /** @modelberry
   * - {@name Site image}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   * - {@validations linkMimetypeGroup-image}
   */
  siteImage?: ContentfulAsset | ContentfulReference
}
