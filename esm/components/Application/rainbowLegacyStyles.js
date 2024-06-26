import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

var _templateObject;

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { isServer } from '../../libs/utils';
var fontsCDN = 'https://fonts.react-rainbow.io';
var LatoBlackEot = ''.concat(fontsCDN, '/Lato-Black/Lato-Black.eot');
var LatoBlackSvg = ''.concat(fontsCDN, '/Lato-Black/Lato-Black.svg');
var LatoBlackTtf = ''.concat(fontsCDN, '/Lato-Black/Lato-Black.ttf');
var LatoBlackWoff = ''.concat(fontsCDN, '/Lato-Black/Lato-Black.woff');
var LatoBlackWoff2 = ''.concat(fontsCDN, '/Lato-Black/Lato-Black.woff2');
var LatoBlackItalicEot = ''.concat(fontsCDN, '/Lato-BlackItalic/Lato-BlackItalic.eot');
var LatoBlackItalicSvg = ''.concat(fontsCDN, '/Lato-BlackItalic/Lato-BlackItalic.svg');
var LatoBlackItalicTtf = ''.concat(fontsCDN, '/Lato-BlackItalic/Lato-BlackItalic.ttf');
var LatoBlackItalicWoff = ''.concat(fontsCDN, '/Lato-BlackItalic/Lato-BlackItalic.woff');
var LatoBlackItalicWoff2 = ''.concat(fontsCDN, '/Lato-BlackItalic/Lato-BlackItalic.woff2');
var LatoBoldEot = ''.concat(fontsCDN, '/Lato-Bold/Lato-Bold.eot');
var LatoBoldSvg = ''.concat(fontsCDN, '/Lato-Bold/Lato-Bold.svg');
var LatoBoldTtf = ''.concat(fontsCDN, '/Lato-Bold/Lato-Bold.ttf');
var LatoBoldWoff = ''.concat(fontsCDN, '/Lato-Bold/Lato-Bold.woff');
var LatoBoldWoff2 = ''.concat(fontsCDN, '/Lato-Bold/Lato-Bold.woff2');
var LatoBoldItalicEot = ''.concat(fontsCDN, '/Lato-BoldItalic/Lato-BoldItalic.eot');
var LatoBoldItalicSvg = ''.concat(fontsCDN, '/Lato-BoldItalic/Lato-BoldItalic.svg');
var LatoBoldItalicTtf = ''.concat(fontsCDN, '/Lato-BoldItalic/Lato-BoldItalic.ttf');
var LatoBoldItalicWoff = ''.concat(fontsCDN, '/Lato-BoldItalic/Lato-BoldItalic.woff');
var LatoBoldItalicWoff2 = ''.concat(fontsCDN, '/Lato-BoldItalic/Lato-BoldItalic.woff2');
var LatoHairlineEot = ''.concat(fontsCDN, '/Lato-Hairline/Lato-Hairline.eot');
var LatoHairlineSvg = ''.concat(fontsCDN, '/Lato-Hairline/Lato-Hairline.svg');
var LatoHairlineTtf = ''.concat(fontsCDN, '/Lato-Hairline/Lato-Hairline.ttf');
var LatoHairlineWoff = ''.concat(fontsCDN, '/Lato-Hairline/Lato-Hairline.woff');
var LatoHairlineWoff2 = ''.concat(fontsCDN, '/Lato-Hairline/Lato-Hairline.woff2');
var LatoHairlineItalicEot = ''.concat(fontsCDN, '/Lato-HairlineItalic/Lato-HairlineItalic.eot');
var LatoHairlineItalicSvg = ''.concat(fontsCDN, '/Lato-HairlineItalic/Lato-HairlineItalic.svg');
var LatoHairlineItalicTtf = ''.concat(fontsCDN, '/Lato-HairlineItalic/Lato-HairlineItalic.ttf');
var LatoHairlineItalicWoff = ''.concat(fontsCDN, '/Lato-HairlineItalic/Lato-HairlineItalic.woff');
var LatoHairlineItalicWoff2 = ''.concat(fontsCDN, '/Lato-HairlineItalic/Lato-HairlineItalic.woff2');
var LatoItalicEot = ''.concat(fontsCDN, '/Lato-Italic/Lato-Italic.eot');
var LatoItalicSvg = ''.concat(fontsCDN, '/Lato-Italic/Lato-Italic.svg');
var LatoItalicTtf = ''.concat(fontsCDN, '/Lato-Italic/Lato-Italic.ttf');
var LatoItalicWoff = ''.concat(fontsCDN, '/Lato-Italic/Lato-Italic.woff');
var LatoItalicWoff2 = ''.concat(fontsCDN, '/Lato-Italic/Lato-Italic.woff2');
var LatoLightEot = ''.concat(fontsCDN, '/Lato-Light/Lato-Light.eot');
var LatoLightSvg = ''.concat(fontsCDN, '/Lato-Light/Lato-Light.svg');
var LatoLightTtf = ''.concat(fontsCDN, '/Lato-Light/Lato-Light.ttf');
var LatoLightWoff = ''.concat(fontsCDN, '/Lato-Light/Lato-Light.woff');
var LatoLightWoff2 = ''.concat(fontsCDN, '/Lato-Light/Lato-Light.woff2');
var LatoLightItalicEot = ''.concat(fontsCDN, '/Lato-LightItalic/Lato-LightItalic.eot');
var LatoLightItalicSvg = ''.concat(fontsCDN, '/Lato-LightItalic/Lato-LightItalic.svg');
var LatoLightItalicTtf = ''.concat(fontsCDN, '/Lato-LightItalic/Lato-LightItalic.ttf');
var LatoLightItalicWoff = ''.concat(fontsCDN, '/Lato-LightItalic/Lato-LightItalic.woff');
var LatoLightItalicWoff2 = ''.concat(fontsCDN, '/Lato-LightItalic/Lato-LightItalic.woff2');
var LatoRegularEot = ''.concat(fontsCDN, '/Lato-Regular/Lato-Regular.eot');
var LatoRegularSvg = ''.concat(fontsCDN, '/Lato-Regular/Lato-Regular.svg');
var LatoRegularTtf = ''.concat(fontsCDN, '/Lato-Regular/Lato-Regular.ttf');
var LatoRegularWoff = ''.concat(fontsCDN, '/Lato-Regular/Lato-Regular.woff');
var LatoRegularWoff2 = ''.concat(fontsCDN, '/Lato-Regular/Lato-Regular.woff2');
var legacyStyles = "\n@font-face {\n    font-family: 'Lato Black';\n    src: url("
    .concat(LatoBlackEot, ');\n    src: url(')
    .concat(LatoBlackWoff2, ') format("woff2"), url(')
    .concat(LatoBlackWoff, ') format("woff"), url(')
    .concat(LatoBlackTtf, ') format("truetype"), url("')
    .concat(LatoBlackSvg, '#Lato-Black") format("svg"), url("')
    .concat(
        LatoBlackEot,
        '?#iefix") format("embedded-opentype");\n    font-weight: normal;\n    font-style: normal; }\n  \n  @font-face {\n    font-family: \'Lato Black Italic\';\n    src: url(',
    )
    .concat(LatoBlackItalicEot, ');\n    src: url(')
    .concat(LatoBlackItalicWoff2, ') format("woff2"), url(')
    .concat(LatoBlackItalicWoff, ') format("woff"), url(')
    .concat(LatoBlackItalicTtf, ') format("truetype"), url("')
    .concat(LatoBlackItalicSvg, '#Lato-BlackItalic") format("svg"), url("')
    .concat(
        LatoBlackItalicEot,
        '?#iefix") format("embedded-opentype");\n    font-weight: normal;\n    font-style: normal; }\n  \n  @font-face {\n    font-family: \'Lato Bold\';\n    src: url(',
    )
    .concat(LatoBoldEot, ');\n    src: url(')
    .concat(LatoBoldWoff2, ') format("woff2"), url(')
    .concat(LatoBoldWoff, ') format("woff"), url(')
    .concat(LatoBoldTtf, ') format("truetype"), url("')
    .concat(LatoBoldSvg, '#Lato-Bold") format("svg"), url("')
    .concat(
        LatoBoldEot,
        '?#iefix") format("embedded-opentype");\n    font-weight: normal;\n    font-style: normal; }\n  \n  @font-face {\n    font-family: \'Lato Bold Italic\';\n    src: url(',
    )
    .concat(LatoBoldItalicEot, ');\n    src: url(')
    .concat(LatoBoldItalicWoff2, ') format("woff2"), url(')
    .concat(LatoBoldItalicWoff, ') format("woff"), url(')
    .concat(LatoBoldItalicTtf, ') format("truetype"), url("')
    .concat(LatoBoldItalicSvg, '#Lato-BoldItalic") format("svg"), url("')
    .concat(
        LatoBoldItalicEot,
        '?#iefix") format("embedded-opentype");\n    font-weight: normal;\n    font-style: normal; }\n  \n  @font-face {\n    font-family: \'Lato Hairline\';\n    src: url(',
    )
    .concat(LatoHairlineEot, ');\n    src: url(')
    .concat(LatoHairlineWoff2, ') format("woff2"), url(')
    .concat(LatoHairlineWoff, ') format("woff"), url(')
    .concat(LatoHairlineTtf, ') format("truetype"), url("')
    .concat(LatoHairlineSvg, '#Lato-Hairline") format("svg"), url("')
    .concat(
        LatoHairlineEot,
        '?#iefix") format("embedded-opentype");\n    font-weight: normal;\n    font-style: normal; }\n  \n  @font-face {\n    font-family: \'Lato Hairline Italic\';\n    src: url(',
    )
    .concat(LatoHairlineItalicEot, ');\n    src: url(')
    .concat(LatoHairlineItalicWoff2, ') format("woff2"), url(')
    .concat(LatoHairlineItalicWoff, ') format("woff"), url(')
    .concat(LatoHairlineItalicTtf, ') format("truetype"), url("')
    .concat(LatoHairlineItalicSvg, '#Lato-HairlineItalic") format("svg"), url("')
    .concat(
        LatoHairlineItalicEot,
        '?#iefix") format("embedded-opentype");\n    font-weight: normal;\n    font-style: normal; }\n  \n  @font-face {\n    font-family: \'Lato Italic\';\n    src: url(',
    )
    .concat(LatoItalicEot, ');\n    src: url(')
    .concat(LatoItalicWoff2, ') format("woff2"), url(')
    .concat(LatoItalicWoff, ') format("woff"), url(')
    .concat(LatoItalicTtf, ') format("truetype"), url("')
    .concat(LatoItalicSvg, '#Lato-Italic") format("svg"), url("')
    .concat(
        LatoItalicEot,
        '?#iefix") format("embedded-opentype");\n    font-weight: normal;\n    font-style: normal; }\n  \n  @font-face {\n    font-family: \'Lato Light\';\n    src: url(',
    )
    .concat(LatoLightEot, ');\n    src: url(')
    .concat(LatoLightWoff2, ') format("woff2"), url(')
    .concat(LatoLightWoff, ') format("woff"), url(')
    .concat(LatoLightTtf, ') format("truetype"), url("')
    .concat(LatoLightSvg, '#Lato-Light") format("svg"), url("')
    .concat(
        LatoLightEot,
        '?#iefix") format("embedded-opentype");\n    font-weight: normal;\n    font-style: normal; }\n  \n  @font-face {\n    font-family: \'Lato Light Italic\';\n    src: url(',
    )
    .concat(LatoLightItalicEot, ');\n    src: url(')
    .concat(LatoLightItalicWoff2, ') format("woff2"), url(')
    .concat(LatoLightItalicWoff, ') format("woff"), url(')
    .concat(LatoLightItalicTtf, ') format("truetype"), url("')
    .concat(LatoLightItalicSvg, '#Lato-LightItalic") format("svg"), url("')
    .concat(
        LatoLightItalicEot,
        '?#iefix") format("embedded-opentype");\n    font-weight: normal;\n    font-style: normal; }\n  \n  @font-face {\n    font-family: \'Lato\';\n    src: url(',
    )
    .concat(LatoRegularEot, ');\n    src: url(')
    .concat(LatoRegularWoff2, ') format("woff2"), url(')
    .concat(LatoRegularWoff, ') format("woff"), url(')
    .concat(LatoRegularTtf, ') format("truetype"), url("')
    .concat(LatoRegularSvg, '#Lato-Regular") format("svg"), url("')
    .concat(
        LatoRegularEot,
        '?#iefix") format("embedded-opentype");\n    font-weight: normal;\n    font-style: normal; }\n  \n  html {\n    font-family: \'Lato\', Arial, sans-serif;\n    font-size: 100%;\n    line-height: 1.5;\n    background: #fafaf9;\n    color: #3e3e3c;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    -webkit-tap-highlight-color: transparent; }\n  \n  body {\n    margin: 0;\n    font-size: 0.8125rem;\n    background: transparent; }\n  \n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  main,\n  menu,\n  nav,\n  section,\n  summary {\n    display: block; }\n  \n  audio,\n  canvas,\n  progress,\n  video {\n    display: inline-block;\n    vertical-align: baseline; }\n  \n  audio,\n  canvas,\n  iframe,\n  img,\n  svg,\n  video {\n    vertical-align: middle; }\n  \n  audio:not([controls]) {\n    display: none;\n    height: 0; }\n  \n  template {\n    display: none; }\n  \n  a {\n    background-color: transparent;\n    color: #006dcc;\n    text-decoration: none;\n    transition: color 0.1s linear; }\n  \n  a,\n  button {\n    cursor: pointer; }\n  \n  a:hover,\n  a:focus {\n    text-decoration: underline;\n    color: #005fb2; }\n  \n  a:active {\n    color: #005fb2; }\n  \n  a:active,\n  a:hover {\n    outline: 0; }\n  \n  abbr[title] {\n    border-bottom: 1px dotted;\n    text-decoration: none;\n    cursor: help; }\n  \n  b,\n  strong {\n    font-weight: bold; }\n  \n  dfn {\n    font-style: italic; }\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0; }\n  \n  mark {\n    background-color: #fff03f;\n    color: #3e3e3c; }\n  \n  small {\n    font-size: 80%; }\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline; }\n  \n  sup {\n    top: -0.5em; }\n  \n  sub {\n    bottom: -0.25em; }\n  \n  img {\n    border: 0;\n    height: auto;\n    max-width: 100%; }\n  \n  svg:not(:root) {\n    overflow: hidden; }\n  \n  figure {\n    margin: 1em 40px; }\n  \n  hr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    padding: 0;\n    display: block;\n    margin: 2rem 0;\n    border-top: 1px solid #dddbda;\n    height: 1px;\n    clear: both; }\n  \n  pre {\n    overflow: auto; }\n  \n  code,\n  kbd,\n  pre,\n  samp {\n    font-family: monospace;\n    font-size: 1em; }\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    color: inherit;\n    font: inherit;\n    margin: 0; }\n  \n  button {\n    overflow: visible; }\n  \n  button,\n  select {\n    text-transform: none; }\n  \n  button,\n  html input[type="button"],\n  input[type="reset"],\n  input[type="submit"] {\n    -webkit-appearance: button;\n    cursor: pointer; }\n  \n  button[disabled],\n  html input[disabled] {\n    cursor: default; }\n  \n  input {\n    line-height: normal; }\n  \n  button::-moz-focus-inner,\n  input::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  \n  input[type="checkbox"],\n  input[type="radio"] {\n    box-sizing: border-box;\n    padding: 0; }\n  \n  input[type="number"]::-webkit-inner-spin-button,\n  input[type="number"]::-webkit-outer-spin-button {\n    height: auto; }\n  \n  input[type="search"] {\n    -webkit-appearance: textfield;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n    box-sizing: border-box; }\n  \n  input[type="search"]::-webkit-search-cancel-button,\n  input[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none; }\n  \n  fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em; }\n  \n  legend {\n    border: 0;\n    padding: 0; }\n  \n  textarea {\n    overflow: auto; }\n  \n  optgroup {\n    font-weight: bold; }\n  \n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    width: 100%; }\n  \n  td,\n  th {\n    padding: 0; }\n  \n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box; }\n  \n  ::-moz-selection {\n    background: #d8edff;\n    text-shadow: none;\n    color: #3e3e3c; }\n  \n  :-ms-input-placeholder {\n    color: #706e6b;\n    font-weight: 400;\n    font-size: 0.8125rem; }\n  \n  ::placeholder {\n    color: #706e6b;\n    font-weight: 400;\n    font-size: 0.8125rem; }\n  \n  ::selection {\n    background: #d8edff;\n    text-shadow: none;\n    color: #3e3e3c; }\n  \n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  ol,\n  ul,\n  dl,\n  fieldset {\n    margin: 0;\n    padding: 0; }\n  \n  dd,\n  figure {\n    margin: 0; }\n  \n  abbr[title],\n  fieldset,\n  hr {\n    border: 0; }\n  \n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: inherit;\n    font-size: 1em; }\n  \n  ol,\n  ul {\n    list-style: none; }\n  \n  b,\n  strong,\n  dfn {\n    font-weight: 700; }\n  \n  caption,\n  th,\n  td {\n    text-align: left; }\n  \n  .rainbow-link {\n    font-size: 15px;\n    line-height: 2.46;\n    color: #01b6f5;\n    align-items: center;\n    display: inline-flex;\n    justify-content: center; }\n  \n  .rainbow-link:hover,\n  .rainbow-link:focus,\n  .rainbow-link:active,\n  .rainbow-link:visited {\n    color: #009acf; }\n  \n  .rainbow-background-color_brand {\n    background-color: #01b6f5; }\n  \n  .rainbow-background-color_brand-active {\n    background-color: #009acf; }\n  \n  .rainbow-color_brand {\n    color: #01b6f5; }\n  \n  .rainbow-color_brand-active {\n    color: #009acf; }\n  \n  .rainbow-background-color_success {\n    background-color: #1de9b6; }\n  \n  .rainbow-background-color_success-active {\n    background-color: #1ad1a3; }\n  \n  .rainbow-color_success {\n    color: #1de9b6; }\n  \n  .rainbow-color_success-active {\n    color: #1ad1a3; }\n  \n  .rainbow-background-color_error {\n    background-color: #fe4849; }\n  \n  .rainbow-background-color_error-active {\n    background-color: #ea4243; }\n  \n  .rainbow-color_error {\n    color: #fe4849; }\n  \n  .rainbow-color_error-active {\n    color: #ea4243; }\n  \n  .rainbow-background-color_yellow {\n    background-color: #fc0; }\n  \n  .rainbow-color_yellow {\n    color: #fc0; }\n  \n  .rainbow-background-color_purple {\n    background-color: #663398; }\n  \n  .rainbow-color_purple {\n    color: #663398; }\n  \n  .rainbow-background-color_gray-1 {\n    background-color: #f4f6f9; }\n  \n  .rainbow-color_gray-1 {\n    color: #f4f6f9; }\n  \n  .rainbow-background-color_gray-2 {\n    background-color: #e3e5ed; }\n  \n  .rainbow-color_gray-2 {\n    color: #e3e5ed; }\n  \n  .rainbow-background-color_gray-3 {\n    background-color: #a4a7b5; }\n  \n  .rainbow-color_gray-3 {\n    color: #a4a7b5; }\n  \n  .rainbow-background-color_gray-4 {\n    background-color: #576574; }\n  \n  .rainbow-color_gray-4 {\n    color: #576574; }\n  \n  .rainbow-background-color_white {\n    background-color: #fff; }\n  \n  .rainbow-color_white {\n    color: #fff; }\n  \n  .rainbow-background-color_dark-1 {\n    background-color: #061c3f; }\n  \n  .rainbow-color_dark-1 {\n    color: #061c3f; }\n  \n  .rainbow-p-top_xx-small {\n    padding-top: 0.25rem; }\n  \n  .rainbow-p-right_xx-small {\n    padding-right: 0.25rem; }\n  \n  .rainbow-p-bottom_xx-small {\n    padding-bottom: 0.25rem; }\n  \n  .rainbow-p-left_xx-small {\n    padding-left: 0.25rem; }\n  \n  .rainbow-p-vertical_xx-small {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem; }\n  \n  .rainbow-p-horizontal_xx-small {\n    padding-right: 0.25rem;\n    padding-left: 0.25rem; }\n  \n  .rainbow-p-around_xx-small {\n    padding: 0.25rem; }\n  \n  .rainbow-p-top_x-small {\n    padding-top: 0.5rem; }\n  \n  .rainbow-p-right_x-small {\n    padding-right: 0.5rem; }\n  \n  .rainbow-p-bottom_x-small {\n    padding-bottom: 0.5rem; }\n  \n  .rainbow-p-left_x-small {\n    padding-left: 0.5rem; }\n  \n  .rainbow-p-vertical_x-small {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem; }\n  \n  .rainbow-p-horizontal_x-small {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem; }\n  \n  .rainbow-p-around_x-small {\n    padding: 0.5rem; }\n  \n  .rainbow-p-top_small {\n    padding-top: 0.75rem; }\n  \n  .rainbow-p-right_small {\n    padding-right: 0.75rem; }\n  \n  .rainbow-p-bottom_small {\n    padding-bottom: 0.75rem; }\n  \n  .rainbow-p-left_small {\n    padding-left: 0.75rem; }\n  \n  .rainbow-p-vertical_small {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem; }\n  \n  .rainbow-p-horizontal_small {\n    padding-right: 0.75rem;\n    padding-left: 0.75rem; }\n  \n  .rainbow-p-around_small {\n    padding: 0.75rem; }\n  \n  .rainbow-p-top_medium {\n    padding-top: 1rem; }\n  \n  .rainbow-p-right_medium {\n    padding-right: 1rem; }\n  \n  .rainbow-p-bottom_medium {\n    padding-bottom: 1rem; }\n  \n  .rainbow-p-left_medium {\n    padding-left: 1rem; }\n  \n  .rainbow-p-vertical_medium {\n    padding-top: 1rem;\n    padding-bottom: 1rem; }\n  \n  .rainbow-p-horizontal_medium {\n    padding-right: 1rem;\n    padding-left: 1rem; }\n  \n  .rainbow-p-around_medium {\n    padding: 1rem; }\n  \n  .rainbow-p-top_large {\n    padding-top: 1.5rem; }\n  \n  .rainbow-p-right_large {\n    padding-right: 1.5rem; }\n  \n  .rainbow-p-bottom_large {\n    padding-bottom: 1.5rem; }\n  \n  .rainbow-p-left_large {\n    padding-left: 1.5rem; }\n  \n  .rainbow-p-vertical_large {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem; }\n  \n  .rainbow-p-horizontal_large {\n    padding-right: 1.5rem;\n    padding-left: 1.5rem; }\n  \n  .rainbow-p-around_large {\n    padding: 1.5rem; }\n  \n  .rainbow-p-top_x-large {\n    padding-top: 2rem; }\n  \n  .rainbow-p-right_x-large {\n    padding-right: 2rem; }\n  \n  .rainbow-p-bottom_x-large {\n    padding-bottom: 2rem; }\n  \n  .rainbow-p-left_x-large {\n    padding-left: 2rem; }\n  \n  .rainbow-p-vertical_x-large {\n    padding-top: 2rem;\n    padding-bottom: 2rem; }\n  \n  .rainbow-p-horizontal_x-large {\n    padding-right: 2rem;\n    padding-left: 2rem; }\n  \n  .rainbow-p-around_x-large {\n    padding: 2rem; }\n  \n  .rainbow-p-top_xx-large {\n    padding-top: 3rem; }\n  \n  .rainbow-p-right_xx-large {\n    padding-right: 3rem; }\n  \n  .rainbow-p-bottom_xx-large {\n    padding-bottom: 3rem; }\n  \n  .rainbow-p-left_xx-large {\n    padding-left: 3rem; }\n  \n  .rainbow-p-vertical_xx-large {\n    padding-top: 3rem;\n    padding-bottom: 3rem; }\n  \n  .rainbow-p-horizontal_xx-large {\n    padding-right: 3rem;\n    padding-left: 3rem; }\n  \n  .rainbow-p-around_xx-large {\n    padding: 3rem; }\n  \n  .rainbow-p-top_none {\n    padding-top: 0 !important; }\n  \n  .rainbow-p-right_none {\n    padding-right: 0 !important; }\n  \n  .rainbow-p-bottom_none {\n    padding-bottom: 0 !important; }\n  \n  .rainbow-p-left_none {\n    padding-left: 0 !important; }\n  \n  .rainbow-p-vertical_none {\n    padding-top: 0;\n    padding-bottom: 0; }\n  \n  .rainbow-p-horizontal_none {\n    padding-right: 0;\n    padding-left: 0; }\n  \n  .rainbow-p-around_none {\n    padding: 0; }\n  \n  .rainbow-m_auto {\n    margin: auto; }\n  \n  .rainbow-m-top_xx-small {\n    margin-top: 0.25rem; }\n  \n  .rainbow-m-right_xx-small {\n    margin-right: 0.25rem; }\n  \n  .rainbow-m-bottom_xx-small {\n    margin-bottom: 0.25rem; }\n  \n  .rainbow-m-left_xx-small {\n    margin-left: 0.25rem; }\n  \n  .rainbow-m-vertical_xx-small {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem; }\n  \n  .rainbow-m-horizontal_xx-small {\n    margin-right: 0.25rem;\n    margin-left: 0.25rem; }\n  \n  .rainbow-m-around_xx-small {\n    margin: 0.25rem; }\n  \n  .rainbow-m-top_x-small {\n    margin-top: 0.5rem; }\n  \n  .rainbow-m-right_x-small {\n    margin-right: 0.5rem; }\n  \n  .rainbow-m-bottom_x-small {\n    margin-bottom: 0.5rem; }\n  \n  .rainbow-m-left_x-small {\n    margin-left: 0.5rem; }\n  \n  .rainbow-m-vertical_x-small {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem; }\n  \n  .rainbow-m-horizontal_x-small {\n    margin-right: 0.5rem;\n    margin-left: 0.5rem; }\n  \n  .rainbow-m-around_x-small {\n    margin: 0.5rem; }\n  \n  .rainbow-m-top_small {\n    margin-top: 0.75rem; }\n  \n  .rainbow-m-right_small {\n    margin-right: 0.75rem; }\n  \n  .rainbow-m-bottom_small {\n    margin-bottom: 0.75rem; }\n  \n  .rainbow-m-left_small {\n    margin-left: 0.75rem; }\n  \n  .rainbow-m-vertical_small {\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem; }\n  \n  .rainbow-m-horizontal_small {\n    margin-right: 0.75rem;\n    margin-left: 0.75rem; }\n  \n  .rainbow-m-around_small {\n    margin: 0.75rem; }\n  \n  .rainbow-m-top_medium {\n    margin-top: 1rem; }\n  \n  .rainbow-m-right_medium {\n    margin-right: 1rem; }\n  \n  .rainbow-m-bottom_medium {\n    margin-bottom: 1rem; }\n  \n  .rainbow-m-left_medium {\n    margin-left: 1rem; }\n  \n  .rainbow-m-vertical_medium {\n    margin-top: 1rem;\n    margin-bottom: 1rem; }\n  \n  .rainbow-m-horizontal_medium {\n    margin-right: 1rem;\n    margin-left: 1rem; }\n  \n  .rainbow-m-around_medium {\n    margin: 1rem; }\n  \n  .rainbow-m-top_large {\n    margin-top: 1.5rem; }\n  \n  .rainbow-m-right_large {\n    margin-right: 1.5rem; }\n  \n  .rainbow-m-bottom_large {\n    margin-bottom: 1.5rem; }\n  \n  .rainbow-m-left_large {\n    margin-left: 1.5rem; }\n  \n  .rainbow-m-vertical_large {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem; }\n  \n  .rainbow-m-horizontal_large {\n    margin-right: 1.5rem;\n    margin-left: 1.5rem; }\n  \n  .rainbow-m-around_large {\n    margin: 1.5rem; }\n  \n  .rainbow-m-top_x-large {\n    margin-top: 2rem; }\n  \n  .rainbow-m-right_x-large {\n    margin-right: 2rem; }\n  \n  .rainbow-m-bottom_x-large {\n    margin-bottom: 2rem; }\n  \n  .rainbow-m-left_x-large {\n    margin-left: 2rem; }\n  \n  .rainbow-m-vertical_x-large {\n    margin-top: 2rem;\n    margin-bottom: 2rem; }\n  \n  .rainbow-m-horizontal_x-large {\n    margin-right: 2rem;\n    margin-left: 2rem; }\n  \n  .rainbow-m-around_x-large {\n    margin: 2rem; }\n  \n  .rainbow-m-top_xx-large {\n    margin-top: 3rem; }\n  \n  .rainbow-m-right_xx-large {\n    margin-right: 3rem; }\n  \n  .rainbow-m-bottom_xx-large {\n    margin-bottom: 3rem; }\n  \n  .rainbow-m-left_xx-large {\n    margin-left: 3rem; }\n  \n  .rainbow-m-vertical_xx-large {\n    margin-top: 3rem;\n    margin-bottom: 3rem; }\n  \n  .rainbow-m-horizontal_xx-large {\n    margin-right: 3rem;\n    margin-left: 3rem; }\n  \n  .rainbow-m-around_xx-large {\n    margin: 3rem; }\n  \n  .rainbow-m-top_none {\n    margin-top: 0 !important; }\n  \n  .rainbow-m-right_none {\n    margin-right: 0 !important; }\n  \n  .rainbow-m-bottom_none {\n    margin-bottom: 0 !important; }\n  \n  .rainbow-m-left_none {\n    margin-left: 0 !important; }\n  \n  .rainbow-m-vertical_none {\n    margin-top: 0;\n    margin-bottom: 0; }\n  \n  .rainbow-m-horizontal_none {\n    margin-right: 0;\n    margin-left: 0; }\n  \n  .rainbow-m-around_none {\n    margin: 0; }\n  \n  .rainbow-flex {\n    display: -ms-flexbox;\n    display: flex; }\n  \n  .rainbow-inline-flex {\n    display: inline-flex; }\n  \n  .rainbow-flex_column {\n    flex-direction: column; }\n  \n  .rainbow-flex_column-reverse {\n    flex-direction: column-reverse; }\n  \n  .rainbow-flex_row {\n    flex-direction: row; }\n  \n  .rainbow-flex_row-reverse {\n    flex-direction: row-reverse; }\n  \n  .rainbow-flex_wrap {\n    flex-wrap: wrap; }\n  \n  .rainbow-flex_no-wrap {\n    flex-wrap: nowrap; }\n  \n  .rainbow-justify_center {\n    -ms-flex-pack: center;\n    justify-content: center; }\n  \n  .rainbow-justify_space-around {\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  \n  .rainbow-justify_spread {\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  \n  .rainbow-justify_end {\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  \n  .rainbow-align_start {\n    -ms-flex-align: start;\n    align-items: flex-start; }\n  \n  .rainbow-align_center {\n    -ms-flex-align: center;\n    align-items: center; }\n  \n  .rainbow-align_end {\n    -ms-flex-align: end;\n    align-items: flex-end; }\n  \n  .rainbow_vertical-stretch {\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -ms-flex-line-pack: stretch;\n    align-content: stretch; }\n  \n  .rainbow-position-align_start {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: start;\n    align-items: flex-start; }\n  \n  .rainbow-align-content_space-between {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    -ms-flex-align: center;\n    align-items: center; }\n  \n  .rainbow-align-content_center {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    -ms-flex-align: center;\n    align-items: center; }\n  \n  .rainbow-position_absolute {\n    position: absolute; }\n  \n  .rainbow-position_relative {\n    position: relative; }\n  \n  .rainbow-position_fixed {\n    position: fixed; }\n  \n  .rainbow-border-radius_circle {\n    border-radius: 12rem; }\n  \n  .rainbow-border-radius_oval {\n    border-radius: 0.875rem; }\n  \n  .rainbow-font-size-heading_small {\n    font-size: 1rem; }\n  \n  .rainbow-font-size-heading_medium {\n    font-size: 1.25rem; }\n  \n  .rainbow-font-size-heading_large {\n    font-size: 1.5rem; }\n  \n  .rainbow-font-size-heading_x-large {\n    font-size: 2rem; }\n  \n  .rainbow-font-size-text_x-small {\n    font-size: 0.625rem; }\n  \n  .rainbow-font-size-text_small {\n    font-size: 0.75rem; }\n  \n  .rainbow-font-size-text_medium {\n    font-size: 0.875rem; }\n  \n  .rainbow-font-size-text_large {\n    font-size: 1rem; }\n',
    );
var RainbowLegacyStyles = isServer
    ? createGlobalStyle(
          _templateObject ||
              (_templateObject = _taggedTemplateLiteral(['\n          ', '\n      '])),
          legacyStyles,
      )
    : function() {
          return React.createElement('style', null, legacyStyles);
      };
export default RainbowLegacyStyles;
