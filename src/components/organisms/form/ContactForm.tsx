import React, { FC } from "react";

import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { PrimarySubmitBtn } from "src/components/atoms/PrimaryBtn";

export const ContactForm: FC = () => {
  const form = useForm({
    initialValues: {
      email: "",
      fullname: "",
      msg: "",
      termsOfService: false,
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "メールアドレスを入力してください。",
      fullname: (value) => (value ? null : "名前を入力してください。"),
      msg: (value) => (value ? null : "メッセージを入力してください。"),
    },
  });

  return (
    <Box>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Box>
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
        </Box>

        <Box my={25}>
          <TextInput
            required
            label="Name"
            placeholder="Taro Yamada"
            {...form.getInputProps("fullname")}
          />
        </Box>

        <Box>
          <Textarea
            placeholder="I want to order your goods"
            label="Your message"
            required
            minRows={5}
          />
        </Box>

        <Group position="center" mt="md">
          <PrimarySubmitBtn>Send message</PrimarySubmitBtn>
        </Group>
      </form>
    </Box>
  );
};
