import React from 'react'
import Header from './navbar/header'
import Library from './library/library'
import StoryBlock from './storyBlock/back'
import StoryCard from './storyCard/back'
import About from './about/back'
import Different from './different/back'
import Free from './free/text'
import Footer from './footer/back'

const MainPage = () => {
  return (
    <>
    <Header />
    <Library />
    <StoryBlock />
    <StoryCard />
    <About />
    <Different />
    <Free />
    <Footer />
    </>
  )
}

export default MainPage