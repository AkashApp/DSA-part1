// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, typically using all the original letters exactly once.

// Input: s = "listen", t = "silent"
// Output: true

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

const isAnagram1 =(s,t)=>{
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")
    return s === t;
}
console.log(isAnagram1("listen","silent"));

// Optimized
const isAnagram2 = (s,t)=>{
    if(s.length !== t.length) return false;
    let obj = {};
    for(let i=0; i<s.length; i++){
        obj[s[i]] = (obj[s[i]] || 0) + 1;
    }
    for(let i=0; i<t.length; i++){
        if(!obj[t[i]]) return false;
        obj[t[i]]--;
    }
    return true;
}
console.log(isAnagram2("listen","silent"));

// optimized2
const isAnagram3 = (s,t)=>{
    if(s.length !== t.length) return false;
    let obj = {};
    let obj2 = {};
    for(let i=0; i<s.length; i++){
        obj[s[i]] = (obj[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for(let i in obj){
        if(obj[i] !== obj2[i]) return false;
    }
    return true;
}
console.log(isAnagram3("listen","silent"));