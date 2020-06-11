import React from 'react';


export default function Footer () {
    return (
        <nav className="navbar has-shadow is-fixed-bottom" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo' />
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <button className="button is-primary" href='#'>
                        <strong>Sign up</strong>
                    </button>
                    <button className="button is-light" href="#">
                        Log in
                    </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}