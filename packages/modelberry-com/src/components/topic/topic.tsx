import { Div } from '@modelberry/any-element/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulTopic } from './contentful-topic'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'
import { TopicContent } from './topic-content'
import { TopicMedia } from './topic-media'

export type Topic = {
  contentfulTopic?: ContentfulTopic
}
export type TopicProps = ComponentProps<
  Topic,
  TopicSectionVariant,
  TopicSectionOptions
>['div']

const topicStyle: StyleObject = {
  display: 'grid',
  gridGap: 16,
}

const topicRowStyle: StyleObject = {
  // Add more logic in grid template areas.
  // e.g. If media doesn't exist change template areas and - rows.
  gridTemplateAreas: `"media" "content"`,
  // gridTemplateAreas: `"content"`,
  gridTemplateRows: 'auto 1fr',
}

const topicColumnStyle: StyleObject = {
  // Add more logic in grid template areas.
  // e.g. If media doesn't exist change template areas and - rows.
  gridTemplateAreas: `"media content"`,
  // gridTemplateAreas: `"media"`,
  // gridTemplateAreas: `"content"`,
  gridTemplateColumns: 'minmax(0, 50%) minmax(0, 50%)',
}

const styleMap: StyleMap<TopicSectionVariant> = {
  block: [topicStyle, topicRowStyle],
  card: {
    ...topicStyle,
    ...topicRowStyle,
    border: '1px solid transparent',
    borderColor: 'var(--colors-grey)',
    color: 'var(--colors-grey)',
    borderRadius: 4,
    boxShadow: '0 0 16px',
    padding: 16,
    textDecoration: 'none',
    transition: 'transform .25s ease',
    ':hover': {
      transform: 'translate3d(0, -4px, 0)',
    },
  },
  divider: {
    margin: '1rem 0',
    color: 'inherit',
    backgroundColor: 'grey',
    border: 0,
    opacity: 0.25,
    height: 1,
  },
  featured: {
    ...topicStyle,
    ...topicColumnStyle,
    ':nth-of-type(odd)': {
      gridTemplateAreas: `"content media"`,
    },
  },
  gallery: {},
  headline: {
    ...topicStyle,
    justifyContent: 'center',
    textAlign: 'center',
  },
  hero: {
    position: 'relative',
  },
  image: {},
  quote: {},
  showcase: {
    ...topicStyle,
  },
  video: topicStyle,
}

const reversedOrderOptionStyle = {}

const hideMediaOptionStyle = {}

export const topicStyleFactory: StyleFactory<
  TopicSectionVariant,
  TopicSectionOptions
> = (args) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([
    baseStyle,
    args.options?.reversedOrder && reversedOrderOptionStyle,
    args.options?.hideMedia && hideMediaOptionStyle,
  ])
}

export const Topic = ({ model, options, variant, ...props }: TopicProps) => {
  const css = topicStyleFactory({
    options,
    variant,
  })
  model = model || {}
  return (
    <Div css={css} {...props}>
      <TopicMedia
        variant={variant}
        model={{
          contentfulAssets: model.contentfulTopic?.mediaCollection?.items,
          contentfulEmbed: model.contentfulTopic?.mediaEmbed,
          contentfulPosterAsset: model.contentfulTopic?.poster,
        }}
      />
      <TopicContent
        variant={variant}
        model={{
          contentfulActions: model.contentfulTopic?.actionsCollection?.items,
          headingString: model.contentfulTopic?.heading,
          abstractString: model.contentfulTopic?.abstract,
        }}
      />
    </Div>
  )
}
