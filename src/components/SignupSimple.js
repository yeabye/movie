// src/components/Signup.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignupContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #616D7Edb;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #2C3539;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.h2`
  color: #000000;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #95a5a6;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3498db;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Signup = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = () => {
    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const usernameRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/;
    const phoneRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate full name
    if (!nameRegex.test(fullName)) {
      alert('Please enter a valid full name (letters only).');
      return;
    }

    // Validate username
    if (!usernameRegex.test(username)) {
      alert('Please enter a valid username (letters, numbers, and symbols only).');
      return;
    }

    // Validate phone number
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number (numbers only).');
      return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Check if all required fields are filled, including checkboxes
    if (username && fullName && phone && email && password) {
      // Implement actual signup logic (connect to backend)

      // Assuming signup is successful, navigate to the login page
      navigate('/login');
    } else {
      alert('Please fill out all required fields and check all checkboxes.');
    }
  };

  return (
    <SignupContainer>
      <Title>Create an account</Title>
      <Form>
        <Label>Username:</Label>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <Label>Full Name:</Label>
        <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

        <Label>Phone Number:</Label>
        <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <Label>Email:</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <Label>Password:</Label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <Button type="button" onClick={handleSignup}>
          Signup
        </Button>
      </Form>
    </SignupContainer>
  );
};

export default Signup;
