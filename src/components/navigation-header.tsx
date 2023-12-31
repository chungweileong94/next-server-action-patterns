'use client';

import React from 'react';
import {usePathname, useSelectedLayoutSegment} from 'next/navigation';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu';
import {cn} from '~/lib/utils';

const links: {title: string; href: string; description: string}[] = [
  {
    title: 'Basic',
    href: '/patterns/basic',
    description: 'Basic server action usage',
  },
  {
    title: 'Progressive Enhancement',
    href: '/patterns/progressive-enhancement',
    description: 'Server action with progressive enhancement',
  },
  {
    title: 'Form',
    href: '/patterns/form',
    description: 'Server action with form',
  },
  {
    title: 'Redirect with toast',
    href: '/patterns/redirect-with-toast',
    description: 'Server action that perform redirect with toast',
  },
];

const LinkItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({className, title, children, ...props}, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
LinkItem.displayName = 'LinkItem';

export function NavigationHeader() {
  const pathname = usePathname();
  const selectedTitle = links.find((link) => link.href === pathname)?.title;

  return (
    <div className="px-4 py-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Patterns</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {links.map((component) => (
                  <LinkItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </LinkItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex flex-row items-center gap-2 px-4 font-bold">
            {selectedTitle}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
