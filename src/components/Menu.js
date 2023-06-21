import { useEffect, useRef, useState } from 'react';

export default function Menu() {
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
        // console.log('bottomRef', bottomRef.current);
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            // console.log('entry', entry);
            // console.log('entry.isIntersecting', entry.isIntersecting);
            setWallpaperVisible(entry.isIntersecting);
            // console.log(wallpaperVisible)
        });
        observer.observe(bottomRef.current);
    }, []);

    return (
        <div className='Menu'>
            <div className='__navBar'>
                    <img 
                        src={require('../assets/logoDarkBlue2.png')} 
                        onClick={menuScrolling} 
                        data-height={0} 
                        data-height2={0}
                    //     style={wallpaperVisible ? {display: 'none'} : {display: 'block'}}
                        className={wallpaperVisible ? 'hidden' : 'show'}
                    />
                    {/* /> */}
                    <ul className={wallpaperVisible ? 'centered' : 'onRight'}>
                    {/* <ul> */}
                        <li 
                            onClick={menuScrolling} 
                            data-height={500} 
                            data-height2={3000}
                        >O NAS</li>
                        <li 
                            onClick={menuScrolling} 
                            data-height={1000}
                        >GALERIA</li>
                        <li 
                            onClick={menuScrolling} 
                            data-height={1550}
                        >KONTAKT</li>
                        <li 
                            onClick={menuScrolling} 
                            data-height={2025}
                        >ZAMÓW TRANSPORT</li>
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