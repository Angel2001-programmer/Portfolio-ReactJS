import { useState } from 'react';
import Navigation from '../components/Navigation/navigation';
import styles from "./contactme.module.css"

const ContactMe = () => {
    const [enquiry, setEnquiry] = useState({name: '', email: '', message: ''});

    const onValueChanges = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setEnquiry(( prevValue) => {
            return {
            ...prevValue,
            [name]: value
            }
        })

        console.log(enquiry);
    }  

    const SumbitHandler = (e) => {
        e.preventDefault();
        if(enquiry.name && enquiry.email && enquiry.message !== ''){
            alert(`Thank you ${enquiry.name} for your submission`);
            setEnquiry({name: '', email: '', message: ''});
        }
        return;
    }

    return(
        <div id='contactForm'>
        <Navigation></Navigation>
        <div className={styles.container}>
            <h1>Get In Touch</h1>
            <form onSubmit={SumbitHandler} method='post'>
            <label>Name:</label>
            <input type='text' name='name' value={enquiry.name} onChange={onValueChanges}></input>
            <label>Email:</label>
            <input type='email' name='email' value={enquiry.email} onChange={onValueChanges}></input>
            <label>Enquiry:</label>
            <textarea className={styles.textarea} name='message' value={enquiry.message} onChange={onValueChanges}></textarea>
            <div className={styles.buttonDiv}>
            <button type='Sumbit'><a href='mailto:angelwitchell2001@gmail.com'>Send</a></button>
            </div>
            </form>
        </div>
        </div>
    )
}

export default ContactMe;