// tailwind.config.js
/**@type {import{'tailwindcss'}.config} */
export default{
    content: [
        './index.html',
        './src/components/Header/index.jsx'], // Path to your files
    theme: {
      extend: {
        colors: {
          primary: '#ff5252',
        },
        backgroundColor: {
            primary: '#ff5252',
          },
      },
    },
    plugins: [],
  }
  