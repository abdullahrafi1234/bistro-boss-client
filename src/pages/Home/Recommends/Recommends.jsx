import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import Recommend from "./Recommend";


const Recommends = () => {
const [recommends, setRecommends] = useState([])

useEffect(() => {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => setRecommends(data))
},[])


    return (
        <div>
            <SectionTitle heading={'CHEF RECOMMENDS'} subHeading={'Should Try'}></SectionTitle>

            <div className="grid md:grid-cols-3 gap-10 my-16 mb-24">
                {
                    recommends.slice(0,6).map(recommend => <Recommend key={recommend._id} recommend={recommend}></Recommend>)
                }
            </div>
        </div>
    );
};

export default Recommends;