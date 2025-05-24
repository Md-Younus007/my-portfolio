import React from "react";
import styles from "./Footer.module.css";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Follow Me</h4>
          <ul>
            <li><a href="https://github.com/Md-Younus007" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/md-younus-78ba281a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</a></li>
            <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Contact Me</h4>
          <form action="https://formspree.io/f/mzzrqbpg" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Md Younus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;