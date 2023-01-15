import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import img from '../src/assets/img/me.jpg'
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
function App() {

  return (
    <div className="App">
      <div className="card">
        <img src={img} alt="" className="card-img" />
        <div className="card-body">
          <h2 className="card-title">Ashique Murad</h2>
          <p className="card-subtitle">Full Stack Web Developer</p>
          <div className="btns">
            <a href="mailto:ashiquemurad@gmail.com">
              <button className="btn-email">Email</button>
            </a>
            <a href="https://www.linkedin.com/in/ashique-murad-07834b120/">
              <button className="btn-linkedin">Linkedin</button>
            </a>
          </div>
          <h4>About</h4>
          <p>
            As a computer science engineer, I possess a strong foundation in
            computer science and programming concepts. My experience in full
            stack web development has allowed me to develop a wide range of
            skills, including expertise in front-end technologies such as HTML,
            CSS, and JavaScript, as well as back-end technologies such as
            Node.js and PHP. I am able to use my knowledge and experience to
            build responsive, high-performing and user-friendly web applications
            that meet the needs of my clients.
          </p>
          <h4>Interests</h4>
          <p>
            I have a passion for food and enjoy experimenting with different
            cuisines and ingredients in the kitchen. I also enjoy playing video
            games and travelling, it allows me to explore new cultures and
            experience new things.
          </p>
        </div>
        <div className="card-footer">
          <a href="https://www.facebook.com/ash.riko01/">
            <FaFacebookF className="icons" size={24} color="#2577F2" />
          </a>
          <a href="https://www.linkedin.com/in/ashique-murad-07834b120/">
            <FaLinkedin className="icons" size={24} color="#1E66C2" />
          </a>
          <a href="https://github.com/Ashique01">
            <FaGithub className="icons" size={24} color="#BDBFC1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App
