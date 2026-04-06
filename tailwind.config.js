/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.

    content: [
        "./App.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}", // Include your app directory
        "./components/**/*.{js,jsx,ts,tsx}", // Include components directory
        "./src/**/*.{js,jsx,ts,tsx}" // Include src directory if you use one
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {}
    },
    plugins: []
}
