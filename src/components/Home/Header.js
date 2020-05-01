import React from 'react';
import Hero from '../../assets/Home-Hero-Image.jpg'
import Deco from '../../assets/Decoration.svg'
const Header = () => (
    <section id="header">
        <div><img className='image' src={Hero}/></div>
        <div className='div'>
            <div className='log'>
                <ul className="logList">
                    <li className="logItem"><a href="#">Zaloguj</a></li>
                    <li className="logItem"><a href="#">Załóż konto</a></li>
                </ul>
            </div>
            <nav className='nav'>
                <ul className="navList">
                    <li className="navItem"><a href="#">Start</a></li>
                    <li className="navItem"><a href="#">O co chodzi?</a></li>
                    <li className="navItem"><a href="#">O nas</a></li>
                    <li className="navItem"><a href="#">Fundacja i organizacje</a></li>
                </ul>
            </nav>
                <div className='div1'>
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <div className='image1'><img className='image1' src={Deco}/></div>
                <ul className="toDoList">
                        <li className="toDoItem"><a href="#">ODDAJ RZECZY</a></li>
                        <li className="toDoItem"><a href="#">ZORGANIZUJ ZBIORKĘ</a></li>
                </ul></div>
        </div>
    </section>
)
export default Header;