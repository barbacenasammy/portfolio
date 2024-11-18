import type { FC } from "react";
import { Swiper } from "swiper/react";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const CarouselContainer: FC<{
	children: React.ReactNode;
	direction: "ltr" | "rtl";
}> = ({ children, direction = "rtl" }) => {
	return (
		<div style={{ direction: direction }}>
			<Swiper
				modules={[Autoplay]}
				loop={true}
				spaceBetween={20}
				pagination={{ clickable: true }}
				navigation={true}
				className="mySwiper"
				slidesPerView="auto"
				speed={7000}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}>
				{children}
			</Swiper>
		</div>
	);
};
export default CarouselContainer;
