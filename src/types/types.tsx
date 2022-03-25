export interface InterfaceButton {
  icon?: string;
  funcOnClick: () => void;
  message?: string;
}

export interface InterfaceBasicButton {
  types: boolean;
  bgColor: string;
}

export interface InterfaceNavbar {
  smartphone?: boolean;
}

export interface InterfaceSmartphoneView {
  smartView: boolean;
  openSidebar?: boolean;
}
export interface InterfaceTipo {
  context: InterfaceSmartphoneView;
  setContext: React.Dispatch<React.SetStateAction<InterfaceSmartphoneView>>;
}

export interface InterfaceSidebarWrapper {
  showSidebar?: boolean;
  smartView?: boolean;
}

export interface InterfacePageRoute {
  open?: boolean;
}
export interface InterfaceButtonProp {
  src: string;
  bgColor: string;
}
