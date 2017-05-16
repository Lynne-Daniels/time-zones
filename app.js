var mainClock = {
    time: '',
    setTime: function(){

    },
    getTime: function(){

    }
};
function Clock(name, utcOffset){
    this.name = name;
    this.utcOffset = utcOffset;
}
var timeZones = {
    EDT: -4,
    CDT: -5,
    MDT: -6,
    PDT: -7
};
function buildClocks(timeZones){
    var clocks = [];
    for (var zone in timeZones){
        var clock = new Clock(zone, timeZones[zone]);
        clocks.push(clock);
        console.log(zone, timeZones[zone]);
    }
    return clocks;
}
function updateClocks(clock, newTime){
    //triggers on update to time field
}

function validateTime(newTime){
    //make user enter a valid time
}


//TESTS
var Test = {};
Test.assertEquals = function(actual, expected, testName){
    if (actual === expected){
        console.log('passed [' + testName + ']');
    }else{
        console.log('FAILED [' + testName + ']. Expected "' + expected + '", but got "' + actual + '"');
    }

};
Test.assertSimilar = function(actual, expected, testName){
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if (actual === expected){
        console.log('passed [' + testName + ']');
    }else{
        console.log('FAILED [' + testName + ']. Expected "' + expected + '", but got "' + actual + '"');
    }

};
clockTest = [{"name":"EDT","utcOffset":-4},{"name":"CDT","utcOffset":-5},{"name":"MDT","utcOffset":-6},{"name":"PDT","utcOffset":-7}];
Test.assertSimilar(buildClocks(timeZones),clockTest, 'function buildClocks should build four clocks');