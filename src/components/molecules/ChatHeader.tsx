import { ShoppingCart, ChevronDown, UserCircle2 } from "lucide-react";

/**
 * ChatHeader with curved bottom using a rotated clip-path shape.
 */
export default function ChatHeader() {
  return (
    <div className="relative overflow-hidden rounded-t-xl">
      {/* Background with bottom wave */}
      <div
        className="text-white px-4 pt-4 pb-4"
        style={{
          background: "linear-gradient(to right, #2563EB, #60A5FA)",
          clipPath: "ellipse(150% 100% at 50% 0%)",
        }}
      >
        <div className="flex items-start justify-between">
          {/* Left: icon + text */}
          <div className="flex items-start gap-3">
            <UserCircle2 size={36} strokeWidth={2.5} />
            <div className="flex flex-col">
              <p className="text-sm font-semibold leading-tight">
                Chat with <span className="font-bold">Wizybot</span>
              </p>
              <p className="text-xs text-green-300 mt-0.5">
                • We reply immediately!
              </p>
            </div>
          </div>

          {/* Right: icons */}
          <div className="flex items-center gap-2 mt-1">
            <ShoppingCart size={20} />
            <ChevronDown size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
