import "src/lib/tailwind.css";
import "src/style/css/global.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { DefaultTemplate } from "src/components/templates/DefaultTemplate";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        components: {
          Container: {
            defaultProps: {
              sizes: {
                md: 992,
              },
            },
          },
        },
      }}
    >
      <DefaultTemplate>
        <Component {...pageProps} />
      </DefaultTemplate>
    </MantineProvider>
  );
}

export default MyApp;
