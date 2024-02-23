import * as S from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slides({ ArrayObjectsImages, color }) {
  return (
    <S.Container color={color}>
      <Swiper slidesPerView={1} navigation pagination>
        {ArrayObjectsImages.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <S.Title>
                <h1>{item.textAlt}</h1>
              </S.Title>

              <S.Image src={item.url} />

              <S.Power>
                <h2> Power: {item.power} </h2>
              </S.Power>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Container>
  );
}
