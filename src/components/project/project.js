import style from './Project.module.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Project = (props) => {

    const projectNum = ["igisWeb", "igisWebzine", "fundSys", "managerPage", "myportfolio"];

    return (
        <div className={`pageArea ${style.project}` }>
            <h2 className="tlt" >My project</h2>
            <div className={style.slide} >
                <ul>
                    <li className={style.scrollArrow}></li>
                    <li className={style.scrollArrow}></li>
                    <li className={style.scrollArrow}></li>
                </ul>
                <h3>slide</h3>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    type: "progressbar",
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={style.swiper}
            >
                {projectNum.map((tlt, index) => (
                    <SwiperSlide 
                        className={style.swiperSlide}
                        key={tlt}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/project_img_'+( index + 1 )+'.png'})` }}
                    >
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Project;