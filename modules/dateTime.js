import { DateTime } from './libraries/luxon.min.js';

const displayTime = () => {
  const dateTime = document.querySelector('.date-time');
  dateTime.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
};

export default displayTime;