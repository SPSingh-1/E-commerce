// import React from 'react'

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import ProductZoom from "../../components/ProductZoom";
import ProductDetailsComponent from "../../components/ProductDetailsComponent";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
            >
              Kurti
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white py-5">
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[35%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-10 pl-10">
              <ProductDetailsComponent/>
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia ex corporis quis aliquam soluta reiciendis natus nemo
                quibusdam? Non sequi modi impedit commodi quam sunt facere?
                Dolores, libero aut saepe explicabo rem modi ratione culpa.
              </p>

              <h4>Lightweight Design</h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam quam molestias perspiciatis aliquam libero quibusdam
                vitae id! Numquam praesentium libero tempora magni! Ex ipsa aut
                doloribus, amet earum facere ratione numquam cumque sed laborum
                nobis!
              </p>

              <h4>Free Shipping & Return</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quia reprehenderit illo?
              </p>

              <h4>Money Back Guarantee</h4>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                laborum nam iste.
              </p>

              <h4>Online Support</h4>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis ullam fugiat laudantium voluptas illo? Magni!
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 0">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Stand Up
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Folded (w/o wheels)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Folded (w/ wheels)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Door Pass Through
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        434863461723(front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">8923169154 heygi</td>
                      <td className="px-6 py-4 font-[500]">123547184uqwkebc</td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        434863461723(front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">8923169154 heygi</td>
                      <td className="px-6 py-4 font-[500]">123547184uqwkebc</td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        434863461723(front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">8923169154 heygi</td>
                      <td className="px-6 py-4 font-[500]">123547184uqwkebc</td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        434863461723(front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">8923169154 heygi</td>
                      <td className="px-6 py-4 font-[500]">123547184uqwkebc</td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        434863461723(front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">8923169154 heygi</td>
                      <td className="px-6 py-4 font-[500]">123547184uqwkebc</td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Coustomr question answer</h2>

                <div className="reviewScroll w-full max-h-[300px]          overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center   justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                        <div className="img w-[70px] h-[70px] overflow-hidden rounded-full ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&s" className="w-full" alt=""/>
                        </div>

                        <div className="w-[80%]">
                            <h4 className="text-[16px]">Shashi Pratap</h4>
                            <h5 className="text-[13px] mb-0">2025-05-30</h5>
                            <p className="mt-0 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, beatae eligendi? Dolorum explicabo provident error maxime accusamus similique itaque iusto quaerat ea a sequi nostrum distinctio, nulla enim possimus aliquid dolorem laudantium commodi mollitia tenetur et.</p>
                        </div>
                    </div>

                    <Rating name="size-small" defaultValue={4}  readOnly/>
                  </div>

                   <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center   justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                        <div className="img w-[70px] h-[70px] overflow-hidden rounded-full ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&s" className="w-full" alt=""/>
                        </div>

                        <div className="w-[80%]">
                            <h4 className="text-[16px]">Shashi Pratap</h4>
                            <h5 className="text-[13px] mb-0">2025-05-30</h5>
                            <p className="mt-0 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, beatae eligendi? Dolorum explicabo provident error maxime accusamus similique itaque iusto quaerat ea a sequi nostrum distinctio, nulla enim possimus aliquid dolorem laudantium commodi mollitia tenetur et.</p>
                        </div>
                    </div>

                    <Rating name="size-small" defaultValue={4}  readOnly/>
                  </div>

                   <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center   justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                        <div className="img w-[70px] h-[70px] overflow-hidden rounded-full ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&s" className="w-full" alt=""/>
                        </div>

                        <div className="w-[80%]">
                            <h4 className="text-[16px]">Shashi Pratap</h4>
                            <h5 className="text-[13px] mb-0">2025-05-30</h5>
                            <p className="mt-0 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, beatae eligendi? Dolorum explicabo provident error maxime accusamus similique itaque iusto quaerat ea a sequi nostrum distinctio, nulla enim possimus aliquid dolorem laudantium commodi mollitia tenetur et.</p>
                        </div>
                    </div>

                    <Rating name="size-small" defaultValue={4}  readOnly/>
                  </div>
                </div>


                <br/>

                <div className="reviewFome bg-[#fafafa] p-4 rounded-md">
                    <h2 className="text-[18px]">Add a Review</h2>
                    <form className="w-full mt-5">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Write a Review"
                            className="w-full mb-5"
                            multiline
                            rows={5}
                        />
                        <br/> <br/>
                        <Rating name="size-small" defaultValue={4} />

                        <div className="flex items-center mt-5">
                            <Button className="btn-org">Submit Review</Button>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          )}
        </div>


        <div className="container pt-8">
            <h2 className="text-[20px] font-[600]">Related Products</h2>
            <ProductsSlider items={6}/>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
