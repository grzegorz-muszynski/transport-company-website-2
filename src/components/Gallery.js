import { useState } from 'react';

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

// import Slider from '../components/Slider';

export default function Gallery() {
    const [showSlider, setShowSlider] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
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
    const descriptions = [
        'Stawiamy na niezawodność',
        'Świadczymy usługi na terenie niemal całej Europy Zachodniej',
        'Wszystkie auta posiadają możliwość ładowania górą',
        'Stale poszerzamy naszą flotę',
        'Jesteśmy wszędzie tam gdzie oczekuje nas klient',
        'Wszystkie nasze pojazdy mogą być ładowane od boku',
        'Jesteśmy firmą godną zaufania - postaw na nas!'
    ];
    let thumbnails = [];

    const displaySlider = (e) => {
        setShowSlider(true);
        let theImage = e.target.dataset.digit;
        setCurrentImage(theImage);
    }

    const closeSlider = (e) => {
        if (e.target.className==='right' || e.target.className==='left') return;
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
                className='__thumbnail'
                style={{
                    backgroundImage: `url(${backgrounds[i]})`
                }} 
                key={`Key ${i+1}`} 
                alt={`Image no. ${i+1}`} 
                onClick={displaySlider}
            >
                <div data-digit={i}>
                    <p data-digit={i}>{descriptions[i]}</p>
                </div>
            </div>
        )
    }
    
    return (
        <div className='Gallery'>
            <h1>Galeria</h1>
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
                    <img src={slides[currentImage]}/>
                </div>
                <p 
                    className='right'
                    onClick={nextImg}
                >&#8250;</p>
            </div>
        </div>
    )
}