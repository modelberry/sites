import { ContentfulNavigationSection } from './contentful-navigation-section'
import { ContentfulTextSection } from './contentful-text-section'
import { ContentfulTopicSection } from './contentful-topic-section'
import { ContentfulReference } from './contentful-reference'
import { ContentfulAsset } from './contentful-asset'
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful/plain"}
 * - {@type page}
 * - {@displayField title}
 * - {@description Page}
 * - {@name page}
 */
export interface ContentfulPage {
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
   * - {@name Pagina URL}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Laatste deel van de URL naar deze pagina. Bijvoorbeeld: www.mijnsite.nl/stel-dit-deel-hier-in}
   * - {@validations regexp-1 unique-true regexp-2}
   */
  path: string
  /** @modelberry
   * - {@name Paginasecties}
   * - {@required true}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-navigationSection-textSection}
   * - {@widgetId entryLinksEditor}
   * - {@helpText Kies de secties die met elkaar deze pagina vormen}
   */
  sectionsCollection: {
    items: (
      | ContentfulNavigationSection
      | ContentfulTextSection
      | ContentfulTopicSection
      | ContentfulReference
    )[]
  }
  /** @modelberry
   * - {@name Paginathema}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@helpText Kies het thema voor deze pagina}
   * - {@validations in-glacierLight-glacierDark}
   */
  theme?: string
  /** @modelberry
   * - {@name SEO titel}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Titel van de pagina, gebruikt door zoek machines zoals Google}
   */
  seoTitle?: string
  /** @modelberry
   * - {@name SEO omschrijving}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText Omschrijving van de pagina, gebruikt door zoek machines zoals Google}
   * - {@validations size-min0-max155}
   */
  seoDescription?: string
  /** @modelberry
   * - {@name SEO afbeelding}
   * - {@type Link}
   * - {@linkType Asset}
   * - {@widgetId assetLinkEditor}
   * - {@helpText Afbeelding bij de pagina, wordt meegegeven aan een link en weergegeven door social media}
   * - {@validations linkMimetypeGroup-image}
   */
  seoImage?: ContentfulAsset | ContentfulReference
  /** @modelberry
   * - {@name Seo keywords}
   * - {@type Array}
   * - {@itemsType Symbol}
   * - {@widgetId tagEditor}
   */
  seoKeywordsCollection?: {
    items: string[]
  }
}
