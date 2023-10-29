import React from 'react'
import Page from '../new/page'

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handlePageClose = () => {
        onClose();
    }

    return (
   
        
              
            
                    <Page onClose={handlePageClose} />
             
          
       
    );
};

export default Modal
