import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './list.scss';
import CircularProgress from '@mui/material/CircularProgress';

export default function List({catId, maxPrice, sort, subCats}) {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}`);
    //&sort=price:${sort} thorwing errors
    return (
        <div className="list">
            {loading ? <CircularProgress className="progress"/> : data.map((item) => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}