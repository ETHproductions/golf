// (494) Original:
d=F=>{for(j in F){var f=F[j];if(isNaN(f.substr(-1))){f=(parseFloat(f.slice(0,-1)*eval("1e"+(['k','M','B'].indexOf(f.substr(-1))+1)*3))+"").split("").reverse().join("");for(var i=f.length-1;i>0;i--)if(i%3==0)f=[f.slice(0,i),",",f.slice(i)].join('');f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (483) Switch to for-of loop:
d=F=>{for(f of F){if(isNaN(f.substr(-1))){f=(parseFloat(f.slice(0,-1)*eval("1e"+(['k','M','B'].indexOf(f.substr(-1))+1)*3))+"").split("").reverse().join("");for(var i=f.length-1;i>0;i--)if(i%3==0)f=[f.slice(0,i),",",f.slice(i)].join('');f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (475) Condense that array to a string:
d=F=>{for(f of F){if(isNaN(f.substr(-1))){f=(parseFloat(f.slice(0,-1)*eval("1e"+('kMB'.indexOf(f.substr(-1))+1)*3))+"").split("").reverse().join("");for(var i=f.length-1;i>0;i--)if(i%3==0)f=[f.slice(0,i),",",f.slice(i)].join('');f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (471) We don't need eval, * casts "1e4" to 10000:
d=F=>{for(f of F){if(isNaN(f.substr(-1))){f=(parseFloat(f.slice(0,-1)*("1e"+('kMB'.indexOf(f.substr(-1))+1)*3))+"").split("").reverse().join("");for(var i=f.length-1;i>0;i--)if(i%3==0)f=[f.slice(0,i),",",f.slice(i)].join('');f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (468) Slightly better way to add one to the index:
d=F=>{for(f of F){if(isNaN(f.substr(-1))){f=(parseFloat(f.slice(0,-1)*("1e"+' kMB'.indexOf(f.substr(-1))*3))+"").split("").reverse().join("");for(var i=f.length-1;i>0;i--)if(i%3==0)f=[f.slice(0,i),",",f.slice(i)].join('');f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (465) feX is shorter than f*1eX:
d=F=>{for(f of F){if(isNaN(f.substr(-1))){f=(parseFloat(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3)+"").split("").reverse().join("");for(var i=f.length-1;i>0;i--)if(i%3==0)f=[f.slice(0,i),",",f.slice(i)].join('');f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (455) Cast to number using -0 instead of parseFloat:
d=F=>{for(f of F){if(isNaN(f.substr(-1))){f=(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").split("").reverse().join("");for(var i=f.length-1;i>0;i--)if(i%3==0)f=[f.slice(0,i),",",f.slice(i)].join('');f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (452) Shorten the isNaN check with !(1/x):
d=F=>{for(f of F){if(!(1/f.slice(-1))){f=(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").split("").reverse().join("");for(var i=f.length-1;i>0;i--)if(i%3==0)f=[f.slice(0,i),",",f.slice(i)].join('');f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (448) Remove unnecessary "var":
d=F=>{for(f of F){if(!(1/f.slice(-1))){f=(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").split("").reverse().join("");for(i=f.length-1;i>0;i--)if(i%3==0)f=[f.slice(0,i),",",f.slice(i)].join('');f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (446) 0 is falsy, just like 0>0:
d=F=>{for(f of F){if(!(1/f.slice(-1))){f=(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").split("").reverse().join("");for(i=f.length-1;i;i--)if(i%3==0)f=[f.slice(0,i),",",f.slice(i)].join('');f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (435) [a,b,c].join("") is the same as a+b+c:
d=F=>{for(f of F){if(!(1/f.slice(-1))){f=(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").split("").reverse().join("");for(i=f.length-1;i;i--)if(i%3==0)f=f.slice(0,i)+","+f.slice(i);f=f.split("").reverse().join("")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (417) We use .split("").reverse().join("") a lot; let's make a function:
d=F=>{R=x=>x.split("").reverse().join("");for(f of F){if(!(1/f.slice(-1))){f=R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"");for(i=f.length-1;i;i--)if(i%3==0)f=f.slice(0,i)+","+f.slice(i);f=R(f)}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (410) Now golf that function with ES6 features:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1))){f=R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"");for(i=f.length-1;i;i--)if(i%3==0)f=f.slice(0,i)+","+f.slice(i);f=R(f)}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (378) You can use a regex to split into groups of 3 characters:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1))){f=R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"");f=f.match(/.{1,3}/g).join(",");f=R(f)}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (371) Better yet, replace .join(",") with +"":
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1))){f=R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"");f=f.match(/.{1,3}/g)+"";f=R(f)}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (367) We can combine these two assignments:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1))){f=R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"");f=R(f.match(/.{1,3}/g)+"")}else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (362) While we're at it, let's combine the other two:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.split(",").join("");if(f.length>9){f=f/1e9+"B"}else if(f.length>6){f=f/1e6+"M"}else{f=f/1e3+"k"}if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}

// Moving on to the else statement now.
// (340) We can combine those if/elses into a ternary statement:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.split(",").join("");f=f.length>9?f/1e9+"B":f.length>6?f/1e6+"M":f/1e3+"k";if(f.contains(".")&&f.substr(-1)!=="k")f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (331) Turn both of these into regex tests:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.split(",").join("");f=f.length>9?f/1e9+"B":f.length>6?f/1e6+"M":f/1e3+"k";if(/\./.test(f)&&!/k/.test(f))f=Math.floor(parseFloat(f.slice(0,-1))*10)/10+f.substr(-1)}alert(f)}}
// (319) parseFloat is unnecessary, as * casts to float:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.split(",").join("");f=f.length>9?f/1e9+"B":f.length>6?f/1e6+"M":f/1e3+"k";if(/\./.test(f)&&!/k/.test(f))f=Math.floor(f.slice(0,-1)*10)/10+f.substr(-1)}alert(f)}}
// (311) Math.floor can be simulated with |0:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.split(",").join("");f=f.length>9?f/1e9+"B":f.length>6?f/1e6+"M":f/1e3+"k";if(/\./.test(f)&&!/k/.test(f))f=(f.slice(0,-1)*10|0)/10+f.substr(-1)}alert(f)}}
// (304) Might as well combine the two regexes:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.split(",").join("");f=f.length>9?f/1e9+"B":f.length>6?f/1e6+"M":f/1e3+"k";if(/\..*[^k]$/.test(f))f=(f.slice(0,-1)*10|0)/10+f.substr(-1)}alert(f)}}
// (301) .replace() is slightly shorter than .split().join():
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.replace(/,/g,"");f=f.length>9?f/1e9+"B":f.length>6?f/1e6+"M":f/1e3+"k";if(/\..*[^k]$/.test(f))f=(f.slice(0,-1)*10|0)/10+f.substr(-1)}alert(f)}}
// (289) f[x] on a string is basically the same as f.length>x:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.replace(/,/g,"");f=f[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k";if(/\..*[^k]$/.test(f))f=(f.slice(0,-1)*10|0)/10+f.substr(-1)}alert(f)}}
// (288) Save a byte by using .slice instead of .substr:
d=F=>{R=x=>[...x].reverse().join``;for(f of F){if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.replace(/,/g,"");f=f[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k";if(/\..*[^k]$/.test(f))f=(f.slice(0,-1)*10|0)/10+f.slice(-1)}alert(f)}}

// That's about all we can golf out of the else statement.
// However, using F.map and returning an array will be shorter than alerting each item.
// (287) Switch from for-of to .map:
d=F=>{R=x=>[...x].reverse().join``;F.map(f=>{if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.replace(/,/g,"");f=f[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k";if(/\..*[^k]$/.test(f))f=(f.slice(0,-1)*10|0)/10+f.slice(-1)}alert(f)})}
// (287) Return each item from .map, and also return the array itself:
d=F=>(R=x=>[...x].reverse().join``,F.map(f=>{if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.replace(/,/g,"");f=f[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k";if(/\..*[^k]$/.test(f))f=(f.slice(0,-1)*10|0)/10+f.slice(-1)}return f}))
// (285) Move the declaration of R into .map:
d=F=>F.map(f=>{if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=f.replace(/,/g,"");f=f[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k";if(/\..*[^k]$/.test(f))f=(f.slice(0,-1)*10|0)/10+f.slice(-1)}return f},R=x=>[...x].reverse().join``)

// Now we can work on turning the function in .map into a single statement.
// (285) Combine two of the assignments:
d=F=>F.map(f=>{if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{f=(f=f.replace(/,/g,""))[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k";if(/\..*[^k]$/.test(f))f=(f.slice(0,-1)*10|0)/10+f.slice(-1)}return f},R=x=>[...x].reverse().join``)
// (283) Move the assignment into .test():
d=F=>F.map(f=>{if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else{if(/\..*[^k]$/.test(f=(f=f.replace(/,/g,""))[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k"))f=(f.slice(0,-1)*10|0)/10+f.slice(-1)}return f},R=x=>[...x].reverse().join``)
// (281) Turn the else statement into a ternary a?b:c:
d=F=>F.map(f=>{if(!(1/f.slice(-1)))f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+"");else/\..*[^k]$/.test(f=(f=f.replace(/,/g,""))[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k")?f=(f.slice(0,-1)*10|0)/10+f.slice(-1):f;return f},R=x=>[...x].reverse().join``)
// (263) Turn the if statement into a ternary, and remove the return:
d=F=>F.map(f=>!(1/f.slice(-1))?f=R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+""):/\..*[^k]$/.test(f=(f=f.replace(/,/g,""))[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k")?f=(f.slice(0,-1)*10|0)/10+f.slice(-1):f,R=x=>[...x].reverse().join``)
// (259) Remove unnecessary assignments:
d=F=>F.map(f=>!(1/f.slice(-1))?R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+""):/\..*[^k]$/.test(f=(f=f.replace(/,/g,""))[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k")?(f.slice(0,-1)*10|0)/10+f.slice(-1):f,R=x=>[...x].reverse().join``)
// (256) Swap the conditions to save 3 more bytes:
d=F=>F.map(f=>1/f.slice(-1)?/\..*[^k]$/.test(f=(f=f.replace(/,/g,""))[9]?f/1e9+"B":f[6]?f/1e6+"M":f/1e3+"k")?(f.slice(0,-1)*10|0)/10+f.slice(-1):f:R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+""),R=x=>[...x].reverse().join``)

// At this point, pretty much all that's left is to golf the algorithm.
// It turns out that it's much shorter to create the decimals *before* adding the "B" or "M":
d=F=>F.map(f=>1/f.slice(-1)?f=(f=f.replace(/,/g,""))[9]?(f/1e8|0)/10+"B":f[6]?(f/1e5|0)/10+"M":f/1e3+"k":R(R(f.slice(0,-1)+"e"+' kMB'.indexOf(f.substr(-1))*3-0+"").match(/.{1,3}/g)+""),R=x=>[...x].reverse().join``)
// Final result: 214 bytes!