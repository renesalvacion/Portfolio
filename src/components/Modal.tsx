import React, { type ReactNode } from "react";
import { Close } from "@mui/icons-material";


interface ModalProps {
  modalActive: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Email({ modalActive, onClose, children }: ModalProps) {
  if (!modalActive) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-body relative bg-white rounded-xl shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-fuchsia-700"
        >
          <Close fontSize="medium" />
        </button>
        {children}
      </div>
    </div>
  );
}
