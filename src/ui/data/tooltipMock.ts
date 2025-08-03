import type { Guide } from "../types/guide.interface";

export const guides: Guide[] = [
  {
    page: "list",
    tooltips: [
      {
        id: "input-search",
        title: "User Search",
        content:
          "Use this search bar to quickly find users by typing their name or email. Start typing to see filtered results instantly.",
        action: "next",
      },
      {
        id: "button-add",
        title: "Add a New User",
        content:
          "Click this button to navigate to the user registration form and add a new user to the list.",
        action: "next",
      },
      {
        id: "users-table",
        title: "Users Table Header",
        content:
          "This is the header of the users table. Below, you'll find detailed information for each user in the list.",
        action: "next",
      },
      {
        id: "column-name",
        title: "Name Column",
        content:
          "This column displays the full name of each user. Click on a name to view more details (feature coming soon).",
        action: "next",
      },
      {
        id: "column-email",
        title: "Email Column",
        content:
          "This column shows the email address associated with each user. Ensure emails are unique and valid.",
        action: "next",
      },
      {
        id: "column-birthday",
        title: "Birthday Column",
        content:
          "This column displays the user's date of birth in DD/MM/YYYY format.",
        action: "finish",
      },
    ],
  },
  {
    page: "form",
    tooltips: [
      {
        id: "input-name",
        title: "Full Name Field",
        content:
          "Enter the complete name of the user here. This field is mandatory for creating a user profile.",
        action: "next",
      },
      {
        id: "input-email",
        title: "Email Address Field",
        content:
          "Provide a valid email address for the user. Make sure there are no typos as this will be used for communication.",
        action: "next",
      },
      {
        id: "input-birthday",
        title: "Birthday Field",
        content:
          "Enter the user's date of birth in DD/MM/YYYY format. The field has an input mask to guide you.",
        action: "next",
      },
      {
        id: "cancel-button",
        title: "Cancel Button",
        content:
          "If you wish to discard changes and go back to the previous page, click here.",
        action: "next",
      },
      {
        id: "submit-button",
        title: "Save User",
        content:
          "Once all fields are filled correctly, click here to save the new user into the system.",
        action: "finish",
      },
    ],
  },
];
