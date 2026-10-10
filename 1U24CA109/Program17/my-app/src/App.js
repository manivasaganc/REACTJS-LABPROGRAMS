import { useReducer } from "react";
import './App.css'

const initialState = {
  cart: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.product]
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.id
        )
      };

    case "CLEAR":
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  return (
   <div>
    <div className="container">
  <h1>Shopping Cart</h1>

  <h2>Products</h2>

  <div className="products">
    {products.map((product) => (
      <div className="product" key={product.id}>
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>

        <button
          onClick={() =>
            dispatch({
              type: "ADD",
              product: product
            })
          }
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>

  <h2>Cart</h2>

  <div className="cart">
    {state.cart.length === 0 ? (
      <p className="empty">Cart is empty</p>
    ) : (
      state.cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <p>{item.name} - ₹{item.price}</p>

          <button
            className="remove"
            onClick={() =>
              dispatch({
                type: "REMOVE",
                id: item.id
              })
            }
          >
            Remove
          </button>
        </div>
      ))
    )}
  </div>

  <button
    className="clear"
    onClick={() => dispatch({ type: "CLEAR" })}
  >
    Clear Cart
  </button>
</div>
    </div>
  );
}

export default App;