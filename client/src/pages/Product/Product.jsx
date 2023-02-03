import { useState } from 'react';
import './product.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

export default function Product() {

    const id = useParams().id;
    const dispatch = useDispatch();
   
    const [quantity, setQuantity] = useState(1);
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
    const img = process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url;
    const img2 = process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url;
    const [selectedImage, setSelectedImage] = useState(img);
    console.log(img);
    console.log(img2);

    return (
        <div className="product">
            {loading ? <CircularProgress/> : (
            <>
            <div className="left">
                <div className="images">
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt='' onClick={(e) => setSelectedImage(img)}/>
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt='' onClick={(e) => setSelectedImage(img2)}/>
                </div>
                <div className="mainImg">
                <img src={process.env.REACT_APP_UPLOAD_URL +
                                data?.attributes?.img?.data?.attributes?.url} alt='' />
                            {/* <img src={images[selectedImage]} alt=''/> */}
                </div>
            </div>
            <div className="right">
                        <h1>{data?.attributes?.title}</h1>
                <span className='price'>${ data?.attributes?.price }</span>
                <p>{ data?.attributes?.desc }</p>
                <div className="quantity">
                    <button onClick={()=>setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                        {quantity}
                    <button onClick={()=>setQuantity(prev => prev + 1)}>+</button>
                </div>
                        <button className='add' onClick={() => dispatch(addToCart({
                            id: data.id,
                            title: data.attributes.title,
                            desc: data.attributes.desc,
                            price: data.attributes.price,
                            img: data.attributes.img.data.attributes.url,
                            quantity,
                        }))}>
                 <ShoppingCartOutlinedIcon/> Add TO CART   
                </button>
                <div className="link">
                    <div className="item"><FavoriteBorderIcon/> ADD TO WISHLIST</div>
                    <div className="item"><BalanceIcon/> ADD TO COMPARE</div>
                </div>
                <div className="info">
                    <span>Vendor : Polo</span>
                    <span>Product Type : T-Shirt</span>
                    <span>Tag : T-Shirt, Women, Top</span>
                </div>
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
                    </div>
                </>
                )
            }
        </div>
    )
}