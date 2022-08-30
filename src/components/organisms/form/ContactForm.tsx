import React, { FC, FormEventHandler, useState } from "react";

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
  type Status = "" | "送信成功" | "送信失敗";
  const [status, setStatus] = useState<Status>("");

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

  const handleSubmit = async (values: typeof form.values) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      form.reset();
      setStatus("送信成功");
    } catch (error) {
      console.error("Fetch error: ", error);
      alert(JSON.stringify(error));
      setStatus("送信失敗");
    }
  };

  return (
    <Box>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
            {...form.getInputProps("msg")}
          />
        </Box>

        <Group position="center" mt="md">
          <PrimarySubmitBtn>Send message</PrimarySubmitBtn>
        </Group>
        {status === "送信成功" && (
          <p className="mt-3 text-center text-teal-500">送信に成功しました！</p>
        )}
        {status === "送信失敗" && (
          <p className="mt-3 text-center text-red-500">
            送信に失敗しました。。
          </p>
        )}
      </form>
    </Box>
  );
};
