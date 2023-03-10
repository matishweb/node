import { Request, Response } from "express"
import cartService from "../services/cart.service";

const addProductToCartController = async (req:Request, res: Response) => {
    const cartId = req.params.cartId;
    const {productId, quantity} = req.body;

    cartService.addProductToCartService(cartId, Number(productId), Number(quantity)).then((result)=> {
       res.status(200).send({message: 'Product added to cart successfully'});
    }).catch((error) => {
        res.status(500).send({message: 'Unable to add product to cart'});
    });
}


const deleteProductFromCartController =async (req:Request, res: Response) => {
    const cartId = req.params.cartId;
    const userId = req.params.userId;
    const {productId, quantity} = req.body;

    cartService.deleteProductFromCartModel(cartId,userId, Number(productId), Number(quantity)).then((result)=> {
       res.status(200).send({message: 'Product deleted from cart successfully'});
    }).catch((error) => {
        res.status(500).send({message: 'Unable to delete product from cart'});
    });
    
}

const cartController = {
    addProductToCartController: addProductToCartController,
    deleteProductFromCartController:deleteProductFromCartController
}

export default cartController;