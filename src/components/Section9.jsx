import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const Section9 = () => {

    const testimonials = [
        {
            id: 1,
            image: '/profile.png',
            profilePic: '/profileround.png',
            name: 'Tabnish Khan',
            logo: '/s9l1.png',
            description: "Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth."
        },
        {
            id: 2,
            image: '/profile.png',
            profilePic: '/profileround.png',
            name: 'Ayesha Patel',
            logo: '/s9l1.png',
            description: "The team at Osumare transformed our digital outreach in the pharma sector. Their understanding of compliance and creativity is second to none."
        },
        {
            id: 3,
            image: '/profile.png',
            profilePic: '/profileround.png',
            name: 'Rohan Mehta',
            logo: '/s9l1.png',
            description: "Working with Osumare has been a game-changer for us. Their pharma-centric marketing strategies delivered measurable and impressive results."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [openFAQ, setOpenFAQ] = useState(null);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "How does Osumare measure campaign success?",
            answer: `We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.`
        },
        {
            question: "How does Osumare measure campaign success?",
            answer: `We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.`
        },
        {
            question: "How does Osumare measure campaign success?",
            answer: `We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.`
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center gap-16 md:mt-28">
            <div className="text-center w-full">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
                    What Our Pharma Partners Say
                </h2>
                <p className="font-normal text-base sm:text-lg md:text-2xl text-gray-600 mt-4">
                    Driving Transformations, One Brand at a Time
                </p>
            </div>
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl hover:shadow-blue-100 transition-all duration-500 overflow-hidden flex flex-col md:flex-row p-6 md:p-10 ring-1 ring-gray-200">

                <div className="w-full md:w-3/5 aspect-video md:aspect-auto md:h-[420px] overflow-hidden rounded-2xl md:rounded-3xl">
                    <img
                        src={testimonials[activeIndex].image}
                        alt="Client Feedback"
                        className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
                    />
                </div>

                <div className="w-full md:w-2/5 py-8 md:py-20 px-4 md:px-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
                        <img
                            src={testimonials[activeIndex].profilePic}
                            alt="Profile"
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                        />
                        <h3 className="font-bold text-lg md:text-2xl text-gray-800">
                            {testimonials[activeIndex].name}
                        </h3>
                        <img
                            src={testimonials[activeIndex].logo}
                            alt="Company Logo"
                            className="h-8 md:h-10 ml-auto"
                        />
                    </div>
                    <p className="text-gray-600 text-base md:text-xl leading-relaxed">
                        {testimonials[activeIndex].description}
                    </p>
                </div>

            </div>
            <div className="flex gap-6 sm:gap-8">
                <button
                    onClick={handlePrev}
                    className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all"
                >
                    <ChevronLeft size={28} className="md:size-32" />
                </button>
                <button
                    onClick={handleNext}
                    className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all"
                >
                    <ChevronRight size={28} className="md:size-32" />
                </button>
            </div>
            <div className="text-center w-full flex flex-col justify-center items-center">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
                    Frequently Asked Questions
                </h2>
                <p className="font-normal text-base sm:text-lg md:text-2xl text-gray-600 mt-4 max-w-3xl md:max-w-[1000px]">
                    Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.
                </p>
            </div>
            <div className="w-full max-w-4xl flex flex-col">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="shadow-[4px_0_6px_-2px_rgba(0,0,255,0.3),-4px_0_6px_-2px_rgba(0,0,255,0.3)] overflow-hidden"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className={`w-full flex justify-between items-center p-4 sm:p-6 text-left font-medium 
                            ${openFAQ === index ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'} transition-all text-sm sm:text-base md:text-xl`}
                        >
                            {faq.question}
                            <span className="text-xl sm:text-2xl">
                                {openFAQ === index ? <ChevronUp /> : <ChevronDown />}
                            </span>
                        </button>
                        {openFAQ === index && (
                            <div className="p-4 sm:p-6 pt-0 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Section9;
