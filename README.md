# Scribo: Collaborative Document Editor

## 🚀 Overview

**Scribo** is a web app in which user create, manage their documents. It allows user to invite other collaborators, tag comments and discuss over threads.
It is built with **Next.js**, **TypeScript**, **Lexical Editor**, and **ShadCN with Tailwind CSS** for styling.

**Live peview**: [Scribo](https://scribo-ten.vercel.app/)

---

## 📌 Features

✅ **Authentication**: Authentication with Google through NextAuth.\
✅ **Collaboration**: Multiple user can update the a document at a single time.\
✅ **Documents Management**: Users can create, delete, share documents.\
✅ **Comments**: Users can add inline or general comments with discussion threads.\
✅ **Notifications**: User notification of document share and new comments.\
✅ **Responsive**: Application is responsive across devices.

---

## 📂 Project Structure

```
├── app/                   # Next.js App Router directory
│   ├── (auth)/            # Authentication routes
│   │   ├── sign-in/
│   │   ├── sign-up/
│   ├── (root)/            # Main app pages
│   │   ├── documents/
│   │   ├── error.tsx      # Global error handling page
│   │   └── page.tsx       # Main root page
│   ├── Provider.tsx       # Context provider
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ActiveCollaborators.tsx
│   ├── AddDocumentButton.tsx
│   ├── CollaborativeRoom.tsx
│   ├── Collaborator.tsx
│   ├── Comments.tsx
│   ├── DeleteModal.tsx
│   ├── Header.tsx
│   ├── Loader.tsx
│   ├── Notifications.tsx
│   ├── ShareModal.tsx
│   ├── UserTypeSelector.tsx
│   ├── editor/            # Editor-related components
│   └── ui/                # UI-related components
├── components.json        # Component metadata
├── lib/                   # Utility functions & actions
│   ├── actions/           # Server actions
│   ├── liveblock.ts       # Liveblocks integration
│   └── utils.ts           # Utility functions
├── liveblocks.config.ts   # Liveblocks configuration
├── middleware.ts          # Middleware for Next.js
├── styles/                # Theme-based styles
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── types/                 # Type definitions
```

---

## 🛠 Tech Stack

- Next.js
- TypeScript
- Liveblocks
- Lexical Editor
- ShadCN
- Tailwind CSS

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/jaxen21/scribo.git
cd scribo
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables\*\*

Create a new file named `.env` in the root of your project and add the following content:

```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & LiveBlocks credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/) and [Liveblocks](liveblocks.io/) website.

### 4️⃣ Start the Development Server

```bash
npm run dev
```

### 5️⃣ Open in Browser

Go to [http://localhost:3000](http://localhost:3000) to see the dashboard.

---
