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
            sm: '8px'
        },
        fontFamily: {
            'display': ['Nanum Pen Script']
        }
    }
  },
  plugins: [],
}
