import { useState } from 'react';
import style from './Project.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import portfolioList from './portfolioList';
import Modal from '../modal/modal';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Project = (props) => {

    // 포트폴리오 리스트 데이터 가져오기
    let [portfolioLi, setPortfolioLi] = useState(portfolioList);

    let [modalOpen, setModalOpen] = useState(false); // 모달 팝업 스위치

    let [idxProp, setIdxProp] = useState(0); // swiper li index 

    const portfolioClick = (e, idx) => {
        setModalOpen(true);
        setIdxProp(idx);
    }  

    


    return (
        <div className={`pageArea ${style.project}` }>
            <h2 className="tlt">My project</h2>
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
                {portfolioLi.map((item, idx) => (
                    <SwiperSlide 
                        className={style.swiperSlide}
                        key={item.title} 
                        onClick={((e) => portfolioClick(e,idx))}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/project_img_'+( idx + 1 )+'.png'})` }}
                    >
                    </SwiperSlide>
                ))}
            </Swiper>

             {
                modalOpen == true ? <Modal setModalOpen={setModalOpen} portfolioLi={portfolioLi} idxProp={idxProp} /> : null // 모달 팝업
             }      

        </div>
    )
}
export default Project;