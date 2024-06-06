import React from 'react'


function ContactSection() {
    return (
        <>
            <div className='w-screen py-20 bg-[#f4f4f491] dark:bg-[#0808086e] border-[#a0a0a026] border-[0.1px]' id='contacts'>
                <div className='flex flex-col justify-center items-center w-full h-fit gap-20 px-5'>
                    <h1 className='dark:orange-gradient font-bold text-[40px] z-10 text-shadow-orange drop-shadow-orange lg:text-[60px]'>Contact Me.</h1>
                    <form action="https://getform.io/f/0efd2aaf-bc26-4464-bd39-ff1bbfbb48d0" method="POST" className="flex flex-col gap-5 md:w-1/2">
                        <input type="text" name="name" placeholder='name' className="rounded-lg dark:bg-transparent dark:text-white border bg-light-gray dark:border-white p-5 focus:bg-white" />
                        <input type="email" name="email" placeholder='email' className="rounded-lg dark:bg-transparent dark:text-white border bg-light-gray dark:border-white p-5 focus:bg-white" />
                        <input type="text" name="subject" placeholder='subject' className="rounded-lg dark:bg-transparent dark:text-white border bg-light-gray dark:border-white p-5 focus:bg-white" />
                        <textarea name="message" placeholder='message' id="" cols={0} rows={7} className="rounded-lg dark:bg-transparent bg-light-gray dark:text-white border dark:border-white p-5 resize-none focus:bg-white"></textarea>
                        <button type="submit" className="bg-black text-white font-medium dark:bg-orange-gradient rounded-full w-fit px-6 py-3 flex gap-1 hover:scale-105 active:scale-95 ease-in-out duration-75">
                            <h1>Send</h1>
                            <i className="uil uil-message button__icon"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactSection
