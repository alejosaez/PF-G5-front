'use client'
import React, { useState } from 'react';
import { FaInfoCircle, FaBriefcase, FaAlignLeft, FaFolder, FaImage, FaLaptopHouse, FaMapMarkerAlt, FaMoneyBillAlt } from 'react-icons/fa';
import Image from 'next/image';
import Contact from '../../../public/contact.svg'

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ({target}:any) => {
    const {name, value} = target
    setData({
        ...data,
        [name]: value
    })
  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);
  
      const response = await fetch('https://formspree.io/f/meqyynvz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("¡Gracias por tu mensaje!");
        setData({ name: '', email: '', message: '' }); // Limpiar el estado
      } else {
        const errorData = await response.json();
        setStatus(`Oops! Hubo un problema al enviar el formulario: ${errorData.error || response.statusText}`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus("Oops! Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  return (

    <div className='mt-[100px] px-[124px]'>
        <div className="mx-auto max-w-screen-xl pb-8">
        <div className="flex gap-[90px] mobile:flex-col md:flex-row">
          <div className="lg:col-span-2 flex flex-col gap-[80px]">
            <p className="max-w-xl text-[30px] text-[#05264E] font-semibold mobile:text-center md:text-start">
              Contact Us
            </p>
            <Image src={Contact} width={100} height={1} alt='' className="w-[1200px]" />
          </div>

        <div className="relative block overflow-hidden rounded-lg border-gray-100 p-4 sm:pt-6 sm:pr-6 sm:pl-6 lg:pt-8 lg:pr-8 lg:pl-8 form-container shadow-md w-full">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <form onSubmit={submitForm} className="space-y-6">
                <div className="flex items-center">
                    <div className="w-10 text-[#3C65F5]">
                        <FaBriefcase className="w-5 h-5" />
                    </div>
                    <div className="flex-grow relative">
                        <input
                            onChange={handleChange} 
                            className="w-full text-gray-700 text-base focus:outline-none pl-0 pr-3 py-2 peer"
                            placeholder="Nombre"
                            value={data.name}
                            type="text"
                            name='name'
                            id="name"
                            required 
                        />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gray-300 transition-all duration-300 peer-focus:w-full peer-focus:bg-[#3C65F5]" style={{ width: 'calc(100% - 3rem)' }}></div>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="w-10 text-[#3C65F5]">
                        <FaBriefcase className="w-5 h-5" />
                    </div>
                    <div className="flex-grow relative">
                        <input
                            onChange={handleChange} 
                            className="w-full text-gray-700 text-base focus:outline-none pl-0 pr-3 py-2 peer"
                            placeholder="Email"
                            value={data.email}
                            type="email"
                            name='email'
                            id="email"
                            required 
                        />
                        <div className="absolute bottom-0 left-0 h-0.5 bg-gray-300 transition-all duration-300 peer-focus:w-full peer-focus:bg-[#3C65F5]" style={{ width: 'calc(100% - 3rem)' }}></div>
                    </div>
                </div>
             
                <div className="flex items-start">
                <div className="w-10 text-[#3C65F5] mt-2">
                  <FaAlignLeft className="w-5 h-5" />
                </div>
                <div className="flex-grow relative">
                  <textarea
                    onChange={handleChange}
                    className="w-full h-[80px] text-gray-700 text-base focus:outline-none pl-0 pr-3 py-2 resize-none peer"
                    placeholder="Mensaje"
                    value={data.message}
                    id="message"
                    name="message"
                    rows={4}
                    required
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gray-300 transition-all duration-300 peer-focus:w-full peer-focus:bg-[#3C65F5]" style={{ width: 'calc(100% - 3rem)' }}></div>
                </div>
              </div>
                <div>
                    <button
                    type="submit"
                    className="w-full text-white px-4 py-3 rounded font-semibold transition duration-300"
                    style={{ backgroundColor: '#4537D4' }}
                    >
                        Enviar
                    </button>
                </div>
                {status && <div className="text-green-500 text-center">{status}</div>}
            </form>
        </div>
        </div>
        </div>
    </div>
  );
};

export default ContactForm;