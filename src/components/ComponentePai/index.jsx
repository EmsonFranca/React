import * as S from "./styles";
import {} from "../ComponenteFilho";

import { Swiper, SwiperSlide } from "swiper/react";
import { ArrayObjectsImages } from "../ComponentePai/mocks";
export default function ComponentePai() {
  return (
    <S.Container>
      <Swiper slidesPerView={1} navigation pagination>
        {ArrayObjectsImages.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <h1>{item.textAlt}</h1>
              <S.Image src={item.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Container>
  );
}
