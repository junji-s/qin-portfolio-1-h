import React, { FC, useState } from "react";

import { Button, Modal } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Hamburger } from "src/components/atoms/Hamburger";

export const ModalMenu: FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="flex items-center sm:hidden">
        <Hamburger setOpened={setOpened} />
        <Modal opened={opened} onClose={() => setOpened(false)} fullScreen>
          ssss
        </Modal>
      </div>
    </>
  );
};
