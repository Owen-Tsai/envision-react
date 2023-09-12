import { theme } from 'antd'
import { createPortal } from 'react-dom'
import { useSelector } from '@/hooks/use-store'

const { getDesignToken } = theme

const lightModeTokens = getDesignToken({
  algorithm: theme.defaultAlgorithm,
})

const darkModeTokens = getDesignToken({
  algorithm: theme.darkAlgorithm,
})

export default function CssVariables() {
  const mode = useSelector((state) => state.theme.value)
  const token = mode === 'dark' ? darkModeTokens : lightModeTokens

  const css = `:root{
    --borderRadiusLG: ${token.borderRadiusLG};
    --borderRadiusOuter: ${token.borderRadiusOuter};
    --borderRadiusSM: ${token.borderRadiusSM};
    --borderRadiusXS: ${token.borderRadiusXS};
    --colorBgContainer: ${token.colorBgContainer};
    --colorBgElevated: ${token.colorBgElevated};
    --colorBgLayout: ${token.colorBgLayout};
    --colorBgMask: ${token.colorBgMask};
    --colorBgSpotlight: ${token.colorBgSpotlight};
    --colorBorder: ${token.colorBorder};
    --colorBorderSecondary: ${token.colorBorderSecondary};
    --colorErrorActive: ${token.colorErrorActive};
    --colorErrorBg: ${token.colorErrorBg};
    --colorErrorBgHover: ${token.colorErrorBgHover};
    --colorErrorBorder: ${token.colorErrorBorder};
    --colorErrorBorderHover: ${token.colorErrorBorderHover};
    --colorErrorHover: ${token.colorErrorHover};
    --colorErrorText: ${token.colorErrorText};
    --colorErrorTextActive: ${token.colorErrorTextActive};
    --colorErrorTextHover: ${token.colorErrorTextHover};
    --colorFill: ${token.colorFill};
    --colorFillQuaternary: ${token.colorFillQuaternary};
    --colorFillSecondary: ${token.colorFillSecondary};
    --colorFillTertiary: ${token.colorFillTertiary};
    --colorInfoActive: ${token.colorInfoActive};
    --colorInfoBg: ${token.colorInfoBg};
    --colorInfoBgHover: ${token.colorInfoBgHover};
    --colorInfoBorder: ${token.colorInfoBorder};
    --colorInfoBorderHover: ${token.colorInfoBorderHover};
    --colorInfoHover: ${token.colorInfoHover};
    --colorInfoText: ${token.colorInfoText};
    --colorInfoTextActive: ${token.colorInfoTextActive};
    --colorInfoTextHover: ${token.colorInfoTextHover};
    --colorLinkActive: ${token.colorLinkActive};
    --colorLinkHover: ${token.colorLinkHover};
    --colorPrimaryActive: ${token.colorPrimaryActive};
    --colorPrimaryBg: ${token.colorPrimaryBg};
    --colorPrimaryBgHover: ${token.colorPrimaryBgHover};
    --colorPrimaryBorder: ${token.colorPrimaryBorder};
    --colorPrimaryBorderHover: ${token.colorPrimaryBorderHover};
    --colorPrimaryHover: ${token.colorPrimaryHover};
    --colorPrimaryText: ${token.colorPrimaryText};
    --colorPrimaryTextActive: ${token.colorPrimaryTextActive};
    --colorPrimaryTextHover: ${token.colorPrimaryTextHover};
    --colorSuccessActive: ${token.colorSuccessActive};
    --colorSuccessBg: ${token.colorSuccessBg};
    --colorSuccessBgHover: ${token.colorSuccessBgHover};
    --colorSuccessBorder: ${token.colorSuccessBorder};
    --colorSuccessBorderHover: ${token.colorSuccessBorderHover};
    --colorSuccessHover: ${token.colorSuccessHover};
    --colorSuccessText: ${token.colorSuccessText};
    --colorSuccessTextActive: ${token.colorSuccessTextActive};
    --colorSuccessTextHover: ${token.colorSuccessTextHover};
    --colorText: ${token.colorText};
    --colorTextQuaternary: ${token.colorTextQuaternary};
    --colorTextSecondary: ${token.colorTextSecondary};
    --colorTextTertiary: ${token.colorTextTertiary};
    --colorWarningActive: ${token.colorWarningActive};
    --colorWarningBg: ${token.colorWarningBg};
    --colorWarningBgHover: ${token.colorWarningBgHover};
    --colorWarningBorder: ${token.colorWarningBorder};
    --colorWarningBorderHover: ${token.colorWarningBorderHover};
    --colorWarningHover: ${token.colorWarningHover};
    --colorWarningText: ${token.colorWarningText};
    --colorWarningTextActive: ${token.colorWarningTextActive};
    --colorWarningTextHover: ${token.colorWarningTextHover};
    --colorWhite: ${token.colorWhite};
    --controlHeightLG: ${token.controlHeightLG};
    --controlHeightSM: ${token.controlHeightSM};
    --controlHeightXS: ${token.controlHeightXS};
    --fontSizeHeading1: ${token.fontSizeHeading1}px;
    --fontSizeHeading2: ${token.fontSizeHeading2}px;
    --fontSizeHeading3: ${token.fontSizeHeading3}px;
    --fontSizeHeading4: ${token.fontSizeHeading4}px;
    --fontSizeHeading5: ${token.fontSizeHeading5}px;
    --fontSizeLG: ${token.fontSizeLG}px;
    --fontSizeSM: ${token.fontSizeSM}px;
    --fontSizeXL: ${token.fontSizeXL}px;
    --fontSize: ${token.fontSize}px;
    --lineHeight: ${token.lineHeight};
    --lineHeightHeading1: ${token.lineHeightHeading1};
    --lineHeightHeading2: ${token.lineHeightHeading2};
    --lineHeightHeading3: ${token.lineHeightHeading3};
    --lineHeightHeading4: ${token.lineHeightHeading4};
    --lineHeightHeading5: ${token.lineHeightHeading5};
    --lineHeightLG: ${token.lineHeightLG};
    --lineHeightSM: ${token.lineHeightSM};
    --lineWidthBold: ${token.lineWidthBold};
    --motionDurationFast: ${token.motionDurationFast};
    --motionDurationMid: ${token.motionDurationMid};
    --motionDurationSlow: ${token.motionDurationSlow};
}`

  console.log(css)

  return createPortal(<style>{css}</style>, document.head, 'cssVar')
}
