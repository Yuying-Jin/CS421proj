# CMPSC421 Project: Weldon's Portfolio Site
**Go to "Project" branch for actual project source code.*
<br>
<br>
## Team Name
Underwork

## Team Members 

* Yaoqi Dong

* Yuying Jin

* Tommy Fornear

* Jiayuan Wen

## Our Idea
Our idea for our project is to create a portfolio website that will showcase projects we made for various video games (such as skins, game modes, and levels). Each showcased project will have its own page with development history and pictures (with videos if applicable). 

## Front end
Uses EJS(html) and CSS files to determine the appearance and placement of text, images, and videos for the site’s pages. Uses EJS(html) to send page requests to backend.

## Back end
Uses Node.js to run basic server. Uses Express to receive page requests then render associating EJS(html) and accommodating CSS files into web pages.

## Features
* Navigation hyperlinks in sidebar, header, and footer  
Adding hyperlinks to sidebar, header, and footer to allow users to jump to other pages conveniently. 

* Stylized interactive text and images  
If users hover on a hyperlink or clickable text, the text color will change. If users hover on a clickable image, the image will perform a zoom animation. 

* Gallery page & stylized content listing  
All projects will be listed in grid fashion and classified based on their associated game. Each project will have a square thumbnail with its title at the center. Users will be able to click on a thumbnail then directed to the project’s page.

* Appropriate background video for each page  
The background of all pages of the site will be animated with a video. For the homepage, About Us, Gallery, and error page, the background video will show clips of various projects in action. For each project’s page, the background video will show only clips associated with that project. 

* All pages load properly and accessible  
All pages will be accessible by the user and load properly with no visual glitch nor errors.

* Proper error handling  
Properly handle error code and display it to the users (such as 404 for nonexistent pages). 

## Endpoints
* Home  
The home page will contain a short description of the site and will have an animated background on the side.

* Gallery  
The gallery will list the item available in a grid fashion and can be sorted alphabetically or by the date they were released(sorting is a stretch-goal).

* About Us  
The about us page will give a brief description of ourselves and will also contain our contact information.

* Dedicated pages for projects  
Pages for individual projects that will describe and give information on that given project. Unlike all the other pages, its background will be entirely animated (Dimmed for visibility).

<sub>*All pages will contain a header and a footer that will navigate to other pages of the site. The footer will also contain copyright and contact information.</sub>

## Tools Used
* Express
* Node.js
* WebStorm
* Bootstrap


## Minimal Viable Product Features
* Colored pages, including headers, sidebar, footers, text, and body.


* The head and footer of every page will have the following navigation links: Home, Gallery,  and About Us. The footer will also contain website copyright, and contact information (ex: developer email). 


* The homepage will have the website’s title, under the title is a short description of what the website is showcasing. Below both title and description are navigation buttons for Gallery and About Us, clicking on them will direct users to the associated page.


* The Gallery page will display thumbnails and titles of showcased projects in a grid fashion. Each thumbnail is clickable and will direct users to the item’s dedicated page. Each thumbnail will perform a small zoom animation on mouse hover. 

* Each project’s page will have pictures, videos, description, and development history associated with said project, similar to a wiki entry. If the project is publicly available, a hyperlink to the project’s download page will be added to the end of the project’s page. 

* The error page will display the error code to the user, common error codes such as 404 or 202 will have a description below the code. The page will still follow the color scheme of the other pages and will still contain the header and footer.

* For the homepage, Gallery, and About Us, the background will play a video consisting of various showcased projects in action. The main body of these pages will be a static color so that the background video is only visible from the sides.

* For each project’s page, the background will play a video related to that project only. The body will be semi-transparent so that the background video is fully visible but dark enough to not disrupt reading. 

* Sidebar will appear for Gallery and each project’s page, not the case for Home and About Us.

* Interactive text, such as hyperlinks, will change color on hover.

* The About Us page will contain information about the developers and the website. It will also contain our contact information so that the users may contact us. 

## Stretch Goals
* Implementing a search function and a search result page that will allow the user to search for a specific project(s).

* Implementing a sorting function in Gallery and Search Result that will sort the project thumbnails alphabetically or by their release date.

* Implement comment API, which allows users to post comments with or without an account at the bottom of each item’s page (Emojis, pictures, and GIFs are also allowed).

