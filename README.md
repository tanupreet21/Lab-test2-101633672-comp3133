# SpaceX Mission Explorer
## COMP 3133 – Lab Test 2 (Angular Application)
# Overview
This Angular application allows users to explore SpaceX launch missions using the public SpaceX REST API.
Users can view a list of missions, filter them by launch year, and see detailed information for each mission.
# Technologies Used
Angular (Standalone Components)
Angular Material (UI Components)
TypeScript
RxJS
SpaceX REST API
HTML / CSS
# Live Demo
https://lab-test2-101633672-comp3133.vercel.app

# Features
1. Mission List
Displays all SpaceX launches

Shows:
Flight Number, 
Mission Name, 
Launch Year, 
Mission Details, 
Rocket Name & Type, 
Mission Patch Image, 
External Links (Article, Wikipedia, Video)

2. Filter by Launch Year

Users can search missions by year 

Uses API endpoint:
https://api.spacexdata.com/v3/launches?launch_year=YYYY

3. Mission Details Page

Displays full details of selected mission

Uses route parameter (/mission/:id)

Shows:

Mission Name, 
Flight Number, 
Launch Year, 
Rocket Info, 
Links (Article, Wikipedia, Video)

# Navigation
Angular Routing used, Seamless navigation between:
List page and Details page. API Endpoints Used

All Missions:
https://api.spacexdata.com/v3/launches

Filter by Year:
https://api.spacexdata.com/v3/launches?launch_year=2020

Mission Details:
https://api.spacexdata.com/v3/launches/{flight_number}

# Components
1. MissionList: 
Fetches and displays all missions. 
Integrates filter component
2. MissionFilter: 
Allows user to input launch year. 
Emits selected year to parent
3. MissionDetails: 
Fetches mission data using route parameter. 
Displays detailed mission info
# Service
SpacexService: 

Handles all API calls:

getAllMissions()

getMissionsByYear(year)

getMissionDetailsById(id)


# Notes
1. Server-Side Rendering (SSR) was removed to ensure proper client-side rendering.
2. Angular standalone components were used instead of NgModules.
3. Change detection handled for asynchronous API calls.

# Author

Tanupreet Kaur (Full Stack Developer)
