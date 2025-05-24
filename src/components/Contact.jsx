import React from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/mzzrqbpg" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className={styles.details}>
        <p>Email: younusmohd779@gmail.com</p>
        <p>Phone: +91-8328097832</p>
        <p>Location: Hyderabad, India</p>
        <div className={styles.socials}>
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
        </div>
        </div>
    </section>
  );
}