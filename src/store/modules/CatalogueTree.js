const state = {
  catalogues: [],//目录树结构
}
/*
catalogues=[
{
id:1,//标识
name:hahhah
}
]
*/

// getters
const getters = {
  getCatalogues: (state, message) => {
    const ergodic = function (list) {
      list.forEach(function (row) {
        if (row.name == message) {
          return row;
        } else {
          if (Object.prototype.hasOwnProperty.call(row, 'children')) {
            ergodic(row.children)
          }
        }
      })
    }
    if (message === "" || message === undefined) {
      return state.catalogues;
    } else {
      ergodic(state.catalogues);
      return false;
    }
  }
}

// actions
const actions = {
  // checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.items]
  //   commit('setCheckoutStatus', null)
  //   // empty cart
  //   commit('setCartItems', { items: [] })
  //   shop.buyProducts(
  //     products,
  //     () => commit('setCheckoutStatus', 'successful'),
  //     () => {
  //       commit('setCheckoutStatus', 'failed')
  //       // rollback to the cart saved before sending the request
  //       commit('setCartItems', { items: savedCartItems })
  //     }
  //   )
  // },

  // addProductToCart ({ state, commit }, product) {
  //   commit('setCheckoutStatus', null)
  //   if (product.inventory > 0) {
  //     const cartItem = state.items.find(item => item.id === product.id)
  //     if (!cartItem) {
  //       commit('pushProductToCart', { id: product.id })
  //     } else {
  //       commit('incrementItemQuantity', cartItem)
  //     }
  //     // remove 1 item from stock
  //     commit('products/decrementProductInventory', { id: product.id }, { root: true })
  //   }
  // }
}
// mutations
const mutations = {
  //目录赋值
  SetCatalogues: (state, catalogues) => {
    state.catalogues = [];
    state.catalogues = catalogues;
  },
  //目录增加
  AddCatalogues: (state, item, parent) => {
    const ergodic = function (list) {
      list.forEach(function (row) {
        if (row.id == parent.id) {
          if (!Object.prototype.hasOwnProperty.call(row, 'children')) {
            row.children = [];
          }
          row.children.forEach(function (list) {
            if (list.id == item.id) {
              return false;
            } else {
              row.children.push(item);
              return true;
            }
          })
        } else {
          if (Object.prototype.hasOwnProperty.call(row, 'children')) {
            ergodic(row.children)
          }
        }
      })
    }
    ergodic(state.catalogues);
    return false;
  },
  DeleteCatalogues(state, item) {
    const ergodic = function (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id == item.id) {
          list.splice(i, 1);
          return true;
        } else {
          if (Object.prototype.hasOwnProperty.call(list[i], 'children')) {
            ergodic(list[i].children)
          }
        }
      }
    }
    ergodic(state.catalogues);
    return false;
  },

  UpdateCatalogues(state, item) {
    const ergodic = function (list) {

      for (let i = 0; i < list.length; i++) {
        if (list[i].id == item.id) {
          list[i] = item;
          return true;
        } else {
          if (Object.prototype.hasOwnProperty.call(list[i], 'children')) {
            ergodic(list[i].children)
          }
        }
      }
    }
    ergodic(state.catalogues)
    return false;
  },
  SearchCatalogues(state, message) {
    const ergodic = function (list) {
      list.forEach(function (row) {
        if (row.name == message) {
          return row;
        } else {
          if (Object.prototype.hasOwnProperty.call(row, 'children')) {
            ergodic(row.children)
          }
        }
      })
    }
    ergodic(state.catalogues);
    return false;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}