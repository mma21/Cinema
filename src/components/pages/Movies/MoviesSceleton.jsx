import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function MoviesSkeleton() {
    return (
        <Box mt={3}>
            {new Array(5).fill(null).map((_, index) => (
                <React.Fragment key={index}>
                    <Skeleton
                        animation="wave"
                        variant="text"
                        width={180}
                        height={40}
                        sx={{ mb: 2 }}
                    />
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={10}
                        breakpoints={{
                            1200: { slidesPerView: 5 },
                            900: { slidesPerView: 3 },
                            576: { slidesPerView: 2 },
                            0: { slidesPerView: 1 }
                        }}
                        className="custom-swiper"
                    >
                        {new Array(5).fill(null).map((_, cardIndex) => (
                            <SwiperSlide key={cardIndex}>
                                <Skeleton
                                    animation="wave"
                                    variant="rectangular"
                                    width="100%"
                                    height={300}
                                    sx={{ borderRadius: 2 }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </React.Fragment>
            ))}
        </Box>
    );
}
