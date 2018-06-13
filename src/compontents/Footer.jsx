import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const year = new Date().getFullYear();
        return (
            <footer className="page-footer font-small unique-color-dark mt-4 bg-dark text-white footer">
                <div className="footer-copyright text-center py-3">
                    © {year} Copyright: SKNI KOD
                </div>
            </footer>
        );
    }
}

export default Footer;