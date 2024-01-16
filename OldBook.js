function oldBook (input){
    let favouriteBook = input[0];
    let index = 1;
    let nextBook = input[index];
    index ++
    isFound = false;
    let bookCounter = 0

    while (nextBook !== "No More Books"){
        console.log (nextBook)
        index ++
        nextBook = input[index]
    } if (nextBook === "No More Books"){
        console.log ("The book you search is not here!")
        console.log (Number(input[index]));
        bookCounter++
    
    } else if (nextBook === "favouriteBook"){
        console.log (`You checked ${bookCounter} books and found it.`)
    }

    console.log(nextBook);
}
oldBook(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"The Spot",
"No More Books"])

