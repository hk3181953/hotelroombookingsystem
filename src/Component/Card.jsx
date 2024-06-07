import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import Mnavbar from '../Component/Mnavbar';
import Footer from '../Component/Footer';
import { Field, Form, Formik } from 'formik';

const Card = ({ name, picture, price, description }) => {
  const [openModal, setOpenModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bookingDays, setBookingDays] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [airConditioning, setAirConditioning] = useState('without');
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  const handleBooking = () => {
    // Handle booking logic here
    console.log({
      phoneNumber,
      bookingDays,
      bookingDate,
      airConditioning,
      numberOfPersons,
    });
    setOpenModal(false); // Close the modal after booking
  };

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-blue-600"><span className="text-white">Book a Room</span></Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <Formik initialValues={{ number: '', bdays: '', date: '',condition:'',noperson:''}}
              onSubmit={(values, { resetForm }) => {
                console.log(values)
                resetForm()
              }}
            >
              <form action="">
                <div>
                  <label className="block text-gray-700 mb-2 font-bold">Phone Number</label>
                  <Field name='number'
                    type="text"
                   
                   
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-bold">Booking Days</label>
                  <Field name='bdays'
                    type="number"
                   
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter number of days"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-bold">Booking Date</label>
                  <Field name='date'
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-bold">Air Conditioning</label>
                  <Field as="select" name="condition"
                  
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="with">With Air Conditioning</option>
                    <option value="without">Without Air Conditioning</option>
                  </Field>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-bold">Number of Persons</label>
                  <Field name='noperson'
                    type="number"
                    
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter number of persons"
                    min="1"
                  />
                </div>
              </form>
            </Formik>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button onClick={handleBooking} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
            Book Now
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)} className="border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-200">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="max-w-sm w-full bg-white rounded-lg shadow-md flex flex-col">
        <img className="w-full h-48 object-cover rounded-t-lg" src={picture} alt={name} />
        <div className="p-6 flex flex-col flex-grow">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base flex-grow">{description}</p>
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold text-indigo-600">PKR {price}</span>
          </div>
          <button onClick={() => setOpenModal(true)} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-md hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 transition-transform transform hover:scale-105 py-2 px-4 mt-4">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
