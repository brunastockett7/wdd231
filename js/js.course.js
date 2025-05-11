// Array of course objects
const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 231", name: "Frontend Development II", credits: 3, completed: false },
  { code: "CSE 121b", name: "JavaScript Language", credits: 3, completed: true },
  { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: false }
];

// DOM Elements
const container = document.getElementById("courseContainer");
const creditOutput = document.getElementById("totalCredits");

// Render function
function renderCourses(list) {
  container.innerHTML = "";
  let totalCredits = 0;

  list.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    card.classList.add(course.completed ? "completed" : "incomplete");

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
    `;

    container.appendChild(card);
    totalCredits += course.credits;
  });

  creditOutput.textContent = totalCredits;
}

// Button event listeners
document.getElementById("all").addEventListener("click", () => renderCourses(courses));
document.getElementById("wdd").addEventListener("click", () => {
  const wddCourses = courses.filter(course => course.code.startsWith("WDD"));
  renderCourses(wddCourses);
});
document.getElementById("cse").addEventListener("click", () => {
  const cseCourses = courses.filter(course => course.code.startsWith("CSE"));
  renderCourses(cseCourses);
});

// Initial render on page load
renderCourses(courses);
