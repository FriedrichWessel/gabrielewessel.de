document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling behavior for all internal links
  initSmoothScrolling();
  
  // Adjust mobile layout elements if needed
  adjustMobileLayout();
});

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
  // Get all links that have a hash
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Smooth scroll to element
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Make additional adjustments for mobile layout
 * to match the flyer design more closely
 */
function adjustMobileLayout() {
  if (window.innerWidth < 768) {
    // Force the sections to appear in correct order on mobile
    const mobileContainer = document.querySelector('.container-fluid');
    
    // Additional mobile-specific adjustments could be made here
    // For example, adjusting padding or spacing between elements
  }
  
  // Listen for window resize and adjust accordingly
  window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
      // Mobile adjustments
    } else {
      // Desktop adjustments
    }
  });
}
