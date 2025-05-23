import Image from 'next/image'
import Link from 'next/link'
import { TbListDetails } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import style from './PremiumToolsCard.module.css'

const PremiumToolsCard = () => {
    return (
        <div className="col-md-3 mb-4">
            <div className={style.tools_service_card_box}>
                <div className={style.tools_service_img_box}>
                    <Image src='/tools-image/1.png' width='100' height='100' layout="responsive" alt='Image Path' />
                    <span className={style.tools_service_discount}>- 10% OFF</span>
                </div>
                <div className="d-flex align-items-center mt-1">
                    <span className={style.tools_service_price}>90 USD</span>
                    <span className={style.tools_service_rating}><FaStar style={{ color: 'gold' }} />4.9 ( 220 )</span>
                </div>
                <div className={style.tools_service_text_box}>
                    <Link href='tools/1' className={style.tools_service_title}>Apollo.io Email Account</Link>
                    <span className={style.tools_service_descrip}>Validity : 1 Month</span>
                    <span className={style.tools_service_descrip}>Features : 10,000 Email Credits with Use of Business Account.</span>
                    <div className='d-flex align-items-center gap-1 pt-3'>
                        <Link href='tools/1' className='btn btn-success w-100 rounded-0 btn-sm'>BUY NOW</Link>
                        <Link href='tools/1' className='btn btn-outline-success rounded-0 btn-sm'><TbListDetails /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiumToolsCard