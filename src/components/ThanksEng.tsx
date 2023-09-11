import { Link } from 'react-router-dom';

export default function ThanksEng() {
    return (
        <div className='ThanksEng'>
            <Link to="/eng">
                <div className='__modal'>
                    <div className='__text'>
                        <p>Thank you for your inquiry</p>
                        <p>We'll respond as soon as possible.</p>
                        <img src={require('../assets/logoDarkBlue2.png')} alt='Wycena usług transportowych na terenie Unii Europejskiej' />
                    </div>
                </div>
            </Link>
        </div>
    )
}