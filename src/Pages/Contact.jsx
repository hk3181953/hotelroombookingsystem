import React, { useEffect } from 'react';
import Mnavbar from '../Component/Mnavbar';
import Footer from '../Component/Footer';
import { Field, Form, Formik } from 'formik';
import emailjs from 'emailjs-com';

const mapStyle = {
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
};

const Contact = () => {



  return (
    <>
      <Mnavbar />
      <img src="pexels-karlsolano-2883047.jpg" className='w-full h-[500px] object-cover' alt="Contact Banner" />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-12 lg:py-20 px-4 mx-auto max-w-screen-md">
          <h1 className="mt-5 text-6xl font-bold text-center text-gray-900 dark:text-white">
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">C</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 absolute top-0 left-0 animate-ping">C</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">ontact</span>
            </span>
          </h1>
          <p className="mt-5 mb-12 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          
          <Formik initialValues={{ email: '', subject: '', message: '' }} 
            onSubmit={(values, { resetForm }) => {
            
            }}
          >
            <Form className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Your email</label>
                <Field name='email' type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@hshotel.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left">Subject</label>
                <Field name='subject' type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let us know how we can help you" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 text-left">Your message</label>
                <Field name='message' as="textarea" id="message" rows="6" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required />
              </div>
              <button className='w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-md hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 transition-transform transform hover:scale-105' type="submit">Send Message</button>
            </Form>
          </Formik>
        </div>
      </section>

      <div className="mt-12" style={mapStyle}>
        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5752894679486!2d67.04266031500918!3d24.931789984003002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e804e077349%3A0x43f7b2c8f791745e!2sAptech%20North%20Nazimabad%20Center!5e0!3m2!1sen!2s!4v1623086790854!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
