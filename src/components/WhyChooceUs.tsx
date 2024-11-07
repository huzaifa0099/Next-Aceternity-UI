"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicSchoolContent = [
    {
        title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
        description:
          'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
      },
    {
        title: "Behind the Beats: The Stories of Legendary Tracks",
        description: 'Dive deep into the creation of the most iconic songs in music history. Discover the stories, inspirations, and secrets behind the beats that shaped the world of music. Perfect for music enthusiasts and aspiring musicians alike!'
    },
    {
        title: "Mastering Music Theory: A Beginner's Journey",
        description: 'Embark on a journey to understand the building blocks of music. From scales and chords to rhythm and harmony, this series breaks down the fundamentals of music theory in a fun and engaging way.',
    
    },
    {
        title: "Inside the Studio: A Day in the Life of a Music Producer",
        description: 'Step into the studio and experience the creative process of a music producer. From selecting sounds to mixing and mastering, get a behind-the-scenes look at what it takes to craft the next big hit.'
    },
    {
        title: "Global Rhythms: Exploring World Music",
        description: 'Travel around the world through music! Discover unique instruments, traditional rhythms, and cultural sounds from different corners of the globe. A perfect series for those looking to expand their musical horizons.'
    },
]
function WhyChooceUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooceUs