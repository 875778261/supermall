import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
export default {
    /* [ADD_COUNTER](state, payLoad) {
        payLoad.count+=1
    },
    [ADD_TO_CART](state, payLoad) {
        state.cartList.push(payLoad)
        payLoad.count = 1
        payLoad.checked = true
    } */

    /* addToCart(context, payLoad) {
         let oldProduct = null
         for (let item of context.state.cartList) {
             if (item.iid === payLoad.iid) {
                 oldProduct = item
             }
         }*/
    /* addCart(state, payLoad) {
        let oldProduct = state.cartList.find(item => item.iid === payLoad.iid)

        if (oldProduct) {
            oldProduct.count += 1
        } else {
            payLoad.count = 1
            payLoad.checked = true
            state.cartList.push(payLoad)
        }
    }, */
    addCart(state, payLoad) {
        state.cartList.push(payLoad)
    },
    addCounter(state, payLoad) {
        payLoad.count += 1
    }
}