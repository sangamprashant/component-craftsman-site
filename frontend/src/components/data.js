const TimeLineData = [
    {
      id: 1,
      side: "left", // Specify whether the item should be displayed on the left or right side of the timeline
      iconClass: "fa fa-code-fork", // (Optional) CSS class for an icon (if any)
      title: "Title 1", // Specify the title of the timeline item
      content: "Description for item 1", // Specify the content or description of the timeline item
      link: "https://example.com", // (Optional) Specify a link for more information
    },
    {
      id: 2,
      side: "right",
      title: "Title 2",
      content: "Description for item 2",
      link: "https://example.com",
      render: (
        <>
          <p>hello</p>
          <p>render custom data</p>
        </>
      ),
    },
    // Add more items as needed
  ];
  
  
  
  const featureData = [
      {
        id: 1,
        imgSrc: "https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png",
        alt: "Flexbox Feature",
        title: "Flexbox Featured",
        description: "This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox."
      },
      {
        id: 2,
        imgSrc: "https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png",
        alt: "CSS Grid Navigation",
        title: "CSS Grid Navigation",
        description: "While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both."
      },
      {
        id: 3,
        imgSrc: "https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg",
        alt: "Basic HTML5",
        title: "Basic HTML5",
        description: "This pen contains basic html to setup the page to display the responsive navbar."
      },
      {
        id: 4,
        imgSrc: "https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg",
        alt: "Basic HTML5",
        title: "Basic HTML5",
        description: "This pen contains basic html to setup the page to display the responsive navbar."
      },
      {
        id: 5,
        imgSrc: "https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg",
        alt: "Basic HTML5",
        title: "Basic HTML5",
        description: "This pen contains basic html to setup the page to display the responsive navbar.",
        render: <>
          <h1>hello</h1>
          <p>Custom data rendering</p>
        </>
      }
    ];
    
  
  export { TimeLineData ,featureData };
  