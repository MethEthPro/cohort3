import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Programs() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    setCourseData([
      {
        title: "JEE",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnXg41g31o9y0H7Vm1ikBkwyeyG6S-yATEQ&s",
      },
      {
        title: "NEET",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdRHnH6MjeMcP8Cn5SB2nbvz_lW8IKXk3nw&s",
      },
    ]);
  }, []);

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {courseData.map((course, index) => (
        <Card key={index} title={course.title} image={course.image} />
      ))}
    </div>
  );
}

function Card({ title, image }) {
  const address = `/programs/${title.toLowerCase()}`;
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      <strong>{title}</strong>
      <Link
        to={address}
        style={{ color: "black", textDecoration: "underline", fontSize: "0.9em" }}
      >
        View
      </Link>
    </div>
  );
}

export default Programs;
