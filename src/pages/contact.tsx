import { Container, Text } from "@mantine/core";
import type { NextPage } from "next";
import { FvLower } from "src/components/molecules/FvLower";
import { PortfolioList } from "src/components/molecules/PortfolioList";
import { ContactForm } from "src/components/organisms/form/ContactForm";
import { StSection } from "src/style/css/layout/StSection";

const Contact: NextPage = () => {
  return (
    <>
      <StSection style={{ minHeight: "100vh" }}>
        <FvLower text="Contact" />

        <Container>
          <ContactForm />
        </Container>
      </StSection>
    </>
  );
};

export default Contact;
