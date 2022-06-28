import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom";

function Header(){
    let history = useHistory();

    function handleClick() {
      history.push("/cart");
    }

    const carts = useSelector(({cart}) => cart);

    return (
        <div>
                <h2>Kenzie Shop</h2>
                 <span>{carts.length}</span>
                <button onClick={handleClick}>Ir para carrinho</button>
        </div>
    
    )
}
export default Header