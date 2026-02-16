"use client";

import { useEffect } from "react";

export default function ZohoChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://salesiq.zoho.com.au/widget?widgetcode=04a18d3e46277dffb5ea44478eeb809eca0826601a710418c33774d06cd345ca";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
