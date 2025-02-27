// Efecto de reduccion para el header==============================================================================================================
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("header-small");
        } else {
            header.classList.remove("header-small");
        }
    });
});

// Copy email to portapapeles
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("hero-copy-email").addEventListener("click", function () {
        const emailText = document.getElementById("hero-email-text").textContent;
        navigator.clipboard.writeText(emailText).then(() => {
            alert("Email copied to clipboard!");
        });
    });
});

// Carrousel Professional Highlights Section======================================================================================================
document.addEventListener("DOMContentLoaded", () => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const slides = document.querySelectorAll(".testimonial-item");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    
    let currentIndex = 0;
    let interval;

    const updateCarousel = () => {
        carouselSlide.style.transition = "transform 1.5s ease-in-out"; // velocidad del cambio entre paneles
        carouselSlide.style.transform = `translateX(-${currentIndex * 107.54}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    };

    const startAutoRotate = () => {
        interval = setInterval(nextSlide, 10000); // Cambio automático cada 10 segundos
    };

    const stopAutoRotate = () => {
        clearInterval(interval);
    };

    // Event listeners
    nextBtn.addEventListener("click", () => {
        stopAutoRotate();
        nextSlide();
        startAutoRotate();
    });

    prevBtn.addEventListener("click", () => {
        stopAutoRotate();
        prevSlide();
        startAutoRotate();
    });

    // Iniciar la rotación automática
    startAutoRotate();
});

// Project section--------------------------------------------------------------------------------------------------------------

//Ventana Modal

let slideIndex = 0;
let images = [];

function openModal(projectId) {
    const proyectos = [
        {
            title: "Banana Plantation Monitoring with nRF52 and Mesh Networks",
            images: ["img/projects/Banana Plantation Monitoring _1.png", "img/projects/Banana Plantation Monitoring _3.png", "img/projects/Banana Plantation Monitoring _2.jpg", "img/projects/Banana Plantation Monitoring _4.bmp"],
            description: "Development of an IoT system based on nRF52 microcontroller for monitoring and tracking banana plantations, utilizing BLE communication and mesh networks for real-time data collection.",
            date: "September 2024 - January 2025",
            technologies: "nRF52 | IoT | BLE | C",
            objective: "Implement an intelligent monitoring system to track agricultural treatments, analyze plantation growth, and optimize fruit collection and traceability.",
			role: "Developed and programmed the nRF52 microcontroller, designing and implementing the Mesh Network for real-time data collection and tracking. Focused on IoT system architecture and BLE communication, while other team members handled mobile application development.",
            process: [
                "Development of firmware for nRF52 devices with Bluetooth Low Energy (BLE) communication.",
                "Integration with environmental sensors to collect key data on plantation conditions.",
                "Implementation of a BLE Mesh Network to ensure coverage over large land areas.",
                "Optimization of energy consumption to ensure continuous monitoring with low maintenance."
            ],
            challenges: "One of the main challenges was ensuring reliable coverage over a vast plantation with a low-power network infrastructure. To address this, an optimized BLE Mesh network was designed, allowing interconnected devices to act as relay nodes, extending the communication range without relying on a single signal source.",
            results: [
                "20% reduction in operational costs due to optimization in the use of inputs and treatments.",
                "45% improvement in monitoring efficiency, reducing the need for manual field inspections.",
                "Enhanced traceability and fruit quality, enabling detailed tracking from planting to harvesting."
            ],
            category: "IoT | Smart Agriculture | Embedded Systems | Wireless Networks",
			github: "",  // GitHub link
        	articleLink: "", // Article link (can be empty)
        	confidentialNote: "Due to confidentiality restrictions, no additional information can be shared"
        },
		
		 {
            title: "eAquaSaver: Intelligent Water Saving System for Showers and Irrigation",
            images: ["img/projects/water_saver_2.png", "img/projects/water_saver_3.png", "img/projects/water_saver_4.png", "img/projects/water_saver_1.png"],
            description: "Development of an intelligent IoT system to reduce water flow in electric showers and agricultural irrigation systems, optimizing consumption through adaptive control and utilizing hydroelectric energy.",
            date: "July 2024 - September 2024",
            technologies: "nRF52 | C | BLE",
            objective: "The goal of eAquaSaver is to minimize water waste in hydraulic systems, specifically in electric showers and agricultural irrigation systems. Through an intelligent control system, the project aims to regulate water flow efficiently in real-time, optimizing usage without compromising the performance of the systems.",
			role: "Programmed the nRF52 microcontroller and designed the battery charging circuit, ensuring efficient power management and adaptive control for water flow optimization.",
            process: [
                "Development of adaptive control algorithms to manage water flow based on demand.",
                "Implementation of flow sensors to monitor water consumption in real-time.",
                "Optimization of energy consumption using an autonomous system based on energy generated by water flow.",
                "Design and integration of a mini-hydro generator and supercapacitors to recharge the system's battery and power the device without relying on external energy sources."
            ],
            challenges: "One of the main challenges was ensuring an autonomous power source for the nRF5 device that did not rely on conventional rechargeable batteries. To solve this, a hybrid system was designed using supercapacitors and a mini-hydro generator, activated by water flow. This system allows the supercapacitors to charge as water flows, ensuring the device operates autonomously.",
            results: [
                "30% reduction in water consumption in agricultural irrigation systems through adaptive flow control based on soil conditions and plant needs.",
                "27% reduction in water waste in electric showers by regulating flow and ensuring only the necessary amount of water is supplied.",
                "Successful implementation in real environments, improving the efficiency of water resource use without compromising comfort or system effectiveness."
            ],
            category: "IoT | Embedded Systems"	,
			github: "",  // GitHub link
        	articleLink: "", // Article link (can be empty)
        	confidentialNote: "Due to confidentiality restrictions, no additional information can be shared"
    },

		{
            title: "Automated Solar Dryer with Intelligent Control",
            images: ["img/projects/Solar Dryer1.jpg", "img/projects/Solar Dryer2.jpg", "img/projects/Solar Dryer3.png", "img/projects/Solar Dryer4.jpg", "img/projects/Solar Dryer5.jpg"],
            description: "Development of an automated system based on Arduino to control and optimize the solar drying process of agricultural products, maintaining temperature and humidity parameters according to the desired conditions.",
            date: "November 2024 - January 2025",
            technologies: "Arduino | C | Python",
            objective: "The objective of the system is to automate the drying or dehydration process of agricultural products, ensuring that parameters like temperature and humidity remain within the pre-established values. The system adjusts the airflow and internal temperature of the dryer automatically based on the necessary conditions.",
			role: "Developed the entire Arduino program and designed the complete electronic circuit, integrating sensors and actuators for process automation. Additionally, created a Python interface for real-time data visualization and monitoring.",
            process: [
                "Full system design, including physical components and operational schematic.",
                "Programming and simulation of the system in Arduino to handle temperature and humidity sensors, and servomotors.",
                "Assembly of the circuit with all the sensors and necessary components for automatic control.",
                "Testing and validation of the system with various products to assess its performance."
            ],
            challenges: "One of the main challenges was visualizing temperature sensor data, both inside and outside the dryer. Initially, the data was stored in an SD card module on the Arduino, requiring the SD card to be removed to access the information. To resolve this, a graphical interface was implemented in Python using the pySerial library to retrieve real-time data from Arduino and display it directly on the screen. Additionally, controlling the dryer fans, essential for airflow, was a challenge. This was solved by implementing Pulse Width Modulation (PWM) control on the fans, allowing them to adjust according to the internal temperature of the dryer, optimizing heat distribution.",
            results: [
                "25% reduction in drying time by optimizing temperature and airflow control automatically.",
                "Improved drying efficiency, maintaining consistent humidity levels throughout the process, minimizing the risk of overheating and losses.",
                "The system provided greater autonomy, reducing the need for manual intervention to adjust parameters and monitor the process."
            ],
            category: "Arduino | Python | Smart Agriculture",
			github: "",  // GitHub link
        	articleLink: "", // Article link (can be empty)
        	confidentialNote: "Due to confidentiality restrictions, no additional information can be shared"
        },
		
		{
            title: "Prediction of Electricity Demand in Santiago de Cuba using LSTM Networks",
            images: ["img/projects/Prediction Demand1.png", "img/projects/Prediction Demand2.png", "img/projects/Prediction Demand3.png"],
            description: "Development of an LSTM-based model to predict electricity demand in Santiago de Cuba, optimizing energy generation and distribution planning.",
            date: "January 2024 - July 2024",
            technologies: "Python | TensorFlow",
            objective: "The goal of this project was to predict electricity demand for the optimization of electricity generation and distribution. By accurately forecasting the demand, the utility company could improve its resource allocation and grid management.",
			role: "Developed and optimized the LSTM-based predictive model, implementing the complete algorithm to forecast electricity demand. Worked with real data provided by the Electric Company of Santiago de Cuba to enhance energy generation and distribution planning.",
            process: [
                "The project followed a comprehensive approach, starting with the collection of historical energy demand data from various sources. ",
                "The data was preprocessed to handle missing values, various formats, and discrepancies.",
                "Next, an LSTM-based neural network model was developed and trained on the data. Afterward, the model was evaluated to ensure its accuracy and efficiency in predicting electricity demand."
				],
            challenges: "One of the main challenges was the data collection and analysis process. The data was spread across multiple sources, in different formats, and contained several missing or inconsistent values. A substantial effort was invested in data preprocessing, including cleaning, normalization, and handling missing values. This allowed the creation of a reliable dataset for the LSTM model.",
            results: [
                "The developed model achieved a mean absolute error (MAE) of 0.02, demonstrating high accuracy in predicting electricity demand. This result led to significant improvements in energy planning.",
                "The model is now in use by the Electric Company of Santiago de Cuba, assisting in monitoring consumption, forecasting demand, and enabling efficient resource allocation."
            ],
            category: "Deep Learning | Python",
			github: "#",  // GitHub link
        	articleLink: "#", // Article link for this project
        	confidentialNote: "" // No note for this project
        },

	{
            title: "Hybrid LSTM-XGBoost Prediction for Photovoltaic Solar Energy Generation",
            images: ["img/projects/Solar Energy1.jpg", "img/projects/Solar Energy2.png", "img/projects/Solar Energy3.jpg"],
            description: "Development of a hybrid model based on LSTM and XGBoost to predict the energy generation of a photovoltaic park in Santiago de Cuba, optimizing its integration into the electrical grid.",
            date: "March 2023 - July 2023",
            technologies: "Python | TensorFlow | XGBoost ",
            objective: "The main objective was to improve the planning of the photovoltaic park's connection to the electrical grid by accurately predicting its energy generation. This enables the optimization of grid stability, reduction of energy waste, and improvement of operational efficiency.",
			role: "Developed the complete hybrid LSTM-XGBoost algorithm for predicting photovoltaic energy generation. Utilized real data from the Abel Santamaría solar park in Santiago de Cuba, provided by the Solar Energy Research Center (CIES), to optimize grid integration.",
            process: [
                "Collection of historical solar generation data and weather variables.",
                "Data preprocessing and cleaning to improve training quality.",
                "Implementation and training of an LSTM model to capture temporal patterns in energy generation.",
				"Integration of XGBoost to improve model fitting and optimize predictions.",
				"Validation with real data obtained from the photovoltaic park."
				],
            challenges: "Initially, a model based solely on LSTM was used, but the results were not sufficiently accurate. To improve prediction accuracy, a hybrid model was incorporated, combining LSTM with XGBoost, which allowed for better data handling and significantly reduced prediction error to just 0.016 kWh.",
            results: [
                "Achieved an RMSE of 0.016 kWh, validated with real data from the photovoltaic park.",
                "The model was implemented at the actual photovoltaic park and is currently used for planning its connection to the electrical grid.",
				"Contributes to grid stability through more accurate solar generation predictions."
            ],
            category: "Machine Learning | Deep Learning | Python | Renewable Energy",
            github: "#",  // GitHub link
        	articleLink: "#", // Article link for this project
        	confidentialNote: "" // No note for this project
        },
		
		{
            title: "Niord - Simulation of Wave Energy Generation",
            images: ["img/projects/Wave Energy1.png", "img/projects/Wave Energy2.png", "img/projects/Wave Energy3.png"],
            description: "Niord is a program developed in MATLAB to model and simulate the behavior of wave energy generation systems under various oceanic conditions, allowing the evaluation of their feasibility in different locations.",
            date: "March 2022 - November 2022",
            technologies: "MATLAB",
            objective: "Niord was designed to analyze the behavior of wave energy generation systems under specific conditions such as wave height, period, wind speed, and direction. Its purpose is to determine whether these conditions are favorable for the efficient production of energy from ocean waves.",
			role: "Fully developed the Niord program in MATLAB for modeling and simulating wave energy generation systems. Collaborated with researchers from the Faculty of Electrical Engineering at the University of Oriente on a related scientific article. Utilized real oceanic data from the Santiago de Cuba Meteorological Center for system evaluation.",
            process: [
                "Development of mathematical models to represent the behavior of waves and their interaction with wave energy devices.",
                "Implementation of simulation algorithms in MATLAB to assess system performance under different conditions.",
                "Validation of the model with real data obtained from oceanographic studies and marine measurements."
				],
            challenges: "The main challenge was the mathematical modeling of oceanographic characteristics, as the irregular behavior of waves makes it difficult to create accurate models. This was solved by using advanced simulation techniques and incorporating empirical data to improve system accuracy.",
            results: [
                "Publication of a scientific article detailing the program's operation and results.",
                "Obtaining a patent that validates the innovation of the software.",
				"Identification of areas in Cuba with high potential for wave energy exploitation.",
				"Evaluation and verification of the energy potential of Cuba's coastlines for future implementations."
            ],
            category: "MATLAB | Renewable Energy",
            github: "#",  // GitHub link
        	articleLink: "#", // Article link for this project
        	confidentialNote: "" // No note for this project
        }
    ];

    const proyecto = proyectos[projectId - 1];

    document.getElementById("modal-title").innerText = proyecto.title;
    document.getElementById("modal-description").innerText = proyecto.description;
    document.getElementById("modal-date").innerText = proyecto.date;
    document.getElementById("modal-technologies").innerText = proyecto.technologies;
    document.getElementById("modal-objective").innerText = proyecto.objective;
	document.getElementById("modal-role").innerText = proyecto.role;
    document.getElementById("modal-challenges").innerText = proyecto.challenges;
    document.getElementById("modal-category").innerText = proyecto.category;
    
    // Agregar lista de procesos
    let processList = document.getElementById("modal-process");
    processList.innerHTML = "";
    proyecto.process.forEach(step => {
        let li = document.createElement("li");
        li.innerText = step;
        processList.appendChild(li);
    });

    // Agregar lista de resultados
    let resultsList = document.getElementById("modal-results");
    resultsList.innerHTML = "";
    proyecto.results.forEach(result => {
        let li = document.createElement("li");
        li.innerText = result;
        resultsList.appendChild(li);
    });

    // Enlace de GitHub (si existe)
    const githubLink = document.getElementById("modal-link");
    if (proyecto.github) {
        githubLink.style.display = "block";
        githubLink.href = proyecto.github;
        githubLink.innerText = "🔗 View on GitHub";
    } else {
        githubLink.style.display = "none";
    }

    // Enlace de Artículo Científico (si existe)
    const articleLink = document.getElementById("modal-article");
    if (proyecto.articleLink) {
        articleLink.style.display = "block";
        articleLink.href = proyecto.articleLink;
        articleLink.innerText = "🔗 Read the Article";
    } else {
        articleLink.style.display = "none";
    }

    // Nota confidencial (si existe)
    const confidentialNote = document.getElementById("modal-confidential");
    if (proyecto.confidentialNote) {
        confidentialNote.style.display = "block";
        confidentialNote.innerText = proyecto.confidentialNote;
    } else {
        confidentialNote.style.display = "none";
    }

    // Cargar imágenes en el carrusel
    images = proyecto.images;
    slideIndex = 0;
    updateSlides();

    document.getElementById("modal-proyecto").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal-proyecto").style.display = "none";
}

/* Función para actualizar el carrusel */
function updateSlides() {
    document.querySelectorAll(".slide").forEach((slide, index) => {
        slide.src = images[index] || "";
        slide.style.display = index === slideIndex ? "block" : "none";
    });
}

function moveSlide(n) {
    slideIndex = (slideIndex + n + images.length) % images.length;
    updateSlides();
}

// Service Section===================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
    const botonesVerMas = document.querySelectorAll('.ver-mas');

    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', function () {
            const detalle = this.nextElementSibling;

            if (detalle.style.display === "block") {
                detalle.style.display = "none";
            } else {
                document.querySelectorAll(".servicio-detalle").forEach(det => {
                    det.style.display = "none";
                });
                detalle.style.display = "block";
            }
        });
    });
});

// Contact Section =============================================================================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Copiar Email al Portapapeles
    document.getElementById("copy-email").addEventListener("click", () => {
        const emailText = document.getElementById("email-text").textContent;
        navigator.clipboard.writeText(emailText).then(() => {
            alert("Email copied to clipboard!");
        });
    });

    // Configuración de EmailJS
    emailjs.init("pvoWkTOm9ydrR0uf3"); // Reemplaza con tu User ID de EmailJS

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_8ouhzf8", "template_l62f85h", formData)
            .then(response => {
                document.getElementById("form-status").textContent = "Message sent successfully. I'll get back to you soon!";
                document.getElementById("contact-form").reset();
            })
            .catch(error => {
                document.getElementById("form-status").textContent = "There was an error. Please try again.";
            });
    });
});

// service ID EmaiJS: service_8ouhzf8
// Template ID: template_l62f85h
// Public Key | User ID: pvoWkTOm9ydrR0uf3

// Calendy Schedule a Meeting
/*document.addEventListener("DOMContentLoaded", function () {
    const calendlyBtn = document.getElementById("btn-meeting");
    const calendlyContainer = document.getElementById("calendly-container");

    calendlyBtn.addEventListener("click", function () {
        // Alternar la visibilidad del contenedor del iframe
        if (calendlyContainer.style.display === "none") {
            calendlyContainer.style.display = "block";
        } else {
            calendlyContainer.style.display = "none";
        }
    });
});*/
