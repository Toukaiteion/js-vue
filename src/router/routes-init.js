import store from '../store'
export const initMenu = (router, menu) => {
  if (menu.length === 0) {
    return
  }
  let menus = formatRoutes(router, menu)
  menus.forEach(item => {
    router.addRoute(item)
  })
  store.commit('setMenu', menu)
}
export const formatRoutes = (router, aMenu) => {
  const aRouter = []
  aMenu.forEach(oMenu => {
    const {
      url,
      menuName,
      component,
      subMenu
    } = oMenu
    if (!validatenull(component)) {
      const oRouter = {
        path: url,
        component: () => import('@/components/' + component + '.vue'),
        name: menuName
      }
      if (!validatenull(subMenu)) {
        formatRoutes(router, subMenu).forEach(item => {
          aRouter.push(item)
        })
      } else {
        aRouter.push(oRouter)
      }
    }
  })
  return aRouter
}
export const validatenull = (ob) => {
  return ob === null || ob === '' || ob === undefined
}
