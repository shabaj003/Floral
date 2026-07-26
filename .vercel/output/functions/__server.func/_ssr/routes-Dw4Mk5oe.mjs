import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dw4Mk5oe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CursorTrail() {
	const dotRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	const trailsRef = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		let mx = window.innerWidth / 2, my = window.innerHeight / 2;
		let rx = mx, ry = my;
		const trails = trailsRef.current;
		let idx = 0;
		const move = (e) => {
			mx = e.clientX;
			my = e.clientY;
			if (dotRef.current) dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
			const t = trails[idx % trails.length];
			if (t) {
				t.style.transform = `translate(${mx - 8}px, ${my - 8}px) scale(1) rotate(${Math.random() * 360}deg)`;
				t.style.opacity = "0.9";
				setTimeout(() => {
					t.style.opacity = "0";
					t.style.transform = `translate(${mx - 8}px, ${my + 30}px) scale(0.3) rotate(${Math.random() * 360}deg)`;
				}, 30);
			}
			idx++;
		};
		const loop = () => {
			rx += (mx - rx) * .15;
			ry += (my - ry) * .15;
			if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
			requestAnimationFrame(loop);
		};
		window.addEventListener("mousemove", move);
		const raf = requestAnimationFrame(loop);
		return () => {
			window.removeEventListener("mousemove", move);
			cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-[100] hidden md:block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: dotRef,
				className: "absolute h-2 w-2 rounded-full bg-gold",
				style: { boxShadow: "0 0 12px #d4af37" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: ringRef,
				className: "absolute h-9 w-9 rounded-full border border-gold/60 transition-transform"
			}),
			Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: (el) => {
					if (el) trailsRef.current[i] = el;
				},
				className: "absolute h-4 w-4 opacity-0 transition-all duration-700",
				style: {
					background: "radial-gradient(circle, #f5d98a 0%, #d4af37 40%, transparent 70%)",
					borderRadius: "50% 0 50% 50%"
				}
			}, i))
		]
	});
}
function PetalRain({ count = 22 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: (0, import_react.useMemo)(() => Array.from({ length: count }).map((_, i) => ({
			id: i,
			left: Math.random() * 100,
			delay: Math.random() * 12,
			duration: 12 + Math.random() * 14,
			size: 10 + Math.random() * 16,
			hue: Math.random() > .5 ? "#e8b4b8" : "#f5d98a",
			opacity: .4 + Math.random() * .5
		})), [count]).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-0",
			style: {
				left: `${p.left}%`,
				width: p.size,
				height: p.size,
				background: `radial-gradient(circle at 30% 30%, ${p.hue} 0%, transparent 70%)`,
				borderRadius: "50% 0 50% 50%",
				opacity: p.opacity,
				animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
				filter: "blur(0.5px)"
			}
		}, p.id))
	});
}
var floatingFlowers = [
	{
		id: 1,
		delay: 0,
		duration: 8,
		size: "w-8 h-8",
		color: "bg-rose/40",
		left: "5%",
		startY: 0
	},
	{
		id: 2,
		delay: 1.2,
		duration: 9,
		size: "w-6 h-6",
		color: "bg-lotus/35",
		left: "15%",
		startY: 0
	},
	{
		id: 3,
		delay: 2.4,
		duration: 10,
		size: "w-7 h-7",
		color: "bg-gold/30",
		left: "25%",
		startY: 0
	},
	{
		id: 4,
		delay: .6,
		duration: 8.5,
		size: "w-5 h-5",
		color: "bg-pink/35",
		left: "35%",
		startY: 0
	},
	{
		id: 5,
		delay: 1.8,
		duration: 9.5,
		size: "w-7 h-7",
		color: "bg-rose/30",
		left: "55%",
		startY: 0
	},
	{
		id: 6,
		delay: .3,
		duration: 8.2,
		size: "w-6 h-6",
		color: "bg-lotus/40",
		left: "65%",
		startY: 0
	},
	{
		id: 7,
		delay: 2.1,
		duration: 9.8,
		size: "w-5 h-5",
		color: "bg-gold/25",
		left: "75%",
		startY: 0
	},
	{
		id: 8,
		delay: .9,
		duration: 10.2,
		size: "w-6 h-6",
		color: "bg-pink/30",
		left: "85%",
		startY: 0
	},
	{
		id: 9,
		delay: 1.5,
		duration: 9.2,
		size: "w-7 h-7",
		color: "bg-rose/25",
		left: "45%",
		startY: 0
	}
];
function FloatingFlowers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 pointer-events-none overflow-hidden",
		children: floatingFlowers.map((flower) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			"aria-hidden": "true",
			className: `absolute ${flower.size} ${flower.color} rounded-full blur-md`,
			style: {
				left: flower.left,
				bottom: "-50px"
			},
			animate: {
				y: [-50, -window.innerHeight - 100],
				x: [
					0,
					Math.sin(flower.id) * 80 - 40,
					0
				],
				opacity: [
					0,
					.6,
					0
				],
				rotate: [
					0,
					360,
					360
				]
			},
			transition: {
				duration: flower.duration,
				repeat: Infinity,
				delay: flower.delay,
				ease: "linear"
			}
		}, flower.id))
	});
}
function LogoMark({ size = 64 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		width: size,
		height: size,
		className: "drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "goldg",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#f5d98a"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "50%",
						stopColor: "#d4af37"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#8b6914"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "50",
				r: "47",
				fill: "none",
				stroke: "url(#goldg)",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "50",
				r: "42",
				fill: "none",
				stroke: "url(#goldg)",
				strokeWidth: "0.5",
				opacity: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(50 22)",
				children: [[
					0,
					72,
					144,
					216,
					288
				].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "0",
					cy: "-6",
					rx: "3.5",
					ry: "6",
					fill: "url(#goldg)",
					transform: `rotate(${a})`
				}, a)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					r: "2.5",
					fill: "#faf3e0"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "50",
				y: "62",
				textAnchor: "middle",
				fontFamily: "Cormorant Garamond, serif",
				fontSize: "28",
				fontStyle: "italic",
				fill: "url(#goldg)",
				fontWeight: "500",
				children: "FS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "50",
				y: "80",
				textAnchor: "middle",
				fontFamily: "Inter, sans-serif",
				fontSize: "6",
				fill: "#d4af37",
				letterSpacing: "3",
				children: "FLORALART"
			})
		]
	});
}
function BotanicalDivider({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 300 30",
		className,
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10 15 L120 15",
				stroke: "#d4af37",
				strokeWidth: "0.7",
				opacity: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "translate(150 15)",
				children: [[
					0,
					60,
					120,
					180,
					240,
					300
				].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "0",
					cy: "-6",
					rx: "2",
					ry: "5",
					fill: "#d4af37",
					transform: `rotate(${a})`,
					opacity: "0.9"
				}, a)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					r: "2",
					fill: "#f5d98a"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M180 15 L290 15",
				stroke: "#d4af37",
				strokeWidth: "0.7",
				opacity: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 15 Q80 5 100 15",
				stroke: "#8b6914",
				strokeWidth: "0.4",
				opacity: "0.5",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M200 15 Q220 25 240 15",
				stroke: "#8b6914",
				strokeWidth: "0.4",
				opacity: "0.5",
				fill: "none"
			})
		]
	});
}
var hero_default = "/assets/hero-Dm6urAd2.png";
var piece_necklace_default = "/assets/piece-necklace-D1UVgZ7R.jpg";
var piece_jhumar_default = "/assets/piece-jhumar-f2IrkXIJ.jpg";
var piece_earrings_default = "/assets/piece-earrings-GfTPaNGQ.jpg";
var piece_bridal_default = "/assets/piece-bridal-_iPg4IDK.jpg";
var piece_mundavli_default = "/assets/piece-mundavli-C1KadmJV.jpg";
var craft_process_default = "/assets/craft-process-CVGX3aNt.jpg";
var pieces = [
	{
		name: "Rose & Jasmine Necklace",
		cat: "Bridal",
		img: piece_necklace_default
	},
	{
		name: "Marigold Jhumar",
		cat: "Haldi",
		img: piece_jhumar_default
	},
	{
		name: "Blush Petal Earrings",
		cat: "Mehndi",
		img: piece_earrings_default
	},
	{
		name: "Complete Bridal Set",
		cat: "Wedding",
		img: piece_bridal_default
	},
	{
		name: "Pearl Mundavli",
		cat: "Ceremony",
		img: piece_mundavli_default
	}
];
var signatureStories = [
	{
		title: "Rose & Jasmine Necklace",
		kicker: "Bridal glow",
		summary: "Soft jasmine strands and rose accents designed to feel luminous in close-up portraits and ceremony light.",
		img: piece_necklace_default,
		accent: "#cf8aa3",
		highlights: [
			"Made around your outfit palette",
			"Lightweight for long celebrations",
			"Photogenic from every angle"
		]
	},
	{
		title: "Marigold Jhumar",
		kicker: "Haldi brightness",
		summary: "A joyful marigold composition that brings movement, warmth, and that fresh haldi radiance to the frame.",
		img: piece_jhumar_default,
		accent: "#d89a3f",
		highlights: [
			"Built for bright ceremonial photos",
			"Elegant but easy to wear",
			"Custom bloom density on request"
		]
	},
	{
		title: "Blush Petal Earrings",
		kicker: "Mehndi detail",
		summary: "Delicate floral earrings with a soft blush finish for evenings, mehndi moments, and graceful family portraits.",
		img: piece_earrings_default,
		accent: "#e3a7b3",
		highlights: [
			"Refined close-up finish",
			"Made to balance comfort and style",
			"Pairs well with matching sets"
		]
	},
	{
		title: "Complete Bridal Set",
		kicker: "Wedding harmony",
		summary: "A complete bridal story with coordinated blooms, pearls, and thoughtful balance across every piece.",
		img: piece_bridal_default,
		accent: "#b78a4f",
		highlights: [
			"Coordinated for the full look",
			"Designed for ceremonial flow",
			"Customisable for your event"
		]
	},
	{
		title: "Pearl Mundavli",
		kicker: "Ceremony framing",
		summary: "A traditional face-framing floral piece with a polished pearl finish, ideal for mandap and ritual moments.",
		img: piece_mundavli_default,
		accent: "#8ea378",
		highlights: [
			"Traditional silhouette",
			"Comfortable ceremonial fit",
			"Refined for portraits and rituals"
		]
	}
];
function FloralartHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative bg-background text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-0 pointer-events-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetalRain, { count: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingFlowers, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorTrail, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showcase, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveCraft, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignatureStory, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingContact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: 1,
			delay: .2
		},
		className: "fixed top-0 z-40 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size: 44 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden sm:block leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-script text-2xl leading-none",
							children: "Floralart"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] tracking-[0.35em] text-gold/70",
							children: "BY SADIYA"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-ivory/70 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#showcase",
							className: "hover:text-gold transition",
							children: "Showcase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#craft",
							className: "hover:text-gold transition",
							children: "Craft"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "hover:text-gold transition",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#booking",
							className: "hover:text-gold transition",
							children: "Booking"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#booking",
					className: "btn-gold rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em]",
					children: "DM to Book"
				})
			]
		})
	});
}
function Hero() {
	const tagline = "Handmade with love, crafted for your special moments.";
	const [typed, setTyped] = (0, import_react.useState)("");
	const heroHighlights = [
		{
			label: "Fresh-to-order",
			value: "Blooms"
		},
		{
			label: "Baramati studio",
			value: "Custom"
		},
		{
			label: "Same-day dispatch",
			value: "Pan-India"
		}
	];
	(0, import_react.useEffect)(() => {
		let i = 0;
		const id = setInterval(() => {
			i++;
			setTyped(tagline.slice(0, i));
			if (i >= 53) clearInterval(id);
		}, 35);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/15 via-background/30 to-background/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": "true",
				className: "absolute -left-24 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl",
				animate: {
					x: [
						0,
						18,
						0
					],
					y: [
						0,
						-14,
						0
					],
					scale: [
						1,
						1.08,
						1
					]
				},
				transition: {
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": "true",
				className: "absolute right-0 top-32 h-96 w-96 rounded-full bg-lotus/10 blur-3xl",
				animate: {
					x: [
						0,
						-16,
						0
					],
					y: [
						0,
						18,
						0
					],
					scale: [
						1,
						1.12,
						1
					]
				},
				transition: {
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": "true",
				className: "absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full border border-gold/10",
				animate: { rotate: 360 },
				transition: {
					duration: 28,
					repeat: Infinity,
					ease: "linear"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-6 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid w-full gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -30
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: 1,
							ease: "easeOut"
						},
						className: "relative z-10 max-w-2xl text-center lg:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "text-[10px] uppercase tracking-[0.6em] text-gold/70",
								initial: {
									opacity: 0,
									y: -12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .8,
									delay: .1
								},
								children: "Baramati - Est. Handmade"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "mt-6 flex justify-center lg:justify-start",
								animate: { y: [
									0,
									-6,
									0
								] },
								transition: {
									duration: 6,
									repeat: Infinity,
									ease: "easeInOut"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size: 92 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-gold/20 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-gold/80 backdrop-blur-sm lg:mx-0",
								initial: {
									opacity: 0,
									scale: .9
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: {
									duration: .8,
									delay: .18
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-gold animate-pulse" }), "Floral jewellery made for ceremonies"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
								initial: {
									opacity: 0,
									y: 18
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .9,
									delay: .22
								},
								className: "mt-6 text-script text-6xl leading-none sm:text-8xl md:text-9xl text-gold-shimmer",
								children: "Floralart"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "mt-2 flex items-center justify-center gap-4 lg:justify-start",
								initial: {
									opacity: 0,
									scaleX: .85
								},
								animate: {
									opacity: 1,
									scaleX: 1
								},
								transition: {
									duration: .7,
									delay: .3
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-16 bg-gold/50" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs uppercase tracking-[0.5em] text-ivory/80",
										children: "by Sadiya"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-16 bg-gold/50" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 min-h-16 max-w-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-lg italic text-ivory/85 md:text-xl",
									children: [typed, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 inline-block h-4 w-[2px] animate-pulse bg-gold align-middle" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-3 sm:grid-cols-3",
								children: heroHighlights.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 18
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .7,
										delay: .45 + index * .12
									},
									className: "rounded-2xl border border-gold/15 bg-black/18 p-4 text-left backdrop-blur-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-[0.35em] text-gold/60",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 font-display text-xl text-ivory",
										children: item.value
									})]
								}, item.value))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 flex flex-col items-center gap-4 sm:flex-row lg:justify-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
									whileHover: {
										scale: 1.03,
										y: -2
									},
									whileTap: { scale: .98 },
									href: "#showcase",
									className: "btn-gold rounded-full px-8 py-3 text-xs uppercase tracking-[0.25em]",
									children: "Explore the Collection"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
									whileHover: {
										scale: 1.03,
										y: -2
									},
									whileTap: { scale: .98 },
									href: "#booking",
									className: "btn-outline-gold rounded-full px-8 py-3 text-xs uppercase tracking-[0.25em]",
									children: "Book a Consultation"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 36,
							scale: .98
						},
						animate: {
							opacity: 1,
							x: 0,
							scale: 1
						},
						transition: {
							duration: 1.1,
							ease: "easeOut",
							delay: .15
						},
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								"aria-hidden": "true",
								className: "absolute -left-8 top-10 h-24 w-24 rounded-full border border-gold/25 bg-gold/10 backdrop-blur-sm",
								animate: {
									y: [
										0,
										-14,
										0
									],
									x: [
										0,
										10,
										0
									],
									rotate: [
										0,
										180,
										360
									]
								},
								transition: {
									duration: 5.5,
									repeat: Infinity,
									ease: "easeInOut"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								"aria-hidden": "true",
								className: "absolute right-2 top-24 h-16 w-16 rounded-full border border-gold/20 bg-lotus/10 backdrop-blur-sm",
								animate: {
									y: [
										0,
										12,
										0
									],
									x: [
										0,
										-8,
										0
									],
									rotate: [
										360,
										180,
										0
									]
								},
								transition: {
									duration: 4.8,
									repeat: Infinity,
									ease: "easeInOut",
									delay: .7
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								"aria-hidden": "true",
								className: "absolute -top-6 left-1/2 h-14 w-14 rounded-full border-2 border-rose/30 bg-rose/5 backdrop-blur-sm",
								animate: {
									y: [
										0,
										-10,
										0
									],
									scale: [
										.9,
										1.15,
										.9
									],
									rotate: [
										0,
										360,
										0
									]
								},
								transition: {
									duration: 6.5,
									repeat: Infinity,
									ease: "easeInOut"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								"aria-hidden": "true",
								className: "absolute -bottom-10 right-1/3 h-20 w-20 rounded-full border border-gold/15 bg-gold/5 backdrop-blur-sm",
								animate: {
									y: [
										0,
										8,
										0
									],
									x: [
										0,
										-6,
										0
									],
									rotate: [
										360,
										180,
										0
									]
								},
								transition: {
									duration: 7,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 1.2
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute -inset-4 rounded-[2.5rem] bg-gold/10 blur-3xl",
								animate: {
									opacity: [
										.45,
										.8,
										.45
									],
									scale: [
										1,
										1.04,
										1
									]
								},
								transition: {
									duration: 7,
									repeat: Infinity,
									ease: "easeInOut"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "relative overflow-hidden rounded-[2rem] border border-gold/20 bg-white/72 shadow-[0_24px_70px_rgba(63,59,42,0.14)]",
								animate: {
									y: [
										0,
										-8,
										0
									],
									rotate: [
										0,
										.5,
										0
									]
								},
								transition: {
									duration: 8,
									repeat: Infinity,
									ease: "easeInOut"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/5]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
											src: hero_default,
											alt: "Floralart handmade floral jewellery",
											width: 1200,
											height: 1500,
											loading: "eager",
											className: "h-full w-full object-cover",
											animate: { scale: [
												1,
												1.04,
												1
											] },
											transition: {
												duration: 12,
												repeat: Infinity,
												ease: "easeInOut"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											"aria-hidden": "true",
											className: "absolute -top-6 -right-4 h-12 w-12 rounded-full bg-rose/30 blur-xl",
											animate: {
												y: [
													0,
													-12,
													0
												],
												x: [
													0,
													8,
													0
												],
												rotate: [
													0,
													180,
													360
												]
											},
											transition: {
												duration: 5,
												repeat: Infinity,
												ease: "easeInOut"
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											"aria-hidden": "true",
											className: "absolute -bottom-4 -left-6 h-10 w-10 rounded-full bg-lotus/40 blur-lg",
											animate: {
												y: [
													0,
													10,
													0
												],
												x: [
													0,
													-6,
													0
												],
												rotate: [
													360,
													180,
													0
												]
											},
											transition: {
												duration: 6.2,
												repeat: Infinity,
												ease: "easeInOut",
												delay: .5
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											"aria-hidden": "true",
											className: "absolute top-1/3 -right-5 h-8 w-8 rounded-full bg-gold/25 blur-md",
											animate: {
												y: [
													0,
													-8,
													0
												],
												x: [
													0,
													6,
													0
												]
											},
											transition: {
												duration: 4.5,
												repeat: Infinity,
												ease: "easeInOut",
												delay: 1
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											"aria-hidden": "true",
											className: "absolute bottom-1/4 -left-4 h-6 w-6 rounded-full bg-pink/20 blur-sm",
											animate: {
												y: [
													0,
													6,
													0
												],
												x: [
													0,
													-8,
													0
												],
												scale: [
													.8,
													1.2,
													.8
												]
											},
											transition: {
												duration: 5.5,
												repeat: Infinity,
												ease: "easeInOut",
												delay: .3
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											className: "absolute left-5 top-5 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-ink backdrop-blur-md",
											animate: { y: [
												0,
												-4,
												0
											] },
											transition: {
												duration: 4.5,
												repeat: Infinity,
												ease: "easeInOut"
											},
											children: "Handmade • Floralart"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											className: "absolute inset-x-5 bottom-5 rounded-2xl bg-black/80 p-5 backdrop-blur-md",
											initial: {
												opacity: 0,
												y: 18
											},
											animate: {
												opacity: 1,
												y: 0
											},
											transition: {
												duration: .9,
												delay: .35
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] uppercase tracking-[0.35em] text-muted-foreground",
													children: "Signature floral direction"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "mt-2 font-display text-2xl text-ivory",
													children: "Soft, bright, and tailored to the occasion."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-muted-foreground",
													children: "A polished visual language built for calm luxury, clean transitions, and easy booking."
												})
											]
										})
									]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
				href: "#showcase",
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: 1.8,
					duration: .9
				},
				className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 animate-pulse-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "20",
						height: "20",
						viewBox: "0 0 24 24",
						fill: "none",
						className: "text-gold",
						children: [[
							0,
							60,
							120,
							180,
							240,
							300
						].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
							cx: "12",
							cy: "7",
							rx: "1.6",
							ry: "4",
							fill: "currentColor",
							transform: "rotate(" + a + " 12 12)",
							opacity: "0.8"
						}, a)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "12",
							cy: "12",
							r: "1.8",
							fill: "#faf3e0"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-[10px] uppercase tracking-[0.4em] text-ivory/60",
					children: "Scroll"
				})]
			})
		]
	});
}
function SectionHeading({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-[0.6em] text-gold/70",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-4xl md:text-6xl text-ivory",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotanicalDivider, { className: "mx-auto mt-5 w-72" }),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-ivory/70 md:text-lg",
				children: sub
			})
		]
	});
}
function Showcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "showcase",
		className: "relative py-32 px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Signature Pieces",
			title: "A Live Flower Art Showcase",
			sub: "Every strand tells a story - fresh blooms hand-strung the morning of your ceremony, so every petal arrives alive."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
			children: pieces.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
				piece: p,
				index: i
			}, p.name))
		})]
	});
}
function TiltCard({ piece, index }) {
	const ref = (0, import_react.useRef)(null);
	const handleMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width - .5;
		const y = (e.clientY - r.top) / r.height - .5;
		el.style.transform = `perspective(1000px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(20px)`;
	};
	const reset = () => {
		if (ref.current) ref.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0) translateZ(0)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 60
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			delay: index * .08
		},
		className: "group relative",
		style: { perspective: "1000px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			onMouseMove: handleMove,
			onMouseLeave: reset,
			className: "relative overflow-hidden rounded-2xl glass-card transition-transform duration-300 ease-out",
			style: { transformStyle: "preserve-3d" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-square overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: piece.img,
						alt: piece.name,
						width: 900,
						height: 900,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/25 group-hover:ring-gold/60 transition" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative p-6",
				style: { transform: "translateZ(30px)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.35em] text-gold/70",
						children: piece.cat
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl text-ivory",
						children: piece.name
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-10 w-10 rounded-full border border-gold/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition",
						children: "→"
					})]
				})
			})]
		})
	});
}
function LiveCraft() {
	const sectionRef = (0, import_react.useRef)(null);
	const stringRef = (0, import_react.useRef)(null);
	const flowersRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!sectionRef.current) return;
		gsapWithCSS.registerPlugin(ScrollTrigger);
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(stringRef.current, { scaleX: 0 }, {
				scaleX: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 70%",
					end: "bottom 40%",
					scrub: 1
				}
			});
			gsapWithCSS.utils.toArray(".craft-flower").forEach((el, i) => {
				gsapWithCSS.fromTo(el, {
					scale: 0,
					rotate: -180,
					opacity: 0
				}, {
					scale: 1,
					rotate: 0,
					opacity: 1,
					duration: .6,
					ease: "back.out(1.6)",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: `top+=${i * 40} 70%`,
						toggleActions: "play none none reverse"
					}
				});
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "craft",
		ref: sectionRef,
		className: "relative overflow-hidden py-32 px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 opacity-30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: craft_process_default,
				alt: "",
				width: 1400,
				height: 900,
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Live Craft",
					title: "Watch a Garland Come Alive",
					sub: "Scroll gently - flowers assemble one bloom at a time, just the way Sadiya strings them by hand at dawn."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto mt-24 h-40 max-w-4xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: stringRef,
						className: "absolute top-1/2 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: flowersRef,
						className: "relative flex h-full items-center justify-between",
						children: Array.from({ length: 11 }).map((_, i) => {
							const isRose = i % 3 === 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "craft-flower",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: isRose ? 56 : 42,
									height: isRose ? 56 : 42,
									viewBox: "0 0 60 60",
									children: [[
										0,
										60,
										120,
										180,
										240,
										300
									].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
										cx: "30",
										cy: "16",
										rx: "8",
										ry: "14",
										fill: isRose ? "#d4788a" : i % 2 === 0 ? "#faf3e0" : "#f5d98a",
										opacity: "0.9",
										transform: `rotate(${a} 30 30)`
									}, a)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "30",
										cy: "30",
										r: "6",
										fill: isRose ? "#8b2c3a" : "#d4af37"
									})]
								})
							}, i);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-16 grid max-w-4xl gap-8 text-center md:grid-cols-3",
					children: [
						{
							t: "Fresh Sourcing",
							d: "Blooms sourced at sunrise from Baramati's flower markets."
						},
						{
							t: "Hand-strung",
							d: "Each petal secured with silk thread - no shortcuts, no glue."
						},
						{
							t: "Delivered same-day",
							d: "Sealed in cool packaging so your jewellery arrives alive."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card rounded-xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-script text-3xl text-gold",
							children: c.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ivory/70",
							children: c.d
						})]
					}, c.t))
				})
			]
		})]
	});
}
function SignatureStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:sticky lg:top-28 self-start max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.6em] text-gold/70",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-6xl text-ivory",
						children: "Handmade floral jewellery for Haldi, Mehndi, baby showers, mundavli, engagements, and weddings."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotanicalDivider, { className: "mt-5 w-72" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-ivory/70 md:text-lg",
						children: "Choose the look that suits your ceremony, then scroll right to see each floral story settle softly into view."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-3",
						children: signatureStories.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-2xl border border-gold/15 bg-black/15 px-4 py-3 backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold",
								children: "*"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg text-ivory",
									children: story.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-[0.35em] text-gold/70",
									children: story.kicker
								})]
							})]
						}, story.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#booking",
						className: "btn-gold mt-8 inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.25em]",
						children: "DM for Booking"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: signatureStories.map((story, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
					id: "story-" + index,
					initial: {
						opacity: 0,
						x: 80
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					transition: {
						duration: .8,
						delay: index * .08
					},
					className: "overflow-hidden rounded-[2rem] glass-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-[1fr_0.94fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 md:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-[0.35em] text-gold/70",
									children: story.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-3xl text-ivory",
									children: story.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-ivory/70",
									children: story.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-3",
									children: story.highlights.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-sm text-ivory/70",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold",
											style: {
												borderColor: story.accent,
												color: story.accent
											},
											children: "+"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
									}, point))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#booking",
									className: "btn-gold mt-8 inline-flex rounded-full px-6 py-3 text-xs uppercase tracking-[0.25em]",
									children: "Book this story"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-h-80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: story.img,
									alt: story.title,
									className: "h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-5 top-5 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-ink backdrop-blur-md",
									children: String(index + 1).padStart(2, "0")
								})
							]
						})]
					})
				}, story.title))
			})]
		})
	});
}
function Gallery() {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-24 px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Moments",
			title: "From Our Brides & Ceremonies"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { y },
			className: "mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4",
			children: [
				piece_necklace_default,
				piece_jhumar_default,
				piece_mundavli_default,
				piece_earrings_default,
				piece_bridal_default,
				piece_necklace_default,
				piece_jhumar_default
			].map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: { once: true },
				transition: {
					duration: .6,
					delay: i % 4 * .1
				},
				className: `group overflow-hidden ${i % 3 === 0 ? "rounded-full aspect-square" : "rounded-2xl aspect-[4/5]"} ring-1 ring-gold/25 hover:ring-gold hover:shadow-[0_0_40px_-10px_#d4af37] transition-all`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img,
					alt: "Floralart moment",
					width: 600,
					height: 600,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-125"
				})
			}, i))
		})]
	});
}
function BookingContact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "booking",
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card rounded-[2rem] p-8 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.6em] text-gold/70",
						children: "Booking"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-6xl text-ivory",
						children: "Bring Your Vision to Bloom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotanicalDivider, { className: "mt-5 w-72" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-ivory/70 md:text-lg",
						children: "Slots fill quickly during wedding season. Reach out early so Sadiya can craft something truly yours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-4 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://instagram.com/floralart_by_sadiya",
							target: "_blank",
							rel: "noreferrer",
							className: "btn-gold inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Message on Instagram" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/919999999999",
							target: "_blank",
							rel: "noreferrer",
							className: "btn-outline-gold inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-[0.25em]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp" })]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, {}),
						title: "Instagram",
						detail: "@floralart_by_sadiya",
						href: "https://instagram.com/floralart_by_sadiya"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinIcon, {}),
						title: "Studio",
						detail: "Baramati, Maharashtra"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {}),
						title: "WhatsApp",
						detail: "+91 99999 99999",
						href: "https://wa.me/919999999999"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruckIcon, {}),
						title: "Courier",
						detail: "Pan-India same-day dispatch"
					})
				]
			})]
		})
	});
}
function ContactCard({ icon, title, detail, href }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group glass-card h-full rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-gold",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold group-hover:bg-gold group-hover:text-ink transition-all group-hover:rotate-12",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 text-[10px] uppercase tracking-[0.4em] text-gold/70",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 font-display text-xl text-ivory",
				children: detail
			})
		]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		children: inner
	}) : inner;
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-gold/15 py-12 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center gap-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size: 48 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotanicalDivider, { className: "w-56" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-script text-3xl text-gold-shimmer",
					children: "Floralart by Sadiya"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.4em] text-ivory/50",
					children: "Baramati - India - Handmade with love"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-ivory/40",
					children: [
						"(c) ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Floralart by Sadiya. All blooms reserved."
					]
				})
			]
		})
	});
}
function InstagramIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "3",
				width: "18",
				height: "18",
				rx: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.5",
				cy: "6.5",
				r: "1",
				fill: "currentColor"
			})
		]
	});
}
function PinIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 22s-7-7.5-7-13a7 7 0 1114 0c0 5.5-7 13-7 13z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "9",
			r: "2.5"
		})]
	});
}
function TruckIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 7h11v10H3zM14 10h4l3 3v4h-7z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "7",
				cy: "18",
				r: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.5",
				cy: "18",
				r: "1.6"
			})
		]
	});
}
function WhatsAppIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "22",
		height: "22",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.5 3.5A11 11 0 003.4 17l-1.4 5 5.1-1.3A11 11 0 1020.5 3.5zM12 20.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1120.2 12 8.2 8.2 0 0112 20.2zm4.5-6.2c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.1-.5 0a6.7 6.7 0 01-3.3-2.9c-.2-.4.2-.4.6-1.2a.4.4 0 000-.4c0-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.1 5.1 0 001.1 2.7 11.6 11.6 0 004.4 3.9c.6.3 1.1.4 1.5.5a3.6 3.6 0 001.6.1 2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.2-.3-.3-.5-.4z" })
	});
}
//#endregion
export { FloralartHome as component };
