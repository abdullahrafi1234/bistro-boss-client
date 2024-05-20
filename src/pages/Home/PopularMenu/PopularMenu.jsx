import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-16">
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>

            <div className="grid md:grid-cols-2 gap-6">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className="text-center mx-auto">
                <button className="btn btn-outline border-0 border-b-4 text-center rounded-lg mt-2 ">View Full Menu</button>
            </div>

            <div className="bg-black my-20 py-24 text-center">
                <h3 className="text-5xl text-white font-semibold ">Call Us: +88 0192345678910</h3>
            </div>
        </section>
    );
};

export default PopularMenu;