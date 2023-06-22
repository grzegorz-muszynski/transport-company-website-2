// import './Footer.css';

export default function Footer(props) {

    return (
        <div className={props.language === 'pol' ? 'Footer-polish' : 'Footer-english'}></div>
    )
}