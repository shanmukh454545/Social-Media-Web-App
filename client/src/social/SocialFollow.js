import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faFacebook,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function SocialFollow(){

    return (
          <div className="social-container">
             <h3>{'\u00A9'}Bhargav2022</h3>
             <a href="https://www.facebook.com/profile.php?id=100009334516874" target="_blank" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
             <a href="https://www.linkedin.com/in/bhargav-naidu-1a27b21b6/" target="_blank" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
             <a href="https://www.instagram.com/bhargav.naidu_/?hl=en" target="_blank" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
          </div>
    )
}
