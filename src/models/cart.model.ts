import { Connect, Query } from "../configs/mysql";

const addProductToCartModel = async (cartId: string, productId: number, quantity: number) => {
    const query = `insert into cart (cart_id, product_id, quantity) values('${cartId}', ${productId}, ${quantity});`;
    return new Promise((resolve, reject) => {
        Connect().then((connection) => {
            Query(connection, query).then((result) => {
              resolve(result);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
          }).catch((error) => {
             reject(error);
          })
    });
}

const deleteProductFromCartModel = async (cartId: string, userId: any,productId: number, quantity: number) => {
    const query = `delete from cart where cart_id="${cartId}" and product_id=${productId};`;
    return new Promise((resolve, reject) => {
        Connect().then((connection) => {
            Query(connection, query).then((result) => {
              resolve(result);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
          }).catch((error) => {
             reject(error);
          })
    });
}

const cartModel = {
    addProductToCartModel: addProductToCartModel,
    deleteProductFromCartModel: deleteProductFromCartModel
}

export default cartModel;