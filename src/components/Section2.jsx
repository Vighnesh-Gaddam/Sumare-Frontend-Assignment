const Section2 = () => {
    return (
        <div className="px-8 mt-[20vh] md:px-20 md:mt-[50vh] flex flex-col gap-20">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif' }} className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-14 lg:leading-16 tracking-normal text-center">
                Real Estate-Focused Digital Mastery
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                <div className="w-full lg:w-[40%]">
                    <img src="/Section2Img.png" alt="Real Estate Digital Mastery" className="w-full h-auto rounded-xl object-contain" />
                </div>
                <div className="w-full lg:w-[60%] flex flex-col justify-center gap-6">
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif' }} className="font-bold text-2xl md:text-5xl leading-9 md:leading-12 text-gray-800">
                        Unlock the Potential of Digital Real Estate Excellence
                    </h3>
                    <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="font-normal text-lg md:text-xl lg:text-2xl leading-7 md:leading-9 lg:leading-10 text-gray-600">
                        At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.
                    </p>
                    <div className="flex justify-start lg:justify-start">
                        <button className="bg-blue-500 text-white rounded-full px-12 py-4 text-lg md:text-xl font-semibold shadow-md hover:shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out w-auto max-w-80">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
