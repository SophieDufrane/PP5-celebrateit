# CelebrateIt

![Mockup](documentation/other/mockup_responsive.png)

## Table of Contents

1. [Project Overview](#1-project-overview)

2. [User Experience (UX)](#2-user-experience-ux)

   - [2.1 Strategy](#21-strategy)
   - [2.2 Scope](#22-scope)
   - [2.3 System Architecture](#23-system-architecture)
   - [2.4 Skeleton](#24-skeleton)
   - [2.5 Surface](#25-surface)

3. [Features](#3-features)

   - [Implemented Features](#implemented-features)
   - [Potential Future Enhancements](#potential-future-enhancements)

4. [Technologies Used](#4-technologies-used)

   - [4.1 Backend](#41-backend)
   - [4.2 Frontend](#42-frontend)
   - [4.3 Deployment & Tools](#43-deployment--tools)

5. [Development & Project Planning](#5-development--project-planning)

   - [5.1 Agile methodology]()
   - [5.2 Backend Code Structure]()
   - [5.3 Frontend Component Structure]()

6. [Testing](#6-testing)

   - [6.1 Back-End Application Testing](#61-back-end-application-testing)
   - [6.2 Front-End Application Testing](#62-front-end-application-testing)
   - [6.3 Validators](#63-validators)
   - [6.4 Bugs and Fixes](#64-bugs-and-fixes)
   - [6.5 UI/UX Improvements](#65-uiux-improvements)

7. [Deployment](#7-deployment)

   - [7.1 Backend Deployment](#71-backend-deployment-initial-phase)
   - [7.2 Frontend Deployment](#72-frontend-deployment-static-build-integration)
   - [7.3 Forking and Cloning](#73-forking-and-cloning)

8. [Credits](#8-credit)
   - [Content & Resources](#content--resources)
   - [Acknowledgements](#acknowledgements)

---

## 1. Project Overview

### Brief Description

[CelebrateIt](https://celebrateit-866641373084.herokuapp.com/) is a mock employee recognition platform inspired by the solutions offered by [Workhuman](https://www.workhuman.com). It allows employees to share recognition stories, nominate colleagues for their achievements, and engage with content through likes and comments. By fostering a sense of appreciation and collaboration, CelebrateIt mirrors the functionality and purpose of modern social recognition platforms.

The project was built with the goal of designing a full-stack, token-authenticated web application using Django REST (backend) and React (frontend). It serves as a learning and portfolio project to demonstrate key development skills, including CRUD operations, component-based design, RESTful API integration, and deployment to Heroku.

### Target Audience

CelebrateIt is designed for:

- **Employees**: To feel valued and connected by sharing their achievements and recognizing contributions from their colleagues.

- **HR Teams**: To track and analyze recognition trends, fostering a more engaged workforce while identifying top performers and recognizing outstanding contributions.

- **Team Leaders and Managers**: To build a positive team culture by facilitating recognition and appreciation among their team.

- **Companies**: That wish to improve employee satisfaction and retention by integrating a sense of community into their workplace culture.

---

## 2. User Experience (UX)

### 2.1 Strategy

To plan the project development, I adopted an Agile methodology centered on user experience. By using user stories grouped into EPICs, the project is broken down into smaller, manageable pieces, ensuring a structured and user-focused approach.

#### **EPIC – Getting Started & Joining the Platform**

| **ID**                                                          | **Theme**                | **User Story**                                                                       | **Prioritisation** |
| --------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------ | ------------------ |
| [#1](https://github.com/SophieDufrane/PP5-celebrateit/issues/1) | Account Registration     | Users can create an account with basic credentials to join the CelebrateIt platform. | Must Have          |
| [#2](https://github.com/SophieDufrane/PP5-celebrateit/issues/2) | Login to Account         | Users can securely log into their account to access features.                        | Must Have          |
| [#4](https://github.com/SophieDufrane/PP5-celebrateit/issues/4) | Log out of Account       | Users can securely log out to protect their account.                                 | Must Have          |
| [#6](https://github.com/SophieDufrane/PP5-celebrateit/issues/6) | Conditional Menu Options | The menu adapts to login status, showing relevant options.                           | Should Have        |

---

#### **EPIC – Recognition & Nomination CRUD**

| **ID**                                                            | **Theme**               | **User Story**                                                                                | **Prioritisation** |
| ----------------------------------------------------------------- | ----------------------- | --------------------------------------------------------------------------------------------- | ------------------ |
| [#11](https://github.com/SophieDufrane/PP5-celebrateit/issues/11) | Create a Recognition    | Users can create a recognition story to celebrate a colleague or a team.                      | Must Have          |
| [#13](https://github.com/SophieDufrane/PP5-celebrateit/issues/13) | Edit Recognition        | Users can edit their own recognition content.                                                 | Must Have          |
| [#14](https://github.com/SophieDufrane/PP5-celebrateit/issues/14) | Delete Recognition      | Users can delete their own recognition story.                                                 | Must Have          |
| [#15](https://github.com/SophieDufrane/PP5-celebrateit/issues/15) | View Recognition Detail | Users can view the full content of a recognition story.                                       | Should Have        |
| [#28](https://github.com/SophieDufrane/PP5-celebrateit/issues/28) | View Recognition Feed   | Users can browse all recognitions in the feed.                                                | Must Have          |
| [#27](https://github.com/SophieDufrane/PP5-celebrateit/issues/27) | Create a Nomination     | Users can nominate colleagues to acknowledge their work and contributions                     | Must Have          |
| [#29](https://github.com/SophieDufrane/PP5-celebrateit/issues/29) | Edit Nomination         | Users can edit their own nomination content and tags.                                         | Must Have          |
| [#30](https://github.com/SophieDufrane/PP5-celebrateit/issues/30) | Delete Nomination       | Users can delete their own nomination.                                                        | Must Have          |
| [#31](https://github.com/SophieDufrane/PP5-celebrateit/issues/31) | View Nomination Detail  | Users can view full content of a nomination.                                                  | Should Have        |
| [#32](https://github.com/SophieDufrane/PP5-celebrateit/issues/32) | View Nomination Feed    | Users can browse all nominations in the feed.                                                 | Must Have          |
| [#12](https://github.com/SophieDufrane/PP5-celebrateit/issues/12) | View Own Posts          | Users can view the full list of their own recognitions and nominations on their profile page. | Could Have         |

---

#### **EPIC – Engaging with People & Posts**

| **ID**                                                            | **Theme**                | **User Story**                                                                                        | **Prioritisation** |
| ----------------------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------- | ------------------ |
| [#16](https://github.com/SophieDufrane/PP5-celebrateit/issues/16) | Like a recognition       | Users can like (and unlike) a recognition to show appreciation.                                       | Should Have        |
| [#17](https://github.com/SophieDufrane/PP5-celebrateit/issues/17) | Comment on a recognition | Users can comment on recognitions to engage with content and colleagues.                              | Must Have          |
| [#33](https://github.com/SophieDufrane/PP5-celebrateit/issues/33) | Edit/Delete Comments     | Users can edit or remove their own comments.                                                          | Should Have        |
| [#8](https://github.com/SophieDufrane/PP5-celebrateit/issues/8)   | Search for Colleagues    | Users can search for other colleagues by name, or filter by department, to access their profile page. | Should Have        |

---

#### **EPIC – Managing My Profile & Network**

| **ID**                                                            | **Theme**            | **User Story**                                                      | **Prioritisation** |
| ----------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------- | ------------------ |
| [#22](https://github.com/SophieDufrane/PP5-celebrateit/issues/22) | Edit My Profile      | Users can update their avatar and bio to personalise their profile. | Could Have         |
| [#21](https://github.com/SophieDufrane/PP5-celebrateit/issues/21) | View Public Profiles | Users can view other profiles details and shared posts.             | Must Have          |

---

#### UX Design Principles

User experience was prioritized by keeping the interface clean, predictable, and intuitive. The dual-feed layout, clear form feedback, dropdown menus, and use of color were guided by accessibility and usability best practices. The decision to split recognitions and nominations into distinct components also stems from a UX-first mindset: each content type needed to be readable, skimmable, and visually distinct.

### 2.2 Scope

All features listed above are prioritised using the **MoSCoW Framework** to guide development focus and ensure a successful MVP.

The current breakdown is:

- **Must Have** (13 / 21 → 62%): Core functionality required for project success.

- **Should Have** (6 / 21 → 28%): Enhancements that improve usability and experience.

- **Could Have** (2 / 21 → 10%): Nice-to-have features if time allows.

- **Won’t Have**: Explicitly removed from scope.

This distribution ensures alignment with project constraints and focus, while still allowing space for polish and stretch goals where appropriate.

#### Entity Relationship Diagram (ERD)

The ERD provides a high-level overview of the database structure, including the relationships between key models such as users, profiles, recognitions, nominations, tags, comments, and likes. It was designed early in the planning phase to ensure consistent field usage and API compatibility, though it evolved slightly during development to reflect emerging needs and refinements.

![ERD](documentation/other/erd_celebrateit.png)

#### Flowchart for User Navigation

This section provides a visual representation of the user navigation flow within CelebrateIt. The flowchart captures how users interact with the platform, including key actions such as logging in, browsing stories, creating recognition posts, and navigating between profile pages.

![Flowchart](documentation/other/flowchart_celebrateit.png)

### 2.3 System Architecture

CelebrateIt follows a decoupled architecture, separating the backend and frontend into two distinct layers:

- **Backend**: Built with Django REST Framework (DRF), the backend exposes a RESTful API. It handles authentication, user profiles, nominations, recognitions, comments, likes, tag/category and department logic. The API returns JSON responses that can be consumed by any client.
- **Frontend**: Developed using React, the frontend interacts with the API via `axios`. It handles routing with React Router, manages state locally (with hooks), and presents a dynamic interface to the user.
- **Data Flow**: React fetches data from DRF endpoints and displays it based on the user's interactions. Forms (e.g. create/edit nomination) submit data back to the API to update the database.
- **Authentication**: User sessions and permissions are managed via Django Allauth and token-based headers on the frontend.
- **Media and Hosting**:
  - User-uploaded images are stored on **Cloudinary**
  - Both frontend and backend are deployed via **Heroku** using a single monorepo setup, ensuring a unified deployment pipeline and simplified maintenance.

This architecture supports scalability and flexibility.

### 2.4 Skeleton

#### Wireframes & Final Page Layouts

The following wireframes outline the intended structure and layout of the main screens in CelebrateIt, helping to guide the user interface design and ensure a coherent navigation flow across the app.

<details>
   <summary>Authentification Form</summary>

   <p>
      <img src="documentation/frontend/wireframe/auth.png" alt="Authentification Form" />
   </p>
</details>

<details>
   <summary>Home Feed Page</summary>

   <p>
      <img src="documentation/frontend/wireframe/home_feed.png" alt="Home Feed Page" />
   </p>
</details>

<details>
   <summary>Recognition / Nomination Detail Page</summary>

   <p>
      <img src="documentation/frontend/wireframe/detail_page.png" alt="Recognition and Nomination Detail Page" />
   </p>
</details>

<details>
   <summary>User Profile Page</summary>

   <p>
      <img src="documentation/frontend/wireframe/profile.png" alt="User Profile Page" />
   </p>
</details>

#### Final UI Screenshots

Below are the final implementations of the main pages. While they were based on the original wireframes, the layouts evolved during development to improve usability, responsiveness, and overall user experience.

<details>
   <summary>Register a new account</summary>

   <p>
      <img src="documentation/frontend/skeleton/register_form.png" alt="Register Form" />
   </p>
</details>

<details>
   <summary>Log in to an existing Account</summary>

   <p>
      <img src="documentation/frontend/skeleton/login_form.png" alt="Log in form" />
   </p>
</details>

<details>
   <summary>Home Feed Page</summary>

   <p>
      <img src="documentation/frontend/skeleton/home_feed_page.png" alt="Home Feed Page" />
   </p>
</details>

<details>
   <summary>Create Recognition Form</summary>

   <p>
      <img src="documentation/frontend/skeleton/recognition_create.png" alt="Create Recognition Form" />
   </p>
</details>

<details>
   <summary>Create Nomination Form</summary>

   <p>
      <img src="documentation/frontend/skeleton/nomination_create.png" alt="Create Nomination Form" />
   </p>
</details>

<details>
   <summary>Recognition Detail Page</summary>

   <p>
      <img src="documentation/frontend/skeleton/recognition_detail_page.png" alt="Recognition Detail Page" />
   </p>
</details>

<details>
   <summary>Nomination Detail Page</summary>

   <p>
      <img src="documentation/frontend/skeleton/nomination_detail_page.png" alt="Nomination Detail Page" />
   </p>
</details>

<details>
   <summary>User Profile Page</summary>

   <p>
      <img src="documentation/frontend/skeleton/user_profile.png" alt="User Profile Page" />
   </p>
</details>

<details>
   <summary>Edit User Profile Form</summary>

   <p>
      <img src="documentation/frontend/skeleton/profile_edit.png" alt="Edit User Profile Form" />
   </p>
</details>

### 2.5 Surface

#### Typography & Colour Scheme

CelebrateIt builds on the visual identity of the previous Rewards Platform (PP4 - RedeemIt), maintaining a clean, user-friendly interface with a more social and collaborative tone.

The colour palette echoes tech industry trends while adding warmth to reflect human connection in the workplace. Fonts were chosen for readability and a modern feel.

#### Colour Palette

| **Colour** | **Name**         |
| ---------- | ---------------- |
| `#300E82`  | Persian Indigo   |
| `#586BBE`  | Savoy Blue       |
| `#9B6B82`  | Mountbatten Pink |
| `#DECD62`  | Citron           |
| `#484848`  | Davy's Grey      |

![Colour Inspiration](documentation/other/color_scheme.png)

<details>
  <summary>Colours inspiration from Workhuman</summary>

   <p>
      <img src="documentation/other/colours_inspiration_from_workhuman.png" alt="Colours inspiration from Workhuman" />
   </p>
</details>

### Typography

- **Primary Font**: _Poppins_ – main body text
- **Secondary Font**: _Quicksand_ – used for highlights and UI accents

---

## 3. Features

### Implemented Features

- Secure user registration and login via Django Allauth
- Conditional navigation menu that adapts to auth state
- Create, edit, delete, and view **Recognition** stories
- Create, edit, delete, and view **Nominations** with required tags
- Combined feed with toggle to switch between Recognitions and Nominations
- Detail pages for each recognition and nomination
- Real-time **like** system for recognitions
- **Comment** system with edit and delete options for authors
- Public profile pages showing user's info and contributions
- Logged-in users can **edit their avatar and bio**
- **Search bar** to find colleagues from the feed by name or filter by department

### Potential Future Enhancements

- **Comment and Like Functionality on Nominations**  
  Extend the interactive features available on recognition to nominations, allowing users to express appreciation or share supportive comments on nomination cards. Initially, nominations were intentionally designed without these interactions to maintain a more formal tone. However, user testing revealed that enabling comments and likes significantly enhanced the sense of engagement and recognition within the platform

- **Quick Nomination Button from People Sidebar**  
  Allow users to click a “Nominate” button directly next to a coworker’s name in the sidebar search results, pre-filling the nominee field on the nomination form. This feature has also been implemented on user profile pages to streamline the nomination process and gently encourage users to recognize their peers more easily.

- **Tag-Based Visual Filters**  
  This enhancement would include two improvements related to tags:

In the Create Nomination form, the existing dropdown could be replaced with a row of visually distinctive tag badges, making the selection process more intuitive and engaging.

In the Nominations Feed, a horizontal tag bar could allow users to filter nominations by category using the same badge-style icons, helping surface posts by theme (e.g., Innovation, Leadership, Teamwork) and promoting broader engagement.

- **Department-Based Feed Filters**  
  Introduce a filter system to view recognitions and nominations by department, helping teams focus on their own group’s stories and achievements.

- **Saved Filters or Personal Feed Preferences**  
  Allow users to set preferred filters (e.g., tags, people, or departments) that persist between sessions for a more personalized experience.

---

## 4. Technologies Used

### 4.1. Backend

The backend API was developed using Django and the Django REST Framework:

- **Django** – Python-based web framework for rapid development and clean architecture.
- **Django REST Framework** – Used to build RESTful APIs consumed by the frontend.
- **Django Allauth** – Manages user registration, login, logout, and authentication endpoints.
- **PostgreSQL** – Relational database hosted on Heroku.
- **Cloudinary** – Handles media uploads and delivery, especially for user-submitted images.

### 4.2 Frontend

The frontend of CelebrateIt was built using the following technologies:

- **React** – Core library for building user interfaces with reusable components.
- **React Router DOM** – Enables dynamic client-side routing and navigation.
- **Axios** – Handles HTTP requests to the Django REST API.
- **Bootstrap** – Provides a responsive layout foundation and base UI components.
- **CSS Modules** – Used for scoped styling of components and to prevent class name collisions.

#### React Hooks & Architecture

CelebrateIt is built with React functional components and leverages hooks extensively for state management and side effects. `useState` is used for form inputs, toggle states, and interactive features like likes and comments, while `useEffect` handles API data fetching and profile synchronization. The app also uses a `CurrentUserContext` to manage authentication state and token refresh logic globally.  
The component architecture emphasizes separation of concerns: shared layout elements (e.g., `PostLayoutShell`), truly reusable components (`LoadingIndicator`, `MoreDropdown`), and purpose-built forms (`CommentForm`, `EditProfileForm`) help maintain clarity, consistency, and scalability across views.

### 4.3 Deployment & Tools

- **Heroku** – Hosts both the Django REST API backend and the React frontend in a single full-stack deployment.
- **GitHub** – Version control and repository management.
- **Git** – Local version control with atomic commits and branching.
- **VS Code** – Primary code editor with integrated terminal and extensions for React/Django.
- **Browser-based API testing** – API endpoints were tested directly via browser during development using Django’s built-in dev server.
- **Chrome DevTools & Lighthouse** – Used for inspecting layout, debugging responsiveness, and running accessibility/performance audits.

---

## 5. Development & Project Planning

### 5.1 Agile methodology

A **Kanban-style** board was implemented using **GitHub Projects** to visually manage tasks, organize development phases, and track progress through user stories and acceptance criteria.

<details>
  <summary>Kaban Board</summary>

   <p>
      <img src="documentation/other/kaban.png" alt="Kaban Board" />
   </p>
</details>

<details>
  <summary>User Story with Acceptance Criteria and tasks</summary>

   <p>
      <img src="documentation/other/issue.png" alt=">User Story detail" />
   </p>
</details>

### 5.2 Backend Code Structure

The backend is organised into feature-based Django apps:

- `posts/` – Recognition stories with optional image
- `nominations/` – Peer nominations with required tag and nominee selection
- `profiles/` – User profile extensions with department, content and profile image
- `likes/` and `comments/` – Interactions for recognition stories
- `tags/` – Used to categorize nominations
- `department/` – Departments available for user filtering and classification

Each app follows the same structure: `models.py`, `serializers.py`, `views.py`, and `urls.py`. Common permissions are stored in the main `celebrateit_api/permissions.py`.

### 5.3 Frontend Component Structure

#### Refactoring & Naming Decisions

- **Backend Naming: Recognition vs. Nomination**

At the beginning of development, the term **“post”** was used in the backend to represent a **recognition** entry. This naming choice made sense during the early phases, especially given the social-media style feed, but as the project grew to include **nominations** as a distinct content type, this naming led to confusion.

In hindsight:

- The model representing a recognition story should have been named `Recognition` instead of `Post`.
- The use of `post` throughout serializers, views, and URLs became semantically ambiguous once nominations were introduced.
- This naming limitation was preserved to avoid heavy refactoring and potential migration issues after the backend was deployed and development had progressed on the frontend.

Despite the naming mismatch, internal consistency was maintained, and the API functionality remained clear and testable.

- **Frontend Refactor: From Shared Logic to Dedicated Components**

The frontend originally aimed to reuse as many components as possible by treating both **recognitions** and **nominations** under a shared structure. However, the visual and behavioral differences between these two types gradually made this strategy unsustainable.

#### Key Challenges:

- **Component Naming Confusion**: Because recognitions were tied to the `Post` model, the frontend component that handled recognitions was also named `Post`. Meanwhile, a generic shared component also used the name `Post`, leading to frequent confusion during development.
- **Layout Divergence**: Recognitions contain optional images, likes, and comments, while nominations include unique elements like nominee name and tag (with styling).
- **Conditional Logic Overload**: `PostCard` initially handled both types through conditional rendering, which became hard to maintain and error-prone.

#### Refactor Strategy & Results

To address these issues, a structured refactor was implemented:

| Component                              | Purpose                                                                 |
| -------------------------------------- | ----------------------------------------------------------------------- |
| `PostLayoutShell`                      | Shared structural wrapper for both types (title, content, header, etc.) |
| `PostHeader`                           | Extracted component for avatar, name, timestamp, and dropdown menu      |
| `RecognitionCard` (initially PostCard) | Focused solely on recognitions, includes image, like/comment logic      |
| `NominationCard`                       | Handles nominations; renders nominee + tag via `extraContent` prop      |

This refactor provided:

- Clear separation of concerns between recognitions and nominations
- Better maintainability and scalability for future features
- Improved readability of both JSX and CSS modules

#### Component Tree

```

Navbar (component)
├── NavLinks (Home, Recognise, Nominate, Profile, Logout)

HomeFeedPage (container)
├── FeedSection
│     ├── FeedToggleButtons
│     ├── FeedList
│     │     ├── RecognitionCard → PostLayoutShell
│     │     └── NominationCard → PostLayoutShell
├── PeopleSidebar
│     ├── PeopleSearchBar (shared)
│     └── PeopleList

PeopleSearchBar (shared)
└── Autocomplete dropdown logic

PostLayoutShell (container)
├── PostHeader (shared header)
│     ├── Avatar (shared)
│     ├── Display name
│     └── Created at + Dropdown
├── metaTop (optional – nominee + tag)
├── Title
├── Content
├── extraContent (optional – e.g. 'View full post' or tag block)
└── children (optional – image, comments, etc.)

RecognitionDetailPage (container)
├── PostLayoutShell
│     └── children
│           ├── PostImage (optional)
│           ├── CommentForm
│           └── CommentList
├── ConfirmDeleteModal

NominationDetailPage (container)
├── PostLayoutShell
│     └── metaTop (nominee info + tag badge)
├── ConfirmDeleteModal

CreateRecognitionPage / UpdateRecognitionPage (container)
└── PostForm
      └── Image upload (optional)

CreateNominationPage / UpdateNominationPage (container)
└── NominationForm
      ├── PeopleSearchBar (shared) – nominee selector
      └── Tag field

ProfilePage (container)
├── Profile Header
|     ├── Avatar (shared)
|     ├── Username (First and Last name OR fallback username)
|     ├── Department
|     └── Bio / Presentation text
├── ProfileFeedSection (container)
└── EditProfileForm (container)

```

---

## 6. Testing

### 6.1 Back-End Application Testing

The following tests were conducted manually to verify the functionality, permissions, and expected behavior of the back-end API endpoints. All tests were performed using the Django REST Framework browsable API interface through the browser.

Each section below corresponds to a model and includes the tested endpoint, HTTP method, required authentication, expected behavior, actual results, and screenshots where relevant.

#### **User Profiles**

| Endpoint                           | Action                     | Method | Auth | Expected                                         | Actual | Screenshot |
| ---------------------------------- | -------------------------- | ------ | ---- | ------------------------------------------------ | ------ | ---------- |
| `/user-profiles/`                  | List all user profiles     | GET    | ❌   | HTTP 200 OK                                      | ✅     | 1          |
| `/user-profiles/10/`               | View profile detail        | GET    | ❌   | HTTP 200 OK                                      | ✅     | 2          |
| `/user-profiles/9/`                | Update profile (owner)     | PUT    | ✅   | HTTP 200 OK / Profile updated                    | ✅     | 3          |
| `/user-profiles/10/`               | Update profile (not owner) | PUT    | ✅   | HTTP 403 Forbidden / Profile should be read-only | ✅     | 4          |
| `/user-profiles/?department=SALES` | Filter by department       | GET    | ❌   | HTTP 200 OK / Only SALES users                   | ✅     | 5          |
| `/user-profiles/?search=raymond`   | Search by name             | GET    | ❌   | HTTP 200 OK / Only Profiles with \"raymond\"     | ✅     | 6          |

<details>
<summary> 1/ List all user profiles </summary>

![1](documentation/api/profiles/profile_list.png)

</details>

<details>
<summary> 2/ View profile detail </summary>

![2](documentation/api/profiles/profile_not_auth.png)

</details>

<details>
<summary> 3/ Update profile (owner) </summary>

![3](documentation/api/profiles/profile_update_owner.png)

</details>

<details>
<summary> 4/ Update profile (not owner) </summary>

![4](documentation/api/profiles/profile_update_not_owner.png)

</details>

<details>
<summary> 5/ Filter by department </summary>

![5](documentation/api/profiles/profile_list_filter_department.png)

</details>

<details>
<summary> 6/ Search by name </summary>

![6](documentation/api/profiles/profile_list_search_name.png)

</details>

#### **Posts**

| Endpoint                   | Action                    | Method | Auth | Expected                                                  | Actual | Screenshot |
| -------------------------- | ------------------------- | ------ | ---- | --------------------------------------------------------- | ------ | ---------- |
| `/posts/`                  | List all the posts        | GET    | ❌   | HTTP 200 OK                                               | ✅     | 1          |
| `/posts/4/`                | View a post detail        | GET    | ❌   | HTTP 200 OK                                               | ✅     | 2          |
| `/posts/`                  | Create a post             | POST   | ✅   | HTTP 201 Created                                          | ✅     | 3          |
| `/posts/5/`                | Update a post (owner)     | PUT    | ✅   | HTTP 200 OK / Post updated successfully                   | ✅     | 4          |
| `/posts/1/`                | Update a post (not owner) | GET    | ✅   | HTTP 403 Forbidden / Post should be read-only             | ✅     | 5          |
| `/posts/2/`                | Delete a post (owner)     | DELETE | ✅   | HTTP 204 No Content                                       | ✅     | 6          |
| `/posts/1/`                | Delete a post (not owner) | DELETE | ✅   | HTTP 403 Forbidden / Post should be read-only             | ✅     | 7          |
| `/posts/?search=raymond`   | Search by name            | GET    | ❌   | HTTP 200 OK / Only posts with \"raymond\"                 | ✅     | 8          |
| `/posts/?department=SALES` | Filter by department      | GET    | ❌   | HTTP 200 OK / Only posts from users in department "SALES" | ✅     | 9          |

<details>
<summary> 1/ List all the posts </summary>

![1](documentation/api/posts/posts_list.png)

</details>

<details>
<summary> 2/ View a post detail </summary>

![2](documentation/api/posts/posts_detail_not_auth.png)

</details>

<details>
<summary> 3/ Create a post </summary>

![3](documentation/api/posts/posts_create.png)

</details>

<details>
<summary> 4/ Update a post (owner) </summary>

![4](documentation/api/posts/posts_update_owner.png)

</details>

<details>
<summary> 5/ Update a post (not owner) </summary>

![5](documentation/api/posts/posts_update_not_owner.png)

</details>

<details>
<summary> 6/ Delete a post (owner) </summary>

![6](documentation/api/posts/posts_delete.png)

</details>

<details>
<summary> 7/ Delete a post (not owner) </summary>

![7](documentation/api/posts/posts_delete_not_owner.png)

</details>

<details>
<summary> 8/ Search by name </summary>

![8](documentation/api/posts/posts_search_name.png)

</details>

<details>
<summary> 9/ Search by department </summary>

![9](documentation/api/posts/posts_search_department.png)

</details>

#### **Nominations**

| Endpoint                                             | Action                           | Method | Auth | Expected                                                       | Actual | Screenshot |
| ---------------------------------------------------- | -------------------------------- | ------ | ---- | -------------------------------------------------------------- | ------ | ---------- |
| `/nominations/`                                      | List all the nominations         | GET    | ❌   | HTTP 200 OK                                                    | ✅     | 1          |
| `/nominations/1/`                                    | View a nomination detail         | GET    | ❌   | HTTP 200 OK                                                    | ✅     | 2          |
| `/nominations/`                                      | Create a nomination              | POST   | ✅   | HTTP 201 Created                                               | ✅     | 3          |
| `/nominations/7/`                                    | Update a nomination (owner)      | PUT    | ✅   | HTTP 200 OK / Nomination updated successfully                  | ✅     | 4          |
| `/nominations/1/`                                    | Update a nomination (not owner)  | GET    | ✅   | HTTP 403 Forbidden / Nomination should be read-only            | ✅     | 5          |
| `/nominations/7/`                                    | Delete a nomination (owner)      | DELETE | ✅   | HTTP 204 No Content                                            | ✅     | 6          |
| `/nominations/1/`                                    | Delete a nomination (not owner)  | DELETE | ✅   | HTTP 403 Forbidden / Nomination should be read-only            | ✅     | 7          |
| `/nominations/?search=raymond`                       | Search by nominee/nominator      | GET    | ❌   | HTTP 200 OK / Only nominations involving "raymond"             | ✅     | 8          |
| `/nominations/?nominator__profile__department=SALES` | Filter by department (nominator) | GET    | ❌   | HTTP 200 OK / Only nominations from "SALES" nominator profiles | ✅     | 9          |
| `/nominations/?tag=3`                                | Filter by tag                    | GET    | ❌   | HTTP 200 OK / Only nominations with "Innovation" tag (ID=3)    | ✅     | 10         |
| `/nominations/?nominee=2`                            | Filter by nominee                | GET    | ❌   | HTTP 200 OK / Only nominee "steph" (ID=2)                      | ✅     | 11         |

<details>
<summary> 1/ List all the nominations </summary>

![1](documentation/api/nominations/nomin_list.png)

</details>

<details>
<summary> 2/ View a nomination detail </summary>

![2](documentation/api/nominations/nomin_detail_not_auth.png)

</details>

<details>
<summary> 3/ Create a nomination </summary>

![3](documentation/api/nominations/nomin_create.png)

</details>

<details>
<summary> 4/ Update a nomination (owner) </summary>

![4](documentation/api/nominations/nomin_update_owner.png)

</details>

<details>
<summary> 5/ Update a nomination (not owner) </summary>

![5](documentation/api/nominations/nomin_update_not_owner.png)

</details>

<details>
<summary> 6/ Delete a nomination (owner) </summary>

![6](documentation/api/nominations/nomin_delete_owner.png)

</details>

<details>
<summary> 7/ Delete a nomination (not owner) </summary>

![7](documentation/api/nominations/nomin_delete_not_owner.png)

</details>

<details>
<summary> 8/ Search by nominee/nominator </summary>

![8](documentation/api/nominations/nomin_search_name.png)

</details>

<details>
<summary> 9/ Filter by department (nominator) </summary>

![9](documentation/api/nominations/nomin_nominator_department.png)

</details>

<details>
<summary> 10/ Filter by tag </summary>

![10](documentation/api/nominations/nomin_tag.png)

</details>

<details>
<summary> 11/ Filter by nominee </summary>

![11](documentation/api/nominations/nomin_nominee.png)

</details>

#### **Comments**

| Endpoint                  | Action                              | Method | Auth | Expected                                    | Actual | Screenshot |
| ------------------------- | ----------------------------------- | ------ | ---- | ------------------------------------------- | ------ | ---------- |
| `/comments/`              | List all the comments               | GET    | ❌   | HTTP 200 OK                                 | ✅     | 1          |
| `/comments/`              | Create a comment on post/nomination | POST   | ✅   | HTTP 201 Created                            | ✅     | 2          |
| `/comments/4/`            | Update a comment (owner)            | PUT    | ✅   | HTTP 200 OK / Comment updated successfully  | ✅     | 3          |
| `/comments/4/`            | Delete a comment (owner)            | DELETE | ✅   | HTTP 204 No Content                         | ✅     | 4          |
| `/comments/?post=4`       | Filter by post                      | GET    | ❌   | HTTP 200 OK / Only comments on post 4       | ✅     | 5          |
| `/comments/?nomination=3` | Filter by nomination                | GET    | ❌   | HTTP 200 OK / Only comments on nomination 3 | ✅     | 6          |

<details>
<summary> 1/ List all the comments </summary>

![1](documentation/api/comments/comments_list.png)

</details>

<details>
<summary> 2/ Create a comment </summary>

![2](documentation/api/comments/comments_create.png)

</details>

<details>
<summary> 3/ Update a comment (owner) </summary>

![3](documentation/api/comments/comments_update_owner.png)

</details>

<details>
<summary> 4/ Delete a comment (owner) </summary>

![4](documentation/api/comments/comments_delete_owner.png)

</details>

<details>
<summary> 5/ Filter by post </summary>

![5](documentation/api/comments/comments_filter_posts.png)

</details>

<details>
<summary> 6/ Filter by nomination </summary>

![6](documentation/api/comments/comments_filter_nominations.png)

</details>

#### **Likes**

| Endpoint    | Action                               | Method | Auth | Expected                               | Actual | Screenshot |
| ----------- | ------------------------------------ | ------ | ---- | -------------------------------------- | ------ | ---------- |
| `/likes/`   | Create a like on post/nomination     | POST   | ✅   | HTTP 201 Created                       | ✅     | 1          |
| `/likes/`   | Invalid: like both post & nomination | POST   | ✅   | HTTP 400 Bad Request / Can’t like both | ✅     | 2          |
| `/likes/`   | Invalid: like same thing twice       | POST   | ✅   | HTTP 400 Bad Request / Already liked   | ✅     | 3          |
| `/likes/5/` | Delete a like (owner)                | DELETE | ✅   | HTTP 204 No Content                    | ✅     | 4          |

<details>
<summary> 1/ Create a like on post/nomination </summary>

![1](documentation/api/likes/likes_create.png)

</details>

<details>
<summary> 2/ Invalid: like both post & nomination </summary>

![2](documentation/api/likes/likes_post_or_nomin_validation.png)

</details>

<details>
<summary> 3/ Invalid: like same thing twice </summary>

![3](documentation/api/likes/likes_same_twice_validation.png)

</details>

<details>
<summary> 4/ Delete a like (owner) </summary>

![4](documentation/api/likes/likes_delete_owner.png)

</details>

#### **Departments (via Profiles, Posts, Nominations)**

| Endpoint                                           | Action                                      | Method | Auth | Expected                                                 | Actual | Screenshot |
| -------------------------------------------------- | ------------------------------------------- | ------ | ---- | -------------------------------------------------------- | ------ | ---------- |
| `/user-profiles/`                                  | List profiles with department field visible | GET    | ❌   | HTTP 200 OK / Department value shown per profile         | ✅     | 1          |
| `/user-profiles/10`                                | Profile detail with department field        | GET    | ❌   | HTTP 200 OK / Department is correct for the user         | ✅     | 2          |
| `/posts/?user__profile__department=OPS`            | Filter posts by user department             | GET    | ❌   | HTTP 200 OK / Only posts from users in Operation         | ✅     | 3          |
| `/nominations/?nominator__profile__department=OPS` | Filter nominations by nominator department  | GET    | ❌   | HTTP 200 OK / Only nominations from Operation nominators | ✅     | 4          |

<details>
<summary> 1/ List profiles with department field visible </summary>

![1](documentation/api/department/department_profile_list.png)

</details>

<details>
<summary> 2/ Profile detail with department field </summary>

![2](documentation/api/department/department_profile_detail.png)

</details>

<details>
<summary> 3/ Filter posts by user department </summary>

![3](documentation/api/department/department_filter_posts.png)

</details>

<details>
<summary> 4/ Filter nominations by nominator department </summary>

![4](documentation/api/department/department_filter_nominations.png)

</details>

#### **Tags**

| Endpoint               | Action                     | Method | Auth | Expected                                                  | Actual | Screenshot |
| ---------------------- | -------------------------- | ------ | ---- | --------------------------------------------------------- | ------ | ---------- |
| `/tags/`               | List all tags              | GET    | ❌   | HTTP 200 OK / All available tags listed                   | ✅     | 1          |
| `/nominations/`        | Create nomination with tag | POST   | ✅   | HTTP 201 Created / Nomination includes correct tag        | ✅     | 2          |
| `//nominations/?tag=3` | Filter nominations by tag  | GET    | ❌   | HTTP 200 OK / Only nominations with tag Innovation (ID=3) | ✅     | 3          |

<details>
<summary> 1/ List all tags </summary>

![1](documentation/api/tags/tags_list.png)

</details>

<details>
<summary> 2/ Create nomination with tag </summary>

![2](documentation/api/tags/tags_nomination_create.png)

</details>

<details>
<summary> 3/ Filter nominations by tag </summary>

![3](documentation/api/tags/tags_nomination_filter.png)

</details>

> Note: While the tables above list update operations using the PUT method for clarity, the backend also supports PATCH requests, which are actively used in the frontend (e.g., to edit profiles, recognitions, nominations, and comments). Both methods have been verified to behave as expected.

---

### 6.2 Front-End Application Testing

All manual testing was performed on the deployed frontend using several real user accounts. Each user story was tested with expected interactions and outcomes, covering both positive and negative cases.

Testing included:

- Auth flows (register, login, logout)
- Recognition and nomination CRUD
- Feed behaviour and toggling
- Detail page rendering
- Like and comment functionality
- User profile views and editing
- Search bar and sidebar interactions

#### **Getting Started & Joining the Platform**

| **Priority** | **User Story**           | **Page(s)**       | **Test Scenario / Action**                          | **Expected Result**                                                                                   | Actual | **Screenshot** |
| ------------ | ------------------------ | ----------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------ | -------------- |
| Must Have    | Register an Account      | Register Page     | Fill out form with invalid and valid inputs, submit | Invalid inputs trigger error messages; valid inputs redirect to login with success confirmation       | ✅     | 1a, 1b         |
| Must Have    | Login to Account         | Login Page        | Enter invalid and valid credentials, submit         | Invalid credentials trigger error messages; valid credentials redirect to feed with user menu visible | ✅     | 2              |
| Must Have    | Logout                   | Any Page (Navbar) | Click logout                                        | User is logged out and redirected to login, message confirms successful logged out                    | ✅     | 3              |
| Must Have    | Conditional Menu Options | All Pages         | Login and check navbar / Logout and check again     | Navbar displays user-specific links when logged in, and generic links when logged out.                | ✅     | 4a, 4b         |

<details>
  <summary>1a. Register – Validation Errors Display</summary>

   <p>
      <img src="documentation/frontend/testing/auth/register_form_messages.png" alt="1a. Register – Validation Errors Display" />
   </p>
</details>

<details>
  <summary>1b. Register - Successful message</summary>

   <p>
      <img src="documentation/frontend/testing/auth/registration_successful.png" alt="1b. Register - Successful message" />
   </p>
</details>

<details>
  <summary>2. Log In - Validation Errors Display</summary>

   <p>
      <img src="documentation/frontend/testing/auth/login_wrong_credentials.png" alt="2. Log In - Validation Errors Display" />
   </p>
</details>

<details>
  <summary>3. Logged out - Successful message</summary>

   <p>
      <img src="documentation/frontend/testing/auth/logged_out_successful.png" alt="3. Logged out - Successful message" />
   </p>
</details>

<details>
  <summary>4a. Conditional Menu Options when logged out</summary>

   <p>
      <img src="documentation/frontend/testing/auth/navbar_logged_out.png" alt="4a. Conditional Menu Options when logged out" />
   </p>
</details>

<details>
  <summary>4b. Conditional Menu Options when logged in</summary>

   <p>
      <img src="documentation/frontend/testing/auth/navbar_logged_in.png" alt="4b. Conditional Menu Options when logged in" />
   </p>
</details>

#### **Recognition CRUD**

| **Priority** | **User Story**          | **Page(s)**                            | **Test Scenario / Action**                            | **Expected Result**                                                                                                                                                                     | Actual | **Screenshot** |
| ------------ | ----------------------- | -------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------- |
| Must Have    | Create Recognition      | Recognition Create Page                | Fill out form with content, submit form               | Redirected to detail page with success message; new recognition appears in feed and profile page; required fields trigger error messages if empty                                       | ✅     | 1a, 1b         |
| Must Have    | Edit Recognition        | Feed / Detail Page > Dropdown > Edit   | Click edit from dropdown, update content              | Form is prefilled; after submit success message shown; changes reflected in detail page, feed and profile; required fields trigger error messages if empty                              | ✅     | 2a, 2b, 2c     |
| Must Have    | Delete Recognition      | Feed / Detail Page > Dropdown > Delete | Click delete from dropdown, confirm deletion in modal | Confirmation modal appears; after confirm, success message shown; post removed from feed and profile with success message                                                               | ✅     | 3a, 3b         |
| Must Have    | View Recognition Detail | Feed / Profile                         | Click "View full recognition" button on card          | Full post loads with correct title, content, author, date, and comments; if logged in → comment form is visible; if logged out → prompt to log in to leave a comment (with direct link) | ✅     | 4a, 4b         |
| Must Have    | View Recognition Feed   | Homepage > Toggle                      | Visit homepage and click on Recognitions button       | Feed shows latest recognitions in reverse chronological order                                                                                                                           | ✅     | 5              |

<details>
  <summary>1a. Create Recognition – Successful message</summary>

   <p>
      <img src="documentation/frontend/testing/recognition/recognition_create.png" alt="1a. Create Recognition – Successful message" />
   </p>
</details>

<details>
  <summary>1b. Create Recognition – Blank fields error</summary>

   <p>
      <img src="documentation/frontend/testing/recognition/recognition_create_blank_field.png" alt="1b. Create Recognition – Blank fields error" />
   </p>
</details>

<details>
  <summary>2a. Edit Recognition – Dropdown feed</summary>

   <p>
      <img src="documentation/frontend/testing/recognition/recognition_edit_feed.png" alt="2a. Edit Recognition – Dropdown feed" />
   </p>
</details>

<details>
  <summary>2b. Edit Recognition – Form pre-filled</summary>

   <p>
      <img src="documentation/frontend/testing/recognition/recognition_edit.png" alt="2b. Edit Recognition – Form pre-filled" />
   </p>
</details>

<details>
  <summary>2c. Edit Recognition – Successful message</summary>

   <p>
      <img src="documentation/frontend/testing/recognition/recognition_edit_confirmation.png" alt="2c. Edit Recognition – Successful message" />
   </p>
</details>

<details>
  <summary>3a. Delete Recognition - Confirmation prompt</summary>

   <p>
      <img src="documentation/frontend/testing/recognition/recognition_delete_prompt.png" alt="3a. Delete Recognition - Confirmation prompt" />
   </p>
</details>

<details>
  <summary>3b. Delete Recognition > Successful message</summary>

   <p>
      <img src="documentation/frontend/testing/recognition/recognition_delete_confirmation.png" alt="3b. Delete Recognition > Successful message" />
   </p>
</details>

<details>
  <summary>4a. View Recognition Detail > Logged in</summary>

   <p>
      <img src="documentation/frontend/testing/recognition/recognition_detail_logged_in.png" alt="4a. View Recognition Detail > Logged in" />
   </p>
</details>

<details>
  <summary>4b. View Recognition Detail > Logged out</summary>

   <p>
      <img src="documentation/frontend/testing/recognition/recognition_detail_logged_out.png" alt="4b. View Recognition Detail > Logged out" />
   </p>
</details>

<details>
  <summary>5. View Recognition Feed</summary>

   <p>
      <img src="documentation/frontend/testing/recognition/recognition_feed_ordering.png" alt="5. View Recognition Feed" />
   </p>
</details>

#### **Nomination CRUD**

| **Priority** | **User Story**         | **Page(s)**                            | **Test Scenario / Action**                            | **Expected Result**                                                                                                                                        | Actual | **Screenshot** |
| ------------ | ---------------------- | -------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------- |
| Must Have    | Create Nomination      | Nomination Create Page                 | Fill form with nominee, tag, and message; submit      | Redirected to detail page with success message; nomination appears in feed; required fields trigger “This field may not be blank.” if empty                | ✅     | 1a, 1b, 1c, 1d |
| Must Have    | Edit Nomination        | Feed / Detail Page > Dropdown > Edit   | Click edit from dropdown, update content              | Form is prefilled; after submit success message shown; changes reflected in detail page, feed and profile; required fields trigger error messages if empty | ✅     | 2a, 2b         |
| Must Have    | Delete Nomination      | Feed / Detail Page > Dropdown > Delete | Click delete from dropdown, confirm deletion in modal | Confirmation modal appears; after confirm, success message shown; post removed from feed and profile with success message                                  | ✅     | 3a, 3b         |
| Must Have    | View Nomination Detail | Feed / Profile                         | Click "View full nomination" button on card           | Full post loads with correct title, content, nominee, tag, and date                                                                                        | ✅     | 4              |
| Must Have    | View Nomination Feed   | Homepage > Toggle                      | Visit homepage and click on Nominations button        | Feed shows latest recognitions in reverse chronological order                                                                                              | ✅     | 5              |

<details>
  <summary>1a. Create Nomination – Successful message</summary>

   <p>
      <img src="documentation/frontend/testing/nomination/nomination_create_successful.png" alt="1a. Create Nomination – Successful message" />
   </p>
</details>

<details>
  <summary>1b. Create Nomination – Blank fields error</summary>

   <p>
      <img src="documentation/frontend/testing/nomination/nomination_create_blank_field.png" alt="1b. Create Nomination – Blank fields error" />
   </p>
</details>

<details>
  <summary>1c. Create Nomination – Search people by name</summary>

   <p>
      <img src="documentation/frontend/testing/nomination/nomination_create_nominee.png" alt="1c. Create Nomination – Search people by name" />
   </p>
</details>

<details>
  <summary>1d. Create Nomination – Tag dropdwon</summary>

   <p>
      <img src="documentation/frontend/testing/nomination/nomination_create_tag.png" alt="1d. Create Nomination – Tag dropdwon" />
   </p>
</details>

<details>
  <summary>2a. Edit Nomination – Dropdown feed</summary>

   <p>
      <img src="documentation/frontend/testing/nomination/nomination_edit_feed.png" alt="2a. Edit Nomination – Dropdown feed" />
   </p>
</details>

<details>
  <summary>2b. Edit Nomination – Successful message</summary>

   <p>
      <img src="documentation/frontend/testing/nomination/nomination_edit_successful.png" alt="2b. Edit Nomination – Successful message" />
   </p>
</details>

<details>
  <summary>3a. Delete Nomination - Confirmation prompt</summary>

   <p>
      <img src="documentation/frontend/testing/nomination/nomination_delete_prompt.png" alt="3a. Delete Nomination - Confirmation prompt" />
   </p>
</details>

<details>
  <summary>3b. Delete Nomination - Successful message</summary>

   <p>
      <img src="documentation/frontend/testing/nomination/nomination_delete_successful.png" alt="3b. Delete Nomination - Successful message" />
   </p>
</details>

<details>
  <summary>4. View Nomination Detail</summary>

   <p>
      <img src="documentation/frontend/testing/nomination/nomination_detail.png" alt="4. View Nomination Detail" />
   </p>
</details>

<details>
  <summary>5. View Nomination Feed</summary>

   <p>
      <img src="documentation/frontend/testing/nomination/nomination_feed_ordering.png" alt="5. View Nomination Feed" />
   </p>
</details>

#### **Engaging with People & Posts**

| **Priority** | **User Story**                           | **Page(s)**                             | **Test Scenario / Action**                                     | **Expected Result**                                                                                                                                                         | Actual | **Screenshot** |
| ------------ | ---------------------------------------- | --------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------- |
| Must Have    | Comment on Recognition                   | Detail Page                             | Submit valid comment while logged in                           | Comment form is visible; post button is disabled when input is empty and enabled once content is entered; after submit success message shown and comment appears below post | ✅     | 1a, 1b, 1c     |
| Must Have    | Guest View of Comment Section            | Detail Page                             | Visit post detail page while logged out                        | Comment form is hidden; message appears prompting user to log in to leave a comment (with direct link)                                                                      | ✅     | 2              |
| Should Have  | Edit/Delete My Comment                   | Detail Page > Dropdown > Edit or Delete | Click edit or delete from dropdown on comment authored by user | Dropdown is visible; editing opens prefilled form; delete prompts confirmation in modal; success message shown after either action                                          | ✅     | 3a, 3b, 3c, 3d |
| Should Have  | Like / Unlike someone else Recognition   | Feed / Detail Page / Profile Page       | Click like/unlike while logged in                              | Like count updates and icon toggles when liking someone else's post while logged in; own posts show disabled icon with tooltip and not-allowed style                        | ✅     | 4a, 4b         |
| Should Have  | Guest View of Like Button                | Feed / Detail Page / Profile Page       | Hover over like icon while logged out                          | Like icon is inactive with “Log in to like” tooltip; cursor shows not-allowed style                                                                                         | ✅     | 5              |
| Must Have    | Search for Colleagues                    | Home Page Sidebar                       | Type full or partial name into search input                    | Matching users appear in real time with avatar and full name                                                                                                                | ✅     | 6              |
| Should Have  | Filter List of colleagues by Departement | Home Page Sidebar                       | Select department from dropdown                                | List updates to show only users from selected department; works in combination with name search                                                                             | ✅     | 7              |

<details>
  <summary>1a. Comment on Recognition - Post Button Disabled</summary>

   <p>
      <img src="documentation/frontend/testing/comment/comment_submit_disabled.png" alt="1a. Comment on Recognition - Post Button Disabled" />
   </p>
</details>

<details>
  <summary>1b. Comment on Recognition - Post Button Enabled</summary>

   <p>
      <img src="documentation/frontend/testing/comment/comment_submit_enabled.png" alt="1b. Comment on Recognition - Post Button Enabled" />
   </p>
</details>

<details>
  <summary>1c. Comment on Recognition - Successful message</summary>

   <p>
      <img src="documentation/frontend/testing/comment/comment_successful.png" alt="1c. Comment on Recognition - Successful message" />
   </p>
</details>

<details>
  <summary>2. Comment - Guest View</summary>

   <p>
      <img src="documentation/frontend/testing/comment/comment_logged_out.png" alt="2. Comment - Guest View" />
   </p>
</details>

<details>
  <summary>3a. Edit/Delete comment - dropdown</summary>

   <p>
      <img src="documentation/frontend/testing/comment/comment_edit_dropdown.png" alt="3a. Edit/Delete comment - dropdown" />
   </p>
</details>

<details>
  <summary>3b. Delete comment - Confirmation prompt</summary>

   <p>
      <img src="documentation/frontend/testing/comment/comment_delete_prompt.png" alt="3b. Delete comment - Confirmation prompt" />
   </p>
</details>

<details>
  <summary>3c. Edit comment - Successful Message</summary>

   <p>
      <img src="documentation/frontend/testing/comment/comment_edit_successful.png" alt="3c. Edit comment - Successful Message" />
   </p>
</details>

<details>
  <summary>3d. Delete comment - Successful Message</summary>

   <p>
      <img src="documentation/frontend/testing/comment/comment_delete_successful.png" alt="3d. Delete comment - Successful Message" />
   </p>
</details>

<details>
  <summary>4a. Like - Someone else Recognition</summary>

   <p>
      <img src="documentation/frontend/testing/like/liked_not_liked.png" alt="4a. Like - Someone else Recognition" />
   </p>
</details>

<details>
  <summary>4b. Like - Own Posts disabled</summary>

   <p>
      <img src="documentation/frontend/testing/like/like_own.png" alt="4b. Like - Own Posts disabled" />
   </p>
</details>

<details>
  <summary>5. Like - Guest View</summary>

   <p>
      <img src="documentation/frontend/testing/like/like_logged_out.png" alt="5. Like - Guest View" />
   </p>
</details>

<details>
  <summary>6. Search for Colleagues</summary>

   <p>
      <img src="documentation/frontend/testing/profile/search_people_name.png" alt="Search for Colleagues" />
   </p>
</details>

<details>
  <summary>7. Filter Colleagues by Dept</summary>

   <p>
      <img src="documentation/frontend/testing/profile/filter_department.png" alt="Filter Colleagues by Dept" />
   </p>
</details>

#### **Managing My Profile & Network**

| **Priority** | **User Story**                  | **Page(s)**                   | **Test Scenario / Action**                                  | **Expected Result**                                                                                                                                                                     | Actual | **Screenshot** |
| ------------ | ------------------------------- | ----------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------- |
| Should Have  | Edit My Profile                 | Profile > Edit Profile        | Change avatar or bio and save                               | Form is prefilled with current values; first name and last name fields are disabled with note to contact HR; after submit, success message is shown and updated info appears in profile | ✅     | 1a, 1b         |
| Should Have  | Conditional Profile Actions     | Public / My Profile Page      | View any profile page while logged in                       | If viewing own profile → edit icon appears; if viewing another user → “Nominate” button is visible                                                                                      | ✅     | 2a, 2b         |
| Must Have    | View Public Profiles            | Home Page Sidebar / Any posts | Click username or full name from search results or on posts | Public profile page loads with user avatar, bio, and full list of their recognitions and nominations                                                                                    | ✅     |                |
| Must Have    | View Draft Profile After Signup | Profile Page                  | Login after registration → visit own profile page           | If profile details are incomplete, user sees fallback avatar and helpful messages suggesting how and where to update name, department, bio, or profile picture.                         | ✅     | 3              |
| Could Have   | View My Own Posts               | My Profile Page               | Visit profile while logged in                               | User sees recognitions and nominations they created, grouped by type                                                                                                                    | ✅     | 4              |

<details>
  <summary>1a. Edit My Profile - Form prefilled with read only fields</summary>

   <p>
      <img src="documentation/frontend/testing/profile/profile_edit_fields.png" alt="1a. Edit My Profile - Form prefilled with read only fields" />
   </p>
</details>

<details>
  <summary>1b. Edit My Profile - Successful message</summary>

   <p>
      <img src="documentation/frontend/testing/profile/profile_edit_successful.png" alt="1b. Edit My Profile - Successful message" />
   </p>
</details>

<details>
  <summary>2a. Conditional Profile Actions - Owner view</summary>

   <p>
      <img src="documentation/frontend/testing/profile/owner_profile.png" alt="2a. Conditional Profile Actions - Owner view" />
   </p>
</details>

<details>
  <summary>2b. Conditional Profile Actions - Colleagues view</summary>

   <p>
      <img src="documentation/frontend/testing/profile/colleague_profile.png" alt="2b. Conditional Profile Actions - Colleagues view" />
   </p>
</details>

<details>
  <summary>3. View Draft Profile After Signup</summary>

   <p>
      <img src="documentation/frontend/testing/profile/profile_new_user.png" alt="3. View Draft Profile After Signup" />
   </p>
</details>

<details>
  <summary>4. View My Own Posts</summary>

   <p>
      <img src="documentation/frontend/testing/profile/profile_own_posts.png" alt="4. View My Own Posts" />
   </p>
</details>

### 6.3 Validators

#### **CSS - HTML**

This project was checked with [validator.w3.org](https://validator.w3.org) for general HTML5 syntax validation.  
Most info-level messages related to trailing slashes on void elements come from the React-generated `index.html` and do not affect rendering or functionality.

<details>
  <summary>HTML Validator Results</summary>
  <img src="documentation/validators/html_validator.png">
</details>

</br>

This project’s styles were checked using [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) and the document passed with **no errors** and validates as **CSS level 3 + SVG**.

> Note: Since the app is built with React and uses modular CSS (`*.module.css`), some scoped or dynamically applied styles (via JSX or Bootstrap classes) are not evaluated by the validator. These styles were reviewed manually for responsiveness, accessibility, and cross-browser compatibility.

<details>
  <summary>CSS Validator Results</summary>
  <img src="documentation/validators/css_validator.png">
</details>

#### **JavaScript**

To ensure JavaScript and React code quality, **ESLint** was installed and configured using the widely adopted **Airbnb style guide**. In addition, **Prettier** was used via the VS Code “Format on Save” feature to automatically apply consistent formatting.

- **Tools and Setup**

  - ESLint was initialised with:

  ```bash
  npx eslint --init
  ```

  - A customised `.eslintrc.json` file was created to prioritise meaningful warnings (e.g., undefined variables, unused imports) while suppressing overly strict formatting rules.
  - A `.eslintignore` file was added to exclude folders such as `node_modules`, `build`, and `static`.

- **Linting Process**

  - The frontend was linted using:

  ```bash
  npx eslint . --ext .js,.jsx
  ```

  - Key issues were resolved, including:

    - Commenting out `console.log()` statements and adding // TODO: notes for future user feedback
    - Elimination of unused variables and imports
    - Verification of JSX syntax and component structure

Non-critical warnings (such as `prop-types` or camelCase from API data) were selectively addressed based on their relevance to functionality and clarity.

#### **Python**

To ensure that all Python files follow best coding practices, I used **Flake8** for linting. This tool checks for [PEP 8](https://pep8.org/) compliance, such as formatting inconsistencies or syntax issues.

1. Install flake8 (if not already installed):

   ```bash
   pip install flake8
   ```

2. At the root of the project, create a `.flake8` config file with the following content:

   ```ini
   [flake8]
   exclude =
       migrations,
       __pycache__,
       manage.py,
       settings.py,
       env,
       venv,
       staticfiles_build
   max-line-length = 88
   ```

Once set up, run the following command from the project root to lint the entire project:

```bash
flake8
```

This will check all Python files in the project (excluding the listed folders/files) and highlight any issues that need to be addressed.  
All identified issues—mostly trailing whitespace and formatting inconsistencies—were fixed to ensure full compliance with PEP 8.

> Note: Some warnings were intentionally ignored:

- Warnings from installed packages (e.g. `node_modules` or installed dependencies like `flatted.py`) were left untouched, as they are not part of the core codebase.
- Unused imports in test files (e.g. `TestCase` in `tests.py`) were kept in place as placeholders to maintain Django's testing structure and support future test development.

<details>
  <summary>Python validator results</summary>

   <p>
      <img src="documentation/validators/python_validator.png" alt="Python validator result" />
   </p>
</details>

#### **Lighthouse Performance & Best Practices Testing**

To assess web performance, accessibility, best practices and SEO, I used **Google Lighthouse** to audit multiple pages during final testing.

- **Performance:** Improved from 88% → 93%  
  Optimized Cloudinary images using a custom helper function with size, format, and quality transformations. Added eager loading and fetch priority for avatar on profile page to reduce Largest Contentful Paint.
- **Accessibility:** Improved from 85% → 100%  
  Resolved missing ARIA labels, ensured consistent keyboard navigation, and improved text contrast.
- **Best Practices:** 74% (see note below)
- **SEO:** 100%

> Note: Pages received a **Best Practices score of 74%** due mostly to a third-party cookie warning.  
> Since this warning originates from Cloudinary's image delivery system, it cannot be fully resolved without self-hosting or proxying images. As this would negatively impact performance and development scalability, it was left in place. Functionality and user privacy are not affected.

<details>
  <summary>Lighthouse Home Page</summary>

   <p>
      <img src="documentation/validators/lighthouse_home.png" alt="Lighthouse Home Page" />
   </p>
</details>

<details>
  <summary>Lighthouse Detail Page</summary>

   <p>
      <img src="documentation/validators/lighthouse_detail.png" alt="Lighthouse Home Page" />
   </p>
</details>

<details>
  <summary>Lighthouse Profile Page</summary>

   <p>
      <img src="documentation/validators/lighthouse_profile.png" alt="Lighthouse Home Page" />
   </p>
</details>

### 6.4 Bugs and Fixes

#### Profile Avatar Not Rendering:

- **Bug**: User avatars were not displaying in RecognitionCards, NominationCards, or the profile header.
- **Cause**: The serializer output did not include the `profile_image` field, and the frontend components were not prepared to receive it.
- **Fix**: Added `profile_image` to the relevant serializers (Posts, Nominations, Profiles) and updated frontend components (`PostHeader`, `RecognitionCard`, `NominationCard`) to fetch and display the image.

#### Auth State Not Syncing After Login/Logout:

- **Bug**: After logging in or out, the UI would occasionally show outdated user info or delay updates in the navbar and post ownership checks.
- **Cause**: The token handling logic didn’t consistently clean up or refresh the current user state across sessions.
- **Fix**: Improved the token timestamp logic (`removeTokenTimestamp`) and refined how the `CurrentUserContext` handles state during login/logout. The app now reliably reflects auth state throughout all pages.

#### Token Refresh Not Rehydrating Auth State After Idle:

- **Bug**: After 5 minutes of inactivity, users lost access to protected features (like editing posts or liking others’), even though valid tokens remained in localStorage.
- **Cause**: The token refresh succeeded silently, but the frontend did not update the `currentUser` context, causing the UI to show a stale, unauthenticated state.
- **Fix**: Added multiple patches in `CurrentUserContext.js`:
  - Always attach tokens to API requests
  - Refresh the token before each request if it's expired
  - Retry failed requests after refreshing the token (e.g. after a 401 error)
  - Rehydrate the user context after silent refreshes to sync frontend state
  - Use a `setInterval` to ping the user endpoint every 5 minutes as a fallback
  - Switched axios interceptor setup from `useMemo()` to `useEffect()` to avoid stale dependencies and make cleanup easier
    Also:
  - `HomeFeedPage.js` now listens to the live `currentUser` from context
  - `RecognitionCard.js` and `NominationCard.js` check ownership using `currentUser` instead of the API flag
  - All create and update forms now use `axiosReq` to make sure tokens are included in every request

#### New User Registration Crashing Due to Missing Profile Image

- **Bug**: Submitting the sign-up form caused a cryptic backend error, and the frontend displayed raw error codes instead of a readable message.
- **Cause**: The `UserProfileSerializer` initially used a `SerializerMethodField` to access `.url` on the `profile_image`, which caused a crash when no image was uploaded. Since new users typically don’t add a profile image at registration, the field was often `None`, triggering an internal error.
- **First Fix**: Add a defensive check using a `get_profile_image()` method.
  This worked temporarily but caused other issues (e.g. accessing nested .user.profile caused confusion in ProfilePage and created inconsistencies when serializing profile data directly).
- **Final Fix**: Replace the method field with a correctly configured ImageField directly mapped to the model: `profile_image = serializers.ImageField(source='image', required=False, allow_null=True, write_only=False)`
  This approach safely returns null if no image is present, works smoothly across all profile views, and avoids complex lookups.

#### Create Nomination – Dropdown Requires Double Click:

- **Bug**: In the nominee search field, clicking a user's name doesn't collapse the dropdown unless clicked twice.
- **Status**: Still unresolved.
- **Observation**: This issue only appears in the `CreateNominationPage`. The same component works as expected in `HomeFeedPage`, likely because in the feed a selection immediately triggers a redirect, preventing the visual bug. In the nomination form, the selected name is filled, but the dropdown remains visible, creating confusion.
- **Planned Fix**: Multiple approaches were tested (onMouseDown, onClick, setTimeout, input blur tracking), but none resolved the issue consistently. The current plan is to leave the logic as-is to avoid introducing more complexity.

#### Nominee Field – Reusable Component Integration:

- **Goal**: Replace inline nominee dropdown logic with a reusable `PeopleSearchBar` component to improve mobile layout and maintainability.
- **Change**: `CreateNominationPage` now imports and uses `PeopleSearchBar`, which already worked in `HomeFeedPage`.
- **Outcome**: The refactor was successful in unifying layout and keeping code DRY. However, the dropdown behavior in `CreateNominationPage` remains buggy (see above), suggesting the issue is tied to layout or page structure rather than the component itself.

### 6.5 UI/UX Improvements (Planned Enhancement)

#### Notification Positioning

- **Current Behavior**: Success messages like "Your profile has been updated!" are currently displayed in the normal page layout. This pushes the content down and affects the overall layout.
- **Planned Improvement**: Change the notification to use absolute positioning so it appears over the page without moving other content. This should improve the user experience, especially on smaller screens.

#### Message Clarity & Visibility

- **Generic Messaging**: Some system messages currently use generic terms like "post" instead of context-specific ones like recognition or nomination.
- **Planned Improvement**: Tailor both success and error messages to reflect the content type and action performed, making feedback clearer and more meaningful for users.
- **Visibility on Scroll**: Success or error messages appear at the top of the page — but users don’t always see them, especially when interacting with content at the bottom (e.g. editing a comment).
- **Planned Improvement**: Look into simpler ways to show messages (like using toast popups) that stay visible on screen, even if the user is scrolling down the page.

## 7. Deployment

This project was deployed as a **fullstack app** using **Heroku**, serving both the Django API and React frontend from a single Heroku app. The backend was deployed first, followed by the frontend build.

The live link can be found here: [CelebrateIt](https://celebrateit-866641373084.herokuapp.com/)

### 7.1 Backend Deployment (Initial Phase)

##### Tech Stack

- Django REST Framework
- PostgreSQL (Heroku Postgres)
- Cloudinary (media hosting)

##### Steps:

1. **Set up PostgreSQL and Connect Heroku**

   - Create a Heroku app and attach a PostgreSQL database.
   - In Heroku Settings > Config Vars, add:

     - `DATABASE_URL` → provided by Heroku
     - `SECRET_KEY`, `CLOUDINARY_URL`, `ALLOWED_HOSTS`, `CLIENT_ORIGIN`

   - Install required packages:

   ```bash
   pip install dj_database_url psycopg2 gunicorn 'django-cors-headers<4.6'
   pip freeze > requirements.txt
   ```

2. **Database Configuration in `settings.py`**

   - Add this at the top:

   ```python
   import dj_database_url
   import json
   ```

   - Replace `DATABASES` block:

   ```python
   if 'DEV' in os.environ:
         DATABASES = {
            'default': {
               'ENGINE': 'django.db.backends.sqlite3',
               'NAME': BASE_DIR / 'db.sqlite3',
            }
         }
   else:
         DATABASES = {
            'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))
         }
   ```

   - Update `ALLOWED_HOSTS`:

   ```python
   ALLOWED_HOSTS = json.loads(
         os.environ.get("ALLOWED_HOSTS", '["localhost", "127.0.0.1"]')
   )
   ```

3. **JWT Authentication and Permissions**

   - Add to `settings.py`:

   ```python
   REST_USE_JWT = True
   JWT_AUTH_COOKIE = 'my-app-auth'
   JWT_AUTH_REFRESH_COOKIE = 'my-refresh-token'
   JWT_AUTH_SAMESITE = 'None'
   JWT_AUTH_SECURE = True
   ```

   - Add these apps to `INSTALLED_APPS`:

   ```python
   'dj_rest_auth',
   'dj_rest_auth.registration',
   'allauth',
   'allauth.account',
   'corsheaders',
   ```

   - And middleware:

   ```python
   'corsheaders.middleware.CorsMiddleware',
   ```

   - Set CORS:

   ```python
   CORS_ALLOWED_ORIGINS = [
         origin for origin in [
            os.environ.get('CLIENT_ORIGIN'),
            os.environ.get('CLIENT_ORIGIN_DEV'),
         ] if origin
   ]
   CORS_ALLOW_CREDENTIALS = True
   ```

4. **Prepare for Deployment**

   - Create `Procfile`:

   ```text
   release: python manage.py makemigrations && python manage.py migrate
   web: gunicorn celebrateit_api.wsgi
   ```

   - Create `runtime.txt`:

   ```text
   python-3.10.11
   ```

   - In `settings.py`, replace hardcoded secret:

   ```python
   SECRET_KEY = os.getenv('SECRET_KEY')
   ```

5. **Database Setup**

   - Run in terminal:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   python manage.py createsuperuser
   ```

6. **Initial Deploy to Heroku**

   - Push to GitHub.
   - In Heroku > Deploy tab, connect your repo.
   - Click **Deploy Branch**.

The backend should now be live and ready to serve the frontend.

### 7.2 Frontend Deployment (Static Build Integration)

##### Tech Stack

- React
- WhiteNoise (for serving static files via Django)

1. **Install & configure WhiteNoise**

   ```bash
   pip install whitenoise==6.4.0
   pip freeze > requirements.txt
   ```

In `settings.py`:

- Add to `MIDDLEWARE`:

```python
'whitenoise.middleware.WhiteNoiseMiddleware',
```

- Ensure this order in `INSTALLED_APPS`:

```python
'cloudinary_storage',
'django.contrib.staticfiles',
'cloudinary',
```

- Add:

```python
STATIC_ROOT = BASE_DIR / 'staticfiles'
WHITENOISE_ROOT = BASE_DIR / 'staticfiles_build' / 'build'
```

2. **Update URLs and Axios**

   - In `urls.py`:

   ```python
   from django.views.generic import TemplateView

   urlpatterns = [
      path('', TemplateView.as_view(template_name='index.html')),
      path('api/', include('your_app.urls')),
   ]

   handler404 = TemplateView.as_view(template_name='index.html')
   ```

   - In `axiosDefaults.js`:

   ```js
   axios.defaults.baseURL = "/api";
   ```

   - In `package.json`:

   ```json
   "proxy": "http://localhost:8000"
   ```

3. **Runtime & Requirements**

   - Create `runtime.txt` in the root:

   ```
   python-3.10.11
   ```

   - Ensure `psycopg2` is in requirements:

   ```
   psycopg2==2.9.9
   ```

4. **React Build & Deployment (Repeat for Every Redeploy)**

   - In `env.py`, comment out the debug override:

   ```
   # os.environ['DEBUG'] = '1'
   ```

   - In `.gitignore`, temporarily allow staticfiles to be tracked:

   ```
   # staticfiles_build/
   ```

   - From `celebrateit_frontend/`, build React App:

   ```bash
   npm run build
   ```

   - From root project `PP5-celebrateit`, remove Previous Build then move New Build to Root-Level Staticfiles:

   ```bash
   rm -rf staticfiles/build/
   mv celebrateit_frontend/build/ staticfiles/
   ```

5. Commit and push to GitHub:

   ```bash
   git add .gitignore
   git add -f staticfiles/build/
   git commit -m "Rebuild frontend and move to staticfiles/build for deployment"
   git push
   ```

6. On Heroku → Config Vars (Final Fullstack)

| Key                     | Value                            |
| ----------------------- | -------------------------------- |
| `ALLOWED_HOSTS`         | `["your-app.herokuapp.com"]`     |
| `CLIENT_ORIGIN`         | `https://your-app.herokuapp.com` |
| `DATABASE_URL`          | postgresql Provided by CI        |
| `SECRET_KEY`            | Django secret                    |
| `CLOUDINARY_URL`        | From Cloudinary dashboard        |
| `DISABLE_COLLECTSTATIC` | `1` (optional during setup)      |

7. On Heroku → Deploy tab:

   - Select `main` branch
   - Click **Deploy Branch**

---

### Post-deployment Checks

- Visit `https://your-app.herokuapp.com/`
- Confirm React app loads and routes
- Confirm Django API at `/api/...`
- Test login, form submissions, image upload, etc.

### 7.3 Forking and Cloning

Forking the repository creates a copy of this project, allowing modifications without affecting the original code. Once the repository is forked, it can be cloned to a local machine for development.</br>
Follow these steps to fork, clone, and work on the project:

- **Fork the repository**

  - Go to the repository you want to fork on [GitHub](https://github.com/).
  - In the top-right corner of the page, click `Fork`.
  - Name the new forked repository, then click `Create Fork`.
  - This creates a copy of the repository under your own GitHub account.

- **Clone the forked repository**
  - In the forked repository on GitHub, above the list of files, click `Code`.
  - Copy the URL for the repository (either HTTPS or SSH).
  - Open a terminal (or Git Bash).
  - Type `git clone`, then paste the copied URL.
  - Press `Enter`.
  - Navigate to the newly cloned repository directory: `cd` and the repository name.

### 7.4 Security Considerations

- Secrets like `SECRET_KEY`, `CLOUDINARY_URL`, and `DATABASE_URL` are stored in environment variables and never committed to the repository.
- `env.py` files are excluded via `.gitignore` to prevent leakage of credentials and config values.
- `DEBUG` is controlled using both `env.py` and `settings.py` (`DEBUG = False` automatically in production):

  - In development, `env.py` includes:

    ```python
    os.environ['DEBUG'] = '1'
    ```

  - In `settings.py`, Django evaluates:

    ```python
    DEBUG = 'DEBUG' in os.environ
    ```

- `ALLOWED_HOSTS` is loaded from environment:

  ```python
  ALLOWED_HOSTS = json.loads(os.environ.get("ALLOWED_HOSTS", '["localhost"]'))
  ```

- CORS is restricted using:

  ```python
  CORS_ALLOWED_ORIGINS = [os.environ.get("CLIENT_ORIGIN")]
  CORS_ALLOW_CREDENTIALS = True
  ```

This setup keeps secrets out of version control and ensures the app runs securely in production.

---

## 8. Credit

### **Content & Resources**

All written content in this project was created by me, with occasional refinements assisted by ChatGPT to improve clarity, tone, and consistency.

Profile images shown across the app were generated using [AI-generated faces](https://generated.photos/faces), providing AI-created portraits for demonstration purposes.
All media assets (including avatars and post images) are hosted via Cloudinary to ensure optimized delivery and fast load times.

Additional UI illustrations and icons were sourced from [Freepik](https://www.freepik.com), and I used [Squoosh](https://squoosh.app) to reduce file size without quality loss.

### **Acknowledgements**

I would like to extend my sincere thanks to my mentor, **Julia Konovalova**, for her unwavering support, thoughtful feedback, and sharp eye throughout the development and testing of CelebrateIt. Her guidance helped shape the project into something more coherent, functional, and aligned with best practices.

I’m also grateful to the **Code Institute** tutor team and the Slack community for being a constant source of help, especially during the long debugging sessions when nothing seemed to work and I needed a second (or third) pair of eyes.

Finally, a heartfelt thank you to my husband, whose steady encouragement and patience carried me through the most frustrating days of bugs, rebuilds, and unexpected errors. This project wouldn’t have made it to the finish line without his support.

A special shoutout as well to my sister (aka "Magic Lulu") for thoroughly testing the app and providing both hilarious and insightful feedback. Her recognition/nomination/comments — while slightly unconventional — helped improve the UX and confirmed that the app could spark joy, even in testing mode!
