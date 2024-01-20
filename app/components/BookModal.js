import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const BookModal = ({onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        <div onClick={(event) => event.stopPropagation()}
        className='max-w-full h-auto bg-gradient-to-t from-gray-950 to-blue-950  rounded-xl p-4 flex flex-col relative z-5 sm:max-w-lg m-3 w-full'>
            <div className='flex justify-center'>
            <AiOutlineClose
                className='absolute text-3xl text-white hover:text-gray-300 cursor-pointer right-[5px] p-[2px] m-1.5'
            onClick={onClose}/>
            <h2 className='text-3xl px-4 py-1 text-white align-middle'>
               Contact Me
           </h2>
            </div>
      <div>
      <form action="" method="post" id="submit-contact-form" className=''>
                <div class="p-2 w-full">
                    <div class="relative">
                        <label for="name" class="leading-7 py-4 text-lg text-white text-center">Your Name</label>
                        <input type="text" id="name" name="name" required=""
                            class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
                    </div>
                </div>
                <div class="p-2 w-full">
                    <div class="relative">
                        <label for="email" class="leading-7 py-4 text-lg text-white">Your Email</label>
                        <input type="email" id="email" name="email" required=""
                            class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
                    </div>
                </div>
                <div class="p-2 w-full">
                    <div class="relative">
                        <label for="message" class="leading-7 py-4 text-lg text-white">Your Message</label>
                        <textarea id="message" name="message" required=""
                            class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
                    </div>
                </div>
                <div class="p-2 w-full">
                    <button type="submit"
                        class="flex text-white bg-blue-800 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                        Send Message 
                    </button>
                </div>
            </form>
      </div>
      </div>
      </div>    
  )
  }

export default BookModal; 