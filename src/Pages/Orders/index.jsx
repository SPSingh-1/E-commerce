// import React from 'react'

import Button from "@mui/material/Button";
import AccountSidebar from "../../components/AccountSidebar";
import { FaAngleDown } from "react-icons/fa6";
import Badge from "../../components/Badge";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const Orders = () => {
  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);
  const isShowOrderdProduct = (index) => {
    if(isOpenOrderdProduct === index){
      setIsOpenOrderdProduct(null);
    }else{
    setIsOpenOrderdProduct(index);
    }
  };
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[80%]">
          <div className="Shadow-md rounded-md bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="mt-0">
                There are <span className="font-bold text-[#ff5252]">2</span>{" "}
                Products in My Orders
              </p>

              <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:bg-gray-200 dark:text-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        &nbsp;
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Payment Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Total Amount
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        User Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order Status
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderdProduct(0)}
                        >
                          {
                            isOpenOrderdProduct === 0
                            ? 
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                            :
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          }
                          
                        </Button>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-[#ff5252]">
                          124555258752448855444ad5sd45s4s5
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-[#ff5252]">
                          pay_PTP0qEXFhrtpyB
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className=" whitespace-nowrap">
                          Shashi Pratap
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">8789555685</td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                          3d6 chandra shekhar azad nagar bhilwara mahatma
                          ghandhi school malikheda ph. +91-8855846555
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">311001</td>
                      <td className="px-6 py-4 font-[500]">3800</td>
                      <td className="px-6 py-4 font-[500]">
                        spsrajjput@gmail.com
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-[#ff5252]">
                          12455648964651948855444ad5sd45s4s5
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <Badge status="confirm" />
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        19-06-2025
                      </td>
                    </tr>
                    {isOpenOrderdProduct === 0 && (
                      <tr>
                        <td className="pl-20" colSpan="6">
                          <div className="relative overflow-x-auto ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-800">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="bg-white border-b border-gray-800 dark:border-gray-700">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-600">
                                      124555258752448855444ad5sd45s4s5
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    A-Line Kurti With Sharara & Du...
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <img
                                      src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                                      className="w-[40px] h-[40px] object-cover rounded-md"
                                      alt="img..."
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                </tr>
                                <tr className="bg-white border-b border-gray-800 dark:border-gray-700">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-600">
                                      124555258752448855444ad5sd45s4s5
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    A-Line Kurti With Sharara & Du...
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <img
                                      src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                                      className="w-[40px] h-[40px] object-cover rounded-md"
                                      alt="img..."
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}

                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderdProduct(1)}
                        >
                          {
                            isOpenOrderdProduct === 1
                            ? 
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                            :
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          }
                          
                        </Button>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-[#ff5252]">
                          124555258752448855444ad5sd45s4s5
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-[#ff5252]">
                          pay_PTP0qEXFhrtpyB
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className=" whitespace-nowrap">
                          Shashi Pratap
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">8789555685</td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                          3d6 chandra shekhar azad nagar bhilwara mahatma
                          ghandhi school malikheda ph. +91-8855846555
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">311001</td>
                      <td className="px-6 py-4 font-[500]">3800</td>
                      <td className="px-6 py-4 font-[500]">
                        spsrajjput@gmail.com
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-[#ff5252]">
                          12455648964651948855444ad5sd45s4s5
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <Badge status="confirm" />
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        19-06-2025
                      </td>
                    </tr>
                    {isOpenOrderdProduct === 1 && (
                      <tr>
                        <td className="pl-20" colSpan="6">
                          <div className="relative overflow-x-auto ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-800">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="bg-white border-b border-gray-800 dark:border-gray-700">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-600">
                                      124555258752448855444ad5sd45s4s5
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    A-Line Kurti With Sharara & Du...
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <img
                                      src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                                      className="w-[40px] h-[40px] object-cover rounded-md"
                                      alt="img..."
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                </tr>
                                <tr className="bg-white border-b border-gray-800 dark:border-gray-700">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-600">
                                      124555258752448855444ad5sd45s4s5
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    A-Line Kurti With Sharara & Du...
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <img
                                      src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                                      className="w-[40px] h-[40px] object-cover rounded-md"
                                      alt="img..."
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}

                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderdProduct(2)}
                        >
                          {
                            isOpenOrderdProduct === 2
                            ? 
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                            :
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          }
                          
                        </Button>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-[#ff5252]">
                          124555258752448855444ad5sd45s4s5
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-[#ff5252]">
                          pay_PTP0qEXFhrtpyB
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className=" whitespace-nowrap">
                          Shashi Pratap
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">8789555685</td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                          3d6 chandra shekhar azad nagar bhilwara mahatma
                          ghandhi school malikheda ph. +91-8855846555
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">311001</td>
                      <td className="px-6 py-4 font-[500]">3800</td>
                      <td className="px-6 py-4 font-[500]">
                        spsrajjput@gmail.com
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-[#ff5252]">
                          12455648964651948855444ad5sd45s4s5
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <Badge status="confirm" />
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        19-06-2025
                      </td>
                    </tr>
                    {isOpenOrderdProduct === 2 && (
                      <tr>
                        <td className="pl-20" colSpan="6">
                          <div className="relative overflow-x-auto ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-800">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="bg-white border-b border-gray-800 dark:border-gray-700">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-600">
                                      124555258752448855444ad5sd45s4s5
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    A-Line Kurti With Sharara & Du...
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <img
                                      src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                                      className="w-[40px] h-[40px] object-cover rounded-md"
                                      alt="img..."
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                </tr>
                                <tr className="bg-white border-b border-gray-800 dark:border-gray-700">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-600">
                                      124555258752448855444ad5sd45s4s5
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    A-Line Kurti With Sharara & Du...
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <img
                                      src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                                      className="w-[40px] h-[40px] object-cover rounded-md"
                                      alt="img..."
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}

                    
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
