module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}' 
  ],
  theme: {
    extend: {
        backgroundImage: {
            'tree': "url('../public/Tree-And-Leaves-Silhouette.svg')"
        },
        padding: {
            sm: '4px'
        },
        fontFamily: {
            'display': ['Clicker Script']
        },
        colors: {
            'tiny': '#C5C6D0'
        }
    }
  },
  plugins: [],
}
