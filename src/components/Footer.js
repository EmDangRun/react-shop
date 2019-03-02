import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/sivadass/react-shopping-cart"
          target="_blank"
        >
          Phạm Văn Tuyên
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Bạn cần giúp đỡ?
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Fanpage Facebook
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Instagram
        </a>
      </p>
      <p>
        &copy; 2019 <strong>Veggy</strong>
      </p>
    </footer>
  );
};

export default Footer;
