
//Improve Code Read Ability
const fetch = require('node-fetch');

const fetchCall = async(url , option)=>{
    try{
        let response = await fetch(url , option);
        return await response.json();
    }catch(error){
        console.error("Fetching Error", error);
        throw error;
    }
}
module.exports = fetchCall//module.exports the function so that other files can import and use it