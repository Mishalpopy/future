const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    
  },

  {
    id: 3,
    mega_menu: true,
    has_dropdown: true,
    title: "Service",
    link: "/service",
    sub_menus: [
      { link: "/service", title: "Connectivity and Collaboration" }, 
      { link: "/service-details", title: "Network Infrastructure and Security" },
      { link: "/service", title: "Safety, Surveillance, and Automation" }, 
      { link: "/service-details", title: "Digital Transformation and Development" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Partners",
    link: "/",
    
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/",
    
  },


  
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
  
];
export default menu_data;
