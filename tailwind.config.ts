
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				saul: {
					red: '#E63946',     // Vibrant red from Better Call Saul logo
					yellow: '#FFD700',  // Golden yellow from the logo
					gold: '#F2C14E',    // Warmer gold tone from desert scenes
					rust: '#C45D3B',    // Rusty brown from Albuquerque scenery
					sand: '#E8D7B3',    // Desert sand color
					navy: '#1D3557',    // Dark navy from Saul's suits
					blue: '#457B9D',    // Medium blue tone
					charcoal: '#2C3333', // Dark charcoal for text
					desert: '#DEB887',   // Desert backdrop color
					tan: '#D2B48C',      // Tan from desert landscapes
					coffee: '#6F4E37',   // Coffee brown for accents
					cream: '#F5F5DC'     // Light cream background
				},
				gray: {
					dark: '#2C3333',
					DEFAULT: '#8E9196',
					light: '#F8F9FA'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Space Grotesk', 'sans-serif'],
				mono: ['SF Mono', 'monospace']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				slideUp: {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					from: { transform: 'translateY(-20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' },
				},
				slideLeft: {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' },
				},
				slideRight: {
					from: { transform: 'translateX(-20px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				spotlight: {
					"0%": {
						opacity: "0",
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: "1",
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
				shimmer: {
					from: { backgroundPosition: "0 0" },
					to: { backgroundPosition: "-200% 0" },
				},
				neon: {
					'0%, 100%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #0ff, 0 0 25px #0ff, 0 0 30px #0ff, 0 0 35px #0ff' },
					'50%': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff' }
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'slide-down': 'slideDown 0.6s ease-out forwards',
				'slide-left': 'slideLeft 0.6s ease-out forwards',
				'slide-right': 'slideRight 0.6s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse': 'pulse 3s ease-in-out infinite',
				'spotlight': "spotlight 2s ease .75s 1 forwards",
				'shimmer': "shimmer 2s linear infinite",
				'neon': 'neon 1.5s ease-in-out infinite',
				'marquee': 'marquee 25s linear infinite'
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
