const Section10 = () => {
    return (
        <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center gap-16">
            <div className="text-center max-w-3xl">
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
                    Connect with Our Digital Marketing Experts
                </h2>
                <p className="font-normal text-base sm:text-lg md:text-2xl text-gray-600 mt-4">
                    Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together.
                </p>
            </div>

            <div className="flex flex-col items-center gap-8 max-w-4xl w-full ring-1 ring-gray-300 p-8 rounded-2xl shadow-lg bg-white">

                <div className="flex flex-col md:flex-row gap-6 w-full h-full">

                    <div className="flex flex-col gap-4 md:w-1/2 w-full flex-1">
                        <label className="flex flex-col gap-1 font-medium">
                            Name
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>

                        <label className="flex flex-col gap-1 font-medium">
                            Phone
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>

                        <label className="flex flex-col gap-1 font-medium">
                            Email
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                    </div>

                    <div className="flex flex-col gap-4 md:w-1/2 w-full flex-1">
                        <label className="flex flex-col gap-1 font-medium flex-grow h-full">
                            Message
                            <textarea
                                placeholder="Your Message"
                                className="w-full h-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            ></textarea>
                        </label>
                    </div>

                </div>

                <button className="bg-blue-500 text-white rounded-full px-8 md:px-12 lg:px-20 h-12 md:h-14 lg:h-16 flex items-center justify-center text-lg md:text-xl hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 ease-in-out mt-4">
                    Get Started
                </button>

            </div>
        </div>
    )
}

export default Section10;
