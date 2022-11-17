import React from 'react';
import './OurServices.css';

import ServicesData from '../../Data/OurServicesData';
import OneService from '../OneSevice/OneService';
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {Navigation,A11y} from 'swiper';
import Zoom from 'react-reveal/Zoom';

SwiperCore.use([Navigation]);
const OurServices = () =>{
    // const fetchServices = ServicesData.map(item => {
    //     return (
    //         <div key={item.id} className="col-md-3 col-sm-6 mb-5 text-center">
    //             <OneService id={item.id} img={item.img} title={item.title} text={item.text} />
    //         </div>
    //     )
    // });
    const fetchServices2 = ServicesData.map(item => {
        return (
            <SwiperSlide  key={item.id}>
                <OneService id={item.id} img={item.img} title={item.title} text={item.text}  />
            </SwiperSlide>
        )
    })
    
    return(
        <div className="our-services">
            <div className="container">
                <Zoom top>
                <div className="title">
                    <h2>خدماتنا</h2>
                </div></Zoom>
                {/* <div className="row">
                    {fetchServices}
                </div> */}
                <div className="swiper">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        // pagination={{ clickable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        pagination={{
                            clickable: true,
                          }}
                          breakpoints={{
                            100: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 50,
                            },
                          }}
                        >
                        
                        {fetchServices2}
                       
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default OurServices;