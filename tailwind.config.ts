/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"], // Standard for Shadcn UI
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}', // If using pages router
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',    // If using app router
        './src/**/*.{js,ts,jsx,tsx,mdx}',  // Or if your components are in src
        './app/globals.css',
    ],
    // prefix: "", // Shadcn UI default is no prefix, usually not needed
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Custom sidebar colors from globals.css for direct Tailwind class usage
                'sidebar-background': 'hsl(var(--sidebar-background))',
                'sidebar-foreground': 'hsl(var(--sidebar-foreground))',
                'sidebar-active-background': 'hsl(var(--sidebar-active-background))',
                'sidebar-active-foreground': 'hsl(var(--sidebar-active-foreground))',
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                // Example: If using next/font for Inter
                // Make sure --font-sans is defined, typically in your layout file
                sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" }, // In v4, consider using "0px" if "0" causes issues
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" }, // In v4, consider using "0px"
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },

}