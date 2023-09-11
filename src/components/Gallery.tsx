import { ReactElement, useState } from 'react';

import background1 from '../assets/thumbnails/img1.jpg';
import background2 from '../assets/thumbnails/img2.jpg';
import background3 from '../assets/thumbnails/img3.jpg';
import background4 from '../assets/thumbnails/img4.jpg';
import background5 from '../assets/thumbnails/img5.jpg';
import background6 from '../assets/thumbnails/img6.jpg';
import background7 from '../assets/thumbnails/img7.jpg';

import picture1 from '../assets/gallery/img1.jpg';
import picture2 from '../assets/gallery/img2.jpg';
import picture3 from '../assets/gallery/img3.jpg';
import picture4 from '../assets/gallery/img4.jpg';
import picture5 from '../assets/gallery/img5.jpg';
import picture6 from '../assets/gallery/img6.jpg';
import picture7 from '../assets/gallery/img7.jpg';

export default function Gallery(props: {language: string}) {
    const [showSlider, setShowSlider] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    // let thumbnails: HTMLDivElement[] = [];
    let thumbnails: ReactElement[] = [];
    // let thumbnails: any[] = [];
    const backgrounds = [
        background1,
        background2,
        background3,
        background4,
        background5,
        background6,
        background7
    ];
    const slides = [
        picture1,
        picture2,
        picture3,
        picture4,
        picture5,
        picture6,
        picture7
    ];
    const descriptionsPol = [
        'Stawiamy na niezawodność',
        'Świadczymy usługi na terenie niemal całej Europy Zachodniej',
        'Wszystkie auta posiadają możliwość ładowania górą',
        'Stale poszerzamy naszą flotę',
        'Jesteśmy wszędzie tam gdzie oczekuje nas klient',
        'Wszystkie nasze pojazdy mogą być ładowane od boku',
        'Jesteśmy firmą godną zaufania - postaw na nas!'
    ];
    const descriptionsEng = [
        'We focus on reliability',
        'We provide services in almost all of Western Europe',
        'All trucks can be top-loaded',
        'We are constantly expanding our fleet',
        'We are wherever a client expects us',
        'All our trucks can be loaded sideways',
        'We are a trustworthy company so choose us!'
    ];

    // const displaySlider: any = (e: Event): void => {
    const displaySlider = (e: any): void => {
        setShowSlider(true);
        const target = e.target as HTMLDivElement;
        let theImage = target.dataset.digit;
        setCurrentImage(Number(theImage));
    }

    // const closeSlider: any = (e: Event): void => {
    const closeSlider = (e: any): void => {
        const target = e.target as HTMLDivElement;
        if (target.className==='right' || target.className==='left') return;
        setShowSlider(false);
    }

    const prevImg = () => {
        if (Number(currentImage) === 0) {
            setCurrentImage(6)
        } else {
            setCurrentImage(Number(currentImage) - 1)
        }
    }

    const nextImg = () => {
        if (Number(currentImage) === 6) {
            setCurrentImage(0)
        } else {
            console.log(typeof currentImage)
            setCurrentImage(Number(currentImage) + 1)
        }
    }
    
    for (let i = 0; i < 7; i++) {
        thumbnails.push(
            <div
                className={`__thumbnail __thumbnail-${i+1}`}
                style={{
                    backgroundImage: `url(${backgrounds[i]})`
                }} 
                key={`Key ${i+1}`} 
                onClick={displaySlider}
            >
                <div data-digit={i}>
                    <p data-digit={i}>{props.language === 'pol' ? descriptionsPol[i] : descriptionsEng[i]}</p>
                </div>
            </div>
        )
    }
    
    return (
        <div className='Gallery'>
            <h1>{props.language === 'pol' ? 'Galeria' : 'Gallery'}</h1>
            <div className='__grid'>
                {thumbnails.map((image, index) => (
                    thumbnails[index]
                ))}
            </div>

            <div 
                id='slider'
                style={showSlider ? {display: 'block'} : {display: 'none'}}
                onClick={closeSlider}
            >
                <p 
                    className='left'
                    onClick={prevImg}
                >&#8249;</p>
                <div>
                    <img src={slides[currentImage]} alt='Transport company'/>
                </div>
                <p 
                    className='right'
                    onClick={nextImg}
                >&#8250;</p>
            </div>
        </div>
    )
}