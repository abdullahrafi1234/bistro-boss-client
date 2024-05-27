
const FoodCard = ({item}) => {
    const { name, image, recipe, price } = item
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-4 top-4 px-4 bg-slate-900 rounded-lg text-white">${price}</p>
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold">{name}</h2>
                    <p className="text-center">{recipe}</p>
                    <div className="text-center">
                        <button className="btn btn-outline w-2/3 border-[#BB8506] border-0 border-b-4 rounded-lg text-[#BB8506] bg-[#E8E8E8] mt-2 ">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;