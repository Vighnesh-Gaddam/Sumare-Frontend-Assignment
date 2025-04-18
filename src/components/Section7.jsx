const Section7 = () => {

    const s7Data = [
        {
            id: 1,
            image: '/s71.png',  
            title: 'Effective CTAs',
            description: 'See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.'
        },
        {
            id: 2,
            image: '/s72.png',  
            title: 'Conversion-Optimized Landing Pages',
            description: 'Explore a case study where our landing page optimization increased property lead conversion rates by 30%.'
        },
        {
            id: 3,
            image: '/s73.png',  
            title: 'Trust Building with Social Proof',
            description: 'Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project.'
        },
        {
            id: 4,
            image: '/s74.png',  
            title: 'Mobile-First Success',
            description: 'Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.'
        }
    ];
    

    return (
        <div className="px-6 mt-8 md:px-20 py-12">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-14 lg:leading-16 tracking-normal text-center mb-12">
            Our Expertise in Action
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                {s7Data.map((item) => (
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

export default Section7;
