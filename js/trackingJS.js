/**
 * Track requests
 * 
 * @author Felipe Pereira
 * License: MIT
 * 
 * github: 
 */ 
var trackingJS = (function (window, dbUtil) {
    var url = null;
    
    // Register for non ajax requests
    window.addEventListener("load", function () {
        sendStatistic();
    });

    var sendStatistic = function () {
        if (url == null) {
            throw "No url supplied to trackingJS. You need to call trackingJS(someUrl) in order to get trackingJS monitoring the activities navigation";
        }

        var activities = dbUtil.getActivities();
        activities.push({
            url: window.location.href,
            date: new Date()
        });

        // Decides whether send data to localstorage or backend
        var userEmail = dbUtil.getUserEmail();
        if (userEmail) {
            sendDataToBackend(userEmail, activities);
        } else {
            dbUtil.updateActivities(activities);
        }
    }

    var sendDataToBackend = function (userEmail, userActivities) {
        var options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                activities: userActivities
            })
        };
        fetch(url, options).then(function (res) {
            dbUtil.cleanActivities(userActivities);
        });
    }

    /**
     * Configure the lib.
     * 
     * @param {*} backendTrackingServerUrl: the backend the will receive the data 
     */
    var config = function (backendTrackingServerUrl) {
        url = backendTrackingServerUrl;
    };

    var activateUser = function(data) {
        dbUtil.persistEmail(data);
        console.log('usuario ' + data + " ativado com sucesso ")
    }

    return {
        config: config,
        activateUser: activateUser
    };

})(window, dbUtil);
