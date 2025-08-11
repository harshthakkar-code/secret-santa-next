import { Employee } from "../models/Employee";
import { Assignment } from "../models/Assignment";

export function assignSecretSantas(
  employees: Employee[],
  prevAssignments: Assignment[]
): Assignment[] {
  const prevMap = new Map<string, string>();
  prevAssignments.forEach(a => {
    prevMap.set(a.giver.email, a.receiver.email);
  });

  const maxTries = 1000;
  for (let attempt = 0; attempt < maxTries; attempt++) {
    const receivers = [...employees];
    shuffle(receivers);

    let valid = true;
    const assignments: Assignment[] = [];

    for (let i = 0; i < employees.length; i++) {
      const giver = employees[i];
      const receiver = receivers[i];

      if (
        giver.email === receiver.email ||
        prevMap.get(giver.email) === receiver.email
      ) {
        valid = false;
        break;
      }

      assignments.push({ giver, receiver });
    }

    if (valid) return assignments;
  }
  throw new Error("No valid Secret Santa assignment found after many tries.");
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
