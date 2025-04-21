// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
    
// });



// let btn = document.querySelector("#menu")
// let currState = "hidden"

// btn.addEventListener("click", () => {
//     if (currState === "hidden") {
//         currState = "block" // <- fixed this line
//         document.getElementById("list").style.display = "block"
//         document.getElementById("nav").style.height = "auto"
//         document.getElementById("main").style.paddingTop = "15vh"
//     } else {
//         currState = "hidden"
//         document.getElementById("list").style.display = "none"
//         document.getElementById("nav").style.height = "auto"
//         document.getElementById("main").style.paddingTop = "0vh"
//     }
// })


// Initialize Locomotive Scroll with mobile compatibility
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smartphone: {
      smooth: true
    },
    tablet: {
      smooth: true
    }
  });
  
  // Custom cursor
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.createElement('div');
  cursorFollower.classList.add('cursor-follower');
  document.body.appendChild(cursorFollower);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  });
  
  // Cursor hover effects
  const hoverElements = document.querySelectorAll('a, button, #box1, #box2, #box3, #box4, #boxphp, #boxmysql, #boxmongodb, #boxhtml, #boxcss, #boxoffice, #boxpost, #boxgit, #menu');
  
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
      cursorFollower.style.borderColor = '#fff';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorFollower.style.borderColor = '#F5E41B';
    });
  });
  
  // Smooth menu toggle
  let btn = document.querySelector("#menu");
  let currState = "hidden";
  
  btn.addEventListener("click", () => {
    const list = document.getElementById("list");
    const nav = document.getElementById("nav");
    const main = document.getElementById("main");
    
    if (currState === "hidden") {
      currState = "block";
      list.classList.add('show');
      list.style.display = "block";
      nav.style.height = "auto";
      main.style.paddingTop = "15vh";
    } else {
      currState = "hidden";
      list.classList.remove('show');
      setTimeout(() => {
        list.style.display = "none";
      }, 0.3); // Match this with your CSS transition duration
      nav.style.height = "auto";
      main.style.paddingTop = "0vh";
    }
  });
  
  // Handle mobile touch events
  document.addEventListener('touchstart', (e) => {
    cursor.style.left = e.touches[0].clientX + 'px';
    cursor.style.top = e.touches[0].clientY + 'px';
    cursorFollower.style.left = e.touches[0].clientX + 'px';
    cursorFollower.style.top = e.touches[0].clientY + 'px';
  });
  
  // document.addEventListener('touchmove', (e) => {
  //   cursor.style.left = e.touches[0].clientX + 'px';
  //   cursor.style.top = e.touches[0].clientY + 'px';
  //   cursorFollower.style.left = e.touches[0].clientX + 'px';
  //   cursorFollower.style.top = e.touches[0].clientY + 'px';
  //   e.preventDefault();
  // }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    cursor.style.left = e.touches[0].clientX + 'px';
    cursor.style.top = e.touches[0].clientY + 'px';
    cursorFollower.style.left = e.touches[0].clientX + 'px';
    cursorFollower.style.top = e.touches[0].clientY + 'px';
    // ❌ This line disables scroll
    // e.preventDefault(); 
  }, { passive: false });


  // Better touch device support
if ('ontouchstart' in window) {
  document.body.classList.add('touch-device');
  // Disable custom cursor on touch devices
  cursor.style.display = 'none';
  cursorFollower.style.display = 'none';
} else {
  document.body.classList.add('no-touch-device');
}