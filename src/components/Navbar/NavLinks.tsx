interface NavLinksProps {
  mobile?: boolean;
}

export default function NavLinks({ mobile = false }: NavLinksProps) {
  const links = [
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
  ];

  const baseStyles = mobile
    ? 'block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-md'
    : 'px-3 py-2 text-sm font-medium hover:text-blue-600';

  return (
    <div className={mobile ? 'space-y-1' : 'flex space-x-4'}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={baseStyles}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}