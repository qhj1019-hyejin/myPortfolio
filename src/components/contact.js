import React, { useRef } from 'react';
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
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Phone</label>
                <input type="text" name="phone" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
export default Contact;