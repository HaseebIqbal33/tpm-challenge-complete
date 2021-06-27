import React from 'react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="footer">
      <section className="footer-columns-container">
        <div className='footer-column'>
          <h3>Product</h3>
          <a href="#">Pricing</a>
        </div>
        <div className='footer-column'>
          <h3>Company</h3>
          <a href="#">Blog</a>
        </div>
        <div className='footer-column'>
          <h3>Help</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
        <div className='footer-column'>
          <h3>Contact</h3>
          <a href="#">Contact Us</a>
        </div>
      </section>

      <section className="company-info-container">
        <p>&copy; 2021 TPM Inc. All Rights Reserved</p>
        <div>
          <img src="/images/twitter-icon.svg" />
          <img src="/images/linkedin-icon.svg" />
        </div>
      </section>

    </footer>
  )
}
