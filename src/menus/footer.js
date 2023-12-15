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
        left: 0,
        right: 0,
        bottom: 0,
        paddingRight: '4%',
        marginTop: 'auto',
    };



    return (
        <div style={footerStyle} className='text-center'>
            <p className="text-center mb-0">© 2023 Wishsong Incorporated</p>
        </div>

    )
}

export default Footer;