import React, { type ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close';

interface ModalType {
    modalActive: boolean
    onClose : () => void
    children: ReactNode
}

export default function Email( {modalActive, onClose, children}:ModalType ) {

    if(!modalActive) return null
  return (
    <div className='modal fixed inset-0  bg-opacity-10 flex items-center flex-col justify-center z-50'onClick={onClose}>
        <button onClick={onClose} style={{cursor:'pointer'}}><CloseIcon/></button>
        <div className="modal-body">
            {children}
        </div>
      
    </div>
  )
}
