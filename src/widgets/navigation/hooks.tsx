import { getCategoryName } from 'entities/nav-lists/lib';
import { usePathname } from 'shared/lib';

export const useCurrentCategory = () => {
  const pathname = usePathname();

  return getCategoryName(pathname);
};
