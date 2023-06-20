// import './Contact.css';

export default function Contact() {

    return (
        <div className='Contact'>
            <h1>Kontakt</h1>
            <div className='__data'>
                <div className='__group'>
                        <h3>Dane kontaktowe</h3>
                        <p>✉️amglobal.transport@gmail.com</p>
                        <p>☎️tel: +48 517 292 766</p>
                        <p>TIMOCOM ID: 397427</p>
                </div>
                <div className='__group'>
                        <h3>Biuro</h3>
                        <p>ul. A. Mickiewicza 3</p>
                        <p>32-200 Miechów</p>
                </div>
                <div className='__group'>
                        <h3>Baza</h3>
                        <p>Bukowska Wola 46</p>
                        <p>32-200 Miechów</p>
                </div>
                <div className='__group'>
                        <h3>Dane do faktury</h3>
                        <p>AM GLOBAL Agnieszka Naziemiec</p>
                        <p>ul. A. Mickiewicza 3</p>
                        <p>32-200 Miechów</p>
                        <p>NIP: 659 154 29 24</p>
                        <p>NIP EU: PL 659 154 29 24</p>
                </div>
            </div>
            <div className='__maps'>
                <iframe class="both_maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.8198543436098!2d20.026717416950465!3d50.3556352208541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abda1107bce7%3A0x6a42016f3f4405d1!2sAdama%20Mickiewicza%203%2C%2032-200%20Miech%C3%B3w!5e1!3m2!1spl!2spl!4v1659712318277!5m2!1spl!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <iframe class="both_maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.2045152683827!2d20.0811871209933!3d50.357015989291455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717aeab80b77beb%3A0xd310b4ed1d6d7491!2sBukowska%20Wola%2046%2C%2032-200%20Bukowska%20Wola!5e1!3m2!1spl!2spl!4v1659711135366!5m2!1spl!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}