(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7601], {
        3153: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 4845))
        },
        4845: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n(7437),
                i = n(9900),
                l = n(6541);

            function a(e) {
                let {
                    error: t
                } = e;
                return (0, r.jsxs)(l.default, {
                    icon: "\uD83E\uDD14",
                    children: [(0, r.jsx)("p", {
                        className: "text-xl font-light text-white",
                        children: "Something went wrong!"
                    }), (0, r.jsx)(i.Z, {})]
                })
            }
        },
        9900: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(7437),
                i = n(7138);

            function l() {
                return (0, r.jsx)(i.default, {
                    href: "/",
                    draggable: !1,
                    className: "inline-block select-none rounded-lg border border-white/25 px-4 py-2 text-white duration-300 hover:border-transparent hover:bg-white hover:text-black",
                    children: "Home"
                })
            }
        },
        6541: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n(7437),
                i = n(7138);

            function l(e) {
                let {
                    children: t,
                    icon: n,
                    wide: l
                } = e;
                return (0, r.jsx)("main", {
                    children: (0, r.jsx)("div", {
                        className: "relative table size-full",
                        children: (0, r.jsx)("div", {
                            className: "table-cell animate-slide-up px-4 py-10 align-middle",
                            children: (0, r.jsxs)("div", {
                                className: "mx-auto ".concat(l ? "max-w-lg" : "max-w-sm", " space-y-8 text-center"),
                                children: [(0, r.jsx)(i.default, {
                                    href: "/",
                                    className: "text-7xl",
                                    draggable: !1,
                                    children: n || "⚡"
                                }), t]
                            })
                        })
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [7138, 2971, 7023, 1744], function() {
            return e(e.s = 3153)
        }), _N_E = e.O()
    }
]);