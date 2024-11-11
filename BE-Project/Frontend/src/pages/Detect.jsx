import React from 'react';
import './Detect.css';

function Detect() {
  return (
    <div className="detect-page">
      <div className="detect-banner">
        <div className="detect-heading">

          <h1>Click here to detect <br />deepfake</h1>
          
        </div>
        <div className="detect-upload-button">
          <button>Upload Files</button>
        </div>
        
      </div>
      <div className="detect-file-details">
          <p>uploaded file : file_name</p>
          {/* Appears after uploading files */}
          <button className="detect-button">Detect</button>
      </div>
      <div className="detect-result">
            <h1>Result:<span className="detect-real">Real</span>/<span className="detect-fake">Fake</span></h1>
            <h1>Confidance:<span className="detect-confidance">89.90</span></h1>
        </div>
      
    </div>

  );
}

export default Detect;
