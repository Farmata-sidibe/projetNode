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