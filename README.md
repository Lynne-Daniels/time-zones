# time-zones
Time Zone Conversion Utility

Phase 1

Create display of 4 main USA time zones.
Onload, populate all zones with current time in that zone.  
Synchronize the time in all these zones - make update function  
Allow user to change the time in any zone  
Re-synchronize all the zones on update - make an object in UTC to act as a master clock.  It updates when user changes time.  It calls a display update function when it has been changed.  
Allow user to collapse or expand any zone  
Use local storage to remember user's hide/show (collapse/expand) preferences  


Phase 2 (optional) 
Add UTC time zone.
Validate user input - replace textbox with dropdownmenus.  (See if they can appear seamless until click/hover/touch).  Remember to disallow < 2012 or > 2022, or use larger momentjstz data file.
Add toggle between 12 and 24 hour clocks.  Or show both? Local Storage can remember each choice.
Add all Time Zones in US?  US Territories? entire World?  Space?  
12 US Time Zone areas in use now, more after daylight savings ends, still more if Puerto Rice, Guam etc - begin with main four for now  
Description popup on mouseover of each time zone.


