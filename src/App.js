import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {

  const [text, setText] = useState('');
  const [qrCodeText, setQRCodeText] = useState('');
  const generateQR = () => {
    setQRCodeText(text);
  }
  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let path = document.createElement("a");
    path.href = qrCodeURL;
    path.download = "QR_Code.png";
    document.body.appendChild(path);
    path.click();
    document.body.removeChild(path);
  }

  return (
    <div className='container'>
        <div className="card">
            <h2>Please enter your text</h2>
            <div className="qr-input">
                <input
                 className='card__input'
                 placeholder='type...' 
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                />
            </div>
            <div   className='card__box'>
                <QRCode 
                    className='img'
                    id="qrCodeEl"
                    size={150}
                    value={qrCodeText}
                />
            </div>  
            <button className='card_btn' onClick={generateQR}>Generate</button>
            <button className='card_btn card__btn-second' onClick={downloadQRCode}>Download </button>
        </div>
        <a href='https://github.com/NUKUS777/QR_Code_Generator' className='link'>GitHub Link</a>
    </div>
  );
}

export default App;
