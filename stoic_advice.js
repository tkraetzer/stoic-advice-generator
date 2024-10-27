function generateRandomNumber(num) {
    // Gets a number from 0 -> num - 1
    return Math.floor(Math.random() * num);
}

const marcusAureliusWisdom = {
    thought: [
        "The soul becomes dyed with the color of its thoughts.",
        "You have power over your mind - not outside events. Realize this, and you will find strength.",
        "The happiness of your life depends upon the quality of your thoughts."
    ],
    selfDiscipline: [
        "Waste no more time arguing about what a good man should be. Be one.",
        "Let not your mind run on what you lack as much as on what you have already.",
        "If it is not right, do not do it; if it is not true, do not say it."
    ],
    perspective: [
        "It is not death that a man should fear, but he should fear never beginning to live.",
        "The best revenge is to be unlike him who performed the injury.",
        "Dwell on the beauty of life. Watch the stars, and see yourself running with them."
    ]
};

// Store the 'wisdom' in an array
let stoicWisdom = [];

// Iterate over the object
for (let category in marcusAureliusWisdom) {
    let optionIdx = generateRandomNumber(marcusAureliusWisdom[category].length);

    // Use the object's properties to customize the message
    switch (category) {
        case 'thought':
            stoicWisdom.push(`Thought: "${marcusAureliusWisdom[category][optionIdx]}"`);
            break;
        case 'selfDiscipline':
            stoicWisdom.push(`Self-Discipline: "${marcusAureliusWisdom[category][optionIdx]}"`);
            break;
        case 'perspective':
            stoicWisdom.push(`Perspective: "${marcusAureliusWisdom[category][optionIdx]}"`);
            break;
        default:
            stoicWisdom.push('There is not enough wisdom to share.');
    }
}

function formatWisdom(wisdom) {
    // Combine the wisdom into a single string
    const formatted = stoicWisdom.join('\n');
    console.log(formatted);
}

formatWisdom(stoicWisdom);
