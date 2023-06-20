// import './Order.css';

export default function Order() {

    return (
        <div className='Order'>
            <h1>Formularz kontaktowy</h1>
            <p>Zachęcamy do wypełnienia formularzu poniżej abyśmy mogli skontaktować się z Państwem w najbliższym możliwym terminie.</p>
            <form action="https://formsubmit.co/amglobal.transport@gmail.com">
            
                <div className='__area'>
                    <div className='__column'>
                        <input type="text" name="Imię" required placeholder="Imię i nazwisko" autofocus/>
                        <input type="email" name="E-mail" required placeholder="Adres e-mail" />
                        <input type="text" name="Numer telefonu" required placeholder="Numer telefonu" />
                        <input type="date" name="date" />
                        <input type="text" name="Miejsce dostawy" placeholder="Kod pocztowy miejsca dostawy" />
                        <input type="number" name="Waga" placeholder="Waga w tonach" />
                        <input type="number" name="LDM" placeholder="Ilość metrów ładownych" />
                    </div>
                    
                    {/* <input type="hidden" name="_next" value="https://amglobal.pl/thankyou.html"/> */}

                    <textarea name="comment" placeholder="Komentarz do wyceny" rows="8"></textarea>

                    <input type="hidden" name="_subject" value="Zapytanie o wycenę transportu"/>
                </div>
                <button type="submit">Wyślij</button>
                {/* <button type="submit">WYŚLIJ</button> */}
            </form>
        </div>
    )
}