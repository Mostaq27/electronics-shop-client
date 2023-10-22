import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import img from "../../assets/login.svg";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";

const SignUp = () => {
    const [error, setError] = useState("");
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const isStrongPassword = (password) => {
         
        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const digit = /\d/.test(password);
        const specialChar = /[!@#$%^&*]/.test(password);
        const lengthValid = password.length >= 6;

        return (
            uppercase &&
            lowercase &&
            digit &&
            specialChar &&
            lengthValid
        );
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!isStrongPassword(password)) {
            setError("Password must be six charecter,one uppercase and one special charecter .");
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true });
                updateUser(result.user, name, photo);

                Swal.fire({
                    title: "Success!",
                    text: "Your account created successfully",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK",
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }
                });
            })
            .catch((error) => {
                setError(error.message);
            });
    };;

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
                                </div>
                                 
                                <div className="form-control mt-6">
                                    <input
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