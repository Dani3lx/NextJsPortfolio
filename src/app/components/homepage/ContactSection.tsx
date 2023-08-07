'use client'
import React from 'react'
import { motion } from "framer-motion"


function ContactSection() {
    return (
        <>
            <div className='w-screen py-20 bg-[#080808] border-[#a0a0a026] border-[0.1px]' id='contacts'>
                <motion.div className='flex flex-col justify-center items-center w-full h-fit gap-20 px-5'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}>
                    <h1 className='orange-gradient font-bold text-[40px] z-10 text-shadow-orange drop-shadow-orange lg:text-[60px]'>Contact Me</h1>
                    <form action="https://getform.io/f/0efd2aaf-bc26-4464-bd39-ff1bbfbb48d0" method="POST" className="flex flex-col gap-5 w-1/2">
                        <input type="text" name="name" placeholder='name' className="bg-transparent text-white border border-white p-5" />
                        <input type="email" name="email" placeholder='email' className="bg-transparent text-white border border-white p-5" />
                        <input type="text" name="subject" placeholder='subject' className="bg-transparent text-white border border-white p-5" />
                        <textarea name="message" placeholder='message' id="" cols={0} rows={7} className="bg-transparent text-white border border-white p-5"></textarea>
                        <button type="submit" className="text-white bg-orange-gradient rounded-full w-fit px-6 py-3 flex gap-1 hover:scale-105 active:scale-95 ease-in-out duration-75">
                            <h1>Send</h1>
                            <i className="uil uil-message button__icon"></i>
                        </button>
                    </form>
                </motion.div>
            </div>
        </>
    )
}

export default ContactSection
