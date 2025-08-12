 // Mobile menu toggle
    function toggleMobileMenu() {
        const mobileNav = document.getElementById('mobileNav');
        const mobileMenu = document.querySelector('.mobile-menu');

        mobileNav.classList.toggle('active');

        if (mobileNav.classList.contains('active')) {
            mobileMenu.innerHTML = '<div class="close-icon">&times;</div>'; 
        } else {
            mobileMenu.innerHTML = '<span></span><span></span><span></span>'; 
        }
    }


    // About text toggle
    function toggleAboutText() {
        const aboutText = document.getElementById('aboutText');
        const button = event.target;
        
        if (aboutText.classList.contains('expanded')) {
            aboutText.classList.remove('expanded');
            button.textContent = 'Read More';
        } else {
            aboutText.classList.add('expanded');
            button.textContent = 'Read Less';
        }
    }

    // Skills dropdown toggle
    // Get elements
    const toggle = document.getElementById("customToggle");
    const slider = document.getElementById("toggleSlider");
    const list = document.getElementById("skillsList");

    // Skills data
    const doSkills = `
    <div class="skill-item"><i class="fas fa-lightbulb"></i> Product Strategy</div>
    <div class="skill-item"><i class="fas fa-magnifying-glass"></i> User Research</div>
    <div class="skill-item"><i class="fas fa-object-group"></i> UX Design</div>
    <div class="skill-item"><i class="fas fa-rotate"></i> Agile Methodology</div>
    <div class="skill-item"><i class="fas fa-chart-line"></i> Data Analysis</div>
    <div class="skill-item"><i class="fas fa-users"></i> Stakeholder Management</div>
    <div class="skill-item"><i class="fas fa-road"></i> Product Roadmapping</div>
    <div class="skill-item"><i class="fas fa-file-alt"></i> Requirements Gathering</div>
    <div class="skill-item"><i class="fas fa-rocket"></i> Go-to-Market Strategy</div>
    <div class="skill-item"><i class="fas fa-people-arrows"></i> Cross-functional Collaboration</div>
    `;

    const useSkills = `
    <div class="skill-item"><i class="fas fa-check-circle"></i> Jira</div>
    <div class="skill-item"><i class="fas fa-tasks"></i> ClickUp</div>
    <div class="skill-item"><i class="fas fa-pen-ruler"></i> Figma</div>
    <div class="skill-item"><i class="fas fa-chart-pie"></i> Google Analytics</div>
    <div class="skill-item"><i class="fas fa-sliders"></i> Mixpanel</div>
    <div class="skill-item"><i class="fas fa-comment-dots"></i> Slack</div>
    <div class="skill-item"><i class="fas fa-columns"></i> Trello</div>
    <div class="skill-item"><i class="fas fa-book"></i> Notion</div>
    <div class="skill-item"><i class="fas fa-project-diagram"></i> Miro</div>
    <div class="skill-item"><i class="fas fa-table"></i> Excel</div>
    `;

    // State
    let isDo = true;

    // Function to toggle skills
    function toggleSkills() {
        isDo = !isDo;
        slider.style.transform = isDo ? "translateX(0%)" : "translateX(100%)";
        list.innerHTML = isDo ? doSkills : useSkills;
    }

    // Start auto-toggle every 10 seconds
    let autoToggle = setInterval(toggleSkills, 10000);

    // Reset auto-toggle timer
    function resetAutoToggle() {
        clearInterval(autoToggle);
        autoToggle = setInterval(toggleSkills, 10000);
    }

    // Manual toggle on click + reset timer
    toggle.addEventListener("click", () => {
        toggleSkills();
        resetAutoToggle();
    });

    // Pause auto-toggle on hover
    slider.addEventListener("mouseenter", () => clearInterval(autoToggle));
    slider.addEventListener("mouseleave", resetAutoToggle);


    // Resume download
    function downloadResume() {
        // Create a dummy PDF blob for demonstration
        const resumeContent = `Michelle Amanze - Product Manager Resume\n\nContact: michelle@example.com | LinkedIn: linkedin.com/in/michelle-amanze\n\nEXPERIENCE\nAssociate Product Manager | Tech Company (2022-Present)\n• Led product development for mobile applications serving 100K+ users\n• Conducted user research and A/B testing to optimize conversion rates\n• Collaborated with engineering teams to deliver features on time and within scope\n\nEDUCATION\nBachelor of Science in Business Administration\nUniversity Name (2018-2022)\n\nSKILLS\n• Product Strategy & Roadmapping\n• User Experience Design\n• Data Analysis & A/B Testing\n• Agile/Scrum Methodology\n• Stakeholder Management`;

        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Michelle_Amanze_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            closeMobileMenu();
        });
    });

    // Add active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
