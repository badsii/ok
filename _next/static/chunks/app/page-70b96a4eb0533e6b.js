(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        4101: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 1635))
        },
        6463: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s(1169),
                a = {};
            for (var n in r) "default" !== n && (a[n] = (function(e) {
                return r[e]
            }).bind(0, n));
            s.d(t, a)
        },
        1635: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var r = s(7437),
                a = s(1809),
                n = s(7138),
                l = s(7133),
                i = s(2834),
                o = s(1936),
                c = s(2265);

            function d(e) {
                let {
                    children: t
                } = e;
                return (0, c.useEffect)(() => {
                    let e = document.querySelector(".cards"),
                        t = document.querySelectorAll(".card"),
                        s = e => {
                            t.forEach(t => {
                                let s = t.getBoundingClientRect(),
                                    r = e.clientX - s.left,
                                    a = e.clientY - s.top;
                                t.style.setProperty("--xPos", "".concat(r, "px")), t.style.setProperty("--yPos", "".concat(a, "px"))
                            })
                        };
                    return e && e.addEventListener("mousemove", s), () => {
                        e && e.removeEventListener("mousemove", s)
                    }
                }, []), (0, r.jsx)("div", {
                    className: "cards flex flex-wrap justify-between gap-8",
                    children: t
                })
            }

            function u(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)("div", {
                    className: "card flex-[100%] sm:flex-[45%]",
                    children: (0, r.jsx)("div", {
                        className: "card-content rounded-xl p-7 sm:p-10",
                        children: t
                    })
                })
            }
            let x = [{
                    icon: "✍️",
                    title: "Markdown",
                    description: "Elevate your description with markdown. Use our easy-to-use syntax to create beautifully formatted content."
                }, {
                    icon: "\uD83C\uDFA8",
                    title: "Colors, Fonts & Cursors",
                    description: "Choose accent colors, fonts & cursors to give your page a personalized appearance. Make it visually stunning!"
                }, {
                    icon: "\uD83D\uDDBC️",
                    title: "Avatars & Backgrounds",
                    description: "Bring your page to life with your avatars & backgrounds. Whether its images, GIFs or videos."
                }, {
                    icon: "\uD83C\uDFB9",
                    title: "Spotify & Tracks",
                    description: "Share your favorite tunes or original compositions effortlessly. Bring your page to life with the magic of music!"
                }, {
                    icon: "\uD83D\uDD17",
                    title: "85+ Social Platforms",
                    description: "Enable visitors to explore your diverse digital landscape, all within a single place. Unify your digital identity!"
                }, {
                    icon: "\uD83C\uDFAE",
                    title: "Discord Presence",
                    description: "Share your discord presence. Let people see the real you, both in your work & in your digital life."
                }],
                m = ["users", "pages", "views"];

            function h() {
                let [e, t] = (0, c.useState)([]);
                (0, c.useEffect)(() => {
                    fetch("/api/previews").then(e => e.ok ? e.json() : []).then(e => {
                        t(e)
                    })
                }, [t]);
                let [s, h] = (0, c.useState)(null);
                return (0, c.useEffect)(() => {
                    fetch("/api/statistics").then(e => e.ok ? e.json() : null).then(e => {
                        h(e)
                    })
                }, [h]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: "pointer-events-none absolute h-[500px] w-full bg-cover bg-center bg-no-repeat opacity-25 sm:h-[750px]",
                        style: {
                            backgroundImage: "linear-gradient(rgb(255 255 255 / 0%), #090909) , url(".concat((0, o.sd)("assets/images/background.webp"), ")")
                        }
                    }), (0, r.jsx)(i.Z, {}), (0, r.jsxs)("main", {
                        className: "mx-auto h-auto w-full",
                        children: [(0, r.jsxs)("section", {
                            className: "relative my-36 animate-slide-up px-8 sm:mb-52 sm:mt-64",
                            children: [(0, r.jsxs)("h1", {
                                className: "mx-auto mb-8 max-w-4xl text-center text-5xl font-extrabold text-white sm:text-6xl",
                                children: ["Empower Your Digital Presence ", (0, r.jsx)("span", {
                                    className: "bg-orange-500",
                                    children: "Easy & Fast"
                                }), " ⚡"]
                            }), (0, r.jsx)("p", {
                                className: "mx-auto mb-10 max-w-3xl text-center text-xl font-light text-stone-500 sm:text-2xl",
                                children: "Transform your story into an online masterpiece. Fakecrime makes it easy to create personal, stunning bio-pages, that reflect your unique personality & creativity."
                            }), (0, r.jsxs)("div", {
                                className: "flex justify-center gap-5",
                                children: [(0, r.jsx)(n.default, {
                                    href: "/login",
                                    className: "rounded-xl border border-white/25 px-6 py-3 text-center text-lg text-white duration-300 hover:border-transparent hover:bg-white hover:text-black sm:w-52",
                                    draggable: !1,
                                    children: "Login"
                                }), (0, r.jsx)(n.default, {
                                    className: "rounded-xl border-2 border-orange-400 bg-orange-500 px-6 py-3 text-center text-lg text-white duration-300 hover:border-transparent hover:bg-white hover:text-black sm:w-52",
                                    href: "/register",
                                    rel: "noopener noreferrer nofollow",
                                    draggable: !1,
                                    children: "Get Started"
                                })]
                            })]
                        }), (0, r.jsxs)("section", {
                            className: "".concat(0 === e.length ? "marquee" : "marquee marquee-scroll marquee-hover-pause", " mx-auto mb-36 w-full animate-slide-up sm:mb-72 lg:w-3/4"),
                            children: [(0, r.jsx)("div", {
                                className: "marquee-overlay"
                            }), 0 === e.length && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: "marquee-content",
                                    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => (0, r.jsxs)("div", {
                                        className: "flex select-none items-center justify-start gap-4 rounded-lg border border-stone-400/10 bg-white/[1%] px-4 py-2.5 sm:px-6",
                                        children: [(0, r.jsx)("div", {
                                            className: "size-14 animate-pulse rounded-full bg-white/20 sm:size-16"
                                        }), (0, r.jsxs)("div", {
                                            className: "space-y-3",
                                            children: [(0, r.jsx)("div", {
                                                className: "h-3 ".concat(1 & e ? "w-28" : "w-12", " animate-pulse rounded-lg bg-white/30")
                                            }), (0, r.jsx)("div", {
                                                className: "h-2 ".concat(1 & e ? "w-36" : "w-16", " animate-pulse rounded-lg bg-white/10")
                                            })]
                                        })]
                                    }, e))
                                }), (0, r.jsx)("div", {
                                    "aria-hidden": "true",
                                    className: "marquee-content",
                                    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => (0, r.jsxs)("div", {
                                        className: "flex select-none items-center justify-start gap-4 rounded-lg border border-stone-400/10 bg-white/[1%] px-4 py-2.5 sm:px-6",
                                        children: [(0, r.jsx)("div", {
                                            className: "size-14 animate-pulse rounded-full bg-white/20 sm:size-16"
                                        }), (0, r.jsxs)("div", {
                                            className: "space-y-3",
                                            children: [(0, r.jsx)("div", {
                                                className: "h-3 ".concat(1 & e ? "w-28" : "w-12", " animate-pulse rounded-lg bg-white/30")
                                            }), (0, r.jsx)("div", {
                                                className: "h-2 ".concat(1 & e ? "w-36" : "w-16", " animate-pulse rounded-lg bg-white/10")
                                            })]
                                        })]
                                    }, e))
                                })]
                            }), e.length > 0 && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: "marquee-content",
                                    children: e.map(e => {
                                        let {
                                            slug: t,
                                            avatar: s,
                                            name: l
                                        } = e;
                                        return (0, r.jsxs)(n.default, {
                                            className: "flex select-none items-center justify-start gap-4 rounded-lg border border-stone-400/10 bg-white/[1%] px-4 py-2.5 duration-300 hover:border-stone-400/25 hover:bg-white/5 sm:px-6",
                                            href: "/".concat(t),
                                            draggable: !1,
                                            children: [(0, r.jsx)(a.Z, {
                                                alt: "Avatar",
                                                width: 64,
                                                height: 64,
                                                className: "size-14 rounded-full object-cover sm:size-16",
                                                src: (0, o.Sv)(s),
                                                loading: "lazy"
                                            }, (0, o.Sv)(s)), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("p", {
                                                    className: "font-bold text-white",
                                                    children: l
                                                }), (0, r.jsx)("p", {
                                                    className: "text-sm font-light",
                                                    children: "/".concat(t)
                                                })]
                                            })]
                                        }, t)
                                    })
                                }), (0, r.jsx)("div", {
                                    "aria-hidden": "true",
                                    className: "marquee-content",
                                    children: e.map(e => {
                                        let {
                                            slug: t,
                                            avatar: s,
                                            name: l
                                        } = e;
                                        return (0, r.jsxs)(n.default, {
                                            className: "flex select-none items-center justify-start gap-4 rounded-lg border border-stone-400/10 bg-white/[1%] px-4 py-2.5 duration-300 hover:border-stone-400/25 hover:bg-white/5 sm:px-6",
                                            href: "/".concat(t),
                                            draggable: !1,
                                            children: [(0, r.jsx)(a.Z, {
                                                alt: "Avatar",
                                                width: 64,
                                                height: 64,
                                                className: "size-14 rounded-full object-cover sm:size-16",
                                                src: (0, o.Sv)(s),
                                                loading: "lazy"
                                            }, (0, o.Sv)(s)), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("p", {
                                                    className: "font-bold text-white",
                                                    children: l
                                                }), (0, r.jsx)("p", {
                                                    className: "text-sm font-light",
                                                    children: "/".concat(t)
                                                })]
                                            })]
                                        }, t)
                                    })
                                })]
                            })]
                        }), (0, r.jsxs)("section", {
                            className: "mx-auto mb-36 max-w-6xl animate-slide-up px-8 sm:mb-72",
                            children: [(0, r.jsxs)("div", {
                                className: "mb-14 sm:mb-20",
                                children: [(0, r.jsx)("h2", {
                                    className: "mb-5 text-4xl font-extrabold text-white",
                                    children: "\uD83D\uDC4B Simple & Intuitive"
                                }), (0, r.jsx)("p", {
                                    className: "max-w-4xl text-2xl font-light",
                                    children: "Our user-friendly interface ensures that anyone, regardless of technical expertise, can effortlessly build & customize their pages easily. Showcase your creativity, experiences & interests in minutes."
                                })]
                            }), (0, r.jsx)(d, {
                                children: x.map(e => {
                                    let {
                                        icon: t,
                                        title: s,
                                        description: a
                                    } = e;
                                    return (0, r.jsxs)(u, {
                                        children: [(0, r.jsx)("div", {
                                            className: "mb-8 flex size-20 items-center justify-center rounded-xl border-2 border-orange-400 bg-orange-500 text-4xl",
                                            children: t
                                        }), (0, r.jsxs)("p", {
                                            className: "mb-4 max-w-sm text-2xl font-bold text-white",
                                            children: ["— ", s]
                                        }), (0, r.jsx)("p", {
                                            className: "text-xl font-light",
                                            children: a
                                        })]
                                    }, s)
                                })
                            })]
                        }), (0, r.jsx)("section", {
                            className: "mx-auto max-w-4xl animate-slide-up px-8",
                            children: (0, r.jsxs)("div", {
                                className: "sm:border-l-8 sm:border-white sm:py-4 sm:pl-10",
                                children: [(0, r.jsxs)("div", {
                                    className: "mb-14 sm:mb-20",
                                    children: [(0, r.jsx)("h3", {
                                        className: "mb-3 text-4xl font-extrabold text-white",
                                        children: "Join the Community \uD83D\uDE80"
                                    }), (0, r.jsx)("p", {
                                        className: "text-2xl font-light",
                                        children: "Become a part of a growing community of creators & storytellers. Share your pages, discover inspiring profiles & connect with other minded people."
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "flex flex-col items-center justify-start gap-4 sm:flex-row sm:gap-0",
                                    children: m.map(e => (0, r.jsxs)("div", {
                                        className: "w-full",
                                        children: [(0, r.jsx)("p", {
                                            className: "text-xl capitalize sm:mb-3",
                                            children: e
                                        }), (0, r.jsxs)("span", {
                                            className: "text-4xl font-semibold text-white",
                                            children: ["— ", s ? s[e] : 0]
                                        })]
                                    }, e))
                                })]
                            })
                        }), (0, r.jsx)("section", {
                            className: "px-8 py-36 sm:py-72",
                            style: {
                                background: "radial-gradient(circle at 50% bottom, #351702, #090909, #090909)"
                            },
                            children: (0, r.jsxs)("div", {
                                className: "animate-slide-up",
                                children: [(0, r.jsx)("p", {
                                    className: "mb-6 text-center text-4xl sm:mb-10 sm:text-5xl",
                                    children: "⚡"
                                }), (0, r.jsx)("h4", {
                                    className: "mx-auto mb-6 max-w-4xl text-center text-4xl font-extrabold text-white sm:mb-10 sm:text-5xl",
                                    children: "Ready to Start Crafting Your Digital Story? \uD83E\uDE81"
                                }), (0, r.jsx)("div", {
                                    className: "flex justify-center gap-5",
                                    children: (0, r.jsx)(n.default, {
                                        className: "rounded-xl border border-orange-400 bg-orange-500 px-6 py-3 text-center text-lg text-white duration-300 hover:border-transparent hover:bg-white hover:text-black sm:text-lg",
                                        href: "/register",
                                        rel: "noopener noreferrer nofollow",
                                        draggable: !1,
                                        children: "Claim Your Bio"
                                    })
                                })]
                            })
                        })]
                    }), (0, r.jsx)(l.Z, {})]
                })
            }
        },
        7133: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = s(7437),
                a = s(7138),
                n = s(6463);
            let l = [{
                name: "Terms of Service",
                url: "/terms-of-service"
            }, {
                name: "Privacy Policy",
                url: "/privacy-policy"
            }, {
                name: "FAQ",
                url: "/faq"
            }, {
                name: "Support",
                url: "/support"
            }, {
                name: "Discord",
                url: "https://discord.gg/fakecrime",
                external: !0
            }];

            function i() {
                let e = (0, n.usePathname)();
                return (0, r.jsx)("footer", {
                    className: "border-t border-stone-400/10",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto flex max-w-7xl select-none flex-col items-center justify-start gap-6 px-8 py-10 lg:flex-row lg:justify-between lg:gap-0",
                        children: [(0, r.jsx)("div", {
                            className: "flex w-full lg:w-auto",
                            children: (0, r.jsx)("p", {
                                className: "font-light sm:text-lg",
                                children: "⚡ fakecrime.bio 2024 — All Rights reserved"
                            })
                        }), (0, r.jsx)("ul", {
                            className: "flex w-full flex-col justify-center lg:w-auto lg:flex-row lg:items-center lg:gap-10",
                            children: l.map(t => {
                                let {
                                    name: s,
                                    url: n,
                                    external: l
                                } = t;
                                return (0, r.jsx)("li", {
                                    children: e === n ? (0, r.jsx)("div", {
                                        className: "w-full text-lg capitalize text-white lg:w-auto lg:underline lg:underline-offset-[-49.5px]",
                                        children: s
                                    }, s) : (0, r.jsx)(a.default, {
                                        className: "w-full font-light sm:text-lg lg:w-auto hover:lg:underline hover:lg:underline-offset-[-49.5px]",
                                        href: n,
                                        target: l ? "_blank" : void 0,
                                        rel: l ? "noopener noreferrer nofollow" : void 0,
                                        draggable: !1,
                                        children: s
                                    })
                                }, n)
                            })
                        })]
                    })
                })
            }
        },
        1809: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = s(7437),
                a = s(6648),
                n = s(2265),
                l = s(1936);

            function i(e) {
                let {
                    alt: t,
                    width: s,
                    height: i,
                    className: o,
                    src: c,
                    quality: d,
                    loading: u
                } = e, [x, m] = (0, n.useState)(c);
                return (0, r.jsx)(a.default, {
                    alt: t,
                    width: s,
                    height: i,
                    className: o,
                    src: x,
                    quality: d,
                    loading: u,
                    decoding: "async",
                    draggable: !1,
                    onError: () => {
                        m((0, l.v2)())
                    }
                })
            }
        },
        2834: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return n
                }
            });
            var r = s(7437),
                a = s(7138);

            function n() {
                return (0, r.jsxs)("header", {
                    className: "mx-auto flex max-w-7xl justify-between px-8 py-6",
                    children: [(0, r.jsx)(a.default, {
                        href: "/",
                        className: "text-4xl",
                        draggable: !1,
                        children: "⚡"
                    }), (0, r.jsx)(a.default, {
                        className: "rounded-xl border-2 border-white bg-white px-6 py-1.5 text-lg text-black duration-300 hover:border-orange-400 hover:bg-orange-500 hover:text-white",
                        href: "/shop",
                        draggable: !1,
                        children: "Shop"
                    })]
                })
            }
        },
        1936: function(e, t, s) {
            "use strict";

            function r(e) {
                return e ? "fakecrime.bio/".concat(e) : "fakecrime.bio/"
            }

            function a() {
                return l("assets/images/placeholder.webp")
            }

            function n(e) {
                return e || a()
            }

            function l(e) {
                return "".concat("https://r2.fakecrime.bio", "/").concat(e)
            }
            s.d(t, {
                Sv: function() {
                    return n
                },
                sd: function() {
                    return l
                },
                v2: function() {
                    return a
                },
                yF: function() {
                    return r
                }
            })
        }
    },
    function(e) {
        e.O(0, [7138, 6648, 2971, 7023, 1744], function() {
            return e(e.s = 4101)
        }), _N_E = e.O()
    }
]);