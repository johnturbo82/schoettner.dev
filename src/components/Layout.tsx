import React, { ReactNode, useCallback, useEffect, useState } from 'react'

import { Link } from 'gatsby'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import BreadCrump from './BreadCrump';
import HomeButton from './HomeButton';
import SideBar from './SideBar';
import InstagramFeed from './InstagramFeed';
import '../styles/style.scss';

type LayoutProps = {
    children: ReactNode;
    parent?: string;
    path: string;
    sitetitle: string;
}

const Layout = (props: LayoutProps) => {

    const [menuVisible, setMenuVisible] = useState(false);
    const [siteTheme, setSiteTheme] = useState("schoettner.dev");

    const handleUserKeyPress = useCallback((event: { key: any; keyCode: any }) => {
        const { key, keyCode } = event;
        if (keyCode === 27) {
            closeMenu();
        }
        handleScroll();
    }, []);

    useEffect(() => {
        setSiteTheme(window ? window.location.host : "schoettner.dev");
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
                <HomeButton burgerClick={toggleMenu} />
                <div className="topbar">
                    <h1 className='site-title'>
                        <Link to='/'>{siteTheme}</Link>
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
                    <Content id="map" type="content-full">
                        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=11.427605152130129%2C48.791117932533574%2C11.458075046539307%2C48.799535479407005&amp;layer=mapnik&amp;marker=48.795326882518644%2C11.442840099334717"></iframe>
                    </Content>
                </div>
            </div >
        </div>
    )
}

export default Layout;