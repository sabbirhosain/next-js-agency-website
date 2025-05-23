'use client'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { TfiLayoutLineSolid } from 'react-icons/tfi'
import { BiMailSend } from "react-icons/bi";
import style from './contact.module.css'

const Contact = () => {
  return (
    <section className={style.countact_us}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className='mb-4'>
              <h2 className={style.section_tagline}><TfiLayoutLineSolid className={style.contact_tagline_icon} /> Contact Us</h2>
              <h2 className={style.contact_title}>Get You <span className={style.contact_title_color}>Free Quote Today.</span></h2>
            </div>
            <form action="">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className={`form-label ${style.form_label}`}>Your Name</label>
                  <input type="text" className={`form-control rounded-0 ${style.form_control}`} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className={`form-label ${style.form_label}`}>Your Email</label>
                  <input type="email" className={`form-control rounded-0 ${style.form_control}`} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className={`form-label ${style.form_label}`}>Phone Number</label>
                  <input type="text" className={`form-control rounded-0 ${style.form_control}`} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className={`form-label ${style.form_label}`}>Address</label>
                  <input type="text" className={`form-control rounded-0 ${style.form_control}`} required />
                </div>
                <div className="col-md-12 mb-3">
                  <label className={`form-label ${style.form_label}`}>Subject</label>
                  <input type="text" className={`form-control rounded-0 ${style.form_control}`} required />
                </div>
                <div className="col-md-12 mb-3">
                  <textarea rows='5' className={`form-control rounded-0 ${style.form_control}`} placeholder='Your Massage...' required />
                </div>
                <div className="col-md-12">
                  <button type='submit' className={style.contact_submit_btn}><BiMailSend />Submit Now</button>
                </div>

              </div>
            </form>
          </div>
          <div className="col-md-5">
            <div className={style.contact_us_info_box}>
              <div className='mb-5'>
                <h5 className={style.contact_info_title}>Address</h5>
                <p className={style.contact_info_peragraph}>Chandipur Bazar, Bagha Rajshahi-6280, Bangladesh</p>
              </div>
              <div className='mb-5'>
                <h5 className={style.contact_info_title}>Contact Info</h5>
                <p className={style.contact_info_peragraph}>Phone : 0172-7147 610</p>
                <p className={style.contact_info_peragraph}>Email : contact@futureitsolution.com</p>
              </div>
              <div className='mb-5'>
                <h5 className={style.contact_info_title}>Time Schedule</h5>
                <p className={style.contact_info_peragraph}>Monday-Friday : 10:00AM to 12:00PM</p>
                <p className={style.contact_info_peragraph}>Saturday-Sunday : 10:00AM to 12:00PM</p>
              </div>
              <div className={style.social_media_box}>
                <a href="" className={style.social_media_box_icon}><FaFacebookF /></a>
                <a href="" className={style.social_media_box_icon}><FaLinkedinIn /></a>
                <a href="" className={style.social_media_box_icon}><FaInstagram /></a>
                <a href="" className={style.social_media_box_icon}><TbBrandFiverr /></a>
                <a href="" className={style.social_media_box_icon}><SiUpwork /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact