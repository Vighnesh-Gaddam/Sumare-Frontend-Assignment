const Section6 = () => {

    const s6Data = [
        {
            id: 1,
            image: '/s61.png',
            title: 'Call-to-Action Optimization',
            description: 'Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.'
        },
        {
            id: 2,
            image: '/s62.png',
            title: 'Landing Page Efficiency',
            description: 'Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.'
        },
        {
            id: 3,
            image: '/s63.png',
            title: 'Social Proof Utilization',
            description: 'Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.'
        },
        {
            id: 4,
            image: '/s64.png',
            title: 'Mobile-Friendly Experience',
            description: 'With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.'
        }
    ];

    return (
        <div className="px-6 mt-8 md:px-20 py-12">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-14 lg:leading-16 tracking-normal text-center mb-12">
                Driving Property Inquiries to Conversions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                {s6Data.map((item) => (
                    <div key={item.id} className="flex flex-col items-center text-center bg-white p-6 rounded-2xl h-full gap-6">
                        <div className="w-48 h-48 bg-gray-100 flex items-center justify-center rounded-full">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="rounded-xl object-contain mb-6 h-32 w-32"
                        />
                        </div>
                        <h3 className="font-bold text-2xl lg:text-3xl text-gray-800">
                            {item.title}
                        </h3>
                        <p className="font-normal text-base lg:text-3xl text-gray-600">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section6;
