document.addEventListener('DOMContentLoaded',  () =>{
    const portfolio = document.getElementById("portfolio")

    const switchTab = (container_id, id) => {

        portfolio.querySelectorAll(`#${container_id} .tab-content`).forEach(
            page => page.style.display = page.getAttribute("id") === id ? "" : "none"
        )
        portfolio.querySelectorAll(`#${container_id} .tab-link`).forEach(
            link => link.classList[
                link.getAttribute("data-tab") === id ? "add" : "remove"
            ]('active-tab-link')
        )
    }

    const handlerTab = (container_id, id) => {
        portfolio.querySelectorAll(`#${container_id} .tab-link`).forEach(link =>
            link.addEventListener('click', () =>
                switchTab(container_id, link.getAttribute('data-tab'))
            )
        )
        switchTab(container_id, id)
    }

    handlerTab("main-content", "projects")

    // SKILLS

    const dataSkills = [
        { name: "MS Excel", stars: 3 },
        { name: "Python", stars: 4 },
        { name: "R", stars: 5 },
        { name: "SQL", stars: 3 },
        { name: "SAS", stars: 3 },
    ]

    document.getElementById("analysis-skills").innerHTML = `
        <div style="border-bottom: 1px solid #000; text-align: right;">
            Data Analysis
        </div>
        <ul style="font-size: 0.9em;">${dataSkills.map(skill => `
                <li class="flex align-c gap-05">
                    <div style="width: 81px; text-align: right;">${skill.name}</div>

                    <ul class="fgrow-1 flex align-c jus-even skills-logo">
                        ${Array.from({ length: 5 }, (_, i) => `
                            <li>
                                <img 
                                    style="width: 18px; height: 18px;"
                                    src="imgs/${i < skill.stars ? "star-gold" : "star-gray"}.svg"
                                    alt="star logo"
                                >
                            </li>
                        `).join("")}
                    </ul>
                </li>
            `).join("")
        }</ul>
    `

    const webSkills = [
        { name: "CSS3", stars: 5 },
        { name: "Flask", stars: 3 },
        { name: "HTML5", stars: 5 },
        { name: "JavaScript", stars: 4 },
        { name: "Supabase", stars: 3 },
    ]

    document.getElementById("web-dev-skills").innerHTML = `
        <div style="border-bottom: 1px solid #000; text-align: right;">
            Web Development
        </div>
        <ul style="font-size: 0.9em;">${webSkills.map(skill => `
                <li class="flex align-c gap-05">
                    <div style="width: 81px; text-align: right;">${skill.name}</div>

                    <ul class="fgrow-1 flex align-c jus-even skills-logo">
                        ${Array.from({ length: 5 }, (_, i) => `
                            <li>
                                <img 
                                    style="width: 18px; height: 18px;"
                                    src="imgs/${i < skill.stars ? "thumbs-up-blue" : "thumbs-up-grey"}.svg"
                                    alt="thumbs up logo"
                                >
                            </li>
                        `).join("")}
                    </ul>
                </li>
            `).join("")
        }</ul>
    `

    // Projects
    const projects = [
        {
            title: "Monte Carlo Game State Evaluation",
            link:"https://letele.shinyapps.io/tictac-montecarlo",
            description: `
                <p class="line-h-15">
                    An interactive Shiny dashboard that shows how Pure Monte Carlo and Monte Carlo Tree Search learn to evaluate game 
                    states through self-play, using fully simulated data to analyse and compare their statistical behaviour and structural properties.
                </p class="line-h-15">
                <p class="line-h-15"> Tools Used: </p>
                <ul class="lucida flex flex-wrap gap-05 fs-10pt ml-1em">
                    <li>R</li>
                    <li>shiny</li>
                    <li>ggplot2</li>
                    <li>dplyr</li>
                    <li>tidyr</li>
                    <li>irr</li>
                    <li>entropy</li>
                </ul>
            
            `
        },
        {
            title: "NEISS Decision Intelligence",
            link:"https://letele.shinyapps.io/neiss-dashboard/",
            description: `
                <p>A decision intelligence analysis tool for exploring the NEISS injury dataset. </p>
                <p>Explores injury trends across demographics, locations, and age groups.</p>
                <p> Tools Used: </p>
                <ul class="lucida flex flex-wrap gap-05 fs-10pt ml-1em">
                    <li>R</li>
                    <li>shiny</li>
                    <li>ggplot2</li>
                    <li>dplyr</li>
                    <li>tidyr</li>
                    <li>svglite</li>
                </ul>
            
            `
        },
        {
            title: "Hearts Card Game",
            link:"https://letele.github.io/hearts/",
            description: `
                <p>
                    A React application of the Hearts card game inspired by the Microsoft Windows 7 Hearts card game.
                </p>
                <p> Tools Used: </p>
                <ul class="lucida flex flex-wrap gap-05 fs-10pt ml-1em">
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>SVG</li>
                </ul>
            
            `
        },
                {
            title: "Natural Language Processing",
            link:"https://github.com/letele/introduction-to-language-models/tree/main",
            description: `
                <p>An autoregressive character level language model for creating names.</p>
                <p>There are two successive notebooks:</p>
                <ol class="ml-2em line-h-15">
                    <li class="list-decimal mb-05em">
                        <a href="https://github.com/letele/introduction-to-language-models/blob/main/bigram_model.ipynb" 
                            target="_blank" rel="noopener noreferrer"
                        >Bigram model:</a> 
                        <ul class="pl-1em">
                            <li class="list-disc">Defines key concepts of a bigram model and how it can be build.</li>
                            <li class="list-disc">Introduces a single layer neural network using pytorch.</li>
                        </ul>
                    </li>
                    <li class="list-decimal">
                        <a href="https://github.com/letele/introduction-to-language-models/blob/main/mlp_model.ipynb" 
                            target="_blank" rel="noopener noreferrer"
                        >Multi-layer perceptron model:</a> 
                        <ul class="pl-1em">
                            <li class="list-disc">Builds a more powerful language model using neural networks with multi-layer perceptrons.</li>
                            <li class="list-disc">Introduces key concepts in multi-layer perceptrons.</li>
                        </ul>
                    </li>
                </ol>
                <p> Tools Used: </p>
                <ul class="lucida flex flex-wrap gap-05 fs-10pt ml-1em">
                    <li>Python</li>
                    <li>Pytorch</li>
                    <li>Matplotlib</li>
                </ul>
            
            `
        },
        {
            title: "CFOP Algorithms",
            link:"https://cfop-algorithms.vercel.app/",
            description: `
                <p class="line-h-15">
                    Created comprehensive collection of Rubik's cube algorithms using Next.js.
                </p class="line-h-15">
                <p class="line-h-15">
                    Styled all visual drawings with CSS3 without external libraries.
                </p class="line-h-15">
                <p class="line-h-15"> Tools Used: </p>
                <ul class="lucida flex flex-wrap gap-05 fs-10pt ml-1em">
                    <li>Next.js</li>
                    <li>JavaScript</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>Vercel</li>
                </ul>
            
            `
        },
 
    ]

    document.getElementById("projects").innerHTML = projects.map((i,j) => `
        <div class="project-item">
           <div class="flex align-c gap-05 mb-05em">
                <div class="ws-nowrap">[ <small class="lucida">${j+1}</small> ]:</div> 
                <h4 class="ov-hidden">${i.title}</h4> 
                <div class="ws-nowrap">| <a href="${i.link}" target="_blank" rel="noopener noreferrer">link</a></div>
            </div>
            <div style=" border: 1px solid #afaeae;"  
                class="ml-25em p-05em flex-col gap-05"
            >${i.description}</div>
        </div>    
    `).join("")

    // Work
    const workExperience = [
        {
            title: "<b>Montsa Construction (Pty) Ltd</b>, <i>Co-Founder</i>, Maseru, Lesotho.",
            duration: "March 2019 - Present",
            description: [
                "Co-founded a start-up focused on rural water and sanitation projects in Lesotho",
                "Managed construction and WASH projects, including scheduling and stakeholder reporting",
                "Led company data management using <b>Python (pandas)</b> and <b>PostgreSQL</b>"
            ]
        },
        {
            title: "<b>Teflo Contractors</b>, <i>Project Manager (Part-time)</i>, Maseru, Lesotho.",
            duration: "June 2011 - January 2020",
            description: [
                "Managed building construction and water/sanitation projects.",
                "Created project schedules and communicated progress to stakeholders.",
            ]
        },
        {
            title: "<b>CPUT</b>, <i>Library Assistant (Part-time)</i>, Bellville, South Africa.",
            duration: "January 2018 - August 2018",
            description: [
                "Assisted with book circulation and student enquiries at the help desk",
                "Maintained organization and cleanliness of library resources",
            ]
        },
        {
            title: "<b>Numeric.org</b>, <i>Mathematics Coach</i>, Mitchell's Plain, South Africa.",
            duration: "February 2018 - May 2018",
            description: [
                "Coached Grade 7 mathematics learners at Merry Dale Primary School.",
                "Role undertaken during periods when I had no university classes",
            ]
        },
        {
            title: "<b>Eighty20</b>, <i>ETL Developer (Internship)</i>, Cape Town, South Africa.",
            duration: "August 2018 - January 2019",
            description: [
                "Extracted, transformed, and loaded data from SPSS files into Eighty20's data portal",
                "Developed ETL pipelines using object-oriented Python in Jupyter Notebooks",
                "Prototyped an ETL web application using React.js and Flask",
            ]
        },
        {
            title: "<b>Camara Education</b>, <i>Lab Technician</i>, Berea, Lesotho.",
            duration: "May 2008 - August 2008; June 2009 - August 2009",
            description: [
                "Refurbished donated computers from Camara Education (Ireland) and installed Ubuntu operating systems in them.",
            ]
        },
    ]

    document.getElementById("work").innerHTML = workExperience.map(p => `
        <div class="project-item">
            <div class="flex jus-btwn">
                <p> ${p.title} ${p.link ? `: <a  href="${p.link}" target="_blank" rel="noopener noreferrer">link</a>` : ""
        } </p>
                <div>${p.duration}</div>
            </div>
            <ul class="project-list">
                ${p.description.map(desc => `<li>${desc}</li>`).join("")}
            </ul>
        </div>
    `).join("")

    const nav = document.querySelector('nav')
    const menuBtn = portfolio.querySelector('#menu-button')
    

    function toggleNav(show) {
        nav.style.visibility = show ? 'visible' : 'hidden'
        nav.style.opacity = show ? '1' : '0'
        nav.style.transform = show ? 'translateY(0)' : 'translateY(-10px)'
        nav.style.pointerEvents = show ? 'auto' : 'none'

        menuBtn.querySelector('img').src = `imgs/${show ? "close-icon": "info-icon"}.svg`
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        toggleNav(getComputedStyle(nav).visibility === 'hidden')
    })

    document.addEventListener('click', (e) => {
        window.innerWidth < 799 && getComputedStyle(nav).visibility === 'visible' && !nav.contains(e.target) && toggleNav(false)
    })


    
})




