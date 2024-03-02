import React from "react";
import "./footer.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_API } from "../../envConfig";
import { DataSet } from "./footer_data";

function Footer() {
  const [contributors, setContributors] = React.useState([]);

  // email sent for subscribe
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    handleFetchContributors();
  }, []);

  const handleFetchContributors = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/repos/sangamprashant/component-craftsman/contributors"
      );
      if (response.status === 200) {
        // only top 10
        setContributors(response.data.slice(0, 10));
      }
    } catch (error) {
      console.log("failed to fetch the contributors:", error);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${BASE_API}/subscribe`, { email });
      if (response.status === 200) {
        setError("");
        setSuccess("Successfully subscribed!");
      }
    } catch (error) {
      console.log("Failed to subscribe:", error);
      setError(error.response.data);
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };



  return (
    <footer className="new_footer_area bg_color" id="contact">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Keep up to date
                </h3>
                <p>Join our newsletter for regular updates. No spam ever.</p>
                <form>
                  <div className="d-flex gap-2">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="btn btn-primary btn_get btn_get_two text-nowrap"
                      type="submit"
                      onClick={handleSubscribe}
                      disabled={loading}
                    >
                      {loading ? "Please wait" : "Subscribe"}
                    </button>
                  </div>
                  {error && <code>{error}</code>}
                  {success && <code className="text-success">{success}</code>}
                  <br />

                  <p
                    className="mchimp-errmessage"
                    style={{ display: "none" }}
                  ></p>
                  <p
                    className="mchimp-sucmessage"
                    style={{ display: "none" }}
                  ></p>
                </form>
              </div>
            </div>
            {DataSet.map((data, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    {data.title}
                  </h3>
                  <ul className="list-unstyled f_list">
                    {data.links.map((item, id) => (
                      <li key={item.name + id}>
                        <Link to={item.link} target="_blank">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Contributors
                </h3>
                <div className="f_social_icon">
                  {contributors.map((data, index) => (
                    <Link to={data.html_url} target="_blank">
                      <img
                        src={data.avatar_url}
                        alt=""
                        className="rounded-circle"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © Component Craftsman Inc.. 2024 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
