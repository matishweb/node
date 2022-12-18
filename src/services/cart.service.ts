import cartModel from "../models/cart.model";

const addProductToCartService = async (cartId: string, productId: number, quantity: number) => {
    return new Promise((resolve, reject) => {
        cartModel.addProductToCartModel(cartId, productId, quantity).then((result) => {
           resolve(result);
        }).catch((error) => {
           reject(error);
        });
    })
}

const deleteProductFromCartService = async (cartId: string,userId:any, productId: number, quantity: number) => {
    return new Promise((resolve, reject) => {
        cartModel.deleteProductFromCartModel(cartId,userId, productId, quantity).then((result) => {
           resolve(result);
        }).catch((error) => {
           reject(error);
        });
    })
}

const cartService = {
    addProductToCartService: addProductToCartService,
    deleteProductFromCartModel: deleteProductFromCartService
}

export default cartService;