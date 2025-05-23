import Image from 'next/image'
import { VscVerifiedFilled } from "react-icons/vsc";
import style from './CoustomerReview.module.css'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa';

const CoustomerReview = () => {
  return (
    <div className="col-md-12">
      <div className={style.coustomer_review_box}>
        <div className="row align-items-center border-bottom pb-3">
          <div className="col-4">
            <div className="d-flex align-items-center gap-3">
              <div className={style.services_icon_box}>
                <Image src='/user_image.png' width='100' height='100' layout="responsive" alt='Image Path' />
              </div>
              <div>
                <Link href='' className={style.coustomer_review_name}>Sabbir Hosain <VscVerifiedFilled style={{ color: 'blue' }} /></Link>
                <span className={style.coustomer_review_country}>Bangladesh</span>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <div className={style.coustomer_reviews_star}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
          </div>
        </div>
        <p className={style.coustomer_review_text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quis sunt consequuntur sequi porro. Eligendi magni assumenda et delectus consequuntur ullam suscipit perspiciatis magnam natus beatae ad, quae iusto ut voluptatibus reprehenderit reiciendis dignissimos velit accusantium placeat dolorem soluta commodi ab quibusdam? Perspiciatis delectus, eos labore alias odio totam nisi.</p>
      </div>
    </div>
  )
}

export default CoustomerReview