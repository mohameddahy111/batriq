"use client"

import * as React from 'react';
import { FallingLines } from "react-loader-spinner";

export interface ILoadingProps {
}

export default function Loading({}: ILoadingProps) {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-white/90 absolute top-0 right-0 bottom-0 left-0 z-20">
      <FallingLines
        color="#f89321"
        width="400"
        visible={true}
        //   ariaLabel="falling-circles-loading"
      />
    </div>
  );
}
