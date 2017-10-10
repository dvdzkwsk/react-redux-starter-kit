import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import UserBox from '../../components/UserBox'


const listItems=(list)=>{
  return list.map((item,key)=>{
    return (<li key={key} className={item.active?classes.active:''}>{item.title}</li>)
  })
}


export const Header = (props) => (
  <div>
    <div className={classes.gHeader}>
      <div className={classes.gHeaderInner}>
        <div className={classes.ahLogo}></div>
        <UserBox></UserBox>
        <ul className={classes.navbar}>

         {listItems(props.listItem)}
        </ul>

        </div>
    </div>
    
    {/* <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link> */}
  </div>
)

export default Header
