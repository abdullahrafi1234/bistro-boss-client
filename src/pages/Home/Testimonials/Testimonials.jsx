import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import {  FaQuoteLeft } from "react-icons/fa";



const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle heading={'TESTIMONIALS'} subHeading={'What Our Clients Say'}></SectionTitle>



            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                {
                    reviews.map(review => <SwiperSlide key={review._id}>

                        <div className="text-center mx-auto m-12">

                            <Rating className="text-center mx-auto mb-8"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p className=" justify-center flex">
                                <FaQuoteLeft className="text-6xl mb-6"></FaQuoteLeft>
                            </p>

                            <p className="w-2/3 mx-auto">{review.details}</p>
                            <p className="text-[#CD9003] text-3xl font-medium">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>


        </section>
    );
};

export default Testimonials;