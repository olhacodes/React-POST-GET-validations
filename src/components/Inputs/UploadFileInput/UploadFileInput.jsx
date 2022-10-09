import React, {useState} from 'react'; 
import Input from '../Input/Input';
import './uploadFileInput.styles.less';

function UploadFileInput() {
    const [isFileUploaded, setIsfileUploaded] = useState(false);

  return (
    <div className="upload-input">
        <div className={isFileUploaded ? '' : 'upload-input--wrapper'} dataText='Upload your photo'>
            <Input
            type="file"
                accept='image/*'
                onClick={() => setIsfileUploaded(true)}
            />
        </div>
    </div>
  )
}

export default UploadFileInput