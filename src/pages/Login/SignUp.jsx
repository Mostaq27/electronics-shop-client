import { useContext, useState } from "react";
import { Helmet } from "react-helmet";

import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login.svg";


import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";



const SignUp = () => {


    const { createUser } = useContext(AuthContext);
    const [accecpted, setACcecpted] = useState(false);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        if (password.length < 6) {
            setError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Your password should have at least one upper case characters.')
            return;
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            setError('Your password should have at least one special character.')
            return;
        }
        else if (!accecpted) {
            setError('Please accept our terms and conditions!')
            return;
        }



        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                form.reset();
    
                Swal.fire({
                    title: 'Success!',
                    text: "Your account created successfully",
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                        
                        }
                    })
                })
                navigate(from, { replace: true });
                updateUser(user, name, photo)
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };

    const updateUser = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    const handleTerm = event => {
        const checked = event.target.checked;
        setACcecpted(checked)
    }
    return (
        <>
            <Helmet>
                <title>SignUp | Tech Point</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img} alt="#" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="photo url"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    <p className="text-red-600"> </p>

                                    <div class="flex items-center mt-2">
                                        <input id="link-checkbox" onClick={handleTerm} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="link-checkbox" class="ml-2 text-sm font-medium ">Accecpt term & conditions </label>
                                    </div>

                                </div>

                                <div className="form-control mt-6">
                                    <input
                                        disabled={!accecpted}
                                        className="btn btn-outline"
                                        type="submit"
                                        value="Sign Up"

                                    />
                                </div>
                            </form>
                            <p className="my-4 text-center">
                                Already Have an Account?
                                <Link className="text-orange-600 font-bold" to="/login">
                                    Login
                                </Link>
                                <p className="my-4 text-center text-red-600">{error}</p>
                            </p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;