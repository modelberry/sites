import { ContentfulAsset } from './contentful-asset'
import { ContentfulReference } from './contentful-reference'
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful/plain"}
 * - {@type topic}
 * - {@displayField title}
 * - {@description Topic}
 * - {@name topic}
 */
export interface ContentfulTopic {
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
   * - {@name Onderwerp titel}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Titel van het onderwerp, zonder punt aan eind}
   */
  heading?: string
  /** @modelberry
   * - {@name Onderwerp tekst}
   * - {@type Text}
   * - {@widgetId multipleLine}
   * - {@helpText Korte omschrijving van het onderwerp, sluit af met een punt}
   */
  abstract?: string
  /** @modelberry
   * - {@name Onderwerp afbeelding}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Asset}
   * - {@widgetId assetGalleryEditor}
   * - {@helpText Afbeelding bij het onderwerp}
   * - {@validations size-min1-max4}
   */
  mediaCollection?: {
    items: ContentfulAsset | ContentfulReference[]
  }
  /** @modelberry
   * - {@name Onderwerp icoon}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@helpText Icoon bij het onderwerp}
   * - {@validations in-activity-airplay-alert-circle}
   */
  icon?: string
  /** @modelberry
   * - {@name Actie titel}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  actionHeading?: string
  /** @modelberry
   * - {@name Actie icoon}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  actionIcon?: string
  /** @modelberry
   * - {@name Actie URL}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  actionUrl?: string
  /** @modelberry
   * - {@name Poster}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   * - {@validations linkMimetypeGroup-image}
   */
  poster?: ContentfulAsset | ContentfulReference
  /** @modelberry
   * - {@name Embed}
   * - {@type Text}
   * - {@widgetId multipleLine}
   * - {@helpText HTML Embed zoals een YouTube snippet}
   */
  embed?: string
}
