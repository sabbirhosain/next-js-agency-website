'use client'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { MdWifiCalling3 } from "react-icons/md";
import style from './Navbar.module.css';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const logout = () => { confirm('Are You Sure ? You Want to Logout.') }
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <section className={style.top_header_bg}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-8">
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-2">
                  <span className={style.top_header_phone_icon}><MdWifiCalling3 /></span>
                  <a href="https://wa.me/+8801727147610?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services?" target="new" className={style.top_header_phone_text}>0172-7147 610</a>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className={style.top_header_email_icon}><FaEnvelope /></span>
                  <a href="mailto:example@gmail.com" className={style.top_header_email_text}>contact@futureitsolution.com</a>
                </div>
              </div>
            </div>
            <div className="col-4">
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
      </section>

      {/* === Header Section Start === */}
      <nav className={`navbar navbar-expand-lg ${style.navbar_bg} ${isSticky ? style.sticky_nav : ''}`}>
        <div className="container">
          <Link className="navbar-brand" href="/">
            <div className="d-flex align-items-center gap-2">
              <span className={style.logo_brand}>F</span>
              <span className={style.logo_text}>It Solution</span>
            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${style.nav_link} ${pathname === '/' ? style.active : ''}`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${style.nav_link} ${pathname === '/about' ? style.active : ''}`}>About us</Link>
              </li>
              <li className="nav-item">
                <Link href="/service" className={`nav-link ${style.nav_link} ${pathname === '/service' ? style.active : ''}`}>Service</Link>
              </li>
              <li className="nav-item">
                <Link href="/project" className={`nav-link ${style.nav_link} ${pathname === '/project' ? style.active : ''}`}>Project</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${style.nav_link} ${pathname === '/contact' ? style.active : ''}`}>Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <button className={`nav-link dropdown-toggle ${style.nav_link}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> More </button>
                <ul className="dropdown-menu rounded-0" aria-labelledby="navbarDropdown">
                  <li><a className={`dropdown-item mb-1 ${style.nav_link}`} href="#">Package</a></li>
                  <li><a className={`dropdown-item mb-1 ${style.nav_link}`} href="#">Package</a></li>
                  <li><a className={`dropdown-item ${style.nav_link}`} href="#">Package</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2">
              <button href='/appointment' className={style.nav_btn}>Appointment</button>
              <button type="button" onClick={logout} className={`bg-danger ${style.nav_btn}`}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar