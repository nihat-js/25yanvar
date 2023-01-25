import './index.scss'

import {Link } from 'react-router-dom'


export default function Nav() {
  return (
    <nav>
    <h2 className="brand"> <Link to='/'> Studio  </Link> </h2>
    <ul className="links">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/'> Crud  </Link></li>
      <li><Link to='/'> Services </Link></li>
      <li> <Link to='/about'>  Portfolio </Link>  </li>
      <li> <Link to='/about'>  About </Link>  </li>
      <li> <Link to='/about'>  Team </Link>  </li>
      <li> <Link to='/about'>  Contact </Link>  </li>
    </ul>
  </nav>
  )
}
