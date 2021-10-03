import { ContentfulNavigationSection } from './contentful-navigation-section'
export const navigationSection: ContentfulNavigationSection[] = [
  {
    sys: { id: 'headerNavigationSection' },
    title: 'Header',
    logo: { sys: { id: 'demoAsset' } },
    logoAction: { sys: { id: 'homeNavigationAction' } },
    headerCollection: { items: [{ sys: { id: 'demoNavigationSegment' } }] },
    social: { sys: { id: 'demoNavigationSegment' } },
    actions: { sys: { id: 'demoNavigationSegment' } },
  },
  {
    sys: { id: 'footerNavigationSection' },
    title: 'Footer',
    logo: { sys: { id: 'demoAsset' } },
    logoAction: { sys: { id: 'homeNavigationAction' } },
    footerCollection: { items: [{ sys: { id: 'demoNavigationSegment' } }] },
    social: { sys: { id: 'demoNavigationSegment' } },
    actions: { sys: { id: 'demoNavigationSegment' } },
    legal: { sys: { id: 'demoNavigationSegment' } },
    informationCollection: {
      items: [{ sys: { id: 'demoNavigationSegment' } }],
    },
    sitemapCollection: {
      items: [
        { sys: { id: 'demoNavigationSegment' } },
        { sys: { id: 'sitemapNavigationSegment' } },
      ],
    },
  },
]
