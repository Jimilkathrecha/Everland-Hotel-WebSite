import Select from 'react-select';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from 'moment';


export default function Rooms() {

    const [startdate, setStartDate] = useState(new Date());
    const [roomselector, setRoomselector] = useState(new Date());

    const [adultnum, setAdultNum] = useState(0);
    const [childrennum, setChildrenNum] = useState(0);
    const adultincNum = () => {
        if (adultnum < 10) {
            setAdultNum(Number(adultnum) + 1);
        }
    };
    const adultdecNum = () => {
        if (adultnum > 0) {
            setAdultNum(adultnum - 1);
        }
    }
    const adulthandleChange = (e) => {
        setAdultNum(e.target.value);
    }
    const childrenincNum = () => {
        if (childrennum < 10) {
            setChildrenNum(Number(childrennum) + 1);
        }
    };
    const childrendecNum = () => {
        if (childrennum > 0) {
            setChildrenNum(childrennum - 1);
        }
    }
    const childrenhandleChange = (e) => {
        setChildrenNum(e.target.value);
    }
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
    ];
    return (
        <>
            <div className="w-100 flex flex-col justify-evenly h-[calc(100vh-60px)] mt-[60px]">
                <div className="w-[80%] mx-auto rounded-lg border-2 border-red shadow-md shadow-red-100">
                    <form action="col" className='flex items-center justify-center gap-5 py-2'>
                        <div className="flex gap-3">
                            <div class="input-container w-100 h-fit relative m-0">
                                <DatePicker className='input-field' selected={startdate} minDate={moment().toDate()} onChange={(date) => setStartDate(date)} />
                                <i class="fa-solid fa-calendar-days tx-red absolute top-50 end-0 translate-middle"></i>
                                <span class="input-highlight"></span>
                            </div>
                            <div className="">
                                <i class="fa-regular tx-red fa-right-left-large"></i>
                            </div>
                            <div class="input-container w-100 h-fit relative m-0">
                                <DatePicker className='input-field' selected={startdate} minDate={moment().toDate()} onChange={(date) => setStartDate(date)} />
                                <i class="fa-solid fa-calendar-days tx-red absolute top-50 end-0 translate-middle"></i>
                                <span class="input-highlight"></span>
                            </div>
                        </div>
                        <div className="col-2">
                            <Select
                                placeholder="Select Rooms"
                                options={options} value={options.find(option => option.value === options) || options.find(option => option === options)}
                                className="w-100 bs-transparent focus:outline-0" onChange={(roomnumber) => { setRoomselector("roomnumber", roomnumber); }}
                            />
                        </div>
                        <div className="flex gap-3 w-fit h-fit items-center">
                            <div className="">
                                <p className='fs-6 text-center font-semibold tx-red'>Adults(12+ yr)</p>
                                <div className="flex items-center shadow-md w-fit mx-auto">
                                    <div class="px-3 rounded-l-md bs-red pointer" onClick={adultdecNum}>
                                        <i class="fa-solid fa-minus tx-white fs-6"></i>
                                    </div>
                                    <input type="text" class="font-semibold text-center min-w-[30px] !max-w-[30px]" value={adultnum} onChange={adulthandleChange} />
                                    <div class="px-3 rounded-r-md bs-red pointer" onClick={adultincNum}>
                                        <i class="fa-solid fa-plus tx-white fs-6"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <p className='fs-6 text-center font-semibold tx-red'>Children(0-12 yr)</p>
                                <div className="flex items-center shadow-md w-fit mx-auto">
                                    <div class="px-3 rounded-l-md bs-red pointer" onClick={childrendecNum}>
                                        <i class="fa-solid fa-minus tx-white fs-6"></i>
                                    </div>
                                    <input type="text" class="font-semibold text-center min-w-[30px] !max-w-[30px]" value={childrennum} onChange={childrenhandleChange} />
                                    <div class="px-3 rounded-r-md bs-red pointer" onClick={childrenincNum}>
                                        <i class="fa-solid fa-plus tx-white fs-6"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bs-transparent h-fit border-2 border-red rounded-md pointer">
                            <Link to="/rooms" className='!m-0 !p-0'>
                                <p className='tx-red text-center fs-6 py-1 px-5 font-bold'>Update</p>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="h-[calc(100vh-200px)] w-[80%] mx-auto flex gap-3">
                    <div className="h-100 w-[20%] border-2 border-red shadow-md shadow-red-100 rounded-lg">
                        <div className="col">
                            <p className='tx-red fs-3 font-bold text-center'>Filter</p>
                        </div>
                        <div className="flex flex-col gap-2 p-3">
                            <div className="flex justify-between border-2 border-red py-1 rounded-md shadow-sm shadow-red-200 px-2">
                                <div className="">Content</div>
                                <div className="">{`>`}</div>
                            </div>
                            <div className="flex justify-between border-2 border-red py-1 rounded-md shadow-sm shadow-red-200 px-2">
                                <div className="">Content</div>
                                <div className="">{`>`}</div>
                            </div>
                            <div className="flex justify-between border-2 border-red py-1 rounded-md shadow-sm shadow-red-200 px-2">
                                <div className="">Content</div>
                                <div className="">{`>`}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 h-100 w-[80%]">
                        <div className="gap-2 p-1 h-fit border-2 border-red shadow-md shadow-red-100 rounded-lg overflow-hidden overflow-x-scroll scroll-d-none">
                            <div className="flex gap-2 w-100 h-fit items-center">
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                                <div className="bg-red-100 rounded-md">
                                    <p className='fs-6 font-bold px-3 py-1'>Data</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[calc(100vh-260px)] border-2 border-red shadow-md shadow-red-100 rounded-lg">
                            <div className="p-3">
                                <div className="col flex gap-3 border-2 border-red p-2 rounded-md overflow-hidden">
                                    <div className="w-[30%] p-1 flex flex-col">
                                        <div className="col">
                                            <img className='rounded-md shadow-md' src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1703074448~exp=1703075048~hmac=fcfca67c8e56c2b361863f7b6aaa8cd9fdcc3e59178ff9d93702416d9620d05c" alt="" />
                                        </div>
                                        <div className="flex gap-1 w-100 overflow-x-scroll scroll-d-none p-1">
                                            <img className='w-[25%] rounded-md shadow-md' src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1703074448~exp=1703075048~hmac=fcfca67c8e56c2b361863f7b6aaa8cd9fdcc3e59178ff9d93702416d9620d05c" alt="" />
                                            <img className='w-[25%] rounded-md shadow-md' src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1703074448~exp=1703075048~hmac=fcfca67c8e56c2b361863f7b6aaa8cd9fdcc3e59178ff9d93702416d9620d05c" alt="" />
                                            <img className='w-[25%] rounded-md shadow-md' src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1703074448~exp=1703075048~hmac=fcfca67c8e56c2b361863f7b6aaa8cd9fdcc3e59178ff9d93702416d9620d05c" alt="" />
                                            <img className='w-[25%] rounded-md shadow-md' src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1703074448~exp=1703075048~hmac=fcfca67c8e56c2b361863f7b6aaa8cd9fdcc3e59178ff9d93702416d9620d05c" alt="" />
                                        </div>
                                    </div>
                                    <div className="bs-red col max-w-[1px] border-[1.5px] rounded-full border-red"></div>
                                    <div className="col flex flex-col justify-between">
                                        <div className="flex col justify-between">
                                            <div className="col">
                                                <p className=''>⭐⭐⭐⭐⭐</p>
                                                <p className='text-[1rem] font-bold '>1 Suiet Room | Double Size Bed</p>
                                                <div className="flex items-center gap-2 py-1 fs-7">
                                                    <i class="fa-duotone fa-map-pin tx-red"></i>
                                                    <p className='font-semibold'>Near Mumbai Airport</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className='px-2 bs-red fs-8 tx-white font-semibold rounded-lg'>Free Cancellation Till 24 Dec'23</p>
                                            </div>
                                        </div>
                                        <div className="flex col justify-between items-end">
                                            <div className="flex fs-7 items-center gap-2">
                                                <i class="fa-sharp fa-solid tx-green fa-badge-check"></i>
                                                <p className='font-semibold'>24-hour Room Service</p>
                                            </div>
                                            <div className="text-end px-1">
                                                <div className="flex justify-end py-1">
                                                    <p className='w-fit m-0 fs-7 tx-white font-semibold rounded-md px-2 bs-red '>32% Off</p>
                                                </div>
                                                <p className='fs-6 font-bold fs-6'><span className='tx-red font-bold fs-7'>At only -</span> ₹5100</p>
                                                <p className='fs-6 font-bold fs-6'><span className='tx-red font-bold fs-7'>TAXES & FEES -</span> ₹1413 </p>
                                                <p className='fs-6 font-bold fs-6'><span className='tx-red font-bold fs-7'>Room per night -</span> 1</p>

                                                <Link to="/Room-Details" >
                                                    <p className='tx-red border-2 border-red px-4 py-1 rounded-md fs-6 mt-3 font-bold'>Login for more details</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
