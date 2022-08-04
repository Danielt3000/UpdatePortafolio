import React from "react";
import data from "./data.json";
import twitter from "./video/twitter.mp4";
import movie from "./video/Movie_Review.mp4";
import cool from "./video/cool-tees.mp4";

function Projects2() {
  return (
    <div id="project">
      <h2>
        <span className="font-primary">P</span>rojects
      </h2>
      {data.map((data) => {
        return (
          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4">
                <video className="project-video" autoPlay muted controls>
                  <source
                    src={
                      data.id === 2
                        ? movie
                        : data.id === 3
                        ? cool
                        : data.id === 4
                        ? twitter
                        : " "
                    }
                    type="video/mp4"
                  />
                  ; Your browser does not support the video tag.
                </video>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{data.Title}</h5>
                  <p className="card-text">
                    <strong>Project Description: </strong>
                    {data.Descripcion}
                    <br />
                    <br />
                    <strong>Skills Used: </strong>
                    {data.Skills}
                  </p>

                  {data.id === 1 ? (
                    <p className="card-text">
                      <small className="text-muted">
                        Test Login Account
                        <br />
                        Email: test@gmail.com <br />
                        Password: 1234
                      </small>
                    </p>
                  ) : (
                    " "
                  )}
                  <a
                    href={data.Web}
                    target="_blank"
                    className="btn btn2 btn3 btn-secondary"
                  >
                    Website link
                  </a>
                  <a
                    href={data.Git}
                    target="_blank"
                    className="btn btn3 btn-secondary"
                  >
                    Github Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects2;
