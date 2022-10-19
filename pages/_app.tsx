import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import * as fbq from "../utils/fbPixel";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { IntlProvider } from "react-intl";
import en from "../content/en.json";
import es from "../content/es.json";
function MyApp({ Component, pageProps }: AppProps) {
  const { events, locale } = useRouter();

  const messages = useMemo(() => {
    const spanish = {
      ...es,
    };
    const english = {
      ...en,
    };
    switch (locale) {
      case "en":
        return english;
      case "es":
        return spanish;
      default:
        return spanish;
    }
  }, [locale]);

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();
    const handleRouteChange = () => {
      fbq.pageview();
    };

    events.on("routeChangeComplete", handleRouteChange);
    return () => {
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, [events]);
  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${fbq.FB_PIXEL_ID});
fbq('track', 'PageView');
`,
        }}
      />
      <IntlProvider
        locale={locale ? locale : "es"}
        defaultLocale="es"
        messages={messages}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}

export default MyApp;
