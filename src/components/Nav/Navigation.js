import React from 'react';
import {animateScroll as scroll, Events, Link, scroller} from 'react-scroll'

class Navigation extends React.Component {

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div>
                <div className='log'>

                    <nav className='nav'>
                        <ul className="navList">
                            <li className="navItem"><Link activeClass="active" className="test1" to="test1" spy={true}
                                                          smooth={true}
                                                          duration={500}>Start</Link></li>
                            <li className="navItem"><Link activeClass="active" className="test2" to="test2" spy={true}
                                                          smooth={true}
                                                          duration={500}>O co chodzi?</Link></li>
                            <li className="navItem"><Link activeClass="active" className="test3" to="test3" spy={true}
                                                          smooth={true}
                                                          duration={500}>O nas</Link></li>
                            <li className="navItem"><Link activeClass="active" className="test4" to="test4" spy={true}
                                                          smooth={true}
                                                          duration={500}>Fundacja i organizacje</Link></li>
                            <li className="navItem"><Link activeClass="active" className="test5" to="test5" spy={true}
                                                          smooth={true}
                                                          duration={500}>Kontakt</Link></li>
                            {/*<li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true}*/}
                            {/*          duration={500} delay={1000}>Test 5 ( delay )</Link></li>*/}
                        </ul>
                    </nav>
                </div>


            </div>
        );
    }
};
export default Navigation;