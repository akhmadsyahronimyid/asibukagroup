---
layout: static
title: ASIBUKA Group Project
date: 2025-08-10 00:00:04
permalink: /token/asibuka-group-project
description: Laman khusus untuk berdiskusi seputar topik-topik umum dan bebas.
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpQQe96jI9dkzN81SsrYbJ8IR0dOvN0eiItucN_ppF-WjQ3tzL3q18pMprWs5dbPXbkmUKF7dPBWaFLMQne16BBURYsIZQ2xYbNw1-tV6kW9UnOkvZuI_a_9MBJF9lekshsUSAlEEY7XyOsuLv7nNNhvUpzd9bajaVNklcezkSewK0wpf4xZ6FIWHwmzI/s0-rw/diskusi.jpeg
keywords: mintme, token, asibuka project
author: ASIBUKA Group
robots: index, follow
lang: id
comments: true
---
<section class="token-info" aria-label="Token Information">
  <div id="totalSupply"><strong>Total Token Supply:</strong> ...</div>
  <div id="circulatingSupply"><strong>Circulating Supply:</strong> ...</div>
  <div id="ipoPrice"><strong>Based / IPO Price:</strong> ...</div>
  <div id="protectedPrice"><strong>Protected Price:</strong> ...</div>
</section>

<!-- Papa Parse from CDN -->
<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>

<script>
async function fetchTokenData() {
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcigasQw59pNhwuQMZNwEVOqG7pNR8KYDfC_2UG_E5GFKkCoZMbiQRqY94HAS4bG10UJ07AAfdu-D9/pub?gid=95175589&single=true&output=csv';
  
  try {
    const res = await fetch(sheetUrl);
    const csvText = await res.text();

    // Parse CSV safely, respecting commas inside quotes
    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true
    });

    if (parsed.data.length > 0) {
      const row = parsed.data[0]; // First row of actual data

      document.getElementById('totalSupply').innerHTML = `<strong>Total Token Supply:</strong> ${row['Total Token Supply'] || ''}`;
      document.getElementById('circulatingSupply').innerHTML = `<strong>Circulating Supply:</strong> ${row['Circulating Token'] || ''}`;
      document.getElementById('ipoPrice').innerHTML = `<strong>Based / IPO Price:</strong> ${row['Based Price'] || ''}`;
      document.getElementById('protectedPrice').innerHTML = `<strong>Protected Price:</strong> ${row['Protected Price'] || ''}`;
    } else {
      console.warn("No data found in the CSV");
    }

  } catch (err) {
    console.error('Failed to fetch token data', err);
  }
}

fetchTokenData();
</script>