import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/menu-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={'Our Menu'} paragraph={'Would you like to try a dish?'}></Cover>

            <SectionTitle heading={"TODAY'S OFFER"} subHeading={'Do not miss'}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory
                items={dessert}
                title={'dessert'}
                img={dessertImg}>
            </MenuCategory>
            {/* pizza */}
            <MenuCategory
                items={pizza}
                title={'pizza'}
                img={pizzaImg}>
            </MenuCategory>
            {/* salad */}
            <MenuCategory
                items={salad}
                title={'salad'}
                img={saladImg}>
            </MenuCategory>
            {/* soup */}
            <MenuCategory
                items={soup}
                title={'soup'}
                img={soupImg}>
            </MenuCategory>

        </div>
    );
};

export default Menu;