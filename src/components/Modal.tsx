import React, { type ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close';

interface ModalType {
  modalActive: boolean
  onClose: () => void
  children: ReactNode
}

export default function Email({ modalActive, onClose, children }: ModalType) {
  if (!modalActive) return null

  return (
    <div
      className="modal fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-1-0"
      onClick={onClose}
    >
      <div
        className="modal-body animate-scale-in flex justify-around "
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#5a3e60',
          }}
        >
          <CloseIcon fontSize="large" />
        </button>
        {children}
      </div>
    </div>
  )
}
