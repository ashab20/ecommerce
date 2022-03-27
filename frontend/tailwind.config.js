module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
      fontFamily:{
        sans: ['Montserrat'],
            'Roboto':['Roboto'],
            'Poppins':['Poppins'],
            'Courgette':['Courgette'],
            'Montserrat':['Montserrat']
    },
    extend: {
            screens: {
                // for mobile responsive
                sm:'540px',
                // for tabler responsive
                md:'768px',
                // for laptop display
                lg:'1024px',
            // for meduim display
                xl:'1280px',
                // for larger display
                mx: '2048px',
            },
        },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}