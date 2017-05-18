var mainClock = {
    time: '',
    update: function(timeStr){//called on update to any text box sets main clock to user choice
        this.time = moment(timeStr);

    },
    initialize: function(){
        this.time = Date.now();
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
      }
    return clocks;
}
function updateClocks(clock, newTime){
    //triggers on update to time field
}
function initializeClocks(clock, newTime){
    var timeDisplay = document.getElementById('EDT');
    //TODO get clue of pattern.  need to set interna first, then sort out display
    timeDisplay.value = timeStr;
}

function validateTime(newTime){
    //make user enter a valid time
}

zonesDisplayed= [//maps ids to Momentjs names ADD ANY NEW CLOCKS HERE
    {ET: 'America/New_York'},
    {CT: 'America/Chicago'},
    {MT: 'America/Denver'},
    {PT: 'America/Los_Angeles'}
   ];


function renderNYClock(timeStr, abbr, zone, offset){
    document.getElementById('ET').value = timeStr;
    document.getElementById('america-new-york-abbr').innerText = abbr;
    document.getElementById('america-new-york-zone').innerText = zone;
    document.getElementById('america-new-york-offset').innerText = offset;
}
function renderChicagoClock(timeStr, abbr, zone, offset){
    document.getElementById('CT').value = timeStr;
    document.getElementById('america-chicago-abbr').innerText = abbr;
    document.getElementById('america-chicago-zone').innerText = zone;
    document.getElementById('america-chicago-offset').innerText = offset;
}
function renderDenverClock(timeStr, abbr, zone, offset){
    document.getElementById('MT').value = timeStr;
    document.getElementById('america-denver-abbr').innerText = abbr;
    document.getElementById('america-denver-zone').innerText = zone;
    document.getElementById('america-denver-offset').innerText = offset;
}
function renderLosAngelesClock(timeStr, abbr, zone, offset){
    document.getElementById('PT').value = timeStr;
    document.getElementById('america-los-angeles-abbr').innerText = abbr;
    document.getElementById('america-los-angeles-zone').innerText = zone;
    document.getElementById('america-los-angeles-offset').innerText = offset;
}
function initializeMainClock(time, utcoff){
    var currentTime = new Date();
    console.log('hrer',currentTime);
    var UTCstring = currentTime.getUTCHours() + ':' + currentTime.getUTCMinutes();
    //DOTO fix formatting
    return UTCstring;
}
/*Below code is from http://momentjs.com/timezone/docs/ Moment.js also provides a hook for the 
long form time zone name. Because these strings are generally localized, Moment Timezone does 
not provide any long names for zones.
To provide long form names, you can override moment.fn.zoneName and use the zz token.*/
var abbrs = {
    EST : 'Eastern Standard Time',
    EDT : 'Eastern Daylight Time',
    CST : 'Central Standard Time',
    CDT : 'Central Daylight Time',
    MST : 'Mountain Standard Time',
    MDT : 'Mountain Daylight Time',
    PST : 'Pacific Standard Time',
    PDT : 'Pacific Daylight Time',
};

moment.fn.zoneName = function () {
    var abbr = this.zoneAbbr();
    return abbrs[abbr] || abbr;
};

//TESTS
/*<input
   type       = "text" 
   onchange   = "myHandler();"
   onkeypress = "this.onchange();"
   onpaste    = "this.onchange();"
   oninput    = "this.onchange();"
/>*/


function myHandler(zone){

    console.log('onchange fired', zone, document.getElementById('ET').value);
    mainClock.update(document.getElementById(zone).value);
    renderAllClocks();
}
var c = moment.tz(Date.now(), "America/New_York");
var d = moment.tz(Date.now(), "America/Chicago");
console.log('momentTest: ', c.format(), d.format());

mainClock.initialize();
function renderAllClocks(){
    renderNYClock(moment.tz(mainClock.time, "America/New_York").format(),
    moment.tz(mainClock.time, "America/New_York").format('z'),
    moment.tz(mainClock.time, "America/New_York").format('zz'),
    moment.tz(mainClock.time, "America/New_York").format('Z'));

    renderChicagoClock(moment.tz(mainClock.time, "America/Chicago").format(),
    moment.tz(mainClock.time, "America/Chicago").format('z'),
    moment.tz(mainClock.time, "America/Chicago").format('zz'),
    moment.tz(mainClock.time, "America/Chicago").format('Z'));

    renderDenverClock(moment.tz(mainClock.time, "America/Denver").format(),
    moment.tz(mainClock.time, "America/Denver").format('z'),
    moment.tz(mainClock.time, "America/Denver").format('zz'),
    moment.tz(mainClock.time, "America/Denver").format('Z'));

    renderLosAngelesClock(moment.tz(mainClock.time, 'America/Los_Angeles').format(),
    moment.tz(mainClock.time, 'America/Los_Angeles').format('z'),
    moment.tz(mainClock.time, 'America/Los_Angeles').format('zz'),
    moment.tz(mainClock.time, 'America/Los_Angeles').format('Z'));
}
renderAllClocks();
/*
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
//clockTest = [{"name":"EDT","utcOffset":-4},{"name":"CDT","utcOffset":-5},{"name":"MDT","utcOffset":-6},{"name":"PDT","utcOffset":-7}];
//Test.assertSimilar(buildClocks(timeZones),clockTest, 'function buildClocks should build four clocks');

//console.log(formatTime(1,2));
*/