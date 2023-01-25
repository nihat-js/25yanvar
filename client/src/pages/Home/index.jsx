import React from 'react'
import { Link } from "react-router-dom"
import './index.scss'


import imagePortfolio1 from '../../assets/img/portfolio-1.jpg'
import Nav from '../../components/Nav'

export default function Index() {
  return (
    <div className='home-page'>
        <Nav/>
      <section className='hero'>
        <h3 className="subtitle"> Welcome to our studio  </h3>
        <h1 className="title"> IT'S NICE TO MEET YOU </h1>
        <button> Tell me more </button>
      </section>

      <section className="services">
        <div className="container">
          <h3 className="title">SERVICES</h3>
          <p className="subtitle"> Lorem ipsum dolor sit amet consectetur. </p>
          <div className="row">
            <div className="box">
              <div className="img-wrap">
                <img src="" alt="" />
              </div>
              <h2 className="title">E-Commerce </h2>
              <p className="subtitle"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className='portfolio'>
        <div className="container">
          <h3 className="title">PORTFOLIO</h3>
          <p className="subtitle"> Lorem ipsum dolor sit amet consectetur. </p>
          <div className="row">
            <div className="box">
              <img src={imagePortfolio1} alt="" />
            </div>
            <div className="box">
              <img src={imagePortfolio1} alt="" />
            </div>
            <div className="box">
              <img src={imagePortfolio1} alt="" />
            </div>
            <div className="box">
              <img src={imagePortfolio1} alt="" />
            </div>
            <div className="box">
              <img src={imagePortfolio1} alt="" />
            </div>
            <div className="box">
              <img src={imagePortfolio1} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h3 className="title">ABOUT</h3>
          <p className="subtitle"> Lorem ipsum dolor sit amet consectetur. </p>

          <div className="row">
            <div className="box">
              <img src="" alt="" />
            </div>
          </div>


        </div>
      </section>


      <section className="team">
        <div className="container">
          <h2 className="title"> OUR TEAM </h2>
          <p className="subtitle"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <div className='row'>
            <div className="box">
              <div className="img-wrap">
                <img src="" alt="" />
              </div>
              <h4 className="name">Easton Garland  </h4>
              <p className="position">Team Leader</p>
              <div className="social">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="contact">
        <div className="container">
          <h3 className="title"> CONTACT US </h3>
          <p className="subtitle"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <form action="">
            <div className="row">
              <div className="left-column">
                <div className="name-group">
                  <input type="text" />
                </div>
                <div className="email-group">
                  <input type="text" />
                </div>
                <div className="phone-group">
                  <input type="text" />
                </div>
              </div>
              <div className="right-column">
                <div className="message-group">
                  <textarea />
                </div>
              </div>
            </div>
            <div className="action">
              <button> Send Message </button>
            </div>
          </form>
        </div>
      </section>


      <footer>
        <div className="row">
          <div className="social">
            <i className='fas fa-shopping-cart'> </i>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <p className="copyright">Copyright © All Rights Reserved</p>
        </div>
      </footer>


    </div>
  )
}
