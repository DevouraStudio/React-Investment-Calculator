import { calculateInvestmentResults, formatter } from "../../util/investment";

import "./Result.css";

export default function Result({ inputs }) {
  const investmentCalculation = calculateInvestmentResults({
    initialInvestment: +inputs[0].value,
    annualInvestment: +inputs[1].value,
    expectedReturn: +inputs[2].value,
    duration: +inputs[3].value,
  });

  const initialInvestment =
    investmentCalculation[0].valueEndOfYear -
    investmentCalculation[0].interest -
    investmentCalculation[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentCalculation.map((object) => {
          const totalInterest =
            object.valueEndOfYear -
            object.annualInvestment * object.year -
            initialInvestment;
          const investedCapital = object.valueEndOfYear - totalInterest;
          return (
            <tr key={object.year}>
              <td>{object.year}</td>
              <td>{formatter.format(object.valueEndOfYear)}</td>
              <td>{formatter.format(object.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
