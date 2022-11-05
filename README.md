# Landing Page Project

## Project description
This is the 2nd project from Udacity Front-end Web developer course.

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality
For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Demo-Preview
![image](https://user-images.githubusercontent.com/15206083/200113496-c0bd32d3-7345-4266-a2a4-e73cfcf6d910.png)

## Table of Contents
* [Project description](#project-description)
* [Demo-Preview](#demo-preview)
* [Installation](#installation)
* [Project Structure/Architecture](#project-structure/architecture)
* [Rubric points addressed](#rubric-points-addressed)

## Installation
- Install VS code for development.
- Running: open index.html by some browser like: Chrome/Safari/FireFox.

## Project Structure/Architecture
css

- styles.css
- custom-button.css

index.html

js

- app.js

README.md

## Rubric points addressed
### 1. Interface and Architecture

**1.1. Architecture**: The project have a structure like the one shown above.

**1.2. Usability**: 
- All features are usable across modern desktop, tablet, and phone browsers.
- A Responsive layout of the landing page have been created to use across all devices.
- the navigation bar is responsive too across all these devices.
- Responsiveness can be verified by inspecting the landing page using the Developer Tools option on Google Chrome Browser.

**1.3. Styling**:
- Styling has been added for active states.
- Set CSS class active state when the element is in the viewport: For active session and active nav bar button
- The active section in the Navbar have been highlighted.

**1.4. HTML Structure**:
There are at least 4 sections that have been added to the page:
- Navigation Bar menu.
- Main content: added some more contents.
- Added button "Go to top of the page" before the footer.
- Added script section to load the Java script code.

### 2. Landing Page Behavior

**2.1. Navigation**: Navigation is built dynamically as an unordered list. Start with empty ul and dynamically build navigation using appendChild, and insertAdjacentHTML.

**2.2. Section Active State**: Added isInViewport fucntion (using .getBoundingClientRect()) to check if element is in the view port
and setActiveSection to set the section/nav button is active.

**2.3. Scroll to Anchor**: 
- Added addEventListener('click',....) to listen to the click event on navBarList
- Use preventDefault() as if there is a default event occurring we need to stop that
- Using scrollIntoView() to scroll to a section.

### 3. Documentation

**3.1. README**: Added project descripton, demo&preview, table of content, Installation, Project-Structure/Architecture, Rubric points addressed

**3.2. Comments**: Comments have been added at the beginning of each procedure and class.

**3.3. Code Quality**: Code has been formatted with consistent, logical, and easy-to-read formatting.