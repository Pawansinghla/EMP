const FRONTEND = "http://localhost:8080";
const BACKEND = "http://localhost:9090";
const APP_NAME = "emp";
const APP_PATH = `${FRONTEND}/apps/${APP_NAME}`;
const API_PATH = `${BACKEND}/apps/${APP_NAME}`

export const APP_CONSTANTS = {
 FRONTEND, BACKEND, APP_PATH, APP_NAME, API_PATH,
 HOME_HTML: APP_PATH + "/home.html",
 INDEX_HTML: APP_PATH + "/index.html",
 DATA_HTML: APP_PATH + "/data.html",
 INSERT_HTML: APP_PATH + "/insert.html",
 DELETE_HTML: APP_PATH + "/delete.html",
 UPDATE_HTML: APP_PATH + "/update.html",


 SESSION_NOTE_ID: "com_monkshu_ts",

 GET_DATA: `${BACKEND}/apis/getdata`,
 INS_DATA: `${BACKEND}/apis/insert`,
 DEL_DATA: `${BACKEND}/apis/del`,
 UPD_DATA: `${BACKEND}/apis/update`,
 


 USERID: "id",
 USER_ROLE: "user",
 GUEST_ROLE: "guest",
 PERMISSIONS_MAP: {
 user: [
 //APP_PATH + "/index.html",
 
 APP_PATH + "/data.html",
 APP_PATH + "/insert.html",
 APP_PATH + "/delete.html",
 APP_PATH + "/update.html",

 $$.MONKSHU_CONSTANTS.ERROR_THTML],

 guest: [
  //APP_PATH + "/index.html",
  
  APP_PATH + "/data.html",
  APP_PATH + "/insert.html",
  APP_PATH + "/delete.html",
  APP_PATH + "/update.html",
 

$$.MONKSHU_CONSTANTS.ERROR_THTML]
 },
 API_KEYS: { "*": "uiTmv5YBOZMqdTb0gekD40PnoxtB9Q0k" },
 KEY_HEADER: "X-API-Key"
}