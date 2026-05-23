"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { ImageIcon } from "lucide-react";

type ImageFrameProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imageClassName?: string;
  imageStyle?: CSSProperties;
};

export function ImageFrame({ src, alt, label, className = "", imageClassName = "", imageStyle }: ImageFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-slate-950/60 ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${imageClassName}`}
          style={imageStyle}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full min-h-52 flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,rgba(225,29,72,0.14),rgba(251,113,133,0.1))] p-6 text-center">
          <ImageIcon className="h-10 w-10 text-redSoft" aria-hidden="true" />
          <p className="text-sm font-semibold text-white">{label ?? alt}</p>
          <p className="max-w-xs text-xs leading-5 text-slate-400">REPLACE_THIS_WITH_ACTUAL_IMAGE</p>
        </div>
      )}
    </div>
  );
}
