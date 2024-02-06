import { rand } from "../Pages/utils";

export const generalSetup = {
    title: rand({"Essam W.":0.5, "Essam Wisam":0.5}),

    favicon: rand({"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Light_Blue_Circle.svg/768px-Light_Blue_Circle.svg.png":0.5,
                   "https://miro.medium.com/v2/resize:fit:2400/1*zyXFeBBQsmpIaX7VJ6g7JA.png": 0.5}),

    backgroundColor: "#001423",

    secondaryColor: "#42f3ce",

    tertiaryColor: "#647eff",

    theme: "#000",

    inverseTheme: "#fff"
}