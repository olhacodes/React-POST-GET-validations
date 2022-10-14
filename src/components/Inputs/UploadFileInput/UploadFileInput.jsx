import React, {useState} from 'react'; 
import './uploadFileInput.styles.less';

function UploadFileInput({fileInputRef, errorMessage}) {
  const [isFileUploaded, setIsfileUploaded] = useState(false);
  errorMessage = errorMessage === 'Image is invalid.' || errorMessage === 'The photo may not be greater than 5 Mbytes.' ? errorMessage : null;

  return (
    <div className={`upload-input${errorMessage ? '--error' : ''}`}>
        <div className={`upload-input__wrapper ${isFileUploaded ? `upload-input__wrapper--uploaded ${errorMessage ? 'upload-input__wrapper--error' : ''}` : ''}`} data='Upload your photo'>
          <input
            id='file'
            ref={fileInputRef}
            type="file"
            required
            accept='image/*'
            onClick={() => setIsfileUploaded(true)}
            className={isFileUploaded ? 'upload-input--uploaded' : 'upload-input--input'}
          />
          {errorMessage ? <span className='upload-input__helper-text'>{errorMessage}</span> : null}
        </div>
    </div>
  )
}

export default UploadFileInput