import { ThemeOptions } from "@mui/material";
import { TheAnyConst } from "./General.model";

type FlexBoxType = {
  display: string;
  flexDirection: string;
  alignItems?: string;
  justifyContent?: string;
};

type FontStyleType = {
  fontSize: string;
  fontWeight: string;
  lineHeight?: string;
  letterSpacing?: string;
  color?: string;
};

export type BreakpointsKeyType = "up" | "down" | "between" | "only";

export type CustomImageType = {
  priority: boolean;
  height: number;
  width: number;
  style: {
    objectFit: string;
    width: string;
    height: string;
    objectPosition?: string;
  };
};
export interface CustomThemeOptions {
  cxColors: {
    primary: string;
    white: string;
    black: string;
    red: string;
    gray: string;
    blackLight: string;
    blackText: string;
    grayPale: string;
    grayLight: string;
    info: string;
    warning: string;
    error: string;
    success: string;
    disabled: string;
    passive: string;
  };
  cxGradient: {
    glass: string;
    rewards: string;
    platinum: string;
    diamond: string;
    glassMorph: string;
    ironLean: string;
    primaryGold: string;
    primaryGoldLean: string;
    primaryRedLean: string;
  };
  cxBackShadow: {
    darkShadow: string;
    lightShadow: string;
    lightDarkRim: string;
    textShadow: string;
  };
  cxButtons: {
    primary: TheAnyConst;
    secondary: TheAnyConst;
  };
  cxTypography: {
    caption: FontStyleType;
    header: FontStyleType;
    subHeader: FontStyleType;
    paragraph: FontStyleType;
  };
  cxImage: {
    cover: CustomImageType;
    fill: CustomImageType;
  };
  cxFlexBox: {
    row: FlexBoxType;
    col: FlexBoxType;
    rowCenter: FlexBoxType;
    colCenter: FlexBoxType;
    rowCenterCenter: FlexBoxType;
    colCenterCenter: FlexBoxType;
    rowCenterBetween: FlexBoxType;
    colCenterBetween: FlexBoxType;
  };
}

export interface MergedThemeOptions extends ThemeOptions, CustomThemeOptions {}
