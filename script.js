const facts = [
    "After death, the human brain stays active for about 7 minutes, potentially replaying memories in a final 'dream'.",
    "There are more possible games of chess than there are atoms in the observable universe.",
    "A certain species of fungi can turn ants into literal zombies, controlling their bodies until they die.",
    "The deep ocean is 95% unexplored; we know more about the surface of Mars than our own seabed.",
    "There are 'rogue planets' wandering through the darkness of space, not orbiting any star.",
    "Your brain is perfectly capable of creating false memories that you believe are 100% real.",
    "The 'Dykes' disappearance in 1959 remains one of the most chilling unsolved mysteries in modern history.",
    "Locked-in syndrome is a condition where a person is fully conscious but cannot move or communicate except for their eyes.",
    "In 1977, a radio signal from deep space was detected that lasted 72 seconds. It has never been explained.",
    "There are millions of tons of plastic in the ocean, and we are now finding it in the blood of newborns."
];

const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
const revealBtn = document.getElementById('revealBtn');
const factDisplay = document.getElementById('factDisplay');

// Custom Cursor Movements
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// Cursor Interaction on Buttons/Cards
const interactables = document.querySelectorAll('.reveal-btn, .fact-card');
interactables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.borderColor = '#ffffff';
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = 'var(--accent-red)';
    });
});

// Fact Reveal Logic
let lastIndex = -1;

function getRandomFact() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * facts.length);
    } while (newIndex === lastIndex);
    
    lastIndex = newIndex;
    return facts[newIndex];
}

revealBtn.addEventListener('click', () => {
    // Animation trigger
    factDisplay.style.display = 'block';
    factDisplay.style.animation = 'none';
    factDisplay.offsetHeight; /* trigger reflow */
    factDisplay.style.animation = 'revealFact 0.8s forwards';
    
    factDisplay.textContent = getRandomFact();
    
    // Add a slight 'glitch' effect to the button on click
    revealBtn.style.animation = 'glitch 0.2s linear';
    setTimeout(() => {
        revealBtn.style.animation = '';
    }, 200);
});
