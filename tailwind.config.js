/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "75rem",
        "480px": "30rem",
      },
      height: {
        23: "5.625rem",
        "3px": "0.188rem",
        "235px": "14.688rem",
        "350px": "21.875rem",
        "270px": "16.875rem",
      },
      width: {
        22: "5.25rem",
        "158px": "9.875rem",
        "810px": "51.25rem",
        100: "25rem",
      },
      textColor: {
        textColor: "#444",
      },
      boxShadow: {
        subNav: "0 1px 2px 2px rgb(0 0 0 / 4%)",
        product_hover: "0px 1px 69.16px 6.84px rgb(20 64 51 / 19%)",
        product_default: "0 8px 22px rgb(0 0 0 / 4%)",
      },
      fontFamily: {
        monsterat_sans: "Montserrat,sans-serif",
      },
      backgroundImage: {
        aboutBg:
          "url(https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/bg-bottom-right.png?1664096870043)",
        aboutBg2:
          "url(https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/bg-department.png?1664096870043)",
        pageTitle:
          "url(https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/bg_bread_crumb.jpg?1607933569580)",
        pageNotFound:
          "url(https://static.vecteezy.com/system/resources/previews/006/618/492/non_2x/error-404-page-not-found-background-free-vector.jpg)",
        bookingBg:
          "url(https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/bg-bottom-left2.png?1677379206119)",
      },
      backgroundPosition: {
        top_right: "top right",
        top_left: "top left",
        bottom_left: "bottom left",
      },
      fontSize: {
        "3.5xl": "2rem",
        "17px": "1.063rem",
        "40px": "2.5rem",
        "44px": "2.75rem",
      },
      margin: {
        container: "calc(100% - 600px)",
      },
      padding: {
        container: "calc(100% - 600px)",
      },
      gridTemplateColumns: {
        cols_5_7: "5fr 7fr",
        cols_7_5: "7fr 5fr",
        "8_4": "8fr 4fr",
        "3_9": "3fr 9fr",
      },
      minHeight: {
        "120px": "7.5rem",
      },
      keyframes: {
        menu: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(0)" },
        },
        filter: {
          "0%": { transform: "translateX(120%)" },
          "100%": { transform: "translateX(0)" },
        },
        dropdown: {
          "0%": {
            height: "100%",
          },
          "100%": {
            height: "0%",
          },
        },
      },
      animation: {
        menu_ant: "menu 1s ease",
        filter_amt: "filter 1s ease",
        drop_down: "dropdown 0.8s ease",
      },
    },
  },
  plugins: [],
};
