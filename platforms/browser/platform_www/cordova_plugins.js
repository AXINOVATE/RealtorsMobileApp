cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-gcmpushplugin/www/gpp.js",
        "id": "cordova-plugin-gcmpushplugin.GCMPushPlugin",
        "pluginId": "cordova-plugin-gcmpushplugin",
        "clobbers": [
            "GcmPushPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-gcmpushplugin": "1.2.0"
}
// BOTTOM OF METADATA
});