const Section4 = () => {

    const cardData = [
        {
            id: 1,
            image: '/s4l1.png',
            title: 'Market Trends Analysis',
            description: 'Predictive insights to guide real estate strategies.'
        },
        {
            id: 2,
            image: '/s4l2.png',
            title: 'Targeted Buyer Persona',
            description: 'Understand and connect with your ideal property buyers.'
        },
        {
            id: 3,
            image: '/s4l3.png',
            title: 'Competitor Insights',
            description: 'Stand out in the property market with informed strategies.'
        },
        {
            id: 4,
            image: '/s4l4.png',
            title: 'Visual Content Appeal',
            description: 'Captivate buyers with appealing visuals and immersive experiences.'
        }
    ];

    return (
        <div className="relative px-6 md:px-20 mt-[15vh] flex flex-col items-center text-center md:text-left">
            <h2 className="font-bold text-3xl md:text-3xl lg:text-5xl leading-tight md:leading-snug lg:leading-[1.2] tracking-normal text-gray-800">
                Navigating Real Estate's Digital Landscape
            </h2>
            <p className="text-sm md:text-3xl text-[#333333] mt-3 md:mt-4 leading-relaxed md:leading-8">
                Insights for Real Estate Marketing Advantage
            </p>

            <div className="relative w-full mt-8 md:mt-16">
                <div className="relative z-10 w-full xl:w-[50%] flex flex-col gap-8 p-4 md:p-8">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="flex gap-6 p-6 md:p-8 bg-white rounded-2xl ring-2 ring-gray-100 transition-all duration-300"
                        >
                            <div className="h-16 w-16 bg-gray-100 flex items-center justify-center rounded-full overflow-hidden shadow-sm flex-shrink-0">
                                <img src={card.image} alt={card.title} className="h-9 w-9" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg md:text-3xl font-semibold text-gray-800">{card.title}</h3>
                                <p className="text-sm sm:text-xl text-gray-600 mt-2">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden xl:block absolute right-0 top-0 w-[70%] h-full rounded-2xl bg-cover bg-center bg-[url('/s4r1.png')] bg-[rgb(249,249,249)]" />
            </div>
        </div>
    );
};

export default Section4;
