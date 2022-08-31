import "src/lib/tailwind.css";
import "src/style/css/global.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { DefaultTemplate } from "src/components/templates/DefaultTemplate";

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          xs: 576,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          "2xl": 1536,
        },
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
      <NotificationsProvider>
        <DefaultTemplate>
          <Component {...pageProps} />
        </DefaultTemplate>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
