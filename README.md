# Secret Santa Assignment Tool

This is a [Next.js](https://nextjs.org) application that helps you generate Secret Santa assignments while avoiding previous year's pairings.

## Features

- Upload employee lists via CSV
- Upload previous year's assignments to avoid duplicates
- Generate new Secret Santa assignments
- Download results as CSV
- Ensures fair distribution and prevents previous pairings

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CSV File Requirements

The application requires two CSV files to generate Secret Santa assignments:

### 1. Employees CSV (`employee.csv`)

This file contains the current list of employees participating in Secret Santa.

**Required Format:**
```csv
Employee_Name,Employee_EmailID
Alice Smith,alice@example.com
Bob Johnson,bob@example.com
Carol Lee,carol@example.com
David Patel,david@example.com
Emma Brown,emma@example.com
```

**Columns:**
- `Employee_Name`: Full name of the employee
- `Employee_EmailID`: Email address of the employee

### 2. Previous Year Assignments CSV (`employee-preYear.csv`)

This file contains the previous year's Secret Santa assignments to avoid duplicate pairings.

**Required Format:**
```csv
Employee_Name,Employee_EmailID,Secret_Child_Name,Secret_Child_EmailID
Alice Smith,alice@example.com,Emma Brown,emma@example.com
Bob Johnson,bob@example.com,Carol Lee,carol@example.com
Carol Lee,carol@example.com,David Patel,david@example.com
David Patel,david@example.com,Alice Smith,alice@example.com
Emma Brown,emma@example.com,Bob Johnson,bob@example.com
```

**Columns:**
- `Employee_Name`: Name of the person who gave the gift
- `Employee_EmailID`: Email of the person who gave the gift
- `Secret_Child_Name`: Name of the person who received the gift
- `Secret_Child_EmailID`: Email of the person who received the gift

## How to Use

1. **Prepare your CSV files** following the formats above
2. **Upload Employees CSV**: Click "Choose File" and select your employees list
3. **Upload Previous Assignments CSV**: Click "Choose File" and select your previous year's assignments
4. **Generate Assignments**: Click the "Generate Assignments" button
5. **Download Results**: Use the download button to save the new assignments as a CSV file

## Output Format

The generated assignments CSV will contain:
- `Giver`: Name of the person giving the gift
- `Giver Email`: Email of the person giving the gift
- `Receiver`: Name of the person receiving the gift
- `Receiver Email`: Email of the person receiving the gift

## Requirements

- Minimum 2 employees required to generate assignments
- All employees must have both name and email
- Previous assignments must have complete information for all fields

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
