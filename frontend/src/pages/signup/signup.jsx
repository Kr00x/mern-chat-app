import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import GenderCheckbox from "./gendercheckbox"; // Stellen Sie sicher, dass der Pfad korrekt ist

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });
    const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender})
    }

    const { loading, signup } = useSignup();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    SignUp <span className="text-green-500">ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Name"
                            className="input input-bordered w-full h-10"
                            value={inputs.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="input input-bordered w-full h-10"
                            value={inputs.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full h-10"
                            value={inputs.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="input input-bordered w-full h-10"
                            value={inputs.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to='/login' className="text-sm hover:underline hover:text-green-600 mt-2 inline-block">
                        Already have an account?
                    </Link>
                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-2" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

