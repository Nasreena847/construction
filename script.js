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

