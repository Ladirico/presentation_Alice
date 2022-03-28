export interface InterfaceButton {
  icon?: string;
  funcOnClick: () => void;
  message?: string;
}

export interface InterfaceBasicButton {
  types: boolean;
  bgColor?: string;
}

export interface InterfaceNavbar {
  smartphone?: boolean;
}

export interface InterfaceSmartphoneView {
  smartView: boolean;
  openSidebar?: boolean;
  themePink: InterfaceTheme;
  themeColored: InterfaceTheme;
  themeChoose: boolean;
  firstName: string;
  lastName: string;
  email: string;
}
export interface InterfaceTheme {
  c1: string;
  c2: string;
  c3: string;
  c4: string;
}
export interface InterfaceTipo {
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
