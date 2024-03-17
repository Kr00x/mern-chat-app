import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password); // Ändern Sie Login in login
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-full mx-auto'>
      <div className="w-full max-w-md p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-md bg-gray-400 bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-4">
          Login <span className='text-green-500'>D1m1c4710</span> 
          { /* i → 1
               a → 4
               t → 7
               o → 0 */ }
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder=" Enter username" className="input input-bordered w-full h-10" 
            value={ username }
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder=" Enter password" className="input input-bordered w-full h-10" // Ändern Sie type von text zu password
            value={ password }
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to={'/signup'} className="text-sm hover:underline hover:text-green-600 mt-2 inline-block">
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2"
            disabled={loading} // Ändern Sie disabeled in disabled
            >
              {loading ? <span className="loading loading-spinner"></span> : "Login"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;






