// Edit rank and featured to change BOTH Home highlights and Portfolio ordering.
// Featured: the two lowest-ranked projects with featured:true appear on Home.
export const projects = [
  {
    id:'bubbly-wubbly',rank:1,featured:true,title:'Bubbly Wubbly',eyebrow:'C++ • CUSTOM ENGINE • TEAM PROJECT',year:'2025–2026',
    summary:'A top-down adventure game built in a custom C++ engine, featuring a graveyard level, enemy encounters, and a boss battle.',
    overview:'Bubbly Wubbly is a team-developed top-down adventure game featuring exploration, combat, and a boss encounter. I served as Producer and Design Lead while programming core gameplay systems and enemy behavior.',
    role:'Producer & Design Lead · Gameplay Programmer',team:'Team of 4',technologies:['C++','Custom Game Engine','Enemy AI','Behavior Trees','Gameplay Systems'],
    contributions:['Designed and implemented enemy and boss AI with a reusable behavior-tree system and customizable attacks.','Developed item, inventory, collision, and stat systems in the custom engine.','Designed the player-facing graveyard level and refined encounters and game flow through playtesting.','Helped coordinate the team as Producer and Design Lead.'],
    image:'/media/bubbly-wubbly/combat.png',gallery:['/media/bubbly-wubbly/combat.png','/media/bubbly-wubbly/exploration.png','/media/bubbly-wubbly/magic-effect.png'],trailer:'https://youtu.be/vUk7OONuoZI',github:''
  },
  {
    id:'casino-simulator',rank:2,featured:true,title:'Casino Simulator',eyebrow:'C / C++ • GAME SYSTEMS • TEAM PROJECT',year:'2025',
    summary:'A team-developed casino game with Three Card Poker, Blackjack, and slot machines, supported by reusable game and betting systems.',
    overview:'Casino Simulator is a collaborative casino game featuring Three Card Poker, Blackjack, and slot machines. I built the Three Card Poker gameplay and collaborated on betting logic, focusing on reusable mechanics that could support other card games.',
    role:'Gameplay Programmer · Card Game Systems',team:'Team of 5',technologies:['C / C++','Gameplay Logic','Reusable Systems','Testing & Debugging'],
    contributions:['Implemented Three Card Poker rules, card interactions, and game flow.','Worked with a teammate on the shared betting system.','Structured the poker implementation for reuse and extension to other card games.','Created the card artwork and contributed additional art assets.','Tested and refined gameplay behavior throughout development.'],
    image:'/media/casino-simulator/shot-5.png',gallery:['/media/casino-simulator/shot-5.png','/media/casino-simulator/shot-6.png','/media/casino-simulator/shot-2.png','/media/casino-simulator/shot-3.png','/media/casino-simulator/shot-4.png','/media/casino-simulator/shot-1.png'],trailer:'https://youtu.be/YsoZWkrOuJ8',trailerNote:'Temporary trailer — replace with improved trailer when available.',github:''
  },
  {
    id:'horror-game',rank:3,featured:false,title:'Horror Game (In Development)',eyebrow:'UNREAL ENGINE 5 • ENEMY AI • TEAM PROJECT',year:'2026–2027',
    summary:'An interdisciplinary Unreal Engine 5 horror game, with my current focus on enemy AI built using behavior trees.',
    overview:'An in-development horror game created by an interdisciplinary team of programmers, artists, and designers in Unreal Engine 5.',
    role:'Gameplay / AI Programmer',team:'Team of 8',technologies:['Unreal Engine 5','Behavior Trees','Enemy AI','Testing'],
    contributions:['Developed an enemy AI system using behavior trees for flexible enemy behaviors.','Collaborate with artists, designers, and programmers on an interdisciplinary game team.','Test and improve gameplay features as development progresses.'],image:'',gallery:[],trailer:'',github:''
  },
  {
    id:'custom-controller',rank:4,featured:false,title:'Custom Game Controller',eyebrow:'ARM ASSEMBLY • HARDWARE / SOFTWARE',year:'',
    summary:'A functional custom controller combining basic circuitry with low-level input programming.',
    overview:'A custom-built game controller connecting basic circuitry with input logic programmed in ARM Assembly.',
    role:'Hardware & Software Developer',team:'',technologies:['ARM Assembly','Circuitry','Input Programming'],
    contributions:['Built a functional controller using basic circuitry.','Programmed controller input behavior in ARM Assembly.','Tested interactions between hardware inputs and software behavior.'],image:'',gallery:[],trailer:'',github:''
  }
];
export const sortedProjects = [...projects].sort((a,b)=>a.rank-b.rank);
export const featuredProjects = sortedProjects.filter(p=>p.featured).slice(0,2);
