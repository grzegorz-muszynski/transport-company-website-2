// import './Menu.scss';

export default function Menu() {

    return (
        <div className='Menu'>
            <div className='Menu__container'>
                <img src={require('../assets/logo.png')} />
                <ul>
                    {/* <li>O nas</li>
                    <li>Galeria</li>
                    <li>Kontakt</li>
                    <li>Zamów transport</li> */}
                    <li>O NAS</li>
                    <li>GALERIA</li>
                    <li>KONTAKT</li>
                    <li>ZAMÓW TRANSPORT</li>
                </ul>
            </div>
        </div>
    )
}