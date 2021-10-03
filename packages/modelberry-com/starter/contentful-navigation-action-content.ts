import { ContentfulNavigationAction } from './contentful-navigation-action'
export const navigationAction: ContentfulNavigationAction[] = [
  {
    sys: { id: 'homeNavigationAction' },
    title: 'Home',
    heading: 'Home',
    description: 'Go to homepage',
    url: '/',
  },
  {
    sys: { id: 'modelberryNavigationAction' },
    title: 'Modelberry',
    heading: 'Modelberry',
    description: 'Visit the Modelberry code repository',
    icon: 'Github',
    url: 'https://github.com/modelberry/factory',
  },
]
