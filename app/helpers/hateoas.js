/*
  Adds the `links` property to a note object 
*/
exports.woodHateoas = responseWood =>{
  return[
      { 
        rel: "self", 
        href: `/api/wood/${responseWood.id}`, 
        method: "GET" 
      },
      { 
        rel: "update", 
        href: `/api/wood/${responseWood.id}`, 
        method: "PUT" 
      },
      { 
        rel: "delete", 
        href: `/api/wood/${responseWood.id}`, 
        method: "DELETE" 
      },
      {
        rel: "sameHardness",
        href: `/api/wood/hardness/${responseWood.hardness}`,
        method: "GET",
      },
  ];
};

exports.woodCollectionHateoas = responseWoods => {
  // Add a `links` array to each individual note object within the collection.
  // The `self` URI can be used to fetch more info about the note.
  Object.entries(responseWoods).forEach( w => {
      w.links = [
          { 
            rel: "self", 
            href: `/api/wood/${w.id}`, 
            method: "GET" 
          },
          { 
            rel: "update", 
            href: `/api/wood/${w.id}`,
            method: "PUT"
          },
          { 
            rel: "delete", 
            href: `/api/wood/${w.id}`, 
            method: "DELETE" 
          },
          {
            rel: "sameHardness",
            href: `/api/wood/hardness/${w.hardness}`,
            method: "GET",
          },
      ]
  });

  // Add a "links" array for the entire collection of notes.
  const links = [
    { 
      rel: "all",
     href: `/api/wood`, 
     method: "GET" 
    },
    { 
      rel: "by hardness", 
      href: "/api/wood/:hardness", 
      method: "POST" 
    },
    { 
      rel: "create", 
      href: "/api/wood", 
      method: "POST" 
    },
  ];

  return {
    woods: responseWoods,
    links
  };
}