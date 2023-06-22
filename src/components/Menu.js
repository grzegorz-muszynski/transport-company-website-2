import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu(props) {
    const bottomRef = useRef();
    const [wallpaperVisible, setWallpaperVisible] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const menuScrolling = (e) => {
        let screenWidth = window.innerWidth; // Number
        
        if (screenWidth > 1220) {
            let height = Number(e.target.dataset.height);
            window.scrollTo({ top: height, behavior: "smooth" });
        } else if (screenWidth > 850) {
            let height = Number(e.target.dataset.height2);
            window.scrollTo({ top: height, behavior: "smooth" });
        } else if (screenWidth > 570) {
            let height = Number(e.target.dataset.height3);
            window.scrollTo({ top: height, behavior: "smooth" });
        } else if (screenWidth > 470) {
            let height = Number(e.target.dataset.height4);
            window.scrollTo({ top: height, behavior: "smooth" });
        } else {
            let height = Number(e.target.dataset.height5);
            window.scrollTo({ top: height, behavior: "smooth" });
        }

        setShowMenu(false)
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            setWallpaperVisible(entry.isIntersecting);
        });
        observer.observe(bottomRef.current);
    }, []);

    return (
        <div className='Menu'>
            <div className='__flags'>
                <NavLink to='/'><img src={require('../assets/flags/flagPL.gif')} alt='Polish flag' /></NavLink>
                <NavLink to='/eng'><img src={require('../assets/flags/flagUK.gif')} alt='English flag' /></NavLink>
            </div>
            <div className='__navBar'>
                    <p 
                        onClick={toggleMenu}
                        className={wallpaperVisible ? 'middle' : 'moved'}
                    >MENU</p>
                    <img 
                        src={require('../assets/logoDarkBlue2.png')} 
                        onClick={menuScrolling} 
                        data-height={0} 
                        data-height2={0} 
                        data-height3={0} 
                        data-height4={0} 
                        data-height5={0} 
                        className={wallpaperVisible ? 'hidden' : 'show'}
                        alt='Logo'
                    />
                    <ul 
                        className={
                            (wallpaperVisible && showMenu) ? 'centered ul-shown' : 
                                ((wallpaperVisible && !showMenu) ? 'centered ul-hidden' :
                                    (!wallpaperVisible && showMenu) ? 'onRight ul-shown' : 'onRight ul-hidden')
                        }
                    >
                        <li 
                            onClick={menuScrolling} 
                            data-height={720} 
                            data-height2={720} 
                            data-height3={720} 
                            data-height4={440} 
                            data-height5={440} 
                        >{props.language === 'pol' ? 'O NAS' : 'ABOUT'}</li>
                        <li 
                            onClick={menuScrolling} 
                            data-height={1100} 
                            data-height2={1100} 
                            data-height3={1300} 
                            data-height4={930} 
                            data-height5={1030} 
                        >{props.language === 'pol' ? 'GALERIA' : 'GALLERY'}</li>
                        <li 
                            onClick={menuScrolling} 
                            data-height={1700} 
                            data-height2={1650} 
                            data-height3={2500} 
                            data-height4={1900} 
                            data-height5={1700} 
                        >{props.language === 'pol' ? 'KONTAKT' : 'CONTACT'}</li>
                        <li 
                            onClick={menuScrolling} 
                            data-height={4000} 
                            data-height2={4000} 
                            data-height3={4000} 
                            data-height4={4000} 
                            data-height5={4000} 
                        >{props.language === 'pol' ? 'ZAMÓW TRANSPORT' : 'ORDER QUOTATION'}</li>
                    </ul>
            </div>
            <div className='Wallpaper'>
                <img 
                    src={require('../assets/wallpaper2.png')} 
                    alt='Wallpaper' 
                    ref={bottomRef}
                />
            </div>
        </div>
    )
}