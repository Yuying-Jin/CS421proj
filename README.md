# CMPSC421 Project: WEL ADDONS

### Table of Contents:
* [Screenshots](https://github.com/Yuying-Jin/CS421proj#screenshots)
* [Our idea](https://github.com/Yuying-Jin/CS421proj#our-idea)
* [Team](https://github.com/Yuying-Jin/CS421proj#team)
* [Run the project](https://github.com/Yuying-Jin/CS421proj#run-the-project)
* [Web app behaviors & functions](https://github.com/Yuying-Jin/CS421proj#web-app-behavior)
* [Endpoints](https://github.com/Yuying-Jin/CS421proj#endpoints)
* [Tools used](https://github.com/Yuying-Jin/CS421proj#tools-used)
* [Minimal viable product features](https://github.com/Yuying-Jin/CS421proj#minimal-viable-product-features)

<!-- 
* [Front end & Back end](https://github.com/Yuying-Jin/CS421proj#front-end) 
* [Stretch goals](https://github.com/Yuying-Jin/CS421proj#stretch-goals)
-->

## Screenshots
### Home
![home](https://github.com/Yuying-Jin/CS421proj/blob/project/preview/home.png)
### Gallery
![gallery](https://github.com/Yuying-Jin/CS421proj/blob/project/preview/gallery.png)
### Addon Article
![project entry](https://github.com/Yuying-Jin/CS421proj/blob/project/preview/proj-ENtry.png)

## Our Idea
Our idea for our project is to create a showcase website that will showcase addons we made for various video games (such as skins, game modes, and levels). Each showcased addon will have its own page with development history and pictures & videos. 

## Team
* [Jiayuan Wen](https://github.com/JiayuanWen)
* [Yaoqi Dong](https://github.com/yaoqidong)
* [Yuying Jin](https://github.com/Yuying-Jin)
* [Tommy Fornear](https://github.com/tjf5611)

<br/>

## Run the Project
1. Install `Node.js` and `git` on your system. 
2. Open a terminal (Terminal for Linux, PowerShell or CMD for Windows), navigate to a location of your choice:
   ``` bash
   # Windows
   cd "C:\Path\to\location"

   # Linux
   cd /Path/to/location/
   ``` 
3. Clone this repository using the https protocol:
   ``` bash
   git clone https://github.com/JiayuanWen/Gamexihib.git
   ```
4. Navigate into the repository:
   ``` bash
   # Windows
   cd .\CS421proj

   # Linux
   cd ./CS421proj
   ```
5. Run the project with: 
   ``` bash
   node app.js
   ```
   
   > **📝 NOTE** \
   > If you see the following line: `Server running on URL: http://localhost:3000`, the project is running correctly. 
   > 
   > If you encounter any issue, feel free to open an issue [here](https://github.com/Yuying-Jin/CS421proj/issues).

6. Open a browser and enter `http://localhost:3000` for URL, note that the protocol is `http` not `https`.

<!--
## Front end
Uses EJS(html), CSS, and frontend JavaScript files to determine the appearance and placement of text, images, and videos for the site’s pages. Some frontend JavaScript scripts are used to pass queries to backend. 

## Back end
Uses Node.js to run server. Uses Express to receive page requests and render associating EJS(html) and accommodating CSS, image, and video files into web pages.
-->


## Web App Behavior
* **Navigation hyperlinks in sidebar, header, and footer** \
Hyperlinks to sidebar, header, and footer. Allow users to jump to other pages conveniently.


* **Stylized interactive text and images** \
If users hover on a hyperlink or clickable text, the text color changes. If users hover on a clickable image, the image performs a zoom animation.


* **Gallery page & stylized content listing** \
All addons are listed in grid fashion and classified based on their associated game. Each addon includes a thumbnail and title. Users will be able to click on a thumbnail and be directed to the addon’s page.


* **One endpoint, dynamic content** \
All addons in Gallery lead to one page, but display different content depend on the addon you clicked. 


* **Background video for each page** \
The background of all pages of the site is animated with either video or custom made animation.


* **Proper error handling** \
Redirect to error page to the users when accessing non-endpoint or unauthorized endpoints. (such as 404 for nonexistent pages). 

* **Redirect on mistyped path** \
Redirect users to correct path if potential incorrect path is entered. (Ex. ‘/about’ and ‘/us’ for About Us;‘ /home’, ‘/index’ and ‘/main’ for homepage)

* **Contact information pop-up** \
There are “Contact” buttons under each developer’s name in About Us page, click on one of those buttons shows the associated developer’s role in development and their contact information. 



## Endpoints
* **Home** \
The home page contains a short description of the site’s purpose and two buttons to either Gallery or About Us.


* **Gallery** \
The gallery lists the addons in a grid fashion. Each addon is a button that directs the user to that addon’s page.


* **About Us** \
The about us page contains a brief description of ourselves and “Contact” buttons to show our role in development and contact information.


* **Addon description pages** \
Pages for individual addons that will describe and give information on that addon.


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


* The Gallery page will display thumbnails and titles of showcased addons in a grid fashion. Each thumbnail is clickable and will direct users to the item’s dedicated page. Each thumbnail will perform a small zoom animation on mouse hover. 

* Each addon’s page will have pictures, videos, description, and development history associated with said addon, similar to a wiki entry. If the addon is publicly available, a hyperlink to the addon’s download links will be added to the end of the addon’s page. 

* The error page will display the error code to the user, common error codes such as 404 or 202 will have a description below the code. The page will still follow the color scheme of the other pages and will still contain the header and footer.

* For the homepage, Gallery, and About Us, the background will play a video consisting of various showcased addons in action. The main body of these pages will be a static color so that the background video is only visible from the sides.

* Sidebar will appear for Gallery and each addon’s page for easier page navigation mid-article.

* Interactive text, such as hyperlinks, will change color on hover.

* The About Us page will contain information about the developers and the website. It will also contain our contact information so that the users may contact us. 

<!--
## Stretch Goals
* Implementing a search function and a search result page that will allow the user to search for a specific addon(s).

* Implementing a sorting function in Gallery and Search Result that will sort the addon thumbnails alphabetically or by their release date.

* Implement comment API, which allows users to post comments with or without an account at the bottom of each item’s page (Emojis, pictures, and GIFs are also allowed).
-->
