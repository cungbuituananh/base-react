export const SESSION_STORAGE = "session";
export const LOCAL_STORAGE = "local";

export function setDataSession(type: string, key: string, data: any) {
  if (typeof Storage !== "undefined") {
    if (!key) return false;
    // process data
    // save to storegae
    data = JSON.stringify(data);
    if (type === SESSION_STORAGE) {
      sessionStorage.setItem(key, data);
      return true;
    }

    if (type === LOCAL_STORAGE) {
      localStorage.setItem(key, data);
      return true;
    }
  }
  return null;
  // console.log('This Browser dont supported storeage');
}

export function getDataSession(type: string, key: string) {
  if (typeof Storage !== "undefined") {
    // process data
    let value: string | null = null;
    let data: string | null = null;
    if (type === SESSION_STORAGE) {
      value = sessionStorage.getItem(key) || null;
    }

    if (type === LOCAL_STORAGE) {
      value = localStorage.getItem(key) || null;
    }

    try {
      data = value ? JSON.parse(value) : null;
    } catch (err) {
      data = value;
    }
    return data;
  }
  // console.log('This browser does not support local storage');
  return null;
}
