import Image from 'next/image'
import style from "./service.module.css";
import Link from 'next/link';
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { MdOutlineArrowOutward } from "react-icons/md";

const Service = () => {
  return (
    <>
      <section className={style.our_service}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2 className={style.section_tagline}><TfiLayoutLineSolid className={style.services_tagline_icon} /> Our Services</h2>
              <h2 className={style.services_title}>Explor <span className={style.services_title_color}>Our Services.</span> Your path to success</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3 mb-4">
              <div className={style.services_item_box_active}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/job-seekers-hunting.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name_active}>Job Seekers Data Hunting</Link>
                <p className={style.service_details_active}>We provide accurate job seeker data to help recruiters and companies connect with candidates quickly.</p>
                <Link href='' className={style.service_btn_active}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={style.services_item_box}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/lead-generation.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name}>B2B/B2C Lead Generation</Link>
                <p className={style.service_details}>We provide verified B2B/B2C leads to help you increase sales, boost engagement, and grow your business effectively.</p>
                <Link href='' className={style.service_btn}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={style.services_item_box}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/web-developments.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name}>Web Design and Developments</Link>
                <p className={style.service_details}>We provide professional web development services, creating responsive, user-friendly that accelerate business growth.</p>
                <Link href='' className={style.service_btn}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={style.services_item_box}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/web-developments.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name}>Web Design and Developments</Link>
                <p className={style.service_details}>We provide professional web development services, creating responsive, user-friendly that accelerate business growth.</p>
                <Link href='' className={style.service_btn}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={style.services_item_box}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/web-developments.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name}>Web Design and Developments</Link>
                <p className={style.service_details}>We provide professional web development services, creating responsive, user-friendly that accelerate business growth.</p>
                <Link href='' className={style.service_btn}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={style.services_item_box}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/web-developments.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name}>Web Design and Developments</Link>
                <p className={style.service_details}>We provide professional web development services, creating responsive, user-friendly that accelerate business growth.</p>
                <Link href='' className={style.service_btn}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={style.services_item_box}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/web-developments.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name}>Web Design and Developments</Link>
                <p className={style.service_details}>We provide professional web development services, creating responsive, user-friendly that accelerate business growth.</p>
                <Link href='' className={style.service_btn}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className={style.services_item_box}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/youtube-seo.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name}>Youtube Video SEO</Link>
                <p className={style.service_details}>Optimize your YouTube videos with targeted SEO strategies to boost visibility, engagement, and rankings.</p>
                <Link href='' className={style.service_btn}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Service