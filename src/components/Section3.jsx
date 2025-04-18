const Section3 = () => {

    const s3Data = [
        { id: 1, image: '/s31.png', title: 'Automotive SEO', description: 'Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today' },
        { id: 2, image: '/s32.png', title: 'PPC Precision', description: 'Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.' },
        { id: 3, image: '/s33.png', title: 'Social Acceleration', description: 'Engage and influence your audience across social media platforms, amplifying your brand\'s presence and connection.' },
        { id: 4, image: '/s34.png', title: 'Content Excellence', description: 'Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.' },
        { id: 5, image: '/s35.png', title: 'Web Design', description: 'Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.' },
        { id: 6, image: '/s36.png', title: 'Data-Driven Insights', description: 'Leverage data to refine your strategies, making informed decisions that drive revenue growth.' },
        { id: 7, image: '/s37.png', title: 'End-to-End Solutions', description: 'From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.' },
        { id: 8, image: '/s38.png', title: 'Video Marketing', description: 'Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.' }
    ];

    return (
        <div className="bg-gray-100 px-4 md:px-20 py-20 lg:mt-40 flex flex-col items-center">
            <div className="flex flex-col gap-3 text-center mb-14">
                <h2 className="text-2xl md:text-5xl font-bold text-gray-800">Our Service Offerings</h2>
                <p className="text-base md:text-3xl text-gray-600">Strategies that Drive Property Market Excellence</p>
            </div>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {s3Data.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white h-auto sm:h-72 w-48 sm:w-80 flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 shadow-xl rounded-2xl text-center transition-transform"
                    >
                        <div className="bg-gray-100 rounded-full overflow-hidden h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center mb-4">
                            <img src={service.image} alt={`${service.title} Icon`} className="h-7 w-7 sm:h-8 sm:w-8" />
                        </div>
                        <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                            {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                            {service.description}
                        </p>
                    </div>
                ))}

            </div>

            <button className="bg-blue-500 text-white rounded-full px-6 md:px-10 h-10 md:h-14 w-52 md:w-80 flex items-center justify-center hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 ease-in-out font-semibold md:font-bold text-base md:text-2xl mt-16">Get Started</button>
        </div>
    );
};

export default Section3;
