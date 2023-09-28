import React, {useState} from 'react'

const UploadImages = () => {
    const [uploadContent, setUploadContent]= useState('')

    const changeUpload=(e)=>{
      setUploadContent(e.target.files[0].name)
   }

   const chooseFile=(e)=>{
      e.preventDefault()
      const btn = document.querySelector('#defaultBtn')
      btn.click()
   }

  return (
      <div className='service-provider-top-down '>
        <div >
         <br/>
         <p className='upload-p url-p service-provider-inline'>Upload Pictures of your work (minimum of 6 images are required)</p>
                     
         <div className="upload-combo service-provider-inline">
            <input
            className='upload-input'
            disabled
            type="text"
            placeholder='Drag & Drop Images Here'
            value={uploadContent}
            onChange={(e)=>setUploadContent(e.target.value)}
                     />
            <input  id='defaultBtn' hidden type="file" placeholder='none' onChange={changeUpload}
                      />
            <button id='customBtn' className='upload-btn' onClick={chooseFile}>Choose File</button>
                  </div><br/>
                  <p className='service-provider-inline service-provider-upload-paragraph'>Supports: JPG, JPEG2000, PNG, PDF</p><br/>
                  </div>
                        </div>
  )
}

export default UploadImages