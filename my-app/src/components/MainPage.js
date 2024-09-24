import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function MainPage() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/all-photos') // Endpoint'i güncelleyin
        .then(response => {
            setPhotos(response.data);
        })
        .catch(error => {
            console.error('API çağrısı sırasında hata:', error);
        });
}, []);


  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };
  

  const filteredPhotos = selectedGenre
    ? photos.filter(photo => {
        // categories özelliğini kontrol et
        if (photo.categories) {
          const categories = JSON.parse(photo.categories);
          return categories.includes(selectedGenre);
        }
        return false; // categories yoksa filtrele
      })
    : photos;

  return (
    
    <div style={{
      backgroundColor: '#696969', 
      minHeight: '100vh', // Sayfanın en az 100vh yüksekliğinde olmasını sağlar
      padding: '20px', // İçerik için biraz boşluk ekleyin
      color: 'black' // Yazı rengini beyaz yaparak okunabilirliği artırın
  }}>

    
      <Navbar expand="lg"  style={{ backgroundColor :'black'}} variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Kitap Mağazası</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={() => navigate('/book')}>İletişim</Nav.Link>
              <Nav.Link onClick={() => navigate('/box')}>Sepetim</Nav.Link>
              <NavDropdown title="Filtreler" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={() => handleGenreSelect('Art')}>Art</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect('Biography & Autobiography')}>Biography & Autobiography</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect('Cooking')}>Cooking</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect('Drama')}>Drama</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect('Fiction')}>Fiction</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect('History')}>History</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect('Music')}>Music</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect('Nature')}>Nature</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect('Poetry')}>Poetry</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect('Travel')}>Travel</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Ara..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Bul</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
        Popüler Kitaplar
      </div>

      <Container className="mt-4">
        <Row>
          {filteredPhotos.map((photo, index) => (
            <Col key={index}>
              <div className="rectangle" style={{ width: '200px', height: '250px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', position: 'relative' }}>
                <img src={photo.imageLink} alt={`Kitap ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Button variant="primary" style={{ position: 'absolute', bottom: '0px', right: '0px' }}  onClick={() => navigate('/book', { state: { book: photo } })}>İncele</Button>
                <h6>{photo.title}</h6>
              </div>
              <br />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
  );
}

export default MainPage;
