export default function Footer(props: {language: string}) {

    return (
        <div className={props.language === 'pol' ? 'Footer-polish' : 'Footer-english'}></div>
    )
}