import { parseMarkdownLinks } from './parse-markdown-links'

describe('Parse Markdown Links should', () => {
  test('parse a link only', async () => {
    const parsed = parseMarkdownLinks({
      body: '[link only](1)',
      linkMap: {},
    })
    expect(parsed).toEqual([{ ref: '1', text: 'link only', type: 'link' }])
  })

  test('parse a link without a reference', async () => {
    const parsed = parseMarkdownLinks({
      body: '[link only]',
      linkMap: {},
    })
    expect(parsed).toEqual([
      { ref: undefined, text: 'link only', type: 'link' },
    ])
  })

  test('parse a link without a reference with linkMap', async () => {
    const parsed = parseMarkdownLinks({
      body: '[link only]',
      linkMap: { 1: '/link-here' },
    })
    expect(parsed).toEqual([
      { ref: '/link-here', text: 'link only', type: 'link' },
    ])
  })

  test('parse a link without a reference with linkMap and two links', async () => {
    const parsed = parseMarkdownLinks({
      body: '[link one] [link two]',
      linkMap: { 1: '/link-here', 2: '/and-here' },
    })
    expect(parsed).toEqual([
      { ref: '/link-here', text: 'link one', type: 'link' },
      { ref: '/and-here', text: 'link two', type: 'link' },
    ])
  })

  test('parse a link without a reference with linkMap, two links and text', async () => {
    const parsed = parseMarkdownLinks({
      body: '[link one] middle [link two]',
      linkMap: { 1: '/link-here', 2: '/and-here' },
    })
    expect(parsed).toEqual([
      { ref: '/link-here', text: 'link one', type: 'link' },
      { text: 'middle', type: 'text' },
      { ref: '/and-here', text: 'link two', type: 'link' },
    ])
  })

  test('parse a link without a reference with linkMap, two links and text around', async () => {
    const parsed = parseMarkdownLinks({
      body: 'start [link one] middle [link two] end',
      linkMap: { 1: '/link-here', 2: '/and-here' },
    })
    expect(parsed).toEqual([
      { text: 'start', type: 'text' },
      { ref: '/link-here', text: 'link one', type: 'link' },
      { text: 'middle', type: 'text' },
      { ref: '/and-here', text: 'link two', type: 'link' },
      { text: 'end', type: 'text' },
    ])
  })

  test('parse text only', async () => {
    const parsed = parseMarkdownLinks({
      body: 'text only',
      linkMap: {},
    })
    expect(parsed).toEqual([{ text: 'text only', type: 'text' }])
  })

  test('parse text before a link', async () => {
    const parsed = parseMarkdownLinks({
      body: 'text before [a link](1)',
      linkMap: {},
    })
    expect(parsed).toEqual([
      { text: 'text before', type: 'text' },
      { ref: '1', text: 'a link', type: 'link' },
    ])
  })

  test('parse text after a link', async () => {
    const parsed = parseMarkdownLinks({
      body: '[a link](1) text after',
      linkMap: {},
    })
    expect(parsed).toEqual([
      { ref: '1', text: 'a link', type: 'link' },
      { text: 'text after', type: 'text' },
    ])
  })

  test('parse a mixed example', async () => {
    const linkMap = {
      1: '/home',
      2: '/somewhere',
    }
    const parsed = parseMarkdownLinks({
      body: 'Dit is [een link](1) met [twee link] en dan nog [drie link](2) en nog wat tekst. Meer links [kunnen](https://www.ok.nl) ook.',
      linkMap,
    })
    expect(parsed).toEqual([
      { type: 'text', text: 'Dit is' },
      { type: 'link', text: 'een link', ref: '/home' },
      { type: 'text', text: 'met' },
      { type: 'link', text: 'twee link', ref: '/somewhere' },
      { type: 'text', text: 'en dan nog' },
      { type: 'link', text: 'drie link', ref: '/somewhere' },
      { type: 'text', text: 'en nog wat tekst. Meer links' },
      { type: 'link', text: 'kunnen', ref: 'https://www.ok.nl' },
      { type: 'text', text: 'ook.' },
    ])
  })
})
