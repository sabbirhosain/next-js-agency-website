import Image from 'next/image'
import style from "@/style.module.css";
import { MdOutlineCallMade } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { VscTools } from "react-icons/vsc";

import Link from 'next/link';
import { SiGooglemeet } from "react-icons/si";
import { BiRightArrow } from "react-icons/bi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Counter from '@/components/CounterUp/Counter';
const Home = () => {
  return (
    <>
      <section className={style.home_section}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className={style.hero_heading}><span className={style.hero_heading_highlight}>Professional</span> team will take you to <span className={style.hero_heading_highlight}> the next </span> level<span className={style.hero_heading_highlight}>.</span></h2>
              <p className={style.hero_peragraph}>Our professional team is ready to take your business to the next level. Are you ready to grow?</p>
              <div className='d-flex align-items-center gap-3'>
                <Link href='/' className={style.hero_section_btn}><SiGooglemeet />Google Meeting</Link>
                <Link href='/tools' className={style.hero_section_btn}><VscTools />Buy Tools</Link>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2 mb-5 mb-md-0">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src='/hero.webp' className={style.hero_img} width='100' height='100' layout="responsive" alt='Image Path' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.choose_us}>
        <div className='container'>
          <div className='row py-4'>
            <div className='col-md-4'>
              <div className='d-flex align-items-center justify-content-center gap-3'>
                <div style={{ maxWidth: '70px' }}>
                  <Image src='/choose-us/image1.svg' className={style.choose_us_img} width='0' height='0' layout="responsive" alt='Choose Us Image' />
                </div>
                <div>
                  <h5 className={style.choose_us_heading}>Reasonable Price</h5>
                  <p className={style.choose_us_peragraph}>Quality design at affordable rates.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='d-flex align-items-center justify-content-center gap-3'>
                <div style={{ maxWidth: '70px' }}>
                  <Image src='/choose-us/image2.png' className={style.choose_us_img} width='0' height='0' layout="responsive" alt='Choose Us Image' />
                </div>
                <div>
                  <h5 className={style.choose_us_heading}>Timely Project Delivery</h5>
                  <p className={style.choose_us_peragraph}>On-time Project completion.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='d-flex align-items-center justify-content-center gap-3'>
                <div style={{ maxWidth: '70px' }}>
                  <Image src='/choose-us/image3.png' className={style.choose_us_img} width='0' height='0' layout="responsive" alt='Choose Us Image' />
                </div>
                <div>
                  <h5 className={style.choose_us_heading}>Professional Team</h5>
                  <p className={style.choose_us_peragraph}>Expert architects, top result.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.about_agency}>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-md-5'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src='/about_thumb.png' className={style.about_agency_img} width='100' height='100' layout="responsive" alt='Image Path' />
              </div></div>
            <div className='col-md-6'>
              <h2 className={style.section_tagline}><TfiLayoutLineSolid className={style.about_agency_tagline_icon} /> About Agency</h2>
              <h2 className={style.about_agency_title}>Creative <span className={style.about_agency_title_color}>solutions that  grow</span> and empower brands.</h2>
              <p className={style.about_agency_paragraph}>We are a results-driven digital agency focused on crafting innovative strategies, designing impactful experiences, and helping brands grow through creativity, technology, and a deep understanding of their audience.</p>
              <div className={style.about_agency_counter_box}>
                <div className='row align-items-center'>
                  <div className='col-sm-4 text-center'>
                    <h3 className={style.about_agency_counter}><Counter count='1200' duration='2.5' /> +</h3>
                    <h6 className={style.about_agency_counter_title}>Project Complete</h6>
                  </div>
                  <div className='col-sm-4 border-start border-end text-center'>
                    <h3 className={style.about_agency_counter}><Counter count='08' duration='2.5' /> +</h3>
                    <h6 className={style.about_agency_counter_title}>Awards Gained</h6>
                  </div>
                  <div className='col-sm-4 text-center'>
                    <h3 className={style.about_agency_counter}><Counter count='100' duration='2.5' /> %</h3>
                    <h6 className={style.about_agency_counter_title}>Satisfied Clients</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.our_service}>
        <div className="container">
          <div className="row align-items-end justify-content-between">
            <div className="col-md-5">
              <h2 className={style.section_tagline}><TfiLayoutLineSolid className={style.services_tagline_icon} /> Our Services</h2>
              <h2 className={style.services_title}>Explor <span className={style.services_title_color}>Our Services.</span> Your path to success</h2>
            </div>
            <div className="col-md-2">
              <div className='text-end'>
                <Link href='/service' className={style.hero_section_btn}><MdOutlineCallMade />View Services</Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between mt-5">
            <div className="col-md-3">
              <div className={style.services_item_box_active}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/job-seekers-hunting.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name_active}>Job Seekers Data Hunting</Link>
                <p className={style.service_details_active}>We provide accurate job seeker data to help recruiters and companies connect with candidates quickly.</p>
                <Link href='' className={style.service_btn_active}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className={style.services_item_box}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/lead-generation.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name}>B2B/B2C Lead Generation</Link>
                <p className={style.service_details}>We provide verified B2B/B2C leads to help you increase sales, boost engagement, and grow your business effectively.</p>
                <Link href='' className={style.service_btn}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className={style.services_item_box}>
                <div className={style.services_icon_box}>
                  <Image src='/service-icon/web-developments.svg' width='100' height='100' layout="responsive" alt='Image Path' />
                </div>
                <Link href='' className={style.service_name}>Web Developments</Link>
                <p className={style.service_details}>We provide professional web development services, creating responsive, user-friendly that accelerate business growth.</p>
                <Link href='' className={style.service_btn}>Learn More<MdOutlineArrowOutward /></Link>
              </div>
            </div>
            <div className="col-md-3">
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

export default Home