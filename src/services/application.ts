import { ApplicationIconsType } from '@/types/application-type';
import { api } from './api';

export async function getApplicationIcons(): Promise<ApplicationIconsType[]> {
  const response = await api('/icons', { cache: 'force-cache' });

  const apps: ApplicationIconsType[] = await response.json();

  return apps;
}
