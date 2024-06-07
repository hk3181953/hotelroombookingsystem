import React, { useState } from 'react';
import Mnavbar from '../Component/Mnavbar';
import Footer from '../Component/Footer';
import Card from '../Component/Card';
import { Button, Modal } from "flowbite-react";
import axios from 'axios';


function Home() {


  const [data, setData] = useState([]);



  const fetchData = () => {

    const response = axios.get("https://dummyjson.com/products").then(
      function (result) {
        setData(result.data.products);
      }
    ).catch(
      function (err) {
        console.log(err)
      }
    )


  }

  fetchData();
  const [showModal, setShowModal] = useState(false);

  const cardData = [
    {
      id: 1,
      name: 'Suite Room',
      picture: 'pexels-pixabay-262048.jpg',
      price: 10000,
      description: 'An elegant suite with separate living and sleeping areas, offering premium amenities.'
    },
    {
      id: 2,
      name: 'Superior Room',
      picture: 'pexels-pixabay-271624.jpg',
      price: 20000,
      description: 'Spacious room featuring modern decor, a queen-sized bed, and a comfortable seating area.'
    },
    {
      id: 3,
      name: 'Family Room',
      picture: 'pexels-pixabay-210265.jpg',
      price: 63000,
      description: 'A large room perfect for families, with two queen-sized beds and a kid-friendly environment.'
    },
    {
      id: 4,
      name: 'Deluxe Room',
      picture: 'pexels-pixabay-210604.jpg',
      price: 25500,
      description: 'A luxurious room with a king-sized bed, city view, and complimentary breakfast.'
    },
    {
      id: 5,
      name: 'Executive Room',
      picture: 'pexels-pixabay-279746.jpg',
      price: 50000,
      description: 'A premium room designed for business travelers, featuring a work desk and high-speed internet.'
    },
    {
      id: 6,
      name: 'Presidential Suite',
      picture: 'pexels-suhel-vba-1749662-3659683.jpg',
      price: 40000,
      description: 'Our most luxurious suite with a panoramic view, private balcony, and exclusive services.'
    },
  ];

  return (
    <>
      <Mnavbar />
      <img src="pexels-konstantinos-eleftheriadis-916620-2034335.jpg" className="w-full h-[500px] object-cover" alt="Hotel View" />
      <h1 className="mt-5 text-6xl font-bold text-center text-gray-900 dark:text-white">
        <span className="relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">R</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 absolute top-0 left-0 animate-ping">R</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">ooms</span>
        </span>
      </h1>

      <div className="min-h-screen flex items-center justify-center ">
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {data.map((card) => (

            <Card
              key={card.id}
              name={card.title}
              picture={card.images[0]}
              price={card.price}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <Modal show={showModal} size="lg" popup={true} onClose={() => setShowModal(false)}>
        <Modal.Header className="font-bold text-2xl text-gray-700 dark:text-gray-300">
          Booking Form
        </Modal.Header>
        <Modal.Body>
          <form className="space-y-6">

            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="text" id="name" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" id="email" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@example.com" required />
            </div>
            <div>
              <label htmlFor="roomType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Room Type</label>
              <select id="roomType" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                {cardData.map((card) => (
                  <option key={card.id} value={card.name}>{card.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="checkin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Check-in Date</label>
              <input type="date" id="checkin" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
            <div>
              <label htmlFor="checkout" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Check-out Date</label>
              <input type="date" id="checkout" className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
            <Button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-md hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 transition-transform transform hover:scale-105">Book Now</Button>
          </form>
        </Modal.Body>
      </Modal>
      <Footer />
    </>
  );
}

export default Home;
