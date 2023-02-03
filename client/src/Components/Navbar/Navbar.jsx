import './navBar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const products = useSelector(state => state.cart.products);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="./images/flag.png" alt="" />
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <Link to='/products/1'>
                            Men
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='/products/1'>
                            Women
                        </Link>
                    </div>
                    <div className="item">
                        <Link to='/products/1'>
                            Children
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <Link to='/'><h1><sub>PG</sub>Store</h1></Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link to=''>
                            Homepage
                        </Link>
                    </div>
                    <div className="item">
                        <Link to=''>
                            About
                        </Link>
                    </div>
                    <div className="item">
                        <Link to=''>
                            Contact
                        </Link>
                    </div>
                    <div className="item">
                        <Link to=''>
                            Stores
                        </Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>
                        <PersonOutlineIcon/>
                        <FavoriteBorderIcon />
                        <div className="cart" onClick={()=>setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}