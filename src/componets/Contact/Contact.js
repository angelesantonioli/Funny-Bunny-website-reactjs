import './Contact.css'

const Contact = () => {
    return <div className='contactContainer' >
        <h2> Contacto</h2>
        <div className='contactContent'>
            <h4> Nuestro email: funnybunny@funnybunny.com</h4>
            <h4> Nuestro celular: +86 195 1793 6843</h4>
            <a href="https://www.instagram.com/from.moonlight_/?hl=es" target="_blank">
                <button>Chatea con nosotros</button>
            </a>
        </div>
    </div>
}

export default Contact;