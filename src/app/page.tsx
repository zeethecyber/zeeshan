"use client";
import { useWindowSize } from "@/utils/hooks";
import DesktopVersion from "./desktop-version";
import MobileVersion from "./mobile-version";

export default function Home() {
  const { width } = useWindowSize();

  return <>{width > 1080 ? <DesktopVersion /> : <MobileVersion />}</>;
}
