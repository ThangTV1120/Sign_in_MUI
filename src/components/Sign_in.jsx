import { useForm } from "react-hook-form"
import React, {  useRef } from 'react'
import './Sign_in.scss'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {fetAllUser} from "../service/Sign_in";
import { toast } from 'react-toastify';
export default function Sign_in() {
    const { register,
        handleSubmit,
        watch,
        formState: { errors }, } = useForm();
    const onSubmit = async (data) =>{
        let result=await getUser();
        let ss= result.filter((db)=> db.email===data.email && db.password===data.password);
        // console.log(ss.length)
        if(ss.length>0){
            // alert("Dang nhap thanh cong ")
            toast.success("Dang nhap thanh cong");
        }
        else{
            // alert("Dang nhap that bai ")
            toast.error("Dang nhap that bai ")
            // console.log("Dang nhap that bai")
        }

    };
    const getUser=async ()=>{
        let res =await fetAllUser();
 
        if (res && res.data){
            return res.data;
        }
    }
    return (
        <>
            <div className="container flex justify-center items-center flex-col mt-10">
                <div className="container_header">
                    <div className="container_herder--icon flex justify-center items-center rounded-full w-[40px] h-[40px] mb-2 ml-1 bg-purple-700">
                        <LockOutlinedIcon className="icon text-white " />
                    </div>
                    <span className="container_herder--context text-lg">Sign in</span>
                </div>
                <div className="container_body" >
                    <form className="container_body--form flex flex-col w-[452px]" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-email relative">
                            <input
                                placeholder= " "
                                className="ip-email my-[10px] h-[45px] rounded w-full p-[7px] border-solid border-gray-400 border-2 focus:border-sky-600 focus:outline-none "
                                {...register("email",{
                                    required:"Ban phai nhap email",
                                    validate:{
                                        backlist:(email)=>{
                                            return email.endsWith("@gmail.com")||"ban phai nhap gmail cua ban";
                                        }
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Email khong hop le',
                                      },

                                })
                            }
                              
                                // ref={input}
                                // onFocus={handleFocus}
                                // onBlur={handleBlur}
                            />
                           
                             
                            <span className="placeholder absolute pointer-events-none top-[20%] left-[15px] translate-y-[20%] text-slate-500 select-none">Email Address *</span>
                             <div className="mb-2"> {errors?.email&&errors.email.message}</div>
                        </div>
                        <div className="form-password relative">
                            <input
                                placeholder=" " 
                                type="password"
                                className="ip-pass my-[10px] h-[45px] rounded w-full p-[7px] border-solid border-gray-400 border-2 focus:border-sky-600 focus:outline-none"
                                {...register("password", {
                                     required: "Ban phai nhap mat khau",
                                 })} />
                                  {errors?.password&&errors.password.message}
                                <span className="placeholder absolute pointer-events-none top-[20%] left-[15px] translate-y-[20%] text-slate-500 select-none">Password *</span>
                        </div>
            
                   
                        <div className="flex items-center mb-1">
                            <Checkbox className="w-[28px] p-0" />
                            <span className="ml-[5px]">Remember me</span>
                        </div>
                        <Button className="w-full " type="submit" variant="contained">Sign In</Button>
                        <div className="flex justify-between mt-3">
                            <Link href="#" underline="always">
                                {`Forgot password?`}
                            </Link>
                            <Link href="#" underline="always">
                                {`Don't have an account? Sign Up`}
                            </Link>
                        </div>
                    </form>

                </div>
                <div className="container_footer mt-[40px]">
                    <span>Copyright © <u>Your Website</u> 2023</span>
                </div>
            </div>
        </>
    )
}
