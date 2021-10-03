import { ContentfulNavigationAction } from './contentful-navigation-action'
import { ContentfulReference } from './contentful-reference'
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful/plain"}
 * - {@type navigationSegment}
 * - {@displayField title}
 * - {@description Navigation segment}
 * - {@name navigationSegment}
 */
export interface ContentfulNavigationSegment {
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
   * - {@name Navigatiesegment titel}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText De naam van dit navigatiesegment. Alleen nodig bij meerdere segmenten.}
   */
  heading?: string
  /** @modelberry
   * - {@name Segment tekst}
   * - {@type Text}
   * - {@widgetId multipleLine}
   * - {@helpText Tekst voor dit menu segment}
   */
  abstract?: string
  /** @modelberry
   * - {@name Acties voor dit segment}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-action}
   * - {@widgetId entryLinksEditor}
   * - {@helpText De pagina's in dit navigatie segment.}
   */
  actionsCollection?: {
    items: (ContentfulNavigationAction | ContentfulReference)[]
  }
}
