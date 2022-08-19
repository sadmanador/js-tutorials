4ways of having js output
* document.write()
** console.log()
*** innerHTML()
**** windows.alert()


1. Any method cannot change the original variable.
2. Changed method value can be stored in new strings for future use.


//String methods
1. str.length returns the length of the string.
2. str.slice() returns extracted part of string.
    a. first parameter define the start point.
    b. second parameter defines the end of the extracted string.
    c. negative value extract from opposite side
3. str.substr() similar to slice(), second parameter defines the lenght of extracted str.
4. str.substring() similar to slice(), but less than 0 is equal to 0.
5. replace(), first parameter is search value, second one is with what should be replaced.
    a. change the first match.
    b. case sensitive so //i can be used.
    c. to replace all matched value, //g should be used.
6. toUpperCase()
7. toLowerCase()
9. str.trim() omits excess whitespace.
10. str.charAt(index-number) returns character at specific index position.
11. str.charCodeAt(index-number) returns UTF-16 unicode of the character.
12. str[index-number] returns character of that position.
13. str.split(", or | or  ") split the str into a array which was divided with , | <space>.


//String search
1. indexOf() returns the index-number of first occurrence.
2. lastIndexOf() returns the index-number of last occurrence.
    a. both of them take second parameter for start point.
3. search() returns the index, but doesn't take second parameter.
4. str.match(query) returns the extracted value.
    a. regular query return first match only.
    b. //i search for case sensitivity.
    c. //g returns all the matches as array.
    d. //gi
5. str.includes(query) returns true when matches. second parameter for start point.
6. str.startsWith(query) returns when starts with match. 2nd parameter for start point.
7. str.endsWith() returns true when ends with match. 2nd parameter for start point.


//string template
1. string with backtick ``.
2. backtick string used for insertion.
3. `this is a ${var1} type string.`
4. var1 = insertion.







//number
