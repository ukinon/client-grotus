"use client";

import React, { useEffect, useState } from "react";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { CallBackProps } from "react-joyride";

const Joyride = dynamic(() => import("react-joyride"), { ssr: false });

const queryClient = new QueryClient();

const steps = [
  {
    target: ".search",
    content:
      "Cari produk yang kamu inginkan disini. Kamu bisa menggunakan nama produk atau keluhan yang kamu alami",
    disableBeacon: true,
  },
  {
    target: ".scan",
    content:
      "Kamu bisa menggunakan fitur scan untuk mengetahui kekurangan nutrisi pada seladamu.",
    disableBeacon: true,
  },
];

const useJoyride = () => {
  const [runJoyride, setRunJoyride] = useState(false);

  useEffect(() => {
    const tourCompleted = localStorage.getItem("tourCompleted");
    if (!tourCompleted) {
      setRunJoyride(true);
    }
  }, []);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === "finished" || status === "skipped") {
      setRunJoyride(false);
      localStorage.setItem("tourCompleted", "true");
    }
  };

  return { runJoyride, handleJoyrideCallback };
};

const isBrowser = typeof window !== "undefined";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: isBrowser ? window.location.hostname : "",
  cookieSecure: isBrowser ? window.location.protocol === "https:" : false,
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { runJoyride, handleJoyrideCallback } = useJoyride();

  return (
    <AuthProvider store={store}>
      {isBrowser && (
        <Joyride
          steps={steps}
          run={runJoyride}
          continuous={true}
          showProgress={true}
          showSkipButton={true}
          disableOverlayClose={true}
          disableCloseOnEsc={true}
          spotlightClicks={true}
          callback={handleJoyrideCallback}
          styles={{
            options: {
              arrowColor: "#fff",
              backgroundColor: "#fff",
              overlayColor: "rgba(0, 0, 0, 0.5)",
              primaryColor: "#4caf50",
              textColor: "#333",
              zIndex: 1000,
            },
            overlay: {
              position: "fixed",
            },
          }}
        />
      )}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthProvider>
  );
};

export default Providers;
