import './card.scss';
import {Link} from'react-router-dom';

export default function Card({item}) {
    return (
        <Link to={`/product/${item.id}`}>
        <div className="card">
                <div className="image">
                    {item?.attributes.isNew && <span>New season</span>}
                    <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes.img?.data.attributes.url} className='mainImg' alt=''/>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes.img2?.data.attributes.url} className='secondImg' alt=''/>
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="prices">
                    <h3>${item?.attributes.oldPrice}</h3>
                    <h3>${item?.attributes.price}</h3>
                </div>
        </div>
      </Link>
    )
}