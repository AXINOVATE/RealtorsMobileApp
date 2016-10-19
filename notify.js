var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyBVk5ZGaa2fjgoKUZcaomJ2QKcClboZI1A');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
//message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('cesemcZ8471:APA91bGQkyqSxA0tOuhxQTZNkfOv_CYD948PNVvHpiVYh2D5COWoBTMh8Lh4OFvc1hPX1hraFdRO0Bb6ZxySWcBcH7CtJ49vafp97CwwZnCxmaY-1Tsh2fEtRUTAKf_uHIKePOqtnkyJ');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});