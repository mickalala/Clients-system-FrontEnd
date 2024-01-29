import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import RegisterClient from './Pages/RegisterClient'
import ClientsList from './Pages/ClientsList'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/clientslist' element={<ClientsList />} />
        <Route path='/registerclient' element={<RegisterClient />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
