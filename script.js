// JavaScript for Fundamental Particles website

document.addEventListener("DOMContentLoaded", function() {
    // DOM Elements
    const homeView = document.getElementById("home-view");
    const atomView = document.getElementById("atom-view");
    const quarksView = document.getElementById("quarks-view");
    const atomBox = document.getElementById("atom-box");
    const quarksBox = document.getElementById("quarks-box");
    const backButtons = document.querySelectorAll(".back-btn");
    const langButtons = document.querySelectorAll(".lang-btn");
    
    // Atom particles & nucleons
    const atomParticles = document.querySelectorAll(".detail-particle");
    const nucleons = document.querySelectorAll(".nucleon");
    const electronInfo = document.getElementById("electron-info");
    const nucleusInfo = document.getElementById("nucleus-info"); // General nucleus info
    const protonInfo = document.getElementById("proton-info");
    const neutronInfo = document.getElementById("neutron-info");
    
    // Quark elements (main library and internal)
    const internalQuarkElements = document.querySelectorAll(".quark-internal");
    
    // Internal quark info elements (inside proton/neutron)
    const internalUpInfo = document.getElementById("internal-up-info");
    const internalDownInfo = document.getElementById("internal-down-info");

    // Fundamental library links
    const fundamentalLinks = document.querySelectorAll(".fundamental-link");
    
    // Library image map areas
    const particleMapAreas = document.querySelectorAll("map[name='particlemap'] area");
    
    // Set default language
    let currentLang = "en";
    
    // Language data (Add translations for new elements)
    const translations = {
        en: {
            title: "Fundamental Particles",
            exploreAtom: "EXPLORE ATOM",
            exploreQuarks: "EXPLORE QUARKS",
            back: "← Back",
            clickParticle: "Click on a particle to learn more about it",
            clickQuark: "Click on a quark to learn more about it",
            electron: "ELECTRON",
            nucleus: "NUCLEUS",
            proton: "PROTON",
            neutron: "NEUTRON",
            upQuark: "UP QUARK",
            downQuark: "DOWN QUARK",
            strangeQuark: "STRANGE QUARK",
            charmQuark: "CHARM QUARK",
            bottomQuark: "BOTTOM QUARK",
            topQuark: "TOP QUARK",
            mass: "Mass:",
            charge: "Charge:",
            components: "Components:",
            composition: "Composition:",
            internalStructure: "Internal Quark Structure:",
            quarkInstruction: "Click on a quark to learn more about it",
            viewLibrary: "View Fundamental Particles Library",
            viewFullLibrary: "View Full Quark Library",
            copyright: "© 2025 Fundamental Particles. All rights reserved.",
            madeWith: "Made with Manus",
            elementaryParticles: "ELEMENTARY PARTICLES:",
            libraryDescTop: "A quark is a type of elementary particle and a fundamental constituent of matter. Quarks combine to form composite particles called hadrons, the most stable of which are protons and neutrons, the components of atomic nuclei. All commonly observable matter is composed of up quarks, down quarks and electrons. Due to a phenomenon known as colour confinement, quarks are never found in isolation; they can be found only within hadrons, which include baryons (such as protons and neutrons) and mesons, or in quark–gluon plasmas.",
            libraryDescBottom: "All quarks, are elementary fermions with spin 1/2, and experience all four fundamental interactions: gravitation, electromagnetism, weak interactions, and strong interactions."
        },
        bs: {
            title: "Fundamentalne Čestice",
            exploreAtom: "ISTRAŽI ATOM",
            exploreQuarks: "ISTRAŽI KVARKOVE",
            back: "← Nazad",
            clickParticle: "Kliknite na česticu da saznate više o njoj",
            clickQuark: "Kliknite na kvark da saznate više o njemu",
            electron: "ELEKTRON",
            nucleus: "JEZGRO",
            proton: "PROTON",
            neutron: "NEUTRON",
            upQuark: "GORNJI KVARK",
            downQuark: "DONJI KVARK",
            strangeQuark: "ČUDNI KVARK",
            charmQuark: "ŠARMANTNI KVARK",
            bottomQuark: "DUBINSKI KVARK", // Corrected: Bottom Quark
            topQuark: "VRŠNI KVARK", // Corrected: Top Quark
            muon: "MION",
            tau: "TAU",
            electronNeutrino: "ELEKTRONSKI NEUTRINO",
            muonNeutrino: "MIONSKI NEUTRINO",
            tauNeutrino: "TAU NEUTRINO",
            photon: "FOTON",
            gluon: "GLUON",
            wBoson: "W BOZON",
            zBoson: "Z BOZON",
            higgsBoson: "HIGGSOV BOZON",
            mass: "Masa:",
            charge: "Naboj:",
            components: "Komponente:",
            composition: "Sastav:",
            internalStructure: "Unutrašnja struktura kvarkova:",
            quarkInstruction: "Kliknite na kvark da saznate više o njemu",
            viewLibrary: "Pogledaj biblioteku fundamentalnih čestica",
            viewFullLibrary: "Pogledaj punu biblioteku kvarkova",
            copyright: "© 2025 Fundamentalne Čestice. Sva prava zadržana.",
            madeWith: "Napravljeno sa Manus",
            elementaryParticles: "ELEMENTARNE ČESTICE:",
            libraryDescTop: "Kvark je vrsta elementarne čestice i osnovni sastojak materije. Kvarkovi se kombinuju da formiraju složene čestice zvane hadroni, od kojih su najstabilniji protoni i neutroni, komponente atomskih jezgara. Sva uobičajeno vidljiva materija sastoji se od gornjih kvarkova, donjih kvarkova i elektrona. Zbog fenomena poznatog kao zatočenje boje, kvarkovi se nikada ne nalaze u izolaciji; mogu se naći samo unutar hadrona, koji uključuju barione (kao što su protoni i neutroni) i mezone, ili u kvark-gluonskim plazmama.",
            libraryDescBottom: "Svi kvarkovi su elementarni fermioni sa spinom 1/2, i doživljavaju sve četiri fundamentalne interakcije: gravitaciju, elektromagnetizam, slabe interakcije i jake interakcije."
        },
        tr: {
            title: "Temel Parçacıklar",
            exploreAtom: "ATOMU KEŞFET",
            exploreQuarks: "KUARKLARI KEŞFET",
            back: "← Geri",
            clickParticle: "Daha fazla bilgi için bir parçacığa tıklayın",
            clickQuark: "Daha fazla bilgi için bir kuarka tıklayın",
            electron: "ELEKTRON",
            nucleus: "ÇEKİRDEK",
            proton: "PROTON",
            neutron: "NÖTRON",
            upQuark: "YUKARI KUARK",
            downQuark: "AŞAĞI KUARK",
            strangeQuark: "ACAYIP KUARK",
            charmQuark: "TILSIMLI KUARK",
            bottomQuark: "ALT KUARK",
            topQuark: "ÜST KUARK",
            muon: "MÜON",
            tau: "TAU",
            electronNeutrino: "ELEKTRON NÖTRINOSU",
            muonNeutrino: "MÜON NÖTRINOSU",
            tauNeutrino: "TAU NÖTRINOSU",
            photon: "FOTON",
            gluon: "GLUON",
            wBoson: "W BOZONU",
            zBoson: "Z BOZONU",
            higgsBoson: "HIGGS BOZONU",
            mass: "Kütle:",
            charge: "Yük:",
            components: "Bileşenler:",
            composition: "Bileşim:",
            internalStructure: "İç Kuark Yapısı:",
            quarkInstruction: "Daha fazla bilgi için bir kuarka tıklayın",
            viewLibrary: "Temel Parçacıklar Kütüphanesini Görüntüle",
            viewFullLibrary: "Tam Kuark Kütüphanesini Görüntüle",
            copyright: "© 2025 Temel Parçacıklar. Tüm hakları saklıdır.",
            madeWith: "Manus ile yapıldı",
            elementaryParticles: "TEMEL PARÇACIKLAR:",
            libraryDescTop: "Kuark, temel bir parçacık türü ve maddenin temel bir bileşenidir. Kuarklar, hadronlar adı verilen bileşik parçacıkları oluşturmak için birleşirler, bunların en kararlı olanları protonlar ve nötronlardır, atom çekirdeklerinin bileşenleridir. Yaygın olarak gözlemlenebilen tüm madde, yukarı kuarklar, aşağı kuarklar ve elektronlardan oluşur. Renk hapsi olarak bilinen bir fenomen nedeniyle, kuarklar asla izolasyonda bulunmazlar; sadece hadronlar içinde bulunabilirler, bunlar baryonları (protonlar ve nötronlar gibi) ve mezonları içerir, veya kuark-gluon plazmalarında bulunabilirler.",
            libraryDescBottom: "Tüm kuarklar, 1/2 spinli temel fermiyonlardır ve dört temel etkileşimin tümünü yaşarlar: yerçekimi, elektromanyetizma, zayıf etkileşimler ve güçlü etkileşimler."
        }
    };
    
    // Navigation functions
    function showHomeView() {
        homeView.style.display = "flex";
        atomView.style.display = "none";
        quarksView.style.display = "none";
        hideAllParticleInfo();
        hideAllQuarkInfo();
    }
    
    function showAtomView() {
        homeView.style.display = "none";
        atomView.style.display = "block";
        quarksView.style.display = "none";
        hideAllParticleInfo(); // Hide info when returning to atom view
        hideAllQuarkInfo();
    }
    
    function showQuarksView() {
        homeView.style.display = "none";
        atomView.style.display = "none";
        quarksView.style.display = "block";
        hideAllParticleInfo();
        hideAllQuarkInfo(); // Hide specific quark info when showing library
    }
    
    // Hide all particle info sections (including proton/neutron)
    function hideAllParticleInfo() {
        electronInfo.style.display = "none";
        nucleusInfo.style.display = "none";
        protonInfo.style.display = "none";
        neutronInfo.style.display = "none";
    }
    
    // Hide all quark info sections (main library and internal)
    function hideAllQuarkInfo() {
        // Internal quark info (inside proton/neutron)
        if (internalUpInfo) internalUpInfo.style.display = "none";
        if (internalDownInfo) internalDownInfo.style.display = "none";
        
        // Hide all library item info boxes
        document.querySelectorAll('.library-item-info').forEach(item => {
            item.style.display = "none";
        });
    }

    // Show specific particle info
    function showParticleInfo(particleType) {
        hideAllParticleInfo();
        hideAllQuarkInfo();
        const infoElement = document.getElementById(`${particleType}-info`);
        if (infoElement) {
            infoElement.style.display = "block";
            // Scroll particle info into view
            infoElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }

    // Show specific quark info
    function showQuarkInfo(quarkType, isInternal = false) {
        console.log(`Showing info for ${isInternal ? 'internal' : 'library'} quark: ${quarkType}`); // DEBUG LOG
        hideAllQuarkInfo(); // Hide other quark infos
        
        // Determine which info element to show based on whether it's an internal quark
        let infoElement;
        if (isInternal) {
            infoElement = document.getElementById(`internal-${quarkType}-info`);
        } else {
            infoElement = document.getElementById(`${quarkType}-info`);
        }
        
        if (infoElement) {
            console.log(`Found info element: ${infoElement.id}`); // DEBUG LOG
            infoElement.style.display = "block";
            // Scroll quark info into view
            infoElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
            console.error(`Info element not found for quark: ${quarkType} (Internal: ${isInternal})`); // DEBUG LOG
        }
    }
    
    // Function to update language
    function updateLanguage(lang) {
        console.log(`Switching language to: ${lang}`); // DEBUG LOG
        
        // Check if the language is valid
        if (!translations[lang]) {
            console.error(`Invalid language: ${lang}`);
            return;
        }
        
        // Store the previous language for debugging
        const prevLang = currentLang;
        
        // Update the current language
        currentLang = lang;
        
        console.log(`Language changed from ${prevLang} to ${currentLang}`);
        
        // Highlight the active language button
        langButtons.forEach(btn => {
            if (btn.getAttribute("data-lang") === lang) {
                btn.style.border = "2px solid #3498db";
            } else {
                btn.style.border = "none";
            }
        });
        
        // Update title
        const titleElement = document.querySelector("h1");
        if (titleElement) titleElement.textContent = translations[lang].title;
        document.title = translations[lang].title;
        
        // Update headings
        const homeHeadings = document.querySelectorAll("#home-view h2");
        if (homeHeadings.length >= 2) {
            homeHeadings[0].textContent = translations[lang].exploreAtom;
            homeHeadings[1].textContent = translations[lang].exploreQuarks;
        }
        
        const atomViewHeading = document.querySelector("#atom-view h2");
        if (atomViewHeading) {
            atomViewHeading.textContent = translations[lang].exploreAtom;
        }
        
        // Update library title and descriptions
        const libraryTitle = document.querySelector(".library-title");
        if (libraryTitle) {
            libraryTitle.textContent = translations[lang].elementaryParticles;
        }
        
        const libraryDescTop = document.querySelector(".library-description-top");
        if (libraryDescTop) {
            libraryDescTop.textContent = translations[lang].libraryDescTop;
        }
        
        const libraryDescBottom = document.querySelector(".library-description-bottom");
        if (libraryDescBottom) {
            libraryDescBottom.textContent = translations[lang].libraryDescBottom;
        }
        
        // Update back buttons
        backButtons.forEach(btn => {
            if (!btn.classList.contains("library-back-btn")) { // Skip image buttons
                btn.textContent = translations[lang].back;
            }
        });
        
        // Update instruction text
        const atomInstruction = document.querySelector("#atom-view .instruction-text");
        if (atomInstruction) {
            atomInstruction.textContent = translations[lang].clickParticle;
        }
        
        const quarksInstruction = document.querySelector("#quarks-view .instruction-text");
        if (quarksInstruction) {
            quarksInstruction.textContent = translations[lang].clickQuark;
        }
        
        document.querySelectorAll(".quark-instruction").forEach(el => {
            if (el) el.textContent = translations[lang].quarkInstruction;
        });
        
        // Update particle/quark info headings
        const electronInfoHeading = document.querySelector("#electron-info h3");
        if (electronInfoHeading) electronInfoHeading.textContent = translations[lang].electron;
        
        const nucleusInfoHeading = document.querySelector("#nucleus-info h3");
        if (nucleusInfoHeading) nucleusInfoHeading.textContent = translations[lang].nucleus;
        
        const protonInfoHeading = document.querySelector("#proton-info h3");
        if (protonInfoHeading) protonInfoHeading.textContent = translations[lang].proton;
        
        const neutronInfoHeading = document.querySelector("#neutron-info h3");
        if (neutronInfoHeading) neutronInfoHeading.textContent = translations[lang].neutron;
        
        // Update all library item info headings (Quarks, Leptons, Bosons)
        document.querySelectorAll('.library-item-info h3').forEach(heading => {
            const infoElement = heading.closest('.library-item-info');
            if (!infoElement) return;
            
            const infoId = infoElement.id;
            let translationKey = '';

            // Map infoId to translationKey
            switch (infoId) {
                case 'up-info': translationKey = 'upQuark'; break;
                case 'down-info': translationKey = 'downQuark'; break;
                case 'charm-info': translationKey = 'charmQuark'; break;
                case 'strange-info': translationKey = 'strangeQuark'; break;
                case 'top-info': translationKey = 'topQuark'; break;
                case 'bottom-info': translationKey = 'bottomQuark'; break;
                case 'electron-info': translationKey = 'electron'; break;
                case 'muon-info': translationKey = 'muon'; break;
                case 'tau-info': translationKey = 'tau'; break;
                case 'electron-neutrino-info': translationKey = 'electronNeutrino'; break;
                case 'muon-neutrino-info': translationKey = 'muonNeutrino'; break;
                case 'tau-neutrino-info': translationKey = 'tauNeutrino'; break;
                case 'photon-info': translationKey = 'photon'; break;
                case 'gluon-info': translationKey = 'gluon'; break;
                case 'w-boson-info': translationKey = 'wBoson'; break;
                case 'z-boson-info': translationKey = 'zBoson'; break;
                case 'higgs-boson-info': translationKey = 'higgsBoson'; break;
                // Add cases for internal quarks if needed, though they are handled separately below
            }
            
            if (translationKey && translations[lang][translationKey]) {
                heading.textContent = translations[lang][translationKey];
            } else if (translationKey) {
                console.warn(`Translation key '${translationKey}' not found for language '${lang}'`);
            }
        });
        
        // Update internal quark info headings
        const internalUpInfoHeading = document.querySelector("#internal-up-info h3");
        if (internalUpInfoHeading) internalUpInfoHeading.textContent = translations[lang].upQuark;
        
        const internalDownInfoHeading = document.querySelector("#internal-down-info h3");
        if (internalDownInfoHeading) internalDownInfoHeading.textContent = translations[lang].downQuark;
        
        // Update links
        document.querySelectorAll(".fundamental-link").forEach(link => {
            link.textContent = translations[lang].viewLibrary;
        });
        
        // Update footer
        const copyright = document.querySelector(".copyright");
        if (copyright) copyright.textContent = translations[lang].copyright;
        
        const madeWith = document.querySelector(".made-with");
        if (madeWith) madeWith.textContent = translations[lang].madeWith;
    }
    
    // Event Listeners
    
    // Home view navigation
    atomBox.addEventListener("click", showAtomView);
    quarksBox.addEventListener("click", showQuarksView);
    
    // Back buttons
    backButtons.forEach(btn => {
        btn.addEventListener("click", showHomeView);
    });
    
    // Language buttons
    langButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const lang = this.getAttribute("data-lang");
            
            // Skip if already on this language
            if (currentLang === lang) {
                console.log(`Already using language: ${lang}`);
                return;
            }
            
            console.log(`Switching from ${currentLang} to ${lang}`);
            
            // Force reset current language to ensure full refresh
            currentLang = "";
            
            // Apply the new language
            updateLanguage(lang);
        });
    });
    
    // Atom particles (electron, nucleus)
    atomParticles.forEach(particle => {
        particle.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const particleType = this.getAttribute("data-particle");
            showParticleInfo(particleType);
        });
    });
    
    // Nucleons (proton, neutron)
    nucleons.forEach(nucleon => {
        nucleon.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent event bubbling to nucleus
            const nucleonType = this.getAttribute("data-nucleon");
            console.log(`Clicked on nucleon: ${nucleonType}`); // DEBUG LOG
            
            // Explicitly hide nucleus info first
            if (nucleusInfo) nucleusInfo.style.display = "none"; 
            
            showParticleInfo(nucleonType); // Show proton or neutron info
        });
    });
    
    // Internal quark elements (inside proton/neutron)
    internalQuarkElements.forEach(quark => {
        quark.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent event bubbling
            const quarkType = this.getAttribute("data-quark");
            console.log(`Clicked on internal quark: ${quarkType}`); // DEBUG LOG
            showQuarkInfo(quarkType, true);
        });
    });
    
    // Fundamental library links
    fundamentalLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = this.getAttribute("data-target");
            if (target === "quarks-view") {
                showQuarksView();
            }
        });
    });
    
    // New library particle items - Direct element implementation
    const particleItems = document.querySelectorAll('.particle-item');
    
    particleItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Get particle type and ID from data attributes
            const particleType = this.getAttribute("data-particle-type");
            const particleId = this.getAttribute("data-particle-id");
            
            console.log(`Clicked on particle: ${particleType} - ${particleId}`); // DEBUG LOG
            
            if (particleId) {
                // Hide all info panels first
                hideAllQuarkInfo();
                
                // Determine the info panel ID based on particle type
                let infoId;
                if (particleType === "quark") {
                    // For quarks, the ID is just the particle ID (e.g., "up-info")
                    infoId = `${particleId}-info`;
                } else {
                    // For leptons and bosons, the ID includes the particle ID (e.g., "electron-info")
                    infoId = `${particleId}-info`;
                }
                
                console.log(`Looking for info element with ID: ${infoId}`); // DEBUG LOG
                
                const infoElement = document.getElementById(infoId);
                if (infoElement) {
                    console.log(`Found info element: ${infoElement.id}`); // DEBUG LOG
                    infoElement.style.display = "block";
                    infoElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
                } else {
                    console.error(`Info element not found for particle: ${particleId} (ID: ${infoId})`); // DEBUG LOG
                }
            }
        });
    });
    
    // Initialize with default language
    updateLanguage("en");
});
