"use client";
import { useWindowSize } from "@/utils/hooks";
import DesktopVersion from "./desktop-version";
import MobileVersion from "./mobile-version";

export default function Home() {
  const { width, isLoading } = useWindowSize();

  if (isLoading) return null;
  return <>{width > 1080 ? <DesktopVersion /> : <MobileVersion />}</>;
}
