import { useSelector } from "react-redux";
import { useDispatch, } from "react-redux";
import { remove } from "../../store/Modules/cart/actions";
import { useHistory } from "react-router-dom";
import { DivHeader } from "./style";
import { UlItens } from "./style";

function CartBuy(){
    const cartItems = useSelector(({cart}) => cart);

    const dispatch = useDispatch()
    const itemsCart = (cartItems) => {
      return (
        <li key={cartItems.id}>
          <span>{cartItems.name}</span>
          <span>{cartItems.price.toFixed(2)}</span>
          <img src={cartItems.image} alt={cartItems.image}></img>
          <button onClick={() => dispatch(remove(cartItems.id))}>Remover carrinho</button>       
        </li>
      );
    };

    let history = useHistory()

    function handleClick() {
      history.push("/");
    }

    return (
      <div>
        <DivHeader>
          <h2>Kenzie Shop</h2>
          <button onClick={handleClick}>Produtos</button>
        </DivHeader>
        <div>
        <UlItens>    
            {cartItems.map(itemsCart)}
        </UlItens>
        </div>
      
      </div>
        
    )
}
export default CartBuy