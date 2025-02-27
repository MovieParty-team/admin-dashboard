import CustomLoading from "@/components/CustomLoading";
import ConnectedProvider from "@/components/providers/ConnectedProvider";
import { Suspense } from "react";

export default function ConnectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<CustomLoading />}>
      <ConnectedProvider>
        {children}
      </ConnectedProvider>
    </Suspense>
  );
}
