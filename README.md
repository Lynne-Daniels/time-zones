# time-zones
Time Zone Conversion Utility

Phase 1

Create display of 4 main USA time zones and UTC.
Onload, populate all zones with current time in that zone.  
Synchronize the time in all these zones - make update function  
Allow user to change the time in any zone  
Re-synchronize all the zones on update - make an object in UTC to act as a master clock.  It updates when user changes time.  It calls a display update function when it has been changed.  
Allow user to collapse or expand any zone  
Use local storage to remember user's hide/show (collapse/expand) preferences  


Phase 2 (optional) 
Add toggle between 12 and 24 hour clocks.  Local Storage can remember each choice.
Add current date and user defined date.  
Update display to reflect date is or is not during daylight savings time  
Add all Time Zones in US?  US Territories? entire World?  Space?  
gets complicated - https://www.timeanddate.com/services/api/time-api.html has an API with free trail, $400/yr after 3 months  

12 US Time Zone areas in use now, more after daylight savings ends, still more if Puerto Rice, Guam etc - begin with main four for now  

Other Features to consider:

Description on mouseover of each time zone, especially UTC.

