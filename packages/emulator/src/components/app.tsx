"use client";

import { type ReactNode, useEffect } from "react";

export default function App(): ReactNode {
  useEffect(() => {
    const canvas = document.createElement("canvas");

    canvas.width = 600;
    canvas.height = 450;

    document.body.append(canvas);

    return () => {
      canvas.remove();
    };
  }, []);

  return <></>;
}
