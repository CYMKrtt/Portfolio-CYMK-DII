/* =========================================================
   แก้ข้อมูลกิจกรรม / ผลงาน / โปรเจค ได้ที่บล็อกข้างล่างนี้

   - title       = ชื่อ
   - meta        = ข้อความเล็กๆ ใต้ชื่อ (ปี, รางวัล, เครื่องมือที่ใช้)
   - description = รายละเอียดที่จะขึ้นตอนกดเข้าไปดู
   - images      = ใส่ได้หลายรูป เอารูปไปไว้ในโฟลเดอร์ images/ แล้วเขียนเป็น
                   images: ["images/รูป1.jpg", "images/รูป2.jpg"]
                   รูปแรกจะเป็นรูปหน้าการ์ด ที่เหลือจะโชว์ตอนกดเข้าไปดู
                   ถ้ายังไม่มีรูป ใส่ [] ไว้ก่อน
   - link        = ลิงก์ (Facebook, ข่าว ฯลฯ) จะขึ้นใต้รายละเอียด
                   ถ้าไม่มี ไม่ต้องใส่บรรทัดนี้
   - linkLabel   = ข้อความบนลิงก์ (ไม่ใส่ = "ดูโพสต์บน Facebook")
   - award       = รางวัลที่ได้ จะขึ้นเป็นป้าย 🏆 มุมรูป (ไม่มี ไม่ต้องใส่)
                   ตัวเลข awards ในหน้าแรกนับจากผลงานที่มี award
   - roles       = ตำแหน่งที่ทำ จะขึ้นเป็นป้ายเล็กๆ (ไม่มี ไม่ต้องใส่)
                   roles: ['AI Engineering', 'Pitcher']

   ส่วนไหนยังไม่มีอะไรเลย ปล่อยเป็น [] ได้ หน้าเว็บจะขึ้น "coming soon" ให้เอง

   skills (ส่วนทักษะแบบ htop) ใส่ชื่อกับระดับ 0 - 100:
    { name: 'C#', level: 65 },

   ตัวอย่าง ก๊อปไปวางแล้วแก้ได้เลย:
    {
      title: 'ชื่องาน',
      meta: '2026 · สถานที่',
      description: 'รายละเอียด',
      award: '1st Runner-up',
      roles: ['Full Stack Dev'],
      link: 'https://...',
      images: ['images/รูป1.jpg']
    },
   ========================================================= */

var DATA = {
  skills: [
    { name: 'HTML/CSS', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'C', level: 60 },
    { name: 'Java', level: 55 },
    { name: 'C#', level: 65 },
    { name: 'Unity', level: 60 },
    { name: 'AI Engineering', level: 70 },
    { name: 'Full Stack', level: 70 },
    { name: 'Video Edit', level: 85 },
    { name: 'Pitching', level: 80 },
    { name: 'English Communication', level: 75 }
  ],

  activities: [
    {
      title: 'Hackathon DII x Change 2026',
      meta: '2026 · U Nimman',
      description: 'ได้เข้าร่วมงาน hackathon DII x Change 2026 ณ U Nimman จังหวัดเชียงใหม่',
      link: 'https://www.facebook.com/share/p/1JpTERd4Lg/',
      images: [
        'images/hack2026-pitching.jpg',
        'images/hack2026-award-stage.jpg',
        'images/hack2026-team.jpg',
        'images/hack2026-audience.jpg'
      ]
    },
    {
      title: 'K-CAMT Hackathon 2026',
      meta: '9–15 Aug 2026 · Wintree City Resort Chiang Mai',
      description: 'ได้เข้าร่วมงาน K-CAMT Hackathon 2026 เป็นเวลา 7 วัน และได้ลงมือทำกับเพื่อนจากประเทศเกาหลี ' +
        'ทำให้ได้ฝึกสกิลภาษาอังกฤษมากขึ้น',
      link: 'https://www.facebook.com/share/p/19LdkkJGWS/',
      images: [
        'images/kcamt2026-teamwork.jpg',
        'images/kcamt2026-countdown.jpg',
        'images/kcamt2026-topics.jpg',
        'images/kcamt2026-team-award.jpg'
      ]
    },
    {
      title: 'ACT2: Startup Entrepreneur & Contest',
      meta: '2026 · CAMT',
      description: 'เข้าร่วม ACT2: Startup Entrepreneur & Contest',
      link: 'https://www.facebook.com/share/p/1DikU8FdLz/',
      images: [
        'images/act2-startup-talk.jpg',
        'images/act2-pitching.jpg',
        'images/act2-speaker.jpg',
        'images/act2-class.jpg'
      ]
    },
    {
      title: 'JUMP THAILAND HACKATHON 2026',
      meta: '2026 · AIS',
      description: 'ได้เข้าร่วมงาน JUMP THAILAND HACKATHON 2026 ของ AIS',
      images: [
        'images/jump2026-teamwork.jpg',
        'images/jump2026-stations.jpg'
      ]
    }
  ],

  works: [
    {
      title: 'DII x Change 2026 — รองชนะเลิศอันดับที่ 1',
      meta: '2026 · U Nimman',
      award: '1st Runner-up',
      roles: ['Full Stack Dev', 'AI Engineering', 'Pitcher'],
      description: 'ได้เข้าร่วมงาน hackathon DII x Change 2026 และได้รางวัลรองชนะเลิศอันดับที่ 1 ' +
        'ในงานนี้ผมได้ทำหน้าที่เป็น Full Stack Dev, AI Engineering และ Pitcher ' +
        'ซึ่งได้ขึ้นไป pitching ในเวลาแค่ 3 นาที และสามารถคว้ารางวัลกลับมาให้ทีมได้สำเร็จ',
      link: 'https://www.facebook.com/share/p/1JpTERd4Lg/',
      images: [
        'images/hack2026-team.jpg',
        'images/hack2026-award-stage.jpg',
        'images/hack2026-pitching.jpg',
        'images/hack2026-audience.jpg'
      ]
    },
    {
      title: 'K-CAMT Hackathon 2026 — รองชนะเลิศอันดับที่ 2',
      meta: 'Sustainability Catalyst Award · 9–15 Aug 2026',
      award: '2nd Runner-up',
      roles: ['AI Engineering', 'Pitcher'],
      description: 'ได้เข้าร่วมงาน K-CAMT Hackathon 2026 เป็นเวลา 7 วัน และได้ร่วมงานกับเพื่อนจากประเทศเกาหลี ' +
        'ผมทำตำแหน่งเป็น AI Engineering และ Pitcher ผมสามารถสื่อสารกับเพื่อนต่างชาติและร่วมมือกันจนสามารถสร้างผลงานขึ้นมาได้ ' +
        'ผมได้ขึ้นไป pitching ภายในเวลา 5 นาทีโดยเป็นภาษาอังกฤษล้วน และสามารถคว้ารางวัลรองชนะเลิศอันดับที่ 2 มาได้',
      link: 'https://www.facebook.com/share/p/19LdkkJGWS/',
      images: [
        'images/kcamt2026-team-award.jpg',
        'images/kcamt2026-trophies.jpg',
        'images/kcamt2026-teamwork.jpg'
      ]
    },
    {
      title: 'JUMP THAILAND HACKATHON 2026',
      meta: '2026 · AIS · เข้ารอบอันดับ 2 ของสาย',
      roles: ['Full Stack Dev', 'AI Engineering', 'Pitcher'],
      description: 'ได้เข้าร่วมงานแข่งขัน JUMP THAILAND HACKATHON 2026 ของ AIS ' +
        'โดยสามารถเข้ารอบได้เป็นอันดับสองของสาย แต่ยังไม่สามารถคว้ารางวัลมาได้ครับ ' +
        'เป็นการเพิ่มสกิลหลายๆ อย่างให้เก่งขึ้น',
      images: [
        'images/jump2026-teamwork.jpg',
        'images/jump2026-stations.jpg'
      ]
    },
    {
      title: 'HamsterHub Open Portfolio — Highlight สายเกม',
      meta: 'Port(69)-70 Special · 23–26 Aug 2025 · รางวัลที่ 2 ประเภทผี',
      award: 'Highlight',
      roles: ['Game Dev'],
      description: 'ได้เข้าร่วมงาน Open Portfolio ของ HamsterHub โดยเลือกหัวข้อสายเกม ' +
        'เลยได้แข่งขันสร้างเกมกับเพื่อนๆ ในงาน 50 คน และสามารถคว้ารางวัล Highlight ของสายเกม ' +
        'และยังได้รางวัลที่สองจากประเภทผี โดยทั้งหมดสร้างในเวลาแค่สี่ชั่วโมงเท่านั้น ' +
        'ทำให้ได้ฝึกความสามารถภาษา C# ให้เก่งขึ้น',
      images: [
        'images/hamsterhub-certificate.jpg',
        'images/hamsterhub-unity.jpg'
      ]
    }
  ],

  projects: [
    {
      title: 'Dino Tutor — DII Hackathon (Dinoyorpark)',
      meta: 'DII x Change 2026 · ทีม Dinoyorpark',
      award: '1st Runner-up',
      roles: ['Full Stack Dev', 'AI Engineering', 'Pitcher'],
      description: 'โปรเจคจากงาน DII Hackathon ของทีม Dinoyorpark ที่สามารถคว้ารางวัลที่สองมาครอง ' +
        'Dino Tutor เป็นเว็บติวเตอร์ AI มีแบบทดสอบวัดระดับ, AI สร้างข้อสอบจากไฟล์, ' +
        'AI Learning Twin ที่วิเคราะห์จุดแข็งจุดอ่อนของผู้เรียน และโหมด Quiz Battle / Tournament',
      link: 'https://aitutor-dii.base44.app',
      linkLabel: 'ลิ้งค์ชิ้นงาน',
      images: [
        'images/dinotutor-home.jpg',
        'images/dinotutor-learning-twin.jpg',
        'images/dinotutor-placement.jpg',
        'images/dinotutor-exam-generator.jpg'
      ]
    },
    {
      title: 'BiteBite Scan',
      meta: 'Midterm Project · 960141 Web Programming',
      description: 'งาน midterm project วิชา Web Programming 960141 ' +
        'คือเว็บสแกนหาเศษอาหารว่าเด็กที่ใช้กินเหลือมากแค่ไหน ช่วยลดปัญหา Food Waste ในโรงเรียน',
      roles: ['Full Stack Dev'],
      link: 'https://github.com/CYMKrtt/Bitebite-scan',
      linkLabel: 'ลิ้งค์ชิ้นงาน',
      images: [
        'images/bitebite-scan.jpg',
        'images/bitebite-history.jpg',
        'images/bitebite-person.jpg',
        'images/bitebite-menu.jpg',
        'images/bitebite-stats.jpg',
        'images/bitebite-team.jpg'
      ]
    },
    {
      title: 'BraveBoy',
      meta: '2D Game · Hobby Project · Unity 6',
      description: 'ทำเกม 2D ชื่อ BraveBoy เป็นโปรเจคงานอดิเรกของผมครับ ' +
        'ผมทำทั้งระบบหลังบ้านและหน้าบ้าน ออกแบบตัวละคร แต่งเนื้อเรื่อง คิด lore เอง ' +
        'รวมถึงวาดตัวละครและอาวุธเองทั้งหมด',
      images: [
        'images/braveboy-gameplay.jpg',
        'images/braveboy-sprite-front.jpg',
        'images/braveboy-sprite-side.jpg'
      ]
    }
  ]
};

/* ====== ข้างล่างนี้เป็นระบบของเว็บ ปกติไม่ต้องแก้ ====== */

var SECONDS_PER_ITEM = 6;

function mediaHTML(src, className) {
  if (src) {
    return '<img src="' + src + '" alt="" class="ph-img ' + className + '" />';
  }
  return '<div class="ph-box ' + className + '" role="img" aria-label="ยังไม่มีรูป">' +
         '<span class="ph-box__label">[ NO_IMAGE ]</span></div>';
}

var MIN_CARDS_PER_LOOP = 7;   // ถ้ามีการ์ดน้อย จะวนซ้ำให้เต็มจอ ไม่เหลือช่องว่าง

// "2nd Runner-up" → "🏆 2ND_RUNNER_UP"
function badgeHTML(award) {
  if (!award) return '';
  return '<span class="badge">🏆 ' + award.toUpperCase().replace(/[\s-]+/g, '_') + '</span>';
}

function tagsHTML(roles) {
  if (!roles || !roles.length) return '';
  return '<span class="tags">' + roles.map(function (r) {
    return '<span class="tag">[' + r + ']</span>';
  }).join('') + '</span>';
}

function cardHTML(item, index, isClone) {
  return '<button type="button" class="card" data-index="' + index + '"' +
         (isClone ? ' tabindex="-1" aria-hidden="true"' : '') + '>' +
         mediaHTML(item.images[0], 'card__media') +
         badgeHTML(item.award) +
         '<div class="card__body">' +
           '<h3 class="card__title">' + item.title + '</h3>' +
           (item.meta ? '<p class="card__meta">' + item.meta + '</p>' : '') +
           tagsHTML(item.roles) +
           '<span class="card__cta">./view_details</span>' +
         '</div></button>';
}

function buildCarousel(section) {
  var key = section.getAttribute('data-carousel');
  var items = DATA[key] || [];
  var track = section.querySelector('.carousel__track');

  var countEl = document.querySelector('#' + section.closest('.section').id + ' [data-count]');
  if (countEl) countEl.textContent = items.length + ' entries found';

  if (!items.length) {
    section.classList.add('carousel--empty');
    section.innerHTML = '<p class="empty-line"><span class="dim">ls:</span> no entries yet — coming soon' +
                        '<span class="cursor" aria-hidden="true">_</span></p>';
    return;
  }

  // 1 รอบ = รายการทั้งหมด วนซ้ำจนได้อย่างน้อย MIN_CARDS_PER_LOOP ใบ แล้วต่อด้วยอีก 1 รอบให้เลื่อนวนได้เนียน
  var repeats = Math.ceil(MIN_CARDS_PER_LOOP / items.length);
  var perPass = repeats * items.length;
  var html = '';
  for (var n = 0; n < perPass * 2; n++) {
    html += cardHTML(items[n % items.length], n % items.length, n >= items.length);
  }
  track.innerHTML = html;
  track.style.animationDuration = (perPass * SECONDS_PER_ITEM) + 's';

  section.addEventListener('click', function (e) {
    var card = e.target.closest('.card');
    if (card) openModal(items[card.getAttribute('data-index')], key);
  });
}

var modal = document.getElementById('modal');
var modalReturnFocus = null;   // ปิด popup แล้วให้ focus กลับไปที่นี่ (ใช้กับ terminal)

function openModal(item, key, returnFocus) {
  modalReturnFocus = returnFocus || null;
  document.getElementById('modal-path').textContent = '~/' + key;
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-meta').textContent = item.meta || '';
  document.getElementById('modal-tags').innerHTML = badgeHTML(item.award) + tagsHTML(item.roles);
  document.getElementById('modal-desc').textContent = item.description || '';
  document.getElementById('modal-link').innerHTML = item.link
    ? '<a href="' + item.link + '" target="_blank" rel="noopener noreferrer">' +
      '[ ' + (item.linkLabel || 'ดูโพสต์บน Facebook') + ' &rarr; ]</a>'
    : '';
  document.getElementById('modal-media').innerHTML = item.images.length
    ? '<div class="modal__gallery">' +
        item.images.map(function (src) { return mediaHTML(src, 'modal__shot'); }).join('') +
      '</div>'
    : mediaHTML(null, 'modal__media');
  modal.hidden = false;
  SFX.open();
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close').focus();
}

function closeModal() {
  modal.hidden = true;
  SFX.close();
  document.body.style.overflow = '';
  if (modalReturnFocus) {
    modalReturnFocus.focus({ preventScroll: true });
    modalReturnFocus = null;
  }
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', function (e) {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});

var carousels = document.querySelectorAll('[data-carousel]');
for (var c = 0; c < carousels.length; c++) buildCarousel(carousels[c]);


/* ====== เสียงทั้งเว็บ: สังเคราะห์ด้วย Web Audio ไม่ต้องใช้ไฟล์เสียง ====== */

var SFX = (function () {
  var VOLUME = 0.5;            // ความดังรวม 0 - 1
  var AMBIENT_VOLUME = 0.07;   // เสียงฮัมพื้นหลังแบบห้องเซิร์ฟเวอร์ (0 = ปิด)

  var audio = null, master = null, noiseBuf = null, ambient = null;
  var muted = false;
  try { muted = localStorage.getItem('sfx-muted') === '1'; } catch (e) {}

  // เบราว์เซอร์ให้เล่นเสียงได้หลังผู้ใช้คลิก/กดปุ่มครั้งแรกเท่านั้น
  function init() {
    if (audio) {
      if (audio.state === 'suspended' && !document.hidden) audio.resume();
      return;
    }
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audio = new AC();
    master = audio.createGain();
    master.gain.value = muted ? 0 : VOLUME;
    master.connect(audio.destination);
    noiseBuf = audio.createBuffer(1, audio.sampleRate * 2, audio.sampleRate);
    var data = noiseBuf.getChannelData(0);
    for (var i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  }

  function on() { return audio && !muted && audio.state === 'running'; }

  function noise(duration, filterType, freq, gain, when) {
    var t = when || audio.currentTime;
    var src = audio.createBufferSource();
    src.buffer = noiseBuf;
    var filter = audio.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(freq, t);
    var g = audio.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + duration);
    src.connect(filter).connect(g).connect(master);
    src.start(t, Math.random());
    src.stop(t + duration);
    return { filter: filter, gain: g, t: t };
  }

  function tone(type, freq, duration, gain, when) {
    var t = when || audio.currentTime;
    var osc = audio.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    var g = audio.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + duration);
    osc.connect(g).connect(master);
    osc.start(t);
    osc.stop(t + duration);
    return osc;
  }

  // เสียงฮัมต่ำๆ ตลอดเวลา: คลื่นเสียงต่ำ + filter ที่ค่อยๆ ขยับ
  function startAmbient() {
    if (!audio || ambient || AMBIENT_VOLUME <= 0) return;
    var t = audio.currentTime;
    ambient = audio.createGain();
    ambient.gain.setValueAtTime(0, t);
    ambient.gain.linearRampToValueAtTime(AMBIENT_VOLUME, t + 4);

    var lp = audio.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 320;
    lp.Q.value = 4;
    var lfo = audio.createOscillator();
    lfo.frequency.value = 0.07;
    var lfoDepth = audio.createGain();
    lfoDepth.gain.value = 180;
    lfo.connect(lfoDepth).connect(lp.frequency);
    lfo.start();

    [[55, 'sawtooth'], [55.4, 'sawtooth'], [110.2, 'triangle']].forEach(function (v) {
      var o = audio.createOscillator();
      o.type = v[1];
      o.frequency.value = v[0];
      o.connect(lp);
      o.start();
    });
    var hiss = audio.createBufferSource();
    hiss.buffer = noiseBuf;
    hiss.loop = true;
    var hissGain = audio.createGain();
    hissGain.gain.value = 0.15;
    hiss.connect(hissGain).connect(lp);
    hiss.start();

    lp.connect(ambient).connect(master);
  }

  // สลับแท็บ = หยุดเสียงทั้งหมด, กลับมา = เล่นต่อ
  document.addEventListener('visibilitychange', function () {
    if (!audio) return;
    if (document.hidden) audio.suspend(); else audio.resume();
  });

  return {
    init: init,
    ambient: startAmbient,
    isMuted: function () { return muted; },
    setMuted: function (m) {
      muted = m;
      try { localStorage.setItem('sfx-muted', m ? '1' : '0'); } catch (e) {}
      if (master) master.gain.setTargetAtTime(m ? 0 : VOLUME, audio.currentTime, 0.05);
    },

    // พิมพ์ตอนหน้าโหลด
    key: function () {
      if (!on()) return;
      noise(0.04, 'bandpass', 2500 + Math.random() * 1500, 0.6);
      tone('square', 120 + Math.random() * 40, 0.03, 0.08);
    },
    // พิมพ์คำสั่งตอนเลื่อนถึงแต่ละส่วน (เบากว่า)
    tick: function () {
      if (!on()) return;
      noise(0.025, 'bandpass', 3200 + Math.random() * 800, 0.22);
    },
    // code ไหลผ่านตอนหน้าโหลด
    rain: function (ms) {
      if (!on()) return;
      var dur = ms / 1000;
      var s = noise(dur, 'bandpass', 300, 0.5);
      s.filter.frequency.exponentialRampToValueAtTime(6000, s.t + dur);
      s.gain.gain.setValueAtTime(0.05, s.t);
      s.gain.gain.linearRampToValueAtTime(0.5, s.t + dur * 0.4);
      s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + dur);
      for (var i = 0; i < 28; i++) {
        tone('square', 800 + Math.random() * 2400, 0.03, 0.04, s.t + Math.random() * dur * 0.9);
      }
    },
    // เข้าเว็บ
    enter: function () {
      if (!on()) return;
      var t = audio.currentTime;
      var osc = tone('sine', 220, 0.6, 0.35);
      osc.frequency.exponentialRampToValueAtTime(880, t + 0.25);
      tone('sine', 55, 0.9, 0.4, t);
    },
    // เอาเมาส์ชี้การ์ด / ลิงก์ / ปุ่ม
    hover: function () {
      if (!on()) return;
      tone('sine', 2100 + Math.random() * 300, 0.04, 0.05);
    },
    // กดลิงก์
    select: function () {
      if (!on()) return;
      var t = audio.currentTime;
      tone('triangle', 1400, 0.06, 0.08, t);
      tone('triangle', 2100, 0.08, 0.06, t + 0.05);
    },
    // เปิด popup: เสียง "access granted"
    open: function () {
      if (!on()) return;
      var t = audio.currentTime;
      noise(0.14, 'highpass', 4000, 0.12, t);
      [660, 990, 1320].forEach(function (f, i) {
        tone('square', f, 0.08, 0.045, t + i * 0.06);
      });
    },
    // ปิด popup
    close: function () {
      if (!on()) return;
      var osc = tone('sine', 880, 0.18, 0.12);
      osc.frequency.exponentialRampToValueAtTime(330, audio.currentTime + 0.15);
    },
    // สลับรูป: เสียงสัญญาณภาพเสีย
    glitch: function () {
      if (!on()) return;
      var t = audio.currentTime;
      for (var i = 0; i < 6; i++) {
        noise(0.04, 'bandpass', 600 + Math.random() * 3000, 0.35, t + i * 0.055);
        tone('square', 80 + Math.random() * 900, 0.04, 0.05, t + i * 0.055);
      }
    },
    // คลิกที่ว่าง: เสียงโซนาร์เบาๆ คู่กับวงคลื่น
    ping: function () {
      if (!on()) return;
      var osc = tone('sine', 1250, 0.5, 0.06);
      osc.frequency.exponentialRampToValueAtTime(900, audio.currentTime + 0.5);
    }
  };
})();

// คลิก/กดปุ่มครั้งแรกที่ไหนก็ได้ = เปิดระบบเสียง + เสียงฮัมพื้นหลัง
function unlockAudio() {
  SFX.init();
  if (!document.body.classList.contains('is-booting')) SFX.ambient();
}
document.addEventListener('pointerdown', unlockAudio);
document.addEventListener('keydown', unlockAudio);

// เสียงตอนชี้ / กด ลิงก์ ปุ่ม การ์ด
(function uiSounds() {
  var lastHover = null;
  document.addEventListener('mouseover', function (e) {
    var el = e.target.closest('a, button, .card');
    if (el && el !== lastHover && !el.closest('.boot')) SFX.hover();
    lastHover = el;
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('a')) SFX.select();
  });
})();

// ปุ่มเปิด/ปิดเสียง มุมขวาบน
(function soundToggle() {
  var btn = document.getElementById('sound-toggle');
  function render() {
    var m = SFX.isMuted();
    btn.textContent = m ? '[ sound: off ]' : '[ sound: on ]';
    btn.setAttribute('aria-pressed', String(!m));
  }
  btn.addEventListener('click', function () {
    SFX.setMuted(!SFX.isMuted());
    render();
    SFX.select();
  });
  render();
})();

/* ====== พิมพ์คำสั่ง root@portfolio:~$ ... ทีละตัวตอนเลื่อนมาถึง ====== */

function startCommandTyping() {
  if (!('IntersectionObserver' in window)) return;
  var els = document.querySelectorAll('.hero__cmd, .section-head__cmd');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      typeCommand(entry.target);
    });
  }, { threshold: 0.8 });

  for (var i = 0; i < els.length; i++) {
    var node = els[i].lastChild;   // ข้อความหลัง prompt เช่น " ls ./activities"
    if (!node || node.nodeType !== 3) continue;
    els[i]._cmd = node.textContent;
    node.textContent = ' ';
    observer.observe(els[i]);
  }

  function typeCommand(el) {
    var node = el.lastChild;
    var text = el._cmd;
    var n = 1;
    el.classList.add('is-typing');
    (function step() {
      node.textContent = text.slice(0, n + 1);
      if (text.charAt(n) !== ' ') SFX.tick();
      if (++n < text.length) {
        setTimeout(step, 55 + Math.random() * 45);
      } else {
        setTimeout(function () { el.classList.remove('is-typing'); }, 900);
      }
    })();
  }
}

/* ====== ตัวเลข activities / awards ในหน้าแรก: นับจาก DATA แล้ววิ่งขึ้นจาก 0 ====== */

function countStats() {
  var values = {
    activities: DATA.activities.length,
    awards: DATA.works.filter(function (w) { return w.award; }).length
  };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('[data-stat]');
  for (var i = 0; i < els.length; i++) {
    (function (el, target) {
      if (reduce || target === 0) { el.textContent = target; return; }
      var n = 0;
      (function step() {
        el.textContent = n;
        SFX.tick();
        if (n++ < target) setTimeout(step, 90 + Math.random() * 60);
      })();
    })(els[i], values[els[i].getAttribute('data-stat')] || 0);
  }
}

/* ====== boot screen: กดเริ่ม → พิมพ์ Hello World (มีเสียง) → code สีเขียวไหลผ่าน ====== */

(function boot() {
  var BOOT_TEXT = 'Hello World';
  var TYPE_MS = 120;     // ความเร็วพิมพ์ต่อ 1 ตัวอักษร
  var RAIN_MS = 1800;    // ระยะเวลา code ไหลผ่าน

  var el = document.getElementById('boot');
  var textEl = document.getElementById('boot-text');
  var hintEl = document.getElementById('boot-hint');
  var canvas = document.getElementById('boot-rain');
  var ctx = canvas.getContext('2d');
  var started = false;
  var finished = false;
  var timers = [];
  var frame = 0;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.remove();
    document.body.classList.remove('is-booting');
    countStats();
    return;
  }

  function finish() {
    if (finished) return;
    finished = true;
    timers.forEach(clearTimeout);
    cancelAnimationFrame(frame);
    SFX.enter();
    SFX.ambient();
    el.classList.add('is-done');
    document.body.classList.remove('is-booting');
    setTimeout(startCommandTyping, 400);
    setTimeout(startDecrypt, 400);
    setTimeout(countStats, 600);
    setTimeout(function () { el.remove(); }, 700);
  }

  function rain() {
    el.classList.add('is-raining');
    SFX.rain(RAIN_MS);
    var dpr = window.devicePixelRatio || 1;
    var w = window.innerWidth, h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    var size = 16;
    var chars = '01<>{}[]()/=+;:*#$&abcdefxyz' + 'アイウエオカキクケコサシスセソ';
    var cols = Math.ceil(w / size);
    var drops = [];
    for (var i = 0; i < cols; i++) {
      drops.push({ y: -Math.random() * h * 0.6, speed: 18 + Math.random() * 22 });
    }
    ctx.font = size + 'px ' + getComputedStyle(document.body).fontFamily;

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
      ctx.fillRect(0, 0, w, h);
      for (var i = 0; i < cols; i++) {
        var d = drops[i];
        ctx.fillStyle = '#d4ffe4';
        ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), i * size, d.y);
        ctx.fillStyle = '#00ff66';
        ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), i * size, d.y - size);
        d.y += d.speed;
      }
      frame = requestAnimationFrame(draw);
    }
    draw();
    timers.push(setTimeout(finish, RAIN_MS));
  }

  var n = 0;
  function type() {
    if (finished) return;
    textEl.textContent = BOOT_TEXT.slice(0, n);
    if (n > 0 && BOOT_TEXT.charAt(n - 1) !== ' ') SFX.key();
    if (n++ < BOOT_TEXT.length) {
      timers.push(setTimeout(type, TYPE_MS + Math.random() * 60));
    } else {
      timers.push(setTimeout(rain, 650));
    }
  }

  // กดครั้งแรก = เริ่ม (เบราว์เซอร์ไม่ยอมให้เล่นเสียงก่อนผู้ใช้กด), กดอีกครั้ง = ข้าม
  function onInput() {
    if (!started) {
      started = true;
      SFX.init();
      el.classList.add('is-started');
      hintEl.textContent = 'press any key to skip';
      timers.push(setTimeout(type, 300));
    } else {
      finish();
    }
  }

  el.addEventListener('click', onInput);
  document.addEventListener('keydown', function onKey(e) {
    if (finished) {
      document.removeEventListener('keydown', onKey);
      return;
    }
    if (e.key === 'Tab') return;
    onInput();
  });
})();

/* ====== พื้นหลัง: code สีเขียวไหลจางๆ + เอฟเฟคตามเมาส์ ====== */

(function bgRain() {
  var BG_RAIN_ALPHA = 0.18;  // ความจางของ code ที่ไหล 0 - 1 (มากขึ้น = ชัดขึ้น)
  var BG_RAIN_SPEED = 1;     // ความเร็วการไหล (2 = เร็วขึ้นเท่าตัว)
  var BG_RAIN_FPS = 20;      // จำนวนเฟรมต่อวินาทีของ code ที่ไหล
  var MOUSE_RADIUS = 170;    // รัศมีวงไฟฉายรอบเมาส์ (px)

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var rainCanvas = document.getElementById('bg-rain');
  var glowCanvas = document.getElementById('bg-glow');
  var rctx = rainCanvas.getContext('2d');
  var gctx = glowCanvas.getContext('2d');
  var chars = '01<>{}[]()/=+;:*#$&abcdefxyz' + 'アイウエオカキクケコサシスセソ';
  var size = 18;
  var w, h, cols, drops;
  var mouse = null;
  var cells = {};        // ตัวอักษรในวงไฟฉาย (เก็บไว้ไม่ให้สุ่มใหม่ทุกเฟรม)
  var trail = [];        // ตัวอักษรที่หลุดตามหลังเมาส์
  var rings = [];        // วงคลื่นตอนคลิก
  var lastSpawn = null;
  var lastRain = 0;

  function randChar() {
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }

  function setup() {
    var dpr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;
    [rainCanvas, glowCanvas].forEach(function (c) {
      c.width = w * dpr;
      c.height = h * dpr;
      c.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    });
    var font = size + 'px ' + getComputedStyle(document.body).fontFamily;
    rctx.font = font;
    gctx.font = font;
    cols = Math.ceil(w / size);
    drops = [];
    for (var i = 0; i < cols; i++) {
      drops.push({ y: Math.random() * -h / size, speed: 0.4 + Math.random() * 0.8 });
    }
  }

  function drawRain() {
    // ค่อยๆ ลบรอยเก่าให้โปร่งใส (ไม่ทับลายตารางของพื้นหลังเดิม)
    rctx.globalCompositeOperation = 'destination-out';
    rctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    rctx.fillRect(0, 0, w, h);
    rctx.globalCompositeOperation = 'source-over';
    rctx.fillStyle = 'rgba(0, 255, 102, ' + BG_RAIN_ALPHA + ')';
    for (var i = 0; i < cols; i++) {
      var d = drops[i];
      var y = d.y * size;
      rctx.fillText(randChar(), i * size, y);
      d.y += d.speed * BG_RAIN_SPEED;
      if (y > h && Math.random() > 0.975) d.y = 0;
    }
  }

  function drawGlow() {
    gctx.clearRect(0, 0, w, h);

    if (mouse) {
      // แสงเขียวนวลๆ รอบเมาส์
      var R = MOUSE_RADIUS * 1.4;
      var grad = gctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, R);
      grad.addColorStop(0, 'rgba(0, 255, 102, 0.10)');
      grad.addColorStop(1, 'rgba(0, 255, 102, 0)');
      gctx.fillStyle = grad;
      gctx.fillRect(mouse.x - R, mouse.y - R, R * 2, R * 2);

      // code ที่ซ่อนอยู่ โผล่ขึ้นมาในวงไฟฉาย
      var c0 = Math.floor((mouse.x - MOUSE_RADIUS) / size), c1 = Math.ceil((mouse.x + MOUSE_RADIUS) / size);
      var r0 = Math.floor((mouse.y - MOUSE_RADIUS) / size), r1 = Math.ceil((mouse.y + MOUSE_RADIUS) / size);
      for (var c = c0; c <= c1; c++) {
        for (var r = r0; r <= r1; r++) {
          var x = c * size, y = r * size;
          var dx = x + size / 2 - mouse.x, dy = y - size / 2 - mouse.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > MOUSE_RADIUS) continue;
          var key = c + ',' + r;
          if (!cells[key] || Math.random() < 0.04) cells[key] = randChar();
          var k = 1 - dist / MOUSE_RADIUS;
          gctx.fillStyle = k > 0.8
            ? 'rgba(212, 255, 228, ' + (k * 0.9) + ')'
            : 'rgba(0, 255, 102, ' + (k * k * 0.7) + ')';
          gctx.fillText(cells[key], x, y);
        }
      }
    }

    // ตัวอักษรที่หลุดตามหลังเมาส์ ร่วงลงแล้วจางหาย
    for (var i = trail.length - 1; i >= 0; i--) {
      var p = trail[i];
      p.life -= 0.025;
      p.y += p.vy;
      if (p.life <= 0) { trail.splice(i, 1); continue; }
      if (Math.random() < 0.15) p.ch = randChar();
      gctx.fillStyle = 'rgba(0, 255, 102, ' + (p.life * 0.8) + ')';
      gctx.fillText(p.ch, p.x, p.y);
    }

    // วงคลื่นตอนคลิก
    for (var j = rings.length - 1; j >= 0; j--) {
      var ring = rings[j];
      ring.r += 7;
      ring.life -= 0.022;
      if (ring.life <= 0) { rings.splice(j, 1); continue; }
      gctx.strokeStyle = 'rgba(0, 255, 102, ' + (ring.life * 0.6) + ')';
      gctx.lineWidth = 1.5;
      gctx.beginPath();
      gctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
      gctx.stroke();
    }
  }

  function loop(now) {
    requestAnimationFrame(loop);
    if (document.hidden) return;
    drawGlow();
    if (now - lastRain >= 1000 / BG_RAIN_FPS) {
      lastRain = now;
      drawRain();
    }
  }

  window.addEventListener('resize', setup);
  document.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    mouse = { x: e.clientX, y: e.clientY };
    if (!lastSpawn || Math.abs(mouse.x - lastSpawn.x) + Math.abs(mouse.y - lastSpawn.y) > 14) {
      lastSpawn = { x: mouse.x, y: mouse.y };
      trail.push({ x: mouse.x, y: mouse.y, vy: 0.6 + Math.random() * 1.2, life: 1, ch: randChar() });
      if (trail.length > 80) trail.shift();
    }
  });
  document.documentElement.addEventListener('mouseleave', function () { mouse = null; });
  document.addEventListener('pointerdown', function (e) {
    if (document.body.classList.contains('is-booting')) return;
    rings.push({ x: e.clientX, y: e.clientY, r: 4, life: 1 });
    if (!e.target.closest('a, button, .card, .modal, .term')) SFX.ping();
  });

  setup();
  requestAnimationFrame(loop);
})();

/* ====== ตำแหน่งใน hero: พิมพ์ทีละตัว → ค้างไว้ → ลบ → ตำแหน่งถัดไป วนไปเรื่อยๆ ====== */

(function roleTyper() {
  var ROLES = ['Full Stack Dev', 'Backend Dev', 'AI Engineering', 'Cybersecurity'];
  var TYPE_MS = 85;      // ความเร็วพิมพ์ต่อตัว
  var DELETE_MS = 40;    // ความเร็วลบต่อตัว
  var HOLD_MS = 1700;    // ค้างไว้ให้อ่านก่อนลบ

  var el = document.getElementById('role-typer');
  if (!el) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = ROLES.join(' / ');
    return;
  }

  var i = 0, n = 0, deleting = false;
  el.textContent = '';

  function step() {
    var word = ROLES[i];
    if (!deleting) {
      el.textContent = word.slice(0, ++n);
      if (n === word.length) {
        el.classList.add('is-full');
        deleting = true;
        return setTimeout(step, HOLD_MS);
      }
      setTimeout(step, TYPE_MS + Math.random() * 50);
    } else {
      el.classList.remove('is-full');
      el.textContent = word.slice(0, --n);
      if (n === 0) {
        deleting = false;
        i = (i + 1) % ROLES.length;
        return setTimeout(step, 350);
      }
      setTimeout(step, DELETE_MS);
    }
  }
  setTimeout(step, 600);
})();

/* ====== กดรูปใน hero = สลับรูป พร้อมเอฟเฟค glitch ====== */

(function photoSwap() {
  var btn = document.getElementById('hero-photo');
  if (!btn) return;
  var hint = btn.querySelector('.hero__photo-hint');
  var busy = false;

  btn.addEventListener('click', function () {
    if (busy) return;
    busy = true;
    SFX.glitch();
    btn.classList.add('is-glitching');
    setTimeout(function () {
      var alt = btn.classList.toggle('is-alt');
      hint.textContent = alt ? '[ back ]' : '[ click_me ]';
    }, 200);
    setTimeout(function () {
      btn.classList.remove('is-glitching');
      busy = false;
    }, 460);
  });
})();

/* ====== ตัวอักษร ASCII ของรูป images/me.png (แปลงไว้แล้ว ไม่ต้องแก้มือ) ====== */

var ASCII_COLS = 90;
var ASCII_ME = [
  '',
  '                                                   ===========',
  '                                                =====----==-======',
  '                                              ====-=-:-::-----=====',
  '                                             +=-=------::::---==--=-',
  '                                            +=----=----=--::::-------',
  '                                            =--=----=-===-::::::::::-',
  '                                            =---::==+====---:::::::::-',
  '                                           ==--:=*%*+========-:::::::-',
  '                                           ===:=%#%+=---===---:::::::',
  '                                            +*=%##%*+==+**=-----::::-',
  '                                            *+*%#%%%%*%%%*+=====-:::',
  '                                            *%%%%%%%%%%%%*+**+++=--',
  '                                             *+%%%%%%%*++=+***++==',
  '                                              =%%%%****++=+*++++=',
  '                                               *%**++++====+++=+',
  '                                               *%****+======+=',
  '                                               %%****++======',
  '                                               %%***++=====++',
  '                                               %%%%*+=====+++',
  '                                             ###%%%**+==++++*',
  '                                             #%%%%%**+++++++%#',
  '                                            ##%%%%***++++++*######',
  '                                         ###@##%*****+++++*#####@@####',
  '                                      ###@@#####%******+*%##########@@####',
  '                                  ####@@##########%****%################@@@##',
  '                             %%%*%%%*%###############%######################@@#',
  '                ####%%########@#%%**###############@%%%#######################@#',
  '     *%%%#######@@@@@####%######%%%%###############***++#######################@%',
  '     %##@@############%****%#%%%***%%%############%+**+*%########################',
  '  %%%%%#######%*%%##%*%%*%%%%%%%%**%%####%%%######%**+*#########################@#',
  ' %%%%**%######**%%*%*+%%******%%%#####%###%*#######%***##########################@%',
  ' ****+*#%%###%**%*%**%%%%%%%%*#########%###%#######****%###########################',
  ' ******%%%%%#######%%%%%*%%%%%#########%%##########****%##################%#######@%',
  ' **++++**%%%%#####%%#%*****%%##########%+%#%%######****%##################%%########',
  ' %*+*++*%***%#%#######%%%%#%%##########%**##%#####%****%###################%#########',
  ' %+==+**%%%%##%%%#%######%####%#########**########%****%###################%########@#',
  '  +**%%*%####%#%%###%%%%%%%###%%########%%########%*****###################%#########@%',
  '    +**++*%####%###%%#%%%#%%%%%###################******##############################@%',
  '       *#%%%*%%%###%%%####%%%%##%##########%*%####******################################',
  '       %###**%*%#####%%%%#%%%%#############*==%##%******%################################',
  '        %%%%%**%#########%%%%%%###########%===%##%****+*%#################%%############@#',
  '        %%%##%%%########%%%%##%%####%#%%#%+===*##*+*+++*%#################%%%%%##########@',
  '        %#%#########%%*+*%%%%%%*%%++*####**=*+*##*+*+*+*%#################%%%%#########@##',
  '        %########%*%+*+=+%%%%%%+*%==*###%+**%%+#%=+*++++%#################%%%###########',
  '         #######%+-+##*=+*%###%*+*++%##%*****%%#%=+*++++%#################%%%%%%%%%%%',
  '         ##%%%%%%%++%*+=*%%###%%%***###%*****#%%%+++++++%#################%%****+===',
  '         *%%*++%#****==*%%%##%%%%%%###%%***+++=**=++++++%###############%%*+=======+',
  '          ##%--+##*%#%%#%%######%%%#####%%%%%++*+=+++++*%#############%%**+=+++++++++',
  '          %%%+==+****%###%######%%######%####%%*+=+++++*%############%%%**+***+++++++',
  '          -=-++**%*%%#######%%%###%#%%%%%%%%%%##%*++++++%###########%*********++++++',
  '          -==+******%%%%%%####%##%%%**%%**%%%%%%%%++++++%##########%%*******+++====+',
  '           **%%****+%%%*%%%%**++**%%*%%*++%%%####*++++++%########%%*******++=====',
  '           %#%*%%******%##%%*++++**%*%%*++***####*++****%####%%%%********+=====',
  '           %%%%%%*+++*%%%#%%********%%*+++***%###%%%%%%%%%%%%%%%%****++===++',
  '           %###%%*++++**************%%*********%%***%%%********%%*+++===*%##',
  '            @#@%+++++++***%**%%%*******%**%%%%%%%*****+**********+++***%#####',
  '            %#%*+*++**********%%%%%%*%*%#######%*+=++*************%%####%%##',
  '            ++++****%%%%%%%##%%#####%%%%#%%%%%%*+=+++******+***%%#####%*+*%',
  '            %##########%%%%      ###%%######%%%%*=-+***+=+++*%%%**+++=-:-',
  '             @                      +===+++++++*+=-===---++***+=-:..:.:::-',
  '                                    ==--::::::--=========---::::::::::::::-',
  '                                    --:::::::::.-=======-:::::::::::::::::-',
  '                                    -:::::::::::.:=====:::::::::::::::::::-',
  '                                    -::::::::::::..:=-:.::::::::::::::::::-',
  '                                   =-::::::::::::::...:::::::::::::::::::::',
  '                                   --::::::::::::::::::::::::::::::::::::::-',
  '                                   -::::::::::::::::::::::::::::::::::::::::',
  '                                   -::::::::::::::::::::::::::::::::::::::::',
  '                                  ---::::::::::::::::::::::::::::::::::::::::',
  '                                  --:::::::::::::::::::::::::::::::::::::::::',
  '                                  -::::::::::::::::::::::::::::::::::::::::::',
  '                                 --::::::::::::::::::::::::::::::::::::::::::',
  '                                 --::::::::::::::::::::::::::::::::::::::::::',
  '                                  :::::::::::::::::::::::::::::::::::::::::::',
  '                                  -::::::::::::::::::::::::::::::::::::::::::',
  '                                  =::::::::::::::::::::::::::::::::::::::::::'
].join('\n');

/* ====== ทักษะแบบ htop: แถบวิ่งขึ้นตอนเลื่อนมาถึง (ข้อมูลอยู่ที่ DATA.skills) ====== */

(function skillsMeter() {
  var root = document.getElementById('htop');
  if (!root) return;
  var skills = DATA.skills || [];
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var head = document.createElement('p');
  head.className = 'htop__head';
  head.textContent = 'Tasks: ' + skills.length + ' total, ' + skills.length + ' running    Uptime: 18 years';
  root.appendChild(head);

  var rows = skills.map(function (s) {
    var row = document.createElement('div');
    row.className = 'htop__row';
    var name = document.createElement('span');
    name.className = 'htop__name';
    name.textContent = s.name;
    var bar = document.createElement('span');
    bar.className = 'htop__bar';
    var fill = document.createElement('span');
    fill.className = 'htop__fill';
    bar.appendChild(fill);
    var pct = document.createElement('span');
    pct.className = 'htop__pct';
    pct.textContent = '0%';
    row.appendChild(name);
    row.appendChild(bar);
    row.appendChild(pct);
    root.appendChild(row);
    return { level: Math.max(0, Math.min(100, s.level)), fill: fill, pct: pct };
  });

  function show(r, v) {
    r.fill.style.width = v + '%';
    r.pct.textContent = Math.round(v) + '%';
  }

  if (reduce || !('IntersectionObserver' in window)) {
    rows.forEach(function (r) { show(r, r.level); });
    return;
  }

  function run() {
    rows.forEach(function (r, i) {
      setTimeout(function () {
        var start = performance.now();
        var DURATION = 900;
        var lastTick = 0;
        (function step(now) {
          var k = Math.min(1, (now - start) / DURATION);
          var v = r.level * (1 - Math.pow(1 - k, 3));
          show(r, v);
          if (v - lastTick >= 20) { lastTick = v; SFX.tick(); }
          if (k < 1) requestAnimationFrame(step);
        })(start);
      }, i * 110);
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    run();
  }, { threshold: 0.4 });
  observer.observe(root);
})();

/* ====== หัวข้อถอดรหัส: ตัวอักษรมั่วๆ แล้วค่อยๆ กลายเป็นคำจริง (เลื่อนมาถึง / เอาเมาส์ชี้) ====== */

function startDecrypt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  var GLYPHS = '#$%&@01<>/*+=?!';
  var DURATION = 800;
  // สระบน/ล่าง วรรณยุกต์ ของไทย ต้องติดไปกับพยัญชนะตัวหน้า ไม่งั้นจะลอย
  var THAI_MARK = /[ัิ-ฺ็-๎]/;

  function clusters(str) {
    var out = [];
    for (var i = 0; i < str.length; i++) {
      var ch = str.charAt(i);
      if (THAI_MARK.test(ch) && out.length) out[out.length - 1] += ch;
      else out.push(ch);
    }
    return out;
  }

  function setup(el) {
    var nodes = [];
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = walker.nextNode())) {
      if (n.parentNode.closest('.cursor')) continue;
      nodes.push({ node: n, parts: clusters(n.textContent) });
    }
    el.setAttribute('aria-label', nodes.map(function (x) { return x.parts.join(''); }).join(' ').trim());
    el._decrypt = { nodes: nodes, running: false };
  }

  function run(el) {
    var d = el._decrypt;
    if (d.running) return;
    d.running = true;
    var total = 0;
    d.nodes.forEach(function (x) { total += x.parts.length; });
    var start = performance.now();
    var last = 0;

    (function frame(now) {
      if (now - last >= 40) {
        last = now;
        var shown = Math.floor(Math.min(1, (now - start) / DURATION) * total);
        var idx = 0;
        d.nodes.forEach(function (x) {
          var s = '';
          for (var i = 0; i < x.parts.length; i++, idx++) {
            var p = x.parts[i];
            s += (idx < shown || !p.trim()) ? p : GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
          }
          x.node.textContent = s;
        });
        if (shown >= total) { d.running = false; return; }
      }
      requestAnimationFrame(frame);
    })(start);
  }

  var els = document.querySelectorAll('.hero__name, .section-head__title');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      run(entry.target);
    });
  }, { threshold: 0.6 });

  for (var i = 0; i < els.length; i++) {
    setup(els[i]);
    observer.observe(els[i]);
    els[i].addEventListener('mouseenter', function () { run(this); });
  }
}

/* ====== รูปใน hero เวอร์ชัน ASCII: เอาเมาส์ชี้แล้วรูปกลายเป็นตัวอักษร ======
   ตัวอักษรถูกแปลงจาก images/me.png ไว้แล้ว (เปิดไฟล์ตรงๆ แบบ file:// เบราว์เซอร์ไม่ยอมให้อ่านพิกเซลรูป)
   ถ้าเปลี่ยนรูป me.png ต้องแปลงใหม่ด้วย */

(function asciiPhoto() {
  var btn = document.getElementById('hero-photo');
  var pre = btn && btn.querySelector('.hero__ascii');
  if (!pre) return;
  pre.textContent = ASCII_ME;

  // ตัวอักษร monospace กว้าง 0.6 เท่าของขนาดฟอนต์ → ปรับขนาดฟอนต์ให้กว้างพอดีรูป
  function fit() {
    pre.style.fontSize = (btn.clientWidth / (ASCII_COLS * 0.6)) + 'px';
  }
  window.addEventListener('resize', fit);
  fit();
})();

/* ====== terminal ที่พิมพ์คำสั่งได้จริง ======
   ข้อความต้อนรับ = ข้อมูลเครื่องของคนที่เข้ามาดู (อ่านจากเบราว์เซอร์เฉยๆ ไม่ได้ส่งไปไหน)
   เพิ่มคำสั่งใหม่ได้ที่ COMMANDS ข้างล่าง */

var SESSION_START = new Date();

(function terminal() {
  var term = document.getElementById('term');
  var body = document.getElementById('term-body');
  var out = document.getElementById('term-out');
  var input = document.getElementById('term-input');
  if (!term) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SECTIONS = ['top', 'skills', 'activities', 'works', 'projects', 'terminal', 'contact'];
  var LISTS = ['activities', 'works', 'projects'];
  var history = [];
  var hIndex = 0;
  var welcomeTimers = [];

  function print(text, kind) {
    var row = document.createElement('div');
    row.className = 'term__row' + (kind ? ' term__row--' + kind : '');
    row.textContent = text;
    out.appendChild(row);
    body.scrollTop = body.scrollHeight;
    return row;
  }

  function printLink(label, href) {
    var row = print(label);
    var a = document.createElement('a');
    a.href = href;
    a.textContent = href.replace(/^mailto:|^tel:/, '').replace(/^https?:\/\//, '');
    if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    row.appendChild(a);
  }

  function pad(s, n) {
    while (s.length < n) s += ' ';
    return s;
  }

  /* ---- ข้อมูลเครื่องของคนดู ---- */

  function sessionLines() {
    var ua = navigator.userAgent;
    var m;
    var os = /iPhone|iPad|iPod/.test(ua) ? 'iOS'
      : /Android/.test(ua) ? 'Android'
      : /Windows NT 10/.test(ua) ? 'Windows 10/11'
      : /Windows/.test(ua) ? 'Windows'
      : /Mac OS X/.test(ua) ? 'macOS'
      : /CrOS/.test(ua) ? 'ChromeOS'
      : /Linux/.test(ua) ? 'Linux' : 'unknown';
    var browser = (m = ua.match(/Edg\/(\d+)/)) ? 'Edge ' + m[1]
      : (m = ua.match(/OPR\/(\d+)/)) ? 'Opera ' + m[1]
      : (m = ua.match(/Firefox\/(\d+)/)) ? 'Firefox ' + m[1]
      : (m = ua.match(/Chrome\/(\d+)/)) ? 'Chrome ' + m[1]
      : (m = ua.match(/Version\/(\d+).*Safari/)) ? 'Safari ' + m[1] : 'unknown';
    var tz = '-';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '-'; } catch (e) {}
    var dpr = window.devicePixelRatio || 1;
    return [
      ['os', os],
      ['browser', browser],
      ['screen', screen.width + 'x' + screen.height + (dpr !== 1 ? ' @' + Math.round(dpr * 100) / 100 + 'x' : '')],
      ['viewport', window.innerWidth + 'x' + window.innerHeight],
      ['language', navigator.language || '-'],
      ['timezone', tz],
      ['cpu cores', String(navigator.hardwareConcurrency || '-')],
      ['login at', SESSION_START.toLocaleTimeString('en-GB')]
    ].map(function (r) { return '  ' + pad(r[0], 10) + ': ' + r[1]; });
  }

  function welcome() {
    var lines = [['> establishing secure connection ... OK', 'ok']]
      .concat(sessionLines().map(function (l) { return [l]; }))
      .concat([['> guest session ready. พิมพ์ help เพื่อดูคำสั่งทั้งหมด', 'ok']]);
    lines.forEach(function (l, i) {
      if (reduce) return print(l[0], l[1]);
      welcomeTimers.push(setTimeout(function () {
        print(l[0], l[1]);
        SFX.tick();
      }, i * 140));
    });
  }

  /* ---- หาข้อมูลจาก DATA ---- */

  function findItem(args) {
    if (LISTS.indexOf(args[0]) !== -1 && /^\d+$/.test(args[1] || '')) {
      var list = DATA[args[0]];
      var item = list[parseInt(args[1], 10) - 1];
      return item ? { item: item, key: args[0] } : null;
    }
    var q = args.join(' ').toLowerCase().replace(/\s+/g, '');
    if (!q) return null;
    var order = ['projects', 'works', 'activities'];
    for (var i = 0; i < order.length; i++) {
      var items = DATA[order[i]];
      for (var j = 0; j < items.length; j++) {
        if (items[j].title.toLowerCase().replace(/\s+/g, '').indexOf(q) !== -1) {
          return { item: items[j], key: order[i] };
        }
      }
    }
    return null;
  }

  function goTo(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }

  function shake() {
    term.classList.remove('is-shaking');
    void term.offsetWidth;
    term.classList.add('is-shaking');
    SFX.glitch();
  }

  /* ---- คำสั่งทั้งหมด ---- */

  var COMMANDS = {
    help: {
      desc: 'ดูคำสั่งทั้งหมด',
      run: function () {
        Object.keys(COMMANDS).forEach(function (name) {
          if (!COMMANDS[name].hidden) print('  ' + pad(name + (COMMANDS[name].usage ? ' ' + COMMANDS[name].usage : ''), 26) + COMMANDS[name].desc);
        });
        print('  tip: กด Tab เติมคำสั่งให้ / ลูกศร ↑ ↓ เรียกคำสั่งเก่า', 'dim');
      }
    },
    whoami: {
      desc: 'ข้อมูลเจ้าของเว็บ',
      run: function () {
        print('Chaiyamongkol Ratanaburi', 'ok');
        print('  นักศึกษาชั้นปีที่ 1 สาขา DII @ CAMT');
        print('  age 18 · Full Stack Dev / AI Engineering / Pitcher');
      }
    },
    session: {
      desc: 'ข้อมูลเครื่องของคุณ',
      run: function () { sessionLines().forEach(function (l) { print(l); }); }
    },
    ls: {
      usage: '[section]',
      desc: 'ดูรายการกิจกรรม/ผลงาน/โปรเจค',
      run: function (args) {
        if (!args[0]) {
          print('activities/  works/  projects/  skills.log  contact.txt');
          return;
        }
        var key = args[0].replace(/\/$/, '');
        if (LISTS.indexOf(key) === -1) return print('ls: ' + args[0] + ': No such directory', 'err');
        var items = DATA[key];
        if (!items.length) return print('(ว่าง — coming soon)', 'dim');
        items.forEach(function (it, i) { print('  [' + (i + 1) + '] ' + it.title + (it.award ? '  🏆' : '')); });
        print('  เปิดดูด้วย: open ' + key + ' <เลข>', 'dim');
      }
    },
    open: {
      usage: '<name | section n>',
      desc: 'เปิดดูรายละเอียด เช่น open bitebite',
      run: function (args) {
        var found = findItem(args);
        if (!found) return print('open: ไม่เจอ "' + args.join(' ') + '" ลอง ls works ดูก่อน', 'err');
        print('opening ' + found.item.title + ' ...', 'ok');
        openModal(found.item, found.key, input);
        return true;
      }
    },
    skills: {
      desc: 'ดูทักษะ',
      run: function () {
        (DATA.skills || []).forEach(function (s) {
          var n = Math.round(s.level / 5);
          print('  ' + pad(s.name, 16) + '[' + new Array(n + 1).join('|') + new Array(21 - n).join(' ') + '] ' + s.level + '%');
        });
      }
    },
    contact: {
      desc: 'ช่องทางติดต่อ',
      run: function () {
        var rows = document.querySelectorAll('.contact__row');
        for (var i = 0; i < rows.length; i++) {
          var key = rows[i].querySelector('.contact__key').textContent;
          var a = rows[i].querySelector('a');
          if (a) printLink('  ' + pad(key, 10) + ': ', a.getAttribute('href'));
        }
      }
    },
    cd: {
      usage: '<section>',
      desc: 'เลื่อนไปส่วนนั้น เช่น cd works',
      run: function (args) {
        var to = (args[0] || '~').replace(/\/$/, '');
        if (to === '~' || to === '..' || to === '/') to = 'top';
        if (SECTIONS.indexOf(to) === -1) return print('cd: ' + args[0] + ': No such directory', 'err');
        goTo(to);
        return true;
      }
    },
    sound: {
      usage: 'on|off',
      desc: 'เปิด/ปิดเสียง',
      run: function (args) {
        if (args[0] !== 'on' && args[0] !== 'off') return print('usage: sound on|off', 'err');
        var wantMuted = args[0] === 'off';
        if (SFX.isMuted() !== wantMuted) document.getElementById('sound-toggle').click();
        print('sound: ' + args[0], 'ok');
      }
    },
    date: {
      desc: 'วันเวลาตอนนี้',
      run: function () { print(new Date().toString()); }
    },
    echo: {
      usage: '<text>',
      desc: 'พิมพ์ข้อความออกมา',
      run: function (args) { print(args.join(' ')); }
    },
    clear: {
      desc: 'ล้างหน้าจอ',
      run: function () {
        welcomeTimers.forEach(clearTimeout);
        out.textContent = '';
      }
    },
    sudo: {
      hidden: true,
      run: function (args) {
        if (args.join(' ') === 'hire-me') {
          print('[sudo] password for guest: ********');
          print('ACCESS GRANTED ✓  ยินดีที่ได้ร่วมงานครับ — ติดต่อได้เลย:', 'ok');
          COMMANDS.contact.run();
          return true;
        }
        print('guest is not in the sudoers file. This incident will be reported. 👀', 'err');
        shake();
      }
    },
    rm: {
      hidden: true,
      run: function () {
        print('rm: permission denied — nice try 😏', 'err');
        shake();
      }
    },
    exit: {
      hidden: true,
      run: function () { print('logout ... เดี๋ยวก่อน ยังไม่ได้ดูผลงานเลย → ls works', 'dim'); }
    }
  };

  function execute(line) {
    print('guest@portfolio:~$ ' + line, 'cmd');
    var args = line.trim().split(/\s+/);
    var name = args.shift().toLowerCase();
    if (!name) return;
    var cmd = COMMANDS[name];
    if (!cmd) {
      print(name + ': command not found — พิมพ์ help เพื่อดูคำสั่ง', 'err');
      SFX.glitch();
      return;
    }
    if (cmd.run(args) === true) SFX.open();
  }

  /* ---- Tab เติมคำให้ ---- */

  function complete() {
    var value = input.value;
    var parts = value.split(' ');
    var options;
    if (parts.length === 1) {
      options = Object.keys(COMMANDS).filter(function (c) { return !COMMANDS[c].hidden; });
    } else if (parts.length === 2 && (parts[0] === 'ls' || parts[0] === 'open')) {
      options = LISTS;
    } else if (parts.length === 2 && parts[0] === 'cd') {
      options = SECTIONS;
    } else {
      return;
    }
    var last = parts[parts.length - 1];
    var matches = options.filter(function (o) { return o.indexOf(last) === 0; });
    if (matches.length === 1) {
      parts[parts.length - 1] = matches[0];
      input.value = parts.join(' ') + ' ';
      SFX.tick();
    } else if (matches.length > 1) {
      print('guest@portfolio:~$ ' + value, 'cmd');
      print(matches.join('  '), 'dim');
    }
  }

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      // กันไม่ให้ Enter ไปกดปุ่ม [ close ] ของ popup ที่เพิ่งเปิด
      e.preventDefault();
      var line = input.value;
      input.value = '';
      if (line.trim()) {
        history.push(line);
        if (history.length > 50) history.shift();
      }
      hIndex = history.length;
      execute(line);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (hIndex > 0) input.value = history[--hIndex];
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      hIndex = Math.min(history.length, hIndex + 1);
      input.value = history[hIndex] || '';
    } else if (e.key === 'Tab') {
      e.preventDefault();
      complete();
    }
  });
  input.addEventListener('input', function () { SFX.tick(); });

  // คลิกตรงไหนในกล่องก็ได้ = พร้อมพิมพ์ (ยกเว้นตอนลากเลือกข้อความ หรือกดลิงก์)
  term.addEventListener('click', function (e) {
    if (e.target.closest('a')) return;
    if (window.getSelection && String(window.getSelection())) return;
    input.focus({ preventScroll: true });
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      welcome();
    }, { threshold: 0.35 });
    observer.observe(term);
  } else {
    welcome();
  }
})();
