// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);

    // Theme toggle handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active state to navigation on scroll
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    // Enhanced scroll animations with sliding effects - repeating on scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    // Function to reset elements to initial state (hidden)
    function resetSectionElements(section) {
    // Reset section label
    const label = section.querySelector('.section-label');
    if (label) {
        label.classList.remove('animate');
    }
    
    // Reset section title
    const title = section.querySelector('.section-title');
    if (title) {
        title.classList.remove('animate');
    }
    
    // Reset section content
    const content = section.querySelector('.about-content, .contact-description');
    if (content) {
        content.classList.remove('animate');
    }
    
    // Reset skill categories
    section.querySelectorAll('.skill-category').forEach(category => {
        category.classList.remove('animate');
    });
    
    // Reset project cards
    section.querySelectorAll('.project-card').forEach(card => {
        card.classList.remove('animate');
    });
    
    // Reset experience items
    section.querySelectorAll('.experience-item').forEach(item => {
        item.classList.remove('animate');
    });
    
    // Reset education items
    section.querySelectorAll('.education-item').forEach(item => {
        item.classList.remove('animate');
    });
    
    // Reset publication items
    section.querySelectorAll('.publication-item').forEach(item => {
        item.classList.remove('animate');
    });
    
    // Reset patent items
    section.querySelectorAll('.patent-item').forEach(item => {
        item.classList.remove('animate');
    });
    
    // Reset leadership items
    section.querySelectorAll('.leadership-item').forEach(item => {
        item.classList.remove('animate');
    });
    
    // Reset service items
    section.querySelectorAll('.service-item').forEach(item => {
        item.classList.remove('animate');
    });
    
    // Reset talk items
    section.querySelectorAll('.talk-item').forEach(item => {
        item.classList.remove('animate');
    });
    
    // Reset contact links
    section.querySelectorAll('.contact-link').forEach(link => {
        link.classList.remove('animate');
    });
}

    // Function to animate elements in a section
    function animateSectionElements(section) {
    // Animate section label
    const label = section.querySelector('.section-label');
    if (label) {
        setTimeout(() => label.classList.add('animate'), 50);
    }
    
    // Animate section title
    const title = section.querySelector('.section-title');
    if (title) {
        setTimeout(() => title.classList.add('animate'), 100);
    }
    
    // Animate section content
    const content = section.querySelector('.about-content, .contact-description');
    if (content) {
        setTimeout(() => content.classList.add('animate'), 200);
    }
    
    // Animate skill categories with stagger
    const skillCategories = section.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        setTimeout(() => category.classList.add('animate'), 300 + (index * 100));
    });
    
    // Animate project cards with stagger
    const projectCards = section.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => card.classList.add('animate'), 200 + (index * 150));
    });
    
    // Animate experience items
    const experienceItems = section.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('animate'), 200 + (index * 100));
    });
    
    // Animate education items
    const educationItems = section.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('animate'), 200 + (index * 100));
    });
    
    // Animate publication items
    const publicationItems = section.querySelectorAll('.publication-item');
    publicationItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('animate'), 200 + (index * 100));
    });
    
    // Animate patent items
    const patentItems = section.querySelectorAll('.patent-item');
    patentItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('animate'), 200 + (index * 100));
    });
    
    // Animate leadership items
    const leadershipItems = section.querySelectorAll('.leadership-item');
    leadershipItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('animate'), 200 + (index * 100));
    });
    
    // Animate service items
    const serviceItems = section.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('animate'), 200 + (index * 50));
    });
    
    // Animate talk items
    const talkItems = section.querySelectorAll('.talk-item');
    talkItems.forEach((item, index) => {
        setTimeout(() => item.classList.add('animate'), 200 + (index * 100));
    });
    
    // Animate contact links with stagger
    const contactLinks = section.querySelectorAll('.contact-link');
    contactLinks.forEach((link, index) => {
        setTimeout(() => link.classList.add('animate'), 300 + (index * 100));
    });
}

    // Main observer for sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Reset first, then animate
                resetSectionElements(entry.target);
                // Small delay to ensure reset is applied before animation
                setTimeout(() => {
                    animateSectionElements(entry.target);
                }, 10);
            } else {
                // Remove animate class when leaving viewport - elements will reset to initial state
                entry.target.classList.remove('animate');
                resetSectionElements(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.observe(section);
    });

    // Smooth scroll behavior enhancement
    document.documentElement.style.scrollBehavior = 'smooth';
});

