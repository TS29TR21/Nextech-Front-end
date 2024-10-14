import React, { useState, useEffect } from "react";

const SubjectView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allResources, setAllResources] = useState([]); // Store all resources
  const [filteredSubjects, setFilteredSubjects] = useState([]); // Store filtered subjects

  // Fetch resources from the API on mount
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/resource/deserial"
        ); // API endpoint
        if (!response.ok) throw new Error("Failed to fetch resources");
        const data = await response.json();
        setAllResources(data); // Set the fetched resources
        setFilteredSubjects(data.map((resource) => resource.subject)); // Initialize filtered subjects
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  // Handle input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Filter subjects based on the search input
    const filtered = allResources
      .map((resource) => resource.subject) // Extract subjects from resources
      .filter((subject) => subject.toLowerCase().includes(value.toLowerCase())); // Filter subjects

    setFilteredSubjects(filtered); // Update filtered subjects
  };

  return (
    <div style={styles.pageContainer}>
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <h1>Subject View</h1>
        </header>

        {/* Search Section */}
        <section style={styles.searchSection}>
          <input
            type="text"
            placeholder="Search subjects"
            style={styles.searchInput}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </section>

        {/* Subjects Section */}
        <section style={styles.subjectsSection}>
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject, index) => (
              <div key={index} style={styles.subjectCard}>
                <h2>{subject}</h2>
              </div>
            ))
          ) : (
            <p style={styles.noResults}>No subjects found.</p>
          )}
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
  subjectsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  subjectCard: {
    backgroundColor: "#e4e4e4",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  noResults: {
    textAlign: "center",
    fontSize: "18px",
    color: "#999",
  },
};

export default SubjectView;
