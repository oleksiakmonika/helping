import React from 'react';
import Hero from '../../assets/Home-Hero-Image.jpg'
import Deco from '../../assets/Decoration.svg'
import {Link} from 'react-router-dom';
import Navigation from '../Nav/Navigation.js';
import {Element} from "react-scroll/modules";

const Header = () => (
    <section id="header">
        <div><img className='image' src={Hero}/></div>
        <div className='div'>

            <div className='log'>
                <ul className="logList">
                    <li className="logItem"><Link to='/zaloguj'>Zaloguj się</Link></li>
                    <li className="logItem"><Link to='/zaloguj'>Załóż konto</Link></li>
                </ul>
            </div>
            <Navigation/>
            <div className='div1'>
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <div className='image1'><img className='image1' src={Deco}/></div>
                <Element name="test1" className="element">
                </Element>
                <ul className="toDoList">
                    <li className="toDoItem"><Link to='/zaloguj'>ODDAJ RZECZY</Link></li>
                    <li className="toDoItem"><Link to='/zaloguj'>ZORGANIZUJ ZBIORKĘ</Link></li>
                </ul>
            </div>
        </div>
    </section>
)
export default Header;