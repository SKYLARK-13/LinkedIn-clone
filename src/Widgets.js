import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FibreManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FibreManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon className="info" />
      </div>
      {newsArticle("LinkedIn react is ready", "Top news - 9992 readers")}
      {newsArticle("Tesla new Model", "Top cars & auto - 578 readers")}
      {newsArticle("Bitcoin breaks 30k", "Crypto - 8546 readers")}
      {newsArticle("Corona virus 3rd wave", "Emergency - 7787 readers")}
      {newsArticle("React js new hook", "Tech - 124 readers")}
      {newsArticle("Redux is important", "Code - 7845 readers")}
    </div>
  );
}

export default Widgets;
