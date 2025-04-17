# YouTube Homepage Clone 🎥

This project is a responsive and interactive clone of the YouTube homepage built using React.  
It displays a grid of video cards, each with image thumbnails, channel details, views, and timestamps — just like the real YouTube experience.

## 🛠 Technologies Used
- React (JSX components)
- CSS3 (Flexbox & Grid)
- JavaScript (ES6+)
- date-fns (for relative time display)
- Lucide icons (vertical menu)

## 🎯 Features
- 2-row, 4-column video grid layout
- Video thumbnail with hover effect (switches image)
- Title, channel name, view count, and time posted
- Profile picture next to channel
- Vertical 3-dot icon (Lucide)
- Props drilling to pass data between components
- Hover effects for channel name & thumbnail

## 💡 Component Breakdown
- `VideoCard`: displays a single video
- `VideoGrid`: maps through all video props
- `TimeUtils`: date-fns for calculating time differences

## 🧪 How to Run
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev` or `npm start`
4. Visit `http://localhost:3000` in your browser

## 📌 Status
✅ Completed (UI only, no API/backend)  
📅 Last updated: April 2025

---

Made with 💻 by [Tsetsen](https://github.com/tsetse0725)
