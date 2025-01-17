import React from 'react'

import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className='hero-title'>
                <h1>Contentful cms</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Commodi excepturi doloribus quas explicabo adipisci itaque,
                    est sapiente tenetur sint ea iusto dolorum pariatur impedit.
                    Doloremque animi beatae rerum eligendi qui?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, perspiciatis?
                </p>
            </div>
            <div className='img-container'>
                <img src={heroImg} alt="woman and the browser" className='image'/>
            </div>
        </div>
    </section>
  )
}

export default Hero