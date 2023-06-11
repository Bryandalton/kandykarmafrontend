import React, { useState } from 'react';

function PopupModal() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleCloseButtonClick = () => {
    setShowPopup(false);
  };

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <button className="btnSubmit" onClick={handleButtonClick}>Submit</button>

      {showPopup && (
        <div style={{display:'flex', flexDirection: 'column', textAlign: 'center'}} className="popupModal">
          <h2>Thank you!</h2>
          <p>This is a frontend only version of Kandy Karma.<br/>
          The original cannot be hosted at this time but can be found at:<br/>
          <a href='https://github.com/Bryandalton/kandy-karma'>https://github.com/Bryandalton/kandy-karma</a> </p>
          <button style={{alignSelf: 'center'}} onClick={handleCloseButtonClick}>Close</button>
        </div>
      )}
    </div>
  );
}


export default PopupModal;