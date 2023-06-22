import "@/styles/globals.css";
import localFont from '@next/font/local';
import { Layout } from "@/components";
import { StateContext } from "@/context/ContextState";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
