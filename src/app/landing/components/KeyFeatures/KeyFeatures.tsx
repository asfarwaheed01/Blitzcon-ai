"use client";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./KeyFeatures.css";

const KeyFeatures = () => {
  return (
    <section className="keyfeatures-section" id="features">
      <div className="keyfeatures-container">
        <div className="keyfeatures-content">
          {/* Left Section (mirrored from services right section) */}
          <div className="keyfeatures-left">
            <div className="keyfeatures-header">
              <h2>
                KEY <br /> FEATURES
              </h2>
              <p>Intelligent Solutions</p>
            </div>
            <div className="feature-top-cards">
              <div className="feature-info-wrapper">
                <div
                  className="feature-info"
                  style={{
                    background:
                      "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+50.gif') no-repeat center center/cover",
                  }}
                >
                  <p>
                    AI solutions for voice, integrations, scalability, and
                    accuracy.
                  </p>
                </div>
              </div>
              <div
                className="feature-card feature-analytics"
                style={{
                  background:
                    "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+52.gif') no-repeat center center/cover",
                }}
              >
                <div className="feature-content">
                  <h3>Efficiency</h3>
                  <p>
                    Effortless insights to drive decisions and outpace
                    competition.
                  </p>
                </div>
                <button className="feature-arrow-button">
                  <ArrowOutwardIcon />
                </button>
              </div>
            </div>

            <div
              className="feature-card feature-calling"
              style={{
                background:
                  "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+49.gif') no-repeat center center/cover",
              }}
            >
              <div className="feature-content">
                <h3>Scalability</h3>
                <p>
                  AI agents offer 24/7 personalized support, boosting loyalty
                  and relationships
                </p>
              </div>
              <button className="feature-arrow-button">
                <ArrowOutwardIcon />
              </button>
            </div>
          </div>

          {/* Right Section (mirrored from services left section) */}
          <div className="keyfeatures-right">
            <div
              className="feature-card feature-support"
              style={{
                background:
                  "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+48.gif') no-repeat center center/cover",
              }}
            >
              <div className="feature-content">
                <h3>Personalization</h3>
                <p>
                  AI calling agent ensures multilingual, real-time,
                  personalized, efficient consumer support.
                </p>
              </div>
              <button className="feature-arrow-button">
                <ArrowOutwardIcon />
              </button>
            </div>

            <div className="feature-bottom-cards">
              <div
                className="feature-card feature-scraping"
                style={{
                  background:
                    "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+51.gif') no-repeat center center/cover",
                }}
              >
                <div className="feature-content-news">
                  <h3 className="">New Updates </h3>
                </div>
                <button className="feature-arrow-button">
                  <ArrowOutwardIcon />
                </button>
              </div>
              <div
                className="feature-card feature-image feature-empty-card"
                style={{
                  background:
                    "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+50.gif') no-repeat center center/cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
