import fs from "node:fs";
import path from "node:path";
import { BASE_PATH } from "@/lib/site";

// Drop real photos into public/photos/ with the expected filename and they
// replace the placeholder automatically. No code changes needed.
export function Photo({
  name,
  alt,
  className = "",
  label,
}: {
  name: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public/photos", name));

  if (!exists) {
    return (
      <div
        className={`relative overflow-hidden bg-surface border border-accent-soft ${className}`}
        aria-hidden="true"
      >
        <FlagRibbon className="absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted text-xs font-semibold tracking-widest uppercase">
            {label ?? `foto · ${name}`}
          </span>
        </div>
      </div>
    );
  }

  // Plain <img> (images are exported unoptimized): next/image doesn't prepend
  // basePath for raw string srcs, so we prefix it here via the shared constant.
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE_PATH}/photos/${name}`}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

// The sanctuary is lined with Latin American flags — this ribbon is that,
// abstracted into thin color bands.
export function FlagRibbon({ className = "" }: { className?: string }) {
  const colors = [
    "#75aadb", // Argentina
    "#fcd116", // Colombia
    "#ce1126", // Chile / PR red
    "#007a3d", // México green
    "#0038a8", // El Salvador blue
    "#f9dd16", // Ecuador
    "#00247d", // PR blue
    "#ef3340", // Perú
    "#418fde", // Guatemala
    "#d91023", // México red
  ];
  return (
    <div className={`flex h-1.5 ${className}`} aria-hidden="true">
      {colors.map((c, i) => (
        <div key={i} className="flex-1" style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}
