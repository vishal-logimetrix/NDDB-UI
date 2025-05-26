
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MilkProducer from '../pages/MilkProducer'
import SeamenStation from '../pages/SeamenStation'
import NewInitiative from '../pages/NewInitiative'
import Publications from '../pages/Publications'
import Career from '../pages/Career'
import Tenders from '../pages/Tenders'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/milk-producer" element={<MilkProducer />} />
        <Route path="/seamen-station" element={<SeamenStation />} />
        <Route path="/new-initiative" element={<NewInitiative />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/career" element={<Career />} />
        <Route path="/tenders" element={<Tenders />} />
        {/* Add other routes here */}
      </Route>
    </Routes>
  )
}

export default AppRoutes

