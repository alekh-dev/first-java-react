import React from 'react'

function Navbar() {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>FullstackApp</div>
            <ul style={styles.navLinks}>
                <li style={styles.linkItem}><a href="Home" style={styles.link}>Home</a></li>
                <li style={styles.linkItem}><a href="Dashboard" style={styles.link}>Dashboard</a></li>
                <li style={styles.linkItem}><a href="#" style={styles.link}>Settings</a></li>
            </ul>
        </nav>
    )
}

// Inline styling to avoid messing with external CSS files
const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        padding: '15px 30px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    logo: {
        color: '#3498db',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navLinks: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: '20px',
    },
    linkItem: {},
    link: {
        color: '#ecf0f1',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'color 0.2s',
    }
}

export default Navbar
