# twater

A Twitter-like social media application built with Nuxt.js, Vue 3, Tailwind CSS, and DaisyUI.

## Features

- 🎨 Modern UI with Tailwind CSS and DaisyUI components
- 🚀 Built with Nuxt 4 and Vue 3
- 📱 Responsive design for all devices
- 🌙 Light and dark theme support
- ✍️ Tweet composition with character limit
- 💬 Interactive tweet cards with like, retweet, and comment actions
- 🔍 Explore trending topics
- 🔔 Notifications page
- 👤 User profile page
- 📊 Trending sidebar
- 👥 "Who to follow" suggestions

## Tech Stack

- **Framework**: Nuxt.js 4
- **UI Library**: Vue 3
- **Styling**: Tailwind CSS
- **Components**: DaisyUI
- **Language**: TypeScript

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Project Structure

```
twater/
├── app/
│   └── app.vue          # Root component
├── components/
│   ├── TweetCard.vue    # Individual tweet display
│   └── TweetComposer.vue # Tweet composition form
├── layouts/
│   └── default.vue      # Main layout with sidebar
├── pages/
│   ├── index.vue        # Home feed
│   ├── explore.vue      # Explore trending topics
│   ├── notifications.vue # Notifications
│   └── profile.vue      # User profile
├── public/              # Static assets
└── nuxt.config.ts       # Nuxt configuration
```

## Features Breakdown

### Home Feed
- Compose new tweets with character counter
- View feed of tweets
- Interactive actions (like, retweet, comment, share)

### Sidebar Navigation
- Quick navigation between pages
- Tweet button for quick composition
- Trending topics
- "Who to follow" suggestions

### Responsive Design
- Mobile-first approach
- Adapts to different screen sizes
- Collapsible sidebars on smaller screens

## License

MIT
