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

    ├── base                // Base styles. Styles placed here should be available anywhere in the application
        ├── base            // Demos to illustrate styles and interactions for the style guide
        ├── labels          // Custom styles that overwrite bootstrap
        ├── typography      // the properties related to fonts
     
    └── components
        ├── button          // Custom style for the buttons
        ├── icons          // Custom style for the icons
    
    └── layout
        ├── header            // style for the header section
        ├── footer            // style for the footer section
        ├── gallery          // style for the gallery sections
        ├── team            // style for team section
    
    └── pages
        ├── home            // style for the main 
        
    └── main.scss      // Imports of all the base stylesheets

└── index.html
└── package.json