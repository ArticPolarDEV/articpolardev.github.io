interface NavItemProps {
  name: string;
  href: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function NavItem({ name, href, isActive = false, onClick }: NavItemProps) {
  return (
    <li className="w-full md:w-auto">
      <a
        href={href}
        onClick={onClick}
        className={`
          inline-flex items-center justify-center w-full md:w-auto text-xs font-medium px-4 py-2 md:py-1.5 rounded-full transition-all duration-200
          ${
            isActive
              ? 'bg-purple-100 dark:bg-purple-600/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 shadow-sm dark:shadow-[0_0_12px_rgba(168,85,247,0.2)]'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
          }
        `}
      >
        {name}
      </a>
    </li>
  );
}