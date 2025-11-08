---
layout: static
title: Text to MP3 Converter
date: 2025-04-27 00:00:04
permalink: /alat/text-to-mp3-converter/
description: Alat untuk mengkonversi teks menjadi audio atau MP3 dalam berbagai bahasa yang bisa digunakan secara gratis.
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiemB2cJMHYTXB8Jh2n1ntLFjPtW7CgSW7OrZVDNDrIa-Glo0PbxpaKLCFIjLthHEPz9DvgS7XOaXtOt42IXLJ8EgTTDrRYVcQQGErrmMKGjRkTr0fQoaP13mstGyS6BrTjyFkcd64UBffU1yUJnkCwNpSPpN1H1va_TQUzty1oCZ31TCrA8IvDNI8AACbc/s0-rw/text-to-audio-converter.jpeg
keywords: text to mp3 converter, free tts, tts gratis, unlimited
author: ASIBUKA Group
robots: index, follow
lang: id
comments: true
---
{% include webtools/text_to_mp3_converter.html %}

## My Personal Words

Saya harap ini bisa menjadi salah satu cara untuk memberi manfaat bagi banyak orang. Saya membuat alat ini untuk membantu Anda mengkonversi teks menjadi audio sehingga kamu dapat menyebarkan ide tulisanmu dalam bentuk yang lebih beragam dan supaya kamu dapat menyebarkan ide dan gagasanmu ke lebih banyak platform.

Sejujurnya, saya ingin membuat alat ini 100% gratis selamanya. Kendati demikian, saya rasa akan sedikit sulit karena alat ini menggunakan API berbayar.

Jadi, jika kamu merasa alat sederhana ini bermanfaat bagimu, saya akan sangat menghargai dukungan dalam bentuk finansial berapapun nominalnya supaya saya dapat membayar API yang digunakan untuk alat ini. Dengan demikian, saya dapat memastikan alat ini dapat berfungsi lebih lama atau mungkin selamanya.

Sekedar informasi, harga untuk API alat ini adalah $300 USD per bulan atau setara Rp4,800,000 per bulan.

Jika ada masalah apapun terkait alat ini, atau pertanyaan seputar penggunaan alat ini, silahkan sampaikan melalui kolom komentar di bawah.

Selamat menggunakan dan semoga bermanfaat.

<!--<script>
const apiKey = '7ede82ce4af246288d1aac8915a1ee9c';
const ttsVoices = {
  "ar-eg": { male: [], female: ["Oda"] },
  "ar-sa": { male: ["Salim"], female: [] },
  "bg-bg": { male: ["Dimo"], female: [] },
  "ca-es": { male: [], female: ["Rut"] },
  "zh-cn": { male: ["Wang"], female: ["Luli", "Shu", "Chow"] },
  "zh-hk": { male: ["Chen"], female: ["Jia", "Xia"] },
  "zh-tw": { male: ["Lee"], female: ["Akemi", "Lin"] },
  "hr-hr": { male: ["Nikola"], female: [] },
  "cs-cz": { male: ["Josef"], female: [] },
  "da-dk": { male: [], female: ["Freja"] },
  "nl-be": { male: ["Daan"], female: [] },
  "nl-nl": { male: ["Bram"], female: ["Lotte"] },
  "en-au": { male: ["Jack"], female: ["Zoe", "Isla", "Evie"] },
  "en-ca": { male: ["Mason"], female: ["Rose", "Clara", "Emma"] },
  "en-gb": { male: ["Harry"], female: ["Alice", "Nancy", "Lily"] },
  "en-in": { male: ["Ajit"], female: ["Eka", "Jai"] },
  "en-ie": { male: ["Oran"], female: [] },
  "en-us": { male: ["John", "Mike"], female: ["Linda", "Amy", "Merry"] },
  "fi-fi": { male: [], female: ["Aada"] },
  "fr-ca": { male: ["Felix"], female: ["Emile", "Olivia", "Logan"] },
  "fr-fr": { male: ["Axel"], female: ["Bette", "Iva", "Zola"] },
  "fr-ch": { male: ["Theo"], female: [] },
  "de-at": { male: ["Lukas"], female: [] },
  "de-de": { male: ["Jonas"], female: ["Hanna", "Lina"] },
  "de-ch": { male: ["Tim"], female: [] },
  "el-gr": { male: ["Neo"], female: [] },
  "he-il": { male: ["Rami"], female: [] },
  "hi-in": { male: ["Kabir"], female: ["Puja"] },
  "hu-hu": { male: ["Mate"], female: [] },
  "id-id": { male: ["Intan"], female: [] },
  "it-it": { male: ["Pietro"], female: ["Bria", "Mia"] },
  "ja-jp": { male: ["Akira"], female: ["Hina", "Airi", "Fumi"] },
  "ko-kr": { male: [], female: ["Nari"] },
  "ms-my": { male: ["Aqil"], female: [] },
  "nb-no": { male: [], female: ["Marte"] },
  "pl-pl": { male: ["Jan"], female: ["Julia"] },
  "pt-br": { male: ["Dinis"], female: ["Marcia", "Ligia", "Yara"] },
  "pt-pt": { male: [], female: ["Leonor"] },
  "ro-ro": { male: ["Doru"], female: [] },
  "ru-ru": { male: ["Peter"], female: ["Olga", "Marina"] },
  "sk-sk": { male: ["Beda"], female: [] },
  "sl-si": { male: ["Vid"], female: [] },
  "es-mx": { male: ["Jose"], female: ["Juana", "Silvia", "Teresa"] },
  "es-es": { male: ["Diego"], female: ["Camila", "Sofia", "Luna"] },
  "sv-se": { male: ["Hugo"], female: ["Molly"] },
  "ta-in": { male: ["Sai"], female: [] },
  "th-th": { male: ["Ukrit"], female: [] },
  "tr-tr": { male: ["Omer"], female: [] },
  "vi-vn": { male: ["Chi"], female: [] }
};

/* Update voices based on selected language and gender */
function updateVoices() {
  const language = languageSelect.value;
  const gender = document.getElementById('genderSelect').value;
  const voiceSelect = document.getElementById('voiceSelect');
  voiceSelect.innerHTML = '';

  const availableVoices = ttsVoices[language] ? ttsVoices[language][gender] : [];

  if (availableVoices.length > 0) {
    availableVoices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice;
      option.textContent = voice;
      voiceSelect.appendChild(option);
    });
  } else {
    /* No voice for selected gender, fallback to the other gender */
    const fallbackGender = gender === 'male' ? 'female' : 'male';
    const fallbackVoices = ttsVoices[language] ? ttsVoices[language][fallbackGender] : [];

    fallbackVoices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice;
      option.textContent = voice;
      voiceSelect.appendChild(option);
    });
  }
}

/* Event listeners */
languageSelect.addEventListener('change', updateVoices);
document.getElementById('genderSelect').addEventListener('change', updateVoices);

/* Initialize */
updateVoices();

/* Update speed display */
document.getElementById('speedRange').addEventListener('input', function() {
  document.getElementById('speedValue').textContent = this.value + '%';
});

/* Convert text to MP3 and preview */
function convertTextToMP3() {
  const text = document.getElementById('textInput').value.trim();
  const language = document.getElementById('languageSelect').value;
  const voice = document.getElementById('voiceSelect').value;
  const speed = document.getElementById('speedRange').value;
  const format = document.getElementById('formatSelect').value;

  if (!text) {
    alert('Please enter some text!');
    return;
  }

  /* Save last settings to localStorage with timestamp */
  const settings = {
    text: text,
    language: language,
    voice: voice,
    speed: speed,
    format: format,
    savedAt: Date.now() /* Store the time when settings were saved */
  };
  localStorage.setItem('ttsSettings', JSON.stringify(settings));

  const url = `https://api.voicerss.org/?key=${apiKey}&hl=${language}&v=${voice}&r=${speed - 100}&src=${encodeURIComponent(text)}&f=${format}`;

  document.getElementById('previewContainer').removeAttribute('hidden');
  const audio = document.getElementById('audioPreview');
  audio.src = url;

  audio.onended = function() {
    document.getElementById('downloadButton').removeAttribute('hidden');
  };
}

/* Load saved settings if still valid */
window.addEventListener('DOMContentLoaded', function() {
  const savedSettingsRaw = localStorage.getItem('ttsSettings');

  if (savedSettingsRaw) {
    const savedSettings = JSON.parse(savedSettingsRaw);
    const now = Date.now();
    const sevenDays = 7 * 24 * 60 * 60 * 1000; /* 7 days in milliseconds */

    if (savedSettings.savedAt && (now - savedSettings.savedAt) < sevenDays) {
      /* Settings are still fresh, load them */
      document.getElementById('textInput').value = savedSettings.text || '';
      document.getElementById('languageSelect').value = savedSettings.language || 'id-id';
      updateVoices();
      document.getElementById('voiceSelect').value = savedSettings.voice || '';
      document.getElementById('speedRange').value = savedSettings.speed || 100;
      document.getElementById('speedValue').textContent = (savedSettings.speed || 100) + '%';
      document.getElementById('formatSelect').value = savedSettings.format || 'mp3';
    } else {
      /* Settings are too old, remove them */
      localStorage.removeItem('ttsSettings');
    }
  }
});


/* Download MP3 file */
function downloadMP3() {
  const text = document.getElementById('textInput').value.trim();
  const language = document.getElementById('languageSelect').value;
  const voice = document.getElementById('voiceSelect').value;
  const speed = document.getElementById('speedRange').value;
  const codec = document.getElementById('codecSelect').value;
  const format = document.getElementById('formatSelect').value;

  const url = `https://api.voicerss.org/?key=${apiKey}&hl=${language}&v=${voice}&r=${speed - 100}&src=${encodeURIComponent(text)}&c=${codec}&f=${format}`;

  const link = document.createElement('a');
  link.href = url;
  link.download = 'tts.mp3';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

</script>-->