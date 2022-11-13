import { fromStringToJson } from "./jsonParse";

function doRequest(url, method, responseCallback = ()=>{}) {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
       if (this.status === 200 && this.readyState === 4) {
         const result = fromStringToJson(this.response);
           responseCallback(result.results);
       }
       else if (this.status >= 300) {
         alert("error get request")
         responseCallback(null)
       }
     };
     xhttp.open(method, url, true);
     xhttp.send()    
}

export function doGETrequest(url, responseCallback) {
  doRequest(url, "GET", responseCallback);
}