import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subs-heading">
                Join us in creating a world where every wag of the tail is a testament to a happy and fulfilled life.
                </p>
                <p className="footer-subs-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <button className="subscribe-button">Subscribe</button>                    </form>
                </div>
            </section>
            <section className="social-media">
                <div className='social-icons'>
                    <Link
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f' />
                    </Link>
                    <Link 
                    className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i className='fab fa-instagram' />
                    </Link>
                    <Link 
                    className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i className='fab fa-youtube' />
                    </Link>
                    <Link 
                    className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i className='fab fa-twitter' />
                    </Link>
                </div>
            </section>
            <a>© 2023 Paws & Play Canine Hub. All rights reserved.</a>
        </div>
    )
}

export default Footer;