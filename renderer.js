const magicData = {
    organizations: [
        {
            name: "International Brotherhood of Magicians (IBM)",
            description: "The world's largest organization for magicians, with over 15,000 members worldwide. Perfect for beginners looking to connect with local magic communities.",
            website: "https://www.magician.org",
            membershipCost: "$65/year",
            benefits: ["Monthly magazine", "Local ring meetings", "Annual convention", "Ethics guidelines"]
        },
        {
            name: "Society of American Magicians (SAM)",
            description: "Founded in 1902, SAM is the oldest magical society in the world. Great for networking and learning from experienced performers.",
            website: "https://www.magicsam.com",
            membershipCost: "$75/year",
            benefits: ["M-U-M Magazine", "Local assembly meetings", "National convention", "Magic endowment fund"]
        },
        {
            name: "The Magic Circle",
            description: "A prestigious British magical society with a famous clubhouse in London. Known for high standards and exclusive membership.",
            website: "https://themagiccircle.co.uk",
            membershipCost: "£150/year",
            benefits: ["Access to clubhouse", "The Magic Circular magazine", "Library access", "Special events"]
        },
        {
            name: "Academy of Magical Arts",
            description: "Home of the world-famous Magic Castle in Hollywood. A dream destination for any magician.",
            website: "https://www.magiccastle.com",
            membershipCost: "$750/year",
            benefits: ["Magic Castle access", "Genii Magazine", "Special performances", "Networking opportunities"]
        }
    ],
    
    books: [
        {
            title: "The Royal Road to Card Magic",
            authors: "Jean Hugard & Frederick Braue",
            description: "The essential beginner's guide to card magic. Start here for a solid foundation in sleight of hand.",
            difficulty: "beginner",
            price: "$15-20",
            topics: ["Card handling", "Basic sleights", "Classic tricks", "Presentation"]
        },
        {
            title: "Mark Wilson's Complete Course in Magic",
            authors: "Mark Wilson",
            description: "A comprehensive encyclopedia covering all aspects of magic. Perfect for beginners who want to explore different types of magic.",
            difficulty: "beginner",
            price: "$25-35",
            topics: ["Cards", "Coins", "Ropes", "Mentalism", "Stage magic"]
        },
        {
            title: "Modern Coin Magic",
            authors: "J.B. Bobo",
            description: "The bible of coin magic. Everything you need to know about performing miracles with coins.",
            difficulty: "intermediate",
            price: "$20-25",
            topics: ["Coin sleights", "Vanishes", "Productions", "Routines"]
        },
        {
            title: "Strong Magic",
            authors: "Darwin Ortiz",
            description: "Advanced theory on creating powerful magical experiences. Essential reading for serious students.",
            difficulty: "advanced",
            price: "$60-80",
            topics: ["Theory", "Psychology", "Showmanship", "Audience management"]
        },
        {
            title: "The Amateur Magician's Handbook",
            authors: "Henry Hay",
            description: "A classic introduction to magic with clear instructions and helpful illustrations.",
            difficulty: "beginner",
            price: "$12-18",
            topics: ["Basic principles", "Simple tricks", "Performance tips", "Practice advice"]
        }
    ],
    
    kits: [
        {
            name: "Melissa & Doug Magic in a Snap",
            description: "Perfect first magic set for absolute beginners. Includes easy tricks with special props.",
            difficulty: "beginner",
            price: "$20-30",
            contents: ["Magic wand", "Card tricks", "Rope tricks", "Instruction booklet"],
            ageRange: "8+"
        },
        {
            name: "Marvin's Magic 365 Tricks",
            description: "A year's worth of magic tricks to learn. Great variety and good quality props.",
            difficulty: "beginner",
            price: "$40-50",
            contents: ["365 different tricks", "Props included", "Online tutorials", "Performance tips"],
            ageRange: "8+"
        },
        {
            name: "Ellusionist Starter Kit",
            description: "Professional-quality beginner set focusing on card magic. Includes premium bicycle cards.",
            difficulty: "beginner",
            price: "$60-80",
            contents: ["Premium cards", "Online tutorials", "Gimmicks", "Performance rights"],
            ageRange: "13+"
        },
        {
            name: "Penn & Teller Magic Kit",
            description: "Learn tricks from the masters themselves. Includes exclusive content from P&T.",
            difficulty: "intermediate",
            price: "$30-40",
            contents: ["Signature tricks", "Video instructions", "Special props", "Performance advice"],
            ageRange: "12+"
        }
    ],
    
    tricks: [
        {
            name: "The French Drop",
            category: "Coin Magic",
            description: "The fundamental coin vanish that every magician must master.",
            difficulty: "beginner",
            requirements: "Any coin",
            learningTime: "1-2 weeks"
        },
        {
            name: "Double Lift",
            category: "Card Magic",
            description: "Show two cards as one - the most useful card sleight in magic.",
            difficulty: "beginner",
            requirements: "Deck of cards",
            learningTime: "2-3 weeks"
        },
        {
            name: "Invisible Deck",
            category: "Mentalism",
            description: "A spectator names any card and it's the only reversed card in the deck.",
            difficulty: "beginner",
            requirements: "Special deck ($15)",
            learningTime: "1 day"
        },
        {
            name: "Cups and Balls",
            category: "Classic Magic",
            description: "The oldest trick in magic - balls appear, disappear, and penetrate cups.",
            difficulty: "intermediate",
            requirements: "3 cups, 4 balls",
            learningTime: "2-3 months"
        },
        {
            name: "Ambitious Card",
            category: "Card Magic",
            description: "A signed card repeatedly rises to the top of the deck.",
            difficulty: "intermediate",
            requirements: "Deck of cards",
            learningTime: "1 month"
        }
    ],
    
    tips: [
        {
            title: "Practice in Front of a Mirror",
            content: "Always practice your tricks in front of a mirror to see what your audience sees. This helps catch flashing and improve your angles."
        },
        {
            title: "Never Reveal the Secret",
            content: "The magician's code is sacred. Never reveal how a trick is done, no matter how much someone begs. The mystery is what makes magic magical."
        },
        {
            title: "Start with Self-Working Tricks",
            content: "Begin with mathematical and self-working tricks to build confidence before moving to sleight of hand. Success builds motivation."
        },
        {
            title: "Develop Your Character",
            content: "Magic is more than tricks - it's about creating an experience. Develop your magical persona and presentation style."
        },
        {
            title: "Join a Local Magic Club",
            content: "Nothing accelerates learning like being around other magicians. Find your local IBM ring or SAM assembly."
        },
        {
            title: "Record Yourself Performing",
            content: "Video is the best teacher. Record your practice sessions and performances to identify areas for improvement."
        },
        {
            title: "Master a Few Tricks Well",
            content: "It's better to perform 5 tricks perfectly than 50 tricks poorly. Quality over quantity always."
        },
        {
            title: "Learn from Multiple Sources",
            content: "Books, videos, live performances, and mentors all offer different perspectives. Diversify your learning."
        },
        {
            title: "Respect Your Audience",
            content: "Never make fun of spectators or make them feel foolish. Magic should bring joy and wonder, not embarrassment."
        },
        {
            title: "Keep a Magic Journal",
            content: "Document your journey, trick ideas, performance notes, and audience reactions. This becomes invaluable over time."
        }
    ]
};

function renderOrganizations() {
    const container = document.getElementById('organizations-container');
    container.innerHTML = '';
    
    magicData.organizations.forEach(org => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${org.name}</h3>
            <p>${org.description}</p>
            <div class="card-meta">
                <span class="price">${org.membershipCost}</span>
            </div>
            <p style="margin-top: 10px;"><strong>Benefits:</strong></p>
            <ul style="margin-left: 20px; color: rgba(255,255,255,0.8);">
                ${org.benefits.map(b => `<li>${b}</li>`).join('')}
            </ul>
        `;
        container.appendChild(card);
    });
}

function renderBooks() {
    const container = document.getElementById('books-container');
    container.innerHTML = '';
    
    magicData.books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p style="color: #ffd700; font-size: 0.9rem; margin-bottom: 10px;">by ${book.authors}</p>
            <p>${book.description}</p>
            <div class="card-meta">
                <span class="difficulty ${book.difficulty}">${book.difficulty}</span>
                <span class="price">${book.price}</span>
            </div>
            <p style="margin-top: 10px;"><strong>Topics:</strong> ${book.topics.join(', ')}</p>
        `;
        container.appendChild(card);
    });
}

function renderKits() {
    const container = document.getElementById('kits-container');
    container.innerHTML = '';
    
    magicData.kits.forEach(kit => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${kit.name}</h3>
            <p>${kit.description}</p>
            <p style="margin-top: 10px;"><strong>Age Range:</strong> ${kit.ageRange}</p>
            <div class="card-meta">
                <span class="difficulty ${kit.difficulty}">${kit.difficulty}</span>
                <span class="price">${kit.price}</span>
            </div>
            <p style="margin-top: 10px;"><strong>Contents:</strong></p>
            <ul style="margin-left: 20px; color: rgba(255,255,255,0.8);">
                ${kit.contents.map(c => `<li>${c}</li>`).join('')}
            </ul>
        `;
        container.appendChild(card);
    });
}

function renderTricks() {
    const container = document.getElementById('tricks-container');
    container.innerHTML = '';
    
    magicData.tricks.forEach(trick => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${trick.name}</h3>
            <p style="color: #ffd700; font-size: 0.9rem; margin-bottom: 10px;">${trick.category}</p>
            <p>${trick.description}</p>
            <p style="margin-top: 10px;"><strong>Requirements:</strong> ${trick.requirements}</p>
            <p><strong>Learning Time:</strong> ${trick.learningTime}</p>
            <div class="card-meta">
                <span class="difficulty ${trick.difficulty}">${trick.difficulty}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderTips() {
    const container = document.getElementById('tips-container');
    container.innerHTML = '';
    
    magicData.tips.forEach(tip => {
        const tipItem = document.createElement('div');
        tipItem.className = 'tip-item';
        tipItem.innerHTML = `
            <h3>${tip.title}</h3>
            <p>${tip.content}</p>
        `;
        container.appendChild(tipItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderOrganizations();
    renderBooks();
    renderKits();
    renderTricks();
    renderTips();
    
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.dataset.section;
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });
        });
    });
});