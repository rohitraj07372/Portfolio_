import React, { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import '../components/Skills.css';
function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const [state, handleSubmit] = useForm("xyyryodg");
      useEffect(() => {
        if (state.succeeded) {
          toast.success("Thank you for connecting");
    
          // Clear form fields after successful submission
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        }
      }, [state.succeeded]);


      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   
      //   console.log('Form submitted:', formData);
      //    
      // };
    
//className={`min-h-[calc(100vh-3.5rem)] bg-cover bg-fixed ${hamIsClicked ?"blur-sm opacity-80 ":""} bg-gray-900 bg-center  bg-[url(https://picsum.photos/1920/1080)] relative`
  return (
    <div className=' w-screen h-[calc(100vh-3.5rem] bg-[url(https://picsum.photos/1920/1080)]  bg-yellow-100 p-8 bg-cover bg-fixed'>
    <div className="glassmorphic-container max-w-md mx-auto mt-8 p-6 bg-slate-100  rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <form onSubmit={handleSubmit} >
      <div className="mb-4 text-slate-950" >
        <label htmlFor="name" className="block text-sm font-medium  ">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium  ">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium  ">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>
      <button
        type="submit" disabled={state.submitting}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline-blue active:bg-yellow-800 shadow-inner shadow-yellow-800"
      >
        Submit
      </button>
    </form>
  </div>
  <ToastContainer/>
  </div>
);
};
  


export default Contact
