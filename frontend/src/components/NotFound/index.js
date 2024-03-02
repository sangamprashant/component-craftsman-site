import React from "react";
import "./NotFound.css"
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="notfound-body">
      <div class="notfound-wrapper">
        <div class="notfound-container">
          <div id="scene" class="scene" data-hover-only="false">
            <div class="circle" data-depth="1.2"></div>

            <div class="one" data-depth="0.9">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <div class="two" data-depth="0.60">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <div class="three" data-depth="0.40">
              <div class="content">
                <span class="piece"></span>
                <span class="piece"></span>
                <span class="piece"></span>
              </div>
            </div>

            <p class="p404" data-depth="0.50">
              404
            </p>
            <p class="p404" data-depth="0.10">
              404
            </p>
          </div>

          <div class="text">
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <Link to="/">i dare!</Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
