import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Slider from "../../Components/Slider/Slider";

export default function Home() {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type='featured' />
            <Categories />
            <FeaturedProducts type='trending' />
            <Contact/>
       </div>
    )
}