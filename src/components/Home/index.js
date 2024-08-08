import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="homeContainer">
    <Header />
    <div className="homePage">
      <div className="home-page-content">
        <h1 className="homeHeading">Find The Job That Fits Your Life</h1>
        <p className="homeDescription">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button className="find-jobs-button" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default Home
