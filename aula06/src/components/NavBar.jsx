import React from 'react'
import { Link } from 'react-router-dom'
import Contato from '../pages/Contato'
import Noticias from '../pages/Noticias'
import DpoLgpd from '../pages/DpoLgpd'
import Faculdade from '../pages/Faculdade'

const NavBar = () => {
  return (
    <nav>
        <Link style={{ padding: '10px' }} to="/">Inicial</Link>
        <Link style={{ padding: '10px' }} to='/contato'>Contato</Link>
        <Link style={{ padding: '10px' }} to='/noticias'>Noticias</Link>
        <Link style={{ padding: '10px' }} to='/dpo-lgpd'>DpoLgpd</Link>
        <Link style={{ padding: '10px' }} to='/a-faculdade'>Inicial</Link>
    </nav>
  )
}

export default NavBar