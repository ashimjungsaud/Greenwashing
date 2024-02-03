

const ContentSection3 = ({img,heading,para}) => {
    return ( 
        <div className='w-full px-4 py-10'> 
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>   
                <img className='w-[400px] mx-auto  my-4' src={img}  alt='/' /> 
                <div className='flex flex-col justify-center text-center md:text-left'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>{heading}</h1>
                    <p>{para} </p>
                </div>
            </div>
        </div>
    );
}

export default ContentSection3;