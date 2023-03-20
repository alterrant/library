import { usePathname } from '../../shared/lib';
import { getCategoryName } from '../../entities/nav-lists/lib';

export const useCurrentCategory = () => {
  const pathname = usePathname();

  return getCategoryName(pathname);
};
