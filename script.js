console.log('running js file')

function showContainer(containerId, link) 
{
    // Hide all containers
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
        container.classList.remove('active');
    });

    // Show the selected container
    var selectedContainer = document.getElementById(containerId);
    if (selectedContainer) {
        selectedContainer.classList.add('active');
    }

    // Remove 'active' class from all links
    var links = document.querySelectorAll('.page a');
    links.forEach(function(link) {
        link.classList.remove('active');
        
    });

    // Add 'active' class to the clicked link
        link.classList.add('active');
}

function hideContainers() 
{
    // Hide all containers and remove 'active' class from all links
    var containers = document.querySelectorAll('.container');
    var sections = document.querySelectorAll('section');

    containers.forEach(function(container) {
        container.classList.remove('active');
    });
   
}

const wrappers = document.querySelectorAll(".container");
const closebtns = document.querySelectorAll(".closebtn");


closebtns.forEach(function(closebtn, index) {
    closebtn.onclick = function() {
        wrappers[index].classList.remove('active');
        // Remove 'active' class from all links
    var links = document.querySelectorAll('.page a');
    links.forEach(function(link) {
        link.classList.remove('active');
       
    });

    };
});



function container1() {
    var contactSection = document.getElementById('contact');
    contactSection.classList.toggle('active');
    hideSidebar();

}

document.addEventListener('click', function (e) {
    var contactSection = document.getElementById('contact');
    if (!contactSection.contains(e.target) && e.target.tagName !== 'A') {
        contactSection.classList.remove('active');
    }
});
    


var isSidebarOpen = false;

function showSidebar() {
  var sidebar = document.getElementById('side-bar');
  sidebar.style.display = 'flex';
  isSidebarOpen = true;
  
}

function hideSidebar() {
  var sidebar = document.getElementById('side-bar');
  sidebar.style.display = 'none';
  sidebar.style.animation = 'scale-out-hor-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;'
  isSidebarOpen = false;
}

document.addEventListener('mouseup', function (event) {
  var sidebar = document.getElementById('side-bar');

  // Check if the sidebar is open and the click is outside the sidebar
  if (isSidebarOpen && !sidebar.contains(event.target)) {
    hideSidebar();
  }
});


// Home page Text Animation

const text_home = document.querySelector(".sec-text");
const first_text = document.querySelector(".first-text");

const textLoad = function(){
    setTimeout(function () {
        text_home.textContent = "Developer";
    }, 0);
    setTimeout(function () {
        text_home.textContent = "Freelancer";
    }, 4000);
    setTimeout(function () {
        text_home.textContent = "Designer";
    }, 8000);
    setTimeout(function () {
        text_home.textContent = "Engineer";
        // Hide "I'm a" text after "Engineer" is displayed
    }, 12000);
    setTimeout(function () {
        first_text.classList.add("hidden");
        text_home.textContent = "Build your dream Today";
        

    }, 16000);
    setTimeout(function () {
        // Show "I'm a" text after a delay
        first_text.classList.remove("hidden");
    }, 20000);
}

textLoad();
setInterval(textLoad, 20000);


  
function applyAnimation() {
    let divider = document.querySelectorAll('.divider');
    function addCssClassesToImages(entries, observer) {
      entries.forEach(entry => {
        let screenWidth = window.innerWidth;
        if (entry.isIntersecting) {
            console.log('intersected')
          const index = entry.target.getAttribute('data-index');
          const divide = document.querySelector(`.divider[data-index="${index}"]`);
          divide.classList.add('scale-up-ver-top');
          observer.unobserve(entry.target);
        } if (screenWidth <= 1175) {
          const index = entry.target.getAttribute('data-index');
          const divide = document.querySelector(`.divider[data-index="${index}"]`);
          divide.classList.remove('scale-up-ver-top');
          divide.classList.add('scale-up-ver-center');
        }
      });
    }
    let observer = new IntersectionObserver(addCssClassesToImages, {
      root: null,
      threshold: 0.1
    });
    divider.forEach(divide => {
      observer.observe(divide);
    });
  
}

applyAnimation()
document.addEventListener('DOMContentLoaded', applyAnimation);
window.addEventListener('resize', applyAnimation);




const textContainers = document.querySelectorAll('.text-fade');

const textContainer = function(){
// Options for the IntersectionObserver
const options = {
root: null, // use the viewport as the root
rootMargin: '0px', // no margin
threshold: 0.5 // trigger when half of the text container is visible
};

// Callback function when a text container comes into view
const callback = (entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
  // Slide the text in
  entry.target.style.opacity = '1'
  entry.target.style.transform = 'translateX(0)'
  entry.target.style.pointerEvents = 'auto'
  // Stop observing since we don't need it anymore
  observer.unobserve(entry.target);
}
});
};

// Create the IntersectionObserver for each text container
textContainers.forEach(textContainer => {
const observer = new IntersectionObserver(callback, options);
observer.observe(textContainer);
});
}

textContainer()

function activeButton(){
  console.log('active button fnc is active')
      const goldBtn = document.getElementById('gold-btn');
      const SilverBtn = document.getElementById('silver-btn');
      const premiumBtn = document.getElementById('premium-btn');
      const goldContent = document.getElementById('goldContent');
      const silverContent = document.getElementById('silverContent');
      const premiumContent = document.getElementById('premiumContent')
    
      // Function to add 'visible' class and remove 'hidden' class
      const showContent = (element) => {
          element.classList.remove('hidden');
          element.classList.add('visible');
      };
  
      // Function to add 'hidden' class and remove 'visible' class
      const hideContent = (element) => {
          element.classList.remove('visible');
          element.classList.add('hidden');
      };

      showContent(premiumContent);
      hideContent(goldContent);
      hideContent(silverContent);
     
      goldBtn.addEventListener('click', function() {
        showContent(goldContent);
        hideContent(silverContent);
        hideContent(premiumContent) 
      });
    
      SilverBtn.addEventListener('click', function() {
          hideContent(goldContent);
        showContent(silverContent);
        hideContent(premiumContent)
      });
  
      premiumBtn.addEventListener('click', function() {
        console.log('focus button clicked')
        hideContent(goldContent);
        showContent(premiumContent);
        hideContent(silverContent);
       
     });

     
  }
activeButton()