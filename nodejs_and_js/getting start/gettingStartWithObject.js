var ar = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
function findPartner(x, y) {
    var ispersonP = false;
    var index = 0;
    for (var i = 0; i < ar.length; i++)
        if (ar[i].firstName == x) {
            ispersonP = true;
            index = i;
            break;
        }
    if (ispersonP == true) {
        for (var i = 0; i < ar[index].likes.length; i++)
            if (ar[index].likes[i] == y) {
                    for(var j in ar[index].likes)
                    console.log(ar[index].likes[j]); 
                return null;
            }
        console.log("like not present");
    }
    else {
        console.log("person not present");
    }
}

findPartner("Harry", "Magic");