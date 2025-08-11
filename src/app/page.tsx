"use client";

import React, { useState } from "react";
import { Employee } from "./models/Employee";
import { Assignment } from "./models/Assignment";
import { assignSecretSantas } from "./lib/logic";
import UploadCSV from "./components/UploadCSV";
import ShowAssignments from "./components/ShowAssignments";
import { saveAs } from "file-saver";
import styles from "./page.module.css"; // Import your CSS module

function parseEmployees(data: any[]): Employee[] {
  return data
    .filter(row => row.Employee_Name && row.Employee_EmailID)
    .map(row => new Employee(row.Employee_Name, row.Employee_EmailID));
}

function parsePrevAssignments(data: any[]): Assignment[] {
  return data
    .filter(row => row.Employee_Name && row.Employee_EmailID && row.Secret_Child_Name && row.Secret_Child_EmailID)
    .map(
      row =>
        new Assignment(
          new Employee(row.Employee_Name, row.Employee_EmailID),
          new Employee(row.Secret_Child_Name, row.Secret_Child_EmailID)
        )
    );
}

export default function Page() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [prevAssignments, setPrevAssignments] = useState<Assignment[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  function handleAssign() {
    try {
      setAssignments(assignSecretSantas(employees, prevAssignments));
    } catch (e: any) {
      alert(e.message);
      setAssignments([]);
    }
  }

  function handleDownloadCsv() {
    if (!assignments.length) return;
    const fields = ["Giver", "Giver Email", "Receiver", "Receiver Email"];
    const rows = assignments.map((a) => [
      a.giver.name,
      a.giver.email,
      a.receiver.name,
      a.receiver.email,
    ]);
    const csv =
      fields.join(",") +
      "\n" +
      rows
        .map((row) =>
          row.map((field) => `"${(field || "").replace(/"/g, '""')}"`).join(",")
        )
        .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    saveAs(blob, "assignments.csv");
  }

  return (
    <div className={styles.secretSantaContainer}>
      <h1 className={styles.title}>Secret Santa Assignment</h1>
      <UploadCSV
        label="Upload Employees CSV"
        onLoaded={data => setEmployees(parseEmployees(data))}
      />
      <UploadCSV
        label="Upload Previous Assignments CSV"
        onLoaded={data => setPrevAssignments(parsePrevAssignments(data))}
      />
      <button
        onClick={handleAssign}
        disabled={employees.length < 2}
        className={styles.generateBtn}
      >
        Generate Assignments
      </button>
      <ShowAssignments assignments={assignments} onDownload={handleDownloadCsv} />
    </div>
  );
}
