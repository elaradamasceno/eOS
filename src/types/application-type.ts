export interface IconsType {
  width: number;
  height: number;
  path: string;
}

export interface ApplicationIconsType extends IconsType {
  id: ApplicationsType;
  name: string;
}

export type ApplicationsType =
  | 'eos'
  | 'images'
  | 'reminder'
  | 'contact'
  | 'weather'
  | 'brunoapi'
  | 'clock'
  | 'notion'
  | 'spotify'
  | 'arc'
  | 'vscode'
  | 'none';

export interface FooterType extends IconsType {
  id: string;
}
