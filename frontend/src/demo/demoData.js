
import xray1 from "./files/xray1.png";
import bloodtest from "./files/bloodtest.png";
import toothimage from "./files/tooth-image.png";

export const demoDB = {
  patients: [
    {
      patient_number: 1,
      name: "Sarah Ahmed",
      gender: "Female",
      marital_status: "Single",
      date_of_birth: "1992-05-14",
      phone_number: "0791234567",
      email: "sarah@gmail.com",

      // Medical Info
      extra_information: "Sensitive teeth, prefers morning appointments",
      drug_allergies: "Penicillin",
      food_allergies: "Peanuts",
      medical_history: "Anemia",
      surgical_history: "Wisdom tooth removal (2018)",
      chronic_medication: "Vitamin D supplements",

      // Emergency Contact
      emergency_contact_name: "Ahmad Ahmed",
      emergency_contact_phone: "0792123456",

      // Appointments
      next_appointment: "2025-12-05",
      previous_appointment: "2025-11-01",
    },
    {
      patient_number: 2,
      name: "Mohammad Saleh",
      gender: "Male",
      marital_status: "Married",
      date_of_birth: "1988-11-02",
      phone_number: "0788888888",
      email: "m.saleh@hotmail.com",

      extra_information: "Smoker, medium pain tolerance",
      drug_allergies: "None",
      food_allergies: "Seafood",
      medical_history: "High blood pressure",
      surgical_history: "Knee operation (2020)",
      chronic_medication: "Blood pressure medication",

      emergency_contact_name: "Reem Saleh",
      emergency_contact_phone: "0787456321",

      next_appointment: "2025-12-10",
      previous_appointment: "2025-11-03",
    },
    {
      patient_number: 3,
      name: "Lana Khaled",
      gender: "Female",
      marital_status: "Single",
      date_of_birth: "1999-07-20",
      phone_number: "0775678910",
      email: "lana.kh@icloud.com",

      extra_information: "Braces treatment in 2022",
      drug_allergies: "Ibuprofen",
      food_allergies: "None",
      medical_history: "Migraines",
      surgical_history: "None",
      chronic_medication: "Painkillers (as needed)",

      emergency_contact_name: "Khaled Hassan",
      emergency_contact_phone: "0779988776",

      next_appointment: "2025-12-12",
      previous_appointment: "2025-11-05",
    },
  ],

  // ADD THIS SECTION
  appointments: [
    {
      id: 1,
      patient_number: 1,
      patient_name: "Sarah Ahmed",
      assigned_doctor: "Dr. Omar",
      appointment_date: "2027-12-05",
      start_time: "10:30",
      details: "Routine checkup",
      diagnoses: "N/A"
    },
    {
      id: 2,
      patient_number: 2,
      patient_name: "Mohammad Saleh",
      assigned_doctor: "Dr. Lina",
      appointment_date: "2025-12-10",
      start_time: "14:00",
      details: "Teeth whitening consultation",
      diagnoses: "N/A"
    }
  ],
  staff: [
  {
    id: 1,
    name: "Dr. Omar Khaled",
    position: "Doctor",
    phone: "0791111111",
    email: "omar.khaled@clinic.com"
  },
  {
    id: 2,
    name: "Dr. Lina Mahmoud",
    position: "Doctor",
    phone: "0792222222",
    email: "lina.mahmoud@clinic.com"
  },
  {
    id: 3,
    name: "Dr. Sara Youssef",
    position: "Doctor",
    phone: "0793333333",
    email: "sara.youssef@clinic.com"
  },
  {
    id: 4,
    name: "Ahmad Fawzi",
    position: "Receptionist",
    phone: "0794444444",
    email: "ahmad@clinic.com"
  }
],
tooth_history: [
  // Sarah (patient 1)
  {
    id: 1,
    patient_number: 1,
    tooth_number: "11",
    work: "Composite filling completed",
    date: "2025-11-01"
  },
  {
    id: 2,
    patient_number: 1,
    tooth_number: "26",
    work: "Root canal treatment - session 1",
    date: "2025-11-20"
  },

  // Mohammad (patient 2)
  {
    id: 3,
    patient_number: 2,
    tooth_number: "30",
    work: "Extraction performed",
    date: "2025-10-15"
  },

  // Lana (patient 3)
  {
    id: 4,
    patient_number: 3,
    tooth_number: "12",
    work: "Cleaning session",
    date: "2025-11-04"
  }
],
 files: [
    {
      id: 1,
      patient_number: 1,
      filename: "xray1.png",
      filepath: xray1,            // <-- imported URL
      uploaded_at: "2025-01-01T10:00:00Z",
    },
    {
      id: 2,
      patient_number: 1,
      filename: "bloodtest.png",
      filepath: bloodtest,        // <-- imported URL
      uploaded_at: "2025-02-14T12:20:00Z",
    },
    {
      id: 3,
      patient_number: 2,
      filename: "tooth-image.png",
      filepath: toothimage,       // <-- imported URL
      uploaded_at: "2025-01-10T09:30:00Z",
    },
  ],
  expense_categories: [
  { id: 1, name: "Utilities" },
  { id: 2, name: "Supplies" },
  { id: 3, name: "Maintenance" },
  { id: 4, name: "Staff" }
],
expenses: [
  {
    id: 1,
    category_id: 1,
    category_name: "Utilities",
    description: "Electricity bill",
    amount: 120.50,
    date: "2025-01-05",
    notes: "Paid online",
    attachment_url: null,
  },
  {
    id: 2,
    category_id: 2,
    category_name: "Supplies",
    description: "Dental cleaning tools",
    amount: 89.99,
    date: "2025-01-10",
    notes: "",
    attachment_url: null,
  },
  {
    id: 3,
    category_id: 3,
    category_name: "Maintenance",
    description: "Chair repair",
    amount: 45.00,
    date: "2025-01-15",
    notes: "",
    attachment_url: null,
  },
],

};

// Add a patient
export function demoAddPatient(patient) {
  const nextId = demoDB.patients.length + 1;
  const formattedPatient = {
    patient_number: nextId,
    marital_status: "N/A",
    extra_information: "",
    drug_allergies: "",
    food_allergies: "",
    medical_history: "",
    surgical_history: "",
    chronic_medication: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
    next_appointment: "N/A",
    previous_appointment: "N/A",
    ...patient,
  };
  demoDB.patients.push(formattedPatient);
  return formattedPatient;
}

// Get patients
export function demoGetPatients() {
  return demoDB.patients;
}

// Update patient
export function demoUpdatePatient(patient_number, updatedFields) {
  const index = demoDB.patients.findIndex(p => p.patient_number === patient_number);
  if (index === -1) return null;

  demoDB.patients[index] = {
    ...demoDB.patients[index],
    ...updatedFields,
  };

  return demoDB.patients[index];
}

export function demoGetAppointments() {
  return demoDB.appointments;
}

export function demoAddAppointment(appt) {
  const nextId = demoDB.appointments.length + 1;

  const formatted = {
    id: nextId,
    patient_number: appt.patient_number,
    patient_name: appt.patient_name,
    assigned_doctor: appt.assigned_doctor,
    appointment_date: appt.appointment_date,
    start_time: appt.start_time,
    details: appt.details || "",
    diagnoses: appt.diagnoses || ""
  };

  demoDB.appointments.push(formatted);
  return formatted;
}

export function demoDeleteAppointment(id) {
  demoDB.appointments = demoDB.appointments.filter(a => a.id !== id);
}

export function demoGetStaff() {
  return demoDB.staff;
}

export function demoAddStaff(staff) {
  const nextId = demoDB.staff.length + 1;
  const formatted = {
    id: nextId,
    ...staff
  };
  demoDB.staff.push(formatted);
  return formatted;
}

export function demoGetToothHistory(patient_number) {
  return demoDB.tooth_history.filter(h => h.patient_number === patient_number);
}

export function demoAddToothHistory(workItem) {
  const nextId = demoDB.tooth_history.length + 1;
  const formatted = {
    id: nextId,
    ...workItem,
  };
  demoDB.tooth_history.push(formatted);
  return formatted;
}

export function demoUpdateToothHistory(id, updated) {
  const index = demoDB.tooth_history.findIndex(h => h.id === id);
  if (index === -1) return null;

  demoDB.tooth_history[index] = {
    ...demoDB.tooth_history[index],
    ...updated,
  };

  return demoDB.tooth_history[index];
}

export function demoDeleteToothHistory(id) {
  demoDB.tooth_history = demoDB.tooth_history.filter(h => h.id !== id);
}

export function demoGetPatientFiles(patient_number) {
  return demoDB.files.filter(f => f.patient_number === patient_number);
}

export function demoAddPatientFile(patient_number, file) {
  const nextId = demoDB.files.length + 1;

  const newFile = {
    id: nextId,
    patient_number,
    filename: file.name,
    filepath: URL.createObjectURL(file), // Temporary blob in browser
    uploaded_at: new Date().toISOString()
  };

  demoDB.files.push(newFile);
  return newFile;
}

export function demoDeletePatientFile(id) {
  demoDB.files = demoDB.files.filter(f => f.id !== id);
}

export function demoGetExpenseCategories() {
  return demoDB.expense_categories;
}

export function demoAddExpenseCategory(name) {
  const nextId = demoDB.expense_categories.length + 1;
  const newCat = { id: nextId, name };
  demoDB.expense_categories.push(newCat);
  return newCat;
}

export function demoUpdateExpenseCategory(id, name) {
  const c = demoDB.expense_categories.find(cat => cat.id === id);
  if (c) c.name = name;
  return c;
}

export function demoGetExpenses() {
  return demoDB.expenses;
}

export function demoAddExpense(expense) {
  const nextId = demoDB.expenses.length + 1;
  const cat = demoDB.expense_categories.find(c => c.id === expense.category_id);

  const formatted = {
    id: nextId,
    category_id: expense.category_id,
    category_name: cat?.name || "",
    description: expense.description || "",
    amount: parseFloat(expense.amount),
    date: expense.date,
    notes: expense.notes || "",
    attachment_url: expense.file ? URL.createObjectURL(expense.file) : null,
  };

  demoDB.expenses.push(formatted);
  return formatted;
}

export function demoUpdateExpense(id, updated) {
  const index = demoDB.expenses.findIndex(e => e.id === id);
  if (index === -1) return null;

  const cat = demoDB.expense_categories.find(c => c.id === updated.category_id);

  demoDB.expenses[index] = {
    ...demoDB.expenses[index],
    ...updated,
    category_name: cat?.name || demoDB.expenses[index].category_name,
    attachment_url: updated.file
      ? URL.createObjectURL(updated.file)
      : demoDB.expenses[index].attachment_url
  };

  return demoDB.expenses[index];
}

export function demoDeleteExpense(id) {
  demoDB.expenses = demoDB.expenses.filter(e => e.id !== id);
}
