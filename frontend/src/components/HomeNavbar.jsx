import CustomButton from "./CustomButton";
import { useStateContext } from '../context';


const HomeNavbar = () => {
    const { connect, address } = useStateContext();
    return (
        <nav className="bg-transparent p-4 max-w-screen-2xl mx-auto text-color-1 backdrop-blur-sm">
            <div className='container flex justify-between mx-auto items-center'>
                <div className="logo-block">
                    <a href='/' className="text-2xl  font-semibold text-color-1">LOGO</a>
                </div>
                <div className="hidden lg:flex space-x-14 items-center   " >
                    <ul className='text-color-1 text-xl hover:text-white font-semibold '><a href='/'>Home</a></ul>
                    <ul className='text-color-1 text-xl hover:text-white font-semibold  '><a href='/home'>Petitions</a></ul>
                    <CustomButton 
                        btnType="button"
                        title={address ? 'Create a campaign' : 'Connect'}
                        styles={address ? 'bg-primary' : 'bg-color-4 text-color-1 px-4 py-4 rounded-full hover:text-white transition-all duration-300 hover:bg-color-3'}
                        handleClick={() => {
                            if(address) navigate('/create-campaign')
                            else connect()
                        }}
                    />
                </div>

                {/* */}
            </div>
        </nav>
    );
}
export default HomeNavbar;      