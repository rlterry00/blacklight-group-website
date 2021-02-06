import React from "react";
import { graphql, withPrefix, Link } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../layouts/index";
import Call from "../components/Call";

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Technology driven company built around teams who build products to enhance communities."
        />
        <html lang="en" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theblacklightgroup.org/" />
        <meta property="og:title" content="The Blacklight Group LLC" />
        <meta
          property="og:description"
          content="Technology driven company built around teams who build products to enhance communities."
        />
        <meta
          property="og:image"
          content="https://www.theblacklightgroup.org/static/Group-of-Black%20Millennials-at-Office-22a3b5bb575bf58a84e1ed349e7cc621.png"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://theblacklightgroup.org/"
        />
        <meta property="twitter:title" content="The Blacklight Group LLC" />
        <meta
          property="twitter:description"
          content="Technology driven company built around teams who build products to enhance communities."
        />
        <meta
          property="twitter:image"
          content="https://www.theblacklightgroup.org/static/Group-of-Black%20Millennials-at-Office-22a3b5bb575bf58a84e1ed349e7cc621.png"
        />
      </Helmet>
      
        <div className="intro pb-4">
          <div className="container">
            <h1>The Blacklight Group LLC</h1>
            <p>#CreateTheExperience</p>
          </div>
        </div>

        <div className="container pt-2">
          <Call button />
        </div>
      
      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12 text-center">
            <h2 className="title-3 text-dark mb-3" style={{ marginTop: 25 }}>
              Our Culture
            </h2>
            <img
              src={require("../images/undraw_hang_out_h9ud.svg")}
              height="300"
              width="350"
            />
            <p>
              What is the significance of the blacklight to us? It is a metaphor
              of the company's thought process of solving problems that may not
              have been apparent to the naked eye. Our products are centered
              around community enhancement through technology. The Blacklight
              Group is a place where professionals come to learn new skill sets
              and take leadership roles in existing skill sets where the
              opportunity may not present its self else where. We check our egos
              at the door as team work is a major part of the culture. Each
              product is built around a "Blacklight Team" which collaborates
              with other teams internally and externally. The Blacklight Group
              is mananged by a diverse set of individuals who come together by
              the mutual passions of what we do.
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Products Developed By Us</h2>
          </div>
          <div className="col-12 col-md-4 mb-1">
            <img
              src={require("../images/Black-Woman-Phone.png")}
              height="350"
              width="350"
            />
          </div>
          <div className="col-12 col-md-4 mb-1">
            <div className="card service service-teaser">
              <div className="card-content">
                <h2>Penny Bank</h2>
                <p>
                  Family Productivity and financial literacy mobile application.
                  Click to learn more
                  <a href="https://pennybank.online"> Pennybank.Online</a>
                </p>
                <img
                  src={require("../images/homescreen.png")}
                  height="auto"
                  width="150"
                />
                <img
                  src={require("../images/lovetap.png")}
                  height="auto"
                  width="150"
                />
                <img
                  src={require("../images/responsibility.png")}
                  height="auto"
                  width="150"
                />
                <img
                  src={require("../images/goals.png")}
                  height="auto"
                  width="150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Our Skills Sets</h2>
          </div>
          {markdown.map((edge) => (
            <div
              key={edge.node.frontmatter.path}
              className="col-12 col-md-4 mb-1"
            >
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Our Features</h2>
          </div>
          {json.map((edge) => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
