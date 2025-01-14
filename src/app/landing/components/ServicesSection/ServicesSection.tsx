"use client";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./services.css";

const ServicesSection = () => {
  return (
    <section className="services-section" id="service">
      <div className="services-container">
        {/* Header */}

        <div className="services-content">
          {/* Left Section */}
          <div className="services-left">
            <div
              className="service-card customer-support"
              style={{
                background:
                  "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+48.gif') no-repeat center center/cover",
              }}
            >
              <div className="customer-support-content">
                <h3>Customer Support</h3>
                <p>
                  AI agents offer 24/7 personalized support, boosting loyalty
                  and relationships
                </p>
              </div>
              <button className="arrow-button">
                <ArrowOutwardIcon />
              </button>
            </div>

            <div className="bottom-cards">
              <div
                className="service-card image-card empty-card"
                style={{
                  background:
                    "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+50.gif') no-repeat center center/cover",
                }}
              >
                {/* Background image will be added via CSS */}
              </div>

              <div
                className="service-card data-scraping"
                style={{
                  background:
                    "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+51.gif') no-repeat center center/cover",
                }}
              >
                <div className="data-scraping-content">
                  <h3>Data Scraping</h3>
                  <p>
                    Effortless insights to drive decisions and outpace
                    competition.
                  </p>
                </div>
                <button className="arrow-button">
                  <ArrowOutwardIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="services-right">
            <div className="services-header">
              <h2>SERVICE</h2>
              <p>Tailored AI Solutions</p>
            </div>
            <div className="top-cards">
              <div
                className="service-card batch-analytics"
                style={{
                  background:
                    "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+52.gif') no-repeat center center/cover",
                }}
              >
                <div className="batch-analytics-content">
                  <h3>Batch Analytics</h3>
                  <p>
                    Analyze data, uncover insights, drive growth, optimize
                    performance.
                  </p>
                </div>
                <button className="arrow-button">
                  <ArrowOutwardIcon />
                </button>
              </div>

              <div className="info-card-wrapper">
                <div
                  className="info-card"
                  style={{
                    background:
                      "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+50.gif') no-repeat center center/cover",
                  }}
                >
                  <p>
                    BlitzCon-AI boosts efficiency with AI-powered support, data
                    scraping, and analytics.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="service-card ai-calling"
              style={{
                background:
                  "url('https://wallstreet-bucket.s3.eu-north-1.amazonaws.com/Rectangle+49.gif') no-repeat center center/cover",
              }}
            >
              <div className="ai-calling-content">
                <h3>AI Calling Agent</h3>
                <p>
                  AI calling agent ensures multilingual, real-time,
                  personalized, efficient consumer support.
                </p>
              </div>
              <button className="arrow-button">
                <ArrowOutwardIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
