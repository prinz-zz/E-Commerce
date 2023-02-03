import './products.scss';
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/List/List";
import useFetch from '../../hooks/useFetch';


export default function Products() {

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxprice] = useState(1000);
    const [sort, setSort] = useState(null);
    const [selectedSubCat, setSelectedSubCat] = useState([]);

    const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
                              
    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setSelectedSubCat(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter((item) => item !== value));
    }
    console.log(selectedSubCat, error);
    
    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product categories</h2>
                    {data.map((item)=> 
                    <div key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                            <label htmlFor={item.id}>{ item.attributes.title }</label>
                    </div>
                    )}
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e)=>setMaxprice(e.target.value) } />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value='asc' name="price" onChange={(e)=>setSort('asc')}/>
                        <label htmlFor="lowerPrice">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort('desc')}/>
                        <label htmlFor="highPrice">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            
            <div className="right">
                <img className='banner' src="../images/3.jpg" alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCat} />
            </div>
       </div>
    )
}