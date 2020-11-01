import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    /* addCart(context, payLoad) {
         let oldProduct = null
         for (let item of context.state.cartList) {
             if (item.iid === payLoad.iid) {
                 oldProduct = item
             }
         }
        let oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)
        
        if (oldProduct) {
            context.commit(ADD_COUNTER, oldProduct)
        } else {
            context.commit(ADD_TO_CART, payLoad)
        }
    } */

    /* addToCart({state, commit}, info) {
        return new Promise((resolve) => {
            // 1.查看该商品是否已经添加到cartList中
            const oldInfo = state.cartList.find(item => item.iid === info.iid)

            // 2.如果oldInfo存在, 那么原来的数量加1
            if (oldInfo) {
                const index = state.cartList.indexOf(oldInfo)
                commit(types.INCREMENT_COUNT, index)
            } else {
                info.count = 1
                info.checked = true
                commit(types.ADD_TO_CART, info)
            }

            resolve() */

    addCart(context, payLoad) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)

            if (oldProduct) {
                /* oldProduct.count += 1 */
                context.commit('addCounter', oldProduct)
                resolve('数量+1')
            } else {
                payLoad.count = 1
                payLoad.checked = true
                /* ccntext.state.cartList.push(payLoad) */
                context.commit('addCart', payLoad)
                resolve('成功添加购物车')
            }
        })
    }
}