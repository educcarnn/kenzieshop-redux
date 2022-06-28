import { useSelector } from "react-redux";
import { useDispatch, } from "react-redux";
import { remove } from "../../store/Modules/cart/actions";

function CartBuy(){
    const cartItems = useSelector(({cart}) => cart);

    const dispatch = useDispatch()
    const itemsCart = (cartItems) => {
      return (
        <li key={cartItems.id}>
          <span>{cartItems.name}</span>
          <span>{cartItems.price}</span>
          <img src={cartItems.image} alt={cartItems.image}></img>
          <button onClick={() => dispatch(remove(cartItems.id))}> Remover carrinho</button>       
        </li>
      );
    };

    return (
        <ul>
            {cartItems.map(itemsCart)}
        </ul>
    )
}
export default CartBuy