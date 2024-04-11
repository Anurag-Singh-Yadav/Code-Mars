import React from 'react';
import './contact.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {BiSolidPhoneCall} from 'react-icons/bi';
import {BsLinkedin,BsTwitter} from 'react-icons/bs';
function Contact() {
  return (
    <div className='relative'>
    <section className=''>
      <div className="container ">
        <div className="contactInfo bg-navcolor ml-3 text-white">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span><FaMapMarkerAlt></FaMapMarkerAlt></span>
                <span>
                MBH-A<br />
                  NIT Jalandhar<br />
                  Punjab
                </span>
              </li>
              <li>
                <span><MdEmail></MdEmail></span>
                <span><a href="mailto:anuragsinghyadav0005@gmail.com">Mail us</a></span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li><a href="https://twitter.com/iamAnurag0005"><BsTwitter></BsTwitter></a></li>
            <li><a href="https://www.linkedin.com/in/anurag-singh-yadav-02686322b/"><BsLinkedin></BsLinkedin></a></li>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" name="firstName" required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="lastName" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" name="email" required />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="mobileNumber" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea name="message" required></textarea>
              <span>Write your message here...</span>
            </div>
            <div className="inputBox rounded-md text-center bg-navcolor">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;
