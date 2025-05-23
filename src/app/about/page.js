import Image from 'next/image'
import style from './about.module.css'
import Counter from '@/components/CounterUp/Counter';
import { TfiLayoutLineSolid } from "react-icons/tfi";

const About = () => {
  return (
    <>
      <section className={style.about_agency}>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-md-5'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src='/about_thumb.png' className={style.about_agency_img} width='100' height='100' layout="responsive" alt='Image Path' />
              </div>
            </div>
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
    </>
  )
}

export default About