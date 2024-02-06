# 🔮 Portfolio Distribution
As it crossed my mind that it would be more professional to have a personal portfolio website, 
I paused to consider if I could design it in a manner so others that don't have the time, patience or interest to work on a portfolio but would like to have one can use it as well. 
After all, the odds are usually low that a hiring manager views two applications from two related people in a close to consecutive fashion and even if not they should not care.

<img width="1258" alt="image" src="https://github.com/EssamWisam/Portfolio-Distribution/assets/49572294/8aa8b4a4-d3da-4623-b35e-eb40f2cc02e5">

Now some people may still prefer some variability which is why I designed it as a porfolio distribution. Yes, this is a probability distribution over portfolios and every refresh
will render a component or more of the page in a new look! Of course, you have the ability to design the distribution (by attributing the probability mass to specific components)
but I leave you the complete responsibility of guaranteeing that the the integral over all variables sums to 1. In other words, with every change you will have to work out that:

$$
\int_{-\infty}^{+\infty} P(x)  dx = 1
$$

Absolutely kidding xD. But I didn't try violating that to be honest.

## 🚀 Quick Start

The steps to make your own portfolio with this are easy. No web development experience needed:

- Confirm you have Node.js on your system
- Clone the project (or fork it if you are willing to help expand the distribution!)
- npm install

You will be only interested in modifying the `PagesData` folder and `App.tsx`. The former has the data in each page (section) of the portfolio and the latter only in 
case you want to reorder the pages or add a new page. This is how `PagesData` folder looks:
```javascript
.
├── GeneralData.ts          // Start here (metadata and colors)
├── NavigationBarData.ts    // Set navigation bar items and icons. 
├── HeroPageData.ts         // Hero section of the portfolio
├── TimelineData.ts         // Timeline section of the portfolio
├── SkillsPageData.ts       // Skills section of the portfolio
├── FeaturedPageData.ts     // Featured section of the portfolio
├── ProjectsPageData.ts     // Projects section of the portfolio
├── EducationPageData.ts    // Education section of the portfolio
├── TasksPageData.ts        // Also Projects section but used for a different purpose
└── RecommendationsPageData.ts // Recommendations section of the portfolio
```
where each of the files has the data corresponding to the respective section of the website. In `TimelinePage.ts` we have
```javascript
export const timelineStyles = {
  "center": false,
  "theme": rand({"HorizontalTimeline":0.5, "LongtidunalTimeline":0.5}),
}
```
This means that with probability 50% it will render a horizontal timeline and with probability 50% it will render a longtidunal timeline. A similar pattern is in the files
for other sections as well. You are free to set all these probabilities and even enforce new variables to follow random behaviour (e.g., center above).

You can also use an existing section for any purpose. For instance, the `TaskPage.ts` in the current template uses a project section for a different purpose. 
In other words, in `App.tsx` both `TaskPageData.ts` and `ProjectPageData.ts` use the same designed section `ProjectPages.tsx`.

It should be obvious how to reorder and remove sections once you check `App.tsx`.

## ✨ Next Steps

- This deserves much better documentation so I will likely get back to that.
- You are more than welcome to contribute with style improvements or new components for individual sections. Hopefully, the folder structure will be welcoming for that.
- Color generalizing is quite poor for light themes. Let's look into that later.
- Don't hesitate to reach out in case you face any difficulties (issues are your best bet if they are general problems).

Thanks you!

  
