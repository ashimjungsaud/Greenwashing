const ContentSection2 = ({img,heading,para}) => {
    return ( 
        <div className='w-full px-4'> 
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>   
                <div className='py-10  left-5 flex flex-col flex-wrap-reverse justify-center text-center md:text-right'>    
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>{heading}</h1>
                    <p>{"Misleads you to pay a premium for 'green' features that might not even exist." }</p><p>{"Imagine paying extra for 'eco-friendly' products that aren't actually eco-friendly at all."} </p>
                </div>
                <img className='w-[300px] mx-auto space-x-1  my-4' src={img}  alt='/' /> 
            </div>
        </div>
    );
}

export default ContentSection2;