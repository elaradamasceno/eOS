import { Locale } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface GetDayAbbreviationProps {
  day: string;
  locale: Locale;
}

export const getDayAbbreviation = ({
  day,
  locale,
}: GetDayAbbreviationProps) => {
  const dayAbbreviations: { [key: string]: string } =
    locale === ptBR
      ? {
          domingo: 'Dom.',
          segunda: 'Seg.',
          terça: 'Ter.',
          quarta: 'Qua.',
          quinta: 'Qui.',
          sexta: 'Sex.',
          sábado: 'Sáb.',
        }
      : {
          sunday: 'Sun.',
          monday: 'Mon.',
          tuesday: 'Tue.',
          wednesday: 'Wed.',
          thursday: 'Thu.',
          friday: 'Fri.',
          saturday: 'Sat.',
        };
  return dayAbbreviations[day] || day;
};
