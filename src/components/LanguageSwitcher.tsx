import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale } from "@/i18n.config";
import { useDictionary } from "@/lib/dictionary-provider";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const LanguageSwitcherDropdown = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dict = useDictionary();

  const currentLang = pathname.split("/")[1] as Locale;

  const changeLanguage = (newLang: Locale) => {
    const segments = pathname.split("/");
    segments[1] = newLang;
    router.push(segments.join("/"));
  };

  const languages = [
    { code: "pt-BR" as Locale, label: dict.language.pt, flag: "🇧🇷" },
    { code: "en" as Locale, label: dict.language.en, flag: "🇺🇸" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span>
            {currentLanguage?.flag} {currentLanguage?.label}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            disabled={currentLang === lang.code}
            className="cursor-pointer"
          >
            <span className="flex items-center gap-2">
              {lang.flag} {lang.label}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
