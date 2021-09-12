import React, { useContext } from "react";
import { Container, Card, Img, Button } from "./body";
import { film } from "../mock";
import { PhotoContext } from "../store";

const Body = () => {
  const [data, setData] = useContext(PhotoContext);
  if (data.length === 0) return <h1>Loading...</h1>;
  return (
    <>
      <Button onClick={() => setData(film)}>change</Button>
      <Container>
        {data.map(({ id, url, title }) => {
          return (
            <Card key={id}>
              <p>{title}</p>
              <Img src={url} />
            </Card>
          );
        })}
      </Container>
    </>
  );
};
export default Body;
