Project #7 of the OPENCLASSROOMS Web Developer Training

The objective here was to create an "Airbnb-like" website using React.js

Objectives:
Develop the entire application and its components using React, following the provided Figma mockups. Reusable components should be created for the tabbed sections and the photo carousel.

Back-end / Data:
A JSON file including all the datas of the differents hosts was provided.


Functional Specifications:


For scrolling through photos in the gallery (Gallery component):
If the user is on the first image and clicks "Previous Image," the gallery will display the last image.
Conversely, when the displayed image is the last one in the gallery, if the user clicks "Next Image," the gallery will display the first image.
If there is only one image, the "Next" and "Previous" buttons will not appear.
The gallery must always maintain the same height as indicated in the Figma mockup. Therefore, images will be cropped and centered within the image frame.
Collapse:

By default, Collapses are closed when the page is initialized.
If the Collapse is open, a click by the user will close it. Conversely, if the Collapse is closed, a click will open it.
Technical Specifications:

-Divide into modular and reusable components.
-Logical file structure.
-Use of events.
-Utilize lists by iterating over them.
-Use of props between components.
-The 404 page is displayed for any nonexistent route or if a value present in the URL is not part of the provided data.

Languages Used:
HTML5 / CSS3 / SASS / JavaScript / React+Vite


To start the repo:
- Clone the project
- npm install
- npm run dev 
