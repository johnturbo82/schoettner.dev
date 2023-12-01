import React, { ReactNode, useCallback, useEffect, useState } from 'react'

import '../styles/style.scss'
import { Link } from 'gatsby'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import BreadCrump from './BreadCrump';
import HomeButton from './HomeButton';
import SideBar from './SideBar';
import InstagramFeed from './InstagramFeed';

type LayoutProps = {
    children: ReactNode;
    parent?: string;
    path: string;
    sitetitle: string;
}

const Layout = (props: LayoutProps) => {

    const [menuVisible, setMenuVisible] = useState(false);

    const handleUserKeyPress = useCallback((event: { key: any; keyCode: any }) => {
        const { key, keyCode } = event;
        if (keyCode === 27) {
            closeMenu();
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 60) {
            if (!document.querySelector('.topbar')?.classList.contains("active")) {
                document.querySelector('.topbar')?.classList.add("active");
            }
        } else {
            if (document.querySelector('.topbar')?.classList.contains("active")) {
                document.querySelector('.topbar')?.classList.remove("active");
            }
        }
    }

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    const closeMenu = () => {
        setMenuVisible(false);
    }

    return (
        <div>
            <div id="container" className="site-container">
                <div className="topbar">
                    <HomeButton burgerClick={toggleMenu} />
                    <h1 className='site-title'>
                        <Link to='/'>schoettner.dev</Link>
                    </h1>
                </div>
                {menuVisible && (
                    <SideBar path={props.path} handleClose={closeMenu} />
                )}
                <div id="site">
                    <Header />
                    <BreadCrump sitetitle={props.sitetitle} parent={props.parent} />
                    <Content id="stage" type="text">
                        <div className="stage">
                            {props.children}
                        </div>
                    </Content>
                    <Content id="insta">
                        <InstagramFeed />
                    </Content>
                    <Content id="footer">
                        <Footer />
                    </Content>
                </div>
            </div >
        </div>
    )
}

export default Layout