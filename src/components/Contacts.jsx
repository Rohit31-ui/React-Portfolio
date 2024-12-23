import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ejsifsd', 'template_52mqn51', form.current, {
        publicKey: 'mWoLLnyiUlVNZJjN8',
      })
      .then(
        () => {
          setMessageSent(true);
          form.current.reset(); // Clear all inputs
          setTimeout(() => setMessageSent(false), 3000); // Hide the message after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" id='contacts'>
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-2xl transform transition-all hover:scale-105">
        <h1 className="text-2xl font-bold text-center text-purple-800 mb-5">Get in touch</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="from_name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="from_email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none text-white focus:ring-2 focus:ring-purple-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
          >
            Send
          </button>
        </form>
        {messageSent && (
          <div className="mt-5 p-4 text-white bg-green-500 rounded-md text-center">
            Message sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
