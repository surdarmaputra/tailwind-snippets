import { useRouter } from 'next/router';

export default function useCurrentPath() {
  const router = useRouter();
  const currentPath = router.asPath.split('?')[0];
  return currentPath;
}
