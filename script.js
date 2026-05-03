const facts = [
    "After death, the human brain stays active for about 7 minutes, potentially replaying memories in a final 'dream'.",
    "There are more possible games of chess than there are atoms in the observable universe.",
    "A certain species of fungi can turn ants into literal zombies, controlling their bodies until they die.",
    "The deep ocean is 95% unexplored; we know more about the surface of Mars than our own seabed.",
    "There are 'rogue planets' wandering through the darkness of space, not orbiting any star.",
    "Your brain is perfectly capable of creating false memories that you believe are 100% real.",
    "The 'Dyatlov Pass' incident in 1959 remains one of the most chilling unsolved mysteries in modern history.",
    "Locked-in syndrome is a condition where a person is fully conscious but cannot move or communicate except for their eyes.",
    "In 1977, a radio signal from deep space was detected that lasted 72 seconds. It has never been explained.",
    "There are millions of tons of plastic in the ocean, and we are now finding it in the blood of newborns.",
    "During the 18th century, it was common practice to bury people with a bell tied to their finger just in case they were buried alive.",
    "The Mariana Trench is so deep that if you dropped Mount Everest into it, the peak would still be more than a mile underwater.",
    "Your body replaces about 330 billion cells daily, meaning a large part of you is entirely new every few months.",
    "The universe is expanding so rapidly that there are galaxies we will never be able to reach, even if we travel at the speed of light forever.",
    "There's a natural phenomenon called 'Skyquakes' where loud booms are heard from the sky with no apparent source.",
    "Some tumors can grow hair, teeth, and even eyes. They are called teratomas.",
    "If you look at the Andromeda galaxy, you are seeing it as it was 2.5 million years ago.",
    "A sneeze travels out of your mouth at over 100 miles per hour.",
    "There is a mass of floating garbage in the Pacific Ocean that is twice the size of Texas.",
    "Black holes can theoretically stretch you into a thin line of atoms before crushing you, a process scientists call 'spaghettification'.",
    "Sleep paralysis is often accompanied by terrifying hallucinations because your brain is awake but your body is still immobilized in REM sleep.",
    "Rats can multiply so quickly that in 18 months, two rats could have over a million descendants.",
    "Vampire bats will share blood with other roost-mates who didn't find food, effectively saving them from starvation.",
    "The smell of freshly cut grass is actually a chemical distress signal released by the plants.",
    "A human bite is more likely to become infected than a dog bite due to the massive amount of bacteria in the human mouth.",
    "Space is completely silent. Since there is no atmosphere in the vacuum of space, sound has no medium to travel through.",
    "The 'Bloody Mary' illusion works because staring into a mirror in low light causes the brain to distort facial features.",
    "There are tiny mites living in the pores of your face right now. They eat dead skin cells and lay eggs in your pores.",
    "In a single teaspoon of soil, there are more microorganisms than there are people on Earth.",
    "At any given moment, there are roughly 1,800 thunderstorms occurring worldwide.",
    "Cotard's Delusion is a rare mental disorder where the patient believes they are dead, missing their soul, or missing internal organs.",
    "Tardigrades can survive the vacuum of space, extreme radiation, and temperatures ranging from near absolute zero to well above the boiling point of water.",
    "The chance of you being born is roughly 1 in 400 trillion.",
    "If the Sun were to suddenly disappear, we wouldn't know about it for 8 minutes and 20 seconds."
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

// Chatbot Toggle Logic
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
    
    // Add glitch effect to toggle button
    chatbotToggle.style.animation = 'glitch 0.2s linear';
    setTimeout(() => {
        chatbotToggle.style.animation = '';
    }, 200);
});

closeChatbot.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
});

// Also make the toggle elements interactive with the custom cursor
const newInteractables = document.querySelectorAll('.chatbot-toggle, .close-chatbot');
newInteractables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.borderColor = '#ffffff';
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = 'var(--accent-red)';
    });
});
