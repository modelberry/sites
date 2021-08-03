// import { useState, useContext } from 'react'
// import { AdminCoreContext } from '@modelberry/admin-core'
// import { GlobalsModel } from '../../modelberry/globals/model'
// import { EmbedModel } from './model'

// export const useEmbeds = (gatsbyProps: any) => {
//   const { adminCoreState } = useContext(AdminCoreContext)

//   // Run embed codes only once
//   const [embedsDone, setEmbedsDone] = useState(false)
//   const globals: GlobalsModel = gatsbyProps.data.globals

//   // Run embed code
//   if (!embedsDone && globals.siteEmbeds && Array.isArray(globals.siteEmbeds)) {
//     const isAppInit = adminCoreState.lastModuleId === '*'
//     globals.siteEmbeds.forEach((embed: EmbedModel) => {
//       if (embed.code && embed.type === 'js-page') {
//         Function('props', embed.code.code)(gatsbyProps)
//       }
//       if (isAppInit && embed.code && embed.type === 'js-app') {
//         Function('props', embed.code.code)(gatsbyProps)
//       }
//     })
//     setEmbedsDone(true)
//   }
// }
