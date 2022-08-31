import React, { FC } from "react";

import { TextInput, Group, Box, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { PrimarySubmitBtn } from "src/components/atoms/PrimaryBtn";
import { showNotification, updateNotification } from "@mantine/notifications";
import { Loader } from "@mantine/core";

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

  const handleSubmit = async (values: typeof form.values) => {
    showNotification({
      id: "submit",
      title: "送信処理を行なっております",
      message: "少々お待ちください",
      autoClose: false,
      loading: true,
    });

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((data) => {
        if (!data.ok) {
          throw new Error("送信に失敗しました");
        }
      });

      form.reset();
      updateNotification({
        id: "submit",
        color: "teal",
        title: "送信成功",
        message: "正常にメールの送信が成功しました。",
        autoClose: 2000,
      });
    } catch (error) {
      updateNotification({
        id: "submit",
        color: "red",
        title: "送信に失敗しました",
        message: "お手数ですが、ページを更新した後、再度送信してください。",
        autoClose: 2000,
      });
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
      </form>
    </Box>
  );
};
