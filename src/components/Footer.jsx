import { Phone, Mail } from 'lucide-react';
import { 
    FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP, FaWhatsapp 
} from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-20 mt-28">
            <div className="bg-blue-100 w-full p-8 md:p-16 rounded-2xl flex flex-col md:flex-row gap-10 justify-between shadow-lg">

                <div className='flex flex-col gap-10 md:w-1/2'>
                    <div className='max-w-sm'>
                        <img src="/Logo.png" alt="Osumare Logo" className='h-16'/>
                        <p className="mt-4 text-gray-700">
                            The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.
                        </p>
                    </div>

                    <div className='max-w-48'>
                        <h2 className='mb-2 text-xl font-bold text-gray-900'>Address</h2>
                        <p className="text-gray-700">
                            Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.
                        </p>
                    </div>

                    <div>
                        <h2 className='mb-2 text-xl font-bold text-gray-900'>Contacts</h2>
                        <div className='flex gap-2 items-center text-gray-700'>
                            <Mail size={20} />
                            <p>hello@osumare.in</p>
                        </div>
                        <div className='flex gap-2 items-center text-gray-700 mt-2'>
                            <Phone size={20} />
                            <p>(+91) 9876543210</p>
                        </div>
                    </div>
                </div>

                <div className='flex sm:flex-row gap-10 md:w-1/2'>

                    <div className='flex flex-col gap-4 w-1/2'>
                        <h2 className='text-xl font-bold text-gray-900'>Menu</h2>
                        <p className="hover:text-blue-500 cursor-pointer text-lg mt-6">Home</p>
                        <p className="hover:text-blue-500 cursor-pointer text-lg">About</p>
                        <p className="hover:text-blue-500 cursor-pointer text-lg">Services</p>
                        <p className="hover:text-blue-500 cursor-pointer text-lg">Work</p>
                        <p className="hover:text-blue-500 cursor-pointer text-lg">Blog</p>
                        <p className="hover:text-blue-500 cursor-pointer text-lg">Career</p>
                    </div>

                    <div className='flex flex-col gap-4 w-1/2'>
                        <h2 className='text-xl font-bold text-gray-900 mb-6'>Socials</h2>
                        <div className='flex gap-4 flex-wrap'>

                            <a href="#" aria-label="Facebook" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                                <FaFacebookF size={24} className='text-black' />
                            </a>
                            <a href="#" aria-label="X" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                                <FaXTwitter size={24} className='text-black' />
                            </a>
                            <a href="#" aria-label="Instagram" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                                <FaInstagram size={24} className='text-black' />
                            </a>
                            <a href="#" aria-label="LinkedIn" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                                <FaLinkedinIn size={24} className='text-black' />
                            </a>
                            <a href="#" aria-label="YouTube" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                                <FaYoutube size={24} className='text-black' />
                            </a>
                            <a href="#" aria-label="Pinterest" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                                <FaPinterestP size={24} className='text-black' />
                            </a>
                            <a href="#" aria-label="WhatsApp" className='bg-white rounded-full h-10 w-10 flex items-center justify-center'>
                                <FaWhatsapp size={24} className='text-black' />
                            </a>

                        </div>
                    </div>

                </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
                © 2023 Osumare. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;
