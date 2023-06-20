// import './About.scss';

export default function About() {

    return (
        <div className='About'>
            <img src={require('../assets/turbines.jpg')} alt="Wind Turbines" />
            <span className="About__text">
                <h1>O nas</h1>
                <p>Trasy międzynarodowe to nasza codzienność, a dużym atutem firmy są doświadczeni kierowcy. Stawiamy przede wszystkim na solidność, rzetelność i bezpieczeństwo. Usługi transportowe świadczymy wykorzystując samochody ciężarowe o DMC powyżej 3,5 tony i długości 9,3 m. Dla usprawnienia transportu część samochodów wyposażona jest w windy załadowcze i wózki paletowe. We wszystkich pojazdach istnieje możliwość załadunku bokiem, górą lub tyłem.</p>            
            </span>
        </div>
    )
}