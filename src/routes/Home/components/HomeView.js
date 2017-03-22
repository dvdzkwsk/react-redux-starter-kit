import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <section className="search">
      <div className="content">
        <div className="tagline">The simplest way to hire
          <div className="morphist"></div>
        </div>
        <form className="search-box">
          <div className="form-group">
            <label>I'm looking for</label>
          </div>
        </form>
      </div>
    </section>

    <section className="trending-services">
      <h2 className="title">Trending Services</h2>
      <div className="content">
        <div className="services">
          <Link to=''>test</Link>
        </div>
        <div className="services-more">
          <Link to="/services">All Services</Link>
        </div>
      </div>
    </section>

    <section className="why-seekster"></section>
    <section className="testimonials"></section>
    <section className="how-it-works"></section>
    <section className="join-our-team"></section>
    <section className="as-seen-on"></section>
  </div>
)

export default HomeView
