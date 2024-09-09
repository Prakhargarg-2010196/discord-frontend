'use client';
import { ReactNode } from 'react';
// import {
//     increment,
//     selectCount,
// } from '~/lib/redux/counter-slice-test/counter-slice-test';
// import { useAppDispatch, useAppSelector } from '~/lib/redux/redux-hooks';
export default function AuthLayout(
    props: Readonly<{
        children: ReactNode;
    }>
) {
    /**
     *!Test code to check the counter-slice
     *const count = useAppSelector(selectCount);
     *const counterDispatch = useAppDispatch();
     */
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col justify-start p-10 gap-4 w-full h-full md:w-1/2 md:h-max border  border-gray-800">
                <div className="rounded-full self-center flex justify-center items-center bg-fuchsia-400 min-h-20 min-w-20">
                    Logo
                </div>

                {/**
                 *!Test code to check the counter-slice
                 {count}
                 <button onClick={()=>counterDispatch(increment())}>hello</button> */}
                {props.children}
            </div>
        </div>
    );
}
