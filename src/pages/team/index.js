import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";

const Team = (props) => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Team" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Meet The Blacklight Teams</h1>
              <p>
                Meet the core members of the ever growing teams that develop the
                products at The Blacklight Group.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              src={require("../../images/iconoutline.png")}
              height="150"
              width="150"
            />
            <h1 style={{ color: "#1c3ed3" }}>Team Penny Bank</h1>

            <p>
              This is the core members who have made contributions to the
              development of the Penny Bank moble application.
            </p>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {teams.map((edge) => (
            <div
              key={edge.node.frontmatter.path}
              className="col-12 col-md-6 mb-1"
            >
              <div className="team card-two">
                <div className="card-header">
                  <div className="card-header-left">
                    {edge.node.frontmatter.image && (
                      <div className="card-image">
                        <img
                          alt={edge.node.frontmatter.title}
                          className="img-fluid mb-2"
                          src={edge.node.frontmatter.image}
                        />
                      </div>
                    )}
                  </div>
                  <div className="card-right">
                    <h2 className="card-title">
                      {edge.node.frontmatter.title}
                    </h2>
                    <ul className="card-meta">
                      <li>
                        <strong>{edge.node.frontmatter.jobtitle}</strong>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href={edge.node.frontmatter.linkedinurl}
                        >
                          {edge.node.frontmatter.linkedinurl}
                        </a>
                      </li>
                      <li>
                        <a href={edge.node.frontmatter.email}>
                          {edge.node.frontmatter.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="team-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            image
            jobtitle
            linkedinurl
            email
          }
        }
      }
    }
  }
`;

export default Team;
