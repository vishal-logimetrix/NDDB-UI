

import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import DairyServices from '../components/DairyServices'
import SuccessStories from '../components/SuccessStories'
import Cards from '../components/Cards'
import MajorHighlights from '../components/MajorHighlights'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
     <HeroCarousel />
     <DairyServices />
     <SuccessStories />
     <Cards />
     <MajorHighlights />
     <SocialMedia />
    </div>
  )
}

export default Home

