export const checkSpaceAtStartEnd = (value: string) => {
  if (/^\s+|\s+$/g.test(value)) {
    return true;
  } else {
    return false;
  }
}

export const dateToMs = (date: any, endDate?: any) => {
  if (!date) { return null }
  if (endDate) {
    let eDate = new Date(date);
    return +eDate.setHours(23, 59, 59)
  } else {
    return +new Date(date);
  }
}

export const isObjEmpty = (obj: any) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export const splitAt = index => x => [x.slice(0, index), x.slice(index)];

export const titleCase = (str: string) => {
  if (str) {
    return str.toLowerCase().split(' ').map((word) => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  } else {
    return '';
  }
}

export const STARTING_YEAR = 1990;
export const CURRENT_YEAR = new Date().getFullYear();
export const generateYears = (startFrom = STARTING_YEAR) => {
  let resultArray = [];
  for (let i = startFrom; i <= CURRENT_YEAR; i++) {
    resultArray.push(i);
  }
  return resultArray;
}

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
})
export const dataURLtoFile = (dataurl: any, filename?, calback?) => {
  filename = (filename ? filename : filename = new Date().getTime() + ".png");
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  const file = new File([u8arr], filename, { type: mime });
  return file
  // calback(file);
}

export const blobToFile = (theBlob: Blob, fileName: string): File => {
  return new File([theBlob], fileName)
}

export const DUMMY_GHOST_BOXES = (showItem = 3, dummyObj) => {
  let result = [];
  for (let index = 0; index < showItem; index++) {
    result.push(dummyObj);
  }
  return result;
}

export const isToday = (inputDateArg) => {
  let inputDate = new Date(inputDateArg);
  let todaysDate = new Date();
  if (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    return true;
  } else {
    return false;
  }
}

export const hasDatePassed = (firstDate) => firstDate.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);

export const calculatePercentage = (numerator: number, denominator: number) => {
  return denominator == 0 ? 0 : (Math.ceil((numerator / denominator) * 100));
}

export const convertSecToHms = (inputNumberInSec) => {
  inputNumberInSec = Number(inputNumberInSec);
  let h = Math.floor(inputNumberInSec / 3600);
  let m = Math.floor(inputNumberInSec % 3600 / 60);
  let s = Math.floor(inputNumberInSec % 3600 % 60);

  let hDisplay = h > 0 ? h + (h == 1 ? " Hour " : " Hours ") : "";
  let mDisplay = m > 0 ? m + (m == 1 ? " Minute " : " Minutes ") : "";
  let sDisplay = s > 0 ? s + (s == 1 ? " Second" : " Seconds") : "";

  return hDisplay + mDisplay + sDisplay;
}

export const combineTimeWithDate = (time: any, date?: any, isEndTime = false) => {
  if (!time || time.length > 15) { return time }
  if (date) {
    let formatDate = new Date(date);
    formatDate.setHours(new Date(time).getHours());
    formatDate.setMinutes(new Date(time).getMinutes());
    if (formatDate instanceof Date) {
      return isEndTime ? (+ (new Date(formatDate.toUTCString())).setSeconds(59)) : (+ (new Date(formatDate.toUTCString())).setSeconds(0, 0));
    } else {
      console.log("Date type is not valid ")
    }
  }
}

/**
   * @param time Time Format like 10:35 AM
   */
export const todayFormatDateWithTime = (time: any) => {
  let dateWithTime = new Date(`January 29, 2001 ${time}`)
  let today = new Date();
  dateWithTime.setDate(today.getDate());
  dateWithTime.setMonth(today.getMonth() + 1);
  dateWithTime.setFullYear(today.getFullYear());
  return dateWithTime
}
