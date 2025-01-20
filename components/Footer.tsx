import React from 'react'
import LogoRB from './LogoRB'

const Footer = () => {
  return (
    <div>
        <footer className="footer bg-secondary text-base-content p-10">
  <aside>
    <LogoRB />
    <p>
      RB Top Up Game Development by Bima Adam
      <br />
      RB Games since 2022
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
  <div className="join">
  <input className="input input-bordered join-item" placeholder="Email" />
  <button className="btn join-item rounded-r-full">Subscribe</button>
</div>
  </nav>
</footer>
    </div>
  )
}

export default Footer