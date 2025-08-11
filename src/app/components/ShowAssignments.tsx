"use client";

import React from "react";
import styles from "../page.module.css"; // Or your own ShowAssignments.module.css

// If using TypeScript, import your types
import type { Assignment } from "../models/Assignment";

type ShowAssignmentsProps = {
  assignments: Assignment[];
  onDownload: () => void;
};

const ShowAssignments: React.FC<ShowAssignmentsProps> = ({ assignments, onDownload }) => {
  if (!assignments.length) {
    return null;
  }

  return (
    <div className={styles.assignmentsSection}>
      <div className={styles.assignmentsHeader}>
        <h2>Assignments</h2>
        <button className={styles.downloadLink} onClick={onDownload}>
          Download CSV
        </button>
      </div>
      <table className={styles.assignmentsTable}>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Secret Child Name</th>
            <th>Secret Child Email</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a, idx) => (
            <tr key={idx}>
              <td>{a.giver.name}</td>
              <td>{a.giver.email}</td>
              <td>{a.receiver.name}</td>
              <td>{a.receiver.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAssignments;
