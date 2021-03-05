/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

var insert = async() => {
    let empid = upload_record.shadowRoot.getElementById("empid").value;
    let name = upload_record.shadowRoot.getElementById("name").value;
    let designation = upload_record.shadowRoot.getElementById("designation").value;
    
    let respObj = await apiman.rest(APP_CONSTANTS.INS_DATA, "POST", {empid, name, designation}, false, false);
    console.log(respObj);
    if(respObj.affectedRows > 0) {
        alert("Data inserted");
        router.reload();
    } 
     
}


function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("insert-record",
`${APP_CONSTANTS.APP_PATH}/components/insert-record/insert-record.html`, insert_record);
}
const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
export const insert_record = { trueWebComponentMode, register, insert}
