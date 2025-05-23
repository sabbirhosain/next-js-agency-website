'use client'
import { LiaQuestionCircleSolid } from "react-icons/lia";
import style from './job-leads.module.css'
import { useEffect, useState } from "react";
const JobLeads = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const toggleCustomize = () => { setIsDisabled(prev => !prev) };
    const [totalLeads, setTotalLeads] = useState('100');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [defaultDeliveryTime, setDefaultDeliveryTime] = useState('');
    const [coupon, setCoupon] = useState("");
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const [leadDiscount, setLeadDiscount] = useState('');

    const applyCoupon = () => {
        if (coupon.trim().toLowerCase() === 'save10' && !isCouponApplied) {
            setIsCouponApplied(true);
        }
    };

    // Auto-set delivery time based on lead quantity
    useEffect(() => {
        let autoTime = 0;
        let leadDiscount = 0;
        if (totalLeads >= 100 && totalLeads <= 999) {
            autoTime = 1;
            leadDiscount = 0;
        } else if (totalLeads >= 1000 && totalLeads <= 4999) {
            autoTime = 3;
            leadDiscount = 0;
        } else if (totalLeads >= 5000 && totalLeads <= 9999) {
            autoTime = 7;
            leadDiscount = 2;
        } else if (totalLeads >= 10000 && totalLeads <= 49999) {
            autoTime = 10;
            leadDiscount = 5;
        } else if (totalLeads >= 50000 && totalLeads <= 99999) {
            autoTime = 15;
            leadDiscount = 8;
        } else if (totalLeads >= 100000) {
            autoTime = 30;
            leadDiscount = 10;
        }

        setDefaultDeliveryTime(autoTime);
        setLeadDiscount(leadDiscount)
        setDeliveryTime(autoTime);

    }, [totalLeads]);


    // Lead Delevery Extra Fee
    let extraFastDeliveryFee = 0;
    if (deliveryTime < defaultDeliveryTime) {
        if (deliveryTime >= 1 && deliveryTime <= 2) {
            if (totalLeads >= 100 && totalLeads <= 999) {
                extraFastDeliveryFee = 0;
            } else if (totalLeads >= 1000 && totalLeads <= 4999) {
                extraFastDeliveryFee = 30;
            } else if (totalLeads >= 5000 && totalLeads <= 9999) {
                extraFastDeliveryFee = 200;
            } else if (totalLeads >= 10000 && totalLeads <= 49999) {
                extraFastDeliveryFee = 1200;
            } else if (totalLeads >= 50000 && totalLeads <= 99999) {
                extraFastDeliveryFee = 2500;
            } else if (totalLeads >= 100000) {
                extraFastDeliveryFee = 5000;
            }
        } else if (deliveryTime >= 3 && deliveryTime <= 4) {
            if (totalLeads >= 100 && totalLeads <= 999) {
                extraFastDeliveryFee = 0;
            } else if (totalLeads >= 1000 && totalLeads <= 4999) {
                extraFastDeliveryFee = 30;
            } else if (totalLeads >= 5000 && totalLeads <= 9999) {
                extraFastDeliveryFee = 200;
            } else if (totalLeads >= 10000 && totalLeads <= 49999) {
                extraFastDeliveryFee = 1200;
            } else if (totalLeads >= 50000 && totalLeads <= 99999) {
                extraFastDeliveryFee = 2500;
            } else if (totalLeads >= 100000) {
                extraFastDeliveryFee = 5000;
            }
        } else if (deliveryTime >= 5 && deliveryTime <= 7) {
            if (totalLeads >= 100 && totalLeads <= 999) {
                extraFastDeliveryFee = 0;
            } else if (totalLeads >= 1000 && totalLeads <= 4999) {
                extraFastDeliveryFee = 30;
            } else if (totalLeads >= 5000 && totalLeads <= 9999) {
                extraFastDeliveryFee = 200;
            } else if (totalLeads >= 10000 && totalLeads <= 49999) {
                extraFastDeliveryFee = 1200;
            } else if (totalLeads >= 50000 && totalLeads <= 99999) {
                extraFastDeliveryFee = 2500;
            } else if (totalLeads >= 100000) {
                extraFastDeliveryFee = 5000;
            }
        } else if (deliveryTime >= 8 && deliveryTime <= 10) {
            if (totalLeads >= 100 && totalLeads <= 999) {
                extraFastDeliveryFee = 0;
            } else if (totalLeads >= 1000 && totalLeads <= 4999) {
                extraFastDeliveryFee = 30;
            } else if (totalLeads >= 5000 && totalLeads <= 9999) {
                extraFastDeliveryFee = 200;
            } else if (totalLeads >= 10000 && totalLeads <= 49999) {
                extraFastDeliveryFee = 1200;
            } else if (totalLeads >= 50000 && totalLeads <= 99999) {
                extraFastDeliveryFee = 2500;
            } else if (totalLeads >= 100000) {
                extraFastDeliveryFee = 5000;
            }
        } else if (deliveryTime >= 11 && deliveryTime <= 15) {
            if (totalLeads >= 100 && totalLeads <= 999) {
                extraFastDeliveryFee = 0;
            } else if (totalLeads >= 1000 && totalLeads <= 4999) {
                extraFastDeliveryFee = 30;
            } else if (totalLeads >= 5000 && totalLeads <= 9999) {
                extraFastDeliveryFee = 200;
            } else if (totalLeads >= 10000 && totalLeads <= 49999) {
                extraFastDeliveryFee = 1200;
            } else if (totalLeads >= 50000 && totalLeads <= 99999) {
                extraFastDeliveryFee = 2500;
            } else if (totalLeads >= 100000) {
                extraFastDeliveryFee = 5000;
            }
        } else if (deliveryTime >= 16 && deliveryTime <= 30) {
            if (totalLeads >= 100 && totalLeads <= 999) {
                extraFastDeliveryFee = 0;
            } else if (totalLeads >= 1000 && totalLeads <= 4999) {
                extraFastDeliveryFee = 30;
            } else if (totalLeads >= 5000 && totalLeads <= 9999) {
                extraFastDeliveryFee = 200;
            } else if (totalLeads >= 10000 && totalLeads <= 49999) {
                extraFastDeliveryFee = 1200;
            } else if (totalLeads >= 50000 && totalLeads <= 99999) {
                extraFastDeliveryFee = 2500;
            } else if (totalLeads >= 100000) {
                extraFastDeliveryFee = 5000;
            }
        }
    }

    // Calculate subtotal, discounts, fees
    const leadPrice = 0.1;
    const subTotal = totalLeads * leadPrice;
    const discountAmount = (subTotal * leadDiscount) / 100;
    let totalCost = subTotal - discountAmount + extraFastDeliveryFee;

    // Coupon discount (10% off the discounted subtotal)
    if (isCouponApplied) {
        totalCost -= (totalCost * 10) / 100;
    }

    return (
        <section className={style.job_leads}>
            <div className="container">
                <form action="">
                    <div className="row">
                        <div className="col-md-8">
                            <div className={style.customize_package_box}>
                                <div className="d-flex align-items-center justify-content-between border ps-2 mb-3">
                                    <span className={style.coustome_package_text}>Customize Your Package</span>
                                    <button type='button' onClick={toggleCustomize} className={`btn btn-danger btn-sm rounded-0 ${style.customize_package_btn}`}>{isDisabled ? 'Edit' : 'Save'}</button>
                                </div>
                                <div className="row pt-4">
                                    <div className="col-md-6 mb-3">
                                        <label className={`form-label ${style.form_lable}`}>Total Leads<LiaQuestionCircleSolid title="Per lead = 0.5 USD" /></label>
                                        <input
                                            type="number"
                                            min="100"
                                            placeholder="Minimum 100 Leads"
                                            className={`form-control rounded-0 ${style.form_control}`}
                                            disabled={isDisabled}
                                            required
                                            value={totalLeads}
                                            onChange={(e) => setTotalLeads(Number(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className={`form-label ${style.form_lable}`}>Delivery Time<LiaQuestionCircleSolid title="Per lead = 0.5 USD" /></label>
                                        <select
                                            className={`form-select rounded-0 ${style.form_select}`}
                                            disabled={isDisabled}
                                            value={deliveryTime}
                                            onChange={(event) => setDeliveryTime(event.target.value)}
                                            required
                                        >
                                            <option value="1">1 DAY</option>
                                            <option value="2">2 DAY</option>
                                            <option value="3">3 DAY</option>
                                            <option value="4">4 DAY</option>
                                            <option value="5">5 DAY</option>
                                            <option value="6">6 DAY</option>
                                            <option value="7">7 DAY</option>
                                            <option value="8">8 DAY</option>
                                            <option value="9">9 DAY</option>
                                            <option value="10">10 DAY</option>
                                            <option value="15">15 DAY</option>
                                            <option value="30">30 DAY</option>
                                        </select>

                                    </div>
                                    <div className="col-md-12">
                                        <textarea rows='5' className={`form-control rounded-0 w-100 ${style.form_control}`} placeholder="What kind of leads do you want? And write down your requirements."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={style.customize_package_box}>
                                <span className={style.order_summary_title}>Order Summary</span>
                                <ol className="list-group rounded-0 pt-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className={style.order_summary_details}>Total Leads</span>
                                        <span className={style.order_summary_details}>{totalLeads}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className={style.order_summary_details}>Delivery Time</span>
                                        <span className={style.order_summary_details}>{deliveryTime} Days</span>
                                    </li>
                                    {extraFastDeliveryFee > 0 && (
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <span className={style.order_summary_details}>Extra Fast Delevery Fee</span>
                                            <span className={style.order_summary_details}>{extraFastDeliveryFee} USD</span>
                                        </li>
                                    )}
                                    {leadDiscount > 0 && (
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <span className={style.order_summary_details}>Discount</span>
                                            <span className={style.order_summary_details}>{leadDiscount} %</span>
                                        </li>
                                    )}
                                    {isCouponApplied && (
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <span className={style.order_summary_details}>Coupon Discount</span>
                                            <span className={style.order_summary_details}>10 %</span>
                                        </li>
                                    )}
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span className={style.order_summary_details}>Total Cost</span>
                                        <span className={style.order_summary_details}>{totalCost.toFixed(0)} USD</span>
                                    </li>
                                </ol>
                                {totalLeads >= 1000 && (
                                    <div className="d-flex align-items-center gap-1 py-3">
                                        <input type="text" onChange={(event) => setCoupon(event.target.value)} placeholder='Enter coupon code' className={`form-control rounded-0 ${style.form_control}`} disabled={isCouponApplied} />
                                        <button type="button" className={`btn btn-danger rounded-0 ${style.customize_package_btn}`} onClick={applyCoupon} disabled={isCouponApplied}> {isCouponApplied ? 'Applied' : 'Apply'}</button>
                                    </div>
                                )}
                                <div className="mt-2">
                                    <button type="submit" className={`btn btn-primary rounded-0 w-100 ${style.customize_package_btn}`}>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default JobLeads