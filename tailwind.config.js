/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "bright-blue": "hsl(220, 98%, 61%)",
          "cyan":"hsl(192, 100%, 67%)",
          "purple":"hsl(280, 87%, 65%)"
        },
        "dark-theme": {
          "very-light-gray":"hsl(0, 0%, 98%)",
          "very-light-grayish-blue":"hsl(236, 33%, 92%)",
          "light-grayish-blue":"hsl(233, 11%, 84%)",
          "dark-grayish-blue":"hsl(236, 9%, 61%)",
          "very-dark-grayish-blue":"hsl(235, 19%, 35%)",
        },
        "light-theme": {
          "very-dark-blue":"hsl(235, 21%, 11%)",
          "very-dark-desaturated-blue":"hsl(235, 24%, 19%)",
          "light-grayish-blue":"hsl(234, 39%, 85%)",
          "light-grayish-blue-hv":"hsl(236, 33%, 92%)",
          "dark-grayish-blue":"hsl(234, 11%, 52%)",
          "very-dark-grayish-blue":"hsl(233, 14%, 35%)",
          "very-dark-grayish-blue-2":"hsl(237, 14%, 26%)",
        }
      },
      letterSpacing: {
        "widest":"0.2em"
      },
      keyframes: {
        "feedback": {
          "0%": {
            transform: "translateY(-3rem)",
          },
          "10%": {
            transform: "translateY(1.25rem)",
          },
          "50%":{
            transform: "translateY(1rem)",
          },
          "90%": {
            transform: "translateY(1.25rem)",
          },
          "100%": {
            transform: "translateY(-3rem)",
          },
        }
      },
      animation: {
        "feedback": "feedback 3s ease-in-out alternate forwards"
      }
    },
    screens: {
        "xs":"425px",
        "sm":"568px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1440px",
        "2xl":"1600px",
        "3xl":"2000px",
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}

