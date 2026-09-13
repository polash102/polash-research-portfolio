import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Life from './pages/Life'
import Achievements from './pages/Achievements'
import Outlook from './pages/Outlook'

export default function App(){
  return <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/certificates" element={<Achievements/>}/>
      <Route path="/life" element={<Life/>}/>
      <Route path="/outlook" element={<Outlook/>}/>
    </Routes>
  </Layout>
}
