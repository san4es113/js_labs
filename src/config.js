export let PUBLIC_IP = '54.149.231.34';
export let DEVICE_URL = `http://${PUBLIC_IP}/api`;

export const setIP = (ip) => {
  PUBLIC_IP = ip;
  DEVICE_URL = `http://${ip}/api`;
};

export const MOBILE_ICON = 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/mobile-2-icon.png';
