import React from 'react'
import fastFood from '../images/fast-food.svg'
import veg from '../images/Vegetables & Drinks.svg'
import drinks from '../images/Drinks & Cocktails.svg'
import resturants from '../images/resturant.svg'
import illustration1 from '../images/Illustration_1.svg'
import illustration2 from '../images/illustration_2.svg'
import illustration3 from '../images/illustration_3.svg'
import {FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa'
import ServingCardMethod from './servingCardMethod'
import InterestCard from './interestCard'

const Foodbag  = () => {
    return (
        <div className ="foodbag-content">
            <section className='intro'>
                <div className="foodbag-intro">
                    <h1>FoodBag</h1>
                    <p>Anything food, we have you covered</p>
                </div>
            </section>
            <section className='location-section'>
                <h3>Where are you</h3>
                <select name="" id="" className='location'>
                    <option value="Bodija">Bodija Market</option>
                </select>
            </section>
            <section className='interest-section'>
                <h3>Pick an interest</h3>
                <div className="interest-category">
                    <InterestCard 
                        src={fastFood}
                        alterntives="fast-food"
                        interestTitle="Fast food"
                        interestNote="All sorrows are less with bread"
                    />
                    <InterestCard 
                        src={veg}
                        alterntives="vegetables-fruits"
                        interestTitle="Vegetables & Fruits"
                        interestNote="May not want it, but good for you."
                    />
                    <InterestCard 
                        src={drinks}
                        alterntives="drinks-cocktails"
                        interestTitle="Drinks & Cocktails"
                        interestNote="All sorrows are less with bread"
                    />
                    <InterestCard 
                        src={resturants}
                        alterntives="resturants"
                        interestTitle="Resturants"
                        interestNote="All sorrows are less with bread."
                    />
                </div>
            </section>
            <hr />
            <section className='how-we-serve'>
                <h2>How we Serve you</h2>
                <div className='serving-approach'>
                    <ServingCardMethod 
                        src={illustration1}
                        alternative="illustration1"
                        methodHeader="Tell us where you are"
                        methodDetails="Select the location you want us to deliver."
                    
                    />
                    <ServingCardMethod 
                        src={illustration2}
                        alternative="illustration2"
                        methodHeader="Tell us what you want"
                        methodDetails="Browse the type of food that interest you."
                    
                    />
                    <ServingCardMethod 
                        src={illustration3}
                        alternative="illustration3"
                        methodHeader="We'll come running"
                        methodDetails="Your order will be delivered to you in no time."
                    
                    />
                </div>
            </section>
            <hr />
            <section className='contact-us'>
                <div className='contact-details'>
                    <p>Contact us</p>
                    <div className='contact-icons'>
                        <FaTwitter className='social-media'/>
                        <FaYoutube className='social-media'/>
                        <FaFacebookF className='social-media'/>
                    </div>
                </div>
            </section>
            <footer>
                <p>Terms & Conditions. Privacy Policy</p>
                <p>&copy; Copyright 2021 FoodBag is a registered trademark</p>
            </footer>
        </div>
    )
}

export default Foodbag