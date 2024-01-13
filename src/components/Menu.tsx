import { ElementRef, useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import menuScrolling from '../hooks/menuScrolling';

// export default function Menu(props) {
export default function Menu(props: {language: string}) {
    const bottomRef = useRef<ElementRef<"img">>(null);
    const btnMenuRef= useRef<ElementRef<"p">>(null);
    const menuRef= useRef<ElementRef<"ul">>(null);
    const [wallpaperVisible, setWallpaperVisible] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    // const menuScrolling = (e: React.SyntheticEvent<EventTarget>): void => {
    const scrollAndClose = (e: any): void => {
        menuScrolling(e);
        setShowMenu(false)
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    function hideMenu() {
        setShowMenu(false);
    }

    // useEffect below closes menu whenever sth not being NavBar is clicked
    useEffect(() => {
        function handler(e: any) {
            // A frist if statement below used as a type guard
            if (btnMenuRef.current === null || menuRef.current === null) return;
            if (!btnMenuRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
                hideMenu();
            }
        }
        document.addEventListener('mousedown', handler);
    })

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            setWallpaperVisible(entry.isIntersecting);
        });
        if (!bottomRef.current) return; // type guard
        observer.observe(bottomRef.current);
    }, []);

    return (
        <div className='Menu'>
            <div className='__flags'>
                <NavLink to='/'><img src={require('../assets/flags/flagPL.gif')} alt='Polish flag on transport company website' /></NavLink>
                <NavLink to='/eng'><img src={require('../assets/flags/flagUK.gif')} alt='English flag on transport company website' /></NavLink>
            </div>
            <div className='__navBar'>
                    <p 
                        onClick={toggleMenu}
                        className={wallpaperVisible ? 'middle' : 'moved'}
                        ref={btnMenuRef}
                    >MENU</p>
                    <img 
                        src={require('../assets/logoDarkBlue2.png')} 
                        onClick={scrollAndClose} 
                        data-height={'START'}  
                        className={wallpaperVisible ? 'hidden' : 'show'}
                        alt='Firma transportowa | AM Global | Miechów | Małopolskie | Zamów transport'
                    />
                    <ul 
                        className={
                            (wallpaperVisible && showMenu) ? 'centered ul-shown' : 
                                ((wallpaperVisible && !showMenu) ? 'centered ul-hidden' : 
                                    (!wallpaperVisible && showMenu) ? 'onRight ul-shown' : 'onRight ul-hidden')
                        }
                        ref={menuRef}
                    >
                        <li 
                            onClick={scrollAndClose} 
                            data-height={'ABOUT'}   
                        >{props.language === 'pol' ? 'O NAS' : 'ABOUT'}</li>
                        <li 
                            onClick={scrollAndClose} 
                            data-height={'GALLERY'}   
                        >{props.language === 'pol' ? 'GALERIA' : 'GALLERY'}</li>
                        <li 
                            onClick={scrollAndClose} 
                            data-height={'CONTACT'}
                        >{props.language === 'pol' ? 'KONTAKT' : 'CONTACT'}</li>
                        <li 
                            onClick={scrollAndClose} 
                            data-height={'ORDER'}
                        >{props.language === 'pol' ? 'ZAMÓW TRANSPORT' : 'ORDER QUOTATION'}</li>
                    </ul>
            </div>
            <div className='Wallpaper'>
                <img 
                    className='Wallapepr__reference'
                    src={require('../assets/wallpaper2.webp')} 
                    alt='Wallpaper' 
                    ref={bottomRef}
                />
            </div>
        </div>
    )
}