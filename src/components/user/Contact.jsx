import React from 'react';
import './contact.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {BiSolidPhoneCall} from 'react-icons/bi';
import {BsLinkedin,BsTwitter} from 'react-icons/bs';
function Contact() {
  return (
    <div className='relative'>
    <section>
      <div className="container">
        <div className="contactInfo bg-navcolor ml-3 text-white">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span><FaMapMarkerAlt></FaMapMarkerAlt></span>
                <span>
                  184 Ippokratous Street<br />
                  Athens, Gr<br />
                  11472
                </span>
              </li>
              <li>
                <span><MdEmail></MdEmail></span>
                <span><a href="mailto:nassosanagn@gmail.com">Mail us</a></span>
              </li>
              <li>
                <span><BiSolidPhoneCall></BiSolidPhoneCall></span>
                <span>702-279-3488</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li><a href="https://twitter.com/nassosanagn"><BsTwitter></BsTwitter></a></li>
            <li><a href="https://www.linkedin.com/in/nassos-anagnostopoulos-2b9631196/"><BsLinkedin></BsLinkedin></a></li>
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
