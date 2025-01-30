"use client";
import React, { useEffect } from "react";
type ModalProps = {
	children: React.ReactNode;
	isOpen: boolean;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className="fixed h-auto min-h-screen inset-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center overflow-hidden">
			<div className="bg-white rounded-lg shadow-lg p-8">{children}</div>
		</div>
	);
};

export default Modal;
