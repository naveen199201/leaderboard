import React, { useState } from 'react';
import './FormComponent.css';
import { useDispatch } from 'react-redux';
import { addFormData } from './Time';

const FormComponent = ({ closeModal }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const handleChange = (e) => {
      const { name, value } = e.target;
      const numericValue = parseInt(value, 10) || 0;
      let newValue;
      if (name === 'seconds' || name === 'minutes') {
          newValue = Math.max(0, Math.min(59, numericValue));
          newValue = newValue.toString().padStart(2, '0');
      } else if (name === 'hours') {
          newValue = Math.max(0, Math.min(99, numericValue));
          newValue = newValue.toString().padStart(2, '0');
      }  
      setTime((prev) => ({
          ...prev,
          [name]: newValue
      }));
  };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name,
            time: {
                seconds: parseInt(time.seconds, 10) || 0,
                minutes: parseInt(time.minutes, 10) || 0,
                hours: parseInt(time.hours, 10) || 0,
            },
            date: Number(new Date()),
        };
        dispatch(addFormData(data));
        setName('');
        setTime({
            seconds: 0,
            minutes: 0,
            hours: 0
        });
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="name" className="form-label">
                    Name:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="seconds" className="form-label">
                    Seconds:
                    <input
                        type="number"
                        id="seconds"
                        name="seconds"
                        value={time.seconds}
                        onChange={handleChange}
                        max="59"
                        min="0"
                        className="form-input"
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="minutes" className="form-label">
                    Minutes:
                    <input
                        type="number"
                        id="minutes"
                        name="minutes"
                        value={time.minutes}
                        onChange={handleChange}
                        max="59"
                        min="0"
                        className="form-input"
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="hours" className="form-label">
                    Hours:
                    <input
                        type="number"
                        id="hours"
                        name="hours"
                        value={time.hours}
                        onChange={handleChange}
                        max="99"
                        min="0"
                        className="form-input"
                    />
                </label>
            </div>
            <button type="submit" className="form-button">Submit</button>
        </form>
    );
};

export default FormComponent;