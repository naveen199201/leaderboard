import React, {useState} from 'react'
import './App.css'
import Modal from './Modal'
import './Banner.css'
const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className='banner'>
      <img src={require('./assets/Banner.png')} alt='banner' className='banner-img'/>
      <button className='open-modal-button' onClick={openModal}>Add Member</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Banner