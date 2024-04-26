import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const Signup = () => {
    return (
        <Layout>
            <div className='flex justify-center items-center h-screen shadow-2xl'>
            {/* Login Form  */}
            <div className="login_Form bg-orange-50 px-1 lg:px-8 py-6 border border-orange-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-orange-500 '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        className='bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='bg-orange-50 border border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-200'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-orange-500 hover:bg-orange-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account? <Link className=' text-orange-500 font-bold underline' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
        </Layout>
    );
}

export default Signup;