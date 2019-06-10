var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
for(let i in library)
    console.log(library[i].title);
library.sort((a,b)=>a.title.localeCompare(b.title))
console.log("------------------------------------------------------------");
for(let i in library)
    console.log(library[i].title);
