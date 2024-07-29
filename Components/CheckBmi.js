import React, { useState } from 'react';
import './CheckBmi.css'; // Import the CSS file

export default function CheckBmiReact() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [description, setDescription] = useState('N/A');

  // Function to calculate BMI
  const calculateBMI = (e) => {
    e.preventDefault();

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      alert('Please enter a valid weight and height');
      return;
    }

    const heightInMeters = heightValue / 100; // Convert height from cm to meters
    const bmiValue = weightValue / Math.pow(heightInMeters, 2);
    const desc = interpretBMI(bmiValue);

    setBmi(bmiValue.toFixed(2));
    setDescription(desc);
  };

  // Function to reset the form
  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setDescription('N/A');
  };

  // Function to interpret BMI value
  const interpretBMI = (bmi) => {
    if (bmi < 18.5) {
      return 'underweight';
    } else if (bmi < 25) {
      return 'healthy';
    } else if (bmi < 30) {
      return 'overweight';
    } else {
      return 'obese';
    }
  };

  return (
    
    <div className="app-container" id='QW'>
      <div className="card" id='AQ'>
       <center>
        <h1 id='XX'>BMI Calculator</h1>
        <form onSubmit={calculateBMI}>
          <div className="form-group">
            <label htmlFor="weight" id='JL'>Weight (kg):</label>
            <input type="number" id="weight" value={weight}  onChange={(e) => setWeight(e.target.value)} /><br/>
          </div>
          <div className="form-group">
            <label htmlFor="height" id='JL'>Height (cm):</label>
            <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)}  />
          </div>
          <div className="buttons">
            <button type="submit" id='ZZ'>Calculate BMI</button><br/><br/>
            <button type="button" id='ZZ' onClick={resetForm}>Reset</button>
          </div>
        </form>

        {bmi !== null && (
          <div className="output" id='VV'>
            <h1>Your BMI:</h1>
            <div className={`bmi ${description}`}>{bmi}</div>
            <div className="desc">
              <strong className={description} id='OL'>
                {description.charAt(0).toUpperCase() + description.slice(1)}
              </strong>
            </div>
          </div>
        )}

        <div className="bmi-scale" id='QQ'>
          <div className="underweight" >
            <h3>Underweight</h3>
            <h4 id='UU'>&lt; 18.5</h4>
          </div>
          <div className="healthy" >
            <h3>Healthy weight</h3>
            <h4 id='UU'>18.5 - 24.9</h4>
          </div>
          <div className="overweight" >
            <h3>Overweight</h3>
            <h4 id='UU'>25 - 29.9</h4>
          </div>
          <div className="obese" >
            <h3>Obese</h3>
            <h4 id='UU'>&age; 30</h4>
            
          </div>
        </div>
        </center>
      </div>
      <div className="right-image">
        <img src="https://media0.giphy.com/media/WUBuLXg3s7hWZBwTf3/source.gif" alt="Descriptive Alt Text" />
      </div>
    </div>
  );
}
