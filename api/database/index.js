const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vincentradet:H4iBV0jQEqCtBnQf@clusterreact18.egkghqt.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log("CONNEXION KO !", e);
  });
