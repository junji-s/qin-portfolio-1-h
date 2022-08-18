import { Container, Text } from "@mantine/core";
import type { NextPage } from "next";
import { FvLower } from "src/components/molecules/FvLower";
import { StSection } from "src/style/css/layout/StSection";

const About: NextPage = () => {
  return (
    <>
      <StSection style={{ minHeight: "100vh" }}>
        <FvLower text="About" />

        <Container>
          <Text size={22} weight={700} mb={24}>
            Lightsound Shimabu
          </Text>
          <Text>
            ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
          </Text>
        </Container>
      </StSection>
    </>
  );
};

export default About;
