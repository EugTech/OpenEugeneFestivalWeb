import React from 'react'
import { Link } from 'gatsby'
import press from '../static/OEF-press.pdf'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: '1rem' }}>
    <Link
      to={props.to}
      activeStyle={{ background: '#2b2b2b', color: 'white' }}
      style={{ color: '#2b2b2b', textDecoration: 'none' }}
    >
      {props.children}
    </Link>
  </li>
)

const Navbar = ({ children }) => (
  <div>
    <ul style={{ listStyle: `none`, margin: 'auto' }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/projects">Projects</ListLink>
      <ListLink to="/sessions">Sessions</ListLink>
      <ListLink to="/sponsors">Sponsors</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to={press}>Press Release</ListLink>
    </ul>
  </div>
)

export default Navbar

// style={{
//   margin: 'auto',
//   display: 'flex',
//   justifyContent: 'space-around',
// }}
