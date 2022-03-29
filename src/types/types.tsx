export interface InterfaceButton {
  icon?: string;
  funcOnClick?: () => void;
  message?: string;
  sidebar?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
}

export interface InterfaceBasicButton {
  link?: boolean;
  bgColor?: string;
  sidebar?: boolean;
  smartiew?: boolean;
}

export interface InterfaceNavbar {
  smartphone?: boolean;
}

export interface InterfaceSmartphoneView {
  smartView: boolean;
  openSidebar?: boolean;
  user: InterfaceUser;
  theme: InterfaceThemeContext;
}

export interface InterfaceThemeContext {
  themePink: InterfaceTheme;
  themeColored: InterfaceTheme;
  themeChoose: boolean;
}

export interface InterfaceUser {
  userName: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  isLogged: boolean;
}
export interface InterfaceTheme {
  c1: string;
  c2: string;
  c3: string;
  c4: string;
}
export interface InterfaceContext {
  context: InterfaceSmartphoneView;
  setContext: React.Dispatch<React.SetStateAction<InterfaceSmartphoneView>>;
}

export interface InterfaceSidebarWrapper {
  showSidebar?: boolean;
  bgColor?: string;
  smartView?: boolean;
}

export interface InterfacePageRoute {
  open?: boolean;
}
export interface InterfaceButtonProp {
  src: string;
  bgColor?: string;
}
