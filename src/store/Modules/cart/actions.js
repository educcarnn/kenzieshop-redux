import { AddToCart, removeItem} from "./types";

export const add = (product) => ({type: AddToCart, product});
export const remove = (id) => ({type: removeItem, id})

