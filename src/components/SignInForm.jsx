import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignInForm() {
  const [signInObj, setSignInObj] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignInObj((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signInObj);
    
    try {
      axios.post("http://localhost:3001/api/auth/login", signInObj)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200){
          localStorage.setItem('authToken', res.data.token)
          localStorage.setItem('userId', res.data.user.id)
          navigate('/eventlist');
        }
      })
    } catch (error) {
      console.error(error);
    }

    setSignInObj({
      email: '',
      password: ''
    });


  }

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-64 flex flex-col gap-2 justify-center items-center h-80">
          <h2 className="text-2xl pb-2 font-bold">Sign in</h2>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              name="email"
              type="text"
              className="grow"
              placeholder="Email"
              value={signInObj.email}
              required
              onChange={handleChange} />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              name="password"
              type="password"
              className="grow"
              placeholder="Password"
              value={signInObj.password}
              required
              onChange={handleChange}  />
          </label>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text pr-10">Remember me</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-sm"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-outline btn-neutral">Login</button>
          <span>
            New Here?{" "}
            <Link to="/signup">
              <a className="link link-hover font-bold">Sign up here!</a>
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default SignInForm;
