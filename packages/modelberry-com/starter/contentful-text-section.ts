/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful/plain"}
 * - {@type textSection}
 * - {@displayField title}
 * - {@description Text section}
 * - {@name textSection}
 */
export interface ContentfulTextSection {
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
   * - {@name Variant}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-text}
   */
  variant?: string
  /** @modelberry
   * - {@name Tekst}
   * - {@required true}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@helpText Eenvoudig opgemaakte tekstveld met kopjes en afbeeldingen}
   * - {@validations enabledMarks-bold-italic-underline richText}
   */
  text: {
    json?: any
  }
}
