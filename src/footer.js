function Footer() {

    const footerStyle = {
        backgroundColor: '#50237d',
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100vw',
        height: '40px',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingRight: '2%',
    };

    return (
        <div style={footerStyle} >
            <p className="text-right mb-0">© 2023 Wishsong Incorporated</p>
        </div >
    )
}

export default Footer;