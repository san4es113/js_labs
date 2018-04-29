export const displayByType = (arr, type) => arr.filter(device => device.type.toLowerCase() === type);

export const displayByStatus = (arr, status) => arr.filter(device => device.status === status);

/**
 * @param {[]} arr -- array of devices
 * @param {number} lastSync -- absolute time in msec
 * @returns {[]} array of devices
 */
export const displayByLastSync = (arr, lastSync) => arr.filter(device => (device.lastSync || device.time) >= lastSync);
