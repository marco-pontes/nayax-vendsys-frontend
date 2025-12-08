# Nayax Micromarkets Frontend


The React compiler is enabled on this project, that's why I didn't use any useMemo or useCallback calls because everything should be optimized.


You can run the project using npm run dev and take a look at the tests running npm run test:unit



## Possible improvements

Testing with Playwright to cover the basics navigation.
Adding more coverage to the unit tests and reviewing this code better.
Further mobile adjustments

# My Process of Work in this Project

First, I created the structure of the project using npm create vite@latest to startup the development.
After that, I added the main libraries like i18next, syncfusion data table, tailwind and shadcn.
Then, I started to look at the screens from the nayax micromarket app and nayax application to understand how I would make the user flow and which components would be necessary to create all the pages
I added all the components using the provided command from shadcn: npx shadcn@latest add x and got the project full of utilization examples of all the necessary components, so I could look at them.
Then I started to use shadcn theming and tailwind to customize every component to follow the Nayax styling guidelines provided.
After that, I started to create the general component structure of all the user flow, so I would have very basic components that would represent the project and page structure. So that is the stage where I lay out everything and think of component structure without caring about appearance, because I would leave that for last.
At this point I started to implement data structures mocks and how all that would be available to the components.
Then I went into the implementation stage, where I created all the functionality on the tabs and of form validation for example.
After that I started to fine tune the appearance of the tabs and organizing components visually.