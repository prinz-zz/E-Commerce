import './cart.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem , resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

export default function Cart() {

    
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);
    
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => total =+ item.quantity * item.price);
        return total.toFixed(2);
    }

    const stripePromise = loadStripe('pk_test_51Lvaw9SGmgkEGMkt7BrfxjMGBI5WvA49JroDees9FbsilFHqALx1a6jtv3Xh0Si0XplXiSIine2jahY5w657TzqU00VM74WJwG');

    const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

    return (
        <div className="shopCart">
            <h1>Products in your cart</h1>
            {products.map((item) => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 90)}</p>
                        <div className="price">{item.quantity} x ${item.price}</div>
                    </div>
                    <DeleteIcon onClick={ () =>dispatch(removeItem(item.id))}/>
                </div>
                
            ))}
            <div className="total">
                <span>SUB TOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={ () =>dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}