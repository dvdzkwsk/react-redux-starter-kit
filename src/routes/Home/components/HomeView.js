import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <Link to="/services">Services</Link>
  </div>
)

export default HomeView
