import React from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <RingLoader color={"#123abc"} css={override} size={150} />
        </div>
    );
};

export default Loading;