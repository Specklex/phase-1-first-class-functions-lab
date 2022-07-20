const returnFirstTwoDrivers = function (drivers) { return drivers.slice(0, 2) };

const returnLastTwoDrivers = function (drivers) { return drivers.slice(drivers.length - 2, drivers.length) }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//allows us to invoke either function from the array

function createFareMultiplier(multiplier) {
    return function (farePrice) {
        return multiplier * farePrice;
    }
    //Help from: 
    //https://www.linkedin.com/pulse/quick-view-higher-order-functions-elie-gakuba
}

function fareDoubler(farePrice) {return (farePrice * 2)}

function fareTripler(farePrice) {return (farePrice * 3)}

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}