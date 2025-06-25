
// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = element.offsetTop - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(15, 15, 35, 0.98)';
  } else {
    navbar.style.background = 'rgba(15, 15, 35, 0.95)';
  }
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.goal-card, .example-card, .skill-item, .reward-item');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = card.classList.contains('goal-card') || card.classList.contains('example-card')
        ? 'translateY(-4px)'
        : 'translateX(8px)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'none';
    });
  });
});

// Add click handlers for CTA buttons
document.addEventListener('DOMContentLoaded', () => {
  const joinButtons = document.querySelectorAll('.btn-primary');
  const learnMoreButtons = document.querySelectorAll('.btn-secondary');

  joinButtons.forEach(button => {
    if (button.textContent.includes('Join')) {
      button.addEventListener('click', () => {
        // In a real implementation, this would link to the actual sign-up page
        alert('Join the #dissect channel for more information!');
      });
    }
  });

  learnMoreButtons.forEach(button => {
    if (button.textContent.includes('Learn More')) {
      button.addEventListener('click', () => {
        scrollToSection('overview');
      });
    }
    }
  });
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.goal-card, .example-card, .timeline-item, .submission-item, .join-step');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Purple cursor aura effect
document.addEventListener('DOMContentLoaded', () => {
  // Create cursor aura element
  const cursorAura = document.createElement('div');
  cursorAura.className = 'cursor-aura';
  document.body.appendChild(cursorAura);

  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    cursorAura.style.left = e.clientX + 'px';
    cursorAura.style.top = e.clientY + 'px';
  });

  // Hide aura when mouse leaves window
  document.addEventListener('mouseleave', () => {
    cursorAura.style.opacity = '0';
  });

  // Show aura when mouse enters window
  document.addEventListener('mouseenter', () => {
    cursorAura.style.opacity = '1';
  });
});

// FAQ toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
});

// Add typing effect to hero title (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.title-dissect');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid #6366f1';

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
      } else {
        setTimeout(() => {
          heroTitle.style.borderRight = 'none';
        }, 1000);
      }
    };

    setTimeout(typeWriter, 1000);
  }
});
