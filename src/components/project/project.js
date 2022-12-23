import style from './Project.module.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Project = (props) => {

    const weekArr = ["MON", "TUE", "WED", "THU", "FRI"];

    return (
        <div className={`pageArea ${style.project}` }>
            <h2 className="tlt" >My project</h2>
            <h3>&laquo; slide</h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className={style.swiper}
            >
                {weekArr.map((week, index) => (
                    <SwiperSlide 
                        className={style.swiperSlide}
                        key={index}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/project_img_'+( index + 1 )+'.png'})` }}
                    >
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Project;