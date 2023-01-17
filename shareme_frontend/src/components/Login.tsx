import React from 'react';
import {GoogleLogin} from "@react-oauth/google";
import {useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import shareVideo from '../assets/videos/share.mp4'
import logo from '../assets/images/logowhite.png'
import jwtDecode from 'jwt-decode'
import {client} from '../client'
export interface IDecoded {
    name:string,
    picture:string,
    sub:string
}

const Login = () => {
    const navigate = useNavigate()
    const responseGoogle = (response:any) => {
        const decoded:IDecoded = jwtDecode(response.credential)
        const {sub,name,picture} = decoded
        localStorage.setItem('user',JSON.stringify(sub))

        const userData = {
            _id:sub,
            _type:'user',
            userName:name,
            image:picture
        }
        client.createIfNotExists(userData)
            .then(() => {
                navigate('/',{replace:true})
            })
    }
    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full">
                <video
                src={shareVideo}
                // type="video/mp4"
                loop
                controls={false}
                muted
                autoPlay
                className="w-full h-full object-cover"
                />
                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                    <div className="p-5">
                        <img src={logo} width="130px" alt="logo"/>
                    </div>
                    <div className="shadow-2xl">
                        <GoogleLogin
                            onSuccess={responseGoogle}
                            // onError={responseGoogle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
