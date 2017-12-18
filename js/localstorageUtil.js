var dbUtil = (function () {
    var ACTIVITIES_ENTRY = 'activities';
    var EMAIL_ENTRY = 'email';

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

    var persistEmail = function(data) {
        localStorage.setItem(EMAIL_ENTRY, data);
    }

    return {
        updateActivities: updateActivitiesInLocalstorage,
        getActivities: getActivitiesFromLocalstorage,
        getUserEmail: getUserEmail,
        cleanActivities: cleanLocalstorageActivities,
        persistEmail: persistEmail
    };
})();
