import type { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
    </div>
  );
}
