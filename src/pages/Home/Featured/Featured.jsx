import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle heading={"Featured Item"} subHeading={'Check it out'}></SectionTitle>

            <div className="md:flex bg-slate-500 bg-opacity-35 items-center justify-center  py-20 px-36 pt-12">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-12">
                    <p>Aug 20, 2029</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium cum, laudantium deserunt, distinctio rerum, maxime eius possimus quas odio libero labore. Nihil, asperiores nisi! Repellendus saepe hic ab, qui, ea mollitia laboriosam libero aut iste obcaecati doloremque dolorem quos voluptatibus asperiores. Perferendis maiores fuga nisi provident quasi? Beatae, rem.</p>
                    <button className="btn btn-outline border-0 border-b-4 rounded-lg text-white  mt-2 ">Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;