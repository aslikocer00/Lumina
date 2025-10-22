'use client';

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const isInitial = useRef(true);

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    setVisible(false);
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 40);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
