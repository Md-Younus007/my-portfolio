import styles from './About.module.css';
import profileImg from "../assets/profile.JPG";

function About() {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <div className={styles.profileSection}>
        <img src={profileImg} alt="Profile" className={styles.profilePic} />
        <div>
          <p>Hello! I'm <strong>Md Younus</strong>, a passionate full-stack developer skilled in React, Django, and Python. I love building dynamic, responsive websites and solving real-world problems through clean and efficient code.</p>
          <p>I'm constantly learning new technologies and always up for a challenge. Let’s build something great together!</p>
        </div>
      </div>
    </div>
  );
}

export default About;