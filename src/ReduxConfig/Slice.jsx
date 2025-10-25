import { createSlice } from "@reduxjs/toolkit"

const initialState={
    users: [
  {
    id: 1,
    username: "adam_dev",
    email: "adam@mail.com",
    level: "advanced",
    score: 95,
    tasks: [
      { id: 101, title: "Fix authentication bug", status: "completed" },
      { id: 102, title: "Refactor Redux store", status: "in-progress" },
      { id: 103, title: "Implement dark mode", status: "pending" },
    ],
  },
  {
    id: 2,
    username: "sara_ui",
    email: "sara@mail.com",
    level: "intermediate",
    score: 82,
    tasks: [
      { id: 104, title: "Design homepage layout", status: "completed" },
      { id: 105, title: "Update color palette", status: "pending" },
    ],
  },
  {
    id: 3,
    username: "john_begin",
    email: "john@mail.com",
    level: "beginner",
    score: 60,
    tasks: [
      { id: 106, title: "Learn React basics", status: "in-progress" },
      { id: 107, title: "Understand useEffect", status: "pending" },
    ],
  },
  {
    id: 4,
    username: "lina_fullstack",
    email: "lina@mail.com",
    level: "advanced",
    score: 98,
    tasks: [
      { id: 108, title: "Deploy app to Vercel", status: "completed" },
      { id: 109, title: "Optimize backend API", status: "in-progress" },
      { id: 110, title: "Integrate Stripe payments", status: "pending" },
    ],
  },
  {
    id: 5,
    username: "omar_js",
    email: "omar@mail.com",
    level: "intermediate",
    score: 76,
    tasks: [
      { id: 111, title: "Fix navbar responsiveness", status: "completed" },
      { id: 112, title: "Implement form validation", status: "in-progress" },
    ],
  },
  {
    id: 6,
    username: "nina_start",
    email: "nina@mail.com",
    level: "beginner",
    score: 55,
    tasks: [
      { id: 113, title: "Learn Git basics", status: "completed" },
      { id: 114, title: "Practice JavaScript loops", status: "pending" },
    ],
  },
  {
    id: 7,
    username: "alex_backend",
    email: "alex@mail.com",
    level: "advanced",
    score: 93,
    tasks: [
      { id: 115, title: "Refactor database schema", status: "completed" },
      { id: 116, title: "Implement caching system", status: "in-progress" },
      { id: 117, title: "Set up Docker containers", status: "pending" },
    ],
  },
  {
    id: 8,
    username: "maya_design",
    email: "maya@mail.com",
    level: "intermediate",
    score: 80,
    tasks: [
      { id: 118, title: "Redesign login page", status: "completed" },
      { id: 119, title: "Improve UI accessibility", status: "pending" },
    ],
  },
  {
    id: 9,
    username: "peter_newbie",
    email: "peter@mail.com",
    level: "beginner",
    score: 58,
    tasks: [
      { id: 120, title: "Complete HTML tutorial", status: "completed" },
      { id: 121, title: "Practice CSS grid", status: "in-progress" },
    ],
  },
  {
    id: 10,
    username: "karim_ai",
    email: "karim@mail.com",
    level: "advanced",
    score: 96,
    tasks: [
      { id: 122, title: "Train ML model", status: "in-progress" },
      { id: 123, title: "Optimize model accuracy", status: "pending" },
      { id: 124, title: "Deploy ML API", status: "completed" },
    ],
  },
  {
    id: 11,
    username: "ella_front",
    email: "ella@mail.com",
    level: "intermediate",
    score: 78,
    tasks: [
      { id: 125, title: "Fix CSS bugs", status: "completed" },
      { id: 126, title: "Convert layout to Flexbox", status: "in-progress" },
    ],
  },
  {
    id: 12,
    username: "liam_begin",
    email: "liam@mail.com",
    level: "beginner",
    score: 62,
    tasks: [
      { id: 127, title: "Watch JavaScript crash course", status: "completed" },
      { id: 128, title: "Create a simple to-do app", status: "pending" },
    ],
  },
  {
    id: 13,
    username: "sofia_data",
    email: "sofia@mail.com",
    level: "advanced",
    score: 91,
    tasks: [
      { id: 129, title: "Analyze user data", status: "completed" },
      { id: 130, title: "Build dashboard charts", status: "in-progress" },
      { id: 131, title: "Integrate analytics API", status: "pending" },
    ],
  },
  {
    id: 14,
    username: "noah_systems",
    email: "noah@mail.com",
    level: "intermediate",
    score: 84,
    tasks: [
      { id: 132, title: "Update system logs", status: "completed" },
      { id: 133, title: "Test server performance", status: "in-progress" },
    ],
  },
  {
    id: 15,
    username: "mia_begin",
    email: "mia@mail.com",
    level: "beginner",
    score: 59,
    tasks: [
      { id: 134, title: "Learn CSS animations", status: "in-progress" },
      { id: 135, title: "Build portfolio page", status: "pending" },
    ],
  },
  {
    id: 16,
    username: "jack_full",
    email: "jack@mail.com",
    level: "advanced",
    score: 97,
    tasks: [
      { id: 136, title: "Integrate payment gateway", status: "completed" },
      { id: 137, title: "Setup GraphQL API", status: "in-progress" },
      { id: 138, title: "Deploy to AWS", status: "pending" },
    ],
  },
  {
    id: 17,
    username: "lucy_inter",
    email: "lucy@mail.com",
    level: "intermediate",
    score: 79,
    tasks: [
      { id: 139, title: "Build landing page", status: "completed" },
      { id: 140, title: "Add responsive design", status: "pending" },
    ],
  },
  {
    id: 18,
    username: "ethan_start",
    email: "ethan@mail.com",
    level: "beginner",
    score: 57,
    tasks: [
      { id: 141, title: "Learn terminal commands", status: "completed" },
      { id: 142, title: "Practice CSS layout", status: "in-progress" },
    ],
  },
  {
    id: 19,
    username: "dina_cloud",
    email: "dina@mail.com",
    level: "advanced",
    score: 94,
    tasks: [
      { id: 143, title: "Configure CI/CD pipeline", status: "completed" },
      { id: 144, title: "Migrate app to cloud", status: "in-progress" },
      { id: 145, title: "Set up monitoring tools", status: "pending" },
    ],
  },
  {
    id: 20,
    username: "leo_dev",
    email: "leo@mail.com",
    level: "intermediate",
    score: 81,
    tasks: [
      { id: 146, title: "Improve error handling", status: "in-progress" },
      { id: 147, title: "Review pull requests", status: "pending" },
    ],
  },
]
}

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers: {
        addUser:(state,action)=>{
          const {username,email,level}=action.payload;
          let newUser={id: state.users.length+1,username,email,level,tasks: [],score: 0};
          state.users.push(newUser);
        }
    }
});
export const {addUser}=userSlice.actions;
export default userSlice.reducer;