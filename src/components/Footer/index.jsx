// import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { GiWallet } from "react-icons/gi";
import { FiGift } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-white">
        <div className="container">
          <div className="flex items-center justify-center gap-2 py-8 pb-8">
            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[12px] font-[500]">For all Orders Over $100</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <PiKeyReturn className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[12px] font-[500]">For an Exchange Product</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <GiWallet className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <FiGift className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[12px] font-[500]">Our First Product Order</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[500]">Contact us Anytime</p>
            </div>
          </div>
          <br />
          <hr />

          <div className="footer flex p-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Classyshop - Mega Super Store 507-
                <br />
                Union Trade Centre France
              </p>
              <Link
                className="link text-[13px]"
                to="mailto:someone@example.com"
              >
                sales@spgroup.com
              </Link>
              <span className="text-[25px] font-[600] block w-full mt-3 mb-5 text-[#ff5252]">
                (+91) 9876-543-210
              </span>

              <div className="flex items-center gap-2">
                <HiOutlineChatBubbleLeftRight className="text-[40px] text-[#ff5252]" />
                <span className="text-[16px] font-[600] ">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[40%] flex pl-8">
              <div className="prt2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>

                <ul className="list">
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Prices drop
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      New products
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Best sales
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="prt2_col2 w-[40%] ">
                <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>

                <ul className="list">
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Terms And Conditions Of Use
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      About Us
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Secure Payment
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prt2_col2 w-[35%] flex pl-8 flex-col pr-8">
              <h2 className="text-[18px] font-[600] mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newslwtter to get news about special
                discounts.
              </p>

              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />

                <Button className="btn-org">SUBSCRIBE</Button>
                <FormControlLabel
                  control={<Checkbox/>}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-[rgba(0,0,0,0.1)] py-3 bg-white">
        <div className="container flex items-center justify-between">
                <ul className="flex items-center gap-2 ">
                        <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"><FaFacebookF className="text-[15px]  group-hover:text-white"/></Link></li>
                        <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"><FaYoutube className="text-[20px]  group-hover:text-white"/></Link></li>
                        <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"><FaXTwitter className="text-[15px]  group-hover:text-white"/></Link></li>
                        <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"><FaPinterestP className="text-[15px]  group-hover:text-white"/></Link></li>
                        <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"><FaInstagram className="text-[15px]  group-hover:text-white"/></Link></li>
                        <li className="list-none"><Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"><CiLinkedin className="text-[20px]  group-hover:text-white"/></Link></li>
                </ul>


                <p className="text-[13px] text-center mb-0">@ 2024 - Ecommerce Template</p>

                <div className="flex items-center">
                        <img src="/carte_bleue.png" alt="image"/>
                        <img src="/visa.png" alt="image"/>
                        <img src="/master_card.png" alt="image"/>
                        <img src="/american_express.png" alt="image"/>
                        <img src="/paypal.png" alt="image"/>
                </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
};

export default Footer;
