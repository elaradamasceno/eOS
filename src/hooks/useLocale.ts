import { usePathname } from 'next/navigation';

function useLocale() {
  const pathname = usePathname();

  const onGetLocale = (): LocaleType => {
    const locale: LocaleType = pathname?.split('/')[1] as LocaleType;

    return locale;
  };

  return {
    onGetLocale,
  };
}

export default useLocale;
