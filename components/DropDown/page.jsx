"use client";
import React, { useState } from "react";
import styles from "./dropDown.module.css";
import { link } from "@/public/assets/data/dummydata";
import Link from "next/link";

const DropDown = ({ isOpen, onClose }) => {
	return (
		<div
			className={` bg-[#effbf3] absolute rounded-md py-1  top-[1.9em] z-[11] min-w-[5em] w-max ${
				isOpen ? styles.open : styles.close
			} `}
			onMouseLeave={onClose}
		>
			{link.map((l) => (
				<div className=" border-b py-3 px-2 border-solid border-[#d5f4e6] hover:bg-[#cff7dc] ease-in duration-[250ms]">
					<Link className="!cursor-pointer" href={l.link}>
						{l.title}
					</Link>
				</div>
			))}
		</div>
	);
};

export default DropDown;
