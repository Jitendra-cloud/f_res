/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"djpsoap/e_soap_calls/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});