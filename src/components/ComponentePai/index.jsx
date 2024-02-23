import * as S from "./styles";
// import { ArrayObjectsImages } from "./mocks";
// import Slides from "../Slides";
import { useState } from "react";
export default function ComponentePai() {
  const [valor, setValor] = useState(10);

  function onMore() {
    setValor((prevState) => prevState + 1);
  }
  return (
    <S.Container>
      {/* <Slides ArrayObjectsImages={ArrayObjectsImages} color={"#ff0"} /> */}
      <S.P>{valor}</S.P>
      <S.Button onClick={onMore}>Clique aqui para somar 1</S.Button>
    </S.Container>
  );
}
