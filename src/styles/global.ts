import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // clash-display
  @font-face {
    font-family: 'ClashDisplayVariable';
    src: local('ClashDisplayVariable');
    font-style: normal;
    src: url('/static/fonts/clashdisplay/ClashDisplay-Variable.ttf') format('truetype');
  }
  
  // OpenSans
  @font-face {
    font-family: 'OpenSansExtraBold';
    src: local('OpenSansExtraBold');
    font-style: normal;
    src: url('/static/fonts/OpenSans/OpenSans-ExtraBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'OpenSansBold';
    src: local('OpenSansBold');
    font-style: normal;
    src: url('/static/fonts/OpenSans/OpenSans-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'OpenSansSemibold';
    src: local('OpenSansSemibold');
    font-style: normal;
    src: url('/static/fonts/OpenSans/OpenSans-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'OpenSansMedium';
    src: local('OpenSansMedium');
    font-style: normal;
    src: url('/static/fonts/OpenSans/OpenSans-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'OpenSansRegular';
    src: local('OpenSansRegular');
    font-style: normal;
    src: url('/static/fonts/OpenSans/OpenSans-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'OpenSansLight';
    src: local('OpenSansLight');
    font-style: normal;
    src: url('/static/fonts/OpenSans/OpenSans-Light.ttf') format('truetype');
  }
`
export default GlobalStyle;