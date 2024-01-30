import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterClient from './pages/RegisterClient'
import ClientsList from './pages/ClientsList'
import Header from './components/Header'

function App() {

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/clientslist' element={<ClientsList />} />
        <Route path='/registerclient' element={<RegisterClient />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
