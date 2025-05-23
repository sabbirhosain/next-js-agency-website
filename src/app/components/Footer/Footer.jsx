'use client'
import { FaRegEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";
import { RiSendPlane2Fill } from "react-icons/ri";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import Link from 'next/link'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <section className={style.footer_section}>
      <div className="container">
        <div className="row justify-content-between border-bottom py-5">
          <div className="col-md-4">
            <Link className="" href="/">
              <div className="d-flex align-items-center gap-2">
                <span className={style.footer_logo_brand}>F</span>
                <span className={style.footer_logo_text}>It Solution</span>
              </div>
            </Link>
            <p className={style.footer_peragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo ducimus autem ipsa, odit hic iste fugiat id velit facere.</p>
            <div className={style.social_media_box}>
              <a href="" className={style.social_media_box_icon}><FaFacebookF /></a>
              <a href="" className={style.social_media_box_icon}><FaLinkedinIn /></a>
              <a href="" className={style.social_media_box_icon}><FaInstagram /></a>
              <a href="" className={style.social_media_box_icon}><TbBrandFiverr /></a>
              <a href="" className={style.social_media_box_icon}><SiUpwork /></a>
            </div>
          </div>
          <div className="col-md-3 my-4 my-md-0">
            <h2 className={style.quick_view}>Contact Info</h2>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className={style.footer_phone_icon}><MdOutlinePhoneInTalk /></span>
              <a href="https://wa.me/+8801727147610?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services?" target="new" className={style.footer_phone_text}>0172-7147 610</a>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className={style.footer_email_icon}><FaRegEnvelope /></span>
              <a href="mailto:example@gmail.com" className={style.footer_email_text}>contact@futureitsolution.com</a>
            </div>
            <div className="d-flex gap-2">
              <span className={style.footer_location_icon}><RiUserLocationLine /></span>
              <p className={style.footer_location_text}>Chandipur Bazar, Bagha Rajshahi-6280, Bangladesh</p>
            </div>
          </div>
          <div className="col-md-4">
            <h2 className={style.quick_view}>Subscribe For Latest Information</h2>
            <form className="d-flex" role="search">
              <input className="form-control rounded-0" type="search" placeholder="Email Address" />
              <button className="btn btn-success rounded-0" type="submit"><RiSendPlane2Fill /></button>
            </form>
          </div>
        </div>
        <div className="row align-items-center justify-content-between py-4">
          <div className="col-md-6">
            <p className={`text-center text-md-start ${style.footer_copyright}`}>Copyright © 2025 Future It Solution. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3">
              <Link href='' className={`text-center text-md-end ${style.terms_condition}`}>Terms & Condition</Link>
              <Link href='' className={`text-center text-md-end ${style.terms_condition}`}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer