/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful/plain"}
 * - {@type navigationAction}
 * - {@displayField title}
 * - {@description Navigation action}
 */
export interface ContentfulNavigationAction {
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
   * - {@name Actie titel}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Naam van de actie, zonder punt aan eind}
   */
  heading?: string
  /** @modelberry
   * - {@name Actie omschrijving}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Omschrijving van de actie, voor zoekmachines}
   */
  description?: string
  /** @modelberry
   * - {@name Actie icoon}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-activity-airplay-alert-circle-17}
   */
  icon?: string
  /** @modelberry
   * - {@name Actie URL}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText De URL waar de actie naar linkt (of gebruik de paginalink)}
   */
  url?: string
}
