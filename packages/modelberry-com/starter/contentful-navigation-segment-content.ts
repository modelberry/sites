import { ContentfulNavigationSegment } from './contentful-navigation-segment'
export const navigationSegment: ContentfulNavigationSegment[] = [
  {
    sys: { id: 'sitemapNavigationSegment' },
    title: 'Sitemap segment',
    heading: 'Sitemap',
    abstract: 'This is the sitemap',
    actionsCollection: {
      items: [
        { sys: { id: 'homeNavigationAction' } },
        { sys: { id: 'modelberryNavigationAction' } },
      ],
    },
  },
  {
    sys: { id: 'demoNavigationSegment' },
    title: 'Demo segment',
    heading: 'Demo',
    abstract: 'This is the demo',
    actionsCollection: {
      items: [
        { sys: { id: 'homeNavigationAction' } },
        { sys: { id: 'modelberryNavigationAction' } },
      ],
    },
  },
]
