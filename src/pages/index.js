import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import ServicesSection from '../components/ServicesSection'

import Scroll from '../components/Scroll';
import './index.scss';
import AboutSection from '../components/AboutSection';

const sections = [
  { id: 'top', name: 'Home', icon: 'fa-home' },
  { id: 'about', name: 'About Us', icon: 'fa-user' },
  { id: 'service', name: 'Services', icon: 'fa-book' },
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
            <h2 className="main-heading">
              Professional Accounting Services
            </h2>
            <h3>For Individuals and Businesses</h3>
          </header>

          <footer>
            <Scroll type="id" element={'service'}>
              <a href="#service" className="button">
                Let's dive in!
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="about" className="two">
        <AboutSection />
      </section>

      <section id="service" className="three">
        <ServicesSection />
      </section>

      <section id="contact" className="five">
        <div className="container">
          <header>
            <h2>Contact Us</h2>
          </header>

          <form
            action="https://formspree.io/asbookkeepersgta@gmail.com"
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
