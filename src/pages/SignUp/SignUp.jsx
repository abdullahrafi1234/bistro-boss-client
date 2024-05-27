import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import loginImage from '../../assets/others/authentication1.png'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet';
import Swal from "sweetalert2";



const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Created Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div className="hero min-h-screen loginBg">
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col md:flex lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2">
                    <img className='' src={loginImage} alt="" />
                </div>
                <div className="card lg:w-1/2 max-w-sm  loginBg">
                    <h1 className="text-5xl font-bold text-center mt-8">Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register('name', { required: true })} type="text" placeholder="Your Name"
                                name="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register('PhotoURL', { required: true })} type="text" placeholder="Photo URL"
                                className="input input-bordered" />
                            {errors.PhotoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register('email', { required: true })} placeholder="Your Email"
                                name="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register('password', {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} type="password" placeholder="Your Password" name="password" className="input input-bordered" />
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be under 20 Character</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 Character</span>}
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is Required</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase and one lowercase and one special word</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn text-white bg-[#D1A054B3]" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='text-center text-[#D1A054B3] font-bold'>Already Registered? <Link to={'/login'}>Go to Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;