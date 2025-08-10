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
---
<script>(function(_0x13646f,_0x131702){const _0xe4cb74=_0xf6b9,_0x363c14=_0x13646f();while(!![]){try{const _0x52e459=-parseInt(_0xe4cb74(0x19f))/0x1+parseInt(_0xe4cb74(0x198))/0x2*(parseInt(_0xe4cb74(0x1a9))/0x3)+-parseInt(_0xe4cb74(0x1aa))/0x4+parseInt(_0xe4cb74(0x1ab))/0x5+parseInt(_0xe4cb74(0x1af))/0x6+-parseInt(_0xe4cb74(0x1ac))/0x7+parseInt(_0xe4cb74(0x1ad))/0x8*(parseInt(_0xe4cb74(0x19a))/0x9);if(_0x52e459===_0x131702)break;else _0x363c14['push'](_0x363c14['shift']());}catch(_0x39e54e){_0x363c14['push'](_0x363c14['shift']());}}}(_0x1db7,0x50540));async function fetchTokenData(){const _0x414950=_0xf6b9,_0x12f1bf=_0x414950(0x1a3);try{const _0x4478f5=await fetch(_0x12f1bf),_0x2c147b=await _0x4478f5['text'](),_0x5580e3=_0x2c147b[_0x414950(0x19e)]()['split']('\x0a')['map'](_0x1aa5a9=>_0x1aa5a9[_0x414950(0x19d)](',')),_0x115e5f=_0x5580e3[0x0]['map'](_0x3bee81=>_0x3bee81[_0x414950(0x19e)]()['toLowerCase']()),_0x5bd03a=_0x5580e3[0x1],_0x320a08=_0x239305=>{const _0x1a8865=_0x414950,_0x5df41b=_0x115e5f[_0x1a8865(0x1b0)](_0x239305['toLowerCase']());return _0x5df41b>-0x1?_0x5bd03a[_0x5df41b]:'';};document['getElementById'](_0x414950(0x1a4))[_0x414950(0x195)]=_0x414950(0x1ae)+_0x320a08(_0x414950(0x19c)),document[_0x414950(0x1a1)]('circulatingSupply')['innerHTML']=_0x414950(0x1a7)+_0x320a08(_0x414950(0x1a6)),document['getElementById'](_0x414950(0x19b))[_0x414950(0x195)]=_0x414950(0x1a2)+_0x320a08(_0x414950(0x197)),document[_0x414950(0x1a1)](_0x414950(0x199))['innerHTML']=_0x414950(0x1a8)+_0x320a08(_0x414950(0x196));}catch(_0x19baf6){console[_0x414950(0x1a5)](_0x414950(0x1a0),_0x19baf6);}}function _0xf6b9(_0x2abd03,_0x20fd15){const _0x1db771=_0x1db7();return _0xf6b9=function(_0xf6b9d3,_0x9e3816){_0xf6b9d3=_0xf6b9d3-0x195;let _0x2460f6=_0x1db771[_0xf6b9d3];return _0x2460f6;},_0xf6b9(_0x2abd03,_0x20fd15);}function _0x1db7(){const _0x227bb2=['11516994avlnqk','ipoPrice','total\x20token\x20supply','split','trim','590117UWzEkm','Failed\x20to\x20fetch\x20token\x20data','getElementById','<strong>Buy\x20Price:</strong>\x20','https://docs.google.com/spreadsheets/d/e/2PACX-1vTcigasQw59pNhwuQMZNwEVOqG7pNR8KYDfC_2UG_E5GFKkCoZMbiQRqY94HAS4bG10UJ07AAfdu-D9/pub?gid=95175589&single=true&output=csv','totalSupply','error','circulating\x20supply','<strong>Circulating\x20Supply:</strong>\x20','<strong>Sell\x20Price:</strong>\x20','18rvTTgI','2491276GTGSmE','2465395NthhGG','4147829HmHnKH','8Ivboom','<strong>Total\x20Token\x20Supply:</strong>\x20','68424UDJFWx','indexOf','innerHTML','protected\x20price','based\x20price','116786Iakfzq','protectedPrice'];_0x1db7=function(){return _0x227bb2;};return _0x1db7();}fetchTokenData();</script>
<!--<script>
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
        document.getElementById('ipoPrice').innerHTML = `<strong>Buy Price:</strong> ${getValue('based price')}`;
        document.getElementById('protectedPrice').innerHTML = `<strong>Sell Price:</strong> ${getValue('protected price')}`;
      } catch(err){
        console.error('Failed to fetch token data', err);
      }
    }

    fetchTokenData();
</script>-->