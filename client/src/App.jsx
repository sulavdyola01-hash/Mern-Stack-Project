import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Guitars from './pages/Guitars'
import HeadlessGuitars from './pages/HeadlessGuitars'
import Basses from './pages/Basses'
import Amplifiers from './pages/Amplifiers'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/guitars" element={<Guitars />} />
        <Route path="/headless-guitars" element={<HeadlessGuitars />} />
        <Route path="/basses" element={<Basses />} />
        <Route path="/amplifiers" element={<Amplifiers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
