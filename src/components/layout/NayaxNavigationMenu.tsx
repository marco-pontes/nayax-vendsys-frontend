import { CircleIcon, House } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import nayaxLogo from "@/assets/images/nayax-logo.png";

export function NayaxNavigationMenu() {
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
