export interface InterfaceButton {
  icon?: string;
  funcOnClick?: () => void;
  message?: string;
  sidebar?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
}

export interface InterfaceStyledButton {
  color?: string;
  bgColor?: string;
  border?: string;
}

export interface InterfaceSmartView {
  smartView?: boolean;
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
  color?: string;
  border?: string;
}

export interface InterfaceUrlImg {
  urlImg: string;
}
