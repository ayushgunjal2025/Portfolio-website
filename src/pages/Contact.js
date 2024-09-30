import React from 'react'
import img1 from "../assets/profile-pic__2_-removebg-preview.png"
import Ctemplate from '../components/Ctemplate'

function Contact() {
  return (
    <Ctemplate
    heading1="Contact me"
    des1 ="Join our community by creating an account to gain access to exclusive content and stay updated with my latest projects"
    des2="Feel free to reach out to me using the form below"
    img1={img1}
    />
  )
}

export default Contact
