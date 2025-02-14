const employee = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Complete project report",
        description: "Prepare the project report for Q1 and submit it.",
        date: "2025-01-23",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Attend the weekly team meeting to discuss progress.",
        date: "2025-01-24",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Update client database",
        description: "Add recent client interactions to the database.",
        date: "2025-01-22",
        category: "Data Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Prepare for presentation",
        description: "Prepare slides for the upcoming project presentation.",
        date: "2025-01-25",
        category: "Presentations",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code review",
        description: "Review code submitted by team members.",
        date: "2025-01-23",
        category: "Code Review",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Bug fixing",
        description: "Fix bugs reported in the latest build.",
        date: "2025-01-22",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Create API endpoints",
        description: "Develop RESTful API endpoints for new features.",
        date: "2025-01-24",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Content writing",
        description: "Write content for the company blog.",
        date: "2025-01-21",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Social media management",
        description: "Post updates on the company's social media channels.",
        date: "2025-01-23",
        category: "Social Media",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "System maintenance",
        description: "Perform routine maintenance on office systems.",
        date: "2025-01-21",
        category: "IT Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Deploy new features",
        description: "Deploy new features to the staging server.",
        date: "2025-01-24",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Monitor server health",
        description: "Ensure server uptime and resolve any issues.",
        date: "2025-01-22",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];



export const setLocalStorage = () => {
  localStorage.setItem('employee', JSON.stringify(employee));
  localStorage.setItem('admin', JSON.stringify(admin));

}


export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employee'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employee, admin };
}