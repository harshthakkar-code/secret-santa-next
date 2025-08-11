"use client";

import React, { useRef, useState } from "react";
import Papa from "papaparse";
import styles from "../page.module.css";

interface UploadCSVProps {
  label: string;
  onLoaded: (data: any[]) => void;
}

const UploadCSV: React.FC<UploadCSVProps> = ({ label, onLoaded }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    Papa.parse(file, {
      header: true,
      complete: results => onLoaded(results.data),
    });
  }

  function handleClick() {
    inputRef.current?.click();
  }

  return (
    <div className={styles.csvUpload}>
      <span className={styles.csvLabel}>{label}:</span>
      <label className={styles.fileInputLabel}>
        Choose File
        <input
          ref={inputRef}
          className={styles.fileInput}
          type="file"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          onChange={handleFile}
        />
      </label>
      {fileName && (
        <span className={styles.fileName}>{fileName}</span>
      )}
    </div>
  );
};

export default UploadCSV;
