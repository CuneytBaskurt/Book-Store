import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
// Resmi içe aktarıyoruz
import myBackground from '../assets/lib.jpg';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formun otomatik olarak yenilenmesini önlemek için
    fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        if (response.status === 401) {
            throw new Error('Unauthorized');
        }
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        navigate('/main'); // Başarılı girişte yönlendirme
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("E-posta veya şifre hatalı!!");
    });
};

  return (
    <MDBContainer fluid className='d-flex justify-content-center align-items-center' style={{
      backgroundImage: `url(${myBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '600px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">WELCOME TO BOOK STORE</h2>
              <p className="text-white-50 mb-5">Please enter your e-mail and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" value={email}  onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" value={password}  onChange={(e) => setPassword(e.target.value)}/>

              <form  onSubmit={handleSubmit}>
              <MDBBtn className='w-100 mb-4' size='lg'>Login</MDBBtn>
              </form>

              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <div>
                <p className="mb-0">Don't have an account? <Link to="/register" className="text-white-50 fw-bold">Sign Up</Link></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
