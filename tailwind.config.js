/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
  			fooror: {
  				purple: '#5210F8',
  				'purple-dark': '#3B0BB3',
  				'purple-light': '#C47DFD',
  				'purple-lighter': '#E0B8FE',
  				yellow: '#FACC15',
  				'yellow-dark': '#EAB308',
  				navy: '#072C55',
  				dark: '#072C55',
  				'gray-bg': '#F9FAFB',
  				'gray-light': '#F3F4F6',
  				gray: '#9CA3AF',
  				'gray-dark': '#374151',
  				text: '#072C55'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-onest)',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			display: [
  				'4.5rem',
  				{
  					lineHeight: '1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'display-sm': [
  				'3.5rem',
  				{
  					lineHeight: '1.05',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'display-lg': [
  				'5rem',
  				{
  					lineHeight: '0.95',
  					letterSpacing: '-0.02em'
  				}
  			]
  		},
  		borderRadius: {
  			xl: '0.75rem',
  			'2xl': '1rem',
  			'3xl': '1.5rem',
  			'4xl': '2rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			card: '0 4px 24px rgba(0, 0, 0, 0.06)',
  			'card-hover': '0 8px 32px rgba(0, 0, 0, 0.1)',
  			glow: '0 0 40px rgba(91, 33, 182, 0.35)',
  			'glow-lg': '0 0 60px rgba(91, 33, 182, 0.45)'
  		},
  		transitionTimingFunction: {
  			smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
  			bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'float-slow': {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-6px)'
  				}
  			},
  			'pulse-glow': {
  				'0%, 100%': {
  					boxShadow: '0 0 30px rgba(91, 33, 182, 0.3)'
  				},
  				'50%': {
  					boxShadow: '0 0 50px rgba(91, 33, 182, 0.5)'
  				}
  			},
  			'rotate-slow': {
  				from: {
  					transform: 'rotate(0deg)'
  				},
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(40px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'scale-in': {
  				'0%': {
  					transform: 'scale(0.9)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
            shine: {
                '0%': { left: '-100%' },
                '100%': { left: '100%' }
            },
            'pulse-slow': {
                '0%, 100%': { opacity: '1' },
                '50%': { opacity: '0.5' }
            }
  		},
  		animation: {
  			float: 'float 3s ease-in-out infinite',
  			'float-slow': 'float-slow 4s ease-in-out infinite',
  			'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
  			'rotate-slow': 'rotate-slow 25s linear infinite',
  			'slide-up': 'slide-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
  			'fade-in': 'fade-in 0.4s ease-out forwards',
  			'scale-in': 'scale-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
            shine: 'shine 1s forwards',
            'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
