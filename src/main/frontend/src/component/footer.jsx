import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>
                    &copy; {currentYear} FullstackApp. All rights reserved.
                </p>
                <div style={styles.links}>
                    <a href="#" style={styles.link}>Privacy Policy</a>
                    <span style={styles.separator}>|</span>
                    <a href="#" style={styles.link}>Terms of Service</a>
                    <span style={styles.separator}>|</span>
                    <a href="#" style={styles.link}>Contact Support</a>
                </div>
            </div>
        </footer>
    )
}

const styles = {
    footer: {
        backgroundColor: '#2c3e50',
        color: '#bdc3c7',
        padding: '20px 0',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
        fontFamily: 'sans-serif',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 30px',
        flexWrap: 'wrap',
        gap: '10px',
    },
    text: {
        margin: 0,
        fontSize: '14px',
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    link: {
        color: '#3498db',
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'color 0.2s',
    },
    separator: {
        color: '#7f8c8d',
        fontSize: '12px',
    }
}

export default Footer
