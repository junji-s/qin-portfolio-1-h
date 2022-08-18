import React, { FC, useState } from "react";

import { Box, Button, Modal, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Hamburger } from "src/components/atoms/Hamburger";
import { ModalMenuLink } from "src/components/atoms/ModalMenuLink";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import styled from "@emotion/styled";

export const ModalMenu: FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="flex items-center sm:hidden">
        <Hamburger setOpened={setOpened} />
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          fullScreen
          padding={0}
          withCloseButton={false}
          styles={{
            modal: {
              backgroundColor: "#E64980",
            },
            body: {
              padding: "70px 24px 30px",
              fontSize: "28px",
              color: "white",
            },
          }}
        >
          <ModalCloseBtn type="button" onClick={() => setOpened(false)}>
            <CgClose size={30} color="white" />
          </ModalCloseBtn>
          <Box>
            <Text mt={26}>
              <ModalMenuLink text="About" href="/about" />
            </Text>
            <Text mt={16}>
              <ModalMenuLink text="Blog" href="/blog" />
            </Text>
            <Text mt={16}>
              <ModalMenuLink text="Portfolio" href="/portfolio" />
            </Text>
            <Text mt={16}>
              <ModalMenuLink text="Contact" href="/contact" />
            </Text>
          </Box>
        </Modal>
      </div>
    </>
  );
};

const ModalCloseBtn = styled.button`
  background: transparent;
`;
