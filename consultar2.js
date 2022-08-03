const mongoC = require("mongodb").MongoClient

const uri = "mongodb+srv://adsi2364481:Ja20UhTy94pFW2IH@clusteradsi2364481.54i9eft.mongodb.net/?retryWrites=true&w=majority"

const client = new mongoC(uri);
async function run() {
  try {
    const database = client.db("POSDavidAlvarado");
    const ven = database.collection("VENDEDORES");
    // Query for a movie that has the title 'The Room'
    const query = { "Edad":32 };
    const v = await ven.findOne(query);

    console.log(v)
  } finally {
    await client.close();
  }
}
run().catch(console.dir);