export interface ProfileState {
  user?: User;
  error: boolean;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  avatarSmall: string;
  avatarBig: string;
  info: InfoRecord[];
  qrCode: string;
  social: SocialRecord[];
}

export interface InfoRecord {
  title: string;
  value: string;
}

export interface SocialRecord {
  name: string;
  icon: string;
  url: string;
}
