import React from "react";
import camera from "shared/assets/Camera.svg"
import { AvatarImg } from "./style";

interface IAvatar {
    avatar?: string;
}

export const Avatar: React.FC<IAvatar> = ({ avatar }) => {
    return (
        <AvatarImg 
            src={
                !avatar
                    ? camera
                    : `https://academtest.ilink.dev/images/${avatar}`
                }
            className={!avatar ? "camera" : ""} 
            alt="avatar" 
        />
    )
}