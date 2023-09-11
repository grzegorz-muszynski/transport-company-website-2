import { Link } from 'react-router-dom';

export default function ThanksPol() {
    return (
        <div className='ThanksPol'>
            <Link to="https://amglobal.pl">
                <div className='__modal'>
                    <div className='__text'>
                        <p>Dziękujemy za wypełnienie formularza.</p>
                        <p>Wkrótce się z Tobą skontaktujemy.</p>
                        <img src={require('../assets/logoDarkBlue2.png')} alt='Wycena usług transportowych na terenie Unii Europejskiej' />
                    </div>
                </div>
            </Link>
        </div>
    )
}