
const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className="flex mb-2">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[100px] mr-4" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}---------</h3>
                <p >{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;