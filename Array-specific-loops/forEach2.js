const myCoding = [
    {
        LanguageName: "Javascript",
        LanguageFilename: "js"
    },
     {
        LanguageName: "java",
        LanguageFilename: "java"
    },
     {
        LanguageName: "c++",
        LanguageFilename: "cpp"
    },
     {
        LanguageName: "C",
        LanguageFilename: "C"
    },
     {
        LanguageName: "python",
        LanguageFilename: "py"
    }
]
myCoding.forEach((item) => {
    console.log(`${item.LanguageName} : ${item.LanguageFilename}`);
})
