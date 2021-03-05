import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "../../js/constants.mjs";


var validate = () => {
    var empid= form_stud.shadowRoot.getElementById("empid").value;
    empid=parseInt(empid);
    console.log(empid);

    getAttData(empid);
    
}


var getAttData = async(empid) => {
   
    let respObj = await apiman.rest(APP_CONSTANTS.GET_DATA, "POST", {empid}, false,false);
    console.log(respObj);
    console.log(respObj.length);
    if(respObj.length == 1) {
       /* let target = document.querySelector("res-form").shadowRoot.querySelector("#sri");
        target.style.display = "block";
        target.querySelector("#iname").innerHTML = respObj[0].name;
        target.querySelector("#iroll").innerHTML = respObj[0].roll;
        target.querySelector("#iclass").innerHTML =respObj[0].class;
        */
    
    }
    else {
        alert("Please enter valid data");
        router.reload();
    }
}
function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("emp-data",
   `${APP_CONSTANTS.APP_PATH}/components/emp-data/emp-data.html`, emp_data);
   }
   const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
   export const emp_data = { trueWebComponentMode, register,validate}
   
