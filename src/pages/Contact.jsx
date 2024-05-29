// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl text-center font-bold mb-6">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-white p-8 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input type="text" className="w-full mt-1 p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Second Name</label>
          <input type="text" className="w-full mt-1 p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">E-mail</label>
          <input type="email" className="w-full mt-1 p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full mt-1 p-2 border rounded"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
