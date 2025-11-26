import { Container } from 'react-bootstrap'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from '../pages/Inicial'
import CustomNavbar from './components/CustomNavbar'
import Faculdade from '../pages/Faculdade'

function App() {

  return (<>
  <BrowserRouter>
    <CustomNavbar/>
    <Container className='my-4'>
      <Routes>
        <Route path='/a-faculdade' element={<Faculdade/>}/>
        <Route path='/' element={<Inicial/>}/>
      </Routes>
    </Container>
  </BrowserRouter>
  </>
  )
}

export default App
