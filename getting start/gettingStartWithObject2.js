var ar = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

function find(x,y,z)
{
  var value = ar[x];
  if(value.hasOwnProperty(y))
  {
    if(z=="")
    {
      delete value[y];
    }
    else{
      if(y=="tracks")
        value.tracks.push(z);
      else
        value[y]=z;
    }

  }
  else{
    if(y=="tracks")
    {
      value.tracks=[];
      value.tracks.push(z);
    }
    else
      value[y]=z;
  }
}
console.log(ar);
find(5439, "artist", "ABBA"); 
console.log("-----------------------------");
console.log(ar);
