import { Box } from 'lucide-react';

export default function NavLogo() {
  return (
    <a href="/" className="flex items-center space-x-2">
      <Box className="w-8 h-8 text-blue-600" />
      <span className="text-xl font-bold">Simplify 360</span>
    </a>
  );
}