import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/victormadridb/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://twitter.com/victormadridb'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/victormadridb/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
            <a href='https://github.com/victormadridb'>
                <img src="/img/github2.png" alt='GitHub' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Victor Madrid</strong>
    </footer>
}

export default Footer