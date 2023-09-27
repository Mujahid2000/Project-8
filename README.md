# React + Vite

1.statistics :
The "Statistics" React component fetches donation data from a local JSON file and local storage, calculating and displaying statistics. It maintains states for total donations and user donations, utilizing useEffect hooks for data retrieval and updates. Using the Recharts library, it creates responsive PieCharts, adapting to mobile and desktop screens. The PieCharts visualize data with two segments: one representing the user's donations and the other total donations, each displaying respective percentage values. Legends provide labels for the segments. In essence, this component offers an informative visual representation of user contributions relative to the total, making it a valuable addition to a donation-related project.
2. card: 
This code comprises three React components: CardDetails, Card, and Cards. CardDetails fetches and displays details of a single card, Card styles individual cards with dynamic properties, and Cards arranges them in a responsive grid. These components work together to create a user-friendly interface for showcasing and navigating through a collection of cards or items.




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
