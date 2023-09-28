import React from 'react'
import Modal from '../../components/ui/Modal'

const TrashMsg = ({closeTrash, deleteImg, id, trashMsg}) => {
  return (
    <div className={`trash-full-msg  ${trashMsg && 'show'} `}>
    
      <Modal children={ 
      <div className='trash-msg '>
          <p>Are you sure you want to delete this picture?</p>
          <div className='trash-right' >
         <button onClick={closeTrash} className='dont-delete'>No, don't delete</button>
         <button className='delete' onClick={()=>deleteImg(id)}>Delete</button>
          </div>
       </div>
      } />
    </div>
  )
}

export default TrashMsg