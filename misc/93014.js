f=(s,i=0,a=s[i++]<s[i])=>s[i+1]&&(b=a^(a=s[i]<s[i+1]))?f(s,i):b
f=(s,i=0,a=s[i++]<s[i])=>s[i+1]&&(b=a^(s[i]<s[i+1]))?f(s,i):b
f=(s,i=0,a=s[i++]<s[i])=>s[i+1]&&(b=a^s[i]<s[i+1])?f(s,i):b
f=(s,i=0)=>s[i+2]&&(b=s[i++]<s[i]^s[i]<s[i+1])?f(s,i):b
f=(s,i=0)=>s[i+2]?(b=s[i++]<s[i]^s[i]<s[i+1])?f(s,i):b:1
f=(s,i=0)=>s[i+2]?(b=s[i++]<s[i]^s[i]<s[i+1])&&f(s,i):1
f=(s,i=0)=>s[i+2]?(s[i++]<s[i]^s[i]<s[i+1])&&f(s,i):1
f=(s,i=0)=>s[i+2]?s[i++]<s[i]^s[i]<s[i+1]&&f(s,i):1
f=(s,i=0,a=s[i+2])=>a?s[i++]<s[i]^s[i]<a&&f(s,i):1
