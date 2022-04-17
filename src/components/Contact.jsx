import React from "react";
import logo from "../icon.svg"

const Contact = ({phone, name, surname, gender}) => {
    return (
        <li className="contact">
            <img className="contact-name" src={logo} alt="contact-logo" />{`${name} ${surname}`}
            <ul id="phone-area">{phone}</ul>
            <ul id="phone-area">{gender}</ul>
        </li>
    )
}

export default Contact;