const inputObjArr = [
    {
        key: "ISBN",
        type : NUMBER
    },
    {   
        key : "Author Name",
        type : TEXT
    },
    {
        key : "Book Name",
        type : TEXT
    },
    {
        key : "price",
        type : NUMBER
    },
    {
        key : "pages",
        type : NUMBER
    },
    {
        key :  "Discount",
        type : NUMBER
    },
    {
        key : "Year of Publish",
        type : DATE
    },
    {
        key : "In Stock",
        type : BOOLEAN
    }
];


const inputArr = inputObjArr.map((element)=>{
    return getTag(element);
})



