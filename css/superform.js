(function(c) {
  typeof define == "function" && define.amd ? define(c) : c();
})(function() {
  "use strict";
  const c = "superform-element",
    S = "superform-display",
    V = "superform-enter",
    B = "superform-duration",
    L = "superform-validate",
    I = "superform-error",
    y = "superform-value",
    U = "superform-radio-skip",
    E = "superform-radio-skip-delay",
    A = "superform-goto",
    k = "superform-ending",
    g = "superform-points",
    $ = '[superform-element="form"]',
    M = '[superform-element="step"]',
    h = '[superform-element="next"]',
    K = '[superform-element="back"]',
    T = '[superform-element="submit"]',
    P = '[superform-element="progress-bar"]',
    w = '[superform-element="progress-step"]',
    G = '[superform-element="total-steps"]',
    X = '[superform-element="current-step"]',
    H = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    Y = "superform-chars-min",
    W = "superform-chars-max",
    Z = "superform-words-min",
    z = "superform-words-max",
    x = "superform-include",
    J = "superform-checkbox-min",
    Q = "superform-checkbox-max",
    C = {
      forms: {}
    };

  function a(e) {
    let t = window.getComputedStyle(e);
    return (
      t.width !== "0" &&
      t.height !== "0" &&
      t.opacity !== "0" &&
      t.display !== "none" &&
      t.visibility !== "hidden"
    );
  }

  function b(e) {
    const t = e.formEl,
      n = e.steps,
      r = e.totalSteps;
    for (let l = 0; l < n.length; l++)
      n[l].el.setAttribute(S, window.getComputedStyle(n[l].el).display);
    for (let l = 1; l < n.length; l++) n[l].el.style.display = "none";
    const i = t.querySelector(P);
    let s = t.querySelector(w);
    if (!(!i || !s))
      for (let l = 1; l < r; l++) {
        let o = s.cloneNode(!0);
        i.appendChild(o);
      }
  }

  function p(e, t) {
    const n = e.formEl.querySelectorAll(w);
    if (n.length === 0) return;
    n.forEach((s, l) => {
      l < t ? s.classList.add("is-active") : s.classList.remove("is-active");
    });
    let r = e.formEl.querySelector(X);
    r && (r.textContent = e.currentStep);
    let i = e.formEl.querySelector(G);
    i && (i.textContent = e.totalSteps), e.formEl.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function F(e) {
    if (!e) return;
    const t = new MouseEvent("click", {
      view: window,
      bubbles: !0,
      cancelable: !0
    });
    e.dispatchEvent(t);
  }

  function O(e) {
    const t = new IntersectionObserver(n => {
      n.forEach(r => {
        if (r.isIntersecting) {
          const i = r.target.querySelector(
            `input[type='text'], input[type='email'], input[type='password'], input[type='number'], textarea, ${h}, ${T}`
          );
          i && i.focus();
        }
      });
    });
    e.steps.forEach(n => {
      t.observe(n.el), n.el.addEventListener("keydown", r => {
        if (!e.isEnter && r.key === "Enter") {
          r.preventDefault();
          return;
        }
        r.key === "Enter" &&
          !r.metaKey &&
          !r.ctrlKey &&
          !r.shiftKey &&
          (r.preventDefault(), F(n.el.querySelector(h))), (r.metaKey ||
          r.ctrlKey) &&
          r.key === "Enter" &&
          (
            r.preventDefault(),
            e.currentStep === e.totalSteps &&
              (console.log("mpro"), F(n.el.querySelector(T)))
          );
      });
    });
  }

  function j(e, t) {
    let n = Y,
      r = W;
    if (
      (e.type === "text" || e.type === "textarea" || e.type === "password") &&
      (e.hasAttribute(n) || e.hasAttribute(r))
    ) {
      (n = +e.getAttribute(n)), (r = +e.getAttribute(r));
      let i = e.value.length;
      return (i >= n || !n) && (i <= r || !r)
        ? (t && (t.style.opacity = 0), !0)
        : (t && (t.style.opacity = 1), !1);
    } else return !0;
  }

  function ee(e, t) {
    if (e.tagName !== "DIV") return !0;
    let n = Array.from(e.querySelectorAll('input[type="checkbox"]')).filter(l =>
      a(l)
    );
    if (!n.length) return !0;
    let r = 0,
      i = +e.getAttribute(J),
      s = +e.getAttribute(Q);
    for (let l of n) l.checked && r++;
    return (r >= i || !i) && (r <= s || !s)
      ? (t && (t.style.opacity = 0), !0)
      : (t && (t.style.opacity = 1), !1);
  }

  function q(e, t) {
    return e.type === "email"
      ? H.test(e.value)
        ? (t && (t.style.opacity = 0), !0)
        : (t && (t.style.opacity = 1), !1)
      : !0;
  }

  function te(e, t) {
    if (e.type === "email" || !e.hasAttribute(x)) return !0;
    let n = e.getAttribute(x),
      r = (n.match(/[A-Z]/g) || []).length,
      i = (n.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length,
      s = (n.match(/\d/g) || []).length,
      l = e.value,
      o = (l.match(/[A-Z]/g) || []).length,
      u = (l.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length,
      D = (l.match(/\d/g) || []).length;
    return o < r || u < i || D < s
      ? (t && (t.style.opacity = 1), !1)
      : (t && (t.style.opacity = 0), !0);
  }

  function ne(e, t) {
    let n = Z,
      r = z;
    if (
      (e.type === "text" || e.type === "textarea" || e.type === "password") &&
      (e.hasAttribute(n) || e.hasAttribute(r))
    ) {
      (n = +e.getAttribute(n)), (r = +e.getAttribute(r));
      let i = e.value.split(" ").filter(s => s !== "").length;
      return (i >= n || !n) && (i <= r || !r)
        ? (t && (t.style.opacity = 0), !0)
        : (t && (t.style.opacity = 1), !1);
    } else return !0;
  }

  function re(e, t) {
    return !!(!0 && te(e, t) && j(e, t) && q(e, t) && ee(e, t)) && ne(e, t);
  }

  function _(e) {
    let t = !0;
    return e.validatingFields
      ? (
          e.validatingFields.forEach(n => {
            (n.isValid = re(n.inputEl, n.errorEl)), (t = t && n.isValid);
          }),
          t
        )
      : !0;
  }

  function ie(e, t, n = 400) {
    (e.style.display = t), (e.style.opacity = 0);
    let r = +new Date(),
      i = function() {
        (e.style.opacity =
          +e.style.opacity + (new Date() - r) / n), (r = +new Date()), +e.style
          .opacity < 1 &&
          ((window.requestAnimationFrame && requestAnimationFrame(i)) ||
            setTimeout(i, 16));
      };
    i();
  }

  function se(e, t, n = 400) {
    (e.style.display = t), (e.style.opacity = 1);
    let r = +new Date(),
      i = function() {
        (e.style.opacity = Number(
          +e.style.opacity - (new Date() - r) / n
        ).toFixed(4)), (r = +new Date()), -e.style.opacity <= 0
          ? (window.requestAnimationFrame && requestAnimationFrame(i)) ||
            setTimeout(i, 16)
          : (e.style.opacity = 0);
      };
    i(), (e.style.display = "none");
  }

  function m(e, t) {
    let n = e.steps,
      r = e.visitedSteps;
    if (!(t > e.totalSteps || t < 0 || t === e.currentStep)) {
      if (
        (
          r.push(e.currentStep),
          (e.previousStep = r[r.length - 1]),
          e.previousStep > t
        )
      ) {
        for (let i = r.length - 1; i >= 0; i--)
          if (r[i] < t) {
            e.previousStep = r[i];
            break;
          }
      }
      se(
        n[e.currentStep - 1].el,
        n[e.currentStep - 1].el.getAttribute(S),
        e.fadeDuration
      ), (e.currentStep = t), ie(
        n[e.currentStep - 1].el,
        n[e.currentStep - 1].el.getAttribute(S),
        e.fadeDuration
      );
    }
  }

  function R(e) {
    let t = e.el.querySelectorAll("video, audio");
    for (let n = 0; n < t.length; n++) t[n].paused || t[n].pause();
  }

  function d(e, t) {
    const n = e.steps.find(i => i.stepNum === t),
      r = [
        ...n.el.querySelectorAll(
          `input[type="radio"][${g}]:checked, input[type="checkbox"][${g}]:checked`
        )
      ];
    t < e.currentStep
      ? e.steps.forEach((i, s) => {
          (s = s + 1), s >= t &&
            s <= e.currentStep &&
            ((e.totalFormScore -= i.totalStepScore), (i.totalStepScore = 0));
        })
      : (
          r.forEach(i => {
            const s = parseInt(i.getAttribute(g));
            !s || (n.totalStepScore += s);
          }),
          (e.totalFormScore += n.totalStepScore)
        );
  }

  function f(e) {
    let t;
    if (
      (
        e.steps.map(n => {
          if (n.isEnding) {
            const r = n.el.getAttribute(k);
            if (!r) return;
            const [i, s] = r.slice(1, -1).split(",").map(l => parseInt(l));
            (n.minScore = i), (n.maxScore = s), (t = !0);
          }
        }),
        (e.steps = e.steps.filter(n => n.isEnding === !1)),
        !!t
      )
    ) {
      if (e.endingSteps.length <= 1) {
        e.steps.push(e.endingSteps[0]);
        return;
      }
      e.endingSteps.forEach(n => {
        e.totalFormScore >= n.minScore && e.totalFormScore <= n.maxScore
          ? e.steps.push(n)
          : (n.el.style.display = "none");
      }), e.steps.forEach((n, r) => {
        n.stepNum = r + 1;
      });
    }
  }

  function le(e, t) {
    const n = Array.from(t.el.querySelectorAll(`[${U}="true"]`));
    n.length <= 0 ||
      n.forEach(r => {
        let i;
        r.hasAttribute(E) &&
          r.getAttribute(E) !== !1 &&
          (i = parseInt(r.getAttribute(E)) || 0), r
          .querySelectorAll('input[type="radio"]')
          .forEach(s => {
            s.addEventListener("click", () => {
              _(t) &&
                (
                  R(t),
                  setTimeout(() => {
                    d(e, e.currentStep), f(e);
                    const l = parseInt(r.getAttribute(A)) || e.currentStep + 1;
                    m(e, l), p(e, e.currentStep);
                  }, i)
                );
            });
          });
      });
  }

  function N(e, t, n = "next") {
    let r = e.querySelector(`[${c}="${n}"]`);
    !r ||
      (t
        ? (
            (r.style.opacity = 1),
            (r.style.pointerEvents = "auto"),
            (r.disabled = !1)
          )
        : (
            (r.style.opacity = 0.3),
            (r.style.pointerEvents = "none"),
            (r.disabled = !0)
          ));
  }

  function v(e, t) {
    let n = !0;
    const r = new Set();
    return t.forEach(i => {
      if (
        (
          i.required && !i.value && (n = !1),
          i.required && i.type === "email" && (q(i) || (n = !1)),
          i.required && i.type === "radio"
        )
      ) {
        r.add(i.name);
        for (const s of r) {
          const l = e.querySelectorAll(`input[type="radio"][name="${s}"]`);
          if (!Array.from(l).some(u => u.checked)) {
            n = !1;
            break;
          }
        }
      }
    }), N(e, n), N(e, n, "submit"), n;
  }

  function oe(e) {
    e.steps.forEach(t => {
      var i;
      le(e, t), Array.from(t.el.querySelectorAll(h))
        .filter(s => a(s))
        .forEach(s => {
          s.addEventListener("click", l => {
            if ((l.preventDefault(), e.currentStep === e.totalSteps)) {
              console.log("You are in last step, returning");
              return;
            }
            if (_(t) && v(t.el, t.validatingFields)) {
              R(t), d(e, e.currentStep), f(e);
              const o = parseInt(s.getAttribute(A)) || e.currentStep + 1;
              m(e, o), p(e, e.currentStep);
            }
          });
        }), Array.from(t.el.querySelectorAll(K))
        .filter(s => a(s))
        .forEach(s => {
          s.addEventListener("click", l => {
            if ((l.preventDefault(), e.currentStep === 1)) {
              console.log("You are in the first step, you cant go back");
              return;
            }
            R(t);
            const o = parseInt(s.getAttribute(A)) || e.previousStep;
            d(e, o), m(e, o), p(e, e.currentStep);
          });
        }), (i = t.el.querySelector(T)) == null ||
        i.addEventListener("click", s => {
          if ((s.preventDefault(), e.currentStep !== e.totalSteps)) {
            console.log("You have to put submit button in the final step");
            return;
          }
          console.log(e.formEl), _(t) &&
            (
              d(e, e.currentStep),
              f(e),
              console.log("Submit button works"),
              e.formEl.dispatchEvent(
                new Event("submit", {
                  bubbles: !0
                })
              )
            );
        });
    });
  }

  function ae(e) {
    const t = Array.from(e.querySelectorAll(`input[${y}]`)).filter(n => a(n));
    !t ||
      t.forEach(n => {
        n.addEventListener("input", r => {
          const i = r.target.value,
            s = r.target.getAttribute(y),
            l = e.querySelectorAll(`[${y}=${s}]`);
          !l ||
            l.forEach(o => {
              "textContent" in o && (o.textContent = i);
            });
        });
      });
  }

  function ue(e) {
    const t = e.formEl,
      n = Array.from(t.querySelectorAll(M)).filter(r => a(r));
    (e.isEnter =
      t.getAttribute(V) ===
      "true"), (e.fadeDuration = Number(t.getAttribute(B)) || 400), n.forEach(
      (r, i) => {
        const s = {
          stepNum: i + 1,
          el: r,
          isValid: !0,
          validatingFields: [],
          totalStepScore: 0,
          isEnding: r.hasAttribute(k)
        };
        s.isEnding && e.endingSteps.push(s), e.steps.push(s);
      }
    ), e.endingSteps.length > 0 ? (e.totalSteps = e.steps.length - (e.endingSteps.length - 1)) : (e.totalSteps = e.steps.length), e.steps.forEach(
      (r, i) => {
        let s = [...r.el.querySelectorAll("input, textarea, div")]
          .filter(o => a(o))
          .filter(o => o.hasAttribute(L) || o.hasAttribute("required"));
        s || console.log("No inputs, returning true.");
        const l = [...r.el.querySelectorAll(`[${I}]`)];
        l && l.forEach(o => (o.style.opacity = 0)), v(r.el, s), s.map(o => {
          const u = o.getAttribute(L);
          return o.addEventListener("input", () => {
            v(r.el, s);
          }), r.validatingFields.push({
            identifier: u,
            errorEl: l.find(D => D.getAttribute(I) === u),
            inputEl: o,
            isValid: !0
          });
        });
      }
    ), b(e), p(e, e.currentStep), oe(e), O(e), ae(e.formEl), f(e);
  }
  const ce = performance.now();

  function pe() {
    const e = Array.from(document.querySelectorAll($)).filter(
      t => a(t) && t.tagName === "FORM"
    );
    !e ||
      (
        (C.forms = e.map((t, n) => ({
          index: n,
          formEl: t,
          currentStep: 1,
          visitedSteps: [],
          previousStep: Number,
          totalSteps: Number,
          steps: [],
          totalFormScore: 0,
          isEnter: !1,
          fadeDuration: Number,
          endingSteps: []
        }))),
        C.forms.forEach((t, n) => {
          ue(t), console.log("Nothing to see here.");
        })
      );
  }

  function de() {
    pe();
    const e = performance.now();
    console.log(`Loaded in ${(e - ce).toFixed(2)}ms`);
  }
  window.Webflow || (window.Webflow = []), window.Webflow.push(() => {
    de();
  });
});
