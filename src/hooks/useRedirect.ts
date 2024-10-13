import { useRouter } from '@/navigation';

interface OnRedirectProps {
  path: string;
}

function useRedirect() {
  const router = useRouter();

  const onRedirect = async ({ path }: OnRedirectProps) => {
    router.push(`/${path}`);
  };

  return {
    onRedirect,
  };
}

export default useRedirect;
