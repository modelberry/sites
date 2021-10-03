import { ContentfulTopic } from './contentful-topic'
import { ContentfulReference } from './contentful-reference'
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful/plain"}
 * - {@type topicSection}
 * - {@displayField title}
 * - {@description Topic section}
 * - {@name topicSection}
 */
export interface ContentfulTopicSection {
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
   * - {@name Sectie weergave}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@helpText Hoe de sectie wordt weergegeven}
   * - {@validations in-block-card-divider}
   */
  variant?: string
  /** @modelberry
   * - {@name Sectie onderwerpen}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-topic}
   * - {@widgetId entryLinksEditor}
   * - {@helpText Eén of meerder onderwerpen die worden weergegeven in de sectie}
   */
  topicsCollection?: {
    items: (ContentfulTopic | ContentfulReference)[]
  }
  /** @modelberry
   * - {@name Hide icon}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  hideIcon?: boolean
  /** @modelberry
   * - {@name Hide media}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  hideMedia?: boolean
  /** @modelberry
   * - {@name Hide heading}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  hideHeading?: boolean
  /** @modelberry
   * - {@name Hide abstract}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  hideAbstract?: boolean
  /** @modelberry
   * - {@name Hide action}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  hideAction?: boolean
  /** @modelberry
   * - {@name Reversed order}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  reversedOrder?: boolean
  /** @modelberry
   * - {@name Sectie thema}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@helpText Kies het thema voor deze sectie}
   * - {@validations in-glacierLight-glacierDark}
   */
  theme?: string
}
