// Onboarding.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import vesterLogo from "/public/Vester_logo.svg";
import "./Onboarding.css";

function Onboarding() {
  const [formData, setFormData] = useState({
    startupName: "",
    startupWebsite: "",
    country: "",
    industry: "",
    technologies: "",
    foundingDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    navigate("/Dashboard");
  };

  return (
    <>
      <div className="billboard">
        <nav className="mobile-nav">
          <img src={vesterLogo} className="vester-logo" alt="Vester logo" />
        </nav>
        <h2 className="desktop text-grp">
          Bridging the Gap <br />
          Between 
          <span className="black-text"> Innovation</span> <br />
          and <span className="black-text">Investment</span>
        </h2>
      </div>
      <div className="content-div">
        <h1>Welcome 😁</h1>
        <p>
          To complete your onboarding process, please fill in the required
          fields
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <label>Startup name</label>
            <input
              type="text"
              name="startupName"
              placeholder="e.g. Vester AI"
              value={formData.startupName}
              onChange={handleChange}
            />
          </div>
          <div className="form-div">
            <label>Startup website</label>
            <input
              type="text"
              name="startupWebsite"
              placeholder="e.g. VesterAI.com"
              value={formData.startupWebsite}
              onChange={handleChange}
            />
          </div>
          <div className="form-div">
            <label>Country of Legal Registration in Africa</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select a country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
              {/* Add other African countries here */}
            </select>
          </div>
          <div className="form-div">
            <label>Industry description</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="">Select field</option>
              <option value="Fintech">Fintech</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Healthcare">Healthcare</option>
              {/* Add other industries here */}
            </select>
          </div>
          <div className="form-div">
            <label>Technologies Used</label>
            <input
              type="text"
              name="technologies"
              placeholder="e.g. Vester AI"
              value={formData.technologies}
              onChange={handleChange}
            />
          </div>
          <div className="form-div">
            <label>Founding date</label>
            <input
              type="date"
              name="foundingDate"
              className="date-field"
              placeholder="dd / mm / yyyy"
              value={formData.foundingDate}
              onChange={handleChange}
            />
          </div>
          <button className="onboard-submit" type="submit">
            Continue
          </button>
        </form>
      </div>
    </>
  );
}

export default Onboarding;
