import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

export const HomeView = () => (
  <div className='jumbotron'>
    <p>
      Welcome to the Ad Director.
      Using this portal you are able to create new rules and push them to production.
      You are also able to search for an existing rule and edit when necessary.
    </p>
    <p>What would you like to do today?</p>
    <Link to='rule/new' role='button' className='btn btn-primary btn-lg'>
      <div className='glyphicon glyphicon-plus' />
      <span> Create Rule</span>
    </Link>
    <Link to='rules' role='button' className='btn btn-primary btn-lg'>
      <div className='glyphicon glyphicon-search' />
      <span> View / Edit Rule</span>
    </Link>
  </div>
)

export default HomeView
