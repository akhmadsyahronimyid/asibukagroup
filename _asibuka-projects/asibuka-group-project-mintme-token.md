---
layout: token
title: ASIBUKA Group Project
date: 2025-08-10 00:00:04
permalink: /token/asibuka-group-project
description: ASIBUKA Group Project tokenized on MintMe platform.
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK_efw0TwzZ9QxqFOD-w0VHMki05y5hBkDrgXmC8dtwmnF3BMHrL8rAAFG3ZJUcBRc_dkEvqkPMFi7hcpWhWLjCW4sltMOJ3zIp4LGZsGj3ABfd6cuPUsKAK425gA7wDay0E4c1saZJmwv9uiviAMR2aw2_2AD_wesI16zUYiJxqTeLorkD9rvce4Dhnc/s0-rw/asibuka-group-project-token-logo.png
keywords: mintme, token, asibuka group project, investment
author: ASIBUKA Group
robots: index, follow
lang: en
comments: true
---
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
        document.getElementById('ipoPrice').innerHTML = `<strong>Based / IPO Price:</strong> ${getValue('based price')}`;
        document.getElementById('protectedPrice').innerHTML = `<strong>Protected Price:</strong> ${getValue('protected price')}`;
      } catch(err){
        console.error('Failed to fetch token data', err);
      }
    }

    fetchTokenData();
</script>