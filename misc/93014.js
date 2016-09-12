f=(s,i=0,a=s[i++]<s[i])=>s[i+1]&&(b=a^(a=s[i]<s[i+1]))?f(s,i):b // (63) Original
f=(s,i=0,a=s[i++]<s[i])=>s[i+1]&&(b=a^(s[i]<s[i+1]))?f(s,i):b   // (61) No point in reassigning `a`, it's not used again
f=(s,i=0,a=s[i++]<s[i])=>s[i+1]&&(b=a^s[i]<s[i+1])?f(s,i):b     // (59) Remove unnecessary parentheses
f=(s,i=0)=>s[i+2]&&(b=s[i++]<s[i]^s[i]<s[i+1])?f(s,i):b         // (55) `a` is now just a waste of bytes
f=(s,i=0)=>s[i+2]?(b=s[i++]<s[i]^s[i]<s[i+1])?f(s,i):b:1        // (56) Rearrange conditional expressions to allow for more golfing
f=(s,i=0)=>s[i+2]?(b=s[i++]<s[i]^s[i]<s[i+1])&&f(s,i):1         // (55) Rearrange conditional expression
f=(s,i=0)=>s[i+2]?(s[i++]<s[i]^s[i]<s[i+1])&&f(s,i):1           // (53) `b` is now also a waste of bytes
f=(s,i=0)=>s[i+2]?s[i++]<s[i]^s[i]<s[i+1]&&f(s,i):1             // (51) Remove unnecessary parentheses
f=s=>s[2]?s[0]<s[1]^s[1]<s[2]&&f(s.slice(1)):1                  // (46) Use `s.slice(1)` instead of `i`
