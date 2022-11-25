import React from 'react'
import Section from '../components/Section'
import { HomeContainer } from '../Styles/HomeStyled'

function Home() {
  return (
    <HomeContainer>
        <Section 
        title="Model Y"
        desc="Schedule a Test Drive"
        bg="./images/model-s.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory" />

        <Section 
        title="Model S"
        desc="Schedule a Test Drive"
        bg="./images/model-y.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory" />
        <Section 
        title="Model X"
        desc="Schedule a Test Drive"
        bg="./images/model-3.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"/>
        <Section 
        title="Model x"
        desc="Order Online for Touchless Delivery"
        bg="./images/model-x.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"/>
        <Section 
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        bg="/images/solar-panel.jpg"
        leftBtn="Order now"
        rightBtn="Learn More"
        />
        <Section 
        title="Solar for New Roofs"
        desc="Solar Roof costs less than a New Roof Solar Panels"
        bg="/images/solar-roof.jpg"
        leftBtn="Order now"
        rightBtn="Learn More"
        />
        <Section 
        title="Accesories"
        desc=""
        bg="/images/accessories.jpg"
        leftBtn="Shop now"
        
        />
        
    </HomeContainer>
    
  )
}

export default Home