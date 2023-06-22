import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu(props) {
    const bottomRef = useRef();
    const [wallpaperVisible, setWallpaperVisible] = useState(true);

    const menuScrolling = (e) => {
        let screenWidth = window.innerWidth; // Number
        
        if (screenWidth > 1000) {
            let height = Number(e.target.dataset.height);
            window.scrollTo({ top: height, behavior: "smooth" });
        } else {
            let height = Number(e.target.dataset.height2);
            window.scrollTo({ top: height, behavior: "smooth" });
        }
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
                    <img 
                        src={require('../assets/logoDarkBlue2.png')} 
                        onClick={menuScrolling} 
                        data-height={0} 
                        data-height2={0}
                        className={wallpaperVisible ? 'hidden' : 'show'}
                        alt='Logo'
                    />
                    <ul className={wallpaperVisible ? 'centered' : 'onRight'}>
                        <li 
                            onClick={menuScrolling} 
                            data-height={500} 
                            data-height2={3000}
                        >{props.language === 'pol' ? 'O NAS' : 'ABOUT'}</li>
                        <li 
                            onClick={menuScrolling} 
                            data-height={1000}
                        >{props.language === 'pol' ? 'GALERIA' : 'GALLERY'}</li>
                        <li 
                            onClick={menuScrolling} 
                            data-height={1550}
                        >{props.language === 'pol' ? 'KONTAKT' : 'CONTACT'}</li>
                        <li 
                            onClick={menuScrolling} 
                            data-height={2025}
                        >{props.language === 'pol' ? 'ZAMÓW TRANSPORT' : 'ORDER QUOTATION'}</li>
                    </ul>
            </div>
            <div className='Wallpaper'>
                <img 
                    src={require('../assets/wallpaper.png')} 
                    alt='Wallpaper' 
                    ref={bottomRef}
                />
            </div>
        </div>
    )
}