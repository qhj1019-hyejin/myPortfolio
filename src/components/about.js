import { useState } from "react";

const About = (props) => {

    /* rightBox skills 리스트 */
    const [skill, setSkill] = useState([
        { name: 'Html' , pct : '100%' },
        { name: 'Css' , pct : '95%' },
        { name: 'Javascript' , pct : '95%' },
        { name: 'Jquery' , pct : '100%' },
        { name: 'Php' , pct : '95%' },
        { name: 'Mysql' , pct : '90%' },
        { name: 'React' , pct : '70%' }
    ])

    const skillList = skill.map(e => (
        <li key={e.name}>
            <div className="skillTxt">
                <span>{e.name}</span>
                <span>{e.pct}</span>
            </div>
            <div className="levelBox">
                <div className="levelChk" style={{width:e.pct}}></div>
            </div>
        </li>
    ))

    return (
        <div className="pageArea about">
            <div className="leftBox">
                <div className="aboutImg"></div>
                <ul className="aboutList">
                    <li>
                        <img src="img/name_icon.png" alt="name icon"/>
                        <h2>박혜진</h2>
                    </li>
                    <li>
                        <img src="img/phone_icon.png" alt="phone icon"/>
                        <h2><a href="tel:010-3152-3026">010 3152 3026</a></h2>
                    </li>
                    <li>
                        <img src="img/github2.png" style={{filter: 'brightness(0.3)'}} alt="github icon"/>
                        <h2><a href="https://github.com/qhj1019-hyejin" target={"_blank"}>github.com/qhj1019-hyejin</a></h2>
                    </li>
                    <li>
                        <img src="img/mail_icon.png" style={{filter: 'contrast(0.6)'}} alt="mail icon"/>
                        <h2><a href="mailto:qhj1019@naver.com">qhj1019@naver.com</a></h2>
                    </li>
                </ul>
            </div>
            <div className="rightBox">
                <h3 className="tlt">Skills</h3>
                <ul>
                    {skillList}
                </ul>
            </div>
            <div className="aboutTxt">
                로렘 입숨(Lorem Ipsum)이라고 들어보셨나요? 로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트입니다. 최종 결과물에 들어가는 실제 문장 내용이 채워지기 전에 디자인 프로젝트 모형의 채움 글로도 이용됩니다.
                로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그 이상의 의미를 담지는 않습니다. 문서에서 텍스트가 보이면 사람들은 전체적인 모양새보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서 서체나 디자인을 보일 때 로렘 입숨을 사용합니다. (출처: 위키백과)
            </div>
        </div>
    )
}

export default About;