export default function Order(props: {language: string}) {
    return (
        <div className='Order'>
            <h1>{props.language === 'pol' ? 'Formularz kontaktowy' : 'Contact form'}</h1>
            <p>{props.language === 'pol' ? 
                'Zachęcamy do wypełnienia formularzu poniżej abyśmy mogli skontaktować się z Państwem w najbliższym możliwym terminie.' 
                : 
                'We encourage you to fill out the form below so that we can contact you as soon as possible.'}
            </p>
            <form 
                action="https://formsubmit.co/amglobal.transport@gmail.com" method="POST"
            >
                <div className='__area'>
                    <div className='__column'>
                        <input type="text" name="Imię" required 
                            placeholder={props.language === 'pol' ? 'Imię i nazwisko' : 'Name and surname'} />
                        <input type="email" name="E-mail" required 
                            placeholder={props.language === 'pol' ? 'Adres e-mail' : 'E-mail address'} />
                        <input type="text" name="Numer telefonu" required 
                            placeholder={props.language === 'pol' ? 'Numer telefonu' : 'Phone number'} />
                        <input type="date" name="date" />
                        <input type="text" name="Miejsce dostawy" 
                            placeholder={props.language === 'pol' ? 'Kod pocztowy miejsca dostawy' : 'Destination postal code'} />
                        <input type="number" name="Waga" 
                            placeholder={props.language === 'pol' ? 'Waga w tonach' : 'Weight (tons)'} />
                        <input type="number" name="LDM" 
                            placeholder={props.language === 'pol' ? 'Ilość metrów ładownych' : 'Loading meters'} />
                    </div>

                    <textarea name="comment" rows={8}
                        placeholder={props.language === 'pol' ? 'Komentarz do wyceny' : 'Commentary'}></textarea>

                    <input type="hidden" name="_subject" value="Zapytanie o wycenę transportu"/>
                </div>

                {/* <button> replaced with <input> due to Safari browser */}
                <input id='__button' type='submit' value={props.language === 'pol' ? 'WYŚLIJ' : 'SUBMIT'} />

                <input 
                    type="hidden" 
                    name="_next" 
                    value={props.language === 'pol' ? 
                        "https://amglobal.pl/#/thankspol" :
                        "https://amglobal.pl/#/thankseng"}
                ></input>
            </form>
        </div>
    )
}