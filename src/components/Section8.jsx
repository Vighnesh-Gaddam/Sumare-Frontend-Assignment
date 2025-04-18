const Section8 = () => {
    return (
        <div className="mt-24 md:mt-48 w-full flex flex-col justify-center items-center px-4">
            <div className="flex flex-col justify-center items-center gap-10 w-full max-w-4xl text-center">

                <div className="flex flex-col gap-6">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-tight lg:leading-snug tracking-normal">
                        Your Peace of Mind
                    </h2>
                    <p className="font-normal text-base md:text-lg lg:text-2xl text-gray-600">
                        Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market.
                    </p>
                </div>

                <button className="bg-blue-500 text-white rounded-full px-8 md:px-12 lg:px-20 h-12 md:h-14 lg:h-16 flex items-center justify-center text-lg md:text-xl hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 ease-in-out mt-4">
                    Get Started
                </button>

            </div>
        </div>
    )
}
export default Section8;
