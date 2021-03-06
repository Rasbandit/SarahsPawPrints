/*
 *	 Angular Elevated Zoom jquery wrapper (angular-elevate-zoom)
 *	 Elevated Zoom jQuery plugin wrapper for Angular.js, by AppFeel.
 *
 *	 Version: 1.0.3
 * 	 License: MIT
 */
!function(){"use strict";var o=angular.module("angular-elevate-zoom",[]);o.provider("ElevateZoomConfig",function(){this.zoomConfig={},this.setZoomConfig=function(o){this.zoomConfig=o},this.$get=function(){return this}}),o.directive("ezZoom",["ezZoomSvc",function(o){return{restrict:"AC",scope:{ezZoomConfig:"="},link:function(e,t,n){n.$observe("ezZoomImage",function(n){o.remove(t),n&&o.attach(t,n,e.ezZoomConfig)})}}}]),o.factory("ezZoomSvc",["ElevateZoomConfig",function(o){return{attach:function(e,t,n){var i=$(e);i.data("zoom-image",t),i.elevateZoom(n||o.zoomConfig)},remove:function(o){var e=$(o);e.length>0?($("#"+e.attr("id")+"-zoomContainer").remove(),e.removeData("elevateZoom"),e.removeData("zoomImage")):$(".zoomContainer").remove()}}}])}();
//# sourceMappingURL=angular-elevate-zoom.min.js.map
