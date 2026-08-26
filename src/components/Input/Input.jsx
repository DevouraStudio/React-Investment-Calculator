export default function UserInput({ label, value, onInputChange, inputIndex }) {
  return (
    <section>
      <label htmlFor={label}>{label}</label>
      <input
        type="number"
        id={label}
        onChange={(event) => onInputChange(event, inputIndex)}
        value={value}
      />
    </section>
  );
}
