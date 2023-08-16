import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Providers } from "@/service/redux/Provider";
import { store } from "@/service/redux/store";
import { setupAxios } from "@/utils/functions";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import "@/style/index.scss";

export const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Bondrians = localFont({
  src: "../assets/fonts/Bondrians.ttf",
  weight: "100",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setupAxios(store);
  }, []);

  return (
    <Providers>
      <div>
        <Toaster
          toastOptions={{
            style: {
              background: "#000000",
              color: "#fff",
            },
          }}
        />
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </div>
    </Providers>
  );
}
