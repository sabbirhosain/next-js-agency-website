'use client'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import style from "./login.module.css";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordShowToggle = () => { setShowPassword(!showPassword) };

  return (
    <section className='d-flex align-items-center justify-content-center py-5 bg-light'>
      <div className="row justify-content-center w-100">
        <div className="col-md-4">
          <form className='shadow-sm bg-white p-4'>
            <h4 className='text-center py-4'>Login Now</h4>
            <div className="row">
              <div className="col-md-12 mb-3">
                <label className='form-label'>Email Address</label>
                <input type="text" className='form-control rounded-0' />
              </div>
              <div className="col-md-12 mb-3">
                <label className='form-label'>Password</label>
                <div className='position-relative'>
                  <input type={showPassword ? "text" : "password"} className='form-control rounded-0' />
                  <button type="button" className={style.password_show_btn} onClick={passwordShowToggle}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                </div>
              </div>
              <div className="col-md-12 mt-3">
                <button type="submit" className='btn btn-dark rounded-0 w-100'>Login Now</button>
                <p className='text-center mt-4'>I don't have an account <Link href='/register'>Register</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login