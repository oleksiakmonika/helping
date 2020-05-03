import React from "react";
import {Element} from "react-scroll/modules";
import Deco from "../../assets/Decoration.svg";
import Base from "../Form/Base";
const Contact = () =>(
    <section id='contact'><Element name="test5" className="element">
    </Element>
        <div className='imageContactForm'></div>
        <div id='divContactForm'>
            <h1>Skontaktuj się z nami</h1>
            <div className='image1'><img className='image1' src={Deco}/></div>
            <Base/>
        </div>
        {/*<a onClick={this.scrollToTop}>To the top!</a>*/}
    </section>

)
export default Contact;