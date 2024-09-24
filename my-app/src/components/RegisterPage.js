import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import myBackground from '../assets/lib.jpg';
import { useNavigate } from 'react-router-dom';




function RegisterPage() {
  const navigate = useNavigate(); // useNavigate hook'u
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun otomatik olarak yenilenmesini önlemek için
    fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,   // Formdan alınan name değeri
            email: email, // Formdan alınan email değeri
            password: password // Formdan alınan password değeri
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        navigate('/');
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};


  return (
    <MDBContainer fluid className='d-flex justify-content-center align-items-center' style={{
      backgroundImage: `url(${myBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form onSubmit={handleSubmit}>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' type='password' />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' label='I agree all statements in Terms of service' />
            </div>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit'>Register</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegisterPage;
