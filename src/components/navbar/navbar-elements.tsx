"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/libs/utils";

import { handleToContact } from "@/helpers/globalHelper";

export const NavbarLogo = () => (
  <Link
    href="/"
    className="flex items-center gap-2 text-black text-lg font-semibold"
  >
    <Image
      src="/assets/img/brand/sentra-color.svg"
      width={120}
      height={24}
      alt="Sentra Publisher"
      className="block w-8 md:w-10 lg:w-10"
      priority
    />
    Sentra Rent Car
  </Link>
);

// export const LanguageSwitcher = ({
//   isMobile = false,
//   className,
// }: LanguageSwitcherProps) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const router = useRouter();
//   const pathname = usePathname();

//   const languages: Language[] = [
//     { code: "ID", label: "Indonesia" },
//     { code: "EN", label: "English" },
//     { code: "ZH", label: "中文" },
//     { code: "JA", label: "日本語" },
//   ];

//   const LOCALE_MAP: Record<string, string> = {
//     ID: "id",
//     EN: "en",
//     ZH: "zh",
//     JA: "ja",
//   };
//   const selectedLang =
//     Object.keys(LOCALE_MAP).find((key) => LOCALE_MAP[key] === locale) ?? "ID";

//   const handleSelect = (code: string) => {
//     const nextLocale = LOCALE_MAP[code];
//     if (!nextLocale) return;

//     const segments = pathname.split("/").filter(Boolean);
//     const hasLocalePrefix = segments[0] === locale;

//     const nextPathname = hasLocalePrefix
//       ? `/${nextLocale}/${segments.slice(1).join("/")}`
//       : `/${nextLocale}${pathname}`;

//     router.push(
//       nextPathname === `/${nextLocale}/` ? `/${nextLocale}` : nextPathname
//     );
//     setIsOpen(false);
//   };

//   if (isMobile) {
//     return (
//       <div className={cn("relative w-full max-w-xs px-4", className)}>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-full flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-gray-400 transition-colors"
//           aria-haspopup="listbox"
//           aria-expanded={isOpen}
//         >
//           <FiGlobe className="w-5 h-5 text-gray-600 flex-shrink-0" />
//           <span className="text-gray-700 font-medium flex-1 text-left">
//             {selectedLang}
//           </span>
//           <FiChevronDown
//             className={cn(
//               "w-4 h-4 text-gray-600 transition-transform",
//               isOpen && "rotate-180"
//             )}
//           />
//         </button>

//         {isOpen && (
//           <div
//             className="absolute top-full left-4 right-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
//             role="listbox"
//           >
//             {languages.map((lang) => (
//               <button
//                 key={lang.code}
//                 onClick={() => handleSelect(lang.code)}
//                 role="option"
//                 aria-selected={selectedLang === lang.code}
//                 className={cn(
//                   "w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors",
//                   selectedLang === lang.code
//                     ? "bg-blue-100 text-blue-600 font-medium"
//                     : "text-gray-700"
//                 )}
//               >
//                 {lang.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className={cn("relative", className)}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2"
//       >
//         <FiGlobe className="w-4 h-4" />
//         <span>{selectedLang}</span>
//         <FiChevronDown
//           className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-50">
//           {languages.map((lang) => (
//             <button
//               key={lang.code}
//               onClick={() => handleSelect(lang.code)}
//               className={cn(
//                 "block w-full text-left px-4 py-2 hover:bg-blue-50",
//                 selectedLang === lang.code && "bg-blue-100 text-blue-600"
//               )}
//             >
//               {lang.label}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

export const NavbarButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <button
    className={cn(
      "h-11 px-5 rounded-full text-sm font-medium text-white",
      "bg-gradient-to-b from-zinc-700 to-zinc-900",
      "hover:shadow-lg active:scale-95 transition",
      className
    )}
    onClick={handleToContact}
  >
    {children}
  </button>
);
