import { Link } from 'react-router-dom';
import './categories.scss';

export default function Categories() {
    return (
        <div className="categories">
            <div className="cols">
                <div className="row">
                    <img src='./images/1.jpg' alt="" />
                    <button><Link to='/products/3'>Sale</Link> </button>
                </div>
                <div className="row">
                <img src='./images/2.jpg' alt="" />
                    <button><Link>Women</Link> </button>
                </div>
            </div>
            <div className="cols">
                <div className="row">
                <img src='./images/3.jpg' alt="" />
                    <button><Link>New Season</Link> </button>
            </div>
            </div>
            <div className="cols cols-large">
                <div className="row">
                    <div className="cols">
                        <div className="row">
                        <img src='./images/4.jpeg' alt="" />
                        <button><Link>Men</Link> </button>
                        </div>
                    </div>
                    <div className="cols">
                        <div className="row">
                        <img src='./images/5.jpg' alt="" />
                        <button><Link>Sports</Link> </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src='./images/6.jpg' alt="" />
                    <button><Link>Accessories</Link> </button></div>
            </div>
        </div>
    )
}