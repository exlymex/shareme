import React from 'react';
import {IFeed} from "../../types";
import Masonry from "react-masonry-css";
import Pin from './Pin'

const breakpointObj = {
    default:4,
    3000:6,
    2000:5,
    1200:3,
    1000:2,
    500:1
}
interface IPins {
    pins:null | IFeed[]
}
const MasonryLayout = ({pins} : IPins) => {
    return (
       <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
           {pins?.map((pin) => <Pin key={pin._id} pin={pin} />)}
       </Masonry>
    );
};

export default MasonryLayout;
