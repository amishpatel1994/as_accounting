import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import ExperienceSection from '../components/ExperienceSection'
import ProjectSection from '../components/ProjectSection';

import pic8 from '../assets/images/portrait.jpg';
import Scroll from '../components/Scroll';
import './index.scss';

const sections = [
  { id: 'top', name: 'Home', icon: 'fa-home' },
  { id: 'about', name: 'About Us', icon: 'fa-user' },
  { id: 'experience', name: 'Services', icon: 'fa-book' },
  // { id: 'projects', name: 'Pricing', icon: 'fa-code' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi Aashna boo! My name is <strong>Amish</strong> but I'm actually not Amish...
            </h2>
            <p>Jack of all trades and on my quest to master the software stack</p>
          </header>

          <footer>
            <Scroll type="id" element={'experience'}>
              <a href="#experience" className="button">
                Let's dive in!
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="about" className="two">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            I found my love for software in my first year of undergrad and haven't looked back ever since. 
            I find thrill in getting my hands dirty with new technologies and pride myself for being a quick learner which is evident through a series of internships where I had to learn new tools from scratch everytime! 
          </p>
          <p>
            If you ask me for one characteristic that I am a big advocate of, it has to be lifelong learning. This not only ensures that you stay competitive in an ever evolving world, but also affects your mental wellbeing in a positive manner.
          </p>
          <p>
            Aside from coding, I am passionate about racquet sports (badminton in particular), photography, and travelling with loved ones. My favourite photo taken by me is located at the top as the background :D. Also, my favourite place I've been to so far is Cinque Terra in Italy which is where the above profile picture is from.
          </p>
          <p>
            That's it from me for now! If you have an impactful project you'd love for me to be a part of, please shoot me a message <Scroll type="id" element={"contact"}><a href="#contact"> below.</a></Scroll>
          </p>
        </div>
      </section>

      <section id="experience" className="three">
        <ExperienceSection />
      </section>

      <section id="projects" className="four">
        <ProjectSection />
      </section>

      <section id="contact" className="five">
        <div className="container">
          <header>
            <h2>Contact Me</h2>
          </header>

          <form
            action="https://formspree.io/amishpatel94@hotmail.com"
            method="POST"
          >
          <label>
            Your email:
            <input type="text" name="_replyto" />
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
