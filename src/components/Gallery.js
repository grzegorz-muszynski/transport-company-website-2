import { useEffect } from 'react';

export default function Gallery() {
    let thumbnails = [];

    // useEffect(() => {
        for (let i = 1; i < 8; i++) {
            thumbnails.push(
            <img 
                className='__thumbnail'
                src={require(`../assets/thumbnails/img${i}.jpg`)} 
                key={`Key ${i}`} 
                alt={`Image no. ${i}`} 
            />)
        }
    // }, [])

    return (
        <div className='Gallery'>
            <h1>Galeria</h1>
            <div className='__grid'>
                {thumbnails.map((image, index) => (
                    thumbnails[index]
                ))}
            </div>
        </div>
    )
}