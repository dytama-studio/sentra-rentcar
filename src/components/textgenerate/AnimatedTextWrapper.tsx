/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";

export default function AnimatedTextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    const walk = (node: Node) => {
      // ✅ Proses hanya TEXT NODE
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
        const parts = node.textContent.match(/(\s+|\S+)/g);
        if (!parts) return;

        const fragment = document.createDocumentFragment();
        const parent = node.parentElement;

        parts.forEach((part) => {
          if (part.trim() === "") {
            fragment.appendChild(document.createTextNode(part));
          } else {
            const span = document.createElement("span");
            span.textContent = part;
            span.dataset.word = "true";

            // 🔑 Styling awal animasi
            span.style.opacity = "0";
            span.style.filter = "blur(10px)";
            span.style.display = "inline-block";

            // 🔥 PENTING: jaga warna highlight
            if (parent) {
              span.style.color = "inherit";
            }

            fragment.appendChild(span);
          }
        });

        node.parentNode?.replaceChild(fragment, node);
        return;
      }

      node.childNodes.forEach(walk);
    };

    walk(scope.current);

    animate(
      "[data-word]",
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        delay: stagger(0.12),
        duration: 0.45,
        ease: "easeOut",
      }
    );
  }, []);

  return <div ref={scope}>{children}</div>;
}
