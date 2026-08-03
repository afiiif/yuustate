import Link from "next/link";

import { cn } from "@/utils/string";

const comparisonResult = `
✓ 103 modules transformed.
  /.vite/manifest.json                    3.20 kB │ gzip:  0.60 kB
  /assets/root-BoO3ATQ1.css              15.37 kB │ gzip:  3.75 kB
  /assets/components-DrxDq1-G.js          1.01 kB │ gzip:  0.59 kB
  /assets/store-yuustate-CWZKPY9K.js      1.12 kB │ gzip:  0.51 kB 🎉
  /assets/store-zustand-BJYVMYXp.js       1.68 kB │ gzip:  0.79 kB
  /assets/utils-CFBxdO4k.js               2.07 kB │ gzip:  0.64 kB
  /assets/root-B41NV51g.js                2.46 kB │ gzip:  1.01 kB
  /assets/home-DTiNyCnA.js                2.70 kB │ gzip:  1.18 kB
  /assets/async-yuustate-D5PCOWrn.js      7.22 kB │ gzip:  2.00 kB 🎉
  /assets/react-l3jiHRhi.js              11.93 kB │ gzip:  4.07 kB
  /assets/async-tanstack-DATZCeg8.js     44.06 kB │ gzip: 12.64 kB
  /assets/chunk-UVKPFVEO-BCVTWmlK.js    126.29 kB │ gzip: 42.59 kB
  /assets/entry.client-CMKBzKJ-.js      190.57 kB │ gzip: 60.05 kB
✓ built in 715ms
`
  .split("\n")
  .filter(Boolean);

export default function Comparison() {
  return (
    <>
      <div
        className={cn(
          "mx-auto -mt-8 max-w-xl sm:max-w-[532px]",
          "font-mono text-[10px] leading-[13px] sm:text-[12px] sm:leading-[16px]",
          "overflow-x-auto rounded-md border p-3",
          "relative bg-blue-50 dark:bg-zinc-900",
        )}
      >
        <div className="min-w-[425px] space-y-1 whitespace-pre">
          {comparisonResult.map((line, i) => {
            let className: string | undefined = undefined;
            if (line.includes("yuustate")) {
              className = "bg-green-400/30 text-green-900 dark:bg-green-500/10 dark:text-green-300";
            } else if (line.includes("zustand") || line.includes("tanstack")) {
              className =
                "bg-orange-400/20 text-orange-900 dark:bg-orange-500/15 dark:text-orange-400";
            }
            return (
              <div key={i} className={className}>
                {line}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
        <Link
          className="btn w-full text-center sm:w-auto"
          href="https://afiiif.github.io/yuustate/"
          target="_blank"
        >
          Live Demo
        </Link>
        <Link className="btn btn-secondary w-full text-center sm:w-auto" href="/docs/comparison">
          Deep Dive Comparison
        </Link>
      </div>
    </>
  );
}
