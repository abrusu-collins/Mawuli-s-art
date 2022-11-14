function Footer() {
    let year = new Date().getFullYear();
    return ( 
        <footer>
            <p>&copy; {year} : Collins Abrusu, All rights Reserved.</p>
        </footer>
     );
}

export default Footer;