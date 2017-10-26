// Loop 11 times to create 9 clickable <a>s + 2 <p>s for line breaks
for(i = 12; --i;
  
  // Write out to the document
  d.write(
    // If we number the items 1, 2, 3, ..., 10, 11, then <p>s go at indices 4 and 8
    // So if we are not on a line break:
    i % 4 ?
    
      // Create the <a> element
      `<a onclick="
        // When this element is clicked, set the cell at this index to either 1 or 2
        //  depending on whose turn it is, and display the same on the element
        // Keep in mind that the 9 elements will have indices 11, 10, 9, 7, 6, 5, 3, 2, 1
        innerText = d[${ i }] =
        
        // If this cell already has an owner, don't do anything
        d[${ i }] ||
        
        // Otherwise, return the next element in 1, 2, 1, 2, ... and advance to the next player
        // Keep in mind that i at this point has already been fully decremented and starts at 0
        i++ % 2 + 1;
        
        // Logic time. The 8 possible winning scenarios are:
        // XXX ... ... ..X X.. .X. ..X X..
        // ... XXX ... .X. X.. .X. ..X .X.
        // ... ... XXX X.. X.. .X. ..X ..X
        // 
        // Or as indices:
        // 1, 2, 3 | 5, 6, 7 | 9, 10, 11 | 3, 6, 9 | 1, 5, 9 | 2, 6, 10 | 3, 7, 11 | 1, 6, 11
        // 
        // All of them have even increments, so we can reduce them to a starting point and an increment:
        // 1, 1    | 5, 1    | 9, 1      | 3, 3    | 1, 4    | 2, 4     | 3, 4     | 1, 5
        // 
        // Now we notice that all of them have increments of 1, 3, 4, or 5, and further,
        //  all of them start on one of the indices 1, 2, 3, 5, or 9.
        // In fact, if we loop through all of these increments and all of these indices,
        //  the 12 possibilities that we don't want all contain 4, 8, or an index greater than 11,
        //  and therefore can't ever be winning scenarios. (You can check this yourself if you'd like)
        
        // So, we loop through all increments:
        for (b of '1345')
          // And through all starting indices:
          for (a of '12359')
            
            // So we have our three cells, which each can be one of 1, 2, or undefined.
            // Taking the bitwise AND of all three gives 1 if all are 1, 2 if all are 2,
            // or 0 otherwise.
            
            // Take the starting cell
            d[a]
            // Add the increment (a and b were still strings) and perform bitwise AND with that cell
            & d[a -= -b]
            // Add the increment again and perform another bitwise AND with the last cell
            & d[+b + a]
            
            // Finally, if this is still non-zero, replace the entire document with the winner
            && d.write(d[a])
        // Finish up the <a> tag with an underscore as the default content
        ">_</a> `
      :
        // On 4 and 8, insert a paragraph break to properly position the <a> elements on three lines
        `<p>`
    )
  )
  // We only technically use the document object once, but using a separate array to keep track of
  // the cell values takes a few more bytes
  d=document
