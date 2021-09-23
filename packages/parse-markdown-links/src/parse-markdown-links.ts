export interface ParseMarkdownLinks {
  body: string
  linkMap: Record<string, string>
}

export type Fragment = {
  /** The fragment is either a piece of text or a link */
  type: 'link' | 'text'
  /** The text of the fragment, either link or text */
  text: string
  /** For links, ref contains the link reference as in [text](ref) */
  ref?: string
}

export const parseMarkdownLinks = ({ linkMap, body }: ParseMarkdownLinks) => {
  const fragments: Fragment[] = []
  const matches = body.matchAll(
    /([^[]*)(\[([^[\]]*)\])*(\(([^()]*)\))*([^[]*)/g
  )

  // before: match[1],
  // linkText: match[3],
  // linkRef: match[5],
  // after: match[6],

  let lastAfter = ''
  let linkSerialNr = 0
  const matchArray = Array.from(matches)
  const linkArray = Object.values(linkMap)
  matchArray.forEach((match, index) => {
    const text = (lastAfter + match[1]).trim()
    if (text) {
      fragments.push({
        type: 'text',
        text,
      })
    }
    if (match[3]) {
      let ref = match[5]
      if (linkMap[ref]) {
        // Use looked up ref
        ref = linkMap[ref]
      } else if (!ref && linkArray[linkSerialNr]) {
        // Use ordered links if ref is not defined
        ref = linkArray[linkSerialNr]
      }
      fragments.push({
        type: 'link',
        text: match[3].trim(),
        ref,
      })
      linkSerialNr++
    }
    lastAfter = match[6].trim()
    // Push trailing text if we have that
    if (lastAfter && index + 1 === matchArray.length) {
      fragments.push({
        type: 'text',
        text: lastAfter,
      })
    }
  })
  return fragments
}
