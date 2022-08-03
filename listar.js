const mongoC = require("mongodb").MongoClient

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://adsi2364481:Ja20UhTy94pFW2IH@clusteradsi2364481.54i9eft.mongodb.net/?retryWrites=true&w=majority";
const client = new mongoC(uri);
async function run() {
  try {
    const database = client.db("PosDavidAlvarado");
    const ven = database.collection("VENDEDORES");
    // Query for a movie that has the title 'The Room'
    const query = {};
    const options = {
      // sort matched documents in descending order by rating
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, Cedula: 1, Nombre: 1 },
    };
    const v = ven.find(query, options);
    console.log(v)

    if ((await v.count()) === 0) {
        console.log("No documents found!");
    
    }
    await v.forEach(console.dir);
    // since this method returns the matched document, not a cursor, print it directly
   
  } finally {
    await client.close();
  }
}
run().catch(console.dir);