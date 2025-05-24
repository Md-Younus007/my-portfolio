import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'File Converter Web App',
    description: 'Convert PDF, Word, Excel, PNG, JPG with split, merge, compress features. Built using Django + React.',
    link: '#',
  },
  {
    title: 'QR Code Generator',
    description: 'Generate QR codes from text or URLs. React frontend with real-time preview and download.',
    link: '#',
  },
  {
    title: 'Modern Portfolio',
    description: 'Responsive portfolio using ReactJS, Framer Motion, animations, and CSS transitions.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className={styles.grid}>
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              View Project ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}