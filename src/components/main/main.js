import { Link } from "react-router-dom";
import style from './Main.module.css';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Main = (props) => {
	return (
		<motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
            }}
            className={`pageArea ${style.main}` }
        >
            <div className={style.mainTxt}>
                <h2>
                    <Typewriter
                        className={style.typeTxt}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString('안녕하세요.')
                            .pauseFor(100)
                            .typeString('<br/>신입 웹 개발자 &nbsp;')
                            .pauseFor(100)
                            .typeString('<b>박혜진</b> 입니다.')
                            .start()
                            .pauseFor(100)
                        }}
                    />
                </h2>
                <h3>
                    "성공이라는 못을 박으려면 끈질김이라는 망치가 필요하다"<br className="pc"/>
                    저의 장점은 꾸준함과 차분함 입니다. 꾸준히 노력하는 개발자가 되겠습니다.
                </h3>
                <Link to="/about" className="pinkBtn">about Me</Link>
            </div>
            <div className={style.imgArea}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                    }}
                    className={style.mainImg}
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/hyejin.jpg'})` }}
                />
                <div className={style.imgModel}/>
            </div>
        </motion.div>
	);
};

export default Main;