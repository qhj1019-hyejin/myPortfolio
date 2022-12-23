import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = (props) => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2rb868j', 'template_l8odtoi', form.current, 'AxBNdASCBrusPDrKr')
        .then((result) => {
            alert('전송 되었습니다.');
            console.log(result.text);
        }, (error) => {
            alert('전송에 실패했습니다.');
            console.log(error.text);
        });
    };

    return (
        <div className="pageArea contact">
            <div className="inner">
                <h2 className="tlt">Get in Touch</h2>
                <ul className="aboutBox">
                    <li>
                        <a href="https://goo.gl/maps/PdbzQkf3Y1yosvUBA" target={"_blank"}>
                        <img src="img/map_icon.png" alt="map icon"/>
                        <h3>gimpo, Republic of Korea</h3>
                        </a>
                    </li>
                    <li>
                        <a href="tel:010-3152-3026">
                            <img src="img/phone_icon2.png" alt="phone icon"/>
                            <h2>010 3152 3026</h2>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:qhj1019@naver.com">
                            <img src="img/mail_icon.png" alt="mail icon"/>
                            <h2>qhj1019@naver.com</h2>
                        </a>
                    </li>
                </ul>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="phone" placeholder="Phone"/>
                    <input type="email" name="email" className="fullInput" placeholder="Email"/>
                    <textarea name="message" className="fullInput" placeholder="Message"/>
                    <input type="submit" className="pinkBtn" value="Send"/>
                </form>
            </div>
        </div>
    )
}
export default Contact;