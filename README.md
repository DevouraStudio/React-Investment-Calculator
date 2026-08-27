# React Investment Calculator
 
A simple, single-page React app for projecting compound investment growth. Enter an initial investment, an annual contribution, an expected annual return, and a duration in years — the app calculates and displays a year-by-year breakdown of your investment's growth.
 
## Features
 
- **Four input fields**: initial investment, annual investment, expected return (%), and duration (years)
- **Year-by-year results table** showing, for each year:
  - Investment value at year end
  - Interest earned that year
  - Total interest earned to date
  - Total invested capital
- Results are formatted as USD currency
- Basic input validation (duration must be greater than 0 before results are shown)
## Tech Stack
 
- [React](https://react.dev/) 19
- [Create React App](https://create-react-app.dev/) (`react-scripts`)
- TypeScript type definitions (`@types/react`, `@types/react-dom`)
## Project Structure
 
```
src/
├── components/
│   ├── App/          # Root component — manages input state
│   ├── UserInput/     # Renders the group of input fields
│   ├── Input/          # Single labeled input field
│   └── Result/        # Renders the year-by-year results table
├── util/
│   └── investment.js  # Core calculation logic and currency formatter
└── index.js
```
 
## Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) and npm installed
### Installation
 
Clone the repository and install dependencies:
 
```bash
git clone https://github.com/DevouraStudio/React-Investment-Calculator.git
cd React-Investment-Calculator
npm install
```
 
### Running Locally
 
```bash
npm start
```
 
This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page reloads automatically when you make edits.
 
### Building for Production
 
```bash
npm run build
```
 
Bundles the app in production mode and outputs optimized, minified files to the `build` folder.
 
### Running Tests
 
```bash
npm test
```
 
## How It Works
 
The calculation logic in `src/util/investment.js` compounds the investment year by year: each year, interest is calculated on the current investment value at the expected return rate, then that interest plus the annual contribution is added to the running total. The result is an array of yearly snapshots (`year`, `interest`, `valueEndOfYear`, `annualInvestment`) which `Result.jsx` uses to render the table, deriving total interest and invested capital for each row.
 
## License
 
No license specified.

## Created With
 
This project was originally created with [CodeSandbox](https://codesandbox.io/).

## Author

- Website - [DevouraStudio](https://www.devoura.ir)
- Frontendmentor - [@DevouraStudio](https://www.frontendmentor.io/profile/DevouraStudio)
- Github - [@DevouraStudio](https://www.github.com/DevouraStudio)
- Codepen - [@DevouraStudio](https://www.codepen.io/DevouraStudio)
- Codesandbox - [@DevouraStudio](https://codesandbox.io/u/DevouraStudio)
