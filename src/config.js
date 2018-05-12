export let PUBLIC_IP = '34.217.46.60';
export let DEVICE_URL = `http://${PUBLIC_IP}/api`;

export const setIP = (ip) => {
  PUBLIC_IP = ip;
  DEVICE_URL = `http://${ip}/api`;
};

export const MOBILE_ICON = 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/mobile-2-icon.png';
export const SYNC_TIME = 15; // every 15 sec will send request to server for updating data
