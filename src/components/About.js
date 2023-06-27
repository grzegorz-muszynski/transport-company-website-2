// import './About.scss';

export default function About(props) {

    return (
        <div className='About'>
            <img src={require('../assets/turbines.jpg')} alt="Firma transportowa AM Global | Miechów | Transport międzynarodowy | Małopolskie | Auta ciężarowe | Zamów transport" />
            <span className="About__text">
                <h1>{props.language === 'pol' ? 'O nas' : 'About'}</h1>
                <p>
                    {props.language === 'pol' ? 
                    'Trasy międzynarodowe to nasza codzienność, a dużym atutem firmy są doświadczeni kierowcy. Stawiamy przede wszystkim na solidność, rzetelność i bezpieczeństwo. Usługi transportowe świadczymy wykorzystując samochody ciężarowe o DMC powyżej 3,5 tony i długości 9,3 m. Dla usprawnienia transportu część samochodów wyposażona jest w windy załadowcze i wózki paletowe. We wszystkich pojazdach istnieje możliwość załadunku bokiem, górą lub tyłem.' 
                    : 
                    'International routes are our everyday life, and experienced drivers are a great advantage of the company. We focus primarily on reliability and safety. We provide transport services using trucks with a GVM of over 3.5 tons and a length of 9.3 m. To facilitate transport, some of the vehicles are equipped with tail lifts and pallet trucks. All vehicles can be loaded from the side, top or back.'}
                </p>            
            </span>
        </div>
    )
}