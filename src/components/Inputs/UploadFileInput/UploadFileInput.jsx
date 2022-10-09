import React, {useState} from 'react'; 
import './uploadFileInput.styles.less';

function UploadFileInput({fileInputRef}) {
  const [isFileUploaded, setIsfileUploaded] = useState(false);

  return (
    <div className="upload-input">
        <div className={`upload-input__wrapper ${isFileUploaded ? 'upload-input__wrapper--uploaded' : ''}`} data='Upload your photo'>
        <input
          ref={fileInputRef}
          type="file"
          required
          accept='image/*'
          onClick={() => setIsfileUploaded(true)}
          className={isFileUploaded ? 'upload-input--uploaded' : 'upload-input--input'}
            />
        </div>
    </div>
  )
}

export default UploadFileInput