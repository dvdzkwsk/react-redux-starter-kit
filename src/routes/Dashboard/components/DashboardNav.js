import React from 'react'
import { Link } from 'react-router'
import  './DashboardNav.scss'

export const DashboardNav = () => (
  <div className="dashboard-nav">
    <div className="dashboard-nav-group dashboard-nav-left">
      <h3 className="title">Dashboard</h3>
    </div>
    <div className="dashboard-nav-group dashboard-nav-center">
      <ul className="navigation">
        <li className="active">
          <Link to='/dashboard/active'>Active Requests</Link>
        </li>
        <li className="inactive">
          <Link to='/inactive'>Inactive Requests</Link>
        </li>
      </ul>
    </div>
    <div className="dashboard-nav-group dashboard-nav-right">
      <ul className="dashboard-nav-actions">
        <li>
          <a href="">New Inquiry</a>
        </li>
      </ul>
    </div>
  </div>
)

export default DashboardNav
