import React from 'react';
import { useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function BookPage() {
    const location = useLocation();
    const book = location.state?.book; // Gönderilen kitabı alıyoruz
    

    const handleAddToCart = async () => {
        const bookData = {
            id: book?.id,
            image_link: book?.imageLink,
            authors: book?.authors,
            price: book?.price,
            title: book?.title
        };

        try {
            const response = await fetch('http://localhost:8080/api/box', { // Burada kendi API uç noktanızı kullanın
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookData),
            });
    
            if (response.ok) {
                alert(`Kitap sepete eklendi!`);
            } else {
                alert('Sepete eklerken bir hata oluştu.');
            }
        } catch (error) {
            console.error('Hata:', error);
            alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        }
    };

    

    return (
        <div style={{
            backgroundColor: '#696969', // Turuncu arka plan rengi
            minHeight: '100vh', // Sayfanın en az 100vh yüksekliğinde olmasını sağlar
            padding: '20px', // İçerik için biraz boşluk ekleyin
            color: 'black' // Yazı rengini beyaz yaparak okunabilirliği artırın
        }}>
            <div style={{ display: 'flex', marginTop: '10px', marginLeft: '10px' }}>
                <div className="rectangle" style={{ width: '300px', height: '300px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6' }}>
                    <img src={book?.imageLink} alt={book?.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <h1 style={{ fontSize: '30px', marginTop: '20px' }}>YAZAR : {book?.authors}</h1>
                    <h1 style={{ fontSize: '30px', marginTop: '20px' }}>SAYFA SAYISI : {book?.pageCount}</h1>
                    <h1 style={{ fontSize: '30px', marginTop: '20px' }}>TÜR : {book?.categories}</h1> {/* Türleri normal şekilde göster */}
                    <h1 style={{ fontSize: '30px', marginTop: '20px' }}>FİYAT : {book?.price}₺</h1>
                    <h1 style={{ fontSize: '30px', marginTop: '20px' }}>PUAN : {book?.rating}</h1>
                </div>
            </div>

            <div>
                <h1 style={{ fontSize: '50px', marginLeft: '10px', marginTop: '10px' }}>KİTABIN KONUSU</h1>
                <div className="rectangle" style={{
                    width: 'calc(100% - 20px)',
                    height: '200px',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    marginLeft: '10px',
                    marginRight: '10px',
                    borderRadius: '10px' // Kavisli köşeler için
                }}>
                    <h1>{book?.description}</h1> {/* Kitabın konusunu gösterin */}
                </div>
            </div>

            <Button variant="outline-success" style={{ marginTop: '10px', marginLeft: '10px', backgroundColor: 'black' }} onClick={handleAddToCart}>
                SEPETE EKLE
            </Button>
        </div>
    );
}

export default BookPage;
