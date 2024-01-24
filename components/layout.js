import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import NavbarAlt from "@/components/navbaralt";
import { cx } from "@/utils/all";
// import defaultOG from "../public/img/og-default.jpg";

import Footer from "@/components/footer";
// import PopupWidget from "../components/popupWidget";

export default function Layout(props) {
  const { children } = props;
  const ogimage = urlForImage(props?.openGraphImage) ?? "";
  return (
    <>
      <Head>
      <link rel="icon" href="/img/logo18x10.png" sizes="18x10" type="image/png" />
      <link rel="icon" href="/img/logo32x18.png" sizes="32x18" type="image/png" />
      <link rel="icon" href="/img/logo192x110.png" sizes="192x110" type="image/png" />
      <link rel="icon" href="/img/logo512x293.png" si type="image/png" />
      <link rel="icon" href="/img/logo.png" type="image/png" />
      <link rel="icon" href="/img/logo.png" type="image/png" />


        <link rel="preconnect" href="/img/logo.png" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: props.title
            }
          ],
          site_name: props.title
        }}
        twitter={{
          handle: "@surjithctly",
          site: "@surjithctly",
          cardType: "summary_large_image"
        }}
      />

      <div
        className={cx(
          props?.fontStyle,
          "antialiased text-gray-800 dark:bg-black dark:text-gray-400 bg-white "
        )}>
        {props.alternate ? (
          <NavbarAlt {...props} />
        ) : (
          <Navbar {...props} />
        )}

        <div>{children}</div>

        <Footer {...props} />
      </div>
    </>
  );
}
