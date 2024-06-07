import React, { useState } from 'react';
import { Button, TextInput } from "flowbite-react";
import { Field, Form, Formik } from 'formik';

function LoginModal({ isOpen, onClose }) {
  const [isSignIn, setIsSignIn] = useState(true);

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="bg-blue-500 rounded-t-lg py-6 px-8">
          <h2 className="text-3xl font-bold text-white mb-4">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
          <div className="flex mb-4">
            <button
              onClick={() => setIsSignIn(true)}
              className={`flex-1 py-2 text-center font-semibold ${isSignIn ? 'bg-white text-blue-500' : 'text-white'} rounded-l-lg hover:bg-white hover:text-blue-500 transition-colors duration-300`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignIn(false)}
              className={`flex-1 py-2 text-center font-semibold ${!isSignIn ? 'bg-white text-blue-500' : 'text-white'} rounded-r-lg hover:bg-white hover:text-blue-500 transition-colors duration-300`}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="px-8 py-6">
          {isSignIn ? (
            <Formik initialValues={{email:'',password:''}} 
            onSubmit={(values,{resetForm})=>{
              console.log(values)
              resetForm()
            }}
            >
            <Form className="flex max-w-md flex-col gap-4">
              <div>
                <Field name='email' class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg" id="email1" type="email" placeholder="Email" required />
              </div>
              <div>
                <Field name='password' class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg" id="password1" type="password" placeholder="Password" required />
              </div>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-colors duration-300">
                Submit
              </Button>
            </Form>
            </Formik>
          ) : (
            <Formik initialValues={{name:'',email:'',password:''}} 
            onSubmit={(values,{resetForm})=>{
              console.log(values)
              resetForm()
            }}
            >
            <Form className="flex max-w-md flex-col gap-4">
              <div>
                <Field name="name" class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg" id="name" type="text" placeholder="Name" required />
              </div>
              <div>
                <Field name="email" class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg" id="email2" type="email" placeholder="Email" required />
              </div>
              <div>
                <Field name="password" class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg" id="password2" type="password" placeholder="Password" required />
              </div>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-colors duration-300">
                Submit
              </Button>
            </Form>
            </Formik>
          )}
          <button onClick={onClose} className="mt-4 text-sm text-gray-500 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105">
            Close
          </button>

        </div>
      </div>
    </div>

  );
}

export default LoginModal;
