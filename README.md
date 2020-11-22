# koda-exam
static single page that reproduces the design as a mobile ready page. 


Project Root
└── assets
└── css
    ├── style.css           //render the sass styeles into css 
└── sass
    ├── abstracts                 
        ├── variables        // Variables used in the custom theme
        ├── mixins           // the most used multiple inheritance

    ├── base                // **Base styles. Styles placed here should be available anywhere in the application**
        ├── base            // styles for the whole page can be affect all styles
        ├── labels          // custom styles that overwrite bootstrap
        ├── typography      // the properties related to fonts
     
    └── components
        ├── button          // Custom style for the buttons
        ├── icons           // custom style for the social icons
        ├── colored-blocks  // each block has its own background color and 
                            // when hover the background color slides to cover the whole block
    
    └── layout
        ├── header            // style for the header section
        ├── footer            // style for the footer section
        ├── gallery          // style for the gallery sections
        ├── cards            // style for cards section
        ├── categories       // style the categories section
        ├── navbar            // Adding special effect style for the navbar when it respond to mobile  
    
    └── pages
        ├── home            // style for the main page
        
    └── main.scss      // Imports of all stylesheets

└── index.html
└── package.json