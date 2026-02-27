import React from 'react'
import { NavLink } from 'react-router'
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Copyright, MapPin, PhoneCall } from 'lucide-react'

export default function Footer() {
    return (
        <>
            <footer className='w-full bg-blue-950  text-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <NavLink to={'/'}>
                            <img src="/images/logo/FCF LOGO.png" className='h-18 sm:h-25 md:h-28 p-5' alt="firstclassflight logo" />
                        </NavLink>
                        <p className='text-sm sm:text-base  text-white py-3 text-justify'>
                            We provide premium first class flight deals, luxury travel planning, exclusive fares, and personalized support to ensure every journey is comfortable, seamless, and truly memorable.
                        </p>
                        <div className='grid grid-cols-4 gap-2 p-1 sm:p-2 md:p-3'>
                            <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in'}>
                                    <FaWhatsapp className='text-2xl' />
                                </NavLink>
                            </div>
                            <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in'}>
                                    <FaInstagram className='text-2xl' />
                                </NavLink>
                            </div>
                            <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in'}>
                                    <FaYoutube className='text-2xl' />
                                </NavLink>
                            </div>
                            <div className='h-14 w-14 rounded-full bg-white text-blue-950 flex items-center justify-center'>
                                <NavLink to={''} className={'hover:text-red-600 transition-all duration-300 ease-in'}>
                                    <FaFacebook className='text-2xl' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Quick Links</h2>
                        <div className='p-2 sm:p-3 md:p-4  gap-4'>
                            <NavLink to={"/"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in'}>Home</NavLink>
                            <NavLink to={"/about-us"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>About Us</NavLink>
                            <NavLink to={"/search-flights"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Search Flights</NavLink>
                            <NavLink to={"/support"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Supports</NavLink>
                            <NavLink to={"/blogs"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Blogs</NavLink>
                          
                            <NavLink to={"/contact-us"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Contact Us</NavLink>

                        </div>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Supports</h2>
                        <div className='p-2 sm:p-3 md:p-4  gap-4'>
                            <NavLink to={"/privacy-policy"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in'}>Privacy-Policy</NavLink>
                            <NavLink to={"/terms-and-conditions"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Term-And-Condition</NavLink>
                           
                            <NavLink to={"/disclaimer"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Disclaimer</NavLink>
                            <NavLink to={"/faq"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Faq</NavLink>
                            <NavLink to={"/refund-and-cancellation-policy"} className={'block gap-8  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in my-3'}>Refund Policy</NavLink>

                        </div>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl mb-4">Contact Us</h2>

                        <div className="grid grid-cols-1 gap-5">

                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-full bg-white text-blue-950 flex items-center justify-center">
                                    <MapPin size={24} />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-sm sm:text-lg md:text-xl font-semibold">Address</h2>
                                    <p className="text-sm sm:text-base break-words">
                                        A-16 17662 Irvine Blvd, Suite 9, Tustin, CA 92780
                                    </p>
                                </div>
                            </div>


                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-full bg-white text-blue-950 flex items-center justify-center">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-sm sm:text-lg md:text-xl font-semibold">Email</h2>
                                    <a
                                        href="mailto:support@gmail.com"
                                        className="text-sm sm:text-base break-all hover:text-red-600 transition"
                                    >
                                        support@gmail.com
                                    </a>
                                </div>
                            </div>


                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-full bg-white text-blue-950 flex items-center justify-center">
                                    <PhoneCall className="text-xl" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-sm sm:text-lg md:text-xl font-semibold">Phone</h2>
                                    <a
                                        href="tel:9155014125"
                                        className="text-sm sm:text-base hover:text-red-600 transition"
                                    >
                                        +91 55014 125
                                    </a>
                                </div>
                            </div>


                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-full bg-white text-blue-950 flex items-center justify-center">
                                    <FaWhatsapp className="text-xl" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-sm sm:text-lg md:text-xl font-semibold">WhatsApp</h2>
                                    <a
                                        href="https://wa.me/9155014125"
                                        className="text-sm sm:text-base hover:text-red-600 transition"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='text-gray-600 p-2' />

                <div className='p-2 p w-full sm:p-3 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <p className='text-sm sm:text-base flex'>
                        <Copyright size={24} /> <p>2026 Malani Marble. All rights reserved</p>
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                        <NavLink to={"/privacy-policy"} className={'ms-3   hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in'}>Privacy-Policy</NavLink>
                        <NavLink to={"/terms-and-conditions"} className={'ms-3  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in '}>Term-And-Condition</NavLink>
                        <NavLink to={"/refund-policy"} className={'ms-3  hover:text-red-600 hover:underline hover:decoration-2 hover:decoration-blue-800 transition-all duration-300 ease-in '}>Refund Policy</NavLink>
                    </div>
                    <p className='text-sm sm:text-base float-right '>
                        <p>Develope and Design By <span className='text-red-600'>Risezonic</span></p>
                    </p>
                </div>

            </footer>
            <section>
                <div className='fixed float-right right-1 bottom-40'>
                    <div className='w-16 h-16 rounded-full bg-white shadow-2xl shadow-red-600 flex items-center justify-center'>
                         <span className="absolute inset-0 rounded-full bg-blue-950 animate-ping opacity-20"></span>
                      <NavLink to={'https://wa.me/9155014125'}>
                        <FaWhatsapp className='text-green-600 text-4xl' />
                      </NavLink>
                    </div>
                </div>
                 <div className='fixed float-right right-1 bottom-15'>
                    <div className='w-16 h-16 rounded-full bg-blue-600 shadow-2xl shadow-red-600 flex items-center justify-center'>
                         <span className="absolute inset-0 rounded-full bg-blue-950 animate-ping opacity-20"></span>

                      <NavLink to={'tel:9155014125'}>
                        <PhoneCall className='text-white' size={30} />
                      </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}
