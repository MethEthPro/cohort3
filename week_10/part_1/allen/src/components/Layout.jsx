import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Layout() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    setFooterData([
      {
        title: "About",
        list: ["About us", "Blog", "News", "MyExamEduBlogs"],
      },
      {
        title: "Help and Support",
        list: ["Refund Policy", "Transfer Policy"],
      },
    ]);
  }, []);

  const footerAutomate = footerData.map((element, index) => (
    <FooterCard key={index} title={element.title} list={element.list} />
  ));

  return (
    <div
    //   style={{
    //     minHeight: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     width:"100%"
    //   }}
    >
      {/* Header */}
      <div style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/programs">Programs</Link>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#242424",
          padding: "1rem",
          borderTop: "1px solid #ccc",
        //   borderColor:"#242424",
          gap:"5rem"
        }}
      >
        {footerAutomate}
      </div>
    </div>
  );
}

// FooterCard
function FooterCard({ title, list }) {
  return (
    <div>
      <h4 style={{ marginBottom: "0.5rem" }}>{title}</h4>
      {list.map((item, index) => (
        <Mylists key={index} item={item} />
      ))}
    </div>
  );
}

// List Item
function Mylists({ item }) {
  return <div style={{ marginBottom: "0.25rem" }}>{item}</div>;
}

export default Layout;
