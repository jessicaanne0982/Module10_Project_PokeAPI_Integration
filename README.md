# Pok&eacute;Hub

Pok&eacute;Hub is a Pok&eacute;mon application that utilizes HTML5, Bootstrap, and JavaScript to interact with the Pok&eacute; API.  This application offers responsive webpages and content and allows a user to search for their favorite Pok&eacute;mon.  Pok&eacute;mon details are updated dynamically based on the user's interactions. I plan to update this application further to allow the user to view Pok&eacute;mon categorized by Type as well as a page that provides detailed descriptions of each Pok&eacute;mon Ability.

## Installation

There is nothing to install to run this file; however, you will need to download all the associated files into one directory. Once downloaded, simply open the pokeHome.html file, and it will open in your default web browser. You will be able to follow the links on that page as long as the other files have downloaded as well.

## Necessary Files
1. pokeHome.html
2. pokeSearch.html
3. pokeStyles.css
4. static directory and all images inside

## Usage

Open the pokeHome.html file as seen below and click to follow the links.

![Screenshot of the Pok&eacute;Hub Landing Page](static/pokeHubLandingPage.png)
- The user is met with a carousel of popular Pok&eacute;mon on the Landing page.  There, they can navigate to the Search page by clicking the button to or using the link in the Navbar.

![Screenshot of the Pok&eacute;Hub Search Page](static/pokeHubSearchPage.png)

- The Search page offers a simple form for the user to enter either the Pok&eacute;mon's name or ID number.  Clicking the button will display the searched Pok&eacute;mon's name, picture, and type.  A button also appears to inviting the user to click for more details.  If the Pok&eacute;mon name is not recognized, the user is alerted that the name is not valid and to try again.

![Screenshot of the Pok&eacute;Hub Search Page with Initial Results](static/pokeReturnSearch.png)
- Clicking the Details button initializes a Bootstrap Popover window that displays a larger picture of the Pok&eacute;mon as well as its types, abilities, and stats.

![Screenshot of the Pok&eacute;Hub Search Page with Popover Details](static/pokeReturnSearchWithDetails.png)

## GitHub Link
[Module 10 Project - Pok&eacute;API Integration](https://github.com/jessicaanne0982/Module10_Project_PokeAPI_Integration)