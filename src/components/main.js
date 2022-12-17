import { Link } from "react-router-dom";

const Main = (props) => {
	return (
		<div className="pageArea">
            <div className="mainTxt">
            <h2>안녕하세요.<br/>신입 웹 개발자 <span>박혜진</span>입니다.</h2>
            <h3>
                "성공이라는 못을 박으려면 끈질김이라는 망치가 필요하다"<br/>
                저의 장점은 꾸준함과 차분함 입니다. 꾸준히 노력하는 개발자가 되겠습니다.
            </h3>
            <Link to="/about" className="pinkBtn">about Me</Link>
            </div>
            <div className="imgArea">
            <div className="mainImg"></div>
            <div className="imgModel"></div>
            </div>
        </div>
	);
};

export default Main;