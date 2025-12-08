import { CircleIcon, House } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import nayaxLogo from "@/assets/images/nayax-logo.png";
import { useTranslation } from "react-i18next";

export function NayaxNavigationMenu() {
  const { t } = useTranslation();
  return (
    <nav className="flex flex-row p-4">
      <div className="content-center ">
        <a
          className="flex w-auto h-6"
          href="https://www.nayax.com"
          target="_blank"
        >
          <img src={nayaxLogo} className="logo nayax" alt="Nayax logo" />
        </a>
        <h1>{t("app.title")}</h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="border-b-2 border-primary">
              <House className="text-gray-600" />
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-400">
              <CircleIcon />
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
