import { useState } from "react";
import style from './About.module.css';
import { CSSTransition } from "react-transition-group";

const About = (props) => {

    /* rightBox skills 리스트 */
    const [skill, setSkill] = useState([
        { name: 'Html' , pct : '100%' },
        { name: 'Css' , pct : '95%' },
        { name: 'Javascript' , pct : '95%' },
        { name: 'Jquery' , pct : '100%' },
        { name: 'Php' , pct : '95%' },
        { name: 'Mysql' , pct : '90%' },
        { name: 'React.js' , pct : '80%' }
    ])

    const skillList = skill.map(e => (
        <li key={e.name}>
            <div className={style.skillTxt}>
                <span>{e.name}</span>
                <span>{e.pct}</span>
            </div>
            <div className={style.levelBox}>
                <div className={style.levelChk} style={{width:e.pct}}></div>
            </div>
        </li>
    ))

    return (
        <div className="pageArea">
            <div className={style.leftBox}>
                <div className={style.aboutImg} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/hyejin_2.jpg'})` }}></div>
                <ul className={style.aboutList}>
                    <li>
                        <img src="/name_icon.png" alt="name icon"/>
                        <h2>박혜진</h2>
                    </li>
                    <li>
                        <img src="/phone_icon.png" alt="phone icon"/>
                        <h2><a href="tel:010-3152-3026">010 3152 3026</a></h2>
                    </li>
                    <li>
                        <img src="/github2.png" style={{filter: 'brightness(0.3)'}} alt="github icon"/>
                        <h2><a href="https://github.com/qhj1019-hyejin" target={"_blank"}>github.com/qhj1019-hyejin</a></h2>
                    </li>
                    <li>
                        <img src="/mail_icon.png" style={{filter: 'contrast(0.6)'}} alt="mail icon"/>
                        <h2><a href="mailto:qhj1019@naver.com">qhj1019@naver.com</a></h2>
                    </li>
                </ul>
            </div>
            <div className={style.rightBox}>
                <h3 className="tlt">Skills</h3>
                <ul>
                    {skillList}
                </ul>
            </div>
            <div className={style.aboutTxt}>
                스킬 90% 이상은 실무에서 사용해봤기 때문에 어느정도 자신있게 할 수 있다고 생각 합니다.
                react.js는 실무에서는 사용해보지 않았지만 독학으로 공부하고 프로젝트 등을 만들어 봤기 때문에 70%로 정했었습니다.
                80%로 변경한 이유는 지금 보시고 계시는 포트폴리오를 react.js로 작업하면서 더 많은것을 찾아보고 배우게 되어서 조금 더 실무에서
                사용할 때 도움되는 공부를 했다고 생각해서 높혔습니다.<br/>
                적응력과 이해력이 높은 편이여서 처음 공부해보는 스킬도 곧잘 익혀서 실무에서 빠르게 사용합니다. 
            </div>
        </div>
    )
}

export default About;