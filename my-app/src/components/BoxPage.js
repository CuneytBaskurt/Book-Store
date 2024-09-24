import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function BoxPage() {
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        const fetchBoxes = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/box'); // API'ye istek gönder
                if (!response.ok) {
                    throw new Error('Ağ hatası: ' + response.status);
                }
                const data = await response.json();
                console.log(data); // Gelen veriyi konsola yazdır
                setBoxes(data); // Gelen veriyi durum değişkenine kaydet
            } catch (error) {
                console.error('Hata oluştu:', error);
            }
        };

        fetchBoxes(); // Verileri al
    }, []);

    const handleBuy = () => {
        alert('SİPARİŞİNİZ BAŞARIYLA ALINMIŞTIR!');
        setBoxes([]); // Box tablosunu temizle
        
        // Buraya sepete ekleme işlemi ekleyebilirsiniz.
    };

    return (
        <div style={{
            backgroundColor: '#696969', // Turuncu arka plan rengi
            minHeight: '100vh', // Sayfanın en az 100vh yüksekliğinde olmasını sağlar
            padding: '20px', // İçerik için biraz boşluk ekleyin
            color: 'black' // Yazı rengini beyaz yaparak okunabilirliği artırın
        }}>


            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>SEPETİM</h1>
            </div>
            <br /><br />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    width: 'calc(100% - 300px)',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '10px', // Kavisli köşeler için
                    display: 'flex', // İçerik için flexbox kullan
                    flexDirection: 'column', // Dikey olarak diz
                    alignItems: 'center', // Dikey olarak ortala
                }}>
                    {boxes.map((box) => (
                        <div key={box.id} style={{
                            width: '100%',
                            height: '120px', // Her bir kutunun yüksekliği
                            backgroundColor: 'pink',
                            margin: '10px 0', // Aralarındaki boşluk
                            color: 'white', // Yazı rengi
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start', // İçeriği sola yasla
                            padding: '10px', // İçerik için boşluk ekle
                        }}>
                            
                            <h5>{box.title} - {box.price}₺</h5> {/* Yazar ve fiyatı göster */}
                            
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <h4>Toplam Tutar : </h4>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button
                    variant="outline-success"
                    style={{ backgroundColor: 'black' }}
                    onClick={handleBuy}
                >
                    SATIN AL
                </Button>
            </div>
            </div>
    );
}

export default BoxPage;
