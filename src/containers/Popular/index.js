import { ScrollView } from "react-native";
import React from "react";
import { TestTrendingArray } from "../../utils/testData";
import { Card } from "../../components";
import { Container, Title } from "../Container.styles";
import { useQuery } from "react-query";
import { api } from "../../utils";

const Popular = () => {
  const { data } = useQuery("popularData", () => api.getPopular());

  if (!data) return null;
  return (
    <Container>
      <Title>Popular right now</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => (
          <Card key={`popular-${item.id}`} {...item} index={i} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Popular;
