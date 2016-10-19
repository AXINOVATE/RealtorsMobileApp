/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Received Device Ready Event');
		
			/* Redirect */
			/*var connectionStatus = navigator.onLine ? 'online' : 'offline';
			if(connectionStatus=='offline'){
				document.getElementById('loading1').style.display = "block";
				element.innerHTML = 'Please connect to your internet connection and try again!';
				alert(element.innerHTML);
			}
			else{
				setTimeout(
					function(){
						window.open('http://xucorelms.com/nartesting/','_self','location=no','hidden=yes','clearsessioncache=yes','toolbar=no','clearcache=yes','fullscreen=yes','hardwareback=no');
					},2000);
			}*/
			/* Redirect */
        app.setupPush();
    },
    setupPush: function() {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "124751054451"
            },
            "browser": {},
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');

        push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);
            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
            }
			alert(localStorage.getItem('registrationId'));
			//var myLink="'http://xucorelms.com/nartesting/home/login?appID="+data.registrationId+'";
            var parentElement = document.getElementById('registration');
            var listeningElement = parentElement.querySelector('.waiting');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
			app.redirectToSite();
			
        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });
        push.on('notification', function(notification) {
            console.log('notification event');
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            ); 
       });
    },
	redirectToSite: function(){
		/* Redirect */
		var myLink= 'http://xucorelms.com/nartesting/home/login?appID=as';
		alert(myLink);
			var connectionStatus = navigator.onLine ? 'online' : 'offline';
			if(connectionStatus=='offline'){
				document.getElementById('loading1').style.display = "block";
				element.innerHTML = 'Please connect to your internet connection and try again!';
				alert(element.innerHTML);
			}
			else{
				setTimeout(
					function(){
						window.open(myLink,'_self','location=no','hidden=yes','clearsessioncache=yes','toolbar=no','clearcache=yes','fullscreen=yes','hardwareback=no');
					},2000);
			}
			/* Redirect */
	}
};
