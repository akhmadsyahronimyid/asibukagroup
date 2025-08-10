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
<script>
async function fetchTokenData(){
      const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcigasQw59pNhwuQMZNwEVOqG7pNR8KYDfC_2UG_E5GFKkCoZMbiQRqY94HAS4bG10UJ07AAfdu-D9/pub?gid=95175589&single=true&output=csv';
      try{
        const res = await fetch(sheetUrl);
        const csvText = await res.text();
        const rows = csvText.trim().split('\n').map(r => r.split(','));
        const headers = rows[0].map(h => h.trim().toLowerCase());
        const data = rows[1];

        const getValue = (key) => {
          const idx = headers.indexOf(key.toLowerCase());
          return idx > -1 ? data[idx] : '';
        };

        document.getElementById('totalSupply').innerHTML = `<strong>Total Token Supply:</strong> ${getValue('total token supply')}`;
        document.getElementById('circulatingSupply').innerHTML = `<strong>Circulating Supply:</strong> ${getValue('circulating supply')}`;
        document.getElementById('ipoPrice').innerHTML = `<strong>Based / IPO Price:</strong> ${getValue('based / ipo price')}`;
        document.getElementById('protectedPrice').innerHTML = `<strong>Protected Price:</strong> ${getValue('protected price')}`;
      } catch(err){
        console.error('Failed to fetch token data', err);
      }
    }

    fetchTokenData();
</script>