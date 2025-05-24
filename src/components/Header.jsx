import React from "react";
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Md Younus</div>
      <nav className={styles.nav}>
        <Link to="/Hero">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        {/* <Link to="/resume">Resume</Link> */}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;