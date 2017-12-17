/**
 * Track requests
 * 
 * @author Felipe Pereira
 * License: MIT
 * 
 * github: 
 */
var trackingJS = (function (window) {
    var url = null;
    var urlOfActivation = null;
    var ACTIVITIES_ENTRY = 'activities';
    var EMAIL_ENTRY = 'email';

    // Register for non ajax requests
    window.addEventListener("load", function () {
        sendStatistic();
    });

    var sendStatistic = function () {
        if (url == null) {
            throw "No url supplied to trackingJS. You need to call trackingJS(someUrl) in order to get trackingJS monitoring the activities navigation";
        }

        var activities = getActivitiesFromLocalstorage();
        activities.push({
            url: window.location.href,
            date: new Date()
        });

        // Decides whether send data to localstorage or backend
        var userEmail = getUserEmail();
        if (userEmail) {
            sendDataToBackend(userEmail, activities);
        } else {
            updateActivitiesInLocalstorage(activities);
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
            cleanLocalstorageActivities(userActivities);
        });
    }

    var updateActivitiesInLocalstorage = function (activities) {
        localStorage.setItem(ACTIVITIES_ENTRY, JSON.stringify(activities));
    }

    var getActivitiesFromLocalstorage = function () {
        return JSON.parse(localStorage.getItem(ACTIVITIES_ENTRY) || '[]');
    }

    var getUserEmail = function () {
        return localStorage.getItem(EMAIL_ENTRY);
    }

    var cleanLocalstorageActivities = function (activities) {
        activities = [];
        localStorage.setItem(ACTIVITIES_ENTRY, JSON.stringify(activities));
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
        localStorage.setItem(EMAIL_ENTRY, data);
        console.log('usuario ' + data + " ativado com sucesso ")
    }

    return {
        config: config,
        activateUser: activateUser
    };

})(window);
