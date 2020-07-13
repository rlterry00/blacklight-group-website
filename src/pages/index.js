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
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>The Blacklight Group LLC</h1>
          <p>When they don't hire you #hireyourself</p>
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
              src={require("../images/Enlight11.jpg")}
              height="300"
              width="350"
            />
            <p>
              The Blacklight Group is a place where professionals come to learn
              new skill sets and take leadership roles in existing skill sets
              where the opportunity may not present its self else where. We
              check our egos at the door as team work is a major part of the
              culture. Each product is built around a "Blacklight Team" which
              collaborates with other teams internally or provides a service to
              clients externally. Our team members are no longer the token of
              diversity at The Blacklight Group, we are diversity.
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Products Developed By Us</h2>
          </div>
          <div className="col-6 col-md-4 mb-1">
            <img
              src={require("../images/Black-Woman-Phone.png")}
              height="350"
              width="350"
            />
          </div>
          <div className="col-6 col-md-4 mb-1">
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
