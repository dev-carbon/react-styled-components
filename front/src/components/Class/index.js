import { ClassCardsContainer, ClassContainer, ClassTitle } from "./style"
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

import Card from "../Card";

function Class() {
    return (
        <ClassContainer>
            <ClassTitle>My Class</ClassTitle>
            <>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Card bg={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card bg={img2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card bg={img3} />
                    </SwiperSlide>
                </Swiper>
            </>
        </ClassContainer>
    )
}

export default Class