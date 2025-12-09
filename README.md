# Nayax Micromarkets Frontend


The Babel React compiler is enabled on this project, 
so I didn't use any useMemo or useCallback calls, 
most functions and values are already optimized for performance.

I18next was used for some example messages only.
The I18next configuration was done in such a way that each feature will have
its own translation files for better scalability.

Project wide translations would be located under: `src/assets/locales/{languageCode}.json`

Feature specific translations would be located under: `src/features/feature-x/assets/locales/{languageCode}.json`

### Commands
You can run the project using:

`npm run dev`

To take a look at the tests, run:

`npm run test:unit`

### Folder Structure
````
nayax-micromarkets-frontend/
├── src/ 
│ ├── api/ 
│ ├── assets/ # general locales are here
│ ├── components/
│ ├── contexts/ 
│ ├── hooks/ 
│ ├── lib/
│ ├── pages/ # application wide pages
│ ├── types/ # application types
│ ├── features/ 
│ │ ├── market/ # same folder structure as in the root for each feature (without pages folder)
│ │ │ ├── assets/ # feature specific locales are here
│ │ │ ├── components/
│ │ │ └── hooks/
│ │ └── feature-x/ # same folder structure as in the root for each feature (without pages folder)
│ │   ├── assets/ 
│ │   ├── components/
│ │   └── hooks/
├── index.html 
├── package.json
````




## Possible improvements

- Testing with Playwright to cover the basics of navigation.

- Adding more coverage and more comprehensive tests, a more thorough review of the test code.

- Further mobile adjustments

- A better analysis of the rendering process using react dev tools, using profiling to look for possible improvements

- Further style customizations for font sizing, headings, spaces, new components and general styling.

- The create market page. The product queue page. The asset-adding feature. 
- Making sonner toast work and removing unused components.


### Limitations

As I didn't have access to high quality image assets, I used what I could find.

I still don't understand some concepts of the micromarkets, so some data structures and concepts were deduced using the information I had.

## My Process of Work in this Project

First, I created the structure of the project using npm create vite@latest 
to startup the development.

The next step was adding the main libraries like i18next, syncfusion 
data table, tailwind and shadcn.

Then, I started to look at the screens from the nayax micromarket app 
and nayax application to understand how I would make the user flow and which
components would be necessary to create all the pages.
I added all the components using the provided command from shadcn: 
`npx shadcn@latest add x` and got the project full of simple use case examples 
of all the necessary components, so I could look at them.
Then I started to use shadcn theming and tailwind to customize every 
component to follow the Nayax styling guidelines provided.

After that, I started to create the general component structure of 
all the user flows, so I would have very basic components that would represent the project and page structure. So that is the stage where I lay out everything and think of component structure without caring about appearance, because I would leave that for last.
At this point I started to implement data structures mocks and how 
all that would be available to the components.

Then I went into the implementation stage, where I created all the 
functionality on the tabs and of form validation, for example.
At this point, moment library was installed to deal with date formatting, and i18next was configured with some example messages.

After that I started to fine-tune the appearance of the tabs and 
organizing components visually. As a last step and after the general design was implemented clearly, 
I made some adjustments for different device sizes using tailwind.

Take a look at the commit history for the project for more detailed information on this process.