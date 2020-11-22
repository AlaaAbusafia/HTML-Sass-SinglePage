# koda-exam
Static single page that reproduces the design as a mobile ready page. 
The page has been built with HTML, HTML5, CSS,CSS3 and CSS preprocessor (Sass).
And it extended with package manager.
The Bootstrap framwork has been added with its dependencies like jquery and popper.

To launch the page:
type --> npm install
then --> npm start
 

Project Root
└── assets
└── css
    ├── style.css           //render the sass styeles into css 
└── sass
    ├── abstracts                 
        ├── mixins           // the most used multiple inheritance
        ├── variables        // Variables used in the custom theme

    ├── base                // Styles placed here should be available anywhere in the application
        ├── base            // styles for the whole page can be affect all styles
        ├── labels          // custom styles that overwrite bootstrap
        ├── typography      // the properties related to fonts
     
    └── components
        ├── button          // Custom style for the buttons
        ├── icons           // custom style for the social icons
        ├── colored-blocks  // each block has its own background color and 
                            // when hover the background color slides to cover the whole block
    
    └── layout
        ├── header            // styles for the header section
        ├── navbar            // Adding special effect style for the navbar when it respond to mobile  
        ├── services          // styles the services section with colored blocks and hover effect
        ├── gallery          // styles for the gallery sections that shows some photoes 
                            //  and when hover some description appear
        ├── cards            // styles for cards section that shows the team member
        
        ├── footer            // styles for the footer section

    └── pages
        ├── home            // styles for the main page
        
    └── main.scss      // Imports of all stylesheets

└── index.html
└── package.json