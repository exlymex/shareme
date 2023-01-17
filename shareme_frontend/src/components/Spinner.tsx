import React from 'react';
import {TailSpin} from "react-loader-spinner";
interface IProps {
    message: string,
}


const Spinner = ({message}: IProps) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <TailSpin
                // type="Circles"
                color="#00BFFF"
                height={50}
                width={200}
                wrapperClass="m-5"
            />
            <p className="text-lg text-center px-2">{message}</p>
        </div>
    );
};

export default Spinner;
