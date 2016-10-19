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
        console.log('calling setup push');
        app.setupPush();
    },
    setupPush: function() {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {
                "senderID": "124751054451"
            },
            "browser": { "pushServiceURL": 'http://push.api.phonegap.com/v1/push'},
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
			alert('registration event: ' + data.registrationId);
            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
				alert('registrationId = '+data.registrationId);
            }
alert('old = '+oldRegId);
            var parentElement = document.getElementById('registration');
            var listeningElement = parentElement.querySelector('.waiting');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        });

        push.on('error', function(e) {
            console.log("push error = " + e.message);
        });
        push.on('notification', function(notification) {
            console.log('notification event');
			alert(JSON.stringify([notification]));
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            ); 
       });
    }
	function goToUrl(){
		var  networkConnectionType =  navigator.network.connection.type;
		if(networkConnectionType=='none'){
			loader();
			var element = document.getElementById('message');
			element.innerHTML = 'Please connect to your internet connection and try again!';
			alert(element.innerHTML);
			return false;
		}
		else{
		//	var body = document.getElementById('textBody');
		//	body.innerHTML = '<div id="loading"><img id="loading-image" src="skillAdda.jpg" alt="SkillAdda" /></div><div id="loading1" style="display:none;"><div class="error_msg" id="message"></div><br><br><div class="error_log" id="log_msg"></div></div>';
			window.open('http://xucorelms.com/nartesting','_self','location=no','hidden=yes','clearsessioncache=yes','toolbar=no','clearcache=yes','fullscreen=yes','hardwareback=no');
			return false;
		}
	}
	function exitWindow(){
		navigator.app.exitApp();
	}
};
