import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './LoginModal';
import AccountModal from './AccountModal';
import {Formik,Form,Field} from 'formik'

function Mnavbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Mock card data
  const cardData = {
    name: 'Premium Suite',
    price: '200',
    status: 'Available' // You can change this to 'Booked' to see the other status
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleAccountClick = () => {
    setIsAccountModalOpen(true);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleCloseAccountModal = () => {
    setIsAccountModalOpen(false);
  };

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const logoutFunction = () => {
    console.log("Logging out...");
    setIsLogoutModalOpen(false);
    window.location.href = '/';
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setActiveLink('Home');
    } else if (path === '/About') {
      setActiveLink('About');
    } else if (path === '/Contact') {
      setActiveLink('Contact');
    }
  }, []);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-lg font-bold">
            <img src="1.png" className="h-12 w-12" alt="HRBS Logo" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-blue-600 text-4xl">HS </span>
              <span className="text-gray-800">Hotel</span>
            </span>
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 rounded-md text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className="hidden md:flex space-x-4 items-center">
            <a href="/" className={`text-lg font-semibold ${activeLink === 'Home' ? 'text-blue-600' : 'text-gray-700'} dark:text-white dark:hover:text-blue-500`} onClick={() => setActiveLink('Home')}>Home</a>
            <a href="/About" className={`text-lg font-semibold ${activeLink === 'About' ? 'text-blue-600' : 'text-gray-700'} dark:text-white dark:hover:text-blue-500`} onClick={() => setActiveLink('About')}>About</a>
            <a href="/Contact" className={`text-lg font-semibold ${activeLink === 'Contact' ? 'text-blue-600' : 'text-gray-700'} dark:text-white dark:hover:text-blue-500`} onClick={() => setActiveLink('Contact')}>Contact</a>
            <button onClick={handleLoginClick} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-md hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 py-2 w-20 dark:focus:ring-purple-800 ease-in-out">Login</button>
            <button onClick={handleAccountClick} className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-500">
              <FontAwesomeIcon icon={faUser} className="text-lg" />
            </button>
            <button onClick={handleLogoutClick} className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-500">
              <FontAwesomeIcon icon={faSignOutAlt} className="text-lg" />
            </button>
          </div>
        </div>
      </nav>

      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />

      <AccountModal isOpen={isAccountModalOpen} onClose={handleCloseAccountModal} cardData={cardData} />

      <Modal dismissible show={isLogoutModalOpen} onClose={handleCloseLogoutModal}>
        <Modal.Header className="bg-blue-500 text-white"><span>Logout Confirmation</span></Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to log out?</p>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button color="gray" onClick={handleCloseLogoutModal} className="border border-gray-500 text-gray-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">Cancel</Button>
          <Button color="red" onClick={logoutFunction} className="border border-red-500 text-black font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out">Logout</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default Mnavbar;
