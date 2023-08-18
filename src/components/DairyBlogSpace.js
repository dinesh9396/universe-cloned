import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Menu, Card } from "antd";
import {
  HomeOutlined,
  StarOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import { SettingOutlined } from "@ant-design/icons";
import "./DairyBlogSpace.css";
import BlogCreator from "./BlogCreator";
import CompanyPosts from "./CompanyPosts";

function DiaryBlogSpace() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedKey, setSelectedKey] = useState(null);
  const [companyData, setCompanyData] = useState([]);

  const handleNewBlog = (newCompany) => {
    setCompanyData((prevData) => [...prevData, newCompany]);
  };

  const handleCards = (company) => {
    setSelectedCompany(company);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No JWT token found in local storage.");
      return;
    }
    fetch("http://127.0.0.1:5001/api/companies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCompanyData(data);
      })
      .catch((error) =>
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        )
      );
  }, []);

  console.log("Company Data:", companyData);
  return (
    <div className="menu-container">
      <div className="left-side">
        <Menu onClick={(e) => setSelectedKey(e.key)}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="diaryBlogAdmin" icon={<StarOutlined />}>
            DiaryBlog Admin
          </Menu.Item>
          <Menu.Item key="typeltAdmin" icon={<MessageOutlined />}>
            Typelt Admin
          </Menu.Item>
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </div>
      {!selectedKey && (
        <div>
          <h1>Welcome to Dashboard</h1>
        </div>
      )}
      {selectedKey === "home" && (
        <div className="content-body">
          <h1 className="dashboard_heading">Welcome to Dashboard</h1>
        </div>
      )}
      {selectedKey === "diaryBlogAdmin" && (
        <div className="content-body">
          {selectedCompany ? (
            <div>
              <h1 className="company_heading">{selectedCompany.company}</h1>
              <button
                className="back_button"
                onClick={() => setSelectedCompany(null)}
              >
                Back
              </button>
              <CompanyPosts selectedCompany={selectedCompany} />
            </div>
          ) : (
            <React.Fragment>
              <div className="content heading_row">
                <h1 className="dairyBlogAdmin_h1">
                  Web Components That Just Works.
                </h1>
                {/* <p>Welcome to our online store!</p> */}
              </div>
              <br />
              <div className="row">
                <BlogCreator onNewBlog={handleNewBlog} />
              </div>
              <div className="blog-content">
                <h3 className="blog-h3">My Blog Space</h3>
                <div className="blog-card-container">
                  {companyData &&
                    companyData.map((company, index) => (
                      <div
                        key={index}
                        className="blog-card"
                        onClick={() => handleCards(company)}
                      >
                        <h4 className="blog-title">{company.company}</h4>
                      </div>
                    ))}
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
}
export default DiaryBlogSpace;
