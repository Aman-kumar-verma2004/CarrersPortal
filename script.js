 // Sample job data
 const jobs = [
    {
        title: "Senior Software Engineer",
        company: "Tech Corp",
        location: "San Francisco, CA",
        type: "full-time",
        experience: "senior",
        salary: "100k-150k",
        description: "Join our team to build scalable solutions using cutting-edge technologies.",
        logo: "https://via.placeholder.com/60"
    },
    {
        title: "UX/UI Designer",
        company: "Design Studio",
        location: "Remote",
        type: "full-time",
        experience: "mid",
        salary: "50k-100k",
        description: "Create beautiful and intuitive user experiences for our clients.",
        logo: "https://via.placeholder.com/60"
    }
    // Add more job listings as needed
];

function filterJobs() {
    const jobSearch = document.getElementById('jobSearch').value.toLowerCase();
    const locationSearch = document.getElementById('locationSearch').value.toLowerCase();
    const companySearch = document.getElementById('companySearch').value.toLowerCase();
    const jobType = document.getElementById('jobType').value;
    const experienceLevel = document.getElementById('experienceLevel').value;
    const salaryRange = document.getElementById('salaryRange').value;

    const filteredJobs = jobs.filter(job => {
        return (!jobSearch || job.title.toLowerCase().includes(jobSearch)) &&
               (!locationSearch || job.location.toLowerCase().includes(locationSearch)) &&
               (!companySearch || job.company.toLowerCase().includes(companySearch)) &&
               (!jobType || job.type === jobType) &&
               (!experienceLevel || job.experience === experienceLevel) &&
               (!salaryRange || job.salary === salaryRange);
    });

    displayJobs(filteredJobs);
}

function displayJobs(jobsToShow) {
    const jobGrid = document.getElementById('jobGrid');
    jobGrid.innerHTML = '';

    jobsToShow.forEach(job => {
        const jobCard = `
            <div class="job-card">
                <img src="${job.logo}" alt="${job.company} Logo" class="company-logo">
                <h2 class="job-title">${job.title}</h2>
                <p class="company-name">${job.company}</p>
                <p class="job-details">📍 ${job.location} • 💼 ${job.type}</p>
                <p class="job-details">💰 ${job.salary}</p>
                <p class="job-description">${job.description}</p>
                <button class="apply-btn">Apply Now</button>
            </div>
        `;
        jobGrid.innerHTML += jobCard;
    });
}

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Initial display of all jobs
displayJobs(jobs);