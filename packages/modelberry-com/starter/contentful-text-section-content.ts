import { ContentfulTextSection } from './contentful-text-section'
export const textSection: ContentfulTextSection[] = [
  {
    sys: { id: 'testTextSection' },
    title: 'Test text section',
    variant: 'text',
    text: {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              { data: {}, marks: [], value: 'Heading 1', nodeType: 'text' },
            ],
            nodeType: 'heading-1',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Body text with some settings. This is ',
                nodeType: 'text',
              },
              {
                data: {},
                marks: [{ type: 'bold' }],
                value: 'bold text',
                nodeType: 'text',
              },
              { data: {}, marks: [], value: '. This is ', nodeType: 'text' },
              {
                data: {},
                marks: [{ type: 'italic' }],
                value: 'italic',
                nodeType: 'text',
              },
              { data: {}, marks: [], value: ". Here's an ", nodeType: 'text' },
              {
                data: {},
                marks: [{ type: 'underline' }],
                value: 'underlined piece',
                nodeType: 'text',
              },
              { data: {}, marks: [], value: '. This is a ', nodeType: 'text' },
              {
                data: {},
                marks: [{ type: 'code' }],
                value: 'code block',
                nodeType: 'text',
              },
              { data: {}, marks: [], value: '.', nodeType: 'text' },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      { data: {}, marks: [], value: '', nodeType: 'text' },
                      {
                        data: { uri: 'https://www.wheelroom.io' },
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'url to www.wheelroom.io',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'hyperlink',
                      },
                      { data: {}, marks: [], value: '', nodeType: 'text' },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      { data: {}, marks: [], value: '', nodeType: 'text' },
                      {
                        data: {
                          target: {
                            sys: {
                              id: 'headlineExamplesSection',
                              type: 'Link',
                              linkType: 'Entry',
                            },
                          },
                        },
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'page link to examples',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'entry-hyperlink',
                      },
                      { data: {}, marks: [], value: '', nodeType: 'text' },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      { data: {}, marks: [], value: '', nodeType: 'text' },
                      {
                        data: {
                          target: {
                            sys: {
                              id: 'demoAsset',
                              type: 'Link',
                              linkType: 'Asset',
                            },
                          },
                        },
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'link to wheel room logo',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'asset-hyperlink',
                      },
                      { data: {}, marks: [], value: '', nodeType: 'text' },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
            ],
            nodeType: 'unordered-list',
          },
          {
            data: {},
            content: [
              { data: {}, marks: [], value: 'Heading 2', nodeType: 'text' },
            ],
            nodeType: 'heading-2',
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Body text nr 1',
                        nodeType: 'text',
                      },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Body text nr 2',
                        nodeType: 'text',
                      },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Body text nr 3',
                        nodeType: 'text',
                      },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
            ],
            nodeType: 'ordered-list',
          },
          {
            data: {},
            content: [
              { data: {}, marks: [], value: 'Heading 3', nodeType: 'text' },
            ],
            nodeType: 'heading-3',
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Body text quote',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'blockquote',
          },
          {
            data: {},
            content: [
              { data: {}, marks: [], value: 'Heading 4', nodeType: 'text' },
            ],
            nodeType: 'heading-4',
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Body text with some settings. This is ',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [{ type: 'bold' }],
                        value: 'bold text',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [],
                        value: '. This is ',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [{ type: 'italic' }],
                        value: 'italic',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [],
                        value: ". Here's an ",
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [{ type: 'underline' }],
                        value: 'underlined piece',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [],
                        value: '. This is a ',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [{ type: 'code' }],
                        value: 'code block',
                        nodeType: 'text',
                      },
                      { data: {}, marks: [], value: '.', nodeType: 'text' },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
            ],
            nodeType: 'unordered-list',
          },
          { data: {}, content: [], nodeType: 'hr' },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Body text after the line',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              { data: {}, marks: [], value: 'Heading 5', nodeType: 'text' },
            ],
            nodeType: 'heading-5',
          },
          {
            data: {},
            content: [
              { data: {}, marks: [], value: 'Body text', nodeType: 'text' },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              { data: {}, marks: [], value: 'Heading 6', nodeType: 'text' },
            ],
            nodeType: 'heading-6',
          },
          {
            data: {},
            content: [
              { data: {}, marks: [], value: 'Body text', nodeType: 'text' },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {
              target: {
                sys: {
                  id: 'headlineExamplesSection',
                  type: 'Link',
                  linkType: 'Entry',
                },
              },
            },
            content: [],
            nodeType: 'embedded-entry-block',
          },
          {
            data: {},
            content: [
              { data: {}, marks: [], value: 'Body text', nodeType: 'text' },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'This line has a topic section ',
                nodeType: 'text',
              },
              {
                data: {
                  target: {
                    sys: {
                      id: 'headlineExamplesSection',
                      type: 'Link',
                      linkType: 'Entry',
                    },
                  },
                },
                content: [],
                nodeType: 'embedded-entry-inline',
              },
              {
                data: {},
                marks: [],
                value: ', in the line.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              { data: {}, marks: [], value: 'Body text', nodeType: 'text' },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {
              target: {
                sys: { id: 'demoAsset', type: 'Link', linkType: 'Asset' },
              },
            },
            content: [],
            nodeType: 'embedded-asset-block',
          },
          {
            data: {},
            content: [{ data: {}, marks: [], value: '', nodeType: 'text' }],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
    },
  },
]
