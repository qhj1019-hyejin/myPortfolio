const About = (props) => {
    return (
        <div className="pageArea about">
            <div className="leftBox">
                <div className="aboutImg"></div>
                <ul className="aboutList">
                    <li>
                        <img src="img/name_icon.png"/>
                        <h2>박혜진</h2>
                    </li>
                    <li>
                        <img src="img/phone_icon.png"/>
                        <h2>010 3152 3026</h2>
                    </li>
                    <li>
                        <img src="img/github2.png" style={{filter: 'brightness(0.3)'}}/>
                        <h2>github.com/qhj1019-hyejin</h2>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;