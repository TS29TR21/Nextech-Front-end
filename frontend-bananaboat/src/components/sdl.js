import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed

const Self = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample resource data
  const resources = [
    { title: "Codecademy - Learn Python", description: "Free interactive Python course", link: "https://www.codecademy.com/learn/learn-python" },
    { title: "Khan Academy", description: "Courses on various subjects", link: "https://www.khanacademy.org" },
    { title: "Harvard's CS50", description: "Intro to Computer Science course", link: "https://www.edx.org/course/cs50s-introduction-to-computer-science" },
    { title: "FreeCodeCamp", description: "Free web development tutorials", link: "https://www.freecodecamp.org" },
    { title: "Coursera", description: "Courses from top universities", link: "https://www.coursera.org" },
    { title: "Udemy", description: "Affordable courses on various topics", link: "https://www.udemy.com" },
    { title: "MIT OpenCourseWare", description: "Free lecture notes, exams, and videos", link: "https://ocw.mit.edu" },
    { title: "Pluralsight", description: "Tech skills learning platform", link: "https://www.pluralsight.com" },
    { title: "edX", description: "Online courses from top universities", link: "https://www.edx.org" },
    { title: "The Odin Project", description: "Full stack web development curriculum", link: "https://www.theodinproject.com" },
    { title: "Sololearn", description: "Learn programming through interactive challenges", link: "https://www.sololearn.com" },
    { title: "GeeksforGeeks", description: "Resources on programming and data structures", link: "https://www.geeksforgeeks.org" },
    { title: "W3Schools", description: "Tutorials on web technologies like HTML, CSS, and JavaScript", link: "https://www.w3schools.com" },
    { title: "MDN Web Docs", description: "Comprehensive documentation for web development", link: "https://developer.mozilla.org" },
    { title: "HackerRank", description: "Practice coding challenges", link: "https://www.hackerrank.com" },
    { title: "LeetCode", description: "Technical interview preparation and coding problems", link: "https://leetcode.com" },
    { title: "Project Euler", description: "Challenges in mathematics and computer science", link: "https://projecteuler.net" },
    { title: "Eloquent JavaScript", description: "Free book on modern JavaScript", link: "https://eloquentjavascript.net" },
  ];

  // Filter resources based on search query
  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.pageContainer}>
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <h1>Self-Directed Learning Resources</h1>
        </header>

        {/* Search Section */}
        <section style={styles.searchSection}>
          <input
            type="text"
            placeholder="Search resources..."
            style={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </section>

        {/* Resources Section */}
        <section style={styles.resourcesSection}>
          {filteredResources.map((resource, index) => (
            <div key={index} style={styles.resourceCard}>
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                Access Resource
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

// Styles for the page
const styles = {
  pageContainer: {
    display: "flex",
    height: "100vh",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f4f4f4",
    overflowY: "auto",
  },
  header: {
    textAlign: "center",
    paddingBottom: "20px",
  },
  searchSection: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  searchInput: {
    padding: "10px",
    width: "250px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "10px",
  },
  resourcesSection: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  resourceCard: {
    backgroundColor: "#e4e4e4",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  link: {
    color: "#4CAF50",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Self;
