import { ADD_COUNT, ADD_TO_CART } from "./mutation-types";

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = null;
            for (let item of context.state.cartList) {
                if (item.iid === payload.iid) {
                    oldProduct = item;
                }
            }
            /* let oldProduct = state.cartList.find((item) => {
                return item.iid === payload.iid;
            }) */
            if (oldProduct) {
                // oldProduct.count += 1;
                this.commit(ADD_COUNT, oldProduct);
                resolve('已添加到购物车+1');

            } else {
                payload.count = 1;
                // context.state.cartList.push(payload);
                context.commit(ADD_TO_CART, payload)
                resolve('添加了新的商品');
            }
        })
    }
}