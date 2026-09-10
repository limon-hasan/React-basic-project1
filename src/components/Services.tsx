import React from 'react';
import ServiceImage from "../assets/service.png"

const Services = () => {
    return (
        <div className='my-[80px] container mx-auto'>
            <h2 className='text-3xl font-bold mb-4 text-[#179800]'>Our 
            Services</h2>
            <div className='grid grid-cols-3 gap-4  py-8 '>
                <div className='rounded-md shadow-2xl border-gray-500 p-4'>
                    <img src = {ServiceImage} alt = "Service" className='mx-auto'></img>
                    <h2 className='text-4xl font-bold text-center mb-2'>
                        Our <span className='text-[#179800]'>services</span>
                    </h2>
                    <p className='text-center'>
                        We ofer e wide range of service 
                    </p>
                </div>
                <div className='rounded-md shadow-2xl border-gray-500 p-4'>
                    <img src = {ServiceImage} alt = "Service" className='mx-auto'></img>
                    <h2 className='text-4xl font-bold text-center mb-2'>
                        Our <span className='text-[#179800]'>services</span>
                    </h2>
                    <p className='text-center'>
                        We ofer e wide range of service 
                    </p>
                </div>
                <div className='rounded-md shadow-2xl border-gray-500 p-4'>
                    <img src = {ServiceImage} alt = "Service" className='mx-auto'></img>
                    <h2 className='text-4xl font-bold text-center mb-2'>
                        Our <span className='text-[#179800]'>services</span>
                    </h2>
                    <p className='text-center'>
                        We ofer e wide range of service 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;