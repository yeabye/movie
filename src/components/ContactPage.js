import React from 'react';
import styled from 'styled-components';
import { FaTelegram, FaInstagram, FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #040720;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContactHeading = styled.h2`
  color: #3498db;
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ContactLabel = styled.div`
  font-weight: bold;
  margin-right: 10px;
  font-size: 32px;
  color: #333;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #3498db;
  cursor: pointer;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #2980b9;
  }
`;

const RightsReserved = styled.div`
  margin-top: 40px;
  text-align: center;
  color: #555;
  font-size: 14px;
`;


const ContactPage = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>

      <ContactItem>
        <ContactLabel><FaTelegram /></ContactLabel>
        <ContactLink href="https://t.me/@jedidiyah5" target="_blank" rel="noopener noreferrer">
        @jedidiyah5
        </ContactLink>
      </ContactItem>

      <ContactItem>
        <ContactLabel><FaInstagram /></ContactLabel>
        <ContactLink href="https://www.instagram.com/@yidu_jemal" target="_blank" rel="noopener noreferrer">
        @yidu_jemal
        </ContactLink>
      </ContactItem>

      <ContactItem>
        <ContactLabel><FaPhone /></ContactLabel>
        <ContactLink href="tel:+251994186476">
        +251994186476
        </ContactLink>
      </ContactItem>

      <ContactItem>
        <ContactLabel><FaEnvelope /></ContactLabel>
        <ContactLink href="yidujemal@gmail.com">
        yidujemal@gmail.com
        </ContactLink>
      </ContactItem>

      <ContactItem>
        <ContactLabel><FaMapMarker /></ContactLabel>
        <p>Arround Sabian, Dire Dawa, Ethiopia</p>
      </ContactItem>
      <RightsReserved>All Rights Reserved © 2023</RightsReserved>
    </ContactContainer>
  );
};

export default ContactPage;
