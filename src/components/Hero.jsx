import React from "react";
import styles from "./Hero.module.css";
import profileImg from "../assets/profile.JPG";



const Hero = () => {
  return (
    <section className={styles.hero} id="home">
        {/* <div className={styles.imageContainer}>
            
        <img src={profileImg} alt="Md Younus" className={styles.image} />
      </div> */}
      <div className={styles.text}>             
        <h1>Hello, I’m <span>Md Younus</span></h1>
        <p>Python Developer & Technical Support Specialist</p>
        <p> a passionate full-stack developer skilled in React, Django, and Python. I love building dynamic,<br/> responsive websites and solving real-world problems through clean and efficient code.</p>
        <a href="/Redesigned_Md_Younus_Resume.pdf" download className={styles.button}>Download Resume</a>
      </div>
      
    </section>
  );
};

export default Hero;