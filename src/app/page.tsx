"use client";
import { useWindowSize } from "@/utils/hooks";
import DesktopVersion from "./desktop-version";
import MobileVersion from "./mobile-version";
import { AppProvider } from "@/context/app-context";
import Modal from "@/components/ui/modal";

export default function Home() {
  const { width, isLoading } = useWindowSize();

  if (isLoading) return null;
  return (
    <AppProvider>
      {width > 1080 ? <DesktopVersion /> : <MobileVersion />}
      <Modal />
    </AppProvider>
  );
}
