import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from './pages/Inicial'
import Noticias from './pages/Noticias'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Contato from './pages/Contato'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Inicial/>}/>
        <Route path='/noticias' element={<Noticias/>}/>
        <Route path='/a-faculdade' element={<Faculdade/>}/>
        <Route path='/dpo-lgpd' element={<DpoLgpd/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
