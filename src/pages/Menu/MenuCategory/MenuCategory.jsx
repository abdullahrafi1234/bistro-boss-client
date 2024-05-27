import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            <div className="my-8">
                {title && <Cover width={'h-[600px]'} img={img} title={title} paragraph={'Would you like to try a dish?'}></Cover>}
            </div>

            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-black border-0 border-b-4 rounded-lg text-black  mt-2 ">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;