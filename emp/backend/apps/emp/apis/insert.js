
const API_CONSTANTS = require(`${__dirname}/lib/constants.js`);
const conn = require('../3p/conn')


exports.doService =  (jsonReq) =>{
    if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

    return new Promise((resolve, reject) => {
        try {
          
            conn.query(`insert into student values('${jsonReq.empid}', '${jsonReq.name}', '${jsonReq.designation}')`, (err, rows, fields) => {
                if(!err) {
                    return resolve(rows);
                }
                else 
                    return resolve(err);
            })
        } catch (error) {
               return false;
        }
    });
}
const validateRequest = jsonReq => (jsonReq && jsonReq.empid && jsonReq.name && jsonReq.designation);