import allSites from './data';
import devStorage from './dev_storage';
// eslint-disable-next-line
const STORAGE = process.env.NODE_ENV === 'development' ? devStorage : chrome.storage.local;
const DATAKEY = 'timer';

export default {
  async update(host, seconds) {
    const currentDate = this.getCurrentDate();
    let data = await this.getData(DATAKEY);
    data = data[currentDate] || {};
    if (data[host]) {
      data[host] += seconds;
    } else {
      data[host] = seconds;
    }
    this.save(DATAKEY, { [currentDate]: data });
  },

  /**
   * @description get the record for the specified day or current day
   * @param {string} key - data key
   */
  getData(key) {
    return new Promise((resolve) => {
      STORAGE.get(key, result => (result[key] ? resolve(result[key]) : resolve({})));
    });
  },

  /**
   * @param {string} key - the key used in saving the record is the date
   * @param {object} value - value to save in the sync storage
   */
  save(key, value) {
    return new Promise((resolve) => {
      STORAGE.set({ [key]: value }, () => {
        resolve();
      });
    });
  },

  async initialize() {
    const record = await this.getData('sites');
    if (!Object.values(record).length) {
      this.save('sites', allSites);
    }
  },

  getCurrentDate() {
    return new Date().toISOString().substr(0, 10);
  }
};
