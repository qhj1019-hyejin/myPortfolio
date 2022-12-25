import style from './modal.module.css';

const Modal = (props) => {

    const closeModal = () => {
        props.setModalOpen(false);
    }

    return (
        <div  className={`pageArea ${style.modal}`} >
            <div className={style.modalInner}>
                <div className={style.close} >
                    <img src="/close_icon.png" alt="닫기" onClick={closeModal} />
                </div>
                <h4>{props.portfolioLi[0].title}</h4>
                <p>{props.portfolioLi[0].skill}</p>
                <p>{props.portfolioLi[0].content}</p>
            </div>
        </div>
    )

}
export default Modal;