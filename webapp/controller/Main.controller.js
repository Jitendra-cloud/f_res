sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("djp.soap.esoapcalls.controller.Main", {
        onInit() {
        },

        resSuccess(data, status, req) {
            debugger;
        },
        resError(data, status, req){
            debugger;
        },

        onCallSOAP(oEvent) {
            //1. Form Submit //2. HTTP Request Object in JS //3. jQuery AJAX
            
            //Step 1: Read the values of Num1 and Num2
            var sNum1 = this.getView().byId("num1").getValue();
            var sNum2 = this.getView().byId("num2").getValue();

            //Step 2: Prepare the URL of SOAP service to call and add the Numbers to same
            var sUrl = "/csp/samples/SOAP.Demo.cls?soap_method=AddInteger&Arg1=" + sNum1 + "&Arg2=" + sNum2;
            
            //Step 3: Make a call to the SOAP Service Using AJAX
            $.ajax({
                method: "GET",
                url: sUrl,
                content: "text/xml",
                dataType: "xml",
                success: this.resSuccess,
                error: this.resError
            })
            //Step 4: Define the Callbacks for response (success or Error)
        }
    });
});