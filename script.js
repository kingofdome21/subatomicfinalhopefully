// JavaScript for SubAtomic World website

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const homeView = document.getElementById('home-view');
    const atomView = document.getElementById('atom-view');
    const quarksView = document.getElementById('quarks-view');
    const atomBox = document.getElementById('atom-box');
    const quarksBox = document.getElementById('quarks-box');
    const backButtons = document.querySelectorAll('.back-btn');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Atom particles
    const atomParticles = document.querySelectorAll('.detail-particle');
    const electronInfo = document.getElementById('electron-info');
    const nucleusInfo = document.getElementById('nucleus-info');
    
    // Quark elements
    const quarkElements = document.querySelectorAll('.quark-detail');
    const upInfo = document.getElementById('up-info');
    const downInfo = document.getElementById('down-info');
    const strangeInfo = document.getElementById('strange-info');
    const charmInfo = document.getElementById('charm-info');
    const bottomInfo = document.getElementById('bottom-info');
    const topInfo = document.getElementById('top-info');
    
    // Set default language
    let currentLang = 'en';
    
    // Language data
    const translations = {
        en: {
            title: 'SubAtomic World',
            exploreAtom: 'EXPLORE ATOM',
            exploreQuarks: 'EXPLORE QUARKS',
            back: '← Back',
            clickParticle: 'Click on a particle to learn more about it',
            clickQuark: 'Click on a quark to learn more about it',
            electron: 'ELECTRON',
            nucleus: 'NUCLEUS',
            upQuark: 'UP QUARK',
            downQuark: 'DOWN QUARK',
            strangeQuark: 'STRANGE QUARK',
            charmQuark: 'CHARM QUARK',
            bottomQuark: 'BOTTOM QUARK',
            topQuark: 'TOP QUARK',
            mass: 'Mass:',
            charge: 'Charge:',
            components: 'Components:',
            copyright: '© 2025 SubAtomic World. All rights reserved.',
            madeWith: 'Made with Manus'
        },
        bs: {
            title: 'SubAtomski Svijet',
            exploreAtom: 'ISTRAŽI ATOM',
            exploreQuarks: 'ISTRAŽI KVARKOVE',
            back: '← Nazad',
            clickParticle: 'Kliknite na česticu da saznate više o njoj',
            clickQuark: 'Kliknite na kvark da saznate više o njemu',
            electron: 'ELEKTRON',
            nucleus: 'JEZGRO',
            upQuark: 'GORNJI KVARK',
            downQuark: 'DONJI KVARK',
            strangeQuark: 'ČUDNI KVARK',
            charmQuark: 'ŠARMANTNI KVARK',
            bottomQuark: 'DONJI KVARK',
            topQuark: 'GORNJI KVARK',
            mass: 'Masa:',
            charge: 'Naboj:',
            components: 'Komponente:',
            copyright: '© 2025 SubAtomski Svijet. Sva prava zadržana.',
            madeWith: 'Napravljeno sa Manus'
        },
        tr: {
            title: 'SubAtomik Dünya',
            exploreAtom: 'ATOMU KEŞFET',
            exploreQuarks: 'KUARKLARI KEŞFET',
            back: '← Geri',
            clickParticle: 'Daha fazla bilgi için bir parçacığa tıklayın',
            clickQuark: 'Daha fazla bilgi için bir kuarka tıklayın',
            electron: 'ELEKTRON',
            nucleus: 'ÇEKİRDEK',
            upQuark: 'YUKARI KUARK',
            downQuark: 'AŞAĞI KUARK',
            strangeQuark: 'ACAYIP KUARK',
            charmQuark: 'TUHAF KUARK',
            bottomQuark: 'ALT KUARK',
            topQuark: 'ÜST KUARK',
            mass: 'Kütle:',
            charge: 'Yük:',
            components: 'Bileşenler:',
            copyright: '© 2025 SubAtomik Dünya. Tüm hakları saklıdır.',
            madeWith: 'Manus ile yapıldı'
        }
    };
    
    // Navigation functions
    function showHomeView() {
        homeView.style.display = 'flex';
        atomView.style.display = 'none';
        quarksView.style.display = 'none';
        
        // Hide all particle info sections
        hideAllParticleInfo();
        hideAllQuarkInfo();
    }
    
    function showAtomView() {
        homeView.style.display = 'none';
        atomView.style.display = 'block';
        quarksView.style.display = 'none';
    }
    
    function showQuarksView() {
        homeView.style.display = 'none';
        atomView.style.display = 'none';
        quarksView.style.display = 'block';
    }
    
    // Hide all particle info sections
    function hideAllParticleInfo() {
        electronInfo.style.display = 'none';
        nucleusInfo.style.display = 'none';
    }
    
    // Hide all quark info sections
    function hideAllQuarkInfo() {
        upInfo.style.display = 'none';
        downInfo.style.display = 'none';
        strangeInfo.style.display = 'none';
        charmInfo.style.display = 'none';
        bottomInfo.style.display = 'none';
        topInfo.style.display = 'none';
    }
    
    // Function to update language
    function updateLanguage(lang) {
        currentLang = lang;
        
        // Update title
        document.querySelector('h1').textContent = translations[lang].title;
        document.title = translations[lang].title;
        
        // Update headings
        const homeHeadings = document.querySelectorAll('#home-view h2');
        homeHeadings[0].textContent = translations[lang].exploreAtom;
        homeHeadings[1].textContent = translations[lang].exploreQuarks;
        
        document.querySelector('#atom-view h2').textContent = translations[lang].exploreAtom;
        document.querySelector('#quarks-view h2').textContent = translations[lang].exploreQuarks;
        
        // Update back buttons
        backButtons.forEach(btn => {
            btn.textContent = translations[lang].back;
        });
        
        // Update instruction text
        document.querySelector('#atom-view .instruction-text').textContent = translations[lang].clickParticle;
        document.querySelector('#quarks-view .instruction-text').textContent = translations[lang].clickQuark;
        
        // Update particle info headings
        document.querySelector('#electron-info h3').textContent = translations[lang].electron;
        document.querySelector('#nucleus-info h3').textContent = translations[lang].nucleus;
        
        // Update quark info headings
        document.querySelector('#up-info h3').textContent = translations[lang].upQuark;
        document.querySelector('#down-info h3').textContent = translations[lang].downQuark;
        document.querySelector('#strange-info h3').textContent = translations[lang].strangeQuark;
        document.querySelector('#charm-info h3').textContent = translations[lang].charmQuark;
        document.querySelector('#bottom-info h3').textContent = translations[lang].bottomQuark;
        document.querySelector('#top-info h3').textContent = translations[lang].topQuark;
        
        // Update all labels and content
        const allStrongs = document.querySelectorAll('.info-details strong');
        allStrongs.forEach(strong => {
            if (strong.textContent.includes('Mass')) {
                strong.textContent = translations[lang].mass;
            } else if (strong.textContent.includes('Charge')) {
                strong.textContent = translations[lang].charge;
            } else if (strong.textContent.includes('Components')) {
                strong.textContent = translations[lang].components;
            }
        });
        
        // Create translations for all particle and quark facts
        const electronFacts = {
            en: [
                "Electrons are fundamental particles that orbit around the nucleus of an atom.",
                "They have a negative electric charge and are much lighter than protons or neutrons.",
                "Electrons are responsible for chemical bonding between atoms.",
                "They were discovered by J.J. Thomson in 1897.",
                "Electrons can behave as both particles and waves, demonstrating quantum properties."
            ],
            bs: [
                "Elektroni su fundamentalne čestice koje kruže oko jezgra atoma.",
                "Imaju negativan električni naboj i mnogo su lakši od protona ili neutrona.",
                "Elektroni su odgovorni za hemijsko vezivanje između atoma.",
                "Otkrio ih je J.J. Thomson 1897. godine.",
                "Elektroni se mogu ponašati i kao čestice i kao valovi, pokazujući kvantna svojstva."
            ],
            tr: [
                "Elektronlar, atomun çekirdeği etrafında dönen temel parçacıklardır.",
                "Negatif elektrik yüküne sahiptirler ve protonlardan veya nötronlardan çok daha hafiftirler.",
                "Elektronlar, atomlar arasındaki kimyasal bağlanmadan sorumludur.",
                "1897'de J.J. Thomson tarafından keşfedildiler.",
                "Elektronlar hem parçacık hem de dalga olarak davranabilir, kuantum özelliklerini gösterirler."
            ]
        };
        
        const nucleusFacts = {
            en: [
                "The nucleus is the dense central region of an atom.",
                "It contains protons (positively charged) and neutrons (neutral).",
                "The nucleus makes up less than 0.01% of an atom's volume but contains over 99.9% of its mass.",
                "It was discovered by Ernest Rutherford in 1911.",
                "The strong nuclear force holds the nucleus together, overcoming the electromagnetic repulsion between protons."
            ],
            bs: [
                "Jezgro je gusto centralno područje atoma.",
                "Sadrži protone (pozitivno nabijene) i neutrone (neutralne).",
                "Jezgro čini manje od 0,01% volumena atoma, ali sadrži preko 99,9% njegove mase.",
                "Otkrio ga je Ernest Rutherford 1911. godine.",
                "Jaka nuklearna sila drži jezgro zajedno, prevladavajući elektromagnetsko odbijanje između protona."
            ],
            tr: [
                "Çekirdek, bir atomun yoğun merkezi bölgesidir.",
                "Protonları (pozitif yüklü) ve nötronları (nötr) içerir.",
                "Çekirdek, bir atomun hacminin %0,01'inden azını oluşturur, ancak kütlesinin %99,9'undan fazlasını içerir.",
                "1911'de Ernest Rutherford tarafından keşfedildi.",
                "Güçlü nükleer kuvvet, protonlar arasındaki elektromanyetik itmeyi yenerek çekirdeği bir arada tutar."
            ]
        };
        
        // Update all list items with translated content
        const electronListItems = document.querySelectorAll('#electron-info ol li');
        const nucleusListItems = document.querySelectorAll('#nucleus-info ol li');
        
        electronListItems.forEach((item, index) => {
            item.textContent = electronFacts[lang][index];
        });
        
        nucleusListItems.forEach((item, index) => {
            item.textContent = nucleusFacts[lang][index];
        });
        
        // Create translations for quark facts
        const upQuarkFacts = {
            en: [
                "The up quark is the lightest of all quarks.",
                "It has a fractional electric charge of +⅔.",
                "Up quarks are found in protons (2 up quarks, 1 down quark) and neutrons (1 up quark, 2 down quarks).",
                "It is a first-generation quark, meaning it's one of the building blocks of ordinary matter.",
                "Up quarks are never found in isolation due to a phenomenon called color confinement."
            ],
            bs: [
                "Gornji kvark je najlakši od svih kvarkova.",
                "Ima frakcijski električni naboj od +⅔.",
                "Gornji kvarkovi se nalaze u protonima (2 gornja kvarka, 1 donji kvark) i neutronima (1 gornji kvark, 2 donja kvarka).",
                "To je kvark prve generacije, što znači da je jedan od građevnih blokova obične materije.",
                "Gornji kvarkovi se nikada ne nalaze u izolaciji zbog fenomena koji se zove zatočenje boje."
            ],
            tr: [
                "Yukarı kuark, tüm kuarkların en hafifidir.",
                "Kesirli bir elektrik yüküne sahiptir: +⅔.",
                "Yukarı kuarklar protonlarda (2 yukarı kuark, 1 aşağı kuark) ve nötronlarda (1 yukarı kuark, 2 aşağı kuark) bulunur.",
                "Birinci nesil bir kuarktır, yani sıradan maddenin yapı taşlarından biridir.",
                "Yukarı kuarklar, renk hapsi adı verilen bir fenomen nedeniyle asla izole halde bulunmazlar."
            ]
        };
        
        const downQuarkFacts = {
            en: [
                "The down quark is the second lightest quark.",
                "It has a fractional electric charge of -⅓.",
                "Down quarks are found in protons (1 down quark, 2 up quarks) and neutrons (2 down quarks, 1 up quark).",
                "It is a first-generation quark, part of the fundamental building blocks of ordinary matter.",
                "Like all quarks, down quarks cannot exist in isolation due to color confinement."
            ],
            bs: [
                "Donji kvark je drugi najlakši kvark.",
                "Ima frakcijski električni naboj od -⅓.",
                "Donji kvarkovi se nalaze u protonima (1 donji kvark, 2 gornja kvarka) i neutronima (2 donja kvarka, 1 gornji kvark).",
                "To je kvark prve generacije, dio fundamentalnih građevnih blokova obične materije.",
                "Kao i svi kvarkovi, donji kvarkovi ne mogu postojati u izolaciji zbog zatočenja boje."
            ],
            tr: [
                "Aşağı kuark, ikinci en hafif kuarktır.",
                "Kesirli bir elektrik yüküne sahiptir: -⅓.",
                "Aşağı kuarklar protonlarda (1 aşağı kuark, 2 yukarı kuark) ve nötronlarda (2 aşağı kuark, 1 yukarı kuark) bulunur.",
                "Birinci nesil bir kuarktır, sıradan maddenin temel yapı taşlarının bir parçasıdır.",
                "Tüm kuarklar gibi, aşağı kuarklar da renk hapsi nedeniyle izole halde var olamazlar."
            ]
        };
        
        const strangeQuarkFacts = {
            en: [
                "The strange quark is a second-generation quark.",
                "It has a fractional electric charge of -⅓, the same as the down quark.",
                "Strange quarks are found in exotic hadrons like kaons and some hyperons.",
                "It was named \"strange\" because particles containing it lived longer than expected.",
                "Strange quarks are produced in high-energy collisions but quickly decay to lighter quarks."
            ],
            bs: [
                "Čudni kvark je kvark druge generacije.",
                "Ima frakcijski električni naboj od -⅓, isti kao donji kvark.",
                "Čudni kvarkovi se nalaze u egzotičnim hadronima poput kaona i nekih hiperona.",
                "Nazvan je \"čudnim\" jer su čestice koje ga sadrže živjele duže nego što se očekivalo.",
                "Čudni kvarkovi nastaju u sudarima visoke energije, ali brzo se raspadaju na lakše kvarkove."
            ],
            tr: [
                "Acayip kuark, ikinci nesil bir kuarktır.",
                "Aşağı kuark ile aynı olan -⅓ kesirli elektrik yüküne sahiptir.",
                "Acayip kuarklar, kaonlar ve bazı hiperonlar gibi egzotik hadronlarda bulunur.",
                "İçeren parçacıklar beklenenden daha uzun yaşadığı için \"acayip\" olarak adlandırılmıştır.",
                "Acayip kuarklar yüksek enerjili çarpışmalarda üretilir ancak hızla daha hafif kuarklara bozunur."
            ]
        };
        
        const charmQuarkFacts = {
            en: [
                "The charm quark is a second-generation quark.",
                "It has a fractional electric charge of +⅔, the same as the up quark.",
                "Charm quarks are found in particles like the J/ψ meson and D mesons.",
                "It was discovered simultaneously by two independent research groups in 1974.",
                "The discovery of the charm quark provided strong evidence for the quark model of particle physics."
            ],
            bs: [
                "Šarmantni kvark je kvark druge generacije.",
                "Ima frakcijski električni naboj od +⅔, isti kao gornji kvark.",
                "Šarmantni kvarkovi se nalaze u česticama poput J/ψ mezona i D mezona.",
                "Otkriven je istovremeno od strane dvije nezavisne istraživačke grupe 1974. godine.",
                "Otkriće šarmantnog kvarka pružilo je snažne dokaze za kvarkovski model fizike čestica."
            ],
            tr: [
                "Tılsımlı kuark, ikinci nesil bir kuarktır.",
                "Yukarı kuark ile aynı olan +⅔ kesirli elektrik yüküne sahiptir.",
                "Tılsımlı kuarklar, J/ψ mezonu ve D mezonları gibi parçacıklarda bulunur.",
                "1974 yılında iki bağımsız araştırma grubu tarafından eş zamanlı olarak keşfedildi.",
                "Tılsımlı kuarkın keşfi, parçacık fiziğinin kuark modeli için güçlü kanıtlar sağladı."
            ]
        };
        
        const bottomQuarkFacts = {
            en: [
                "The bottom quark (also called beauty quark) is a third-generation quark.",
                "It has a fractional electric charge of -⅓, like the down and strange quarks.",
                "Bottom quarks are found in B mesons and other exotic particles.",
                "It was discovered in 1977 at Fermilab.",
                "The study of bottom quarks has provided important insights into CP violation and matter-antimatter asymmetry."
            ],
            bs: [
                "Donji kvark (također nazvan ljepota kvark) je kvark treće generacije.",
                "Ima frakcijski električni naboj od -⅓, kao donji i čudni kvarkovi.",
                "Donji kvarkovi se nalaze u B mezonima i drugim egzotičnim česticama.",
                "Otkriven je 1977. godine u Fermilabu.",
                "Proučavanje donjih kvarkova pružilo je važne uvide u CP narušavanje i asimetriju materije-antimaterije."
            ],
            tr: [
                "Alt kuark (güzellik kuarkı olarak da adlandırılır) üçüncü nesil bir kuarktır.",
                "Aşağı ve acayip kuarklar gibi -⅓ kesirli elektrik yüküne sahiptir.",
                "Alt kuarklar B mezonlarında ve diğer egzotik parçacıklarda bulunur.",
                "1977'de Fermilab'da keşfedildi.",
                "Alt kuarkların incelenmesi, CP ihlali ve madde-antimadde asimetrisi hakkında önemli bilgiler sağlamıştır."
            ]
        };
        
        const topQuarkFacts = {
            en: [
                "The top quark is the heaviest of all known elementary particles.",
                "It has a fractional electric charge of +⅔, like the up and charm quarks.",
                "Due to its extremely high mass, the top quark decays before it can form hadrons.",
                "It was the last quark to be discovered, found in 1995 at Fermilab.",
                "The top quark's mass is close to the electroweak scale, suggesting it may play a special role in physics beyond the Standard Model."
            ],
            bs: [
                "Gornji kvark je najteži od svih poznatih elementarnih čestica.",
                "Ima frakcijski električni naboj od +⅔, kao gornji i šarmantni kvarkovi.",
                "Zbog svoje izuzetno velike mase, gornji kvark se raspada prije nego što može formirati hadrone.",
                "Bio je posljednji kvark koji je otkriven, pronađen 1995. godine u Fermilabu.",
                "Masa gornjeg kvarka je blizu elektro-slabe skale, što sugerira da bi mogao imati posebnu ulogu u fizici izvan Standardnog modela."
            ],
            tr: [
                "Üst kuark, bilinen tüm temel parçacıkların en ağırıdır.",
                "Yukarı ve tılsımlı kuarklar gibi +⅔ kesirli elektrik yüküne sahiptir.",
                "Son derece yüksek kütlesi nedeniyle, üst kuark hadronlar oluşturmadan önce bozunur.",
                "Keşfedilen son kuarktı, 1995'te Fermilab'da bulundu.",
                "Üst kuarkın kütlesi elektrozayıf ölçeğe yakındır, bu da Standart Model ötesi fizikte özel bir rol oynayabileceğini düşündürür."
            ]
        };
        
        // Update quark facts
        const upQuarkItems = document.querySelectorAll('#up-info ol li');
        const downQuarkItems = document.querySelectorAll('#down-info ol li');
        const strangeQuarkItems = document.querySelectorAll('#strange-info ol li');
        const charmQuarkItems = document.querySelectorAll('#charm-info ol li');
        const bottomQuarkItems = document.querySelectorAll('#bottom-info ol li');
        const topQuarkItems = document.querySelectorAll('#top-info ol li');
        
        upQuarkItems.forEach((item, index) => {
            item.textContent = upQuarkFacts[lang][index];
        });
        
        downQuarkItems.forEach((item, index) => {
            item.textContent = downQuarkFacts[lang][index];
        });
        
        strangeQuarkItems.forEach((item, index) => {
            item.textContent = strangeQuarkFacts[lang][index];
        });
        
        charmQuarkItems.forEach((item, index) => {
            item.textContent = charmQuarkFacts[lang][index];
        });
        
        bottomQuarkItems.forEach((item, index) => {
            item.textContent = bottomQuarkFacts[lang][index];
        });
        
        topQuarkItems.forEach((item, index) => {
            item.textContent = topQuarkFacts[lang][index];
        });
        
        // Update footer
        document.querySelector('.footer-right p').textContent = translations[lang].copyright;
        document.querySelector('.manus-badge span').textContent = translations[lang].madeWith;
        
        // Update active button
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.style.border = '2px solid #3498db';
            } else {
                btn.style.border = 'none';
            }
        });
    }
    
    // Event Listeners
    
    // Navigation
    atomBox.addEventListener('click', function() {
        showAtomView();
    });
    
    quarksBox.addEventListener('click', function() {
        showQuarksView();
    });
    
    backButtons.forEach(btn => {
        btn.addEventListener('click', showHomeView);
    });
    
    // Atom particle interactions
    atomParticles.forEach(particle => {
        particle.addEventListener('click', function() {
            hideAllParticleInfo();
            
            const particleType = this.dataset.particle;
            if (particleType === 'electron') {
                electronInfo.style.display = 'block';
            } else if (particleType === 'nucleus') {
                nucleusInfo.style.display = 'block';
            }
        });
    });
    
    // Quark interactions
    quarkElements.forEach(quark => {
        quark.addEventListener('click', function() {
            hideAllQuarkInfo();
            
            const quarkType = this.dataset.quark;
            if (quarkType === 'up') {
                upInfo.style.display = 'block';
            } else if (quarkType === 'down') {
                downInfo.style.display = 'block';
            } else if (quarkType === 'strange') {
                strangeInfo.style.display = 'block';
            } else if (quarkType === 'charm') {
                charmInfo.style.display = 'block';
            } else if (quarkType === 'bottom') {
                bottomInfo.style.display = 'block';
            } else if (quarkType === 'top') {
                topInfo.style.display = 'block';
            }
        });
    });
    
    // Language selection
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            updateLanguage(this.dataset.lang);
        });
    });
    
    // Initialize with English
    updateLanguage('en');
    
    // Start with home view
    showHomeView();
});
