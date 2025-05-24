import React from "react";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <section id="resume" className={styles.resume}>
      <h2>Download Resume</h2>
      <a className={styles.downloadBtn} href="/resume.pdf" download>Download PDF</a>
    </section>
  );
};

export default Resume;