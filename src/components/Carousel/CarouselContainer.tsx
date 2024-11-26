import type { FC } from "react";
import { Swiper, SwiperRef } from "swiper/react";
import React, { useRef } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const CarouselContainer: FC<{
	children: React.ReactNode;
	direction: "ltr" | "rtl";
}> = ({ children, direction = "rtl" }) => {
	const swiperRef = useRef<SwiperRef | null>(null);

	return (
		<div
			style={{ direction: direction }}
			onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
			onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}>
			<Swiper
				ref={swiperRef}
				modules={[Autoplay]}
				loop={true}
				spaceBetween={20}
				pagination={{ clickable: true }}
				navigation={true}
				className="mySwiper"
				slidesPerView="auto"
				speed={4000}
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
