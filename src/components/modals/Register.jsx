import React, { useState } from 'react'

export default function Register({ registermodalstate, setRegistermodalstate, setLoginmodalstate }) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // const handleChangeLoginData = (e) => {
    //     const { name, value } = e.target;
    //     formik.setFieldValue(name, value);
    // };
    const handlePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    return (
        <>
            <div className={`modal ${registermodalstate ? "d-block" : "d-none"}`}>
                <div onClick={() => setRegistermodalstate(false)} className="w-[100vw] h-100 overflow-hidden scoll-d-none absolute -z-10 bg-black opacity-[0.6]"></div>
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content relative">
                        <div className="modal-body p-4 w-100">
                            <div className="my-3 text-center">
                                <p className="font-bold fs-2">Register</p>
                            </div>
                            <form>
                                <div className="col mt-4">
                                    <input
                                        className={`form-control  `}
                                        // ${formik.touched?.email && formik.errors?.email ? "is-invalid" : ""}
                                        placeholder="Enter Your Mail"
                                        type="text"
                                        name="email"
                                        id="email"
                                    // onChange={handleChangeLoginData}
                                    // onBlur={formik.handleBlur}
                                    // value={formik.values?.email}
                                    />
                                    {/* {formik.touched.email && formik.errors.email && (
                                        <div className="invalid-feedback">{formik.errors.email}</div>
                                    )} */}
                                </div>
                                <div className="col mt-4">
                                    <input
                                        className={`form-control  `}
                                        // ${formik.touched?.number && formik.errors?.number ? "is-invalid" : ""}
                                        placeholder="Enter Your Number"
                                        type="tel"
                                        name="number"
                                        id="number"
                                    // onChange={handleChangeLoginData}
                                    // onBlur={formik.handleBlur}
                                    // value={formik.values?.number}
                                    />
                                    {/* {formik.touched.number && formik.errors.number && (
                                        <div className="invalid-feedback">{formik.errors.number}</div>
                                    )} */}
                                </div>
                                <div className="mt-4 col">
                                    <div className="position-relative">
                                        <input
                                            type={isPasswordVisible ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            className={`form-control  ? "border-red" : "" }`}
                                            // ${formik.touched?.password && formik.errors?.password

                                            placeholder="Enter Password"
                                        // onChange={handleChangeLoginData}
                                        // onBlur={formik.handleBlur}
                                        // value={formik.values?.password}
                                        />
                                        <div className="end-[10px] top-[7px] absolute"
                                            onClick={handlePasswordVisibility}>
                                            {isPasswordVisible ? (
                                                <i className="fa-regular fa-eye-slash "></i>
                                            ) : (
                                                <i className="fa-regular fa-eye "></i>
                                            )}
                                        </div>
                                        {/* {formik.touched.password && formik.errors.password && (
                                            <div className="tx-red fs-6">{formik.errors.password}</div>
                                        )} */}
                                    </div>
                                </div>
                                <div className="col-md-12 text-center mt-5 ">
                                    <button type="submit" className="mt-5 rounded-4 px-3 fs-6">
                                        <b>submit</b>
                                    </button>
                                </div>
                            </form>
                            <div className="form-group mt-2" onClick={() => { setRegistermodalstate(false); setLoginmodalstate(true) }}>
                                <p className="text-center">
                                    already have account login here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
