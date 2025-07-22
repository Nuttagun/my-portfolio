import './Skills.css';
import react from './../assets/react.png';
import typescript from './../assets/typescript.png';
import javascript from  './../assets/javascript.png';
import golang from './../assets/golang.png';
import html from './../assets/html.png';
import css from './../assets/css.png';
import taliwind from './../assets/taliwind.png';
import c from './../assets/c.png';
import java from './../assets/java.png';
import github from './../assets/github.png';
import mysql from './../assets/mysql.png';
import postgresql from './../assets/postgresql.png';
import figma from './../assets/figma.png';
import sqlite from './../assets/sqlite.png';
import postman from './../assets/postman.png';
const Skills = () => {
  return (
    <section id="skills" className="Skils">
      <div className='cotainer-skills-header'>
      <div className='skills-header'><h2>Tech Stack</h2></div>
      </div>
      <div className="skills-list">
        <div className="skill-card"><img src={react} alt='react'></img></div>
        <div className="skill-card"><img src={typescript} alt='typescript'></img></div>
        <div className="skill-card"><img src={javascript} alt='javascript'></img></div>
        <div className="skill-card"><img src={html} alt='html'></img></div>
        <div className="skill-card"><img src={css} alt='css'></img></div>
        <div className="skill-card"><img src={taliwind} alt='taliwind'></img></div>
        <div className="skill-card"><img src={golang} alt='golang'></img></div>
        <div className="skill-card"><img src={c} alt='c'></img></div>
        <div className="skill-card"><img src={java} alt='java'></img></div>
        <div className="skill-card"><img src={mysql} alt='mysql'></img></div>
        <div className="skill-card"><img src={sqlite} alt='sqlite'></img></div>
        <div className="skill-card"><img src={postgresql} alt='postgresql'></img></div>
        <div className="skill-card"><img src={github} alt='github'></img></div>
        <div className="skill-card"><img src={figma} alt='figma'></img></div>
        <div className="skill-card"><img src={postman} alt='postman'></img></div>
      </div>
    </section>
  );
};

export default Skills;