import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { BiLeftArrow } from "react-icons/bi";
import style from './tools.details.module.css'
import CoustomerReview from '@/components/CoustomerReview/CoustomerReview';
import Link from 'next/link';
const page = () => {
    return (
        <section className={style.tools_details_section}>
            <div className={style.tools_details_bg}></div>
            <div className="container">
                <div className="row justify-content-between my-5">
                    <div className="col-md-7">
                        <h2 className={style.section_tagline}><TfiLayoutLineSolid className={style.section_tagline_icon} />Subscription Details</h2>
                        <p className={style.tools_details_text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi animi ab doloremque magnam? Iste nemo obcaecati delectus enim. Dolores illo illum magnam quas laboriosam iure vel dolore molestias fugit beatae doloremque soluta nemo nisi, quibusdam consectetur natus.</p>
                        <div className='py-3'>
                            <span className={style.tools_details_features}><BiRightArrowAlt />Lorem ipsum dolor sit amet.</span>
                            <span className={style.tools_details_features}><BiRightArrowAlt />Lorem ipsum dolor sit amet.</span>
                            <span className={style.tools_details_features}><BiRightArrowAlt />Lorem ipsum dolor sit amet.</span>
                            <span className={style.tools_details_features}><BiRightArrowAlt />Lorem ipsum dolor sit amet.</span>
                            <span className={style.tools_details_features}><BiRightArrowAlt />Lorem ipsum dolor sit amet.</span>
                        </div>
                        <p className={style.tools_details_text}><span className='text-danger'>Important Announcement :</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi animi ab doloremque magnam? Iste nemo obcaecati delectus enim.</p>
                    </div>
                    <div className="col-md-4">
                        <form action="">
                            <div className={style.customize_package_box}>
                                <span className={style.order_summary_title}>Order Summary</span>
                                <div className="mb-3">
                                    <input type="text" placeholder="Enter Your Email" className={`form-control rounded-0 w-100 mb-2 ${style.form_control}`} />
                                    <input type="text" placeholder="Enter Your Number" className={`form-control rounded-0 w-100 mb-2 ${style.form_control}`} />
                                    <select className={`form-select rounded-0 ${style.form_select}`}>
                                        <option value="1">1 Month</option>
                                        <option value="2">3 Month</option>
                                        <option value="3">6 Month</option>
                                        <option value="3">12 Month</option>
                                    </select>
                                    <select className={`form-select rounded-0 my-2 ${style.form_select}`}>
                                        <option value="1">1000</option>
                                        <option value="2">5000</option>
                                        <option value="3">10,000</option>
                                        <option value="3">Custome</option>
                                    </select>
                                    <input type="number" placeholder="Enter Your Credit" min='100' className={`form-control rounded-0 w-100 ${style.form_control}`} />
                                    <ol className="list-group rounded-0 py-2">
                                        <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                                            <span className={style.order_summary_details}>Discount</span>
                                            <span className={style.order_summary_details}>0</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <span className={style.order_summary_details}>Total Amount</span>
                                            <span className={style.order_summary_details}>0</span>
                                        </li>
                                    </ol>
                                    <div className="d-flex align-items-center gap-1">
                                        <input type="text" placeholder='Enter coupon code' className={`form-control rounded-0 ${style.form_control}`} />
                                        <button type="button" className='btn btn-success rounded-0'>Apply</button>
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className='btn btn-dark rounded-0 w-100'>Continue <BsArrowRight /></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className={style.tools_reviews}>
                            <h2 className={style.client_reviews_title}>Client Reviews</h2>
                            <div className="row align-items-center justify-content-between">
                                <div className="col-md-3">
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <h1 className={style.tools_reviews_reating}>4.9</h1>
                                        <div>
                                            <div className={style.tools_reviews_star}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                            <span className={style.tools_total_reviews}>100k Reviews</span>
                                        </div>
                                    </div>
                                    <button type='button' className='btn btn-success rounded-0 w-75 btn-sm d-flex align-items-center justify-content-center gap-2'><CiEdit />Write a Review</button>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-flex align-items-center gap-3 py-1'>
                                        <span className={`d-flex align-items-center gap-2 ${style.tools_total_reviews}`}>5 <FaStar style={{ color: 'orange' }} /></span>
                                        <div className={`progress w-50 ${style.tools_review_progress}`} role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            <div className={`progress-bar ${style.tools_review_progress_bar}`} style={{ width: '98%' }} />
                                        </div>
                                        <span className={style.tools_total_reviews}>52.8k</span>
                                    </div>
                                    <div className='d-flex align-items-center gap-3 py-1'>
                                        <span className={`d-flex align-items-center gap-2 ${style.tools_total_reviews}`}>4 <FaStar style={{ color: 'orange' }} /></span>
                                        <div className={`progress w-50 ${style.tools_review_progress}`} role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            <div className={`progress-bar ${style.tools_review_progress_bar}`} style={{ width: '38%' }} />
                                        </div>
                                        <span className={style.tools_total_reviews}>52.8k</span>
                                    </div>
                                    <div className='d-flex align-items-center gap-3 py-1'>
                                        <span className={`d-flex align-items-center gap-2 ${style.tools_total_reviews}`}>3 <FaStar style={{ color: 'orange' }} /></span>
                                        <div className={`progress w-50 ${style.tools_review_progress}`} role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            <div className={`progress-bar ${style.tools_review_progress_bar}`} style={{ width: '12%' }} />
                                        </div>
                                        <span className={style.tools_total_reviews}>52.8k</span>
                                    </div>
                                    <div className='d-flex align-items-center gap-3 py-1'>
                                        <span className={`d-flex align-items-center gap-2 ${style.tools_total_reviews}`}>2 <FaStar style={{ color: 'orange' }} /></span>
                                        <div className={`progress w-50 ${style.tools_review_progress}`} role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            <div className={`progress-bar ${style.tools_review_progress_bar}`} style={{ width: '6%' }} />
                                        </div>
                                        <span className={style.tools_total_reviews}>52.8k</span>
                                    </div>
                                    <div className='d-flex align-items-center gap-3 py-1'>
                                        <span className={`d-flex align-items-center gap-2 ${style.tools_total_reviews}`}>1 <FaStar style={{ color: 'orange' }} /></span>
                                        <div className={`progress w-50 ${style.tools_review_progress}`} role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                            <div className={`progress-bar ${style.tools_review_progress_bar}`} style={{ width: '0%' }} />
                                        </div>
                                        <span className={style.tools_total_reviews}>52.8k</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="text-center">
                                        <h2 className={style.client_reviews_title}>You Need Any Help?</h2>
                                        <Link href='/contact' className='btn btn-outline-success rounded-0 btn-sm mt-3'>Customer Support</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end gap-2 mb-2">
                    <button type='button' className='btn btn-outline-success btn-sm rounded-0'><BiLeftArrow /></button>
                    <button type='button' className='btn btn-outline-success btn-sm rounded-0'><BiRightArrow /></button>
                </div>
                <div className="row">
                    <CoustomerReview />
                    <CoustomerReview />
                    <CoustomerReview />
                </div>
            </div>
        </section>
    )
}

export default page