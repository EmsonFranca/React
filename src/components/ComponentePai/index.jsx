import * as S from "./styles";
import {} from "./mocks/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrayObjectsImages } from "../ComponentePai/mocks";

export default function ComponentePai() {
  return (
    <S.Container>
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
