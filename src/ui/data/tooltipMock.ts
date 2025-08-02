import type { Guide } from "../types/guide.interface";

export const guides: Guide[] = [
  {
    page: "list",
    tooltips: [
      {
        id: "input-search",
        content: "Search for a user by name or email here.",
        action: "next",
      },
      {
        id: "button-add",
        content: "Click here to add a new user.",
        action: "next",
      },
      {
        id: "button-1",
        content: "This column displays the user's name.",
        action: "next",
      },
      {
        id: "table-row",
        content: "Click a row to view user details or perform actions.",
        action: "finish",
      },
    ],
  },
  {
    page: "form",
    tooltips: [
      {
        id: "input-name",
        content: "Enter the user's full name here.",
        action: "next",
      },
      {
        id: "input-email",
        content: "Enter the user's email address here.",
        action: "next",
      },
      {
        id: "submit-button",
        content: "Click here to submit the form and save the user.",
        action: "finish",
      },
    ],
  },
];
