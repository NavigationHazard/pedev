module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            DEFAULT: '4px',
            'md': '0.375rem',
            'lg': '0.5rem',
            'full': '9999px',
            'large': '40px',
        },
  
        
        backgroundSize: {
            'auto': 'auto',
            'cover': 'cover',
            'contain': 'contain',
            '50%': '50%',
            '16': '4rem',
          },
        letterSpacing: {
            tight: '-.015em',
        
        },
        leading: {
            tight: '-.015em',
        
        },
      
      extend: {
          height: {
              'half-screens': '50vh'
          },
          backgroundImage: {
            'custom': "url('/images/ipad.png')",
            'mb': "url('/images/mb.png')",
            'dark': "url('/images/dark.png')",
            'pale': "url('/images/pale.png')",
            'gruv': "url('/images/gruv.png')",
            'iphone': "url('/assets/works/phone_1.svg')",
            'iphone2': "url('/assets/works/phone_2.svg')",
            'iphone3': "url('/assets/works/phone_3.svg')",
          },
          
      }
    },
    plugins: [],
  }