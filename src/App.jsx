import "./App.css";

function App() {
  return (
    <>
      <h1>React Advanced Form</h1>
      <div className="container">
        <div className="form section">
          <form action="" className="advanced-form">
            <div className="field" id="name" aria-label="name">
              <label htmlFor="name">
                Name <sup>*</sup>
              </label>
              <input type="text" id="name" name="name" value="name" />
              <small className="error">Name is required!</small>
            </div>
            <div
              className="field"
              id="terms_conditions"
              aria-label="terms_conditions"
            >
              <label htmlFor="terms_conditions">Terms & Conditions</label>
              <input
                type="checkbox"
                id="terms_conditions"
                name="terms_conditions"
              />
            </div>
            <div className="field" id="gender" aria-label="gender">
              <label htmlFor="gender">Gender</label>
              <div>
                <input type="radio" id="male" name="gender" value="male" />
                Male
              </div>
              <div>
                <input type="radio" id="Female" name="gender" value="Female" />
                Female
              </div>
              <div>
                <input type="radio" id="Other" name="gender" value="Other" />
                Other
              </div>
            </div>
            <div className="field" id="class" aria-label="class">
              <label htmlFor="class">Form Type</label>
              <select name="class" id="class">
                <option value="">Select One</option>
                <option value="regular">Regular</option>
                <option value="wizard">Wizard</option>
              </select>
            </div>
            <div className="field" id="spell" aria-label="spell">
              <label htmlFor="spell">Spell</label>
              <select name="spell" id="spell">
                <option value="">Select One</option>
                <option value="fire">Fire</option>
                <option value="ice">Ice</option>
              </select>
            </div>
            <div className="field" id="description" aria-label="description">
              <label htmlFor="description"></label>
              <textarea name="description" id="description"></textarea>
            </div>
            <button type="submit" disabled>
              Submit
            </button>
          </form>
        </div>
        <div className="results section">
          <pre>[]</pre>
        </div>
      </div>
    </>
  );
}

export default App;
