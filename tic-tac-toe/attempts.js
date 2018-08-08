// 225 - original published version
for(i=12;--i;d.write(i%4?`<input type=button value=" "onclick="value-1?value=d[${i}]='XO'[i++%2]:0;for(b of'1345')for(a of'12359')for(q of(c=d[a])&&c==d[a-=-b]&c==d[+b+a]?d.all:[])q.value=c"style=width:30>`:`<br>`))d=document

// 219 - using similar strategy to minimal version
for(i=12;--i;d.write(i%4?`<input type=button value=" "onclick="value-1?value='.XO'[d[${i}]=i++%2+1]:0;for(b of'1345')for(a=12;--a;)d[a]&d[+b+a]&d[2*b+a]&&d.write('.XO'[d[a]]+' wins!')"style=width:30>`:`<br>`))d=document

// 221 - really clever alternative using recursion and abusing octal/hex literals, just fell short
for(i=12;--i;d.write(i%4?`<input type=button value=" "onclick="value-1?value=d[${i}]='XO'[i++%2]:0;for(b of'1345')for(a=12;--a;g(3)&&d.write(d[a]+' wins!'))g=n=>n--?0+d[a+b*n]+10&g(n):n"style=width:30>`:`<br>`))d=document