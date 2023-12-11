function Footer() {

    const footerStyle = {
        backgroundColor: '#50237d',
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '40px',
        position: 'relative',
        bottom: '0',
    };

    return (
        <div style={footerStyle} >
            <p className="text-right mb-0">© 2023 Wishsong Incorporated</p>
        </div >
    )
}

export default Footer;