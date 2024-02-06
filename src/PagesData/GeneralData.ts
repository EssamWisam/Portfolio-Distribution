import { rand } from "../Pages/utils";

export const generalSetup = {
    title: rand({"Jerry C.":0.5, "Jerry Cruncher":0.5}),

    favicon: rand({"https://cdn-icons-png.flaticon.com/512/1086/1086101.png":0.5,
                   "https://www.freepnglogos.com/uploads/j-letter-png/letter-j-alphabet-letters-blue-letter-icon-10.png": 0.5}),

    backgroundColor: "#1B2430",

    secondaryColor: "#2F80ED",

    tertiaryColor: "#56CCF2",

    theme: "#000",

    inverseTheme: "#fff"
}