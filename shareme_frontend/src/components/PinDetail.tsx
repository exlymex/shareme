import React from 'react';
import {IUser} from "../../types";
interface IProps{
    user:IUser | null
}
const PinDetail = ({user} : IProps) => {
    return (
        <div>
            PinDetail
        </div>
    );
};

export default PinDetail;
