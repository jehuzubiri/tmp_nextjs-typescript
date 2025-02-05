import { CustomImageType, CustomThemeOptions } from "@/models/Theme.model";

const handleImgType = (objectFit: "cover" | "fill"): CustomImageType => ({
  priority: true,
  height: 100,
  width: 100,
  style: {
    objectFit,
    width: "100%",
    height: "100%",
  },
});

export const customTheme: CustomThemeOptions = {
  //@DESC: color: <value>
  cxColors: {
    white: "white",
    red: "#860303",
    black: "black",
    gray: "#7D7D7D",
    primary: "#FAC50F",
    blackLight: "#0D0D0D",
    grayLight: "#303030",
    grayPale: "#80808033",
    blackText: "#D9D9D9",
    info: "#14B2E2",
    warning: "#FCA522",
    error: "#E54D42",
    success: "#03AD00",
    disabled: "#5F5F5F",
    passive: "#7D7D7D",
  },
  //@DESC: <Image {...theme.cxImage.cover}
  cxImage: {
    cover: handleImgType("cover"),
    fill: handleImgType("fill"),
  },
  //@DESC: type-class-name {...theme.cxTypography.<key>}
  cxTypography: {
    caption: {
      color: "white",
      fontSize: "2.25em",
      fontWeight: "700",
      lineHeight: "1.6em",
      letterSpacing: "0.01em",
    },
    header: {
      color: "white",
      fontSize: "1.75em",
      fontWeight: "700",
      lineHeight: "1.8125em",
      letterSpacing: "0.01em",
    },
    subHeader: {
      color: "white",
      fontSize: "1.125em",
      fontWeight: "700",
      lineHeight: "1.36125rem",
      letterSpacing: "0.02em",
    },
    paragraph: {
      color: "white",
      fontSize: "0.875em",
      fontWeight: "400",
      lineHeight: "1.25em",
      letterSpacing: "0.02em",
    },
  },
  //@DESC: background: <value>
  cxGradient: {
    glass: "linear-gradient(180deg, #44444480 0%, #0000001A 100%)",
    rewards:
      "linear-gradient(180deg, #F3BAFC 0%, #FAF1FF 23.96%, #D2FFE4 31.77%, #FFFFFF 42.19%, #FFFFFF 46.35%, #FFFFFF 49.48%, #FFF3CA 63.96%, #FFFAFA 83.2%, #D7BCDB 100%)",
    platinum:
      "linear-gradient(103.91deg, #7AAFD4 7.84%, #9BC9EA 24.44%, #F6FBFF 38.88%, #FFFFFF 60.05%, #CDE9FD 74.49%, #7BC3F7 89.49%, #7AAFD5 100%)",
    diamond:
      "linear-gradient(95.98deg, #AD00FF -5.87%, #ECC5FF 18.93%, #F6FBFF 37.31%, #FFFFFF 56.26%, #FFEECC 78.93%, #CE66FF 99.11%, #AD00FF 115.22%)",
    glassMorph: "0px 4px 4px 0px #00000080",
    ironLean:
      "linear-gradient(104.29deg, #2D2D2D 0.66%, #525252 23.76%, #838383 46.66%, #888888 66.02%, #5F5F5F 83.35%, #2D2D2D 100.33%)",
    primaryGold:
      "linear-gradient(180deg, #E7B846 0%, #FFF2A4 29.17%, #E7B846 70.83%, #E0BC38 85.94%, #D49922 100%)",
    primaryGoldLean:
      "linear-gradient(104.04deg, #E7B846 9.67%, #FFF2A4 28.36%, #E7B846 63.41%, #E0BC38 77.31%, #D59922 91.5%)",
    primaryRedLean:
      "linear-gradient(303.56deg, #8B0000 -5.42%, #8B0000 25.33%, #C1A954 105.98%)",
  },
  //@DESC: backShadow: <value>
  cxBackShadow: {
    darkShadow:
      "0 1px 1px hsl(0deg 0% 0% / 0.075),0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075)",
    lightShadow:
      "linear-gradient(104.04deg, #E7B846 9.67%, #FFF2A4 28.36%, #E7B846 63.41%, #E0BC38 77.31%, #D59922 91.5%)",
    lightDarkRim:
      "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.1),0 0 0 1px hsla(230, 13%, 9%, 0.075),0 0.3px 0.4px hsla(230, 13%, 9%, 0.02),0 0.9px 1.5px hsla(230, 13%, 9%, 0.045),0 3.5px 6px hsla(230, 13%, 9%, 0.09)",
    textShadow: "-2px -1px 3px #FAC50F85",
  },
  //@DESC: type-class-name {...theme.cxFlexBox.<key>}
  cxFlexBox: {
    row: {
      display: "flex",
      flexDirection: "row",
    },
    col: {
      display: "flex",
      flexDirection: "column",
    },
    rowCenter: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    colCenter: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    rowCenterCenter: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    colCenterCenter: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    rowCenterBetween: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    colCenterBetween: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  cxButtons: {
    primary: {
      cursor: "pointer",
      border: "unset",
      borderRadius: "0.25rem",
      fontWeight: "600",
      padding: "0.75rem 1.5rem",
      background:
        "linear-gradient(180deg, #E7B846 9.67%, #FFF2A4 28.36%, #E7B846 63.41%, #E0BC38 77.31%, #D49922 91.5%)",
      ["span"]: {
        color: "black",
        pointerEvents: "none",
      },
      transition: "all 0.3s",
      backgroundColor: "#FAC50F",
    },
    secondary: {
      cursor: "pointer",
      border: `1px solid white`,
      borderRadius: "0.25rem",
      fontWeight: "600",
      padding: "0.75rem 1.5rem",
      background: "unset",
      "&:hover": {
        border: `1px solid #FAC50F`,
        ["span"]: {
          color: "#FAC50F !important",
        },
      },
      ["& span"]: {
        transition: "all 0.3s ease",
      },
    },
  },
};
