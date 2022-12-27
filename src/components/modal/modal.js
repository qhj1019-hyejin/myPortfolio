import style from './modal.module.css';

const Modal = (props) => {

    const closeModal = () => {
        props.setModalOpen(false);
        console.log('idxProp::',props.idxProp);
    }

    return (
        <div  className={`pageArea ${style.modal}`} >
            <div className={style.modalInner}>
                <div className={style.close} >
                    <img src="/close_icon.png" alt="닫기" onClick={closeModal} />
                </div>
                <div className={style.contenWrap}>
                    <div className={style.leftInner}>
                        <img src={'/project_img_'+ (props.idxProp + 1) +'.png'} />
                    </div>
                    <div className={style.rightInner}>
                    <h3>{props.portfolioLi[props.idxProp].title}</h3>
                        <p>{props.portfolioLi[props.idxProp].skill}</p>
                        <p>{props.portfolioLi[props.idxProp].content}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Modal;