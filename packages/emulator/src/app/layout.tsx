import type { PropsWithChildren, ReactNode } from "react";

export default function Layout({ children }: PropsWithChildren): ReactNode {
  return (
    <html lang="ja">
      <head />
      <body>{children}</body>
    </html>
  );
}
