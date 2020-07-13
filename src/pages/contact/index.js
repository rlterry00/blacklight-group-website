import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = (props) => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img
              src={require("../../images/Black-Man-Phone.png")}
              height="350"
              width="350"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>

        <div className="col-8">
          <form action="https://formspree.io/mrgyopbp" method="POST">
            <div className="form-group">
              <br />
              <label>Department:</label>
              <select className="form-control" name="department" required>
                <option value="consultation">Consultation</option>
                <option value="penny-bank">Penny Bank</option>
                <option value="general">General</option>
              </select>
              <br />
              <label>Message:</label>
              <textarea name="message" className="form-control"></textarea>
              <br />
              <label>Your Name:</label>
              <input
                className="form-control"
                name="name"
                type="text"
                required
              />
              <br />
              <label>Your Email: </label>
              <input
                className="form-control"
                name="_replyto"
                type="email"
                required
              />
              <br />
              <button className="btn btn-primary">submit</button>
            </div>
          </form>
          <h4 className="mt-4">Business Hours</h4>
          <table className="table table-sm opening-hours-table">
            <tbody>
              <tr>
                <td className="day font-weight-bold">Monday</td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Tuesday</td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Wednesday</td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Thursday</td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Friday</td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Saturday</td>
                <td className="opens">By Appointment</td>
                <td />
                <td className="closes" />
              </tr>
              <tr>
                <td className="day font-weight-bold">Sunday</td>
                <td className="opens">Closed</td>
                <td />
                <td className="closes" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
