const fs = require('fs');


// creating and writing into file
try {
    fs.writeFileSync('msg.txt',`
    -----------------------------------------------
    Hello world!
    ------------------------------------------------
    `)
    console.log("Done")
} catch (error) {
    console.log(error.message);
}

// appending data into file
try {
    fs.appendFileSync("msg.txt",`
    ------------------------------------------------
    How are you doing?
    ------------------------------------------------
    `)
    console.log("appending data done")
} catch (error) {
    console.log(error.message);
}

// Deleting file
try {
    fs.unlinkSync("random.txt")
    console.log("Deleting Done");
} catch (error) {
    console.log(error.message);
}