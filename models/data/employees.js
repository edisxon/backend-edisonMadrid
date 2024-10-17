import "dotenv/config.js"
import "../../config/database.js"
import Employee from "../Employee.js"

const employees = [
    { name: "John Smith", age: 28, position: "Software Engineer", salary: 50000 },
    { name: "Emily Johnson", age: 35, position: "Project Manager", salary: 65000 },
    { name: "Michael Brown", age: 42, position: "Product Designer", salary: 58000 },
    { name: "Sarah Davis", age: 30, position: "UX Designer", salary: 54000 },
    { name: "David Wilson", age: 45, position: "CTO", salary: 120000 },
    { name: "Jessica Miller", age: 32, position: "Data Scientist", salary: 75000 },
    { name: "Daniel Taylor", age: 27, position: "Backend Developer", salary: 52000 },
    { name: "Laura Martinez", age: 38, position: "HR Manager", salary: 60000 },
    { name: "James Anderson", age: 50, position: "DevOps Engineer", salary: 70000 },
    { name: "Olivia Thomas", age: 25, position: "Marketing Specialist", salary: 45000 },
    { name: "Andrew Lee", age: 34, position: "Front-End Developer", salary: 55000 },
    { name: "Sophia Harris", age: 29, position: "QA Engineer", salary: 50000 },
    { name: "Christopher Young", age: 41, position: "Sales Director", salary: 90000 },
    { name: "Amanda Clark", age: 33, position: "Business Analyst", salary: 62000 },
    { name: "Matthew Lewis", age: 26, position: "Junior Developer", salary: 40000 },
    { name: "Isabella King", age: 31, position: "Operations Manager", salary: 68000 },
    { name: "Ethan Walker", age: 39, position: "Scrum Master", salary: 63000 },
    { name: "Mia Scott", age: 37, position: "Content Strategist", salary: 57000 },
    { name: "Alexander Green", age: 48, position: "IT Support Specialist", salary: 52000 },
    { name: "Charlotte Adams", age: 24, position: "Graphic Designer", salary: 48000 }
];

Employee.insertMany(employees)  
  