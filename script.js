// ===== TIMELINE MODAL DATA =====
const timelineData = {
  "1783": {
    title: "Simón Bolívar Is Born",
    text: "Simón José Antonio de la Santísima Trinidad Bolívar y Palacios is born on July 24, 1783 in Caracas, Venezuela, into the Creole elite. His parents die before he turns ten, and he is raised by tutors, eventually traveling to Europe where he absorbs Enlightenment philosophy that will shape his revolutionary vision.",
    significance: "Historical Significance: Bolívar's aristocratic background gave him access to education and political networks, but his Creole identity — excluded from the highest colonial offices — would fuel his revolutionary commitment."
  },
  "1808": {
    title: "Napoleon Invades Spain — The Empire Fractures",
    text: "Napoleon Bonaparte forces the abdication of Spanish King Ferdinand VII, creating a crisis of legitimacy throughout the Spanish empire. Local juntas form across Latin America claiming to govern 'in the name of the king' — but in practice, exercising unprecedented local autonomy. The colonial framework begins to crack.",
    significance: "Historical Significance: The Napoleonic Crisis removed the ideological foundation of colonial obedience. Once the king was gone, there was no longer a clear reason why colonists needed to defer to distant imperial authority."
  },
  "1810": {
    title: "Independence Movements Begin",
    text: "Across Spanish colonies in South America, independence movements take hold. In Bogotá, the 'El Florero de Llorente' incident triggers a popular uprising on July 20th — a date celebrated as Colombian Independence Day. In Venezuela, a junta overthrows the colonial governor. Bolívar emerges as a leading revolutionary voice.",
    significance: "Historical Significance: 1810 marks the irreversible beginning of Latin American independence, though full independence would take nearly a decade of brutal warfare to secure."
  },
  "1819a": {
    title: "Congress of Angostura",
    text: "On February 15, 1819, Bolívar delivers the Angostura Address — a masterwork of political philosophy. He argues Latin America requires a stronger executive than the U.S. model, proposes a hereditary senate as a stabilizing institution, and declares the union of Venezuela and New Granada as Gran Colombia. Congress approves the plan.",
    significance: "Historical Significance: The Angostura Address remains one of the most sophisticated pieces of political philosophy produced in the Americas — a frank assessment of the challenges facing postcolonial democracy."
  },
  "1819b": {
    title: "Battle of Boyacá — Independence Secured",
    text: "On August 7, 1819, after a grueling march over the freezing Andes, Bolívar's forces meet the Spanish royalist army at the bridge of Boyacá and defeat them in under two hours. The Spanish viceroy flees Bogotá before Bolívar even arrives. Three days later, Bolívar enters the capital to a hero's welcome. New Granada is free.",
    significance: "Historical Significance: Boyacá was the decisive turning point of Colombian independence. August 7th is still celebrated as a national holiday in Colombia today."
  },
  "1821": {
    title: "Gran Colombia Officially Founded",
    text: "The Constitution of Cúcuta is ratified on August 30, 1821, formally establishing the Republic of Gran Colombia. The republic unifies present-day Colombia, Venezuela, Ecuador, and Panama under a centralized government. Bolívar becomes the first president; Francisco de Paula Santander serves as Vice President. The republic spans over 2.5 million square kilometers.",
    significance: "Historical Significance: Gran Colombia was the largest political unit in South American history. Its founding represented the high-water mark of Bolívar's political vision."
  },
  "1826": {
    title: "Congress of Panama — A Pan-American Dream",
    text: "Bolívar convenes the Congress of Panama in June 1826, inviting all newly independent Latin American republics to form a continental confederation. Only four nations send representatives. The congress produces a treaty that none of the participating nations ratify. Bolívar's Pan-American vision fails in his lifetime but foreshadows regional integration movements 130 years later.",
    significance: "Historical Significance: The Congress of Panama was the first attempt at Pan-American political unity, inspiring later organizations like the OAS."
  },
  "1828": {
    title: "Bolívar Declares Dictatorship",
    text: "After a constitutional convention in Ocaña deadlocks completely, Bolívar issues the Decree of Dictatorship on August 27, 1828. He suspends the constitution and rules by decree. In September, he survives an assassination attempt; Santander is implicated and exiled. The dictatorship alienates key supporters and confirms critics' worst fears about his authoritarian tendencies.",
    significance: "Historical Significance: The dictatorship transformed 'El Libertador' into, in the eyes of many, 'El Déspota' — and accelerated the republic's collapse."
  },
  "1829": {
    title: "Venezuela Breaks Away",
    text: "José Antonio Páez convenes a congress in Caracas that votes to separate Venezuela from Gran Colombia in November 1829. Páez, the powerful military leader who had fought alongside Bolívar, becomes the first president of independent Venezuela. Bolívar calls the secession 'political suicide' but is too ill and politically weakened to prevent it.",
    significance: "Historical Significance: Venezuela's departure was the fatal blow to Gran Colombia — proving not even Bolívar's homeland could sustain the union."
  },
  "1830a": {
    title: "Ecuador Declares Independence",
    text: "Ecuador, under General Juan José Flores, declares independence from Gran Colombia on May 13, 1830. Ecuador had always been the most geographically isolated part of the republic, separated from Bogotá and Caracas by the Andes. Flores becomes Ecuador's first president.",
    significance: "Historical Significance: Ecuador's departure left only the territory of present-day Colombia and Panama in the remnant republic — a shadow of Bolívar's vision."
  },
  "1830b": {
    title: "Bolívar Resigns and Dies",
    text: "On April 27, 1830, Simón Bolívar resigns the presidency of Gran Colombia, planning to go into exile in Europe. He never makes it. Suffering from tuberculosis, financially ruined, and heartbroken by the collapse of his republic, he dies on December 17, 1830, at the hacienda San Pedro Alejandrino near Santa Marta, Colombia. He was 47 years old.",
    significance: "Historical Significance: Bolívar died believing his life's work had failed. History proved far kinder — he is today celebrated as the greatest figure in Latin American history."
  },
  "1831": {
    title: "Gran Colombia Officially Dissolved",
    text: "On November 19, 1831, the Congress of Nueva Granada formally declares the dissolution of Gran Colombia and the establishment of the Republic of New Granada. The great experiment in continental unity is over. The territories now exist as three separate republics: New Granada (Colombia/Panama), Venezuela, and Ecuador.",
    significance: "Historical Significance: The dissolution set the political map of northern South America as it exists today. The unresolved tensions it left behind would define Colombian politics for the next 170 years."
  }
};

// ===== MODAL FUNCTIONS =====
function openModal(year) {
  const data = timelineData[year];
  if (!data) return;
  document.getElementById('modalYear').textContent = year.replace('a','').replace('b','');
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalText').textContent = data.text;
  document.getElementById('modalSignificance').textContent = data.significance;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(5,5,5,0.97)';
  } else {
    navbar.style.background = 'rgba(10,10,10,0.92)';
  }
});

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(function(el) { observer.observe(el); });
}

// ===== PARALLAX HERO =====
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY < window.innerHeight) {
      hero.style.backgroundPositionY = (window.scrollY * 0.4) + 'px';
    }
  });
}

// ===== ACTIVE NAV HIGHLIGHT =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(function(link) {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = '#F5C518';
          }
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(function(section) { observer.observe(section); });
}

// ===== TIMELINE DRAG TO SCROLL =====
function initTimelineDrag() {
  const container = document.querySelector('.timeline-container');
  if (!container) return;
  let isDown = false, startX, scrollLeft;
  container.addEventListener('mousedown', function(e) {
    isDown = true; container.style.cursor = 'grabbing';
    startX = e.pageX - container.offsetLeft; scrollLeft = container.scrollLeft;
  });
  container.addEventListener('mouseleave', function() { isDown = false; container.style.cursor = ''; });
  container.addEventListener('mouseup', function() { isDown = false; container.style.cursor = ''; });
  container.addEventListener('mousemove', function(e) {
    if (!isDown) return; e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    container.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  initScrollReveal();
  initParallax();
  initActiveNav();
  initTimelineDrag();
});
