/* ==========================================================================
   THE BOOK OF US — JAVASCRIPT & PERSONALIZATION DATA FOR SADHANA
   ========================================================================== */

/**
 * --------------------------------------------------------------------------
 * PERSONALIZATION CONFIGURATION (EDIT YOUR MESSAGES & CREDENTIALS HERE!)
 * --------------------------------------------------------------------------
 */
const birthdayData = {
  // 1. Girlfriend's Name
  herName: "Sadhana",

  // 2. Login Credentials (Privacy Gate on Book Cover)
  username: "sadhana",
  password: "07/03/2026",

  // 3. Short Birthday Message (Inside Digital Envelope on Chapter III)
  shortMessage: "Enakku neraiya aasa irukku indha special day-va un kooda serndhu celebrate panni, idha oru memorable day-va aakkanum nu!\n\nBut ippo namma adhellam panna mudiyadhu, so ennala mudinja oru kutty surprise pannirukken pattu... I hope it will make your day special! ❤️",

  // 4. Long Personal Birthday Message (Chapter IV Letter Card)
  personalMessage: "Thangoo,\n\nI have already told you lots and lots of things about you and us, but to make you feel special today, I am going to say a few things straight out of my heart.\n\nI don't even know where to start... Naan unna first-u paatha appove, I had something for you — adhu enakkum appo puriyala, I guess. But by my luck and stuffs, namma rendu perum adjacent batch numbers-ah vanthom! Because of that, we got a chance to speak, and now we are right here.\n\nFrom a phase where both of us wanted to die, to a phase where both of us wish to live for everything together — it all happened without our knowledge, for real. ❤️\n\nIndha page-ku idhu podhum, I guess! Vitaa neraiya sollitae iruppan. Nee next page open pannu di thangoo adhula innu neriya irrukum...",

  // 5. Chapter V: Unaku Theriyama Nee Enakaga Senjadhu (Parchment Scrap Notes)
  chapter5Data: {
    mainTitle: "Unaku Theriyama...",
    introPart1: "Unaku Theriyama...",
    introPart2: "Nee Enakaga Neraya Senjiruka.",
    introSubline: "Andha kutti vishyangal enaku evlo special nu unaku theriyadhu thangoo...",
    subtitle: "Nee enakkaga panna kutti kutti vishyangal...",
    subNote: "Unakku idhu nyabagam kooda irukkadhu... aana enaku irukku.",
    notes: [
      {
        id: 1,
        numStr: "Note 01",
        title: "That one time you listened...",
        heading: "Unaku idhu theriyanum nu avasiyam illa, aana...",
        message: "It's not like that was the only time, but Kutralam pona appo enakkum yaarum illadha maadhiri irundhuchu...\n\nBut nee naan sonnadhellam kettu, even call-la panni en kooda pesa try panna di thangoo. ❤️"
      },
      {
        id: 2,
        numStr: "Note 02",
        title: "When you stayed...",
        heading: "Unaku idhu theriyanum nu avasiyam illa, aana...",
        message: "You stayed when you didn't have to...\n\nIdhu eppo na, after that Swarnika problem, nee enna forgive panni stayed even though you didn't have to. Because of that, we are together right now. ❤️"
      },
      {
        id: 3,
        numStr: "Note 03",
        title: "You made me feel less alone...",
        heading: "Unaku idhu theriyanum nu avasiyam illa, aana...",
        message: "Yeah, nee idha panni irukka... How nu solren keallu:\n\nNee epovum enaku reels anuppuva, en kooda sanda poduva, nee low-ah feel panna kooda en kooda pesuva, and neraiya stuffs en kooda share pannuva. So... I never felt alone di thangoo. ❤️"
      },
      {
        id: 4,
        numStr: "Note 04",
        title: "Somehow, you made a difference...",
        heading: "Unaku idhu theriyanum nu avasiyam illa, aana...",
        message: "Naan epovum solluvan la... like naan idhuvaraikkum endha ponnu kitta panadha vishyam ellam un kitta pannirukken nu!\n\nYou made me so comfortable and feel so different from others I guess, adhaan namma ippo inga irukkom di thangoo. ❤️"
      },
      {
        id: 5,
        numStr: "Note 05",
        title: "Something you probably don't remember...",
        heading: "Unaku idhu theriyanum nu avasiyam illa, aana...",
        message: "Unakku idhu maximum nyabagam irukkadhu I guess...\n\nOne day because of you, D.Praveen enna tease pannanga (with GF and stuff). Appo if you thought, nee apdiye vitirukalam. But nee unna change pannittu, vanthu en kitta sorry kettu pesna di thangoo. ❤️"
      },
      {
        id: 6,
        numStr: "Note 06",
        title: "Just by being you...",
        heading: "Unaku idhu theriyanum nu avasiyam illa, aana...",
        message: "Just by being you — in the sense unoda character, attitude, and stuffs...\n\nNee enna eppovo vittu poyirukalam (meaning pesuradha stop pannirukalam), because that was your character. But when it comes to me, nee un character-ae change pannikitta di thangoo. You might doubt this, but idhu thaan unmai, and I liked this a lot! ❤️"
      }
    ]
  },

  // 6. The Pages We Haven't Written Yet (Chapter VI - 5 Future Memory Notes)
  futureMemories: [
    {
      id: 1,
      tag: "Future Memory 01",
      icon: "🌅",
      title: "Places We Haven't Seen Yet",
      heading: "Innum namma serndhu poga vendiya edangal neraya irukku...",
      message: "Namma innum paaka vendiya edangal neraya irukku thangooo... In fact, namma ippo dhaan namma journey-aye start pannirukkom! So namakku innum neraya time irukku di thangoo. Namma nalla ooru suthalaam, nalla ooru porukkalaam! Nee poganum nu nenaikkura edathukku ellam unna koottittu poganum thangoo, avlothaan... ❤️"
    },
    {
      id: 2,
      tag: "Future Memory 02",
      icon: "☕",
      title: "A Random Day That Becomes A Memory",
      heading: "Un kooda irukura ella naalume special dhaan...",
      message: "Idhukkum vandhu NIT-ah oru day-va sollalaam, but ippo recent-ah vandha day adhukku mela special di thangoo... Indha Hackwell-la irundha andha 2 days pure bliss! Vaazhkaila marakka mudiyaadha two days for sure di thangoo. Enakku andha naan unkitta sonnen-la, \"I wanna say you something\" nu... adhu kooda oru unforgettable day dhaan di thangoo. Un kooda irukura ella day-ume marakka mudiyaadha naal dhaan di thangoo! ✨❤️"
    },
    {
      id: 3,
      tag: "Future Memory 03",
      icon: "😄",
      title: "Things We'll Laugh About Someday",
      heading: "Future-la namma senthu sirikka pora vishyangal...",
      message: "Neraya vishyam irukku di! After marriage we will be like, \"Namma ipdi laamaa irundhom?\" nu. Eppavum video call panni pesittu romba clingy-ah irundhadhu, apram nee video call-la irukkum podhu screen share pannadhu, namma eppovume kiss pannikitadhu... innum neraya irukku di thangoo! Idhellam future-la namma think panni paartha confirm-ah senthu siripom for sure! 😄❤️"
    },
    {
      id: 4,
      tag: "Future Memory 04",
      icon: "💍",
      title: "A Day We'll Always Remember",
      heading: "Namma eppovume marakka maattom di thangoo...",
      message: "Naan maximum ella important days-ume nyabagam vechuppan di thangoo... But a day we'll always remember-na, NIT onnu confirm, apram this Hackwell! Apram innum future-la evlo azhagana days varum nu yaarukku theriyum... Paappom! Namma special days eppovume namma nenjula irukkum. 💍✨"
    },
    {
      id: 5,
      tag: "Future Memory 05",
      icon: "🕊️",
      title: "Pages Still Waiting To Be Written",
      heading: "Namma kadhai innum ezhudha start pannala ma...",
      message: "Innum namma story-aye ezhudha start pannala di thangoo... Idhukku appram dhaan neraya ezhudhanum! Adhoda starting point Hackwell and NIT, as these are the most important and precious things that happened to us till now di thangoo! Innum evlo azhagana blank pages namakkaga kaathirukku... 🕊️💌"
    }
  ],

  // 7. Final Birthday Message (Chapter VIII)
  finalMessage: "Innaiku un birthday di thangoo... 🎂✨ Aana ennala unakaga ippo perusa edhuvum panna mudiyala, really sorry di pattu! 🥺❤️\n\nAana unakaga indha website-ah naan romba kashta pattu aasaiyaa senjirukken... Unakke theriyum idhukkaga naan evlo kashta patten nu! 🥹💻\n\nSo idhu unakku kandippa romba romba pudikkum nu namburen di thangoo... Idhula edhaavadhu unakku pudikkala-na kooda sollu pattu, naan kandippa maathi tharen! 🥰✨\n\nOnce again, Happiest Birthday to my favorite human, my whole world! Love you so much di pattu! 💖🌍✨"
};

/* ==========================================================================
   APP INITIALIZATION & NAVIGATION SYSTEM
   ========================================================================== */

let currentPage = 1;
let typewriterTriggered = false;
let finalTypewriterTriggered = false;
let candleBlown = false;
let ch5DiscoveredNotes = new Set();
let chapter4TypewriterTimer = null;
let waxLetterTypewriterTimer = null;
let finalTypewriterTimer = null;
let activeQuillAudioNodes = [];

function stopChapter4Typewriter(fillComplete = true) {
  if (chapter4TypewriterTimer) {
    clearTimeout(chapter4TypewriterTimer);
    chapter4TypewriterTimer = null;
  }
  const el = document.getElementById("personal-msg-text");
  if (el) {
    el.classList.remove("typing");
    if (fillComplete) {
      el.textContent = birthdayData.personalMessage;
    }
  }
  stopQuillSound();
}

function stopWaxLetterTypewriter(fillComplete = true) {
  if (waxLetterTypewriterTimer) {
    clearInterval(waxLetterTypewriterTimer);
    waxLetterTypewriterTimer = null;
  }
  const shortMsgEl = document.getElementById("short-msg-text");
  if (shortMsgEl) {
    shortMsgEl.classList.remove("typing");
    if (fillComplete) {
      shortMsgEl.textContent = birthdayData.shortMessage;
    }
  }
  stopQuillSound();
}

function stopFinalTypewriter(fillComplete = true) {
  if (finalTypewriterTimer) {
    clearTimeout(finalTypewriterTimer);
    finalTypewriterTimer = null;
  }
  const el = document.getElementById("final-msg-text");
  if (el) {
    el.classList.remove("typing");
    if (fillComplete) {
      el.textContent = birthdayData.finalMessage;
    }
  }
  stopQuillSound();
}

document.addEventListener("DOMContentLoaded", () => {
  bindDataToDOM();
  initCanvas();
  initNavigation();
  initInteractions();
  updateProgressDots();
});

function bindDataToDOM() {
  // Bind Her Name across all placeholders
  document.querySelectorAll(".her-name-text").forEach(el => {
    el.textContent = birthdayData.herName;
  });

  // Chapter III: Short Message (Starts blank, filled one by one when wax envelope opens)
  const shortMsgEl = document.getElementById("short-msg-text");
  if (shortMsgEl) shortMsgEl.textContent = "";

  // Chapter V: Parchment Scrap Notes Grid
  const parchmentScrapsGrid = document.getElementById("parchment-scraps-grid");
  if (parchmentScrapsGrid && birthdayData.chapter5Data) {
    parchmentScrapsGrid.innerHTML = birthdayData.chapter5Data.notes.map((note) => `
      <div class="parchment-scrap-item" data-note-id="${note.id}">
        <div class="scrap-pin">📍</div>
        <span class="scrap-tag">${note.numStr}</span>
        <h3 class="scrap-title">${note.title}</h3>
        <span class="scrap-tap-hint">Tap to open scrap ✦</span>
      </div>
    `).join("");
  }

  // Chapter VI: The Pages We Haven't Written Yet Grid
  const futureNotesGrid = document.getElementById("future-notes-grid");
  if (futureNotesGrid && birthdayData.futureMemories) {
    futureNotesGrid.innerHTML = birthdayData.futureMemories.map(item => `
      <div class="future-note-item" data-id="${item.id}" role="button" tabindex="0" aria-label="Open ${item.title}">
        <div class="scrap-pin">📍</div>
        <div class="future-note-icon">${item.icon}</div>
        <span class="future-note-badge">${item.tag}</span>
        <h3 class="future-note-title">${item.title}</h3>
        <span class="future-tap-hint">Tap to unfold ✦</span>
      </div>
    `).join("");
  }

  // Chapter VIII: Final Message
  const finalMsgEl = document.getElementById("final-msg-text");
  if (finalMsgEl) finalMsgEl.textContent = "";
}

/* ==========================================================================
   AUTHENTIC SOUND EFFECTS ENGINE (HIGH FIDELITY PRELOADED AUDIO)
   Dual-Engine: Instant Web Audio Buffer + Multi-Channel HTML5 Audio
   Zero latency, loud & crisp, auto-unlocks on first user interaction.
   ========================================================================== */

const SOUND_FILES = {
  candleBlow: "sounds/candle-blow.wav?v=20261008_natural_breath",
  pageTurn: "sounds/page-turn.wav",
  quillScratch: "sounds/quill-scratch.wav?v=20261005_fountain_pen",
  quillScratch1: "sounds/quill-scratch-1.wav?v=20261005_fountain_pen",
  quillScratch2: "sounds/quill-scratch-2.wav?v=20261005_fountain_pen",
  quillScratch3: "sounds/quill-scratch-3.wav?v=20261005_fountain_pen",
  sparkle: "sounds/sparkle.wav",
  letterOpen: "sounds/letter-open.wav",
  letterClose: "sounds/letter-close.wav"
};

const SOUND_DOM_IDS = {
  candleBlow: "snd-candle-blow",
  pageTurn: "snd-page-turn",
  quillScratch: "snd-quill-scratch",
  quillScratch1: "snd-quill-scratch-1",
  quillScratch2: "snd-quill-scratch-2",
  quillScratch3: "snd-quill-scratch-3",
  sparkle: "snd-sparkle",
  letterOpen: "snd-letter-open",
  letterClose: "snd-letter-close"
};

// Web Audio Context & Buffer Cache for instant low-latency, loud audio
let sfxAudioCtx = null;
const sfxBuffers = {};
let sfxUnlocked = false;

function getSfxAudioContext() {
  try {
    if (!sfxAudioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) sfxAudioCtx = new AudioCtx();
    }
    if (sfxAudioCtx && sfxAudioCtx.state === "suspended") {
      sfxAudioCtx.resume();
    }
    return sfxAudioCtx;
  } catch (e) {
    return null;
  }
}

// Preload audio into memory buffers
function initSoundBuffers() {
  const ctx = getSfxAudioContext();
  if (!ctx) return;
  Object.entries(SOUND_FILES).forEach(([key, url]) => {
    fetch(url)
      .then(res => res.arrayBuffer())
      .then(ab => ctx.decodeAudioData(ab))
      .then(decoded => {
        sfxBuffers[key] = decoded;
      })
      .catch(() => {});
  });
}

// User gesture unlock for iOS Safari, Chrome, and Firefox autoplay restrictions
function unlockSfxAudio() {
  if (sfxUnlocked) return;
  sfxUnlocked = true;
  const ctx = getSfxAudioContext();
  if (ctx && ctx.state === "suspended") {
    ctx.resume();
  }
  initSoundBuffers();

  // Also prime HTML5 Audio elements
  Object.values(SOUND_DOM_IDS).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.load();
    }
  });
}

// Attach early unlock listeners on window/document
["click", "touchstart", "keydown", "pointerdown"].forEach(evtName => {
  document.addEventListener(evtName, unlockSfxAudio, { passive: true, once: true });
});

// Master Playback Function (Dual Engine with Volume Control)
function playAudioClip(type, volume = 1.0) {
  unlockSfxAudio();

  // Engine 1: Web Audio Buffer (Zero Latency & Dynamic Gain Boost)
  const ctx = getSfxAudioContext();
  if (ctx && ctx.state === "running" && sfxBuffers[type]) {
    try {
      const source = ctx.createBufferSource();
      source.buffer = sfxBuffers[type];
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(Math.min(2.0, volume), ctx.currentTime);
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start(0);
      return;
    } catch (e) {}
  }

  // Engine 2: Preloaded DOM Audio Element
  try {
    const domId = SOUND_DOM_IDS[type];
    const domEl = domId ? document.getElementById(domId) : null;
    if (domEl) {
      if (domEl.paused || domEl.ended) {
        domEl.currentTime = 0;
        domEl.volume = Math.min(1.0, Math.max(0, volume));
        domEl.play().catch(() => playFallback(type, volume));
        return;
      } else {
        // Multi-voice clone
        const clone = domEl.cloneNode(true);
        clone.volume = Math.min(1.0, Math.max(0, volume));
        clone.play().catch(() => {});
        clone.onended = () => clone.remove();
        return;
      }
    }
  } catch (e) {}

  playFallback(type, volume);
}

function playFallback(type, volume) {
  const url = SOUND_FILES[type];
  if (!url) return;
  try {
    const a = new Audio(url);
    a.volume = Math.min(1.0, Math.max(0, volume));
    a.play().catch(() => {});
  } catch (e) {}
}

// 1. CANDLE BLOW SOUND EFFECT: Real human breath candle blow
function playCandleBlowSound() {
  playAudioClip("candleBlow", 0.85);
}

// 2. BOOK PAGE TURN SOUND EFFECT: Authentic physical book page flip & paper swoosh
function playBookPageTurnSound() {
  playAudioClip("pageTurn", 0.90);
}

function playPaperRustle() {
  playBookPageTurnSound();
}

// 3. QUILL / DIP PEN SCRATCH SOUND EFFECT: Authentic velvety paper writing ASMR
const quillStrokeKeys = ["quillScratch", "quillScratch1", "quillScratch2", "quillScratch3"];
let quillStrokeIdx = 0;
let lastQuillTime = 0;

function stopQuillSound() {
  if (activeQuillAudioNodes && activeQuillAudioNodes.length > 0) {
    activeQuillAudioNodes.forEach(item => {
      try {
        if (item.gainNode && item.ctx) {
          item.gainNode.gain.cancelScheduledValues(item.ctx.currentTime);
          item.gainNode.gain.setValueAtTime(item.gainNode.gain.value, item.ctx.currentTime);
          item.gainNode.gain.linearRampToValueAtTime(0.0001, item.ctx.currentTime + 0.012);
          setTimeout(() => {
            try { item.source.stop(); } catch (e) {}
          }, 15);
        } else if (item.source) {
          item.source.stop();
        }
      } catch (e) {}
    });
    activeQuillAudioNodes = [];
  }
  quillStrokeKeys.forEach(k => {
    const id = SOUND_DOM_IDS[k];
    const el = id ? document.getElementById(id) : null;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
  });
}

function playQuillScratchSound() {
  const now = performance.now();
  if (now - lastQuillTime < 135) return; // Natural handwriting stroke interval (never rapid-fire)
  lastQuillTime = now;

  const key = quillStrokeKeys[quillStrokeIdx];
  quillStrokeIdx = (quillStrokeIdx + 1) % quillStrokeKeys.length;

  unlockSfxAudio();

  // Engine 1: Web Audio Buffer with Acoustic Low-Pass Filter & Micro Pitch Variation
  const ctx = getSfxAudioContext();
  if (ctx && ctx.state === "running" && sfxBuffers[key]) {
    try {
      // Fade out previous active stroke to prevent noisy buildup
      if (activeQuillAudioNodes.length > 0) {
        const prev = activeQuillAudioNodes.shift();
        try {
          prev.gainNode.gain.cancelScheduledValues(ctx.currentTime);
          prev.gainNode.gain.setValueAtTime(prev.gainNode.gain.value, ctx.currentTime);
          prev.gainNode.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.015);
          setTimeout(() => { try { prev.source.stop(); } catch (e) {} }, 20);
        } catch (e) {}
      }

      const source = ctx.createBufferSource();
      source.buffer = sfxBuffers[key];

      // Subtle organic pitch variation (+/- 6%)
      source.playbackRate.setValueAtTime(0.94 + Math.random() * 0.12, ctx.currentTime);

      // Authentic Fountain Pen acoustic frequency shaping (smooth, velvety, crisp glide)
      const biquad = ctx.createBiquadFilter();
      biquad.type = "lowpass";
      biquad.frequency.setValueAtTime(5400, ctx.currentTime);
      biquad.Q.setValueAtTime(0.707, ctx.currentTime);

      // Balanced audible fountain pen paper glide volume
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.60, ctx.currentTime);

      source.connect(biquad);
      biquad.connect(gainNode);
      gainNode.connect(ctx.destination);

      source.start(0);

      const nodeObj = { source, gainNode, ctx };
      activeQuillAudioNodes.push(nodeObj);
      source.onended = () => {
        const idx = activeQuillAudioNodes.indexOf(nodeObj);
        if (idx !== -1) activeQuillAudioNodes.splice(idx, 1);
      };
      return;
    } catch (e) {}
  }

  // Engine 2: Preloaded DOM Audio Fallback (balanced volume)
  try {
    const domId = SOUND_DOM_IDS[key];
    const domEl = domId ? document.getElementById(domId) : null;
    if (domEl) {
      domEl.currentTime = 0;
      domEl.volume = 0.60;
      domEl.play().catch(() => {});
    }
  } catch (e) {}
}

// 4. SPARKLE / CONFETTI BURST CHIME SOUND EFFECT: Gentle, audible fairytale chime
function playSparkleSound(vol = 0.65) {
  playAudioClip("sparkle", vol);
}

// 5. LETTER OPEN SOUND EFFECT: Crisp, satisfying pop-up & paper unfolding
function playLetterOpenSound(vol = 0.80) {
  playAudioClip("letterOpen", vol);
}

// 6. LETTER CLOSE SOUND EFFECT: Soft, gentle paper closing rustle
function playLetterCloseSound(vol = 0.65) {
  playAudioClip("letterClose", vol);
}


/* ==========================================================================
   NAVIGATION & PAGE FLIPPING SYSTEM (1960s-1980s VINTAGE STORYBOOK)
   ========================================================================== */

let isPageFlipping = false;

function navigateToPage(targetPageNum) {
  if (isPageFlipping || targetPageNum === currentPage) return;

  // Immediately cut off any running typewriter & writing audio when leaving Chapter 4, 3, or 8!
  if (currentPage === 4 && targetPageNum !== 4) {
    stopChapter4Typewriter(true);
  }
  if (currentPage === 3 && targetPageNum !== 3) {
    stopWaxLetterTypewriter(true);
  }
  if (currentPage === 8 && targetPageNum !== 8) {
    stopFinalTypewriter(true);
  }
  stopQuillSound();

  const currentEl = document.getElementById(`page-${currentPage}`);
  const targetEl = document.getElementById(`page-${targetPageNum}`);

  if (!targetEl) return;

  isPageFlipping = true;
  const isForward = targetPageNum > currentPage;

  // Trigger authentic vintage book page-turn sound effect
  playBookPageTurnSound();

  // Determine which element will carry the main flip animation
  let flipAnimEl = null;

  if (currentEl) {
    currentEl.classList.remove("active-page");
    if (isForward) {
      // Forward turn: current page lifts and turns left over spine (-180deg)
      // Next page sits underneath receiving soft cast shadow
      requestAnimationFrame(() => {
        targetEl.classList.remove("hidden-page");
        targetEl.classList.add("page-incoming-forward");
        targetEl.scrollTop = 0;
        currentEl.classList.add("page-flip-forward");
      });
      flipAnimEl = currentEl;
    } else {
      // Backward turn: target page flips back from left stack over spine
      requestAnimationFrame(() => {
        currentEl.classList.add("page-underneath-backward");
        targetEl.classList.remove("hidden-page");
        targetEl.classList.add("page-flip-backward");
        targetEl.scrollTop = 0;
      });
      flipAnimEl = targetEl;
    }
  } else {
    // Initial page activation
    targetEl.classList.remove("hidden-page");
    targetEl.classList.add("active-page");
    targetEl.scrollTop = 0;
    isPageFlipping = false;
    currentPage = targetPageNum;
    updateProgressDots();
    return;
  }

  // Cleanup function: batch all DOM changes in a single rAF
  function completeFlip() {
    requestAnimationFrame(() => {
      if (currentEl) {
        currentEl.classList.remove(
          "active-page",
          "page-flip-forward",
          "page-flip-backward",
          "page-underneath-backward"
        );
        currentEl.classList.add("hidden-page");
      }

      targetEl.classList.remove(
        "page-incoming-forward",
        "page-flip-backward",
        "page-underneath-backward",
        "hidden-page"
      );
      targetEl.classList.add("active-page");

      currentPage = targetPageNum;
      updateProgressDots();
      isPageFlipping = false;

      // Page-specific trigger hooks
      if (currentPage === 4 && !typewriterTriggered) {
        triggerTypewriter();
      } else if (currentPage === 8) {
        if (!finalTypewriterTriggered) {
          triggerFinalTypewriter();
        }
      }
    });
  }

  // Listen for animationend on the flipping element for precise timing
  let cleanupDone = false;
  const onAnimEnd = (e) => {
    // Only respond to the main flip animation, not pseudo-element animations
    if (e.target !== flipAnimEl) return;
    if (cleanupDone) return;
    cleanupDone = true;
    flipAnimEl.removeEventListener("animationend", onAnimEnd);
    clearTimeout(safetyTimer);
    completeFlip();
  };

  flipAnimEl.addEventListener("animationend", onAnimEnd);

  // Safety fallback: if animationend doesn't fire (e.g. animation interrupted), cleanup anyway
  const safetyTimer = setTimeout(() => {
    if (cleanupDone) return;
    cleanupDone = true;
    flipAnimEl.removeEventListener("animationend", onAnimEnd);
    completeFlip();
  }, 1300);
}

function updateProgressDots() {
  const progressDotsContainer = document.getElementById("progress-indicator");
  if (!progressDotsContainer) return;

  const storybook = document.getElementById("storybook");
  if (storybook && storybook.classList.contains("open-book")) {
    progressDotsContainer.classList.remove("hidden");
    const dots = progressDotsContainer.querySelectorAll(".dot");
    dots.forEach(dot => {
      const pageNum = parseInt(dot.getAttribute("data-page"), 10);
      if (pageNum === currentPage) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  } else {
    progressDotsContainer.classList.add("hidden");
  }
}

function initNavigation() {
  document.addEventListener("click", (e) => {
    const nextBtn = e.target.closest(".btn-next") || e.target.closest("#btn-page-1-next") || e.target.closest("#btn-final-climax");
    if (nextBtn) {
      const targetPage = nextBtn.getAttribute("data-next-to");
      if (targetPage) {
        navigateToPage(parseInt(targetPage, 10));
      } else if (nextBtn.id === "btn-page-1-next") {
        navigateToPage(2);
      } else if (nextBtn.id === "btn-final-climax") {
        resetStorybookToBeginning(); // Replay from beginning with full animation reset
      }
    }

    const backBtn = e.target.closest(".btn-back");
    if (backBtn) {
      const targetPage = backBtn.getAttribute("data-back-to");
      if (targetPage) {
        navigateToPage(parseInt(targetPage, 10));
      }
    }

    const dot = e.target.closest(".dot");
    if (dot) {
      const targetPage = parseInt(dot.getAttribute("data-page"), 10);
      if (targetPage) navigateToPage(targetPage);
    }
  });
}

/* ==========================================================================
   INTERACTION HANDLERS (COVER UNLOCK, CANDLE, ENVELOPE, MODAL)
   ========================================================================== */

function initInteractions() {
  // Hardcover Login Gate Form
  const loginForm = document.getElementById("login-form");
  const loginFeedback = document.getElementById("login-feedback");
  const storybook = document.getElementById("storybook");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userVal = document.getElementById("input-username").value.trim().toLowerCase();
      const passVal = document.getElementById("input-password").value.trim().toLowerCase();

      if (userVal === birthdayData.username.toLowerCase() && passVal === birthdayData.password.toLowerCase()) {
        loginFeedback.style.color = "#e5be75";
        loginFeedback.textContent = "Sariyaana Password! Waangko, story kula polam... ❤️";
        
        setTimeout(() => {
          if (storybook) {
            playBookPageTurnSound();
            storybook.classList.add("open-book");
            updateProgressDots();
          }
        }, 500);
      } else {
        loginFeedback.style.color = "#ff8597";
        loginFeedback.textContent = "Password thappu ma! Innoru thadava try pannu 👀";
      }
    });
  }

  // Chapter II: Blow Candle Button
  const btnBlow = document.getElementById("btn-blow-candle");
  const blowCandleWrap = document.getElementById("blow-candle-wrap");
  const candleFlame = document.getElementById("candle-flame");
  const candleSmoke = document.getElementById("candle-smoke");
  const bdayTextPopWrap = document.getElementById("bday-text-pop-wrap");
  const page2Nav = document.getElementById("page-2-nav");

  if (btnBlow) {
    btnBlow.addEventListener("click", () => {
      if (candleBlown) return;
      candleBlown = true;

      // Realistic human breath blowing sound effect
      playCandleBlowSound();

      // 1. Initial soft breath: Flame flickers and bends in the breeze
      if (candleFlame) {
        candleFlame.style.transform = "rotate(-25deg) scale(0.8)";
        candleFlame.style.opacity = "0.7";
      }
      triggerCandleBreeze();

      // 2. Main breath stream: Extinguish flame & release smoke
      setTimeout(() => {
        if (candleFlame) candleFlame.classList.add("extinguished");
        if (candleSmoke) {
          candleSmoke.classList.remove("hidden");
        }
        const cakeHintBubble = document.querySelector(".cake-hint-bubble");
        if (blowCandleWrap) blowCandleWrap.classList.add("fade-out");
        if (cakeHintBubble) cakeHintBubble.classList.add("fade-out");

        // 3. Reveal Birthday Message & Confetti as breath concludes
        setTimeout(() => {
          if (bdayTextPopWrap) bdayTextPopWrap.classList.add("revealed");
          triggerMicroConfetti();
          triggerFloatingHearts(btnBlow, 10);

          // 4. Reveal Next Button smoothly
          setTimeout(() => {
            if (page2Nav) page2Nav.classList.add("active");
          }, 600);
        }, 400);

      }, 550);
    });
  }

  // Chapter III: Wax Seal Envelope Opening & Re-closing Toggle
  const waxSeal = document.getElementById("wax-seal");
  const envelope = document.getElementById("envelope");
  const btnNext3 = document.getElementById("btn-next-3");
  const envelopeToggleWrap = document.getElementById("envelope-toggle-wrap");
  const btnToggleEnvelope = document.getElementById("btn-toggle-envelope");
  const envelopeHint = document.getElementById("envelope-hint-text");
  let waxLetterOpenTimeout = null;

  function typeWaxLetterMessage() {
    const shortMsgEl = document.getElementById("short-msg-text");
    const letterContainer = document.getElementById("envelope-letter");
    if (!shortMsgEl) return;

    if (letterContainer) letterContainer.scrollTop = 0;

    if (waxLetterTypewriterTimer) {
      clearInterval(waxLetterTypewriterTimer);
      waxLetterTypewriterTimer = null;
    }

    const fullText = birthdayData.shortMessage;
    shortMsgEl.textContent = "";
    shortMsgEl.classList.add("typing");

    let index = 0;
    waxLetterTypewriterTimer = setInterval(() => {
      if (currentPage !== 3) {
        stopWaxLetterTypewriter(true);
        return;
      }
      if (index < fullText.length) {
        const char = fullText.charAt(index);
        shortMsgEl.textContent += char;
        if (char === " " || char === "\n" || index % 6 === 0) playQuillScratchSound();
        index++;
      } else {
        clearInterval(waxLetterTypewriterTimer);
        waxLetterTypewriterTimer = null;
        shortMsgEl.classList.remove("typing");
      }
    }, 24);
  }

  function openEnvelope() {
    if (!envelope) return;
    envelope.classList.add("open");
    playLetterOpenSound();
    triggerMicroConfetti();
    triggerFloatingHearts(waxSeal, 8);

    const page3 = document.getElementById("page-3");
    if (page3) page3.scrollTop = 0;
    const letterContainer = document.getElementById("envelope-letter");
    if (letterContainer) letterContainer.scrollTop = 0;

    if (btnNext3) {
      btnNext3.disabled = false;
      btnNext3.classList.remove("disabled-btn");
    }
    if (envelopeToggleWrap) {
      envelopeToggleWrap.classList.remove("hidden");
    }
    if (envelopeHint) {
      envelopeHint.textContent = "Letter-ah thirumba ulle vekka keelaiyulla button-ah click pannu ma...";
    }

    // Wait until letter has completely slid out of the envelope (approx 850ms), then fill text one by one
    if (waxLetterOpenTimeout) clearTimeout(waxLetterOpenTimeout);
    waxLetterOpenTimeout = setTimeout(() => {
      typeWaxLetterMessage();
    }, 850);
  }

  function closeEnvelope() {
    if (!envelope) return;
    envelope.classList.remove("open");
    playLetterCloseSound();

    if (waxLetterOpenTimeout) {
      clearTimeout(waxLetterOpenTimeout);
      waxLetterOpenTimeout = null;
    }
    if (waxLetterTypewriterTimer) {
      clearInterval(waxLetterTypewriterTimer);
      waxLetterTypewriterTimer = null;
    }

    const shortMsgEl = document.getElementById("short-msg-text");
    if (shortMsgEl) {
      shortMsgEl.textContent = "";
      shortMsgEl.classList.remove("typing");
    }

    if (envelopeToggleWrap) {
      envelopeToggleWrap.classList.add("hidden");
    }
    if (envelopeHint) {
      envelopeHint.textContent = "Andha Wax Seal-ah Click Pannu Ma...";
    }
  }

  if (waxSeal) {
    waxSeal.addEventListener("click", openEnvelope);
  }

  if (btnToggleEnvelope) {
    btnToggleEnvelope.addEventListener("click", closeEnvelope);
  }

  // Chapter V: Parchment Scrap Notes Expansion & Discovery Counter
  const parchmentScrapsGrid = document.getElementById("parchment-scraps-grid");
  const scrapModalOverlay = document.getElementById("scrap-note-modal");
  const scrapModalNum = document.getElementById("scrap-modal-num");
  const scrapModalTitle = document.getElementById("scrap-modal-title");
  const scrapModalHeading = document.getElementById("scrap-modal-heading");
  const scrapModalBody = document.getElementById("scrap-modal-body");
  const scrapModalClose = document.getElementById("scrap-modal-close");
  const ch5CounterText = document.getElementById("ch5-counter-text");
  const ch5CompletionMsg = document.getElementById("ch5-completion-msg");

  let scrapNoteTypewriterTimer = null;

  function typeScrapNoteMessage(fullText) {
    if (!scrapModalBody) return;
    if (scrapNoteTypewriterTimer) {
      clearInterval(scrapNoteTypewriterTimer);
      scrapNoteTypewriterTimer = null;
    }

    scrapModalBody.textContent = "";
    scrapModalBody.classList.add("typing");

    let index = 0;
    scrapNoteTypewriterTimer = setInterval(() => {
      if (index < fullText.length) {
        const char = fullText.charAt(index);
        scrapModalBody.textContent += char;
        if (char === " " || char === "\n" || index % 6 === 0) playQuillScratchSound();
        index++;
      } else {
        clearInterval(scrapNoteTypewriterTimer);
        scrapNoteTypewriterTimer = null;
        scrapModalBody.classList.remove("typing");
      }
    }, 20);
  }

  if (parchmentScrapsGrid) {
    parchmentScrapsGrid.addEventListener("click", (e) => {
      const item = e.target.closest(".parchment-scrap-item");
      if (item && birthdayData.chapter5Data) {
        const noteId = parseInt(item.getAttribute("data-note-id"), 10);
        const noteObj = birthdayData.chapter5Data.notes.find(n => n.id === noteId);

        if (noteObj && scrapModalOverlay) {
          // Track discovery count
          ch5DiscoveredNotes.add(noteId);
          item.classList.add("opened");

          if (ch5CounterText) {
            ch5CounterText.textContent = `Kutti Notes Paarthadhu: ${ch5DiscoveredNotes.size} / ${birthdayData.chapter5Data.notes.length}`;
          }

          if (ch5DiscoveredNotes.size === birthdayData.chapter5Data.notes.length) {
            if (ch5CompletionMsg) ch5CompletionMsg.classList.remove("hidden");
            const btnNext5 = document.getElementById("btn-next-5");
            if (btnNext5) {
              btnNext5.classList.add("pulse-glow");
            }
          }

          // Populate Modal Header & Heading
          if (scrapModalNum) scrapModalNum.textContent = noteObj.numStr;
          if (scrapModalTitle) scrapModalTitle.textContent = noteObj.title;
          if (scrapModalHeading) scrapModalHeading.textContent = noteObj.heading;
          if (scrapModalBody) scrapModalBody.textContent = "";

          playLetterOpenSound();
          scrapModalOverlay.classList.remove("hidden");
          scrapModalOverlay.setAttribute("aria-hidden", "false");
          triggerMicroConfetti();
          triggerFloatingHearts(item, 8);

          // Type out message with animated quill fountain pen
          typeScrapNoteMessage(noteObj.message);
          if (typeof updateScrapModalReplyUI === "function") {
            updateScrapModalReplyUI(noteObj);
          }
        }
      }
    });
  }

  const closeScrapModal = () => {
    playLetterCloseSound();
    if (scrapNoteTypewriterTimer) {
      clearInterval(scrapNoteTypewriterTimer);
      scrapNoteTypewriterTimer = null;
    }
    stopQuillSound();
    if (scrapModalBody) {
      scrapModalBody.classList.remove("typing");
    }
    if (scrapModalOverlay) {
      scrapModalOverlay.classList.add("hidden");
      scrapModalOverlay.setAttribute("aria-hidden", "true");
    }
  };

  if (scrapModalClose) scrapModalClose.addEventListener("click", closeScrapModal);
  if (scrapModalOverlay) {
    scrapModalOverlay.addEventListener("click", (e) => {
      if (e.target === scrapModalOverlay) closeScrapModal();
    });
  }

  // Chapter VI: The Pages We Haven't Written Yet Interaction
  const futureNotesGrid = document.getElementById("future-notes-grid");
  const futureModal = document.getElementById("future-note-modal");
  const futureModalTitle = document.getElementById("future-modal-title");
  const futureModalTag = document.getElementById("future-note-tag");
  const futureModalHeading = document.getElementById("future-modal-heading");
  const futureModalBody = document.getElementById("future-modal-body") || document.getElementById("future-modal-text");
  const futureModalClose = document.getElementById("future-note-close");
  const futureModalBtnClose = document.getElementById("future-modal-btn-close");

  let futureNoteTypewriterTimer = null;

  function typeFutureNoteMessage(fullText) {
    if (!futureModalBody) return;
    if (futureNoteTypewriterTimer) {
      clearInterval(futureNoteTypewriterTimer);
      futureNoteTypewriterTimer = null;
    }

    futureModalBody.textContent = "";
    futureModalBody.classList.add("typing");

    let index = 0;
    futureNoteTypewriterTimer = setInterval(() => {
      if (index < fullText.length) {
        const char = fullText.charAt(index);
        futureModalBody.textContent += char;
        if (char === " " || char === "\n" || index % 6 === 0) playQuillScratchSound();
        index++;
      } else {
        clearInterval(futureNoteTypewriterTimer);
        futureNoteTypewriterTimer = null;
        futureModalBody.classList.remove("typing");
      }
    }, 20);
  }

  if (futureNotesGrid) {
    futureNotesGrid.addEventListener("click", (e) => {
      const item = e.target.closest(".future-note-item");
      if (item && birthdayData.futureMemories) {
        const id = parseInt(item.getAttribute("data-id"), 10);
        const memory = birthdayData.futureMemories.find(m => m.id === id);
        if (memory && futureModal) {
          item.classList.add("unfolded");
          if (futureModalTag) futureModalTag.textContent = memory.tag;
          if (futureModalTitle) futureModalTitle.textContent = memory.title;
          if (futureModalHeading) futureModalHeading.textContent = memory.heading;
          if (futureModalBody) futureModalBody.textContent = "";

          playLetterOpenSound();
          futureModal.classList.remove("hidden");
          futureModal.setAttribute("aria-hidden", "false");
          triggerMicroConfetti();
          triggerFloatingHearts(item, 8);

          typeFutureNoteMessage(memory.message);
          if (typeof updateFutureModalReplyUI === "function") {
            updateFutureModalReplyUI(memory);
          }
        }
      }
    });

    futureNotesGrid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const item = e.target.closest(".future-note-item");
        if (item) {
          e.preventDefault();
          item.click();
        }
      }
    });
  }

  const closeFutureModal = () => {
    playLetterCloseSound();
    if (futureNoteTypewriterTimer) {
      clearInterval(futureNoteTypewriterTimer);
      futureNoteTypewriterTimer = null;
    }
    stopQuillSound();
    if (futureModalBody) {
      futureModalBody.classList.remove("typing");
    }
    if (futureModal) {
      futureModal.classList.add("hidden");
      futureModal.setAttribute("aria-hidden", "true");
    }
  };

  if (futureModalClose) futureModalClose.addEventListener("click", closeFutureModal);
  if (futureModalBtnClose) futureModalBtnClose.addEventListener("click", closeFutureModal);
  if (futureModal) {
    futureModal.addEventListener("click", (e) => {
      if (e.target === futureModal) closeFutureModal();
    });
  }

  // Chapter VII: Epilogue Secret Surprise Modal
  const btnEpilogueSurprise = document.getElementById("btn-epilogue-surprise");
  const epilogueModal = document.getElementById("epilogue-surprise-modal");
  const epilogueModalClose = document.getElementById("epilogue-modal-close");
  const btnEpilogueClose = document.getElementById("btn-epilogue-close");

  const openEpilogueSurprise = () => {
    if (epilogueModal) {
      playLetterOpenSound(0.85);
      playSparkleSound(0.70);
      epilogueModal.classList.remove("hidden");
      epilogueModal.setAttribute("aria-hidden", "false");
      triggerMicroConfetti();
      triggerFloatingHearts(btnEpilogueSurprise, 12);
    }
  };

  const closeEpilogueSurprise = () => {
    playLetterCloseSound(0.65);
    if (epilogueModal) {
      epilogueModal.classList.add("hidden");
      epilogueModal.setAttribute("aria-hidden", "true");
    }
  };

  if (btnEpilogueSurprise) btnEpilogueSurprise.addEventListener("click", openEpilogueSurprise);
  if (epilogueModalClose) epilogueModalClose.addEventListener("click", closeEpilogueSurprise);
  if (btnEpilogueClose) btnEpilogueClose.addEventListener("click", closeEpilogueSurprise);
  if (epilogueModal) {
    epilogueModal.addEventListener("click", (e) => {
      if (e.target === epilogueModal) closeEpilogueSurprise();
    });
  }

  // Chapter VII: Interactive 3D Pop-Up Hug Card Toggle
  const hugCardContainer = document.getElementById("hug-card-container");
  const hugCardBadge = document.getElementById("hug-card-badge");

  const toggleHugCard = () => {
    if (!hugCardContainer) return;
    const isNowOpen = hugCardContainer.classList.toggle("is-open");
    if (isNowOpen) {
      playLetterOpenSound(0.85);
      playSparkleSound(0.70);
      triggerMicroConfetti();
      triggerFloatingHearts(hugCardContainer, 10);
      if (hugCardBadge) hugCardBadge.textContent = "✨ Thirumba Moodikka Tap Pannu ✨";
    } else {
      playLetterCloseSound(0.65);
      if (hugCardBadge) hugCardBadge.textContent = "✨ Thottu Thirandhu Paaru ✨";
    }
  };

  if (hugCardContainer) {
    hugCardContainer.addEventListener("click", toggleHugCard);
    hugCardContainer.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleHugCard();
      }
    });
  }

  if (hugCardBadge) {
    hugCardBadge.addEventListener("click", toggleHugCard);
  }

  // Music Player Toggle
  const musicToggle = document.getElementById("music-toggle");
  const bgMusic = document.getElementById("bg-music");
  let isPlaying = false;

  if (musicToggle && bgMusic) {
    musicToggle.addEventListener("click", () => {
      if (!isPlaying) {
        bgMusic.play().then(() => {
          isPlaying = true;
          musicToggle.classList.add("playing");
          musicToggle.querySelector(".music-text").textContent = "Pause";
        }).catch(() => {
          musicToggle.querySelector(".music-text").textContent = "No Music";
        });
      } else {
        bgMusic.pause();
        isPlaying = false;
        musicToggle.classList.remove("playing");
        musicToggle.querySelector(".music-text").textContent = "Music";
      }
    });
  }

  // Initialize Interactive Notes & Epilogue Reply System
  initReplySystem();
}

/* ==========================================================================
   INTERACTIVE NOTES & EPILOGUE REPLY SYSTEM (Sadhana's Love Replies)
   ========================================================================== */

let currentActiveScrapNote = null;
let currentActiveFutureNote = null;

function getSavedReplies() {
  try {
    const raw = localStorage.getItem("sadhana_book_replies");
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveReplyLocally(key, replyObj) {
  try {
    const all = getSavedReplies();
    all[key] = replyObj;
    localStorage.setItem("sadhana_book_replies", JSON.stringify(all));
  } catch (e) {
    console.warn("Local storage error:", e);
  }
}

async function sendReplyToNetlify({ noteType, noteId, noteTitle, message }) {
  const timestamp = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  });

  // 1. Always save in localStorage first (never lose user input)
  saveReplyLocally(noteId, {
    noteType,
    noteId,
    noteTitle,
    message,
    timestamp
  });

  // 2. Submit to Netlify Forms endpoint via AJAX
  const bodyParams = new URLSearchParams();
  bodyParams.append("form-name", "sadhana-replies");
  bodyParams.append("note-type", noteType);
  bodyParams.append("note-id", noteId);
  bodyParams.append("note-title", noteTitle || "Untitled Note");
  bodyParams.append("timestamp", timestamp);
  bodyParams.append("reply-message", message);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: bodyParams.toString()
    });
    return response.ok;
  } catch (err) {
    console.warn("Netlify form network request warning (locally saved):", err);
    return true; // Still treated as success locally
  }
}

function updateScrapModalReplyUI(noteObj) {
  if (!noteObj) return;
  currentActiveScrapNote = noteObj;
  const noteKey = `ch5_note_${noteObj.id || noteObj.numStr}`;
  const saved = getSavedReplies()[noteKey];

  const drawer = document.getElementById("scrap-reply-drawer");
  const toggleBtn = document.getElementById("scrap-reply-toggle-btn");
  const input = document.getElementById("scrap-reply-input");
  const feedback = document.getElementById("scrap-reply-feedback");
  const prevBadge = document.getElementById("scrap-prev-reply-badge");

  if (feedback) {
    feedback.className = "reply-feedback-msg hidden";
    feedback.textContent = "";
  }
  if (input) input.value = "";
  if (drawer) drawer.classList.add("hidden");
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-expanded", "false");
    const label = toggleBtn.querySelector(".reply-toggle-text");
    if (label) {
      label.textContent = saved ? "Un Reply-ah Edit Panna / Paarka... 💌" : "Un Hubby-ku Reply Panna Idha Click Pannu... 💌";
    }
  }

  if (prevBadge) {
    if (saved) {
      prevBadge.classList.remove("hidden");
      prevBadge.innerHTML = `
        <span class="prev-reply-label"><span>✨ Un Anbu Reply (${saved.timestamp}):</span></span>
        <span class="prev-reply-text">“${saved.message}”</span>
      `;
    } else {
      prevBadge.classList.add("hidden");
      prevBadge.innerHTML = "";
    }
  }
}

function updateFutureModalReplyUI(memoryObj) {
  if (!memoryObj) return;
  currentActiveFutureNote = memoryObj;
  const noteKey = `ch6_future_${memoryObj.id || memoryObj.tag}`;
  const saved = getSavedReplies()[noteKey];

  const drawer = document.getElementById("future-reply-drawer");
  const toggleBtn = document.getElementById("future-reply-toggle-btn");
  const input = document.getElementById("future-reply-input");
  const feedback = document.getElementById("future-reply-feedback");
  const prevBadge = document.getElementById("future-prev-reply-badge");

  if (feedback) {
    feedback.className = "reply-feedback-msg hidden";
    feedback.textContent = "";
  }
  if (input) input.value = "";
  if (drawer) drawer.classList.add("hidden");
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-expanded", "false");
    const label = toggleBtn.querySelector(".reply-toggle-text");
    if (label) {
      label.textContent = saved ? "Un Reply-ah Edit Panna / Paarka... 💌" : "Un Hubby-ku Reply Panna Idha Click Pannu... 💌";
    }
  }

  if (prevBadge) {
    if (saved) {
      prevBadge.classList.remove("hidden");
      prevBadge.innerHTML = `
        <span class="prev-reply-label"><span>✨ Un Anbu Reply (${saved.timestamp}):</span></span>
        <span class="prev-reply-text">“${saved.message}”</span>
      `;
    } else {
      prevBadge.classList.add("hidden");
      prevBadge.innerHTML = "";
    }
  }
}

function updateEpilogueReplyUI() {
  const saved = getSavedReplies()["ch8_epilogue_letter"];
  const prevBox = document.getElementById("epilogue-prev-reply-box");
  const toggleBtn = document.getElementById("epilogue-reply-toggle-btn");
  if (toggleBtn) {
    const span = toggleBtn.querySelector("span:not(.reply-toggle-icon):not(.reply-toggle-arrow)");
    if (span) {
      span.textContent = saved ? "Un Maru-Kadhidham (Sent) - Paarka / Edit Panna 💌" : "Un hubby kitta nee edhuna sollanum ah baby? 💌";
    }
  }
  if (prevBox) {
    if (saved) {
      prevBox.classList.remove("hidden");
      prevBox.innerHTML = `
        <span class="prev-tag">💌 UN ANBU KADHIDHAM (SENT • ${saved.timestamp})</span>
        <p class="prev-content" style="margin: 4px 0 0 0; font-style: italic;">“${saved.message}”</p>
      `;
    } else {
      prevBox.classList.add("hidden");
    }
  }
}

function initReplySystem() {
  // 1. Chapter V Scrap Note Reply Listeners
  const scrapToggleBtn = document.getElementById("scrap-reply-toggle-btn");
  const scrapDrawer = document.getElementById("scrap-reply-drawer");
  const scrapSendBtn = document.getElementById("scrap-reply-send-btn");
  const scrapInput = document.getElementById("scrap-reply-input");
  const scrapFeedback = document.getElementById("scrap-reply-feedback");

  if (scrapToggleBtn && scrapDrawer) {
    scrapToggleBtn.addEventListener("click", () => {
      const isHidden = scrapDrawer.classList.toggle("hidden");
      scrapToggleBtn.setAttribute("aria-expanded", !isHidden);
      if (!isHidden && scrapInput) {
        scrapInput.focus();
        playLetterOpenSound(0.5);
      }
    });
  }

  if (scrapSendBtn && scrapInput) {
    scrapSendBtn.addEventListener("click", async () => {
      const text = scrapInput.value.trim();
      if (!text) {
        if (scrapFeedback) {
          scrapFeedback.className = "reply-feedback-msg error";
          scrapFeedback.textContent = "Edhavadhu oru kutty reply ezhudhunga di thangom... 💕";
          scrapFeedback.classList.remove("hidden");
        }
        return;
      }

      scrapSendBtn.disabled = true;
      scrapSendBtn.style.opacity = "0.75";

      const noteTitle = currentActiveScrapNote ? `${currentActiveScrapNote.numStr} - ${currentActiveScrapNote.title}` : "Kutti Note";
      const noteId = currentActiveScrapNote ? `ch5_note_${currentActiveScrapNote.id || currentActiveScrapNote.numStr}` : "ch5_note";

      await sendReplyToNetlify({
        noteType: "Chapter V - Kutti Note",
        noteId,
        noteTitle,
        message: text
      });

      playQuillScratchSound();
      playSparkleSound(0.7);
      triggerFloatingHearts(scrapSendBtn, 10);
      triggerMicroConfetti();

      scrapSendBtn.disabled = false;
      scrapSendBtn.style.opacity = "1";

      if (scrapFeedback) {
        scrapFeedback.className = "reply-feedback-msg success";
        scrapFeedback.textContent = "Unga anbu reply unga hubby-kku pathirama serndhuruchu di thangom! ❤️💌";
        scrapFeedback.classList.remove("hidden");
      }

      updateScrapModalReplyUI(currentActiveScrapNote);
    });
  }

  // 2. Chapter VI Future Note Reply Listeners
  const futureToggleBtn = document.getElementById("future-reply-toggle-btn");
  const futureDrawer = document.getElementById("future-reply-drawer");
  const futureSendBtn = document.getElementById("future-reply-send-btn");
  const futureInput = document.getElementById("future-reply-input");
  const futureFeedback = document.getElementById("future-reply-feedback");

  if (futureToggleBtn && futureDrawer) {
    futureToggleBtn.addEventListener("click", () => {
      const isHidden = futureDrawer.classList.toggle("hidden");
      futureToggleBtn.setAttribute("aria-expanded", !isHidden);
      if (!isHidden && futureInput) {
        futureInput.focus();
        playLetterOpenSound(0.5);
      }
    });
  }

  if (futureSendBtn && futureInput) {
    futureSendBtn.addEventListener("click", async () => {
      const text = futureInput.value.trim();
      if (!text) {
        if (futureFeedback) {
          futureFeedback.className = "reply-feedback-msg error";
          futureFeedback.textContent = "Un manasula irukkuradha ezhudhu di thangoo... 💕";
          futureFeedback.classList.remove("hidden");
        }
        return;
      }

      futureSendBtn.disabled = true;
      futureSendBtn.style.opacity = "0.75";

      const noteTitle = currentActiveFutureNote ? `${currentActiveFutureNote.tag} - ${currentActiveFutureNote.title}` : "Future Memory";
      const noteId = currentActiveFutureNote ? `ch6_future_${currentActiveFutureNote.id || currentActiveFutureNote.tag}` : "ch6_future";

      await sendReplyToNetlify({
        noteType: "Chapter VI - Future Memory",
        noteId,
        noteTitle,
        message: text
      });

      playQuillScratchSound();
      playSparkleSound(0.7);
      triggerFloatingHearts(futureSendBtn, 10);
      triggerMicroConfetti();

      futureSendBtn.disabled = false;
      futureSendBtn.style.opacity = "1";

      if (futureFeedback) {
        futureFeedback.className = "reply-feedback-msg success";
        futureFeedback.textContent = "Unga reply unga hubby-kku pathirama poiduchu! Romba eager-ah wait pannuvaaru ❤️✨";
        futureFeedback.classList.remove("hidden");
      }

      updateFutureModalReplyUI(currentActiveFutureNote);
    });
  }

  // 3. Chapter VIII Epilogue Return Love Letter Listeners
  const epilogueToggleBtn = document.getElementById("epilogue-reply-toggle-btn");
  const epilogueCard = document.getElementById("epilogue-reply-card");
  const epilogueSendBtn = document.getElementById("epilogue-reply-send-btn");
  const epilogueInput = document.getElementById("epilogue-reply-input");
  const epilogueFeedback = document.getElementById("epilogue-reply-feedback");

  if (epilogueToggleBtn && epilogueCard) {
    epilogueToggleBtn.addEventListener("click", () => {
      const isHidden = epilogueCard.classList.toggle("hidden");
      epilogueToggleBtn.setAttribute("aria-expanded", !isHidden);
      if (!isHidden) {
        playLetterOpenSound(0.7);
        triggerFloatingHearts(epilogueToggleBtn, 6);
        if (epilogueInput) epilogueInput.focus();
      }
    });
  }

  if (epilogueSendBtn && epilogueInput) {
    epilogueSendBtn.addEventListener("click", async () => {
      const text = epilogueInput.value.trim();
      if (!text) {
        if (epilogueFeedback) {
          epilogueFeedback.className = "epilogue-reply-feedback error";
          epilogueFeedback.textContent = "Un anbu kadhidhathula edhavadhu ezhudhu thangoo... ❤️";
          epilogueFeedback.classList.remove("hidden");
        }
        return;
      }

      epilogueSendBtn.disabled = true;
      epilogueSendBtn.style.opacity = "0.75";

      await sendReplyToNetlify({
        noteType: "Chapter VIII - Climax Love Letter",
        noteId: "ch8_epilogue_letter",
        noteTitle: "Sadhana's Return Love Letter to Hubby",
        message: text
      });

      playQuillScratchSound();
      playSparkleSound(0.9);
      triggerFloatingHearts(epilogueSendBtn, 16);
      triggerMicroConfetti();

      epilogueSendBtn.disabled = false;
      epilogueSendBtn.style.opacity = "1";

      if (epilogueFeedback) {
        epilogueFeedback.className = "epilogue-reply-feedback success";
        epilogueFeedback.textContent = "Unga kadhidham unga hubby-kku pathirama serndhuruchu di thangom! Endrum ungalodu dhaan... ❤️💌✨";
        epilogueFeedback.classList.remove("hidden");
      }

      updateEpilogueReplyUI();
    });
  }

  // Initial populate of Chapter 8 if existing reply
  updateEpilogueReplyUI();
}

/* ==========================================================================
   ANIMATION HELPERS (TYPEWRITER, CANDLE BREEZE, CONFETTI, CANVAS)
   ========================================================================== */

function triggerCandleBreeze() {
  const flame = document.getElementById("candle-flame");
  if (!flame) return;

  const rect = flame.getBoundingClientRect();
  const flameX = rect.left + rect.width / 2;
  const flameY = rect.top + rect.height / 2;

  const wispCount = 12;
  for (let i = 0; i < wispCount; i++) {
    const wisp = document.createElement("div");
    wisp.style.position = "fixed";
    wisp.style.left = (flameX - 70 - Math.random() * 30) + "px";
    wisp.style.top = (flameY - 10 + (Math.random() * 20 - 10)) + "px";
    wisp.style.width = (Math.random() * 35 + 25) + "px";
    wisp.style.height = "2px";
    wisp.style.background = "linear-gradient(90deg, rgba(255,255,255,0), rgba(229,190,117,0.9), rgba(255,255,255,0))";
    wisp.style.borderRadius = "2px";
    wisp.style.zIndex = "3000";
    wisp.style.pointerEvents = "none";
    wisp.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";

    document.body.appendChild(wisp);

    requestAnimationFrame(() => {
      wisp.style.transform = `translateX(110px) translateY(${Math.random() * 8 - 4}px)`;
      wisp.style.opacity = "0";
    });

    setTimeout(() => { wisp.remove(); }, 600);
  }
}

function triggerTypewriter() {
  typewriterTriggered = true;
  const el = document.getElementById("personal-msg-text");
  if (!el) return;

  const page4 = document.getElementById("page-4");
  if (page4) page4.scrollTop = 0;

  if (chapter4TypewriterTimer) {
    clearTimeout(chapter4TypewriterTimer);
    chapter4TypewriterTimer = null;
  }

  const fullText = birthdayData.personalMessage;
  el.textContent = "";
  el.classList.add("typing");
  let i = 0;

  function typeNextChar() {
    // If user navigated away from Chapter 4 while typing, stop immediately!
    if (currentPage !== 4) {
      stopChapter4Typewriter(true);
      return;
    }

    if (page4 && page4.scrollTop !== 0) page4.scrollTop = 0;
    if (i < fullText.length) {
      const char = fullText.charAt(i);
      el.textContent += char;
      // Natural, soothing calligraphy cadence:
      // Stroke sound plays gently on word spaces or every 7 letters
      if (char === " " || char === "\n" || i % 7 === 0) {
        playQuillScratchSound();
      }
      i++;
      chapter4TypewriterTimer = setTimeout(typeNextChar, 22);
    } else {
      chapter4TypewriterTimer = null;
      el.classList.remove("typing");
      if (page4) page4.scrollTop = 0;
    }
  }

  typeNextChar();
}

function triggerFinalTypewriter() {
  finalTypewriterTriggered = true;
  const el = document.getElementById("final-msg-text");
  if (!el) return;

  const page8 = document.getElementById("page-8");
  if (page8) page8.scrollTop = 0;

  if (finalTypewriterTimer) {
    clearTimeout(finalTypewriterTimer);
    finalTypewriterTimer = null;
  }

  const fullText = birthdayData.finalMessage;
  el.textContent = "";
  el.classList.add("typing");
  let i = 0;

  function typeNextFinalChar() {
    // If user navigated away from Chapter 8 while typing, stop immediately!
    if (currentPage !== 8) {
      stopFinalTypewriter(true);
      return;
    }

    if (page8 && page8.scrollTop !== 0) page8.scrollTop = 0;
    if (i < fullText.length) {
      const char = fullText.charAt(i);
      el.textContent += char;
      // Natural soothing fountain pen stroke cadence on spaces, newlines or every 7 letters
      if (char === " " || char === "\n" || i % 7 === 0) {
        playQuillScratchSound();
      }
      i++;
      finalTypewriterTimer = setTimeout(typeNextFinalChar, 20);
    } else {
      finalTypewriterTimer = null;
      el.classList.remove("typing");
      if (page8) page8.scrollTop = 0;
    }
  }

  typeNextFinalChar();
}

function resetStorybookToBeginning() {
  // 1. Stop all active typewriter timers and audio
  stopChapter4Typewriter(false);
  stopWaxLetterTypewriter(false);
  stopFinalTypewriter(false);
  stopQuillSound();

  typewriterTriggered = false;
  finalTypewriterTriggered = false;

  // 2. Reset Chapter 2: Candle & Cake
  candleBlown = false;
  const candleFlame = document.getElementById("candle-flame");
  if (candleFlame) {
    candleFlame.classList.remove("extinguished");
    candleFlame.style.transform = "";
    candleFlame.style.opacity = "";
  }
  const candleSmoke = document.getElementById("candle-smoke");
  if (candleSmoke) {
    candleSmoke.classList.add("hidden");
    candleSmoke.classList.remove("active");
  }
  const blowCandleWrap = document.getElementById("blow-candle-wrap");
  if (blowCandleWrap) {
    blowCandleWrap.classList.remove("fade-out");
  }
  const cakeHintBubble = document.querySelector(".cake-hint-bubble");
  if (cakeHintBubble) {
    cakeHintBubble.classList.remove("fade-out");
  }
  const bdayTextPopWrap = document.getElementById("bday-text-pop-wrap");
  if (bdayTextPopWrap) {
    bdayTextPopWrap.classList.remove("revealed");
  }
  const page2Nav = document.getElementById("page-2-nav");
  if (page2Nav) {
    page2Nav.classList.remove("active");
  }

  // 3. Reset Chapter 3: Envelope & Wax Seal
  const envelope = document.getElementById("envelope");
  if (envelope) {
    envelope.classList.remove("open");
  }
  const shortMsgEl = document.getElementById("short-msg-text");
  if (shortMsgEl) {
    shortMsgEl.textContent = "";
    shortMsgEl.classList.remove("typing");
  }
  const envelopeToggleWrap = document.getElementById("envelope-toggle-wrap");
  if (envelopeToggleWrap) {
    envelopeToggleWrap.classList.add("hidden");
  }
  const envelopeHint = document.getElementById("envelope-hint-text");
  if (envelopeHint) {
    envelopeHint.textContent = "Andha Wax Seal-ah Click Pannu Ma...";
  }
  const btnNext3 = document.getElementById("btn-next-3");
  if (btnNext3) {
    btnNext3.disabled = true;
    btnNext3.classList.add("disabled-btn");
  }

  // 4. Reset Chapter 4: Typewriter text
  const personalMsgEl = document.getElementById("personal-msg-text");
  if (personalMsgEl) {
    personalMsgEl.textContent = "";
    personalMsgEl.classList.remove("typing");
  }

  // 5. Reset Chapter 5: Parchment Scrap Notes
  ch5DiscoveredNotes.clear();
  const scrapItems = document.querySelectorAll(".parchment-scrap-item");
  scrapItems.forEach(item => item.classList.remove("opened"));
  const ch5CounterText = document.getElementById("ch5-counter-text");
  if (ch5CounterText && birthdayData.chapter5Data) {
    ch5CounterText.textContent = `Kutti Notes Paarthadhu: 0 / ${birthdayData.chapter5Data.notes.length}`;
  }
  const ch5CompletionMsg = document.getElementById("ch5-completion-msg");
  if (ch5CompletionMsg) {
    ch5CompletionMsg.classList.add("hidden");
  }
  const btnNext5 = document.getElementById("btn-next-5");
  if (btnNext5) {
    btnNext5.classList.remove("pulse-glow");
  }
  const scrapModalOverlay = document.getElementById("scrap-note-modal");
  if (scrapModalOverlay) {
    scrapModalOverlay.classList.add("hidden");
    scrapModalOverlay.setAttribute("aria-hidden", "true");
  }

  // 6. Reset Chapter 6: Future Notes
  const futureItems = document.querySelectorAll(".future-note-item");
  futureItems.forEach(item => item.classList.remove("unfolded"));
  const futureModal = document.getElementById("future-note-modal");
  if (futureModal) {
    futureModal.classList.add("hidden");
    futureModal.setAttribute("aria-hidden", "true");
  }

  // 7. Reset Chapter 7: 3D Hug Card
  const hugCardContainer = document.getElementById("hug-card-container");
  if (hugCardContainer) {
    hugCardContainer.classList.remove("is-open");
  }
  const hugCardBadge = document.getElementById("hug-card-badge");
  if (hugCardBadge) {
    hugCardBadge.textContent = "✨ Thottu Thirandhu Paaru ✨";
  }

  // 8. Reset Chapter 8: Final Message & Epilogue Surprise
  const finalMsgEl = document.getElementById("final-msg-text");
  if (finalMsgEl) {
    finalMsgEl.textContent = "";
    finalMsgEl.classList.remove("typing");
  }
  const epilogueModal = document.getElementById("epilogue-surprise-modal");
  if (epilogueModal) {
    epilogueModal.classList.add("hidden");
    epilogueModal.setAttribute("aria-hidden", "true");
  }

  // 9. Navigate back to Page 1
  navigateToPage(1);
}

function triggerMicroConfetti() {
  const confettiCount = 35;
  const colors = ["#e5be75", "#c99b4e", "#c88a95", "#ffffff", "#fcf8f0"];

  for (let i = 0; i < confettiCount; i++) {
    const p = document.createElement("div");
    p.style.position = "fixed";
    p.style.left = "50vw";
    p.style.top = "50vh";
    p.style.width = Math.random() * 7 + 3 + "px";
    p.style.height = Math.random() * 7 + 3 + "px";
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.borderRadius = "50%";
    p.style.zIndex = "3000";
    p.style.pointerEvents = "none";
    p.style.transition = "transform 1.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.4s ease-out";

    document.body.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 260 + 70;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity - 70;

    requestAnimationFrame(() => {
      p.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
      p.style.opacity = "0";
    });

    setTimeout(() => { p.remove(); }, 1400);
  }
}

function triggerFloatingHearts(anchorEl = null, count = 8) {
  const heartChars = ["💖", "✨", "🌸", "💕", "🤍", "🌷"];
  let originX = window.innerWidth / 2;
  let originY = window.innerHeight / 2;

  if (anchorEl && typeof anchorEl.getBoundingClientRect === "function") {
    const rect = anchorEl.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + rect.height / 2;
  }

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
    
    const spreadX = (Math.random() - 0.5) * 80;
    const spreadY = (Math.random() - 0.5) * 40;
    heart.style.left = `${originX + spreadX}px`;
    heart.style.top = `${originY + spreadY}px`;
    
    const randX = (Math.random() - 0.5) * 120;
    const randRot = (Math.random() - 0.5) * 50;
    heart.style.setProperty("--rand-x", `${randX}px`);
    heart.style.setProperty("--rand-rot", `${randRot}deg`);
    heart.style.fontSize = `${Math.floor(Math.random() * 10) + 16}px`;
    heart.style.animationDelay = `${Math.random() * 0.25}s`;

    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 2500);
  }
}

function initCanvas() {
  const canvas = document.getElementById("star-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const numStars = Math.min(80, Math.floor((width * height) / 12000));

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.003
    });
  }

  let lastFrame = 0;

  function render(timestamp) {
    // During page flips, pause canvas rendering entirely to free GPU
    if (isPageFlipping) {
      requestAnimationFrame(render);
      return;
    }

    // Throttle to ~30fps when idle (stars don't need 60fps)
    if (timestamp - lastFrame < 33) {
      requestAnimationFrame(render);
      return;
    }
    lastFrame = timestamp;

    ctx.clearRect(0, 0, width, height);

    for (let star of stars) {
      star.alpha += star.speed;
      if (star.alpha > 1 || star.alpha < 0) {
        star.speed = -star.speed;
      }

      // Gentle upward drift like warm candlelight embers
      star.y -= (star.radius * 0.28);
      if (star.y < 0) {
        star.y = height;
        star.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(229, 190, 117, ${Math.abs(star.alpha)})`;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
