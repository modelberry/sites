import { ContentfulTopic } from './contentful-topic'
export const topic: ContentfulTopic[] = [
  {
    sys: { id: 'exampleTopic' },
    title: 'Example topic',
    heading: 'Example topic',
    abstract: 'This is an example of a topic abstract text.',
    mediaCollection: { items: [{ sys: { id: 'demoAsset' } }] },
    actionHeading: 'Demo action',
    actionUrl: '/',
  },
  {
    sys: { id: 'imageExplainedTopic' },
    title: 'Image explained',
    heading: 'Image',
    abstract: 'Image shows the larger image.',
    icon: 'book-open',
  },
  {
    sys: { id: 'showcaseExplainedTopic' },
    title: 'Showcase explained',
    heading: 'Showcase',
    abstract:
      "Showcase sets your topics on display in a modest way. Stacked on top of each other, it's a clear line-up.",
    icon: 'book-open',
  },
  {
    sys: { id: 'headlineExplainedTopic' },
    title: 'Headline explained',
    heading: 'Headline',
    abstract:
      'Headlines are ideal page openers. Half way on a page they are useful for starting a new section.',
    icon: 'book-open',
  },
  {
    sys: { id: 'blockExplainedTopic' },
    title: 'Block explained',
    heading: 'Block',
    abstract:
      'Block gives overview to a set of topics. Stacked neatly next to each other they provide a clean display.',
    icon: 'book-open',
  },
  {
    sys: { id: 'cardExplainedTopic' },
    title: 'Card explained',
    heading: 'Card',
    abstract: 'Cards are on the table. Like cards are supposed to.',
    icon: 'book-open',
  },
  {
    sys: { id: 'galleryExplainedTopic' },
    title: 'Gallery explained',
    heading: 'Gallery',
    abstract: 'Gallery organises images on a grid.',
    icon: 'book-open',
  },
  {
    sys: { id: 'featuredExplainedTopic' },
    title: 'Featured explained',
    heading: 'Featured',
    abstract: 'Featured puts it on display. In a spacious room.',
    icon: 'book-open',
  },
  {
    sys: { id: 'quoteExplainedTopic' },
    title: 'Quote explained',
    heading: 'Quote',
    abstract: 'Quote. No need to explain that.',
    icon: 'book-open',
  },
  {
    sys: { id: 'heroExplainedTopic' },
    title: 'Hero explained',
    heading: 'Hero',
    abstract: 'Hero puts the message on top of the image.',
    icon: 'book-open',
  },
  {
    sys: { id: 'dividerExplainedTopic' },
    title: 'Divider explained',
    heading: 'Divider explained',
    abstract:
      'Diver splits in two. On longer pages the divider provides clean sections.',
    icon: 'book-open',
  },
  {
    sys: { id: 'videoExplainedTopic' },
    title: 'Video explained',
    heading: 'Video',
    abstract:
      'Video moves the image. Upload your own images to the CMS, no need for anything else.',
    icon: 'book-open',
  },
  {
    sys: { id: 'textExplainedTopic' },
    title: 'Text explained',
    heading: 'Text',
    abstract:
      'Text is free style. Have it your own, including headings, images and all that.',
    icon: 'book-open',
  },
  {
    sys: { id: 'navigationExplainedTopic' },
    title: 'Navigation explained',
    heading: 'Navigation',
    abstract:
      'Navigation is for organising links. The best examples are at the top and bottom of this page.',
    icon: 'book-open',
  },
  {
    sys: { id: 'blueOilTopic' },
    title: 'Blue oil',
    heading: 'Blue oil',
    abstract:
      'Blue is one of the three primary colours of pigments in painting and traditional colour theory, as well as in the RGB colour model.',
    mediaCollection: {
      items: [
        { sys: { id: '7nWu7juGaOSwzN45OEnRul' } },
        { sys: { id: '4k0xHcYNagfevSvJ79jiI6' } },
        { sys: { id: '6Eo0rqX76pO7lDgPv6LaID' } },
        { sys: { id: '4Fd8qDYcDEwyyXn3zcVJpi' } },
      ],
    },
    icon: 'book-open',
    poster: { sys: { id: 'demoAsset' } },
  },
  {
    sys: { id: 'pageSectionExamplesTopic' },
    title: 'Page section examples',
    heading: 'Examples',
    abstract:
      'Pages are build up out of sections. Each section has a flavour. We call them display variations.',
    icon: 'book-open',
  },
]
