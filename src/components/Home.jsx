const Home = () => {
    return (
        <div className="relative bg-[url('/HomeBG.png')] bg-[center_75%] bg-cover min-h-[100vh] md:min-h-[120vh] lg:min-h-[120vh]">
            
            <div className="h-screen flex items-center justify-center flex-col text-black text-center px-4 gap-4">
                <div>
                    <h1
                        className="font-medium text-xl md:text-4xl lg:text-5xl leading-snug md:leading-[60px] lg:leading-[68px] tracking-normal"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Elevate <b className="text-blue-500">Real Estate Success</b> with <br />Osumare's Digital Expertise
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl leading-relaxed md:leading-[30px] lg:leading-[36px] text-[#333333] mt-2">
                        Tailored Solutions for Thriving in the Digital Real Estate Landscape
                    </p>
                </div>

                <button className="bg-blue-500 text-white rounded-full px-6 md:px-10 h-10 md:h-14 w-52 md:w-80 flex items-center justify-center 
                   hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 ease-in-out font-semibold md:font-bold text-base md:text-2xl mt-4">
                    Get Started
                </button>
            </div>
            <img 
                src="/Marketing.png" 
                className="absolute bottom-0 top-[75vh] left-1/2 transform -translate-x-1/2 mb-4 w-[95%] max-w-[700px] h-auto md:top-[80vh]"
                alt="Marketing Illustration"
            />
        </div>
    )
}

export default Home;
