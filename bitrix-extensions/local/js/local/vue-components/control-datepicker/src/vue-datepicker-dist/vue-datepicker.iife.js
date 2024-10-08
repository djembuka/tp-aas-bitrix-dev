// import BX from 'ui.vue3';

var VueDatePicker = (function (e) {
  'use strict';
  var fi = Object.defineProperty;
  var mi = (e, Ie, mt) =>
    Ie in e
      ? fi(e, Ie, { enumerable: !0, configurable: !0, writable: !0, value: mt })
      : (e[Ie] = mt);
  var ae = (e, Ie, mt) => mi(e, typeof Ie != 'symbol' ? Ie + '' : Ie, mt);
  function Ie() {
    const t = e.useAttrs();
    return (
      e.openBlock(),
      e.createElementBlock(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 32 32',
          fill: 'currentColor',
          'aria-hidden': 'true',
          class: 'dp__icon',
          role: 'img',
          ...t,
        },
        [
          e.createElementVNode('path', {
            d: 'M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z',
          }),
          e.createElementVNode('path', {
            d: 'M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z',
          }),
          e.createElementVNode('path', {
            d: 'M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z',
          }),
          e.createElementVNode('path', {
            d: 'M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z',
          }),
        ]
      )
    );
  }
  Ie.compatConfig = { MODE: 3 };
  function mt() {
    return (
      e.openBlock(),
      e.createElementBlock(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 32 32',
          fill: 'currentColor',
          'aria-hidden': 'true',
          class: 'dp__icon',
          role: 'img',
        },
        [
          e.createElementVNode('path', {
            d: 'M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z',
          }),
          e.createElementVNode('path', {
            d: 'M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z',
          }),
        ]
      )
    );
  }
  mt.compatConfig = { MODE: 3 };
  function on() {
    return (
      e.openBlock(),
      e.createElementBlock(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 32 32',
          fill: 'currentColor',
          'aria-hidden': 'true',
          class: 'dp__icon',
          role: 'img',
        },
        [
          e.createElementVNode('path', {
            d: 'M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z',
          }),
        ]
      )
    );
  }
  on.compatConfig = { MODE: 3 };
  function ln() {
    return (
      e.openBlock(),
      e.createElementBlock(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 32 32',
          fill: 'currentColor',
          'aria-hidden': 'true',
          class: 'dp__icon',
          role: 'img',
        },
        [
          e.createElementVNode('path', {
            d: 'M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z',
          }),
        ]
      )
    );
  }
  ln.compatConfig = { MODE: 3 };
  function sn() {
    return (
      e.openBlock(),
      e.createElementBlock(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 32 32',
          fill: 'currentColor',
          'aria-hidden': 'true',
          class: 'dp__icon',
          role: 'img',
        },
        [
          e.createElementVNode('path', {
            d: 'M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z',
          }),
          e.createElementVNode('path', {
            d: 'M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z',
          }),
        ]
      )
    );
  }
  sn.compatConfig = { MODE: 3 };
  function un() {
    return (
      e.openBlock(),
      e.createElementBlock(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 32 32',
          fill: 'currentColor',
          'aria-hidden': 'true',
          class: 'dp__icon',
          role: 'img',
        },
        [
          e.createElementVNode('path', {
            d: 'M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z',
          }),
        ]
      )
    );
  }
  un.compatConfig = { MODE: 3 };
  function cn() {
    return (
      e.openBlock(),
      e.createElementBlock(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 32 32',
          fill: 'currentColor',
          'aria-hidden': 'true',
          class: 'dp__icon',
          role: 'img',
        },
        [
          e.createElementVNode('path', {
            d: 'M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z',
          }),
        ]
      )
    );
  }
  cn.compatConfig = { MODE: 3 };
  function oe(t) {
    const r = Object.prototype.toString.call(t);
    return t instanceof Date || (typeof t == 'object' && r === '[object Date]')
      ? new t.constructor(+t)
      : typeof t == 'number' ||
        r === '[object Number]' ||
        typeof t == 'string' ||
        r === '[object String]'
      ? new Date(t)
      : new Date(NaN);
  }
  function ge(t, r) {
    return t instanceof Date ? new t.constructor(r) : new Date(r);
  }
  function We(t, r) {
    const n = oe(t);
    return isNaN(r) ? ge(t, NaN) : (r && n.setDate(n.getDate() + r), n);
  }
  function qe(t, r) {
    const n = oe(t);
    if (isNaN(r)) return ge(t, NaN);
    if (!r) return n;
    const a = n.getDate(),
      o = ge(t, n.getTime());
    o.setMonth(n.getMonth() + r + 1, 0);
    const l = o.getDate();
    return a >= l ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), a), n);
  }
  function Jn(t, r) {
    const {
        years: n = 0,
        months: a = 0,
        weeks: o = 0,
        days: l = 0,
        hours: s = 0,
        minutes: c = 0,
        seconds: u = 0,
      } = r,
      B = oe(t),
      m = a || n ? qe(B, a + n * 12) : B,
      S = l || o ? We(m, l + o * 7) : m,
      g = c + s * 60,
      Y = (u + g * 60) * 1e3;
    return ge(t, S.getTime() + Y);
  }
  function rr(t, r) {
    const n = +oe(t);
    return ge(t, n + r);
  }
  const Zn = 6048e5,
    or = 864e5,
    lr = 6e4,
    ea = 36e5,
    sr = 1e3;
  function ir(t, r) {
    return rr(t, r * ea);
  }
  let ur = {};
  function ht() {
    return ur;
  }
  function Ue(t, r) {
    var c, u, B, m;
    const n = ht(),
      a =
        (r == null ? void 0 : r.weekStartsOn) ??
        ((u =
          (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) ==
        null
          ? void 0
          : u.weekStartsOn) ??
        n.weekStartsOn ??
        ((m = (B = n.locale) == null ? void 0 : B.options) == null
          ? void 0
          : m.weekStartsOn) ??
        0,
      o = oe(t),
      l = o.getDay(),
      s = (l < a ? 7 : 0) + l - a;
    return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
  }
  function Dt(t) {
    return Ue(t, { weekStartsOn: 1 });
  }
  function ta(t) {
    const r = oe(t),
      n = r.getFullYear(),
      a = ge(t, 0);
    a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
    const o = Dt(a),
      l = ge(t, 0);
    l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
    const s = Dt(l);
    return r.getTime() >= o.getTime()
      ? n + 1
      : r.getTime() >= s.getTime()
      ? n
      : n - 1;
  }
  function na(t) {
    const r = oe(t);
    return r.setHours(0, 0, 0, 0), r;
  }
  function Ut(t) {
    const r = oe(t),
      n = new Date(
        Date.UTC(
          r.getFullYear(),
          r.getMonth(),
          r.getDate(),
          r.getHours(),
          r.getMinutes(),
          r.getSeconds(),
          r.getMilliseconds()
        )
      );
    return n.setUTCFullYear(r.getFullYear()), +t - +n;
  }
  function aa(t, r) {
    const n = na(t),
      a = na(r),
      o = +n - Ut(n),
      l = +a - Ut(a);
    return Math.round((o - l) / or);
  }
  function cr(t) {
    const r = ta(t),
      n = ge(t, 0);
    return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), Dt(n);
  }
  function dr(t, r) {
    const n = r * 3;
    return qe(t, n);
  }
  function dn(t, r) {
    return qe(t, r * 12);
  }
  function ra(t, r) {
    const n = oe(t),
      a = oe(r),
      o = n.getTime() - a.getTime();
    return o < 0 ? -1 : o > 0 ? 1 : o;
  }
  function oa(t) {
    return (
      t instanceof Date ||
      (typeof t == 'object' &&
        Object.prototype.toString.call(t) === '[object Date]')
    );
  }
  function Ot(t) {
    if (!oa(t) && typeof t != 'number') return !1;
    const r = oe(t);
    return !isNaN(Number(r));
  }
  function la(t) {
    const r = oe(t);
    return Math.trunc(r.getMonth() / 3) + 1;
  }
  function fr(t, r) {
    const n = oe(t),
      a = oe(r);
    return n.getFullYear() - a.getFullYear();
  }
  function mr(t, r) {
    const n = oe(t),
      a = oe(r),
      o = ra(n, a),
      l = Math.abs(fr(n, a));
    n.setFullYear(1584), a.setFullYear(1584);
    const s = ra(n, a) === -o,
      c = o * (l - +s);
    return c === 0 ? 0 : c;
  }
  function sa(t, r) {
    const n = oe(t.start),
      a = oe(t.end);
    let o = +n > +a;
    const l = o ? +n : +a,
      s = o ? a : n;
    s.setHours(0, 0, 0, 0);
    let c = 1;
    const u = [];
    for (; +s <= l; )
      u.push(oe(s)), s.setDate(s.getDate() + c), s.setHours(0, 0, 0, 0);
    return o ? u.reverse() : u;
  }
  function pt(t) {
    const r = oe(t),
      n = r.getMonth(),
      a = n - (n % 3);
    return r.setMonth(a, 1), r.setHours(0, 0, 0, 0), r;
  }
  function hr(t, r) {
    const n = oe(t.start),
      a = oe(t.end);
    let o = +n > +a;
    const l = o ? +pt(n) : +pt(a);
    let s = pt(o ? a : n),
      c = 1;
    const u = [];
    for (; +s <= l; ) u.push(oe(s)), (s = dr(s, c));
    return o ? u.reverse() : u;
  }
  function pr(t) {
    const r = oe(t);
    return r.setDate(1), r.setHours(0, 0, 0, 0), r;
  }
  function ia(t) {
    const r = oe(t),
      n = r.getFullYear();
    return r.setFullYear(n + 1, 0, 0), r.setHours(23, 59, 59, 999), r;
  }
  function Et(t) {
    const r = oe(t),
      n = ge(t, 0);
    return n.setFullYear(r.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
  }
  function ua(t, r) {
    var c, u, B, m;
    const n = ht(),
      a =
        (r == null ? void 0 : r.weekStartsOn) ??
        ((u =
          (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) ==
        null
          ? void 0
          : u.weekStartsOn) ??
        n.weekStartsOn ??
        ((m = (B = n.locale) == null ? void 0 : B.options) == null
          ? void 0
          : m.weekStartsOn) ??
        0,
      o = oe(t),
      l = o.getDay(),
      s = (l < a ? -7 : 0) + 6 - (l - a);
    return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
  }
  function ca(t) {
    const r = oe(t),
      n = r.getMonth(),
      a = n - (n % 3) + 3;
    return r.setMonth(a, 0), r.setHours(23, 59, 59, 999), r;
  }
  const gr = {
      lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds',
      },
      xSeconds: { one: '1 second', other: '{{count}} seconds' },
      halfAMinute: 'half a minute',
      lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes',
      },
      xMinutes: { one: '1 minute', other: '{{count}} minutes' },
      aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
      xHours: { one: '1 hour', other: '{{count}} hours' },
      xDays: { one: '1 day', other: '{{count}} days' },
      aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
      xWeeks: { one: '1 week', other: '{{count}} weeks' },
      aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
      xMonths: { one: '1 month', other: '{{count}} months' },
      aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
      xYears: { one: '1 year', other: '{{count}} years' },
      overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
      almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
    },
    yr = (t, r, n) => {
      let a;
      const o = gr[t];
      return (
        typeof o == 'string'
          ? (a = o)
          : r === 1
          ? (a = o.one)
          : (a = o.other.replace('{{count}}', r.toString())),
        n != null && n.addSuffix
          ? n.comparison && n.comparison > 0
            ? 'in ' + a
            : a + ' ago'
          : a
      );
    };
  function fn(t) {
    return (r = {}) => {
      const n = r.width ? String(r.width) : t.defaultWidth;
      return t.formats[n] || t.formats[t.defaultWidth];
    };
  }
  const wr = {
      full: 'EEEE, MMMM do, y',
      long: 'MMMM do, y',
      medium: 'MMM d, y',
      short: 'MM/dd/yyyy',
    },
    kr = {
      full: 'h:mm:ss a zzzz',
      long: 'h:mm:ss a z',
      medium: 'h:mm:ss a',
      short: 'h:mm a',
    },
    br = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: '{{date}}, {{time}}',
      short: '{{date}}, {{time}}',
    },
    vr = {
      date: fn({ formats: wr, defaultWidth: 'full' }),
      time: fn({ formats: kr, defaultWidth: 'full' }),
      dateTime: fn({ formats: br, defaultWidth: 'full' }),
    },
    Dr = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: 'P',
    },
    Mr = (t, r, n, a) => Dr[t];
  function Rt(t) {
    return (r, n) => {
      const a = n != null && n.context ? String(n.context) : 'standalone';
      let o;
      if (a === 'formatting' && t.formattingValues) {
        const s = t.defaultFormattingWidth || t.defaultWidth,
          c = n != null && n.width ? String(n.width) : s;
        o = t.formattingValues[c] || t.formattingValues[s];
      } else {
        const s = t.defaultWidth,
          c = n != null && n.width ? String(n.width) : t.defaultWidth;
        o = t.values[c] || t.values[s];
      }
      const l = t.argumentCallback ? t.argumentCallback(r) : r;
      return o[l];
    };
  }
  const Tr = {
      narrow: ['B', 'A'],
      abbreviated: ['BC', 'AD'],
      wide: ['Before Christ', 'Anno Domini'],
    },
    Pr = {
      narrow: ['1', '2', '3', '4'],
      abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
      wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
    },
    Cr = {
      narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      abbreviated: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      wide: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
    Br = {
      narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      wide: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    },
    Sr = {
      narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night',
      },
      abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night',
      },
      wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night',
      },
    },
    $r = {
      narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night',
      },
      abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night',
      },
      wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night',
      },
    },
    Ar = {
      ordinalNumber: (t, r) => {
        const n = Number(t),
          a = n % 100;
        if (a > 20 || a < 10)
          switch (a % 10) {
            case 1:
              return n + 'st';
            case 2:
              return n + 'nd';
            case 3:
              return n + 'rd';
          }
        return n + 'th';
      },
      era: Rt({ values: Tr, defaultWidth: 'wide' }),
      quarter: Rt({
        values: Pr,
        defaultWidth: 'wide',
        argumentCallback: (t) => t - 1,
      }),
      month: Rt({ values: Cr, defaultWidth: 'wide' }),
      day: Rt({ values: Br, defaultWidth: 'wide' }),
      dayPeriod: Rt({
        values: Sr,
        defaultWidth: 'wide',
        formattingValues: $r,
        defaultFormattingWidth: 'wide',
      }),
    };
  function _t(t) {
    return (r, n = {}) => {
      const a = n.width,
        o = (a && t.matchPatterns[a]) || t.matchPatterns[t.defaultMatchWidth],
        l = r.match(o);
      if (!l) return null;
      const s = l[0],
        c = (a && t.parsePatterns[a]) || t.parsePatterns[t.defaultParseWidth],
        u = Array.isArray(c)
          ? Or(c, (S) => S.test(s))
          : Nr(c, (S) => S.test(s));
      let B;
      (B = t.valueCallback ? t.valueCallback(u) : u),
        (B = n.valueCallback ? n.valueCallback(B) : B);
      const m = r.slice(s.length);
      return { value: B, rest: m };
    };
  }
  function Nr(t, r) {
    for (const n in t)
      if (Object.prototype.hasOwnProperty.call(t, n) && r(t[n])) return n;
  }
  function Or(t, r) {
    for (let n = 0; n < t.length; n++) if (r(t[n])) return n;
  }
  function Er(t) {
    return (r, n = {}) => {
      const a = r.match(t.matchPattern);
      if (!a) return null;
      const o = a[0],
        l = r.match(t.parsePattern);
      if (!l) return null;
      let s = t.valueCallback ? t.valueCallback(l[0]) : l[0];
      s = n.valueCallback ? n.valueCallback(s) : s;
      const c = r.slice(o.length);
      return { value: s, rest: c };
    };
  }
  const Rr = /^(\d+)(th|st|nd|rd)?/i,
    _r = /\d+/i,
    Yr = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i,
    },
    xr = { any: [/^b/i, /^(a|c)/i] },
    Vr = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i,
    },
    Ir = { any: [/1/i, /2/i, /3/i, /4/i] },
    Fr = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
    },
    Lr = {
      narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i,
      ],
      any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i,
      ],
    },
    Hr = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
    },
    zr = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
    },
    Wr = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
    },
    qr = {
      any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i,
      },
    },
    Ur = {
      ordinalNumber: Er({
        matchPattern: Rr,
        parsePattern: _r,
        valueCallback: (t) => parseInt(t, 10),
      }),
      era: _t({
        matchPatterns: Yr,
        defaultMatchWidth: 'wide',
        parsePatterns: xr,
        defaultParseWidth: 'any',
      }),
      quarter: _t({
        matchPatterns: Vr,
        defaultMatchWidth: 'wide',
        parsePatterns: Ir,
        defaultParseWidth: 'any',
        valueCallback: (t) => t + 1,
      }),
      month: _t({
        matchPatterns: Fr,
        defaultMatchWidth: 'wide',
        parsePatterns: Lr,
        defaultParseWidth: 'any',
      }),
      day: _t({
        matchPatterns: Hr,
        defaultMatchWidth: 'wide',
        parsePatterns: zr,
        defaultParseWidth: 'any',
      }),
      dayPeriod: _t({
        matchPatterns: Wr,
        defaultMatchWidth: 'any',
        parsePatterns: qr,
        defaultParseWidth: 'any',
      }),
    },
    da = {
      code: 'en-US',
      formatDistance: yr,
      formatLong: vr,
      formatRelative: Mr,
      localize: Ar,
      match: Ur,
      options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    };
  function jr(t) {
    const r = oe(t);
    return aa(r, Et(r)) + 1;
  }
  function mn(t) {
    const r = oe(t),
      n = +Dt(r) - +cr(r);
    return Math.round(n / Zn) + 1;
  }
  function hn(t, r) {
    var m, S, g, C;
    const n = oe(t),
      a = n.getFullYear(),
      o = ht(),
      l =
        (r == null ? void 0 : r.firstWeekContainsDate) ??
        ((S =
          (m = r == null ? void 0 : r.locale) == null ? void 0 : m.options) ==
        null
          ? void 0
          : S.firstWeekContainsDate) ??
        o.firstWeekContainsDate ??
        ((C = (g = o.locale) == null ? void 0 : g.options) == null
          ? void 0
          : C.firstWeekContainsDate) ??
        1,
      s = ge(t, 0);
    s.setFullYear(a + 1, 0, l), s.setHours(0, 0, 0, 0);
    const c = Ue(s, r),
      u = ge(t, 0);
    u.setFullYear(a, 0, l), u.setHours(0, 0, 0, 0);
    const B = Ue(u, r);
    return n.getTime() >= c.getTime()
      ? a + 1
      : n.getTime() >= B.getTime()
      ? a
      : a - 1;
  }
  function Qr(t, r) {
    var c, u, B, m;
    const n = ht(),
      a =
        (r == null ? void 0 : r.firstWeekContainsDate) ??
        ((u =
          (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) ==
        null
          ? void 0
          : u.firstWeekContainsDate) ??
        n.firstWeekContainsDate ??
        ((m = (B = n.locale) == null ? void 0 : B.options) == null
          ? void 0
          : m.firstWeekContainsDate) ??
        1,
      o = hn(t, r),
      l = ge(t, 0);
    return l.setFullYear(o, 0, a), l.setHours(0, 0, 0, 0), Ue(l, r);
  }
  function pn(t, r) {
    const n = oe(t),
      a = +Ue(n, r) - +Qr(n, r);
    return Math.round(a / Zn) + 1;
  }
  function we(t, r) {
    const n = t < 0 ? '-' : '',
      a = Math.abs(t).toString().padStart(r, '0');
    return n + a;
  }
  const rt = {
      y(t, r) {
        const n = t.getFullYear(),
          a = n > 0 ? n : 1 - n;
        return we(r === 'yy' ? a % 100 : a, r.length);
      },
      M(t, r) {
        const n = t.getMonth();
        return r === 'M' ? String(n + 1) : we(n + 1, 2);
      },
      d(t, r) {
        return we(t.getDate(), r.length);
      },
      a(t, r) {
        const n = t.getHours() / 12 >= 1 ? 'pm' : 'am';
        switch (r) {
          case 'a':
          case 'aa':
            return n.toUpperCase();
          case 'aaa':
            return n;
          case 'aaaaa':
            return n[0];
          case 'aaaa':
          default:
            return n === 'am' ? 'a.m.' : 'p.m.';
        }
      },
      h(t, r) {
        return we(t.getHours() % 12 || 12, r.length);
      },
      H(t, r) {
        return we(t.getHours(), r.length);
      },
      m(t, r) {
        return we(t.getMinutes(), r.length);
      },
      s(t, r) {
        return we(t.getSeconds(), r.length);
      },
      S(t, r) {
        const n = r.length,
          a = t.getMilliseconds(),
          o = Math.trunc(a * Math.pow(10, n - 3));
        return we(o, r.length);
      },
    },
    Mt = {
      am: 'am',
      pm: 'pm',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    fa = {
      G: function (t, r, n) {
        const a = t.getFullYear() > 0 ? 1 : 0;
        switch (r) {
          case 'G':
          case 'GG':
          case 'GGG':
            return n.era(a, { width: 'abbreviated' });
          case 'GGGGG':
            return n.era(a, { width: 'narrow' });
          case 'GGGG':
          default:
            return n.era(a, { width: 'wide' });
        }
      },
      y: function (t, r, n) {
        if (r === 'yo') {
          const a = t.getFullYear(),
            o = a > 0 ? a : 1 - a;
          return n.ordinalNumber(o, { unit: 'year' });
        }
        return rt.y(t, r);
      },
      Y: function (t, r, n, a) {
        const o = hn(t, a),
          l = o > 0 ? o : 1 - o;
        if (r === 'YY') {
          const s = l % 100;
          return we(s, 2);
        }
        return r === 'Yo'
          ? n.ordinalNumber(l, { unit: 'year' })
          : we(l, r.length);
      },
      R: function (t, r) {
        const n = ta(t);
        return we(n, r.length);
      },
      u: function (t, r) {
        const n = t.getFullYear();
        return we(n, r.length);
      },
      Q: function (t, r, n) {
        const a = Math.ceil((t.getMonth() + 1) / 3);
        switch (r) {
          case 'Q':
            return String(a);
          case 'QQ':
            return we(a, 2);
          case 'Qo':
            return n.ordinalNumber(a, { unit: 'quarter' });
          case 'QQQ':
            return n.quarter(a, {
              width: 'abbreviated',
              context: 'formatting',
            });
          case 'QQQQQ':
            return n.quarter(a, { width: 'narrow', context: 'formatting' });
          case 'QQQQ':
          default:
            return n.quarter(a, { width: 'wide', context: 'formatting' });
        }
      },
      q: function (t, r, n) {
        const a = Math.ceil((t.getMonth() + 1) / 3);
        switch (r) {
          case 'q':
            return String(a);
          case 'qq':
            return we(a, 2);
          case 'qo':
            return n.ordinalNumber(a, { unit: 'quarter' });
          case 'qqq':
            return n.quarter(a, {
              width: 'abbreviated',
              context: 'standalone',
            });
          case 'qqqqq':
            return n.quarter(a, { width: 'narrow', context: 'standalone' });
          case 'qqqq':
          default:
            return n.quarter(a, { width: 'wide', context: 'standalone' });
        }
      },
      M: function (t, r, n) {
        const a = t.getMonth();
        switch (r) {
          case 'M':
          case 'MM':
            return rt.M(t, r);
          case 'Mo':
            return n.ordinalNumber(a + 1, { unit: 'month' });
          case 'MMM':
            return n.month(a, { width: 'abbreviated', context: 'formatting' });
          case 'MMMMM':
            return n.month(a, { width: 'narrow', context: 'formatting' });
          case 'MMMM':
          default:
            return n.month(a, { width: 'wide', context: 'formatting' });
        }
      },
      L: function (t, r, n) {
        const a = t.getMonth();
        switch (r) {
          case 'L':
            return String(a + 1);
          case 'LL':
            return we(a + 1, 2);
          case 'Lo':
            return n.ordinalNumber(a + 1, { unit: 'month' });
          case 'LLL':
            return n.month(a, { width: 'abbreviated', context: 'standalone' });
          case 'LLLLL':
            return n.month(a, { width: 'narrow', context: 'standalone' });
          case 'LLLL':
          default:
            return n.month(a, { width: 'wide', context: 'standalone' });
        }
      },
      w: function (t, r, n, a) {
        const o = pn(t, a);
        return r === 'wo'
          ? n.ordinalNumber(o, { unit: 'week' })
          : we(o, r.length);
      },
      I: function (t, r, n) {
        const a = mn(t);
        return r === 'Io'
          ? n.ordinalNumber(a, { unit: 'week' })
          : we(a, r.length);
      },
      d: function (t, r, n) {
        return r === 'do'
          ? n.ordinalNumber(t.getDate(), { unit: 'date' })
          : rt.d(t, r);
      },
      D: function (t, r, n) {
        const a = jr(t);
        return r === 'Do'
          ? n.ordinalNumber(a, { unit: 'dayOfYear' })
          : we(a, r.length);
      },
      E: function (t, r, n) {
        const a = t.getDay();
        switch (r) {
          case 'E':
          case 'EE':
          case 'EEE':
            return n.day(a, { width: 'abbreviated', context: 'formatting' });
          case 'EEEEE':
            return n.day(a, { width: 'narrow', context: 'formatting' });
          case 'EEEEEE':
            return n.day(a, { width: 'short', context: 'formatting' });
          case 'EEEE':
          default:
            return n.day(a, { width: 'wide', context: 'formatting' });
        }
      },
      e: function (t, r, n, a) {
        const o = t.getDay(),
          l = (o - a.weekStartsOn + 8) % 7 || 7;
        switch (r) {
          case 'e':
            return String(l);
          case 'ee':
            return we(l, 2);
          case 'eo':
            return n.ordinalNumber(l, { unit: 'day' });
          case 'eee':
            return n.day(o, { width: 'abbreviated', context: 'formatting' });
          case 'eeeee':
            return n.day(o, { width: 'narrow', context: 'formatting' });
          case 'eeeeee':
            return n.day(o, { width: 'short', context: 'formatting' });
          case 'eeee':
          default:
            return n.day(o, { width: 'wide', context: 'formatting' });
        }
      },
      c: function (t, r, n, a) {
        const o = t.getDay(),
          l = (o - a.weekStartsOn + 8) % 7 || 7;
        switch (r) {
          case 'c':
            return String(l);
          case 'cc':
            return we(l, r.length);
          case 'co':
            return n.ordinalNumber(l, { unit: 'day' });
          case 'ccc':
            return n.day(o, { width: 'abbreviated', context: 'standalone' });
          case 'ccccc':
            return n.day(o, { width: 'narrow', context: 'standalone' });
          case 'cccccc':
            return n.day(o, { width: 'short', context: 'standalone' });
          case 'cccc':
          default:
            return n.day(o, { width: 'wide', context: 'standalone' });
        }
      },
      i: function (t, r, n) {
        const a = t.getDay(),
          o = a === 0 ? 7 : a;
        switch (r) {
          case 'i':
            return String(o);
          case 'ii':
            return we(o, r.length);
          case 'io':
            return n.ordinalNumber(o, { unit: 'day' });
          case 'iii':
            return n.day(a, { width: 'abbreviated', context: 'formatting' });
          case 'iiiii':
            return n.day(a, { width: 'narrow', context: 'formatting' });
          case 'iiiiii':
            return n.day(a, { width: 'short', context: 'formatting' });
          case 'iiii':
          default:
            return n.day(a, { width: 'wide', context: 'formatting' });
        }
      },
      a: function (t, r, n) {
        const o = t.getHours() / 12 >= 1 ? 'pm' : 'am';
        switch (r) {
          case 'a':
          case 'aa':
            return n.dayPeriod(o, {
              width: 'abbreviated',
              context: 'formatting',
            });
          case 'aaa':
            return n
              .dayPeriod(o, { width: 'abbreviated', context: 'formatting' })
              .toLowerCase();
          case 'aaaaa':
            return n.dayPeriod(o, { width: 'narrow', context: 'formatting' });
          case 'aaaa':
          default:
            return n.dayPeriod(o, { width: 'wide', context: 'formatting' });
        }
      },
      b: function (t, r, n) {
        const a = t.getHours();
        let o;
        switch (
          (a === 12
            ? (o = Mt.noon)
            : a === 0
            ? (o = Mt.midnight)
            : (o = a / 12 >= 1 ? 'pm' : 'am'),
          r)
        ) {
          case 'b':
          case 'bb':
            return n.dayPeriod(o, {
              width: 'abbreviated',
              context: 'formatting',
            });
          case 'bbb':
            return n
              .dayPeriod(o, { width: 'abbreviated', context: 'formatting' })
              .toLowerCase();
          case 'bbbbb':
            return n.dayPeriod(o, { width: 'narrow', context: 'formatting' });
          case 'bbbb':
          default:
            return n.dayPeriod(o, { width: 'wide', context: 'formatting' });
        }
      },
      B: function (t, r, n) {
        const a = t.getHours();
        let o;
        switch (
          (a >= 17
            ? (o = Mt.evening)
            : a >= 12
            ? (o = Mt.afternoon)
            : a >= 4
            ? (o = Mt.morning)
            : (o = Mt.night),
          r)
        ) {
          case 'B':
          case 'BB':
          case 'BBB':
            return n.dayPeriod(o, {
              width: 'abbreviated',
              context: 'formatting',
            });
          case 'BBBBB':
            return n.dayPeriod(o, { width: 'narrow', context: 'formatting' });
          case 'BBBB':
          default:
            return n.dayPeriod(o, { width: 'wide', context: 'formatting' });
        }
      },
      h: function (t, r, n) {
        if (r === 'ho') {
          let a = t.getHours() % 12;
          return a === 0 && (a = 12), n.ordinalNumber(a, { unit: 'hour' });
        }
        return rt.h(t, r);
      },
      H: function (t, r, n) {
        return r === 'Ho'
          ? n.ordinalNumber(t.getHours(), { unit: 'hour' })
          : rt.H(t, r);
      },
      K: function (t, r, n) {
        const a = t.getHours() % 12;
        return r === 'Ko'
          ? n.ordinalNumber(a, { unit: 'hour' })
          : we(a, r.length);
      },
      k: function (t, r, n) {
        let a = t.getHours();
        return (
          a === 0 && (a = 24),
          r === 'ko' ? n.ordinalNumber(a, { unit: 'hour' }) : we(a, r.length)
        );
      },
      m: function (t, r, n) {
        return r === 'mo'
          ? n.ordinalNumber(t.getMinutes(), { unit: 'minute' })
          : rt.m(t, r);
      },
      s: function (t, r, n) {
        return r === 'so'
          ? n.ordinalNumber(t.getSeconds(), { unit: 'second' })
          : rt.s(t, r);
      },
      S: function (t, r) {
        return rt.S(t, r);
      },
      X: function (t, r, n) {
        const a = t.getTimezoneOffset();
        if (a === 0) return 'Z';
        switch (r) {
          case 'X':
            return ha(a);
          case 'XXXX':
          case 'XX':
            return gt(a);
          case 'XXXXX':
          case 'XXX':
          default:
            return gt(a, ':');
        }
      },
      x: function (t, r, n) {
        const a = t.getTimezoneOffset();
        switch (r) {
          case 'x':
            return ha(a);
          case 'xxxx':
          case 'xx':
            return gt(a);
          case 'xxxxx':
          case 'xxx':
          default:
            return gt(a, ':');
        }
      },
      O: function (t, r, n) {
        const a = t.getTimezoneOffset();
        switch (r) {
          case 'O':
          case 'OO':
          case 'OOO':
            return 'GMT' + ma(a, ':');
          case 'OOOO':
          default:
            return 'GMT' + gt(a, ':');
        }
      },
      z: function (t, r, n) {
        const a = t.getTimezoneOffset();
        switch (r) {
          case 'z':
          case 'zz':
          case 'zzz':
            return 'GMT' + ma(a, ':');
          case 'zzzz':
          default:
            return 'GMT' + gt(a, ':');
        }
      },
      t: function (t, r, n) {
        const a = Math.trunc(t.getTime() / 1e3);
        return we(a, r.length);
      },
      T: function (t, r, n) {
        const a = t.getTime();
        return we(a, r.length);
      },
    };
  function ma(t, r = '') {
    const n = t > 0 ? '-' : '+',
      a = Math.abs(t),
      o = Math.trunc(a / 60),
      l = a % 60;
    return l === 0 ? n + String(o) : n + String(o) + r + we(l, 2);
  }
  function ha(t, r) {
    return t % 60 === 0
      ? (t > 0 ? '-' : '+') + we(Math.abs(t) / 60, 2)
      : gt(t, r);
  }
  function gt(t, r = '') {
    const n = t > 0 ? '-' : '+',
      a = Math.abs(t),
      o = we(Math.trunc(a / 60), 2),
      l = we(a % 60, 2);
    return n + o + r + l;
  }
  const pa = (t, r) => {
      switch (t) {
        case 'P':
          return r.date({ width: 'short' });
        case 'PP':
          return r.date({ width: 'medium' });
        case 'PPP':
          return r.date({ width: 'long' });
        case 'PPPP':
        default:
          return r.date({ width: 'full' });
      }
    },
    ga = (t, r) => {
      switch (t) {
        case 'p':
          return r.time({ width: 'short' });
        case 'pp':
          return r.time({ width: 'medium' });
        case 'ppp':
          return r.time({ width: 'long' });
        case 'pppp':
        default:
          return r.time({ width: 'full' });
      }
    },
    gn = {
      p: ga,
      P: (t, r) => {
        const n = t.match(/(P+)(p+)?/) || [],
          a = n[1],
          o = n[2];
        if (!o) return pa(t, r);
        let l;
        switch (a) {
          case 'P':
            l = r.dateTime({ width: 'short' });
            break;
          case 'PP':
            l = r.dateTime({ width: 'medium' });
            break;
          case 'PPP':
            l = r.dateTime({ width: 'long' });
            break;
          case 'PPPP':
          default:
            l = r.dateTime({ width: 'full' });
            break;
        }
        return l.replace('{{date}}', pa(a, r)).replace('{{time}}', ga(o, r));
      },
    },
    Gr = /^D+$/,
    Kr = /^Y+$/,
    Xr = ['D', 'DD', 'YY', 'YYYY'];
  function ya(t) {
    return Gr.test(t);
  }
  function wa(t) {
    return Kr.test(t);
  }
  function yn(t, r, n) {
    const a = Jr(t, r, n);
    if ((console.warn(a), Xr.includes(t))) throw new RangeError(a);
  }
  function Jr(t, r, n) {
    const a = t[0] === 'Y' ? 'years' : 'days of the month';
    return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${r}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
  }
  const Zr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    eo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    to = /^'([^]*?)'?$/,
    no = /''/g,
    ao = /[a-zA-Z]/;
  function Ke(t, r, n) {
    var m, S, g, C, Y, x, I, p;
    const a = ht(),
      o = (n == null ? void 0 : n.locale) ?? a.locale ?? da,
      l =
        (n == null ? void 0 : n.firstWeekContainsDate) ??
        ((S =
          (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) ==
        null
          ? void 0
          : S.firstWeekContainsDate) ??
        a.firstWeekContainsDate ??
        ((C = (g = a.locale) == null ? void 0 : g.options) == null
          ? void 0
          : C.firstWeekContainsDate) ??
        1,
      s =
        (n == null ? void 0 : n.weekStartsOn) ??
        ((x =
          (Y = n == null ? void 0 : n.locale) == null ? void 0 : Y.options) ==
        null
          ? void 0
          : x.weekStartsOn) ??
        a.weekStartsOn ??
        ((p = (I = a.locale) == null ? void 0 : I.options) == null
          ? void 0
          : p.weekStartsOn) ??
        0,
      c = oe(t);
    if (!Ot(c)) throw new RangeError('Invalid time value');
    let u = r
      .match(eo)
      .map(($) => {
        const P = $[0];
        if (P === 'p' || P === 'P') {
          const z = gn[P];
          return z($, o.formatLong);
        }
        return $;
      })
      .join('')
      .match(Zr)
      .map(($) => {
        if ($ === "''") return { isToken: !1, value: "'" };
        const P = $[0];
        if (P === "'") return { isToken: !1, value: ro($) };
        if (fa[P]) return { isToken: !0, value: $ };
        if (P.match(ao))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' +
              P +
              '`'
          );
        return { isToken: !1, value: $ };
      });
    o.localize.preprocessor && (u = o.localize.preprocessor(c, u));
    const B = { firstWeekContainsDate: l, weekStartsOn: s, locale: o };
    return u
      .map(($) => {
        if (!$.isToken) return $.value;
        const P = $.value;
        ((!(n != null && n.useAdditionalWeekYearTokens) && wa(P)) ||
          (!(n != null && n.useAdditionalDayOfYearTokens) && ya(P))) &&
          yn(P, r, String(t));
        const z = fa[P[0]];
        return z(c, P, o.localize, B);
      })
      .join('');
  }
  function ro(t) {
    const r = t.match(to);
    return r ? r[1].replace(no, "'") : t;
  }
  function oo(t) {
    return oe(t).getDay();
  }
  function lo(t) {
    const r = oe(t),
      n = r.getFullYear(),
      a = r.getMonth(),
      o = ge(t, 0);
    return o.setFullYear(n, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
  }
  function so() {
    return Object.assign({}, ht());
  }
  function tt(t) {
    return oe(t).getHours();
  }
  function io(t) {
    let n = oe(t).getDay();
    return n === 0 && (n = 7), n;
  }
  function ot(t) {
    return oe(t).getMinutes();
  }
  function he(t) {
    return oe(t).getMonth();
  }
  function Tt(t) {
    return oe(t).getSeconds();
  }
  function ce(t) {
    return oe(t).getFullYear();
  }
  function Pt(t, r) {
    const n = oe(t),
      a = oe(r);
    return n.getTime() > a.getTime();
  }
  function Yt(t, r) {
    const n = oe(t),
      a = oe(r);
    return +n < +a;
  }
  function Ct(t, r) {
    const n = oe(t),
      a = oe(r);
    return +n == +a;
  }
  function uo(t, r) {
    const n = r instanceof Date ? ge(r, 0) : new r(0);
    return (
      n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()),
      n.setHours(
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      ),
      n
    );
  }
  const co = 10;
  class ka {
    constructor() {
      ae(this, 'subPriority', 0);
    }
    validate(r, n) {
      return !0;
    }
  }
  class fo extends ka {
    constructor(r, n, a, o, l) {
      super(),
        (this.value = r),
        (this.validateValue = n),
        (this.setValue = a),
        (this.priority = o),
        l && (this.subPriority = l);
    }
    validate(r, n) {
      return this.validateValue(r, this.value, n);
    }
    set(r, n, a) {
      return this.setValue(r, n, this.value, a);
    }
  }
  class mo extends ka {
    constructor() {
      super(...arguments);
      ae(this, 'priority', co);
      ae(this, 'subPriority', -1);
    }
    set(n, a) {
      return a.timestampIsSet ? n : ge(n, uo(n, Date));
    }
  }
  class ye {
    run(r, n, a, o) {
      const l = this.parse(r, n, a, o);
      return l
        ? {
            setter: new fo(
              l.value,
              this.validate,
              this.set,
              this.priority,
              this.subPriority
            ),
            rest: l.rest,
          }
        : null;
    }
    validate(r, n, a) {
      return !0;
    }
  }
  class ho extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 140);
      ae(this, 'incompatibleTokens', ['R', 'u', 't', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 'G':
        case 'GG':
        case 'GGG':
          return (
            o.era(n, { width: 'abbreviated' }) || o.era(n, { width: 'narrow' })
          );
        case 'GGGGG':
          return o.era(n, { width: 'narrow' });
        case 'GGGG':
        default:
          return (
            o.era(n, { width: 'wide' }) ||
            o.era(n, { width: 'abbreviated' }) ||
            o.era(n, { width: 'narrow' })
          );
      }
    }
    set(n, a, o) {
      return (a.era = o), n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
  }
  const Be = {
      month: /^(1[0-2]|0?\d)/,
      date: /^(3[0-1]|[0-2]?\d)/,
      dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
      week: /^(5[0-3]|[0-4]?\d)/,
      hour23h: /^(2[0-3]|[0-1]?\d)/,
      hour24h: /^(2[0-4]|[0-1]?\d)/,
      hour11h: /^(1[0-1]|0?\d)/,
      hour12h: /^(1[0-2]|0?\d)/,
      minute: /^[0-5]?\d/,
      second: /^[0-5]?\d/,
      singleDigit: /^\d/,
      twoDigits: /^\d{1,2}/,
      threeDigits: /^\d{1,3}/,
      fourDigits: /^\d{1,4}/,
      anyDigitsSigned: /^-?\d+/,
      singleDigitSigned: /^-?\d/,
      twoDigitsSigned: /^-?\d{1,2}/,
      threeDigitsSigned: /^-?\d{1,3}/,
      fourDigitsSigned: /^-?\d{1,4}/,
    },
    Xe = {
      basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
      basic: /^([+-])(\d{2})(\d{2})|Z/,
      basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
      extended: /^([+-])(\d{2}):(\d{2})|Z/,
      extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
    };
  function Se(t, r) {
    return t && { value: r(t.value), rest: t.rest };
  }
  function Te(t, r) {
    const n = r.match(t);
    return n ? { value: parseInt(n[0], 10), rest: r.slice(n[0].length) } : null;
  }
  function Je(t, r) {
    const n = r.match(t);
    if (!n) return null;
    if (n[0] === 'Z') return { value: 0, rest: r.slice(1) };
    const a = n[1] === '+' ? 1 : -1,
      o = n[2] ? parseInt(n[2], 10) : 0,
      l = n[3] ? parseInt(n[3], 10) : 0,
      s = n[5] ? parseInt(n[5], 10) : 0;
    return {
      value: a * (o * ea + l * lr + s * sr),
      rest: r.slice(n[0].length),
    };
  }
  function ba(t) {
    return Te(Be.anyDigitsSigned, t);
  }
  function Pe(t, r) {
    switch (t) {
      case 1:
        return Te(Be.singleDigit, r);
      case 2:
        return Te(Be.twoDigits, r);
      case 3:
        return Te(Be.threeDigits, r);
      case 4:
        return Te(Be.fourDigits, r);
      default:
        return Te(new RegExp('^\\d{1,' + t + '}'), r);
    }
  }
  function jt(t, r) {
    switch (t) {
      case 1:
        return Te(Be.singleDigitSigned, r);
      case 2:
        return Te(Be.twoDigitsSigned, r);
      case 3:
        return Te(Be.threeDigitsSigned, r);
      case 4:
        return Te(Be.fourDigitsSigned, r);
      default:
        return Te(new RegExp('^-?\\d{1,' + t + '}'), r);
    }
  }
  function wn(t) {
    switch (t) {
      case 'morning':
        return 4;
      case 'evening':
        return 17;
      case 'pm':
      case 'noon':
      case 'afternoon':
        return 12;
      case 'am':
      case 'midnight':
      case 'night':
      default:
        return 0;
    }
  }
  function va(t, r) {
    const n = r > 0,
      a = n ? r : 1 - r;
    let o;
    if (a <= 50) o = t || 100;
    else {
      const l = a + 50,
        s = Math.trunc(l / 100) * 100,
        c = t >= l % 100;
      o = t + s - (c ? 100 : 0);
    }
    return n ? o : 1 - o;
  }
  function Da(t) {
    return t % 400 === 0 || (t % 4 === 0 && t % 100 !== 0);
  }
  class po extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 130);
      ae(this, 'incompatibleTokens', [
        'Y',
        'R',
        'u',
        'w',
        'I',
        'i',
        'e',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a, o) {
      const l = (s) => ({ year: s, isTwoDigitYear: a === 'yy' });
      switch (a) {
        case 'y':
          return Se(Pe(4, n), l);
        case 'yo':
          return Se(o.ordinalNumber(n, { unit: 'year' }), l);
        default:
          return Se(Pe(a.length, n), l);
      }
    }
    validate(n, a) {
      return a.isTwoDigitYear || a.year > 0;
    }
    set(n, a, o) {
      const l = n.getFullYear();
      if (o.isTwoDigitYear) {
        const c = va(o.year, l);
        return n.setFullYear(c, 0, 1), n.setHours(0, 0, 0, 0), n;
      }
      const s = !('era' in a) || a.era === 1 ? o.year : 1 - o.year;
      return n.setFullYear(s, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
  }
  class go extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 130);
      ae(this, 'incompatibleTokens', [
        'y',
        'R',
        'u',
        'Q',
        'q',
        'M',
        'L',
        'I',
        'd',
        'D',
        'i',
        't',
        'T',
      ]);
    }
    parse(n, a, o) {
      const l = (s) => ({ year: s, isTwoDigitYear: a === 'YY' });
      switch (a) {
        case 'Y':
          return Se(Pe(4, n), l);
        case 'Yo':
          return Se(o.ordinalNumber(n, { unit: 'year' }), l);
        default:
          return Se(Pe(a.length, n), l);
      }
    }
    validate(n, a) {
      return a.isTwoDigitYear || a.year > 0;
    }
    set(n, a, o, l) {
      const s = hn(n, l);
      if (o.isTwoDigitYear) {
        const u = va(o.year, s);
        return (
          n.setFullYear(u, 0, l.firstWeekContainsDate),
          n.setHours(0, 0, 0, 0),
          Ue(n, l)
        );
      }
      const c = !('era' in a) || a.era === 1 ? o.year : 1 - o.year;
      return (
        n.setFullYear(c, 0, l.firstWeekContainsDate),
        n.setHours(0, 0, 0, 0),
        Ue(n, l)
      );
    }
  }
  class yo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 130);
      ae(this, 'incompatibleTokens', [
        'G',
        'y',
        'Y',
        'u',
        'Q',
        'q',
        'M',
        'L',
        'w',
        'd',
        'D',
        'e',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a) {
      return jt(a === 'R' ? 4 : a.length, n);
    }
    set(n, a, o) {
      const l = ge(n, 0);
      return l.setFullYear(o, 0, 4), l.setHours(0, 0, 0, 0), Dt(l);
    }
  }
  class wo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 130);
      ae(this, 'incompatibleTokens', [
        'G',
        'y',
        'Y',
        'R',
        'w',
        'I',
        'i',
        'e',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a) {
      return jt(a === 'u' ? 4 : a.length, n);
    }
    set(n, a, o) {
      return n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
  }
  class ko extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 120);
      ae(this, 'incompatibleTokens', [
        'Y',
        'R',
        'q',
        'M',
        'L',
        'w',
        'I',
        'd',
        'D',
        'i',
        'e',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a, o) {
      switch (a) {
        case 'Q':
        case 'QQ':
          return Pe(a.length, n);
        case 'Qo':
          return o.ordinalNumber(n, { unit: 'quarter' });
        case 'QQQ':
          return (
            o.quarter(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.quarter(n, { width: 'narrow', context: 'formatting' })
          );
        case 'QQQQQ':
          return o.quarter(n, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return (
            o.quarter(n, { width: 'wide', context: 'formatting' }) ||
            o.quarter(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.quarter(n, { width: 'narrow', context: 'formatting' })
          );
      }
    }
    validate(n, a) {
      return a >= 1 && a <= 4;
    }
    set(n, a, o) {
      return n.setMonth((o - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
    }
  }
  class bo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 120);
      ae(this, 'incompatibleTokens', [
        'Y',
        'R',
        'Q',
        'M',
        'L',
        'w',
        'I',
        'd',
        'D',
        'i',
        'e',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a, o) {
      switch (a) {
        case 'q':
        case 'qq':
          return Pe(a.length, n);
        case 'qo':
          return o.ordinalNumber(n, { unit: 'quarter' });
        case 'qqq':
          return (
            o.quarter(n, { width: 'abbreviated', context: 'standalone' }) ||
            o.quarter(n, { width: 'narrow', context: 'standalone' })
          );
        case 'qqqqq':
          return o.quarter(n, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return (
            o.quarter(n, { width: 'wide', context: 'standalone' }) ||
            o.quarter(n, { width: 'abbreviated', context: 'standalone' }) ||
            o.quarter(n, { width: 'narrow', context: 'standalone' })
          );
      }
    }
    validate(n, a) {
      return a >= 1 && a <= 4;
    }
    set(n, a, o) {
      return n.setMonth((o - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
    }
  }
  class vo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'incompatibleTokens', [
        'Y',
        'R',
        'q',
        'Q',
        'L',
        'w',
        'I',
        'D',
        'i',
        'e',
        'c',
        't',
        'T',
      ]);
      ae(this, 'priority', 110);
    }
    parse(n, a, o) {
      const l = (s) => s - 1;
      switch (a) {
        case 'M':
          return Se(Te(Be.month, n), l);
        case 'MM':
          return Se(Pe(2, n), l);
        case 'Mo':
          return Se(o.ordinalNumber(n, { unit: 'month' }), l);
        case 'MMM':
          return (
            o.month(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.month(n, { width: 'narrow', context: 'formatting' })
          );
        case 'MMMMM':
          return o.month(n, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return (
            o.month(n, { width: 'wide', context: 'formatting' }) ||
            o.month(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.month(n, { width: 'narrow', context: 'formatting' })
          );
      }
    }
    validate(n, a) {
      return a >= 0 && a <= 11;
    }
    set(n, a, o) {
      return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
    }
  }
  class Do extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 110);
      ae(this, 'incompatibleTokens', [
        'Y',
        'R',
        'q',
        'Q',
        'M',
        'w',
        'I',
        'D',
        'i',
        'e',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a, o) {
      const l = (s) => s - 1;
      switch (a) {
        case 'L':
          return Se(Te(Be.month, n), l);
        case 'LL':
          return Se(Pe(2, n), l);
        case 'Lo':
          return Se(o.ordinalNumber(n, { unit: 'month' }), l);
        case 'LLL':
          return (
            o.month(n, { width: 'abbreviated', context: 'standalone' }) ||
            o.month(n, { width: 'narrow', context: 'standalone' })
          );
        case 'LLLLL':
          return o.month(n, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return (
            o.month(n, { width: 'wide', context: 'standalone' }) ||
            o.month(n, { width: 'abbreviated', context: 'standalone' }) ||
            o.month(n, { width: 'narrow', context: 'standalone' })
          );
      }
    }
    validate(n, a) {
      return a >= 0 && a <= 11;
    }
    set(n, a, o) {
      return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
    }
  }
  function Mo(t, r, n) {
    const a = oe(t),
      o = pn(a, n) - r;
    return a.setDate(a.getDate() - o * 7), a;
  }
  class To extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 100);
      ae(this, 'incompatibleTokens', [
        'y',
        'R',
        'u',
        'q',
        'Q',
        'M',
        'L',
        'I',
        'd',
        'D',
        'i',
        't',
        'T',
      ]);
    }
    parse(n, a, o) {
      switch (a) {
        case 'w':
          return Te(Be.week, n);
        case 'wo':
          return o.ordinalNumber(n, { unit: 'week' });
        default:
          return Pe(a.length, n);
      }
    }
    validate(n, a) {
      return a >= 1 && a <= 53;
    }
    set(n, a, o, l) {
      return Ue(Mo(n, o, l), l);
    }
  }
  function Po(t, r) {
    const n = oe(t),
      a = mn(n) - r;
    return n.setDate(n.getDate() - a * 7), n;
  }
  class Co extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 100);
      ae(this, 'incompatibleTokens', [
        'y',
        'Y',
        'u',
        'q',
        'Q',
        'M',
        'L',
        'w',
        'd',
        'D',
        'e',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a, o) {
      switch (a) {
        case 'I':
          return Te(Be.week, n);
        case 'Io':
          return o.ordinalNumber(n, { unit: 'week' });
        default:
          return Pe(a.length, n);
      }
    }
    validate(n, a) {
      return a >= 1 && a <= 53;
    }
    set(n, a, o) {
      return Dt(Po(n, o));
    }
  }
  const Bo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    So = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  class $o extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 90);
      ae(this, 'subPriority', 1);
      ae(this, 'incompatibleTokens', [
        'Y',
        'R',
        'q',
        'Q',
        'w',
        'I',
        'D',
        'i',
        'e',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a, o) {
      switch (a) {
        case 'd':
          return Te(Be.date, n);
        case 'do':
          return o.ordinalNumber(n, { unit: 'date' });
        default:
          return Pe(a.length, n);
      }
    }
    validate(n, a) {
      const o = n.getFullYear(),
        l = Da(o),
        s = n.getMonth();
      return l ? a >= 1 && a <= So[s] : a >= 1 && a <= Bo[s];
    }
    set(n, a, o) {
      return n.setDate(o), n.setHours(0, 0, 0, 0), n;
    }
  }
  class Ao extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 90);
      ae(this, 'subpriority', 1);
      ae(this, 'incompatibleTokens', [
        'Y',
        'R',
        'q',
        'Q',
        'M',
        'L',
        'w',
        'I',
        'd',
        'E',
        'i',
        'e',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a, o) {
      switch (a) {
        case 'D':
        case 'DD':
          return Te(Be.dayOfYear, n);
        case 'Do':
          return o.ordinalNumber(n, { unit: 'date' });
        default:
          return Pe(a.length, n);
      }
    }
    validate(n, a) {
      const o = n.getFullYear();
      return Da(o) ? a >= 1 && a <= 366 : a >= 1 && a <= 365;
    }
    set(n, a, o) {
      return n.setMonth(0, o), n.setHours(0, 0, 0, 0), n;
    }
  }
  function kn(t, r, n) {
    var S, g, C, Y;
    const a = ht(),
      o =
        (n == null ? void 0 : n.weekStartsOn) ??
        ((g =
          (S = n == null ? void 0 : n.locale) == null ? void 0 : S.options) ==
        null
          ? void 0
          : g.weekStartsOn) ??
        a.weekStartsOn ??
        ((Y = (C = a.locale) == null ? void 0 : C.options) == null
          ? void 0
          : Y.weekStartsOn) ??
        0,
      l = oe(t),
      s = l.getDay(),
      u = ((r % 7) + 7) % 7,
      B = 7 - o,
      m = r < 0 || r > 6 ? r - ((s + B) % 7) : ((u + B) % 7) - ((s + B) % 7);
    return We(l, m);
  }
  class No extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 90);
      ae(this, 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 'E':
        case 'EE':
        case 'EEE':
          return (
            o.day(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.day(n, { width: 'short', context: 'formatting' }) ||
            o.day(n, { width: 'narrow', context: 'formatting' })
          );
        case 'EEEEE':
          return o.day(n, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return (
            o.day(n, { width: 'short', context: 'formatting' }) ||
            o.day(n, { width: 'narrow', context: 'formatting' })
          );
        case 'EEEE':
        default:
          return (
            o.day(n, { width: 'wide', context: 'formatting' }) ||
            o.day(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.day(n, { width: 'short', context: 'formatting' }) ||
            o.day(n, { width: 'narrow', context: 'formatting' })
          );
      }
    }
    validate(n, a) {
      return a >= 0 && a <= 6;
    }
    set(n, a, o, l) {
      return (n = kn(n, o, l)), n.setHours(0, 0, 0, 0), n;
    }
  }
  class Oo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 90);
      ae(this, 'incompatibleTokens', [
        'y',
        'R',
        'u',
        'q',
        'Q',
        'M',
        'L',
        'I',
        'd',
        'D',
        'E',
        'i',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a, o, l) {
      const s = (c) => {
        const u = Math.floor((c - 1) / 7) * 7;
        return ((c + l.weekStartsOn + 6) % 7) + u;
      };
      switch (a) {
        case 'e':
        case 'ee':
          return Se(Pe(a.length, n), s);
        case 'eo':
          return Se(o.ordinalNumber(n, { unit: 'day' }), s);
        case 'eee':
          return (
            o.day(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.day(n, { width: 'short', context: 'formatting' }) ||
            o.day(n, { width: 'narrow', context: 'formatting' })
          );
        case 'eeeee':
          return o.day(n, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return (
            o.day(n, { width: 'short', context: 'formatting' }) ||
            o.day(n, { width: 'narrow', context: 'formatting' })
          );
        case 'eeee':
        default:
          return (
            o.day(n, { width: 'wide', context: 'formatting' }) ||
            o.day(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.day(n, { width: 'short', context: 'formatting' }) ||
            o.day(n, { width: 'narrow', context: 'formatting' })
          );
      }
    }
    validate(n, a) {
      return a >= 0 && a <= 6;
    }
    set(n, a, o, l) {
      return (n = kn(n, o, l)), n.setHours(0, 0, 0, 0), n;
    }
  }
  class Eo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 90);
      ae(this, 'incompatibleTokens', [
        'y',
        'R',
        'u',
        'q',
        'Q',
        'M',
        'L',
        'I',
        'd',
        'D',
        'E',
        'i',
        'e',
        't',
        'T',
      ]);
    }
    parse(n, a, o, l) {
      const s = (c) => {
        const u = Math.floor((c - 1) / 7) * 7;
        return ((c + l.weekStartsOn + 6) % 7) + u;
      };
      switch (a) {
        case 'c':
        case 'cc':
          return Se(Pe(a.length, n), s);
        case 'co':
          return Se(o.ordinalNumber(n, { unit: 'day' }), s);
        case 'ccc':
          return (
            o.day(n, { width: 'abbreviated', context: 'standalone' }) ||
            o.day(n, { width: 'short', context: 'standalone' }) ||
            o.day(n, { width: 'narrow', context: 'standalone' })
          );
        case 'ccccc':
          return o.day(n, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return (
            o.day(n, { width: 'short', context: 'standalone' }) ||
            o.day(n, { width: 'narrow', context: 'standalone' })
          );
        case 'cccc':
        default:
          return (
            o.day(n, { width: 'wide', context: 'standalone' }) ||
            o.day(n, { width: 'abbreviated', context: 'standalone' }) ||
            o.day(n, { width: 'short', context: 'standalone' }) ||
            o.day(n, { width: 'narrow', context: 'standalone' })
          );
      }
    }
    validate(n, a) {
      return a >= 0 && a <= 6;
    }
    set(n, a, o, l) {
      return (n = kn(n, o, l)), n.setHours(0, 0, 0, 0), n;
    }
  }
  function Ro(t, r) {
    const n = oe(t),
      a = io(n),
      o = r - a;
    return We(n, o);
  }
  class _o extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 90);
      ae(this, 'incompatibleTokens', [
        'y',
        'Y',
        'u',
        'q',
        'Q',
        'M',
        'L',
        'w',
        'd',
        'D',
        'E',
        'e',
        'c',
        't',
        'T',
      ]);
    }
    parse(n, a, o) {
      const l = (s) => (s === 0 ? 7 : s);
      switch (a) {
        case 'i':
        case 'ii':
          return Pe(a.length, n);
        case 'io':
          return o.ordinalNumber(n, { unit: 'day' });
        case 'iii':
          return Se(
            o.day(n, { width: 'abbreviated', context: 'formatting' }) ||
              o.day(n, { width: 'short', context: 'formatting' }) ||
              o.day(n, { width: 'narrow', context: 'formatting' }),
            l
          );
        case 'iiiii':
          return Se(o.day(n, { width: 'narrow', context: 'formatting' }), l);
        case 'iiiiii':
          return Se(
            o.day(n, { width: 'short', context: 'formatting' }) ||
              o.day(n, { width: 'narrow', context: 'formatting' }),
            l
          );
        case 'iiii':
        default:
          return Se(
            o.day(n, { width: 'wide', context: 'formatting' }) ||
              o.day(n, { width: 'abbreviated', context: 'formatting' }) ||
              o.day(n, { width: 'short', context: 'formatting' }) ||
              o.day(n, { width: 'narrow', context: 'formatting' }),
            l
          );
      }
    }
    validate(n, a) {
      return a >= 1 && a <= 7;
    }
    set(n, a, o) {
      return (n = Ro(n, o)), n.setHours(0, 0, 0, 0), n;
    }
  }
  class Yo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 80);
      ae(this, 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 'a':
        case 'aa':
        case 'aaa':
          return (
            o.dayPeriod(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.dayPeriod(n, { width: 'narrow', context: 'formatting' })
          );
        case 'aaaaa':
          return o.dayPeriod(n, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return (
            o.dayPeriod(n, { width: 'wide', context: 'formatting' }) ||
            o.dayPeriod(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.dayPeriod(n, { width: 'narrow', context: 'formatting' })
          );
      }
    }
    set(n, a, o) {
      return n.setHours(wn(o), 0, 0, 0), n;
    }
  }
  class xo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 80);
      ae(this, 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 'b':
        case 'bb':
        case 'bbb':
          return (
            o.dayPeriod(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.dayPeriod(n, { width: 'narrow', context: 'formatting' })
          );
        case 'bbbbb':
          return o.dayPeriod(n, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return (
            o.dayPeriod(n, { width: 'wide', context: 'formatting' }) ||
            o.dayPeriod(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.dayPeriod(n, { width: 'narrow', context: 'formatting' })
          );
      }
    }
    set(n, a, o) {
      return n.setHours(wn(o), 0, 0, 0), n;
    }
  }
  class Vo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 80);
      ae(this, 'incompatibleTokens', ['a', 'b', 't', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 'B':
        case 'BB':
        case 'BBB':
          return (
            o.dayPeriod(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.dayPeriod(n, { width: 'narrow', context: 'formatting' })
          );
        case 'BBBBB':
          return o.dayPeriod(n, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return (
            o.dayPeriod(n, { width: 'wide', context: 'formatting' }) ||
            o.dayPeriod(n, { width: 'abbreviated', context: 'formatting' }) ||
            o.dayPeriod(n, { width: 'narrow', context: 'formatting' })
          );
      }
    }
    set(n, a, o) {
      return n.setHours(wn(o), 0, 0, 0), n;
    }
  }
  class Io extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 70);
      ae(this, 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 'h':
          return Te(Be.hour12h, n);
        case 'ho':
          return o.ordinalNumber(n, { unit: 'hour' });
        default:
          return Pe(a.length, n);
      }
    }
    validate(n, a) {
      return a >= 1 && a <= 12;
    }
    set(n, a, o) {
      const l = n.getHours() >= 12;
      return (
        l && o < 12
          ? n.setHours(o + 12, 0, 0, 0)
          : !l && o === 12
          ? n.setHours(0, 0, 0, 0)
          : n.setHours(o, 0, 0, 0),
        n
      );
    }
  }
  class Fo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 70);
      ae(this, 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 'H':
          return Te(Be.hour23h, n);
        case 'Ho':
          return o.ordinalNumber(n, { unit: 'hour' });
        default:
          return Pe(a.length, n);
      }
    }
    validate(n, a) {
      return a >= 0 && a <= 23;
    }
    set(n, a, o) {
      return n.setHours(o, 0, 0, 0), n;
    }
  }
  class Lo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 70);
      ae(this, 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 'K':
          return Te(Be.hour11h, n);
        case 'Ko':
          return o.ordinalNumber(n, { unit: 'hour' });
        default:
          return Pe(a.length, n);
      }
    }
    validate(n, a) {
      return a >= 0 && a <= 11;
    }
    set(n, a, o) {
      return (
        n.getHours() >= 12 && o < 12
          ? n.setHours(o + 12, 0, 0, 0)
          : n.setHours(o, 0, 0, 0),
        n
      );
    }
  }
  class Ho extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 70);
      ae(this, 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 'k':
          return Te(Be.hour24h, n);
        case 'ko':
          return o.ordinalNumber(n, { unit: 'hour' });
        default:
          return Pe(a.length, n);
      }
    }
    validate(n, a) {
      return a >= 1 && a <= 24;
    }
    set(n, a, o) {
      const l = o <= 24 ? o % 24 : o;
      return n.setHours(l, 0, 0, 0), n;
    }
  }
  class zo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 60);
      ae(this, 'incompatibleTokens', ['t', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 'm':
          return Te(Be.minute, n);
        case 'mo':
          return o.ordinalNumber(n, { unit: 'minute' });
        default:
          return Pe(a.length, n);
      }
    }
    validate(n, a) {
      return a >= 0 && a <= 59;
    }
    set(n, a, o) {
      return n.setMinutes(o, 0, 0), n;
    }
  }
  class Wo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 50);
      ae(this, 'incompatibleTokens', ['t', 'T']);
    }
    parse(n, a, o) {
      switch (a) {
        case 's':
          return Te(Be.second, n);
        case 'so':
          return o.ordinalNumber(n, { unit: 'second' });
        default:
          return Pe(a.length, n);
      }
    }
    validate(n, a) {
      return a >= 0 && a <= 59;
    }
    set(n, a, o) {
      return n.setSeconds(o, 0), n;
    }
  }
  class qo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 30);
      ae(this, 'incompatibleTokens', ['t', 'T']);
    }
    parse(n, a) {
      const o = (l) => Math.trunc(l * Math.pow(10, -a.length + 3));
      return Se(Pe(a.length, n), o);
    }
    set(n, a, o) {
      return n.setMilliseconds(o), n;
    }
  }
  class Uo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 10);
      ae(this, 'incompatibleTokens', ['t', 'T', 'x']);
    }
    parse(n, a) {
      switch (a) {
        case 'X':
          return Je(Xe.basicOptionalMinutes, n);
        case 'XX':
          return Je(Xe.basic, n);
        case 'XXXX':
          return Je(Xe.basicOptionalSeconds, n);
        case 'XXXXX':
          return Je(Xe.extendedOptionalSeconds, n);
        case 'XXX':
        default:
          return Je(Xe.extended, n);
      }
    }
    set(n, a, o) {
      return a.timestampIsSet ? n : ge(n, n.getTime() - Ut(n) - o);
    }
  }
  class jo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 10);
      ae(this, 'incompatibleTokens', ['t', 'T', 'X']);
    }
    parse(n, a) {
      switch (a) {
        case 'x':
          return Je(Xe.basicOptionalMinutes, n);
        case 'xx':
          return Je(Xe.basic, n);
        case 'xxxx':
          return Je(Xe.basicOptionalSeconds, n);
        case 'xxxxx':
          return Je(Xe.extendedOptionalSeconds, n);
        case 'xxx':
        default:
          return Je(Xe.extended, n);
      }
    }
    set(n, a, o) {
      return a.timestampIsSet ? n : ge(n, n.getTime() - Ut(n) - o);
    }
  }
  class Qo extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 40);
      ae(this, 'incompatibleTokens', '*');
    }
    parse(n) {
      return ba(n);
    }
    set(n, a, o) {
      return [ge(n, o * 1e3), { timestampIsSet: !0 }];
    }
  }
  class Go extends ye {
    constructor() {
      super(...arguments);
      ae(this, 'priority', 20);
      ae(this, 'incompatibleTokens', '*');
    }
    parse(n) {
      return ba(n);
    }
    set(n, a, o) {
      return [ge(n, o), { timestampIsSet: !0 }];
    }
  }
  const Ko = {
      G: new ho(),
      y: new po(),
      Y: new go(),
      R: new yo(),
      u: new wo(),
      Q: new ko(),
      q: new bo(),
      M: new vo(),
      L: new Do(),
      w: new To(),
      I: new Co(),
      d: new $o(),
      D: new Ao(),
      E: new No(),
      e: new Oo(),
      c: new Eo(),
      i: new _o(),
      a: new Yo(),
      b: new xo(),
      B: new Vo(),
      h: new Io(),
      H: new Fo(),
      K: new Lo(),
      k: new Ho(),
      m: new zo(),
      s: new Wo(),
      S: new qo(),
      X: new Uo(),
      x: new jo(),
      t: new Qo(),
      T: new Go(),
    },
    Xo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Jo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Zo = /^'([^]*?)'?$/,
    el = /''/g,
    tl = /\S/,
    nl = /[a-zA-Z]/;
  function bn(t, r, n, a) {
    var x, I, p, $, P, z, K, Z;
    const o = so(),
      l = (a == null ? void 0 : a.locale) ?? o.locale ?? da,
      s =
        (a == null ? void 0 : a.firstWeekContainsDate) ??
        ((I =
          (x = a == null ? void 0 : a.locale) == null ? void 0 : x.options) ==
        null
          ? void 0
          : I.firstWeekContainsDate) ??
        o.firstWeekContainsDate ??
        (($ = (p = o.locale) == null ? void 0 : p.options) == null
          ? void 0
          : $.firstWeekContainsDate) ??
        1,
      c =
        (a == null ? void 0 : a.weekStartsOn) ??
        ((z =
          (P = a == null ? void 0 : a.locale) == null ? void 0 : P.options) ==
        null
          ? void 0
          : z.weekStartsOn) ??
        o.weekStartsOn ??
        ((Z = (K = o.locale) == null ? void 0 : K.options) == null
          ? void 0
          : Z.weekStartsOn) ??
        0;
    if (r === '') return t === '' ? oe(n) : ge(n, NaN);
    const u = { firstWeekContainsDate: s, weekStartsOn: c, locale: l },
      B = [new mo()],
      m = r
        .match(Jo)
        .map((O) => {
          const D = O[0];
          if (D in gn) {
            const W = gn[D];
            return W(O, l.formatLong);
          }
          return O;
        })
        .join('')
        .match(Xo),
      S = [];
    for (let O of m) {
      !(a != null && a.useAdditionalWeekYearTokens) && wa(O) && yn(O, r, t),
        !(a != null && a.useAdditionalDayOfYearTokens) && ya(O) && yn(O, r, t);
      const D = O[0],
        W = Ko[D];
      if (W) {
        const { incompatibleTokens: E } = W;
        if (Array.isArray(E)) {
          const re = S.find((le) => E.includes(le.token) || le.token === D);
          if (re)
            throw new RangeError(
              `The format string mustn't contain \`${re.fullToken}\` and \`${O}\` at the same time`
            );
        } else if (W.incompatibleTokens === '*' && S.length > 0)
          throw new RangeError(
            `The format string mustn't contain \`${O}\` and any other token at the same time`
          );
        S.push({ token: D, fullToken: O });
        const Q = W.run(t, O, l.match, u);
        if (!Q) return ge(n, NaN);
        B.push(Q.setter), (t = Q.rest);
      } else {
        if (D.match(nl))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' +
              D +
              '`'
          );
        if (
          (O === "''" ? (O = "'") : D === "'" && (O = al(O)),
          t.indexOf(O) === 0)
        )
          t = t.slice(O.length);
        else return ge(n, NaN);
      }
    }
    if (t.length > 0 && tl.test(t)) return ge(n, NaN);
    const g = B.map((O) => O.priority)
      .sort((O, D) => D - O)
      .filter((O, D, W) => W.indexOf(O) === D)
      .map((O) =>
        B.filter((D) => D.priority === O).sort(
          (D, W) => W.subPriority - D.subPriority
        )
      )
      .map((O) => O[0]);
    let C = oe(n);
    if (isNaN(C.getTime())) return ge(n, NaN);
    const Y = {};
    for (const O of g) {
      if (!O.validate(C, u)) return ge(n, NaN);
      const D = O.set(C, Y, u);
      Array.isArray(D) ? ((C = D[0]), Object.assign(Y, D[1])) : (C = D);
    }
    return ge(n, C);
  }
  function al(t) {
    return t.match(Zo)[1].replace(el, "'");
  }
  function Ma(t, r) {
    const n = pt(t),
      a = pt(r);
    return +n == +a;
  }
  function rl(t, r) {
    return We(t, -r);
  }
  function Ta(t, r) {
    const n = oe(t),
      a = n.getFullYear(),
      o = n.getDate(),
      l = ge(t, 0);
    l.setFullYear(a, r, 15), l.setHours(0, 0, 0, 0);
    const s = lo(l);
    return n.setMonth(r, Math.min(o, s)), n;
  }
  function be(t, r) {
    let n = oe(t);
    return isNaN(+n)
      ? ge(t, NaN)
      : (r.year != null && n.setFullYear(r.year),
        r.month != null && (n = Ta(n, r.month)),
        r.date != null && n.setDate(r.date),
        r.hours != null && n.setHours(r.hours),
        r.minutes != null && n.setMinutes(r.minutes),
        r.seconds != null && n.setSeconds(r.seconds),
        r.milliseconds != null && n.setMilliseconds(r.milliseconds),
        n);
  }
  function ol(t, r) {
    const n = oe(t);
    return n.setHours(r), n;
  }
  function Pa(t, r) {
    const n = oe(t);
    return n.setMilliseconds(r), n;
  }
  function ll(t, r) {
    const n = oe(t);
    return n.setMinutes(r), n;
  }
  function Ca(t, r) {
    const n = oe(t);
    return n.setSeconds(r), n;
  }
  function Ze(t, r) {
    const n = oe(t);
    return isNaN(+n) ? ge(t, NaN) : (n.setFullYear(r), n);
  }
  function Bt(t, r) {
    return qe(t, -r);
  }
  function sl(t, r) {
    const {
        years: n = 0,
        months: a = 0,
        weeks: o = 0,
        days: l = 0,
        hours: s = 0,
        minutes: c = 0,
        seconds: u = 0,
      } = r,
      B = Bt(t, a + n * 12),
      m = rl(B, l + o * 7),
      S = c + s * 60,
      C = (u + S * 60) * 1e3;
    return ge(t, m.getTime() - C);
  }
  function Ba(t, r) {
    return dn(t, -r);
  }
  const Fe = (t, r) =>
      r ? new Date(t.toLocaleString('en-US', { timeZone: r })) : new Date(t),
    vn = (t, r, n) => {
      const a = Dn(t, r, n);
      return a || j();
    },
    il = (t, r, n) => {
      const a = r.dateInTz ? Fe(new Date(t), r.dateInTz) : j(t);
      return n ? Ve(a, !0) : a;
    },
    Dn = (t, r, n) => {
      if (!t) return null;
      const a = n ? Ve(j(t), !0) : j(t);
      return r ? (r.exactMatch ? il(t, r, n) : Fe(a, r.timezone)) : a;
    },
    ul = (t) => {
      if (!t) return 0;
      const r = new Date(),
        n = new Date(r.toLocaleString('en-US', { timeZone: 'UTC' })),
        a = new Date(r.toLocaleString('en-US', { timeZone: t })),
        o = a.getTimezoneOffset() / 60;
      return (+n - +a) / (1e3 * 60 * 60) - o;
    };
  var je = ((t) => ((t.month = 'month'), (t.year = 'year'), t))(je || {}),
    yt = ((t) => ((t.top = 'top'), (t.bottom = 'bottom'), t))(yt || {}),
    wt = ((t) => (
      (t.header = 'header'),
      (t.calendar = 'calendar'),
      (t.timePicker = 'timePicker'),
      t
    ))(wt || {}),
    Re = ((t) => (
      (t.month = 'month'),
      (t.year = 'year'),
      (t.calendar = 'calendar'),
      (t.time = 'time'),
      (t.minutes = 'minutes'),
      (t.hours = 'hours'),
      (t.seconds = 'seconds'),
      t
    ))(Re || {});
  const cl = ['timestamp', 'date', 'iso'];
  var Ye = ((t) => (
      (t.up = 'up'),
      (t.down = 'down'),
      (t.left = 'left'),
      (t.right = 'right'),
      t
    ))(Ye || {}),
    ve = ((t) => (
      (t.arrowUp = 'ArrowUp'),
      (t.arrowDown = 'ArrowDown'),
      (t.arrowLeft = 'ArrowLeft'),
      (t.arrowRight = 'ArrowRight'),
      (t.enter = 'Enter'),
      (t.space = ' '),
      (t.esc = 'Escape'),
      (t.tab = 'Tab'),
      (t.home = 'Home'),
      (t.end = 'End'),
      (t.pageUp = 'PageUp'),
      (t.pageDown = 'PageDown'),
      t
    ))(ve || {});
  function Sa(t) {
    return (r) =>
      new Intl.DateTimeFormat(t, { weekday: 'short', timeZone: 'UTC' })
        .format(new Date(`2017-01-0${r}T00:00:00+00:00`))
        .slice(0, 2);
  }
  function dl(t) {
    return (r) =>
      Ke(Fe(new Date(`2017-01-0${r}T00:00:00+00:00`), 'UTC'), 'EEEEEE', {
        locale: t,
      });
  }
  const fl = (t, r, n) => {
      const a = [1, 2, 3, 4, 5, 6, 7];
      let o;
      if (t !== null)
        try {
          o = a.map(dl(t));
        } catch {
          o = a.map(Sa(r));
        }
      else o = a.map(Sa(r));
      const l = o.slice(0, n),
        s = o.slice(n + 1, o.length);
      return [o[n]].concat(...s).concat(...l);
    },
    Mn = (t, r, n) => {
      const a = [];
      for (let o = +t[0]; o <= +t[1]; o++)
        a.push({ value: +o, text: Ra(o, r) });
      return n ? a.reverse() : a;
    },
    $a = (t, r, n) => {
      const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((l) => {
        const s = l < 10 ? `0${l}` : l;
        return new Date(`2017-${s}-01T00:00:00+00:00`);
      });
      if (t !== null)
        try {
          const l = n === 'long' ? 'LLLL' : 'LLL';
          return a.map((s, c) => {
            const u = Ke(Fe(s, 'UTC'), l, { locale: t });
            return {
              text: u.charAt(0).toUpperCase() + u.substring(1),
              value: c,
            };
          });
        } catch {}
      const o = new Intl.DateTimeFormat(r, { month: n, timeZone: 'UTC' });
      return a.map((l, s) => {
        const c = o.format(l);
        return { text: c.charAt(0).toUpperCase() + c.substring(1), value: s };
      });
    },
    ml = (t) =>
      [
        12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11,
      ][t],
    Oe = (t) => {
      const r = e.unref(t);
      return r != null && r.$el ? (r == null ? void 0 : r.$el) : r;
    },
    hl = (t) => ({ type: 'dot', ...(t ?? {}) }),
    Aa = (t) => (Array.isArray(t) ? !!t[0] && !!t[1] : !1),
    Tn = {
      prop: (t) => `"${t}" prop must be enabled!`,
      dateArr: (t) =>
        `You need to use array as "model-value" binding in order to support "${t}"`,
    },
    Ne = (t) => t,
    Na = (t) => (t === 0 ? t : !t || isNaN(+t) ? null : +t),
    Oa = (t) => t === null,
    Ea = (t) => {
      if (t)
        return [
          ...t.querySelectorAll('input, button, select, textarea, a[href]'),
        ][0];
    },
    pl = (t) => {
      const r = [],
        n = (a) => a.filter((o) => o);
      for (let a = 0; a < t.length; a += 3) {
        const o = [t[a], t[a + 1], t[a + 2]];
        r.push(n(o));
      }
      return r;
    },
    xt = (t, r, n) => {
      const a = n != null,
        o = r != null;
      if (!a && !o) return !1;
      const l = +n,
        s = +r;
      return a && o ? +t > l || +t < s : a ? +t > l : o ? +t < s : !1;
    },
    St = (t, r) =>
      pl(t).map((n) =>
        n.map((a) => {
          const { active: o, disabled: l, isBetween: s, highlighted: c } = r(a);
          return {
            ...a,
            active: o,
            disabled: l,
            className: {
              dp__overlay_cell_active: o,
              dp__overlay_cell: !o,
              dp__overlay_cell_disabled: l,
              dp__overlay_cell_pad: !0,
              dp__overlay_cell_active_disabled: l && o,
              dp__cell_in_between: s,
              'dp--highlighted': c,
            },
          };
        })
      ),
    lt = (t, r, n = !1) => {
      t &&
        r.allowStopPropagation &&
        (n && t.stopImmediatePropagation(), t.stopPropagation());
    },
    gl = () =>
      [
        'a[href]',
        'area[href]',
        "input:not([disabled]):not([type='hidden'])",
        'select:not([disabled])',
        'textarea:not([disabled])',
        'button:not([disabled])',
        "[tabindex]:not([tabindex='-1'])",
        '[data-datepicker-instance]',
      ].join(', ');
  function yl(t, r) {
    let n = [...document.querySelectorAll(gl())];
    n = n.filter(
      (o) => !t.contains(o) || o.hasAttribute('data-datepicker-instance')
    );
    const a = n.indexOf(t);
    if (a >= 0 && (r ? a - 1 >= 0 : a + 1 <= n.length))
      return n[a + (r ? -1 : 1)];
  }
  const Pn = (t, r) =>
      t == null ? void 0 : t.querySelector(`[data-dp-element="${r}"]`),
    Ra = (t, r) =>
      new Intl.NumberFormat(r, { useGrouping: !1, style: 'decimal' }).format(t),
    Cn = (t) => Ke(t, 'dd-MM-yyyy'),
    Bn = (t) => Array.isArray(t),
    Qt = (t, r) => r.get(Cn(t)),
    wl = (t, r) =>
      t ? (r ? (r instanceof Map ? !!Qt(t, r) : r(j(t))) : !1) : !0,
    xe = (t, r, n = !1, a) => {
      if (t.key === ve.enter || t.key === ve.space)
        return n && t.preventDefault(), r();
      if (a) return a(t);
    },
    _a = () =>
      [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod',
      ].some((t) => navigator.userAgent.includes(t)) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document),
    Ya = (t, r, n, a, o, l) => {
      const s = bn(t, r.slice(0, t.length), new Date(), { locale: l });
      return Ot(s) && oa(s)
        ? a || o
          ? s
          : be(s, {
              hours: +n.hours,
              minutes: +(n == null ? void 0 : n.minutes),
              seconds: +(n == null ? void 0 : n.seconds),
              milliseconds: 0,
            })
        : null;
    },
    kl = (t, r, n, a, o, l) => {
      const s = Array.isArray(n) ? n[0] : n;
      if (typeof r == 'string') return Ya(t, r, s, a, o, l);
      if (Array.isArray(r)) {
        let c = null;
        for (const u of r) if (((c = Ya(t, u, s, a, o, l)), c)) break;
        return c;
      }
      return typeof r == 'function' ? r(t) : null;
    },
    j = (t) => (t ? new Date(t) : new Date()),
    bl = (t, r, n) => {
      if (r) {
        const o = (t.getMonth() + 1).toString().padStart(2, '0'),
          l = t.getDate().toString().padStart(2, '0'),
          s = t.getHours().toString().padStart(2, '0'),
          c = t.getMinutes().toString().padStart(2, '0'),
          u = n ? t.getSeconds().toString().padStart(2, '0') : '00';
        return `${t.getFullYear()}-${o}-${l}T${s}:${c}:${u}.000Z`;
      }
      const a = Date.UTC(
        t.getUTCFullYear(),
        t.getUTCMonth(),
        t.getUTCDate(),
        t.getUTCHours(),
        t.getUTCMinutes(),
        t.getUTCSeconds()
      );
      return new Date(a).toISOString();
    },
    Ve = (t, r) => {
      const n = j(JSON.parse(JSON.stringify(t))),
        a = be(n, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
      return r ? pr(a) : a;
    },
    st = (t, r, n, a) => {
      let o = t ? j(t) : j();
      return (
        (r || r === 0) && (o = ol(o, +r)),
        (n || n === 0) && (o = ll(o, +n)),
        (a || a === 0) && (o = Ca(o, +a)),
        Pa(o, 0)
      );
    },
    Ce = (t, r) => (!t || !r ? !1 : Yt(Ve(t), Ve(r))),
    pe = (t, r) => (!t || !r ? !1 : Ct(Ve(t), Ve(r))),
    $e = (t, r) => (!t || !r ? !1 : Pt(Ve(t), Ve(r))),
    Gt = (t, r, n) =>
      t != null && t[0] && t != null && t[1]
        ? $e(n, t[0]) && Ce(n, t[1])
        : t != null && t[0] && r
        ? ($e(n, t[0]) && Ce(n, r)) || (Ce(n, t[0]) && $e(n, r))
        : !1,
    Qe = (t) => {
      const r = be(new Date(t), { date: 1 });
      return Ve(r);
    },
    Sn = (t, r, n) =>
      r && (n || n === 0)
        ? Object.fromEntries(
            ['hours', 'minutes', 'seconds'].map((a) =>
              a === r ? [a, n] : [a, isNaN(+t[a]) ? void 0 : +t[a]]
            )
          )
        : {
            hours: isNaN(+t.hours) ? void 0 : +t.hours,
            minutes: isNaN(+t.minutes) ? void 0 : +t.minutes,
            seconds: isNaN(+t.seconds) ? void 0 : +t.seconds,
          },
    kt = (t) => ({ hours: tt(t), minutes: ot(t), seconds: Tt(t) }),
    xa = (t, r) => {
      if (r) {
        const n = ce(j(r));
        if (n > t) return 12;
        if (n === t) return he(j(r));
      }
    },
    Va = (t, r) => {
      if (r) {
        const n = ce(j(r));
        return n < t ? -1 : n === t ? he(j(r)) : void 0;
      }
    },
    $t = (t) => {
      if (t) return ce(j(t));
    },
    Ia = (t, r) => {
      const n = $e(t, r) ? r : t,
        a = $e(r, t) ? r : t;
      return sa({ start: n, end: a });
    },
    vl = (t) => {
      const r = qe(t, 1);
      return { month: he(r), year: ce(r) };
    },
    nt = (t, r) => {
      const n = Ue(t, { weekStartsOn: +r }),
        a = ua(t, { weekStartsOn: +r });
      return [n, a];
    },
    Fa = (t, r) => {
      const n = { hours: tt(j()), minutes: ot(j()), seconds: r ? Tt(j()) : 0 };
      return Object.assign(n, t);
    },
    it = (t, r, n) => [
      be(j(t), { date: 1 }),
      be(j(), { month: r, year: n, date: 1 }),
    ],
    at = (t, r, n) => {
      let a = t ? j(t) : j();
      return (r || r === 0) && (a = Ta(a, r)), n && (a = Ze(a, n)), a;
    },
    La = (t, r, n, a, o) => {
      if (!a || (o && !r) || (!o && !n)) return !1;
      const l = o ? qe(t, 1) : Bt(t, 1),
        s = [he(l), ce(l)];
      return o ? !Ml(...s, r) : !Dl(...s, n);
    },
    Dl = (t, r, n) => Ce(...it(n, t, r)) || pe(...it(n, t, r)),
    Ml = (t, r, n) => $e(...it(n, t, r)) || pe(...it(n, t, r)),
    Ha = (t, r, n, a, o, l, s) => {
      if (typeof r == 'function' && !s) return r(t);
      const c = n ? { locale: n } : void 0;
      return Array.isArray(t)
        ? `${Ke(t[0], l, c)}${o && !t[1] ? '' : a}${t[1] ? Ke(t[1], l, c) : ''}`
        : Ke(t, l, c);
    },
    At = (t) => {
      if (t) return null;
      throw new Error(Tn.prop('partial-range'));
    },
    Kt = (t, r) => {
      if (r) return t();
      throw new Error(Tn.prop('range'));
    },
    $n = (t) =>
      Array.isArray(t) ? Ot(t[0]) && (t[1] ? Ot(t[1]) : !0) : t ? Ot(t) : !1,
    Tl = (t, r) =>
      be(r ?? j(), {
        hours: +t.hours || 0,
        minutes: +t.minutes || 0,
        seconds: +t.seconds || 0,
      }),
    An = (t, r, n, a) => {
      if (!t) return !0;
      if (a) {
        const o = n === 'max' ? Yt(t, r) : Pt(t, r),
          l = { seconds: 0, milliseconds: 0 };
        return o || Ct(be(t, l), be(r, l));
      }
      return n === 'max'
        ? t.getTime() <= r.getTime()
        : t.getTime() >= r.getTime();
    },
    Nn = (t, r, n) => (t ? Tl(t, r) : j(n ?? r)),
    za = (t, r, n, a, o) => {
      if (Array.isArray(a)) {
        const s = Nn(t, a[0], r),
          c = Nn(t, a[1], r);
        return An(a[0], s, n, !!r) && An(a[1], c, n, !!r) && o;
      }
      const l = Nn(t, a, r);
      return An(a, l, n, !!r) && o;
    },
    On = (t) => be(j(), kt(t)),
    Pl = (t, r) =>
      t instanceof Map
        ? Array.from(t.values())
            .filter((n) => ce(j(n)) === r)
            .map((n) => he(n))
        : [],
    Wa = (t, r, n) =>
      typeof t == 'function'
        ? t({ month: r, year: n })
        : !!t.months.find((a) => a.month === r && a.year === n),
    En = (t, r) => (typeof t == 'function' ? t(r) : t.years.includes(r)),
    qa = (t) => Ke(t, 'yyyy-MM-dd'),
    Vt = e.reactive({ menuFocused: !1, shiftKeyInMenu: !1 }),
    Ua = () => {
      const t = (a) => {
          Vt.menuFocused = a;
        },
        r = (a) => {
          Vt.shiftKeyInMenu !== a && (Vt.shiftKeyInMenu = a);
        };
      return {
        control: e.computed(() => ({
          shiftKeyInMenu: Vt.shiftKeyInMenu,
          menuFocused: Vt.menuFocused,
        })),
        setMenuFocused: t,
        setShiftKey: r,
      };
    },
    De = e.reactive({
      monthYear: [],
      calendar: [],
      time: [],
      actionRow: [],
      selectionGrid: [],
      timePicker: { 0: [], 1: [] },
      monthPicker: [],
    }),
    Rn = e.ref(null),
    Xt = e.ref(!1),
    _n = e.ref(!1),
    Yn = e.ref(!1),
    xn = e.ref(!1),
    _e = e.ref(0),
    Ae = e.ref(0),
    ut = () => {
      const t = e.computed(() =>
          Xt.value
            ? [...De.selectionGrid, De.actionRow].filter((p) => p.length)
            : _n.value
            ? [
                ...De.timePicker[0],
                ...De.timePicker[1],
                xn.value ? [] : [Rn.value],
                De.actionRow,
              ].filter((p) => p.length)
            : Yn.value
            ? [...De.monthPicker, De.actionRow]
            : [De.monthYear, ...De.calendar, De.time, De.actionRow].filter(
                (p) => p.length
              )
        ),
        r = (p) => {
          _e.value = p ? _e.value + 1 : _e.value - 1;
          let $ = null;
          t.value[Ae.value] && ($ = t.value[Ae.value][_e.value]),
            !$ && t.value[Ae.value + (p ? 1 : -1)]
              ? ((Ae.value = Ae.value + (p ? 1 : -1)),
                (_e.value = p ? 0 : t.value[Ae.value].length - 1))
              : $ || (_e.value = p ? _e.value - 1 : _e.value + 1);
        },
        n = (p) => {
          if ((Ae.value === 0 && !p) || (Ae.value === t.value.length && p))
            return;
          (Ae.value = p ? Ae.value + 1 : Ae.value - 1),
            t.value[Ae.value]
              ? t.value[Ae.value] &&
                !t.value[Ae.value][_e.value] &&
                _e.value !== 0 &&
                (_e.value = t.value[Ae.value].length - 1)
              : (Ae.value = p ? Ae.value - 1 : Ae.value + 1);
        },
        a = (p) => {
          let $ = null;
          t.value[Ae.value] && ($ = t.value[Ae.value][_e.value]),
            $
              ? $.focus({ preventScroll: !Xt.value })
              : (_e.value = p ? _e.value - 1 : _e.value + 1);
        },
        o = () => {
          r(!0), a(!0);
        },
        l = () => {
          r(!1), a(!1);
        },
        s = () => {
          n(!1), a(!0);
        },
        c = () => {
          n(!0), a(!0);
        },
        u = (p, $) => {
          De[$] = p;
        },
        B = (p, $) => {
          De[$] = p;
        },
        m = () => {
          (_e.value = 0), (Ae.value = 0);
        };
      return {
        buildMatrix: u,
        buildMultiLevelMatrix: B,
        setTimePickerBackRef: (p) => {
          Rn.value = p;
        },
        setSelectionGrid: (p) => {
          (Xt.value = p), m(), p || (De.selectionGrid = []);
        },
        setTimePicker: (p, $ = !1) => {
          (_n.value = p),
            (xn.value = $),
            m(),
            p || ((De.timePicker[0] = []), (De.timePicker[1] = []));
        },
        setTimePickerElements: (p, $ = 0) => {
          De.timePicker[$] = p;
        },
        arrowRight: o,
        arrowLeft: l,
        arrowUp: s,
        arrowDown: c,
        clearArrowNav: () => {
          (De.monthYear = []),
            (De.calendar = []),
            (De.time = []),
            (De.actionRow = []),
            (De.selectionGrid = []),
            (De.timePicker[0] = []),
            (De.timePicker[1] = []),
            (Xt.value = !1),
            (_n.value = !1),
            (xn.value = !1),
            (Yn.value = !1),
            m(),
            (Rn.value = null);
        },
        setMonthPicker: (p) => {
          (Yn.value = p), m();
        },
        refSets: De,
      };
    },
    ja = (t) => ({
      menuAppearTop: 'dp-menu-appear-top',
      menuAppearBottom: 'dp-menu-appear-bottom',
      open: 'dp-slide-down',
      close: 'dp-slide-up',
      next: 'calendar-next',
      previous: 'calendar-prev',
      vNext: 'dp-slide-up',
      vPrevious: 'dp-slide-down',
      ...(t ?? {}),
    }),
    Cl = (t) => ({
      toggleOverlay: 'Toggle overlay',
      menu: 'Datepicker menu',
      input: 'Datepicker input',
      openTimePicker: 'Open time picker',
      closeTimePicker: 'Close time Picker',
      incrementValue: (r) => `Increment ${r}`,
      decrementValue: (r) => `Decrement ${r}`,
      openTpOverlay: (r) => `Open ${r} overlay`,
      amPmButton: 'Switch AM/PM mode',
      openYearsOverlay: 'Open years overlay',
      openMonthsOverlay: 'Open months overlay',
      nextMonth: 'Next month',
      prevMonth: 'Previous month',
      nextYear: 'Next year',
      prevYear: 'Previous year',
      day: void 0,
      weekDay: void 0,
      clearInput: 'Clear value',
      calendarIcon: 'Calendar icon',
      timePicker: 'Time picker',
      monthPicker: (r) => `Month picker${r ? ' overlay' : ''}`,
      yearPicker: (r) => `Year picker${r ? ' overlay' : ''}`,
      timeOverlay: (r) => `${r} overlay`,
      ...(t ?? {}),
    }),
    Qa = (t) =>
      t ? (typeof t == 'boolean' ? (t ? 2 : 0) : +t >= 2 ? +t : 2) : 0,
    Bl = (t) => {
      const r = typeof t == 'object' && t,
        n = { static: !0, solo: !1 };
      if (!t) return { ...n, count: Qa(!1) };
      const a = r ? t : {},
        o = r ? a.count ?? !0 : t,
        l = Qa(o);
      return Object.assign(n, a, { count: l });
    },
    Sl = (t, r, n) => t || (typeof n == 'string' ? n : r),
    $l = (t) => (typeof t == 'boolean' ? (t ? ja({}) : !1) : ja(t)),
    Al = (t) => {
      const r = {
        enterSubmit: !0,
        tabSubmit: !0,
        openMenu: 'open',
        selectOnFocus: !1,
        rangeSeparator: ' - ',
      };
      return typeof t == 'object'
        ? { ...r, ...(t ?? {}), enabled: !0 }
        : { ...r, enabled: t };
    },
    Nl = (t) => ({
      months: [],
      years: [],
      times: { hours: [], minutes: [], seconds: [] },
      ...(t ?? {}),
    }),
    Ol = (t) => ({
      showSelect: !0,
      showCancel: !0,
      showNow: !1,
      showPreview: !0,
      ...(t ?? {}),
    }),
    El = (t) => {
      const r = { input: !1 };
      return typeof t == 'object'
        ? { ...r, ...(t ?? {}), enabled: !0 }
        : { enabled: t, ...r };
    },
    Rl = (t) => ({
      ...{
        allowStopPropagation: !0,
        closeOnScroll: !1,
        modeHeight: 255,
        allowPreventDefault: !1,
        closeOnClearValue: !0,
        closeOnAutoApply: !0,
        noSwipe: !1,
        keepActionRow: !1,
        onClickOutside: void 0,
        tabOutClosesMenu: !0,
        arrowLeft: void 0,
        keepViewOnOffsetClick: !1,
        timeArrowHoldThreshold: 0,
        shadowDom: !1,
      },
      ...(t ?? {}),
    }),
    _l = (t) => {
      const r = {
        dates: Array.isArray(t) ? t.map((n) => j(n)) : [],
        years: [],
        months: [],
        quarters: [],
        weeks: [],
        weekdays: [],
        options: { highlightDisabled: !1 },
      };
      return typeof t == 'function' ? t : { ...r, ...(t ?? {}) };
    },
    Yl = (t) =>
      typeof t == 'object'
        ? {
            type: (t == null ? void 0 : t.type) ?? 'local',
            hideOnOffsetDates: (t == null ? void 0 : t.hideOnOffsetDates) ?? !1,
          }
        : { type: t, hideOnOffsetDates: !1 },
    xl = (t) => {
      const r = {
        noDisabledRange: !1,
        showLastInRange: !0,
        minMaxRawRange: !1,
        partialRange: !0,
        disableTimeRangeValidation: !1,
        maxRange: void 0,
        minRange: void 0,
        autoRange: void 0,
        fixedStart: !1,
        fixedEnd: !1,
      };
      return typeof t == 'object'
        ? { enabled: !0, ...r, ...t }
        : { enabled: t, ...r };
    },
    Vl = (t) =>
      t
        ? typeof t == 'string'
          ? {
              timezone: t,
              exactMatch: !1,
              dateInTz: void 0,
              emitTimezone: void 0,
              convertModel: !0,
            }
          : {
              timezone: t.timezone,
              exactMatch: t.exactMatch ?? !1,
              dateInTz: t.dateInTz ?? void 0,
              emitTimezone: t.emitTimezone ?? void 0,
              convertModel: t.convertModel ?? !0,
            }
        : { timezone: void 0, exactMatch: !1, emitTimezone: void 0 },
    Vn = (t, r, n) =>
      new Map(
        t.map((a) => {
          const o = vn(a, r, n);
          return [Cn(o), o];
        })
      ),
    Il = (t, r) =>
      t.length
        ? new Map(
            t.map((n) => {
              const a = vn(n.date, r);
              return [Cn(a), n];
            })
          )
        : null,
    Fl = (t) => {
      var r;
      return {
        minDate: Dn(t.minDate, t.timezone, t.isSpecific),
        maxDate: Dn(t.maxDate, t.timezone, t.isSpecific),
        disabledDates: Bn(t.disabledDates)
          ? Vn(t.disabledDates, t.timezone, t.isSpecific)
          : t.disabledDates,
        allowedDates: Bn(t.allowedDates)
          ? Vn(t.allowedDates, t.timezone, t.isSpecific)
          : null,
        highlight:
          typeof t.highlight == 'object' &&
          Bn((r = t.highlight) == null ? void 0 : r.dates)
            ? Vn(t.highlight.dates, t.timezone)
            : t.highlight,
        markers: Il(t.markers, t.timezone),
      };
    },
    Ll = (t) =>
      typeof t == 'boolean'
        ? { enabled: t, dragSelect: !0, limit: null }
        : {
            enabled: !!t,
            limit: t.limit ? +t.limit : null,
            dragSelect: t.dragSelect ?? !0,
          },
    Hl = (t) => ({
      ...Object.fromEntries(
        Object.keys(t).map((n) => {
          const a = n,
            o = t[a],
            l =
              typeof t[a] == 'string'
                ? { [o]: !0 }
                : Object.fromEntries(o.map((s) => [s, !0]));
          return [n, l];
        })
      ),
    }),
    Me = (t) => {
      const r = () => {
          const Z = t.enableSeconds ? ':ss' : '',
            O = t.enableMinutes ? ':mm' : '';
          return t.is24 ? `HH${O}${Z}` : `hh${O}${Z} aa`;
        },
        n = () => {
          var Z;
          return t.format
            ? t.format
            : t.monthPicker
            ? 'MM/yyyy'
            : t.timePicker
            ? r()
            : t.weekPicker
            ? `${
                ((Z = I.value) == null ? void 0 : Z.type) === 'iso'
                  ? 'RR'
                  : 'ww'
              }-yyyy`
            : t.yearPicker
            ? 'yyyy'
            : t.quarterPicker
            ? 'QQQ/yyyy'
            : t.enableTimePicker
            ? `MM/dd/yyyy, ${r()}`
            : 'MM/dd/yyyy';
        },
        a = (Z) => Fa(Z, t.enableSeconds),
        o = () =>
          z.value.enabled
            ? t.startTime && Array.isArray(t.startTime)
              ? [a(t.startTime[0]), a(t.startTime[1])]
              : null
            : t.startTime && !Array.isArray(t.startTime)
            ? a(t.startTime)
            : null,
        l = e.computed(() => Bl(t.multiCalendars)),
        s = e.computed(() => o()),
        c = e.computed(() => Cl(t.ariaLabels)),
        u = e.computed(() => Nl(t.filters)),
        B = e.computed(() => $l(t.transitions)),
        m = e.computed(() => Ol(t.actionRow)),
        S = e.computed(() => Sl(t.previewFormat, t.format, n())),
        g = e.computed(() => Al(t.textInput)),
        C = e.computed(() => El(t.inline)),
        Y = e.computed(() => Rl(t.config)),
        x = e.computed(() => _l(t.highlight)),
        I = e.computed(() => Yl(t.weekNumbers)),
        p = e.computed(() => Vl(t.timezone)),
        $ = e.computed(() => Ll(t.multiDates)),
        P = e.computed(() =>
          Fl({
            minDate: t.minDate,
            maxDate: t.maxDate,
            disabledDates: t.disabledDates,
            allowedDates: t.allowedDates,
            highlight: x.value,
            markers: t.markers,
            timezone: p.value,
            isSpecific: t.monthPicker || t.yearPicker || t.quarterPicker,
          })
        ),
        z = e.computed(() => xl(t.range)),
        K = e.computed(() => Hl(t.ui));
      return {
        defaultedTransitions: B,
        defaultedMultiCalendars: l,
        defaultedStartTime: s,
        defaultedAriaLabels: c,
        defaultedFilters: u,
        defaultedActionRow: m,
        defaultedPreviewFormat: S,
        defaultedTextInput: g,
        defaultedInline: C,
        defaultedConfig: Y,
        defaultedHighlight: x,
        defaultedWeekNumbers: I,
        defaultedRange: z,
        propDates: P,
        defaultedTz: p,
        defaultedMultiDates: $,
        defaultedUI: K,
        getDefaultPattern: n,
        getDefaultStartTime: o,
      };
    },
    zl = (t, r, n) => {
      const a = e.ref(),
        {
          defaultedTextInput: o,
          defaultedRange: l,
          defaultedTz: s,
          defaultedMultiDates: c,
          getDefaultPattern: u,
        } = Me(r),
        B = e.ref(''),
        m = e.toRef(r, 'format'),
        S = e.toRef(r, 'formatLocale');
      e.watch(
        a,
        () => {
          typeof r.onInternalModelChange == 'function' &&
            t('internal-model-change', a.value, v(!0));
        },
        { deep: !0 }
      ),
        e.watch(l, (d, ee) => {
          d.enabled !== ee.enabled && (a.value = null);
        }),
        e.watch(m, () => {
          G();
        });
      const g = (d) =>
          s.value.timezone && s.value.convertModel
            ? Fe(d, s.value.timezone)
            : d,
        C = (d) => {
          if (s.value.timezone && s.value.convertModel) {
            const ee = ul(s.value.timezone);
            return ir(d, ee);
          }
          return d;
        },
        Y = (d, ee, de = !1) =>
          Ha(
            d,
            r.format,
            r.formatLocale,
            o.value.rangeSeparator,
            r.modelAuto,
            ee ?? u(),
            de
          ),
        x = (d) =>
          d
            ? r.modelType
              ? J(d)
              : {
                  hours: tt(d),
                  minutes: ot(d),
                  seconds: r.enableSeconds ? Tt(d) : 0,
                }
            : null,
        I = (d) => (r.modelType ? J(d) : { month: he(d), year: ce(d) }),
        p = (d) =>
          Array.isArray(d)
            ? c.value.enabled
              ? d.map((ee) => $(ee, Ze(j(), ee)))
              : Kt(
                  () => [
                    Ze(j(), d[0]),
                    d[1] ? Ze(j(), d[1]) : At(l.value.partialRange),
                  ],
                  l.value.enabled
                )
            : Ze(j(), +d),
        $ = (d, ee) =>
          (typeof d == 'string' || typeof d == 'number') && r.modelType
            ? N(d)
            : ee,
        P = (d) =>
          Array.isArray(d)
            ? [
                $(d[0], st(null, +d[0].hours, +d[0].minutes, d[0].seconds)),
                $(d[1], st(null, +d[1].hours, +d[1].minutes, d[1].seconds)),
              ]
            : $(d, st(null, d.hours, d.minutes, d.seconds)),
        z = (d) => {
          const ee = be(j(), { date: 1 });
          return Array.isArray(d)
            ? c.value.enabled
              ? d.map((de) => $(de, at(ee, +de.month, +de.year)))
              : Kt(
                  () => [
                    $(d[0], at(ee, +d[0].month, +d[0].year)),
                    $(
                      d[1],
                      d[1]
                        ? at(ee, +d[1].month, +d[1].year)
                        : At(l.value.partialRange)
                    ),
                  ],
                  l.value.enabled
                )
            : $(d, at(ee, +d.month, +d.year));
        },
        K = (d) => {
          if (Array.isArray(d)) return d.map((ee) => N(ee));
          throw new Error(Tn.dateArr('multi-dates'));
        },
        Z = (d) => {
          if (Array.isArray(d) && l.value.enabled) {
            const ee = d[0],
              de = d[1];
            return [
              j(Array.isArray(ee) ? ee[0] : null),
              j(Array.isArray(de) ? de[0] : null),
            ];
          }
          return j(d[0]);
        },
        O = (d) =>
          r.modelAuto
            ? Array.isArray(d)
              ? [N(d[0]), N(d[1])]
              : r.autoApply
              ? [N(d)]
              : [N(d), null]
            : Array.isArray(d)
            ? Kt(
                () =>
                  d[1]
                    ? [N(d[0]), d[1] ? N(d[1]) : At(l.value.partialRange)]
                    : [N(d[0])],
                l.value.enabled
              )
            : N(d),
        D = () => {
          Array.isArray(a.value) &&
            l.value.enabled &&
            a.value.length === 1 &&
            a.value.push(At(l.value.partialRange));
        },
        W = () => {
          const d = a.value;
          return [J(d[0]), d[1] ? J(d[1]) : At(l.value.partialRange)];
        },
        E = () => (a.value[1] ? W() : J(Ne(a.value[0]))),
        Q = () => (a.value || []).map((d) => J(d)),
        re = (d = !1) => (
          d || D(),
          r.modelAuto
            ? E()
            : c.value.enabled
            ? Q()
            : Array.isArray(a.value)
            ? Kt(() => W(), l.value.enabled)
            : J(Ne(a.value))
        ),
        le = (d) =>
          !d || (Array.isArray(d) && !d.length)
            ? null
            : r.timePicker
            ? P(Ne(d))
            : r.monthPicker
            ? z(Ne(d))
            : r.yearPicker
            ? p(Ne(d))
            : c.value.enabled
            ? K(Ne(d))
            : r.weekPicker
            ? Z(Ne(d))
            : O(Ne(d)),
        b = (d) => {
          const ee = le(d);
          $n(Ne(ee))
            ? ((a.value = Ne(ee)), G())
            : ((a.value = null), (B.value = ''));
        },
        H = () => {
          const d = (ee) => Ke(ee, o.value.format);
          return `${d(a.value[0])} ${o.value.rangeSeparator} ${
            a.value[1] ? d(a.value[1]) : ''
          }`;
        },
        X = () =>
          n.value && a.value
            ? Array.isArray(a.value)
              ? H()
              : Ke(a.value, o.value.format)
            : Y(a.value),
        w = () =>
          a.value
            ? c.value.enabled
              ? a.value.map((d) => Y(d)).join('; ')
              : o.value.enabled && typeof o.value.format == 'string'
              ? X()
              : Y(a.value)
            : '',
        G = () => {
          !r.format ||
          typeof r.format == 'string' ||
          (o.value.enabled && typeof o.value.format == 'string')
            ? (B.value = w())
            : (B.value = r.format(a.value));
        },
        N = (d) => {
          if (r.utc) {
            const ee = new Date(d);
            return r.utc === 'preserve'
              ? new Date(ee.getTime() + ee.getTimezoneOffset() * 6e4)
              : ee;
          }
          return r.modelType
            ? cl.includes(r.modelType)
              ? g(new Date(d))
              : r.modelType === 'format' &&
                (typeof r.format == 'string' || !r.format)
              ? g(bn(d, u(), new Date(), { locale: S.value }))
              : g(bn(d, r.modelType, new Date(), { locale: S.value }))
            : g(new Date(d));
        },
        J = (d) =>
          d
            ? r.utc
              ? bl(d, r.utc === 'preserve', r.enableSeconds)
              : r.modelType
              ? r.modelType === 'timestamp'
                ? +C(d)
                : r.modelType === 'iso'
                ? C(d).toISOString()
                : r.modelType === 'format' &&
                  (typeof r.format == 'string' || !r.format)
                ? Y(C(d))
                : Y(C(d), r.modelType, !0)
              : C(d)
            : '',
        se = (d, ee = !1, de = !1) => {
          if (de) return d;
          if ((t('update:model-value', d), s.value.emitTimezone && ee)) {
            const A = Array.isArray(d)
              ? d.map((fe) => Fe(Ne(fe), s.value.emitTimezone))
              : Fe(Ne(d), s.value.emitTimezone);
            t('update:model-timezone-value', A);
          }
        },
        h = (d) =>
          Array.isArray(a.value)
            ? c.value.enabled
              ? a.value.map((ee) => d(ee))
              : [
                  d(a.value[0]),
                  a.value[1] ? d(a.value[1]) : At(l.value.partialRange),
                ]
            : d(Ne(a.value)),
        y = () => {
          if (Array.isArray(a.value)) {
            const d = nt(a.value[0], r.weekStart),
              ee = a.value[1] ? nt(a.value[1], r.weekStart) : [];
            return [d.map((de) => j(de)), ee.map((de) => j(de))];
          }
          return nt(a.value, r.weekStart).map((d) => j(d));
        },
        L = (d, ee) => se(Ne(h(d)), !1, ee),
        f = (d) => {
          const ee = y();
          return d ? ee : t('update:model-value', y());
        },
        v = (d = !1) => (
          d || G(),
          r.monthPicker
            ? L(I, d)
            : r.timePicker
            ? L(x, d)
            : r.yearPicker
            ? L(ce, d)
            : r.weekPicker
            ? f(d)
            : se(re(d), !0, d)
        );
      return {
        inputValue: B,
        internalModelValue: a,
        checkBeforeEmit: () =>
          a.value
            ? l.value.enabled
              ? l.value.partialRange
                ? a.value.length >= 1
                : a.value.length === 2
              : !!a.value
            : !1,
        parseExternalModelValue: b,
        formatInputValue: G,
        emitModelValue: v,
      };
    },
    Wl = (t, r) => {
      const { defaultedFilters: n, propDates: a } = Me(t),
        { validateMonthYearInRange: o } = dt(t),
        l = (m, S) => {
          let g = m;
          return n.value.months.includes(he(g))
            ? ((g = S ? qe(m, 1) : Bt(m, 1)), l(g, S))
            : g;
        },
        s = (m, S) => {
          let g = m;
          return n.value.years.includes(ce(g))
            ? ((g = S ? dn(m, 1) : Ba(m, 1)), s(g, S))
            : g;
        },
        c = (m, S = !1) => {
          const g = be(j(), { month: t.month, year: t.year });
          let C = m ? qe(g, 1) : Bt(g, 1);
          t.disableYearSelect && (C = Ze(C, t.year));
          let Y = he(C),
            x = ce(C);
          n.value.months.includes(Y) &&
            ((C = l(C, m)), (Y = he(C)), (x = ce(C))),
            n.value.years.includes(x) && ((C = s(C, m)), (x = ce(C))),
            o(Y, x, m, t.preventMinMaxNavigation) && u(Y, x, S);
        },
        u = (m, S, g) => {
          r('update-month-year', { month: m, year: S, fromNav: g });
        },
        B = e.computed(
          () => (m) =>
            La(
              be(j(), { month: t.month, year: t.year }),
              a.value.maxDate,
              a.value.minDate,
              t.preventMinMaxNavigation,
              m
            )
        );
      return { handleMonthYearChange: c, isDisabled: B, updateMonthYear: u };
    },
    Jt = {
      multiCalendars: {
        type: [Boolean, Number, String, Object],
        default: void 0,
      },
      modelValue: {
        type: [String, Date, Array, Object, Number],
        default: null,
      },
      modelType: { type: String, default: null },
      position: { type: String, default: 'center' },
      dark: { type: Boolean, default: !1 },
      format: { type: [String, Function], default: () => null },
      autoPosition: { type: Boolean, default: !0 },
      altPosition: { type: Function, default: null },
      transitions: { type: [Boolean, Object], default: !0 },
      formatLocale: { type: Object, default: null },
      utc: { type: [Boolean, String], default: !1 },
      ariaLabels: { type: Object, default: () => ({}) },
      offset: { type: [Number, String], default: 10 },
      hideNavigation: { type: Array, default: () => [] },
      timezone: { type: [String, Object], default: null },
      vertical: { type: Boolean, default: !1 },
      disableMonthYearSelect: { type: Boolean, default: !1 },
      disableYearSelect: { type: Boolean, default: !1 },
      dayClass: { type: Function, default: null },
      yearRange: { type: Array, default: () => [1900, 2100] },
      enableTimePicker: { type: Boolean, default: !0 },
      autoApply: { type: Boolean, default: !1 },
      disabledDates: { type: [Array, Function], default: () => [] },
      monthNameFormat: { type: String, default: 'short' },
      startDate: { type: [Date, String], default: null },
      startTime: { type: [Object, Array], default: null },
      hideOffsetDates: { type: Boolean, default: !1 },
      noToday: { type: Boolean, default: !1 },
      disabledWeekDays: { type: Array, default: () => [] },
      allowedDates: { type: Array, default: null },
      nowButtonLabel: { type: String, default: 'Now' },
      markers: { type: Array, default: () => [] },
      escClose: { type: Boolean, default: !0 },
      spaceConfirm: { type: Boolean, default: !0 },
      monthChangeOnArrows: { type: Boolean, default: !0 },
      presetDates: { type: Array, default: () => [] },
      flow: { type: Array, default: () => [] },
      partialFlow: { type: Boolean, default: !1 },
      preventMinMaxNavigation: { type: Boolean, default: !1 },
      reverseYears: { type: Boolean, default: !1 },
      weekPicker: { type: Boolean, default: !1 },
      filters: { type: Object, default: () => ({}) },
      arrowNavigation: { type: Boolean, default: !1 },
      highlight: { type: [Function, Object], default: null },
      teleport: { type: [Boolean, String, Object], default: null },
      teleportCenter: { type: Boolean, default: !1 },
      locale: { type: String, default: 'en-Us' },
      weekNumName: { type: String, default: 'W' },
      weekStart: { type: [Number, String], default: 1 },
      weekNumbers: { type: [String, Function, Object], default: null },
      monthChangeOnScroll: { type: [Boolean, String], default: !0 },
      dayNames: { type: [Function, Array], default: null },
      monthPicker: { type: Boolean, default: !1 },
      customProps: { type: Object, default: null },
      yearPicker: { type: Boolean, default: !1 },
      modelAuto: { type: Boolean, default: !1 },
      selectText: { type: String, default: 'Select' },
      cancelText: { type: String, default: 'Cancel' },
      previewFormat: { type: [String, Function], default: () => '' },
      multiDates: { type: [Object, Boolean], default: !1 },
      ignoreTimeValidation: { type: Boolean, default: !1 },
      minDate: { type: [Date, String], default: null },
      maxDate: { type: [Date, String], default: null },
      minTime: { type: Object, default: null },
      maxTime: { type: Object, default: null },
      name: { type: String, default: null },
      placeholder: { type: String, default: '' },
      hideInputIcon: { type: Boolean, default: !1 },
      clearable: { type: Boolean, default: !0 },
      state: { type: Boolean, default: null },
      required: { type: Boolean, default: !1 },
      autocomplete: { type: String, default: 'off' },
      timePicker: { type: Boolean, default: !1 },
      enableSeconds: { type: Boolean, default: !1 },
      is24: { type: Boolean, default: !0 },
      noHoursOverlay: { type: Boolean, default: !1 },
      noMinutesOverlay: { type: Boolean, default: !1 },
      noSecondsOverlay: { type: Boolean, default: !1 },
      hoursGridIncrement: { type: [String, Number], default: 1 },
      minutesGridIncrement: { type: [String, Number], default: 5 },
      secondsGridIncrement: { type: [String, Number], default: 5 },
      hoursIncrement: { type: [Number, String], default: 1 },
      minutesIncrement: { type: [Number, String], default: 1 },
      secondsIncrement: { type: [Number, String], default: 1 },
      range: { type: [Boolean, Object], default: !1 },
      uid: { type: String, default: null },
      disabled: { type: Boolean, default: !1 },
      readonly: { type: Boolean, default: !1 },
      inline: { type: [Boolean, Object], default: !1 },
      textInput: { type: [Boolean, Object], default: !1 },
      sixWeeks: { type: [Boolean, String], default: !1 },
      actionRow: { type: Object, default: () => ({}) },
      focusStartDate: { type: Boolean, default: !1 },
      disabledTimes: { type: [Function, Array], default: void 0 },
      timePickerInline: { type: Boolean, default: !1 },
      calendar: { type: Function, default: null },
      config: { type: Object, default: void 0 },
      quarterPicker: { type: Boolean, default: !1 },
      yearFirst: { type: Boolean, default: !1 },
      loading: { type: Boolean, default: !1 },
      onInternalModelChange: { type: [Function, Object], default: null },
      enableMinutes: { type: Boolean, default: !0 },
      ui: { type: Object, default: () => ({}) },
    },
    Ge = {
      ...Jt,
      shadow: { type: Boolean, default: !1 },
      flowStep: { type: Number, default: 0 },
      internalModelValue: { type: [Date, Array], default: null },
      noOverlayFocus: { type: Boolean, default: !1 },
      collapse: { type: Boolean, default: !1 },
      menuWrapRef: { type: Object, default: null },
      getInputRect: { type: Function, default: () => ({}) },
      isTextInputDate: { type: Boolean, default: !1 },
    },
    ql = ['title'],
    Ul = ['disabled'],
    jl = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'ActionRow',
      props: {
        menuMount: { type: Boolean, default: !1 },
        calendarWidth: { type: Number, default: 0 },
        ...Ge,
      },
      emits: ['close-picker', 'select-date', 'select-now', 'invalid-select'],
      setup(t, { emit: r }) {
        const n = r,
          a = t,
          {
            defaultedActionRow: o,
            defaultedPreviewFormat: l,
            defaultedMultiCalendars: s,
            defaultedTextInput: c,
            defaultedInline: u,
            defaultedRange: B,
            defaultedMultiDates: m,
          } = Me(a),
          { isTimeValid: S, isMonthValid: g } = dt(a),
          { buildMatrix: C } = ut(),
          Y = e.ref(null),
          x = e.ref(null),
          I = e.ref(!1),
          p = e.ref({}),
          $ = e.ref(null),
          P = e.ref(null);
        e.onMounted(() => {
          a.arrowNavigation && C([Oe(Y), Oe(x)], 'actionRow'),
            z(),
            window.addEventListener('resize', z);
        }),
          e.onUnmounted(() => {
            window.removeEventListener('resize', z);
          });
        const z = () => {
            (I.value = !1),
              setTimeout(() => {
                var X, w;
                const b =
                    (X = $.value) == null ? void 0 : X.getBoundingClientRect(),
                  H =
                    (w = P.value) == null ? void 0 : w.getBoundingClientRect();
                b && H && (p.value.maxWidth = `${H.width - b.width - 20}px`),
                  (I.value = !0);
              }, 0);
          },
          K = e.computed(() =>
            B.value.enabled && !B.value.partialRange && a.internalModelValue
              ? a.internalModelValue.length === 2
              : !0
          ),
          Z = e.computed(
            () =>
              !S.value(a.internalModelValue) ||
              !g.value(a.internalModelValue) ||
              !K.value
          ),
          O = () => {
            const b = l.value;
            return a.timePicker || a.monthPicker, b(Ne(a.internalModelValue));
          },
          D = () => {
            const b = a.internalModelValue;
            return s.value.count > 0
              ? `${W(b[0])} - ${W(b[1])}`
              : [W(b[0]), W(b[1])];
          },
          W = (b) =>
            Ha(
              b,
              l.value,
              a.formatLocale,
              c.value.rangeSeparator,
              a.modelAuto,
              l.value
            ),
          E = e.computed(() =>
            !a.internalModelValue || !a.menuMount
              ? ''
              : typeof l.value == 'string'
              ? Array.isArray(a.internalModelValue)
                ? a.internalModelValue.length === 2 && a.internalModelValue[1]
                  ? D()
                  : m.value.enabled
                  ? a.internalModelValue.map((b) => `${W(b)}`)
                  : a.modelAuto
                  ? `${W(a.internalModelValue[0])}`
                  : `${W(a.internalModelValue[0])} -`
                : W(a.internalModelValue)
              : O()
          ),
          Q = () => (m.value.enabled ? '; ' : ' - '),
          re = e.computed(() =>
            Array.isArray(E.value) ? E.value.join(Q()) : E.value
          ),
          le = () => {
            S.value(a.internalModelValue) &&
            g.value(a.internalModelValue) &&
            K.value
              ? n('select-date')
              : n('invalid-select');
          };
        return (b, H) => (
          e.openBlock(),
          e.createElementBlock(
            'div',
            { ref_key: 'actionRowRef', ref: P, class: 'dp__action_row' },
            [
              b.$slots['action-row']
                ? e.renderSlot(
                    b.$slots,
                    'action-row',
                    e.normalizeProps(
                      e.mergeProps(
                        { key: 0 },
                        {
                          internalModelValue: b.internalModelValue,
                          disabled: Z.value,
                          selectDate: () => b.$emit('select-date'),
                          closePicker: () => b.$emit('close-picker'),
                        }
                      )
                    )
                  )
                : (e.openBlock(),
                  e.createElementBlock(
                    e.Fragment,
                    { key: 1 },
                    [
                      e.unref(o).showPreview
                        ? (e.openBlock(),
                          e.createElementBlock(
                            'div',
                            {
                              key: 0,
                              class: 'dp__selection_preview',
                              title: re.value,
                              style: e.normalizeStyle(p.value),
                            },
                            [
                              b.$slots['action-preview'] && I.value
                                ? e.renderSlot(b.$slots, 'action-preview', {
                                    key: 0,
                                    value: b.internalModelValue,
                                  })
                                : e.createCommentVNode('', !0),
                              !b.$slots['action-preview'] && I.value
                                ? (e.openBlock(),
                                  e.createElementBlock(
                                    e.Fragment,
                                    { key: 1 },
                                    [
                                      e.createTextVNode(
                                        e.toDisplayString(re.value),
                                        1
                                      ),
                                    ],
                                    64
                                  ))
                                : e.createCommentVNode('', !0),
                            ],
                            12,
                            ql
                          ))
                        : e.createCommentVNode('', !0),
                      e.createElementVNode(
                        'div',
                        {
                          ref_key: 'actionBtnContainer',
                          ref: $,
                          class: 'dp__action_buttons',
                          'data-dp-element': 'action-row',
                        },
                        [
                          b.$slots['action-buttons']
                            ? e.renderSlot(b.$slots, 'action-buttons', {
                                key: 0,
                                value: b.internalModelValue,
                              })
                            : e.createCommentVNode('', !0),
                          b.$slots['action-buttons']
                            ? e.createCommentVNode('', !0)
                            : (e.openBlock(),
                              e.createElementBlock(
                                e.Fragment,
                                { key: 1 },
                                [
                                  !e.unref(u).enabled && e.unref(o).showCancel
                                    ? (e.openBlock(),
                                      e.createElementBlock(
                                        'button',
                                        {
                                          key: 0,
                                          ref_key: 'cancelButtonRef',
                                          ref: Y,
                                          type: 'button',
                                          class:
                                            'dp__action_button dp__action_cancel',
                                          onClick:
                                            H[0] ||
                                            (H[0] = (X) =>
                                              b.$emit('close-picker')),
                                          onKeydown:
                                            H[1] ||
                                            (H[1] = (X) =>
                                              e.unref(xe)(X, () =>
                                                b.$emit('close-picker')
                                              )),
                                        },
                                        e.toDisplayString(b.cancelText),
                                        545
                                      ))
                                    : e.createCommentVNode('', !0),
                                  e.unref(o).showNow
                                    ? (e.openBlock(),
                                      e.createElementBlock(
                                        'button',
                                        {
                                          key: 1,
                                          type: 'button',
                                          class:
                                            'dp__action_button dp__action_cancel',
                                          onClick:
                                            H[2] ||
                                            (H[2] = (X) =>
                                              b.$emit('select-now')),
                                          onKeydown:
                                            H[3] ||
                                            (H[3] = (X) =>
                                              e.unref(xe)(X, () =>
                                                b.$emit('select-now')
                                              )),
                                        },
                                        e.toDisplayString(b.nowButtonLabel),
                                        33
                                      ))
                                    : e.createCommentVNode('', !0),
                                  e.unref(o).showSelect
                                    ? (e.openBlock(),
                                      e.createElementBlock(
                                        'button',
                                        {
                                          key: 2,
                                          ref_key: 'selectButtonRef',
                                          ref: x,
                                          type: 'button',
                                          class:
                                            'dp__action_button dp__action_select',
                                          disabled: Z.value,
                                          'data-test': 'select-button',
                                          onKeydown:
                                            H[4] ||
                                            (H[4] = (X) =>
                                              e.unref(xe)(X, () => le())),
                                          onClick: le,
                                        },
                                        e.toDisplayString(b.selectText),
                                        41,
                                        Ul
                                      ))
                                    : e.createCommentVNode('', !0),
                                ],
                                64
                              )),
                        ],
                        512
                      ),
                    ],
                    64
                  )),
            ],
            512
          )
        );
      },
    }),
    Ql = ['role', 'aria-label', 'tabindex'],
    Gl = { class: 'dp__selection_grid_header' },
    Kl = [
      'aria-selected',
      'aria-disabled',
      'data-test',
      'onClick',
      'onKeydown',
      'onMouseover',
    ],
    Xl = ['aria-label'],
    It = e.defineComponent({
      __name: 'SelectionOverlay',
      props: {
        items: {},
        type: {},
        isLast: { type: Boolean },
        arrowNavigation: { type: Boolean },
        skipButtonRef: { type: Boolean },
        headerRefs: {},
        hideNavigation: {},
        escClose: { type: Boolean },
        useRelative: { type: Boolean },
        height: {},
        textInput: { type: [Boolean, Object] },
        config: {},
        noOverlayFocus: { type: Boolean },
        focusValue: {},
        menuWrapRef: {},
        ariaLabels: {},
        overlayLabel: {},
      },
      emits: ['selected', 'toggle', 'reset-flow', 'hover-value'],
      setup(t, { expose: r, emit: n }) {
        const {
            setSelectionGrid: a,
            buildMultiLevelMatrix: o,
            setMonthPicker: l,
          } = ut(),
          s = n,
          c = t,
          {
            defaultedAriaLabels: u,
            defaultedTextInput: B,
            defaultedConfig: m,
          } = Me(c),
          { hideNavigationButtons: S } = tn(),
          g = e.ref(!1),
          C = e.ref(null),
          Y = e.ref(null),
          x = e.ref([]),
          I = e.ref(),
          p = e.ref(null),
          $ = e.ref(0),
          P = e.ref(null);
        e.onBeforeUpdate(() => {
          C.value = null;
        }),
          e.onMounted(() => {
            e.nextTick().then(() => Q()), c.noOverlayFocus || K(), z(!0);
          }),
          e.onUnmounted(() => z(!1));
        const z = (h) => {
            var y;
            c.arrowNavigation &&
              ((y = c.headerRefs) != null && y.length ? l(h) : a(h));
          },
          K = () => {
            var y;
            const h = Oe(Y);
            h &&
              (B.value.enabled ||
                (C.value
                  ? (y = C.value) == null || y.focus({ preventScroll: !0 })
                  : h.focus({ preventScroll: !0 })),
              (g.value = h.clientHeight < h.scrollHeight));
          },
          Z = e.computed(() => ({
            dp__overlay: !0,
            'dp--overlay-absolute': !c.useRelative,
            'dp--overlay-relative': c.useRelative,
          })),
          O = e.computed(() =>
            c.useRelative
              ? { height: `${c.height}px`, width: 'var(--dp-menu-min-width)' }
              : void 0
          ),
          D = e.computed(() => ({ dp__overlay_col: !0 })),
          W = e.computed(() => ({
            dp__btn: !0,
            dp__button: !0,
            dp__overlay_action: !0,
            dp__over_action_scroll: g.value,
            dp__button_bottom: c.isLast,
          })),
          E = e.computed(() => {
            var h, y;
            return {
              dp__overlay_container: !0,
              dp__container_flex:
                ((h = c.items) == null ? void 0 : h.length) <= 6,
              dp__container_block:
                ((y = c.items) == null ? void 0 : y.length) > 6,
            };
          });
        e.watch(
          () => c.items,
          () => Q(!1),
          { deep: !0 }
        );
        const Q = (h = !0) => {
            e.nextTick().then(() => {
              const y = Oe(C),
                L = Oe(Y),
                f = Oe(p),
                v = Oe(P),
                V = f ? f.getBoundingClientRect().height : 0;
              L &&
                (L.getBoundingClientRect().height
                  ? ($.value = L.getBoundingClientRect().height - V)
                  : ($.value = m.value.modeHeight - V)),
                y &&
                  v &&
                  h &&
                  (v.scrollTop =
                    y.offsetTop -
                    v.offsetTop -
                    ($.value / 2 - y.getBoundingClientRect().height) -
                    V);
            });
          },
          re = (h) => {
            h.disabled || s('selected', h.value);
          },
          le = () => {
            s('toggle'), s('reset-flow');
          },
          b = () => {
            c.escClose && le();
          },
          H = (h, y, L, f) => {
            h &&
              ((y.active || y.value === c.focusValue) && (C.value = h),
              c.arrowNavigation &&
                (Array.isArray(x.value[L])
                  ? (x.value[L][f] = h)
                  : (x.value[L] = [h]),
                X()));
          },
          X = () => {
            var y, L;
            const h =
              (y = c.headerRefs) != null && y.length
                ? [c.headerRefs].concat(x.value)
                : x.value.concat([c.skipButtonRef ? [] : [p.value]]);
            o(
              Ne(h),
              (L = c.headerRefs) != null && L.length
                ? 'monthPicker'
                : 'selectionGrid'
            );
          },
          w = (h) => {
            c.arrowNavigation || lt(h, m.value, !0);
          },
          G = (h) => {
            (I.value = h), s('hover-value', h);
          },
          N = () => {
            if ((le(), !c.isLast)) {
              const h = Pn(c.menuWrapRef ?? null, 'action-row');
              if (h) {
                const y = Ea(h);
                y == null || y.focus();
              }
            }
          },
          J = (h) => {
            switch (h.key) {
              case ve.esc:
                return b();
              case ve.arrowLeft:
                return w(h);
              case ve.arrowRight:
                return w(h);
              case ve.arrowUp:
                return w(h);
              case ve.arrowDown:
                return w(h);
              default:
                return;
            }
          },
          se = (h) => {
            if (h.key === ve.enter) return le();
            if (h.key === ve.tab) return N();
          };
        return (
          r({ focusGrid: K }),
          (h, y) => {
            var L;
            return (
              e.openBlock(),
              e.createElementBlock(
                'div',
                {
                  ref_key: 'gridWrapRef',
                  ref: Y,
                  class: e.normalizeClass(Z.value),
                  style: e.normalizeStyle(O.value),
                  role: h.useRelative ? void 0 : 'dialog',
                  'aria-label': h.overlayLabel,
                  tabindex: h.useRelative ? void 0 : '0',
                  onKeydown: J,
                  onClick:
                    y[0] || (y[0] = e.withModifiers(() => {}, ['prevent'])),
                },
                [
                  e.createElementVNode(
                    'div',
                    {
                      ref_key: 'containerRef',
                      ref: P,
                      class: e.normalizeClass(E.value),
                      style: e.normalizeStyle({
                        '--dp-overlay-height': `${$.value}px`,
                      }),
                      role: 'grid',
                    },
                    [
                      e.createElementVNode('div', Gl, [
                        e.renderSlot(h.$slots, 'header'),
                      ]),
                      h.$slots.overlay
                        ? e.renderSlot(h.$slots, 'overlay', { key: 0 })
                        : (e.openBlock(!0),
                          e.createElementBlock(
                            e.Fragment,
                            { key: 1 },
                            e.renderList(
                              h.items,
                              (f, v) => (
                                e.openBlock(),
                                e.createElementBlock(
                                  'div',
                                  {
                                    key: v,
                                    class: e.normalizeClass([
                                      'dp__overlay_row',
                                      { dp__flex_row: h.items.length >= 3 },
                                    ]),
                                    role: 'row',
                                  },
                                  [
                                    (e.openBlock(!0),
                                    e.createElementBlock(
                                      e.Fragment,
                                      null,
                                      e.renderList(
                                        f,
                                        (V, d) => (
                                          e.openBlock(),
                                          e.createElementBlock(
                                            'div',
                                            {
                                              key: V.value,
                                              ref_for: !0,
                                              ref: (ee) => H(ee, V, v, d),
                                              role: 'gridcell',
                                              class: e.normalizeClass(D.value),
                                              'aria-selected':
                                                V.active || void 0,
                                              'aria-disabled':
                                                V.disabled || void 0,
                                              tabindex: '0',
                                              'data-test': V.text,
                                              onClick: e.withModifiers(
                                                (ee) => re(V),
                                                ['prevent']
                                              ),
                                              onKeydown: (ee) =>
                                                e.unref(xe)(
                                                  ee,
                                                  () => re(V),
                                                  !0
                                                ),
                                              onMouseover: (ee) => G(V.value),
                                            },
                                            [
                                              e.createElementVNode(
                                                'div',
                                                {
                                                  class: e.normalizeClass(
                                                    V.className
                                                  ),
                                                },
                                                [
                                                  h.$slots.item
                                                    ? e.renderSlot(
                                                        h.$slots,
                                                        'item',
                                                        { key: 0, item: V }
                                                      )
                                                    : e.createCommentVNode(
                                                        '',
                                                        !0
                                                      ),
                                                  h.$slots.item
                                                    ? e.createCommentVNode(
                                                        '',
                                                        !0
                                                      )
                                                    : (e.openBlock(),
                                                      e.createElementBlock(
                                                        e.Fragment,
                                                        { key: 1 },
                                                        [
                                                          e.createTextVNode(
                                                            e.toDisplayString(
                                                              V.text
                                                            ),
                                                            1
                                                          ),
                                                        ],
                                                        64
                                                      )),
                                                ],
                                                2
                                              ),
                                            ],
                                            42,
                                            Kl
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ],
                                  2
                                )
                              )
                            ),
                            128
                          )),
                    ],
                    6
                  ),
                  h.$slots['button-icon']
                    ? e.withDirectives(
                        (e.openBlock(),
                        e.createElementBlock(
                          'button',
                          {
                            key: 0,
                            ref_key: 'toggleButton',
                            ref: p,
                            type: 'button',
                            'aria-label':
                              (L = e.unref(u)) == null
                                ? void 0
                                : L.toggleOverlay,
                            class: e.normalizeClass(W.value),
                            tabindex: '0',
                            onClick: le,
                            onKeydown: se,
                          },
                          [e.renderSlot(h.$slots, 'button-icon')],
                          42,
                          Xl
                        )),
                        [[e.vShow, !e.unref(S)(h.hideNavigation, h.type)]]
                      )
                    : e.createCommentVNode('', !0),
                ],
                46,
                Ql
              )
            );
          }
        );
      },
    }),
    Zt = e.defineComponent({
      __name: 'InstanceWrap',
      props: {
        multiCalendars: {},
        stretch: { type: Boolean },
        collapse: { type: Boolean },
      },
      setup(t) {
        const r = t,
          n = e.computed(() =>
            r.multiCalendars > 0 ? [...Array(r.multiCalendars).keys()] : [0]
          ),
          a = e.computed(() => ({
            dp__instance_calendar: r.multiCalendars > 0,
          }));
        return (o, l) => (
          e.openBlock(),
          e.createElementBlock(
            'div',
            {
              class: e.normalizeClass({
                dp__menu_inner: !o.stretch,
                'dp--menu--inner-stretched': o.stretch,
                dp__flex_display: o.multiCalendars > 0,
                'dp--flex-display-collapsed': o.collapse,
              }),
            },
            [
              (e.openBlock(!0),
              e.createElementBlock(
                e.Fragment,
                null,
                e.renderList(
                  n.value,
                  (s, c) => (
                    e.openBlock(),
                    e.createElementBlock(
                      'div',
                      { key: s, class: e.normalizeClass(a.value) },
                      [
                        e.renderSlot(o.$slots, 'default', {
                          instance: s,
                          index: c,
                        }),
                      ],
                      2
                    )
                  )
                ),
                128
              )),
            ],
            2
          )
        );
      },
    }),
    Jl = ['data-dp-element', 'aria-label', 'aria-disabled'],
    Ft = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'ArrowBtn',
      props: { ariaLabel: {}, elName: {}, disabled: { type: Boolean } },
      emits: ['activate', 'set-ref'],
      setup(t, { emit: r }) {
        const n = r,
          a = e.ref(null);
        return (
          e.onMounted(() => n('set-ref', a)),
          (o, l) => (
            e.openBlock(),
            e.createElementBlock(
              'button',
              {
                ref_key: 'elRef',
                ref: a,
                type: 'button',
                'data-dp-element': o.elName,
                class: 'dp__btn dp--arrow-btn-nav',
                tabindex: '0',
                'aria-label': o.ariaLabel,
                'aria-disabled': o.disabled || void 0,
                onClick: l[0] || (l[0] = (s) => o.$emit('activate')),
                onKeydown:
                  l[1] ||
                  (l[1] = (s) => e.unref(xe)(s, () => o.$emit('activate'), !0)),
              },
              [
                e.createElementVNode(
                  'span',
                  {
                    class: e.normalizeClass([
                      'dp__inner_nav',
                      { dp__inner_nav_disabled: o.disabled },
                    ]),
                  },
                  [e.renderSlot(o.$slots, 'default')],
                  2
                ),
              ],
              40,
              Jl
            )
          )
        );
      },
    }),
    Zl = ['aria-label', 'data-test'],
    Ga = e.defineComponent({
      __name: 'YearModePicker',
      props: {
        ...Ge,
        showYearPicker: { type: Boolean, default: !1 },
        items: { type: Array, default: () => [] },
        instance: { type: Number, default: 0 },
        year: { type: Number, default: 0 },
        isDisabled: { type: Function, default: () => !1 },
      },
      emits: ['toggle-year-picker', 'year-select', 'handle-year'],
      setup(t, { emit: r }) {
        const n = r,
          a = t,
          { showRightIcon: o, showLeftIcon: l } = tn(),
          {
            defaultedConfig: s,
            defaultedMultiCalendars: c,
            defaultedAriaLabels: u,
            defaultedTransitions: B,
            defaultedUI: m,
          } = Me(a),
          { showTransition: S, transitionName: g } = Lt(B),
          C = e.ref(!1),
          Y = (p = !1, $) => {
            (C.value = !C.value), n('toggle-year-picker', { flow: p, show: $ });
          },
          x = (p) => {
            (C.value = !1), n('year-select', p);
          },
          I = (p = !1) => {
            n('handle-year', p);
          };
        return (p, $) => {
          var P, z, K, Z, O;
          return (
            e.openBlock(),
            e.createElementBlock(
              e.Fragment,
              null,
              [
                e.createElementVNode(
                  'div',
                  {
                    class: e.normalizeClass([
                      'dp--year-mode-picker',
                      { 'dp--hidden-el': C.value },
                    ]),
                  },
                  [
                    e.unref(l)(e.unref(c), t.instance)
                      ? (e.openBlock(),
                        e.createBlock(
                          Ft,
                          {
                            key: 0,
                            ref: 'mpPrevIconRef',
                            'aria-label':
                              (P = e.unref(u)) == null ? void 0 : P.prevYear,
                            disabled: t.isDisabled(!1),
                            class: e.normalizeClass(
                              (z = e.unref(m)) == null ? void 0 : z.navBtnPrev
                            ),
                            onActivate: $[0] || ($[0] = (D) => I(!1)),
                          },
                          {
                            default: e.withCtx(() => [
                              p.$slots['arrow-left']
                                ? e.renderSlot(p.$slots, 'arrow-left', {
                                    key: 0,
                                  })
                                : e.createCommentVNode('', !0),
                              p.$slots['arrow-left']
                                ? e.createCommentVNode('', !0)
                                : (e.openBlock(),
                                  e.createBlock(e.unref(on), { key: 1 })),
                            ]),
                            _: 3,
                          },
                          8,
                          ['aria-label', 'disabled', 'class']
                        ))
                      : e.createCommentVNode('', !0),
                    e.createElementVNode(
                      'button',
                      {
                        ref: 'mpYearButtonRef',
                        class: 'dp__btn dp--year-select',
                        type: 'button',
                        'aria-label': `${t.year}-${
                          (K = e.unref(u)) == null ? void 0 : K.openYearsOverlay
                        }`,
                        'data-test': `year-mode-btn-${t.instance}`,
                        onClick: $[1] || ($[1] = () => Y(!1)),
                        onKeydown:
                          $[2] || ($[2] = e.withKeys(() => Y(!1), ['enter'])),
                      },
                      [
                        p.$slots.year
                          ? e.renderSlot(p.$slots, 'year', {
                              key: 0,
                              year: t.year,
                            })
                          : e.createCommentVNode('', !0),
                        p.$slots.year
                          ? e.createCommentVNode('', !0)
                          : (e.openBlock(),
                            e.createElementBlock(
                              e.Fragment,
                              { key: 1 },
                              [e.createTextVNode(e.toDisplayString(t.year), 1)],
                              64
                            )),
                      ],
                      40,
                      Zl
                    ),
                    e.unref(o)(e.unref(c), t.instance)
                      ? (e.openBlock(),
                        e.createBlock(
                          Ft,
                          {
                            key: 1,
                            ref: 'mpNextIconRef',
                            'aria-label':
                              (Z = e.unref(u)) == null ? void 0 : Z.nextYear,
                            disabled: t.isDisabled(!0),
                            class: e.normalizeClass(
                              (O = e.unref(m)) == null ? void 0 : O.navBtnNext
                            ),
                            onActivate: $[3] || ($[3] = (D) => I(!0)),
                          },
                          {
                            default: e.withCtx(() => [
                              p.$slots['arrow-right']
                                ? e.renderSlot(p.$slots, 'arrow-right', {
                                    key: 0,
                                  })
                                : e.createCommentVNode('', !0),
                              p.$slots['arrow-right']
                                ? e.createCommentVNode('', !0)
                                : (e.openBlock(),
                                  e.createBlock(e.unref(ln), { key: 1 })),
                            ]),
                            _: 3,
                          },
                          8,
                          ['aria-label', 'disabled', 'class']
                        ))
                      : e.createCommentVNode('', !0),
                  ],
                  2
                ),
                e.createVNode(
                  e.Transition,
                  { name: e.unref(g)(t.showYearPicker), css: e.unref(S) },
                  {
                    default: e.withCtx(() => {
                      var D, W;
                      return [
                        t.showYearPicker
                          ? (e.openBlock(),
                            e.createBlock(
                              It,
                              {
                                key: 0,
                                items: t.items,
                                'text-input': p.textInput,
                                'esc-close': p.escClose,
                                config: p.config,
                                'is-last':
                                  p.autoApply && !e.unref(s).keepActionRow,
                                'hide-navigation': p.hideNavigation,
                                'aria-labels': p.ariaLabels,
                                'overlay-label':
                                  (W =
                                    (D = e.unref(u)) == null
                                      ? void 0
                                      : D.yearPicker) == null
                                    ? void 0
                                    : W.call(D, !0),
                                type: 'year',
                                onToggle: Y,
                                onSelected: $[4] || ($[4] = (E) => x(E)),
                              },
                              e.createSlots(
                                {
                                  'button-icon': e.withCtx(() => [
                                    p.$slots['calendar-icon']
                                      ? e.renderSlot(
                                          p.$slots,
                                          'calendar-icon',
                                          { key: 0 }
                                        )
                                      : e.createCommentVNode('', !0),
                                    p.$slots['calendar-icon']
                                      ? e.createCommentVNode('', !0)
                                      : (e.openBlock(),
                                        e.createBlock(e.unref(Ie), { key: 1 })),
                                  ]),
                                  _: 2,
                                },
                                [
                                  p.$slots['year-overlay-value']
                                    ? {
                                        name: 'item',
                                        fn: e.withCtx(({ item: E }) => [
                                          e.renderSlot(
                                            p.$slots,
                                            'year-overlay-value',
                                            { text: E.text, value: E.value }
                                          ),
                                        ]),
                                        key: '0',
                                      }
                                    : void 0,
                                ]
                              ),
                              1032,
                              [
                                'items',
                                'text-input',
                                'esc-close',
                                'config',
                                'is-last',
                                'hide-navigation',
                                'aria-labels',
                                'overlay-label',
                              ]
                            ))
                          : e.createCommentVNode('', !0),
                      ];
                    }),
                    _: 3,
                  },
                  8,
                  ['name', 'css']
                ),
              ],
              64
            )
          );
        };
      },
    }),
    In = (t, r, n) => {
      if (r.value && Array.isArray(r.value))
        if (r.value.some((a) => pe(t, a))) {
          const a = r.value.filter((o) => !pe(o, t));
          r.value = a.length ? a : null;
        } else ((n && +n > r.value.length) || !n) && r.value.push(t);
      else r.value = [t];
    },
    Fn = (t, r, n) => {
      let a = t.value ? t.value.slice() : [];
      return (
        a.length === 2 && a[1] !== null && (a = []),
        a.length
          ? Ce(r, a[0])
            ? (a.unshift(r), n('range-start', a[0]), n('range-start', a[1]))
            : ((a[1] = r), n('range-end', r))
          : ((a = [r]), n('range-start', r)),
        a
      );
    },
    en = (t, r, n, a) => {
      t &&
        (t[0] && t[1] && n && r('auto-apply'),
        t[0] && !t[1] && a && n && r('auto-apply'));
    },
    Ka = (t) => {
      Array.isArray(t.value) && t.value.length <= 2 && t.range
        ? (t.modelValue.value = t.value.map((r) => Fe(j(r), t.timezone)))
        : Array.isArray(t.value) ||
          (t.modelValue.value = Fe(j(t.value), t.timezone));
    },
    Xa = (t, r, n, a) =>
      Array.isArray(r.value) &&
      (r.value.length === 2 || (r.value.length === 1 && a.value.partialRange))
        ? a.value.fixedStart && ($e(t, r.value[0]) || pe(t, r.value[0]))
          ? [r.value[0], t]
          : a.value.fixedEnd && (Ce(t, r.value[1]) || pe(t, r.value[1]))
          ? [t, r.value[1]]
          : (n('invalid-fixed-range', t), r.value)
        : [],
    Ja = ({
      multiCalendars: t,
      range: r,
      highlight: n,
      propDates: a,
      calendars: o,
      modelValue: l,
      props: s,
      filters: c,
      year: u,
      month: B,
      emit: m,
    }) => {
      const S = e.computed(() => Mn(s.yearRange, s.locale, s.reverseYears)),
        g = e.ref([!1]),
        C = e.computed(() => (E, Q) => {
          const re = be(Qe(new Date()), {
              month: B.value(E),
              year: u.value(E),
            }),
            le = Q ? ia(re) : Et(re);
          return La(
            le,
            a.value.maxDate,
            a.value.minDate,
            s.preventMinMaxNavigation,
            Q
          );
        }),
        Y = () => Array.isArray(l.value) && t.value.solo && l.value[1],
        x = () => {
          for (let E = 0; E < t.value.count; E++)
            if (E === 0) o.value[E] = o.value[0];
            else if (E === t.value.count - 1 && Y())
              o.value[E] = { month: he(l.value[1]), year: ce(l.value[1]) };
            else {
              const Q = be(j(), o.value[E - 1]);
              o.value[E] = { month: he(Q), year: ce(dn(Q, 1)) };
            }
        },
        I = (E) => {
          if (!E) return x();
          const Q = be(j(), o.value[E]);
          return (o.value[0].year = ce(Ba(Q, t.value.count - 1))), x();
        },
        p = (E, Q) => {
          const re = mr(Q, E);
          return r.value.showLastInRange && re > 1 ? Q : E;
        },
        $ = (E) =>
          s.focusStartDate || t.value.solo ? E[0] : E[1] ? p(E[0], E[1]) : E[0],
        P = () => {
          if (l.value) {
            const E = Array.isArray(l.value) ? $(l.value) : l.value;
            o.value[0] = { month: he(E), year: ce(E) };
          }
        },
        z = () => {
          P(), t.value.count && x();
        };
      e.watch(l, (E, Q) => {
        s.isTextInputDate &&
          JSON.stringify(E ?? {}) !== JSON.stringify(Q ?? {}) &&
          z();
      }),
        e.onMounted(() => {
          z();
        });
      const K = (E, Q) => {
          (o.value[Q].year = E),
            m('update-month-year', {
              instance: Q,
              year: E,
              month: o.value[Q].month,
            }),
            t.value.count && !t.value.solo && I(Q);
        },
        Z = e.computed(
          () => (E) =>
            St(S.value, (Q) => {
              var H;
              const re = u.value(E) === Q.value,
                le =
                  xt(Q.value, $t(a.value.minDate), $t(a.value.maxDate)) ||
                  ((H = c.value.years) == null
                    ? void 0
                    : H.includes(u.value(E))),
                b = En(n.value, Q.value);
              return { active: re, disabled: le, highlighted: b };
            })
        ),
        O = (E, Q) => {
          K(E, Q), W(Q);
        },
        D = (E, Q = !1) => {
          if (!C.value(E, Q)) {
            const re = Q ? u.value(E) + 1 : u.value(E) - 1;
            K(re, E);
          }
        },
        W = (E, Q = !1, re) => {
          Q || m('reset-flow'),
            re !== void 0 ? (g.value[E] = re) : (g.value[E] = !g.value[E]),
            g.value[E]
              ? m('overlay-toggle', { open: !0, overlay: Re.year })
              : (m('overlay-closed'),
                m('overlay-toggle', { open: !1, overlay: Re.year }));
        };
      return {
        isDisabled: C,
        groupedYears: Z,
        showYearPicker: g,
        selectYear: K,
        toggleYearPicker: W,
        handleYearSelect: O,
        handleYear: D,
      };
    },
    es = (t, r) => {
      const {
          defaultedMultiCalendars: n,
          defaultedAriaLabels: a,
          defaultedTransitions: o,
          defaultedConfig: l,
          defaultedRange: s,
          defaultedHighlight: c,
          propDates: u,
          defaultedTz: B,
          defaultedFilters: m,
          defaultedMultiDates: S,
        } = Me(t),
        g = () => {
          t.isTextInputDate && z(ce(j(t.startDate)), 0);
        },
        { modelValue: C, year: Y, month: x, calendars: I } = Ht(t, r, g),
        p = e.computed(() => $a(t.formatLocale, t.locale, t.monthNameFormat)),
        $ = e.ref(null),
        { checkMinMaxRange: P } = dt(t),
        {
          selectYear: z,
          groupedYears: K,
          showYearPicker: Z,
          toggleYearPicker: O,
          handleYearSelect: D,
          handleYear: W,
          isDisabled: E,
        } = Ja({
          modelValue: C,
          multiCalendars: n,
          range: s,
          highlight: c,
          calendars: I,
          year: Y,
          propDates: u,
          month: x,
          filters: m,
          props: t,
          emit: r,
        });
      e.onMounted(() => {
        t.startDate &&
          ((C.value && t.focusStartDate) || !C.value) &&
          z(ce(j(t.startDate)), 0);
      });
      const Q = (v) =>
          v ? { month: he(v), year: ce(v) } : { month: null, year: null },
        re = () =>
          C.value
            ? Array.isArray(C.value)
              ? C.value.map((v) => Q(v))
              : Q(C.value)
            : Q(),
        le = (v, V) => {
          const d = I.value[v],
            ee = re();
          return Array.isArray(ee)
            ? ee.some(
                (de) =>
                  de.year === (d == null ? void 0 : d.year) && de.month === V
              )
            : (d == null ? void 0 : d.year) === ee.year && V === ee.month;
        },
        b = (v, V, d) => {
          var de, A;
          const ee = re();
          return Array.isArray(ee)
            ? Y.value(V) === ((de = ee[d]) == null ? void 0 : de.year) &&
                v === ((A = ee[d]) == null ? void 0 : A.month)
            : !1;
        },
        H = (v, V) => {
          if (s.value.enabled) {
            const d = re();
            if (Array.isArray(C.value) && Array.isArray(d)) {
              const ee = b(v, V, 0) || b(v, V, 1),
                de = at(Qe(j()), v, Y.value(V));
              return Gt(C.value, $.value, de) && !ee;
            }
            return !1;
          }
          return !1;
        },
        X = e.computed(
          () => (v) =>
            St(p.value, (V) => {
              var fe;
              const d = le(v, V.value),
                ee =
                  xt(
                    V.value,
                    xa(Y.value(v), u.value.minDate),
                    Va(Y.value(v), u.value.maxDate)
                  ) ||
                  Pl(u.value.disabledDates, Y.value(v)).includes(V.value) ||
                  ((fe = m.value.months) == null
                    ? void 0
                    : fe.includes(V.value)),
                de = H(V.value, v),
                A = Wa(c.value, V.value, Y.value(v));
              return { active: d, disabled: ee, isBetween: de, highlighted: A };
            })
        ),
        w = (v, V) => at(Qe(j()), v, Y.value(V)),
        G = (v, V) => {
          const d = C.value ? C.value : Qe(new Date());
          (C.value = at(d, v, Y.value(V))),
            r('auto-apply'),
            r('update-flow-step');
        },
        N = (v, V) => {
          const d = w(v, V);
          s.value.fixedEnd || s.value.fixedStart
            ? (C.value = Xa(d, C, r, s))
            : C.value
            ? P(d, C.value) && (C.value = Fn(C, w(v, V), r))
            : (C.value = [w(v, V)]),
            e.nextTick().then(() => {
              en(C.value, r, t.autoApply, t.modelAuto);
            });
        },
        J = (v, V) => {
          In(w(v, V), C, S.value.limit), r('auto-apply', !0);
        },
        se = (v, V) => (
          (I.value[V].month = v),
          y(V, I.value[V].year, v),
          S.value.enabled ? J(v, V) : s.value.enabled ? N(v, V) : G(v, V)
        ),
        h = (v, V) => {
          z(v, V), y(V, v, null);
        },
        y = (v, V, d) => {
          let ee = d;
          if (!ee && ee !== 0) {
            const de = re();
            ee = Array.isArray(de) ? de[v].month : de.month;
          }
          r('update-month-year', { instance: v, year: V, month: ee });
        };
      return {
        groupedMonths: X,
        groupedYears: K,
        year: Y,
        isDisabled: E,
        defaultedMultiCalendars: n,
        defaultedAriaLabels: a,
        defaultedTransitions: o,
        defaultedConfig: l,
        showYearPicker: Z,
        modelValue: C,
        presetDate: (v, V) => {
          Ka({
            value: v,
            modelValue: C,
            range: s.value.enabled,
            timezone: V ? void 0 : B.value.timezone,
          }),
            r('auto-apply');
        },
        setHoverDate: (v, V) => {
          $.value = w(v, V);
        },
        selectMonth: se,
        selectYear: h,
        toggleYearPicker: O,
        handleYearSelect: D,
        handleYear: W,
        getModelMonthYear: re,
      };
    },
    ts = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'MonthPicker',
      props: { ...Ge },
      emits: [
        'update:internal-model-value',
        'overlay-closed',
        'reset-flow',
        'range-start',
        'range-end',
        'auto-apply',
        'update-month-year',
        'update-flow-step',
        'mount',
        'invalid-fixed-range',
        'overlay-toggle',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = e.useSlots(),
          l = Le(o, 'yearMode'),
          s = t;
        e.onMounted(() => {
          s.shadow || a('mount', null);
        });
        const {
          groupedMonths: c,
          groupedYears: u,
          year: B,
          isDisabled: m,
          defaultedMultiCalendars: S,
          defaultedConfig: g,
          showYearPicker: C,
          modelValue: Y,
          presetDate: x,
          setHoverDate: I,
          selectMonth: p,
          selectYear: $,
          toggleYearPicker: P,
          handleYearSelect: z,
          handleYear: K,
          getModelMonthYear: Z,
        } = es(s, a);
        return (
          r({
            getSidebarProps: () => ({
              modelValue: Y,
              year: B,
              getModelMonthYear: Z,
              selectMonth: p,
              selectYear: $,
              handleYear: K,
            }),
            presetDate: x,
            toggleYearPicker: (D) => P(0, D),
          }),
          (D, W) => (
            e.openBlock(),
            e.createBlock(
              Zt,
              {
                'multi-calendars': e.unref(S).count,
                collapse: D.collapse,
                stretch: '',
              },
              {
                default: e.withCtx(({ instance: E }) => [
                  D.$slots['top-extra']
                    ? e.renderSlot(D.$slots, 'top-extra', {
                        key: 0,
                        value: D.internalModelValue,
                      })
                    : e.createCommentVNode('', !0),
                  D.$slots['month-year']
                    ? e.renderSlot(
                        D.$slots,
                        'month-year',
                        e.normalizeProps(
                          e.mergeProps(
                            { key: 1 },
                            {
                              year: e.unref(B),
                              months: e.unref(c)(E),
                              years: e.unref(u)(E),
                              selectMonth: e.unref(p),
                              selectYear: e.unref($),
                              instance: E,
                            }
                          )
                        )
                      )
                    : (e.openBlock(),
                      e.createBlock(
                        It,
                        {
                          key: 2,
                          items: e.unref(c)(E),
                          'arrow-navigation': D.arrowNavigation,
                          'is-last': D.autoApply && !e.unref(g).keepActionRow,
                          'esc-close': D.escClose,
                          height: e.unref(g).modeHeight,
                          config: D.config,
                          'no-overlay-focus': !!(
                            D.noOverlayFocus || D.textInput
                          ),
                          'use-relative': '',
                          type: 'month',
                          onSelected: (Q) => e.unref(p)(Q, E),
                          onHoverValue: (Q) => e.unref(I)(Q, E),
                        },
                        e.createSlots(
                          {
                            header: e.withCtx(() => [
                              e.createVNode(
                                Ga,
                                e.mergeProps(D.$props, {
                                  items: e.unref(u)(E),
                                  instance: E,
                                  'show-year-picker': e.unref(C)[E],
                                  year: e.unref(B)(E),
                                  'is-disabled': (Q) => e.unref(m)(E, Q),
                                  onHandleYear: (Q) => e.unref(K)(E, Q),
                                  onYearSelect: (Q) => e.unref(z)(Q, E),
                                  onToggleYearPicker: (Q) =>
                                    e.unref(P)(
                                      E,
                                      Q == null ? void 0 : Q.flow,
                                      Q == null ? void 0 : Q.show
                                    ),
                                }),
                                e.createSlots({ _: 2 }, [
                                  e.renderList(e.unref(l), (Q, re) => ({
                                    name: Q,
                                    fn: e.withCtx((le) => [
                                      e.renderSlot(
                                        D.$slots,
                                        Q,
                                        e.normalizeProps(
                                          e.guardReactiveProps(le)
                                        )
                                      ),
                                    ]),
                                  })),
                                ]),
                                1040,
                                [
                                  'items',
                                  'instance',
                                  'show-year-picker',
                                  'year',
                                  'is-disabled',
                                  'onHandleYear',
                                  'onYearSelect',
                                  'onToggleYearPicker',
                                ]
                              ),
                            ]),
                            _: 2,
                          },
                          [
                            D.$slots['month-overlay-value']
                              ? {
                                  name: 'item',
                                  fn: e.withCtx(({ item: Q }) => [
                                    e.renderSlot(
                                      D.$slots,
                                      'month-overlay-value',
                                      { text: Q.text, value: Q.value }
                                    ),
                                  ]),
                                  key: '0',
                                }
                              : void 0,
                          ]
                        ),
                        1032,
                        [
                          'items',
                          'arrow-navigation',
                          'is-last',
                          'esc-close',
                          'height',
                          'config',
                          'no-overlay-focus',
                          'onSelected',
                          'onHoverValue',
                        ]
                      )),
                ]),
                _: 3,
              },
              8,
              ['multi-calendars', 'collapse']
            )
          )
        );
      },
    }),
    ns = (t, r) => {
      const n = () => {
          t.isTextInputDate && (m.value = ce(j(t.startDate)));
        },
        { modelValue: a } = Ht(t, r, n),
        o = e.ref(null),
        {
          defaultedHighlight: l,
          defaultedMultiDates: s,
          defaultedFilters: c,
          defaultedRange: u,
          propDates: B,
        } = Me(t),
        m = e.ref();
      e.onMounted(() => {
        t.startDate &&
          ((a.value && t.focusStartDate) || !a.value) &&
          (m.value = ce(j(t.startDate)));
      });
      const S = (p) =>
          Array.isArray(a.value)
            ? a.value.some(($) => ce($) === p)
            : a.value
            ? ce(a.value) === p
            : !1,
        g = (p) =>
          u.value.enabled && Array.isArray(a.value)
            ? Gt(a.value, o.value, Y(p))
            : !1,
        C = e.computed(() =>
          St(Mn(t.yearRange, t.locale, t.reverseYears), (p) => {
            const $ = S(p.value),
              P =
                xt(p.value, $t(B.value.minDate), $t(B.value.maxDate)) ||
                c.value.years.includes(p.value),
              z = g(p.value) && !$,
              K = En(l.value, p.value);
            return { active: $, disabled: P, isBetween: z, highlighted: K };
          })
        ),
        Y = (p) => Ze(Qe(Et(new Date())), p);
      return {
        groupedYears: C,
        modelValue: a,
        focusYear: m,
        setHoverValue: (p) => {
          o.value = Ze(Qe(new Date()), p);
        },
        selectYear: (p) => {
          var $;
          if (
            (r('update-month-year', { instance: 0, year: p }), s.value.enabled)
          )
            return (
              a.value
                ? Array.isArray(a.value) &&
                  ((($ = a.value) == null
                    ? void 0
                    : $.map((z) => ce(z))
                  ).includes(p)
                    ? (a.value = a.value.filter((z) => ce(z) !== p))
                    : a.value.push(Ze(Ve(j()), p)))
                : (a.value = [Ze(Ve(Et(j())), p)]),
              r('auto-apply', !0)
            );
          u.value.enabled
            ? ((a.value = Fn(a, Y(p), r)),
              e.nextTick().then(() => {
                en(a.value, r, t.autoApply, t.modelAuto);
              }))
            : ((a.value = Y(p)), r('auto-apply'));
        },
      };
    },
    as = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'YearPicker',
      props: { ...Ge },
      emits: [
        'update:internal-model-value',
        'reset-flow',
        'range-start',
        'range-end',
        'auto-apply',
        'update-month-year',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          {
            groupedYears: l,
            modelValue: s,
            focusYear: c,
            selectYear: u,
            setHoverValue: B,
          } = ns(o, a),
          { defaultedConfig: m } = Me(o);
        return (
          r({ getSidebarProps: () => ({ modelValue: s, selectYear: u }) }),
          (g, C) => (
            e.openBlock(),
            e.createElementBlock('div', null, [
              g.$slots['top-extra']
                ? e.renderSlot(g.$slots, 'top-extra', {
                    key: 0,
                    value: g.internalModelValue,
                  })
                : e.createCommentVNode('', !0),
              g.$slots['month-year']
                ? e.renderSlot(
                    g.$slots,
                    'month-year',
                    e.normalizeProps(
                      e.mergeProps(
                        { key: 1 },
                        { years: e.unref(l), selectYear: e.unref(u) }
                      )
                    )
                  )
                : (e.openBlock(),
                  e.createBlock(
                    It,
                    {
                      key: 2,
                      items: e.unref(l),
                      'is-last': g.autoApply && !e.unref(m).keepActionRow,
                      height: e.unref(m).modeHeight,
                      config: g.config,
                      'no-overlay-focus': !!(g.noOverlayFocus || g.textInput),
                      'focus-value': e.unref(c),
                      type: 'year',
                      'use-relative': '',
                      onSelected: e.unref(u),
                      onHoverValue: e.unref(B),
                    },
                    e.createSlots({ _: 2 }, [
                      g.$slots['year-overlay-value']
                        ? {
                            name: 'item',
                            fn: e.withCtx(({ item: Y }) => [
                              e.renderSlot(g.$slots, 'year-overlay-value', {
                                text: Y.text,
                                value: Y.value,
                              }),
                            ]),
                            key: '0',
                          }
                        : void 0,
                    ]),
                    1032,
                    [
                      'items',
                      'is-last',
                      'height',
                      'config',
                      'no-overlay-focus',
                      'focus-value',
                      'onSelected',
                      'onHoverValue',
                    ]
                  )),
            ])
          )
        );
      },
    }),
    rs = { key: 0, class: 'dp__time_input' },
    os = ['data-test', 'aria-label', 'onKeydown', 'onClick', 'onMousedown'],
    ls = e.createElementVNode(
      'span',
      { class: 'dp__tp_inline_btn_bar dp__tp_btn_in_l' },
      null,
      -1
    ),
    ss = e.createElementVNode(
      'span',
      { class: 'dp__tp_inline_btn_bar dp__tp_btn_in_r' },
      null,
      -1
    ),
    is = ['aria-label', 'disabled', 'data-test', 'onKeydown', 'onClick'],
    us = ['data-test', 'aria-label', 'onKeydown', 'onClick', 'onMousedown'],
    cs = e.createElementVNode(
      'span',
      { class: 'dp__tp_inline_btn_bar dp__tp_btn_in_l' },
      null,
      -1
    ),
    ds = e.createElementVNode(
      'span',
      { class: 'dp__tp_inline_btn_bar dp__tp_btn_in_r' },
      null,
      -1
    ),
    fs = { key: 0 },
    ms = ['aria-label'],
    hs = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'TimeInput',
      props: {
        hours: { type: Number, default: 0 },
        minutes: { type: Number, default: 0 },
        seconds: { type: Number, default: 0 },
        closeTimePickerBtn: { type: Object, default: null },
        order: { type: Number, default: 0 },
        disabledTimesConfig: { type: Function, default: null },
        validateTime: { type: Function, default: () => !1 },
        ...Ge,
      },
      emits: [
        'set-hours',
        'set-minutes',
        'update:hours',
        'update:minutes',
        'update:seconds',
        'reset-flow',
        'mounted',
        'overlay-closed',
        'overlay-opened',
        'am-pm-change',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          { setTimePickerElements: l, setTimePickerBackRef: s } = ut(),
          {
            defaultedAriaLabels: c,
            defaultedTransitions: u,
            defaultedFilters: B,
            defaultedConfig: m,
            defaultedRange: S,
          } = Me(o),
          { transitionName: g, showTransition: C } = Lt(u),
          Y = e.reactive({ hours: !1, minutes: !1, seconds: !1 }),
          x = e.ref('AM'),
          I = e.ref(null),
          p = e.ref([]),
          $ = e.ref(),
          P = e.ref(!1);
        e.onMounted(() => {
          a('mounted');
        });
        const z = (i) =>
            be(new Date(), {
              hours: i.hours,
              minutes: i.minutes,
              seconds: o.enableSeconds ? i.seconds : 0,
              milliseconds: 0,
            }),
          K = e.computed(() => (i) => w(i, o[i]) || O(i, o[i])),
          Z = e.computed(() => ({
            hours: o.hours,
            minutes: o.minutes,
            seconds: o.seconds,
          })),
          O = (i, _) =>
            S.value.enabled && !S.value.disableTimeRangeValidation
              ? !o.validateTime(i, _)
              : !1,
          D = (i, _) => {
            if (S.value.enabled && !S.value.disableTimeRangeValidation) {
              const R = _ ? +o[`${i}Increment`] : -+o[`${i}Increment`],
                q = o[i] + R;
              return !o.validateTime(i, q);
            }
            return !1;
          },
          W = e.computed(
            () => (i) => !h(+o[i] + +o[`${i}Increment`], i) || D(i, !0)
          ),
          E = e.computed(
            () => (i) => !h(+o[i] - +o[`${i}Increment`], i) || D(i, !1)
          ),
          Q = (i, _) => Jn(be(j(), i), _),
          re = (i, _) => sl(be(j(), i), _),
          le = e.computed(() => ({
            dp__time_col: !0,
            dp__time_col_block: !o.timePickerInline,
            dp__time_col_reg_block:
              !o.enableSeconds && o.is24 && !o.timePickerInline,
            dp__time_col_reg_inline:
              !o.enableSeconds && o.is24 && o.timePickerInline,
            dp__time_col_reg_with_button: !o.enableSeconds && !o.is24,
            dp__time_col_sec: o.enableSeconds && o.is24,
            dp__time_col_sec_with_button: o.enableSeconds && !o.is24,
          })),
          b = e.computed(() => {
            const i = [{ type: 'hours' }];
            return (
              o.enableMinutes &&
                i.push({ type: '', separator: !0 }, { type: 'minutes' }),
              o.enableSeconds &&
                i.push({ type: '', separator: !0 }, { type: 'seconds' }),
              i
            );
          }),
          H = e.computed(() => b.value.filter((i) => !i.separator)),
          X = e.computed(() => (i) => {
            if (i === 'hours') {
              const _ = d(+o.hours);
              return { text: _ < 10 ? `0${_}` : `${_}`, value: _ };
            }
            return { text: o[i] < 10 ? `0${o[i]}` : `${o[i]}`, value: o[i] };
          }),
          w = (i, _) => {
            var q;
            if (!o.disabledTimesConfig) return !1;
            const R = o.disabledTimesConfig(
              o.order,
              i === 'hours' ? _ : void 0
            );
            return R[i] ? !!((q = R[i]) != null && q.includes(_)) : !0;
          },
          G = (i, _) => (_ !== 'hours' || x.value === 'AM' ? i : i + 12),
          N = (i) => {
            const _ = o.is24 ? 24 : 12,
              R = i === 'hours' ? _ : 60,
              q = +o[`${i}GridIncrement`],
              ne = i === 'hours' && !o.is24 ? q : 0,
              T = [];
            for (let F = ne; F < R; F += q)
              T.push({
                value: o.is24 ? F : G(F, i),
                text: F < 10 ? `0${F}` : `${F}`,
              });
            return (
              i === 'hours' &&
                !o.is24 &&
                T.unshift({ value: x.value === 'PM' ? 12 : 0, text: '12' }),
              St(T, (F) => ({
                active: !1,
                disabled:
                  B.value.times[i].includes(F.value) ||
                  !h(F.value, i) ||
                  w(i, F.value) ||
                  O(i, F.value),
              }))
            );
          },
          J = (i) => (i >= 0 ? i : 59),
          se = (i) => (i >= 0 ? i : 23),
          h = (i, _) => {
            const R = o.minTime ? z(Sn(o.minTime)) : null,
              q = o.maxTime ? z(Sn(o.maxTime)) : null,
              ne = z(
                Sn(
                  Z.value,
                  _,
                  _ === 'minutes' || _ === 'seconds' ? J(i) : se(i)
                )
              );
            return R && q
              ? (Yt(ne, q) || Ct(ne, q)) && (Pt(ne, R) || Ct(ne, R))
              : R
              ? Pt(ne, R) || Ct(ne, R)
              : q
              ? Yt(ne, q) || Ct(ne, q)
              : !0;
          },
          y = (i) => o[`no${i[0].toUpperCase() + i.slice(1)}Overlay`],
          L = (i) => {
            y(i) ||
              ((Y[i] = !Y[i]),
              Y[i]
                ? ((P.value = !0), a('overlay-opened', i))
                : ((P.value = !1), a('overlay-closed', i)));
          },
          f = (i) => (i === 'hours' ? tt : i === 'minutes' ? ot : Tt),
          v = () => {
            $.value && clearTimeout($.value);
          },
          V = (i, _ = !0, R) => {
            const q = _ ? Q : re,
              ne = _ ? +o[`${i}Increment`] : -+o[`${i}Increment`];
            h(+o[i] + ne, i) &&
              a(
                `update:${i}`,
                f(i)(q({ [i]: +o[i] }, { [i]: +o[`${i}Increment`] }))
              ),
              !(R != null && R.keyboard) &&
                m.value.timeArrowHoldThreshold &&
                ($.value = setTimeout(() => {
                  V(i, _);
                }, m.value.timeArrowHoldThreshold));
          },
          d = (i) =>
            o.is24 ? i : (i >= 12 ? (x.value = 'PM') : (x.value = 'AM'), ml(i)),
          ee = () => {
            x.value === 'PM'
              ? ((x.value = 'AM'), a('update:hours', o.hours - 12))
              : ((x.value = 'PM'), a('update:hours', o.hours + 12)),
              a('am-pm-change', x.value);
          },
          de = (i) => {
            Y[i] = !0;
          },
          A = (i, _, R) => {
            if (i && o.arrowNavigation) {
              Array.isArray(p.value[_])
                ? (p.value[_][R] = i)
                : (p.value[_] = [i]);
              const q = p.value.reduce(
                (ne, T) => T.map((F, ie) => [...(ne[ie] || []), T[ie]]),
                []
              );
              s(o.closeTimePickerBtn),
                I.value && (q[1] = q[1].concat(I.value)),
                l(q, o.order);
            }
          },
          fe = (i, _) => (L(i), a(`update:${i}`, _));
        return (
          r({ openChildCmp: de }),
          (i, _) => {
            var R;
            return i.disabled
              ? e.createCommentVNode('', !0)
              : (e.openBlock(),
                e.createElementBlock('div', rs, [
                  (e.openBlock(!0),
                  e.createElementBlock(
                    e.Fragment,
                    null,
                    e.renderList(b.value, (q, ne) => {
                      var T, F, ie;
                      return (
                        e.openBlock(),
                        e.createElementBlock(
                          'div',
                          { key: ne, class: e.normalizeClass(le.value) },
                          [
                            q.separator
                              ? (e.openBlock(),
                                e.createElementBlock(
                                  e.Fragment,
                                  { key: 0 },
                                  [
                                    P.value
                                      ? e.createCommentVNode('', !0)
                                      : (e.openBlock(),
                                        e.createElementBlock(
                                          e.Fragment,
                                          { key: 0 },
                                          [e.createTextVNode(':')],
                                          64
                                        )),
                                  ],
                                  64
                                ))
                              : (e.openBlock(),
                                e.createElementBlock(
                                  e.Fragment,
                                  { key: 1 },
                                  [
                                    e.createElementVNode(
                                      'button',
                                      {
                                        ref_for: !0,
                                        ref: (me) => A(me, ne, 0),
                                        type: 'button',
                                        class: e.normalizeClass({
                                          dp__btn: !0,
                                          dp__inc_dec_button:
                                            !i.timePickerInline,
                                          dp__inc_dec_button_inline:
                                            i.timePickerInline,
                                          dp__tp_inline_btn_top:
                                            i.timePickerInline,
                                          dp__inc_dec_button_disabled: W.value(
                                            q.type
                                          ),
                                          'dp--hidden-el': P.value,
                                        }),
                                        'data-test': `${q.type}-time-inc-btn-${o.order}`,
                                        'aria-label':
                                          (T = e.unref(c)) == null
                                            ? void 0
                                            : T.incrementValue(q.type),
                                        tabindex: '0',
                                        onKeydown: (me) =>
                                          e.unref(xe)(
                                            me,
                                            () =>
                                              V(q.type, !0, { keyboard: !0 }),
                                            !0
                                          ),
                                        onClick: (me) =>
                                          e.unref(m).timeArrowHoldThreshold
                                            ? void 0
                                            : V(q.type, !0),
                                        onMousedown: (me) =>
                                          e.unref(m).timeArrowHoldThreshold
                                            ? V(q.type, !0)
                                            : void 0,
                                        onMouseup: v,
                                      },
                                      [
                                        o.timePickerInline
                                          ? (e.openBlock(),
                                            e.createElementBlock(
                                              e.Fragment,
                                              { key: 1 },
                                              [
                                                i.$slots['tp-inline-arrow-up']
                                                  ? e.renderSlot(
                                                      i.$slots,
                                                      'tp-inline-arrow-up',
                                                      { key: 0 }
                                                    )
                                                  : (e.openBlock(),
                                                    e.createElementBlock(
                                                      e.Fragment,
                                                      { key: 1 },
                                                      [ls, ss],
                                                      64
                                                    )),
                                              ],
                                              64
                                            ))
                                          : (e.openBlock(),
                                            e.createElementBlock(
                                              e.Fragment,
                                              { key: 0 },
                                              [
                                                i.$slots['arrow-up']
                                                  ? e.renderSlot(
                                                      i.$slots,
                                                      'arrow-up',
                                                      { key: 0 }
                                                    )
                                                  : e.createCommentVNode(
                                                      '',
                                                      !0
                                                    ),
                                                i.$slots['arrow-up']
                                                  ? e.createCommentVNode('', !0)
                                                  : (e.openBlock(),
                                                    e.createBlock(e.unref(un), {
                                                      key: 1,
                                                    })),
                                              ],
                                              64
                                            )),
                                      ],
                                      42,
                                      os
                                    ),
                                    e.createElementVNode(
                                      'button',
                                      {
                                        ref_for: !0,
                                        ref: (me) => A(me, ne, 1),
                                        type: 'button',
                                        'aria-label': `${
                                          X.value(q.type).text
                                        }-${
                                          (F = e.unref(c)) == null
                                            ? void 0
                                            : F.openTpOverlay(q.type)
                                        }`,
                                        class: e.normalizeClass({
                                          dp__time_display: !0,
                                          dp__time_display_block:
                                            !i.timePickerInline,
                                          dp__time_display_inline:
                                            i.timePickerInline,
                                          'dp--time-invalid': K.value(q.type),
                                          'dp--time-overlay-btn': !K.value(
                                            q.type
                                          ),
                                          'dp--hidden-el': P.value,
                                        }),
                                        disabled: y(q.type),
                                        tabindex: '0',
                                        'data-test': `${q.type}-toggle-overlay-btn-${o.order}`,
                                        onKeydown: (me) =>
                                          e.unref(xe)(me, () => L(q.type), !0),
                                        onClick: (me) => L(q.type),
                                      },
                                      [
                                        i.$slots[q.type]
                                          ? e.renderSlot(i.$slots, q.type, {
                                              key: 0,
                                              text: X.value(q.type).text,
                                              value: X.value(q.type).value,
                                            })
                                          : e.createCommentVNode('', !0),
                                        i.$slots[q.type]
                                          ? e.createCommentVNode('', !0)
                                          : (e.openBlock(),
                                            e.createElementBlock(
                                              e.Fragment,
                                              { key: 1 },
                                              [
                                                e.createTextVNode(
                                                  e.toDisplayString(
                                                    X.value(q.type).text
                                                  ),
                                                  1
                                                ),
                                              ],
                                              64
                                            )),
                                      ],
                                      42,
                                      is
                                    ),
                                    e.createElementVNode(
                                      'button',
                                      {
                                        ref_for: !0,
                                        ref: (me) => A(me, ne, 2),
                                        type: 'button',
                                        class: e.normalizeClass({
                                          dp__btn: !0,
                                          dp__inc_dec_button:
                                            !i.timePickerInline,
                                          dp__inc_dec_button_inline:
                                            i.timePickerInline,
                                          dp__tp_inline_btn_bottom:
                                            i.timePickerInline,
                                          dp__inc_dec_button_disabled: E.value(
                                            q.type
                                          ),
                                          'dp--hidden-el': P.value,
                                        }),
                                        'data-test': `${q.type}-time-dec-btn-${o.order}`,
                                        'aria-label':
                                          (ie = e.unref(c)) == null
                                            ? void 0
                                            : ie.decrementValue(q.type),
                                        tabindex: '0',
                                        onKeydown: (me) =>
                                          e.unref(xe)(
                                            me,
                                            () =>
                                              V(q.type, !1, { keyboard: !0 }),
                                            !0
                                          ),
                                        onClick: (me) =>
                                          e.unref(m).timeArrowHoldThreshold
                                            ? void 0
                                            : V(q.type, !1),
                                        onMousedown: (me) =>
                                          e.unref(m).timeArrowHoldThreshold
                                            ? V(q.type, !1)
                                            : void 0,
                                        onMouseup: v,
                                      },
                                      [
                                        o.timePickerInline
                                          ? (e.openBlock(),
                                            e.createElementBlock(
                                              e.Fragment,
                                              { key: 1 },
                                              [
                                                i.$slots['tp-inline-arrow-down']
                                                  ? e.renderSlot(
                                                      i.$slots,
                                                      'tp-inline-arrow-down',
                                                      { key: 0 }
                                                    )
                                                  : (e.openBlock(),
                                                    e.createElementBlock(
                                                      e.Fragment,
                                                      { key: 1 },
                                                      [cs, ds],
                                                      64
                                                    )),
                                              ],
                                              64
                                            ))
                                          : (e.openBlock(),
                                            e.createElementBlock(
                                              e.Fragment,
                                              { key: 0 },
                                              [
                                                i.$slots['arrow-down']
                                                  ? e.renderSlot(
                                                      i.$slots,
                                                      'arrow-down',
                                                      { key: 0 }
                                                    )
                                                  : e.createCommentVNode(
                                                      '',
                                                      !0
                                                    ),
                                                i.$slots['arrow-down']
                                                  ? e.createCommentVNode('', !0)
                                                  : (e.openBlock(),
                                                    e.createBlock(e.unref(cn), {
                                                      key: 1,
                                                    })),
                                              ],
                                              64
                                            )),
                                      ],
                                      42,
                                      us
                                    ),
                                  ],
                                  64
                                )),
                          ],
                          2
                        )
                      );
                    }),
                    128
                  )),
                  i.is24
                    ? e.createCommentVNode('', !0)
                    : (e.openBlock(),
                      e.createElementBlock('div', fs, [
                        i.$slots['am-pm-button']
                          ? e.renderSlot(i.$slots, 'am-pm-button', {
                              key: 0,
                              toggle: ee,
                              value: x.value,
                            })
                          : e.createCommentVNode('', !0),
                        i.$slots['am-pm-button']
                          ? e.createCommentVNode('', !0)
                          : (e.openBlock(),
                            e.createElementBlock(
                              'button',
                              {
                                key: 1,
                                ref_key: 'amPmButton',
                                ref: I,
                                type: 'button',
                                class: 'dp__pm_am_button',
                                role: 'button',
                                'aria-label':
                                  (R = e.unref(c)) == null
                                    ? void 0
                                    : R.amPmButton,
                                tabindex: '0',
                                onClick: ee,
                                onKeydown:
                                  _[0] ||
                                  (_[0] = (q) =>
                                    e.unref(xe)(q, () => ee(), !0)),
                              },
                              e.toDisplayString(x.value),
                              41,
                              ms
                            )),
                      ])),
                  (e.openBlock(!0),
                  e.createElementBlock(
                    e.Fragment,
                    null,
                    e.renderList(
                      H.value,
                      (q, ne) => (
                        e.openBlock(),
                        e.createBlock(
                          e.Transition,
                          {
                            key: ne,
                            name: e.unref(g)(Y[q.type]),
                            css: e.unref(C),
                          },
                          {
                            default: e.withCtx(() => {
                              var T, F;
                              return [
                                Y[q.type]
                                  ? (e.openBlock(),
                                    e.createBlock(
                                      It,
                                      {
                                        key: 0,
                                        items: N(q.type),
                                        'is-last':
                                          i.autoApply &&
                                          !e.unref(m).keepActionRow,
                                        'esc-close': i.escClose,
                                        type: q.type,
                                        'text-input': i.textInput,
                                        config: i.config,
                                        'arrow-navigation': i.arrowNavigation,
                                        'aria-labels': i.ariaLabels,
                                        'overlay-label':
                                          (F = (T = e.unref(c)).timeOverlay) ==
                                          null
                                            ? void 0
                                            : F.call(T, q.type),
                                        onSelected: (ie) => fe(q.type, ie),
                                        onToggle: (ie) => L(q.type),
                                        onResetFlow:
                                          _[1] ||
                                          (_[1] = (ie) =>
                                            i.$emit('reset-flow')),
                                      },
                                      e.createSlots(
                                        {
                                          'button-icon': e.withCtx(() => [
                                            i.$slots['clock-icon']
                                              ? e.renderSlot(
                                                  i.$slots,
                                                  'clock-icon',
                                                  { key: 0 }
                                                )
                                              : e.createCommentVNode('', !0),
                                            i.$slots['clock-icon']
                                              ? e.createCommentVNode('', !0)
                                              : (e.openBlock(),
                                                e.createBlock(
                                                  e.resolveDynamicComponent(
                                                    i.timePickerInline
                                                      ? e.unref(Ie)
                                                      : e.unref(sn)
                                                  ),
                                                  { key: 1 }
                                                )),
                                          ]),
                                          _: 2,
                                        },
                                        [
                                          i.$slots[`${q.type}-overlay-value`]
                                            ? {
                                                name: 'item',
                                                fn: e.withCtx(
                                                  ({ item: ie }) => [
                                                    e.renderSlot(
                                                      i.$slots,
                                                      `${q.type}-overlay-value`,
                                                      {
                                                        text: ie.text,
                                                        value: ie.value,
                                                      }
                                                    ),
                                                  ]
                                                ),
                                                key: '0',
                                              }
                                            : void 0,
                                          i.$slots[`${q.type}-overlay-header`]
                                            ? {
                                                name: 'header',
                                                fn: e.withCtx(() => [
                                                  e.renderSlot(
                                                    i.$slots,
                                                    `${q.type}-overlay-header`,
                                                    { toggle: () => L(q.type) }
                                                  ),
                                                ]),
                                                key: '1',
                                              }
                                            : void 0,
                                        ]
                                      ),
                                      1032,
                                      [
                                        'items',
                                        'is-last',
                                        'esc-close',
                                        'type',
                                        'text-input',
                                        'config',
                                        'arrow-navigation',
                                        'aria-labels',
                                        'overlay-label',
                                        'onSelected',
                                        'onToggle',
                                      ]
                                    ))
                                  : e.createCommentVNode('', !0),
                              ];
                            }),
                            _: 2,
                          },
                          1032,
                          ['name', 'css']
                        )
                      )
                    ),
                    128
                  )),
                ]));
          }
        );
      },
    }),
    ps = { class: 'dp--tp-wrap' },
    gs = ['aria-label', 'tabindex'],
    ys = ['role', 'aria-label', 'tabindex'],
    ws = ['aria-label'],
    Za = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'TimePicker',
      props: {
        hours: { type: [Number, Array], default: 0 },
        minutes: { type: [Number, Array], default: 0 },
        seconds: { type: [Number, Array], default: 0 },
        disabledTimesConfig: { type: Function, default: null },
        validateTime: { type: Function, default: () => !1 },
        ...Ge,
      },
      emits: [
        'update:hours',
        'update:minutes',
        'update:seconds',
        'mount',
        'reset-flow',
        'overlay-opened',
        'overlay-closed',
        'am-pm-change',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          { buildMatrix: l, setTimePicker: s } = ut(),
          c = e.useSlots(),
          {
            defaultedTransitions: u,
            defaultedAriaLabels: B,
            defaultedTextInput: m,
            defaultedConfig: S,
            defaultedRange: g,
          } = Me(o),
          { transitionName: C, showTransition: Y } = Lt(u),
          { hideNavigationButtons: x } = tn(),
          I = e.ref(null),
          p = e.ref(null),
          $ = e.ref([]),
          P = e.ref(null),
          z = e.ref(!1);
        e.onMounted(() => {
          a('mount'),
            !o.timePicker && o.arrowNavigation
              ? l([Oe(I.value)], 'time')
              : s(!0, o.timePicker);
        });
        const K = e.computed(() =>
            g.value.enabled && o.modelAuto ? Aa(o.internalModelValue) : !0
          ),
          Z = e.ref(!1),
          O = (N) => ({
            hours: Array.isArray(o.hours) ? o.hours[N] : o.hours,
            minutes: Array.isArray(o.minutes) ? o.minutes[N] : o.minutes,
            seconds: Array.isArray(o.seconds) ? o.seconds[N] : o.seconds,
          }),
          D = e.computed(() => {
            const N = [];
            if (g.value.enabled) for (let J = 0; J < 2; J++) N.push(O(J));
            else N.push(O(0));
            return N;
          }),
          W = (N, J = !1, se = '') => {
            J || a('reset-flow'),
              (Z.value = N),
              a(N ? 'overlay-opened' : 'overlay-closed', Re.time),
              o.arrowNavigation && s(N),
              e.nextTick(() => {
                se !== '' && $.value[0] && $.value[0].openChildCmp(se);
              });
          },
          E = e.computed(() => ({
            dp__btn: !0,
            dp__button: !0,
            dp__button_bottom: o.autoApply && !S.value.keepActionRow,
          })),
          Q = Le(c, 'timePicker'),
          re = (N, J, se) =>
            g.value.enabled
              ? J === 0
                ? [N, D.value[1][se]]
                : [D.value[0][se], N]
              : N,
          le = (N) => {
            a('update:hours', N);
          },
          b = (N) => {
            a('update:minutes', N);
          },
          H = (N) => {
            a('update:seconds', N);
          },
          X = () => {
            if (P.value && !m.value.enabled && !o.noOverlayFocus) {
              const N = Ea(P.value);
              N && N.focus({ preventScroll: !0 });
            }
          },
          w = (N) => {
            (z.value = !1), a('overlay-closed', N);
          },
          G = (N) => {
            (z.value = !0), a('overlay-opened', N);
          };
        return (
          r({ toggleTimePicker: W }),
          (N, J) => {
            var se;
            return (
              e.openBlock(),
              e.createElementBlock('div', ps, [
                !N.timePicker && !N.timePickerInline
                  ? e.withDirectives(
                      (e.openBlock(),
                      e.createElementBlock(
                        'button',
                        {
                          key: 0,
                          ref_key: 'openTimePickerBtn',
                          ref: I,
                          type: 'button',
                          class: e.normalizeClass({
                            ...E.value,
                            'dp--hidden-el': Z.value,
                          }),
                          'aria-label':
                            (se = e.unref(B)) == null
                              ? void 0
                              : se.openTimePicker,
                          tabindex: N.noOverlayFocus ? void 0 : 0,
                          'data-test': 'open-time-picker-btn',
                          onKeydown:
                            J[0] || (J[0] = (h) => e.unref(xe)(h, () => W(!0))),
                          onClick: J[1] || (J[1] = (h) => W(!0)),
                        },
                        [
                          N.$slots['clock-icon']
                            ? e.renderSlot(N.$slots, 'clock-icon', { key: 0 })
                            : e.createCommentVNode('', !0),
                          N.$slots['clock-icon']
                            ? e.createCommentVNode('', !0)
                            : (e.openBlock(),
                              e.createBlock(e.unref(sn), { key: 1 })),
                        ],
                        42,
                        gs
                      )),
                      [[e.vShow, !e.unref(x)(N.hideNavigation, 'time')]]
                    )
                  : e.createCommentVNode('', !0),
                e.createVNode(
                  e.Transition,
                  {
                    name: e.unref(C)(Z.value),
                    css: e.unref(Y) && !N.timePickerInline,
                  },
                  {
                    default: e.withCtx(() => {
                      var h, y;
                      return [
                        Z.value || N.timePicker || N.timePickerInline
                          ? (e.openBlock(),
                            e.createElementBlock(
                              'div',
                              {
                                key: 0,
                                ref_key: 'overlayRef',
                                ref: P,
                                role: N.timePickerInline ? void 0 : 'dialog',
                                class: e.normalizeClass({
                                  dp__overlay: !N.timePickerInline,
                                  'dp--overlay-absolute':
                                    !o.timePicker && !N.timePickerInline,
                                  'dp--overlay-relative': o.timePicker,
                                }),
                                style: e.normalizeStyle(
                                  N.timePicker
                                    ? { height: `${e.unref(S).modeHeight}px` }
                                    : void 0
                                ),
                                'aria-label':
                                  (h = e.unref(B)) == null
                                    ? void 0
                                    : h.timePicker,
                                tabindex: N.timePickerInline ? void 0 : 0,
                              },
                              [
                                e.createElementVNode(
                                  'div',
                                  {
                                    class: e.normalizeClass(
                                      N.timePickerInline
                                        ? 'dp__time_picker_inline_container'
                                        : 'dp__overlay_container dp__container_flex dp__time_picker_overlay_container'
                                    ),
                                    style: { display: 'flex' },
                                  },
                                  [
                                    N.$slots['time-picker-overlay']
                                      ? e.renderSlot(
                                          N.$slots,
                                          'time-picker-overlay',
                                          {
                                            key: 0,
                                            hours: t.hours,
                                            minutes: t.minutes,
                                            seconds: t.seconds,
                                            setHours: le,
                                            setMinutes: b,
                                            setSeconds: H,
                                          }
                                        )
                                      : e.createCommentVNode('', !0),
                                    N.$slots['time-picker-overlay']
                                      ? e.createCommentVNode('', !0)
                                      : (e.openBlock(),
                                        e.createElementBlock(
                                          'div',
                                          {
                                            key: 1,
                                            class: e.normalizeClass(
                                              N.timePickerInline
                                                ? 'dp__flex'
                                                : 'dp__overlay_row dp__flex_row'
                                            ),
                                          },
                                          [
                                            (e.openBlock(!0),
                                            e.createElementBlock(
                                              e.Fragment,
                                              null,
                                              e.renderList(D.value, (L, f) =>
                                                e.withDirectives(
                                                  (e.openBlock(),
                                                  e.createBlock(
                                                    hs,
                                                    e.mergeProps(
                                                      { key: f, ref_for: !0 },
                                                      {
                                                        ...N.$props,
                                                        order: f,
                                                        hours: L.hours,
                                                        minutes: L.minutes,
                                                        seconds: L.seconds,
                                                        closeTimePickerBtn:
                                                          p.value,
                                                        disabledTimesConfig:
                                                          t.disabledTimesConfig,
                                                        disabled:
                                                          f === 0
                                                            ? e.unref(g)
                                                                .fixedStart
                                                            : e.unref(g)
                                                                .fixedEnd,
                                                      },
                                                      {
                                                        ref_for: !0,
                                                        ref_key:
                                                          'timeInputRefs',
                                                        ref: $,
                                                        'validate-time': (
                                                          v,
                                                          V
                                                        ) =>
                                                          t.validateTime(
                                                            v,
                                                            re(V, f, v)
                                                          ),
                                                        'onUpdate:hours': (v) =>
                                                          le(re(v, f, 'hours')),
                                                        'onUpdate:minutes': (
                                                          v
                                                        ) =>
                                                          b(
                                                            re(v, f, 'minutes')
                                                          ),
                                                        'onUpdate:seconds': (
                                                          v
                                                        ) =>
                                                          H(
                                                            re(v, f, 'seconds')
                                                          ),
                                                        onMounted: X,
                                                        onOverlayClosed: w,
                                                        onOverlayOpened: G,
                                                        onAmPmChange:
                                                          J[2] ||
                                                          (J[2] = (v) =>
                                                            N.$emit(
                                                              'am-pm-change',
                                                              v
                                                            )),
                                                      }
                                                    ),
                                                    e.createSlots({ _: 2 }, [
                                                      e.renderList(
                                                        e.unref(Q),
                                                        (v, V) => ({
                                                          name: v,
                                                          fn: e.withCtx((d) => [
                                                            e.renderSlot(
                                                              N.$slots,
                                                              v,
                                                              e.mergeProps(
                                                                { ref_for: !0 },
                                                                d
                                                              )
                                                            ),
                                                          ]),
                                                        })
                                                      ),
                                                    ]),
                                                    1040,
                                                    [
                                                      'validate-time',
                                                      'onUpdate:hours',
                                                      'onUpdate:minutes',
                                                      'onUpdate:seconds',
                                                    ]
                                                  )),
                                                  [
                                                    [
                                                      e.vShow,
                                                      f === 0 ? !0 : K.value,
                                                    ],
                                                  ]
                                                )
                                              ),
                                              128
                                            )),
                                          ],
                                          2
                                        )),
                                    !N.timePicker && !N.timePickerInline
                                      ? e.withDirectives(
                                          (e.openBlock(),
                                          e.createElementBlock(
                                            'button',
                                            {
                                              key: 2,
                                              ref_key: 'closeTimePickerBtn',
                                              ref: p,
                                              type: 'button',
                                              class: e.normalizeClass({
                                                ...E.value,
                                                'dp--hidden-el': z.value,
                                              }),
                                              'aria-label':
                                                (y = e.unref(B)) == null
                                                  ? void 0
                                                  : y.closeTimePicker,
                                              tabindex: '0',
                                              onKeydown:
                                                J[3] ||
                                                (J[3] = (L) =>
                                                  e.unref(xe)(L, () => W(!1))),
                                              onClick:
                                                J[4] || (J[4] = (L) => W(!1)),
                                            },
                                            [
                                              N.$slots['calendar-icon']
                                                ? e.renderSlot(
                                                    N.$slots,
                                                    'calendar-icon',
                                                    { key: 0 }
                                                  )
                                                : e.createCommentVNode('', !0),
                                              N.$slots['calendar-icon']
                                                ? e.createCommentVNode('', !0)
                                                : (e.openBlock(),
                                                  e.createBlock(e.unref(Ie), {
                                                    key: 1,
                                                  })),
                                            ],
                                            42,
                                            ws
                                          )),
                                          [
                                            [
                                              e.vShow,
                                              !e.unref(x)(
                                                N.hideNavigation,
                                                'time'
                                              ),
                                            ],
                                          ]
                                        )
                                      : e.createCommentVNode('', !0),
                                  ],
                                  2
                                ),
                              ],
                              14,
                              ys
                            ))
                          : e.createCommentVNode('', !0),
                      ];
                    }),
                    _: 3,
                  },
                  8,
                  ['name', 'css']
                ),
              ])
            );
          }
        );
      },
    }),
    er = (t, r, n, a) => {
      const { defaultedRange: o } = Me(t),
        l = (P, z) => (Array.isArray(r[P]) ? r[P][z] : r[P]),
        s = (P) =>
          t.enableSeconds
            ? Array.isArray(r.seconds)
              ? r.seconds[P]
              : r.seconds
            : 0,
        c = (P, z) =>
          P
            ? z !== void 0
              ? st(P, l('hours', z), l('minutes', z), s(z))
              : st(P, r.hours, r.minutes, s())
            : Ca(j(), s(z)),
        u = (P, z) => {
          r[P] = z;
        },
        B = e.computed(() =>
          t.modelAuto && o.value.enabled
            ? Array.isArray(n.value)
              ? n.value.length > 1
              : !1
            : o.value.enabled
        ),
        m = (P, z) => {
          const K = Object.fromEntries(
            Object.keys(r).map((Z) => (Z === P ? [Z, z] : [Z, r[Z]].slice()))
          );
          if (B.value && !o.value.disableTimeRangeValidation) {
            const Z = (D) =>
                n.value
                  ? st(n.value[D], K.hours[D], K.minutes[D], K.seconds[D])
                  : null,
              O = (D) => Pa(n.value[D], 0);
            return !(pe(Z(0), Z(1)) && (Pt(Z(0), O(1)) || Yt(Z(1), O(0))));
          }
          return !0;
        },
        S = (P, z) => {
          m(P, z) && (u(P, z), a && a());
        },
        g = (P) => {
          S('hours', P);
        },
        C = (P) => {
          S('minutes', P);
        },
        Y = (P) => {
          S('seconds', P);
        },
        x = (P, z, K, Z) => {
          z && g(P), !z && !K && C(P), K && Y(P), n.value && Z(n.value);
        },
        I = (P) => {
          if (P) {
            const z = Array.isArray(P),
              K = z ? [+P[0].hours, +P[1].hours] : +P.hours,
              Z = z ? [+P[0].minutes, +P[1].minutes] : +P.minutes,
              O = z ? [+P[0].seconds, +P[1].seconds] : +P.seconds;
            u('hours', K), u('minutes', Z), t.enableSeconds && u('seconds', O);
          }
        },
        p = (P, z) => {
          const K = {
            hours: Array.isArray(r.hours) ? r.hours[P] : r.hours,
            disabledArr: [],
          };
          return (
            (z || z === 0) && (K.hours = z),
            Array.isArray(t.disabledTimes) &&
              (K.disabledArr =
                o.value.enabled && Array.isArray(t.disabledTimes[P])
                  ? t.disabledTimes[P]
                  : t.disabledTimes),
            K
          );
        },
        $ = e.computed(() => (P, z) => {
          var K;
          if (Array.isArray(t.disabledTimes)) {
            const { disabledArr: Z, hours: O } = p(P, z),
              D = Z.filter((W) => +W.hours === O);
            return ((K = D[0]) == null ? void 0 : K.minutes) === '*'
              ? { hours: [O], minutes: void 0, seconds: void 0 }
              : {
                  hours: [],
                  minutes:
                    (D == null ? void 0 : D.map((W) => +W.minutes)) ?? [],
                  seconds:
                    (D == null
                      ? void 0
                      : D.map((W) => (W.seconds ? +W.seconds : void 0))) ?? [],
                };
          }
          return { hours: [], minutes: [], seconds: [] };
        });
      return {
        setTime: u,
        updateHours: g,
        updateMinutes: C,
        updateSeconds: Y,
        getSetDateTime: c,
        updateTimeValues: x,
        getSecondsValue: s,
        assignStartTime: I,
        validateTime: m,
        disabledTimesConfig: $,
      };
    },
    ks = (t, r) => {
      const n = () => {
          t.isTextInputDate && z();
        },
        { modelValue: a, time: o } = Ht(t, r, n),
        { defaultedStartTime: l, defaultedRange: s, defaultedTz: c } = Me(t),
        {
          updateTimeValues: u,
          getSetDateTime: B,
          setTime: m,
          assignStartTime: S,
          disabledTimesConfig: g,
          validateTime: C,
        } = er(t, o, a, Y);
      function Y() {
        r('update-flow-step');
      }
      const x = (O) => {
          const { hours: D, minutes: W, seconds: E } = O;
          return { hours: +D, minutes: +W, seconds: E ? +E : 0 };
        },
        I = () => {
          if (t.startTime) {
            if (Array.isArray(t.startTime)) {
              const D = x(t.startTime[0]),
                W = x(t.startTime[1]);
              return [be(j(), D), be(j(), W)];
            }
            const O = x(t.startTime);
            return be(j(), O);
          }
          return s.value.enabled ? [null, null] : null;
        },
        p = () => {
          if (s.value.enabled) {
            const [O, D] = I();
            a.value = [
              Fe(B(O, 0), c.value.timezone),
              Fe(B(D, 1), c.value.timezone),
            ];
          } else a.value = Fe(B(I()), c.value.timezone);
        },
        $ = (O) =>
          Array.isArray(O) ? [kt(j(O[0])), kt(j(O[1]))] : [kt(O ?? j())],
        P = (O, D, W) => {
          m('hours', O), m('minutes', D), m('seconds', t.enableSeconds ? W : 0);
        },
        z = () => {
          const [O, D] = $(a.value);
          return s.value.enabled
            ? P(
                [O.hours, D.hours],
                [O.minutes, D.minutes],
                [O.seconds, D.seconds]
              )
            : P(O.hours, O.minutes, O.seconds);
        };
      e.onMounted(() => {
        if (!t.shadow) return S(l.value), a.value ? z() : p();
      });
      const K = () => {
        Array.isArray(a.value)
          ? (a.value = a.value.map((O, D) => O && B(O, D)))
          : (a.value = B(a.value)),
          r('time-update');
      };
      return {
        modelValue: a,
        time: o,
        disabledTimesConfig: g,
        updateTime: (O, D = !0, W = !1) => {
          u(O, D, W, K);
        },
        validateTime: C,
      };
    },
    bs = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'TimePickerSolo',
      props: { ...Ge },
      emits: [
        'update:internal-model-value',
        'time-update',
        'am-pm-change',
        'mount',
        'reset-flow',
        'update-flow-step',
        'overlay-toggle',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          l = e.useSlots(),
          s = Le(l, 'timePicker'),
          c = e.ref(null),
          {
            time: u,
            modelValue: B,
            disabledTimesConfig: m,
            updateTime: S,
            validateTime: g,
          } = ks(o, a);
        return (
          e.onMounted(() => {
            o.shadow || a('mount', null);
          }),
          r({
            getSidebarProps: () => ({ modelValue: B, time: u, updateTime: S }),
            toggleTimePicker: (x, I = !1, p = '') => {
              var $;
              ($ = c.value) == null || $.toggleTimePicker(x, I, p);
            },
          }),
          (x, I) => (
            e.openBlock(),
            e.createBlock(
              Zt,
              { 'multi-calendars': 0, stretch: '' },
              {
                default: e.withCtx(() => [
                  e.createVNode(
                    Za,
                    e.mergeProps({ ref_key: 'tpRef', ref: c }, x.$props, {
                      hours: e.unref(u).hours,
                      minutes: e.unref(u).minutes,
                      seconds: e.unref(u).seconds,
                      'internal-model-value': x.internalModelValue,
                      'disabled-times-config': e.unref(m),
                      'validate-time': e.unref(g),
                      'onUpdate:hours': I[0] || (I[0] = (p) => e.unref(S)(p)),
                      'onUpdate:minutes':
                        I[1] || (I[1] = (p) => e.unref(S)(p, !1)),
                      'onUpdate:seconds':
                        I[2] || (I[2] = (p) => e.unref(S)(p, !1, !0)),
                      onAmPmChange:
                        I[3] || (I[3] = (p) => x.$emit('am-pm-change', p)),
                      onResetFlow:
                        I[4] || (I[4] = (p) => x.$emit('reset-flow')),
                      onOverlayClosed:
                        I[5] ||
                        (I[5] = (p) =>
                          x.$emit('overlay-toggle', { open: !1, overlay: p })),
                      onOverlayOpened:
                        I[6] ||
                        (I[6] = (p) =>
                          x.$emit('overlay-toggle', { open: !0, overlay: p })),
                    }),
                    e.createSlots({ _: 2 }, [
                      e.renderList(e.unref(s), (p, $) => ({
                        name: p,
                        fn: e.withCtx((P) => [
                          e.renderSlot(
                            x.$slots,
                            p,
                            e.normalizeProps(e.guardReactiveProps(P))
                          ),
                        ]),
                      })),
                    ]),
                    1040,
                    [
                      'hours',
                      'minutes',
                      'seconds',
                      'internal-model-value',
                      'disabled-times-config',
                      'validate-time',
                    ]
                  ),
                ]),
                _: 3,
              }
            )
          )
        );
      },
    }),
    vs = { class: 'dp--header-wrap' },
    Ds = { key: 0, class: 'dp__month_year_wrap' },
    Ms = { key: 0 },
    Ts = { class: 'dp__month_year_wrap' },
    Ps = ['data-dp-element', 'aria-label', 'data-test', 'onClick', 'onKeydown'],
    Cs = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'DpHeader',
      props: {
        month: { type: Number, default: 0 },
        year: { type: Number, default: 0 },
        instance: { type: Number, default: 0 },
        years: { type: Array, default: () => [] },
        months: { type: Array, default: () => [] },
        ...Ge,
      },
      emits: [
        'update-month-year',
        'mount',
        'reset-flow',
        'overlay-closed',
        'overlay-opened',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          {
            defaultedTransitions: l,
            defaultedAriaLabels: s,
            defaultedMultiCalendars: c,
            defaultedFilters: u,
            defaultedConfig: B,
            defaultedHighlight: m,
            propDates: S,
            defaultedUI: g,
          } = Me(o),
          { transitionName: C, showTransition: Y } = Lt(l),
          { buildMatrix: x } = ut(),
          {
            handleMonthYearChange: I,
            isDisabled: p,
            updateMonthYear: $,
          } = Wl(o, a),
          { showLeftIcon: P, showRightIcon: z } = tn(),
          K = e.ref(!1),
          Z = e.ref(!1),
          O = e.ref(!1),
          D = e.ref([null, null, null, null]);
        e.onMounted(() => {
          a('mount');
        });
        const W = (y) => ({
            get: () => o[y],
            set: (L) => {
              const f = y === je.month ? je.year : je.month;
              a('update-month-year', { [y]: L, [f]: o[f] }),
                y === je.month ? w(!0) : G(!0);
            },
          }),
          E = e.computed(W(je.month)),
          Q = e.computed(W(je.year)),
          re = e.computed(() => (y) => ({
            month: o.month,
            year: o.year,
            items: y === je.month ? o.months : o.years,
            instance: o.instance,
            updateMonthYear: $,
            toggle: y === je.month ? w : G,
          })),
          le = e.computed(() => {
            const y = o.months.find((L) => L.value === o.month);
            return y || { text: '', value: 0 };
          }),
          b = e.computed(() =>
            St(o.months, (y) => {
              const L = o.month === y.value,
                f =
                  xt(
                    y.value,
                    xa(o.year, S.value.minDate),
                    Va(o.year, S.value.maxDate)
                  ) || u.value.months.includes(y.value),
                v = Wa(m.value, y.value, o.year);
              return { active: L, disabled: f, highlighted: v };
            })
          ),
          H = e.computed(() =>
            St(o.years, (y) => {
              const L = o.year === y.value,
                f =
                  xt(y.value, $t(S.value.minDate), $t(S.value.maxDate)) ||
                  u.value.years.includes(y.value),
                v = En(m.value, y.value);
              return { active: L, disabled: f, highlighted: v };
            })
          ),
          X = (y, L, f) => {
            f !== void 0 ? (y.value = f) : (y.value = !y.value),
              y.value
                ? ((O.value = !0), a('overlay-opened', L))
                : ((O.value = !1), a('overlay-closed', L));
          },
          w = (y = !1, L) => {
            N(y), X(K, Re.month, L);
          },
          G = (y = !1, L) => {
            N(y), X(Z, Re.year, L);
          },
          N = (y) => {
            y || a('reset-flow');
          },
          J = (y, L) => {
            o.arrowNavigation &&
              ((D.value[L] = Oe(y)), x(D.value, 'monthYear'));
          },
          se = e.computed(() => {
            var y, L, f, v, V, d;
            return [
              {
                type: je.month,
                index: 1,
                toggle: w,
                modelValue: E.value,
                updateModelValue: (ee) => (E.value = ee),
                text: le.value.text,
                showSelectionGrid: K.value,
                items: b.value,
                ariaLabel: (y = s.value) == null ? void 0 : y.openMonthsOverlay,
                overlayLabel:
                  ((f = (L = s.value).monthPicker) == null
                    ? void 0
                    : f.call(L, !0)) ?? void 0,
              },
              {
                type: je.year,
                index: 2,
                toggle: G,
                modelValue: Q.value,
                updateModelValue: (ee) => (Q.value = ee),
                text: Ra(o.year, o.locale),
                showSelectionGrid: Z.value,
                items: H.value,
                ariaLabel: (v = s.value) == null ? void 0 : v.openYearsOverlay,
                overlayLabel:
                  ((d = (V = s.value).yearPicker) == null
                    ? void 0
                    : d.call(V, !0)) ?? void 0,
              },
            ];
          }),
          h = e.computed(() =>
            o.disableYearSelect
              ? [se.value[0]]
              : o.yearFirst
              ? [...se.value].reverse()
              : se.value
          );
        return (
          r({
            toggleMonthPicker: w,
            toggleYearPicker: G,
            handleMonthYearChange: I,
          }),
          (y, L) => {
            var f, v, V, d, ee, de;
            return (
              e.openBlock(),
              e.createElementBlock('div', vs, [
                y.$slots['month-year']
                  ? (e.openBlock(),
                    e.createElementBlock('div', Ds, [
                      e.renderSlot(
                        y.$slots,
                        'month-year',
                        e.normalizeProps(
                          e.guardReactiveProps({
                            month: t.month,
                            year: t.year,
                            months: t.months,
                            years: t.years,
                            updateMonthYear: e.unref($),
                            handleMonthYearChange: e.unref(I),
                            instance: t.instance,
                          })
                        )
                      ),
                    ]))
                  : (e.openBlock(),
                    e.createElementBlock(
                      e.Fragment,
                      { key: 1 },
                      [
                        y.$slots['top-extra']
                          ? (e.openBlock(),
                            e.createElementBlock('div', Ms, [
                              e.renderSlot(y.$slots, 'top-extra', {
                                value: y.internalModelValue,
                              }),
                            ]))
                          : e.createCommentVNode('', !0),
                        e.createElementVNode('div', Ts, [
                          e.unref(P)(e.unref(c), t.instance) && !y.vertical
                            ? (e.openBlock(),
                              e.createBlock(
                                Ft,
                                {
                                  key: 0,
                                  'aria-label':
                                    (f = e.unref(s)) == null
                                      ? void 0
                                      : f.prevMonth,
                                  disabled: e.unref(p)(!1),
                                  class: e.normalizeClass(
                                    (v = e.unref(g)) == null
                                      ? void 0
                                      : v.navBtnPrev
                                  ),
                                  'el-name': 'action-prev',
                                  onActivate:
                                    L[0] || (L[0] = (A) => e.unref(I)(!1, !0)),
                                  onSetRef: L[1] || (L[1] = (A) => J(A, 0)),
                                },
                                {
                                  default: e.withCtx(() => [
                                    y.$slots['arrow-left']
                                      ? e.renderSlot(y.$slots, 'arrow-left', {
                                          key: 0,
                                        })
                                      : e.createCommentVNode('', !0),
                                    y.$slots['arrow-left']
                                      ? e.createCommentVNode('', !0)
                                      : (e.openBlock(),
                                        e.createBlock(e.unref(on), { key: 1 })),
                                  ]),
                                  _: 3,
                                },
                                8,
                                ['aria-label', 'disabled', 'class']
                              ))
                            : e.createCommentVNode('', !0),
                          e.createElementVNode(
                            'div',
                            {
                              class: e.normalizeClass([
                                'dp__month_year_wrap',
                                {
                                  dp__year_disable_select: y.disableYearSelect,
                                },
                              ]),
                            },
                            [
                              (e.openBlock(!0),
                              e.createElementBlock(
                                e.Fragment,
                                null,
                                e.renderList(
                                  h.value,
                                  (A, fe) => (
                                    e.openBlock(),
                                    e.createElementBlock(
                                      e.Fragment,
                                      { key: A.type },
                                      [
                                        e.createElementVNode(
                                          'button',
                                          {
                                            ref_for: !0,
                                            ref: (i) => J(i, fe + 1),
                                            type: 'button',
                                            'data-dp-element': `overlay-${A.type}`,
                                            class: e.normalizeClass([
                                              'dp__btn dp__month_year_select',
                                              { 'dp--hidden-el': O.value },
                                            ]),
                                            'aria-label': `${A.text}-${A.ariaLabel}`,
                                            'data-test': `${A.type}-toggle-overlay-${t.instance}`,
                                            onClick: A.toggle,
                                            onKeydown: (i) =>
                                              e.unref(xe)(
                                                i,
                                                () => A.toggle(),
                                                !0
                                              ),
                                          },
                                          [
                                            y.$slots[A.type]
                                              ? e.renderSlot(y.$slots, A.type, {
                                                  key: 0,
                                                  text: A.text,
                                                  value: o[A.type],
                                                })
                                              : e.createCommentVNode('', !0),
                                            y.$slots[A.type]
                                              ? e.createCommentVNode('', !0)
                                              : (e.openBlock(),
                                                e.createElementBlock(
                                                  e.Fragment,
                                                  { key: 1 },
                                                  [
                                                    e.createTextVNode(
                                                      e.toDisplayString(A.text),
                                                      1
                                                    ),
                                                  ],
                                                  64
                                                )),
                                          ],
                                          42,
                                          Ps
                                        ),
                                        e.createVNode(
                                          e.Transition,
                                          {
                                            name: e.unref(C)(
                                              A.showSelectionGrid
                                            ),
                                            css: e.unref(Y),
                                          },
                                          {
                                            default: e.withCtx(() => [
                                              A.showSelectionGrid
                                                ? (e.openBlock(),
                                                  e.createBlock(
                                                    It,
                                                    {
                                                      key: 0,
                                                      items: A.items,
                                                      'arrow-navigation':
                                                        y.arrowNavigation,
                                                      'hide-navigation':
                                                        y.hideNavigation,
                                                      'is-last':
                                                        y.autoApply &&
                                                        !e.unref(B)
                                                          .keepActionRow,
                                                      'skip-button-ref': !1,
                                                      config: y.config,
                                                      type: A.type,
                                                      'header-refs': [],
                                                      'esc-close': y.escClose,
                                                      'menu-wrap-ref':
                                                        y.menuWrapRef,
                                                      'text-input': y.textInput,
                                                      'aria-labels':
                                                        y.ariaLabels,
                                                      'overlay-label':
                                                        A.overlayLabel,
                                                      onSelected:
                                                        A.updateModelValue,
                                                      onToggle: A.toggle,
                                                    },
                                                    e.createSlots(
                                                      {
                                                        'button-icon':
                                                          e.withCtx(() => [
                                                            y.$slots[
                                                              'calendar-icon'
                                                            ]
                                                              ? e.renderSlot(
                                                                  y.$slots,
                                                                  'calendar-icon',
                                                                  { key: 0 }
                                                                )
                                                              : e.createCommentVNode(
                                                                  '',
                                                                  !0
                                                                ),
                                                            y.$slots[
                                                              'calendar-icon'
                                                            ]
                                                              ? e.createCommentVNode(
                                                                  '',
                                                                  !0
                                                                )
                                                              : (e.openBlock(),
                                                                e.createBlock(
                                                                  e.unref(Ie),
                                                                  { key: 1 }
                                                                )),
                                                          ]),
                                                        _: 2,
                                                      },
                                                      [
                                                        y.$slots[
                                                          `${A.type}-overlay-value`
                                                        ]
                                                          ? {
                                                              name: 'item',
                                                              fn: e.withCtx(
                                                                ({
                                                                  item: i,
                                                                }) => [
                                                                  e.renderSlot(
                                                                    y.$slots,
                                                                    `${A.type}-overlay-value`,
                                                                    {
                                                                      text: i.text,
                                                                      value:
                                                                        i.value,
                                                                    }
                                                                  ),
                                                                ]
                                                              ),
                                                              key: '0',
                                                            }
                                                          : void 0,
                                                        y.$slots[
                                                          `${A.type}-overlay`
                                                        ]
                                                          ? {
                                                              name: 'overlay',
                                                              fn: e.withCtx(
                                                                () => [
                                                                  e.renderSlot(
                                                                    y.$slots,
                                                                    `${A.type}-overlay`,
                                                                    e.mergeProps(
                                                                      {
                                                                        ref_for:
                                                                          !0,
                                                                      },
                                                                      re.value(
                                                                        A.type
                                                                      )
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                              key: '1',
                                                            }
                                                          : void 0,
                                                        y.$slots[
                                                          `${A.type}-overlay-header`
                                                        ]
                                                          ? {
                                                              name: 'header',
                                                              fn: e.withCtx(
                                                                () => [
                                                                  e.renderSlot(
                                                                    y.$slots,
                                                                    `${A.type}-overlay-header`,
                                                                    {
                                                                      toggle:
                                                                        A.toggle,
                                                                    }
                                                                  ),
                                                                ]
                                                              ),
                                                              key: '2',
                                                            }
                                                          : void 0,
                                                      ]
                                                    ),
                                                    1032,
                                                    [
                                                      'items',
                                                      'arrow-navigation',
                                                      'hide-navigation',
                                                      'is-last',
                                                      'config',
                                                      'type',
                                                      'esc-close',
                                                      'menu-wrap-ref',
                                                      'text-input',
                                                      'aria-labels',
                                                      'overlay-label',
                                                      'onSelected',
                                                      'onToggle',
                                                    ]
                                                  ))
                                                : e.createCommentVNode('', !0),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ['name', 'css']
                                        ),
                                      ],
                                      64
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            2
                          ),
                          e.unref(P)(e.unref(c), t.instance) && y.vertical
                            ? (e.openBlock(),
                              e.createBlock(
                                Ft,
                                {
                                  key: 1,
                                  'aria-label':
                                    (V = e.unref(s)) == null
                                      ? void 0
                                      : V.prevMonth,
                                  'el-name': 'action-prev',
                                  disabled: e.unref(p)(!1),
                                  class: e.normalizeClass(
                                    (d = e.unref(g)) == null
                                      ? void 0
                                      : d.navBtnPrev
                                  ),
                                  onActivate:
                                    L[2] || (L[2] = (A) => e.unref(I)(!1, !0)),
                                },
                                {
                                  default: e.withCtx(() => [
                                    y.$slots['arrow-up']
                                      ? e.renderSlot(y.$slots, 'arrow-up', {
                                          key: 0,
                                        })
                                      : e.createCommentVNode('', !0),
                                    y.$slots['arrow-up']
                                      ? e.createCommentVNode('', !0)
                                      : (e.openBlock(),
                                        e.createBlock(e.unref(un), { key: 1 })),
                                  ]),
                                  _: 3,
                                },
                                8,
                                ['aria-label', 'disabled', 'class']
                              ))
                            : e.createCommentVNode('', !0),
                          e.unref(z)(e.unref(c), t.instance)
                            ? (e.openBlock(),
                              e.createBlock(
                                Ft,
                                {
                                  key: 2,
                                  ref: 'rightIcon',
                                  'el-name': 'action-next',
                                  disabled: e.unref(p)(!0),
                                  'aria-label':
                                    (ee = e.unref(s)) == null
                                      ? void 0
                                      : ee.nextMonth,
                                  class: e.normalizeClass(
                                    (de = e.unref(g)) == null
                                      ? void 0
                                      : de.navBtnNext
                                  ),
                                  onActivate:
                                    L[3] || (L[3] = (A) => e.unref(I)(!0, !0)),
                                  onSetRef:
                                    L[4] ||
                                    (L[4] = (A) =>
                                      J(A, y.disableYearSelect ? 2 : 3)),
                                },
                                {
                                  default: e.withCtx(() => [
                                    y.$slots[
                                      y.vertical ? 'arrow-down' : 'arrow-right'
                                    ]
                                      ? e.renderSlot(
                                          y.$slots,
                                          y.vertical
                                            ? 'arrow-down'
                                            : 'arrow-right',
                                          { key: 0 }
                                        )
                                      : e.createCommentVNode('', !0),
                                    y.$slots[
                                      y.vertical ? 'arrow-down' : 'arrow-right'
                                    ]
                                      ? e.createCommentVNode('', !0)
                                      : (e.openBlock(),
                                        e.createBlock(
                                          e.resolveDynamicComponent(
                                            y.vertical
                                              ? e.unref(cn)
                                              : e.unref(ln)
                                          ),
                                          { key: 1 }
                                        )),
                                  ]),
                                  _: 3,
                                },
                                8,
                                ['disabled', 'aria-label', 'class']
                              ))
                            : e.createCommentVNode('', !0),
                        ]),
                      ],
                      64
                    )),
              ])
            );
          }
        );
      },
    }),
    Bs = { class: 'dp__calendar_header', role: 'row' },
    Ss = { key: 0, class: 'dp__calendar_header_item', role: 'gridcell' },
    $s = ['aria-label'],
    As = e.createElementVNode(
      'div',
      { class: 'dp__calendar_header_separator' },
      null,
      -1
    ),
    Ns = { key: 0, class: 'dp__calendar_item dp__week_num', role: 'gridcell' },
    Os = { class: 'dp__cell_inner' },
    Es = [
      'id',
      'aria-pressed',
      'aria-disabled',
      'aria-label',
      'data-test',
      'onClick',
      'onTouchend',
      'onKeydown',
      'onMouseenter',
      'onMouseleave',
      'onMousedown',
    ],
    Rs = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'DpCalendar',
      props: {
        mappedDates: { type: Array, default: () => [] },
        instance: { type: Number, default: 0 },
        month: { type: Number, default: 0 },
        year: { type: Number, default: 0 },
        ...Ge,
      },
      emits: [
        'select-date',
        'set-hover-date',
        'handle-scroll',
        'mount',
        'handle-swipe',
        'handle-space',
        'tooltip-open',
        'tooltip-close',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          { buildMultiLevelMatrix: l } = ut(),
          {
            defaultedTransitions: s,
            defaultedConfig: c,
            defaultedAriaLabels: u,
            defaultedMultiCalendars: B,
            defaultedWeekNumbers: m,
            defaultedMultiDates: S,
            defaultedUI: g,
          } = Me(o),
          C = e.ref(null),
          Y = e.ref({ bottom: '', left: '', transform: '' }),
          x = e.ref([]),
          I = e.ref(null),
          p = e.ref(!0),
          $ = e.ref(''),
          P = e.ref({ startX: 0, endX: 0, startY: 0, endY: 0 }),
          z = e.ref([]),
          K = e.ref({ left: '50%' }),
          Z = e.ref(!1),
          O = e.computed(() =>
            o.calendar ? o.calendar(o.mappedDates) : o.mappedDates
          ),
          D = e.computed(() =>
            o.dayNames
              ? Array.isArray(o.dayNames)
                ? o.dayNames
                : o.dayNames(o.locale, +o.weekStart)
              : fl(o.formatLocale, o.locale, +o.weekStart)
          );
        e.onMounted(() => {
          a('mount', { cmp: 'calendar', refs: x }),
            c.value.noSwipe ||
              (I.value &&
                (I.value.addEventListener('touchstart', J, { passive: !1 }),
                I.value.addEventListener('touchend', se, { passive: !1 }),
                I.value.addEventListener('touchmove', h, { passive: !1 }))),
            o.monthChangeOnScroll &&
              I.value &&
              I.value.addEventListener('wheel', f, { passive: !1 });
        });
        const W = (A) =>
            A
              ? o.vertical
                ? 'vNext'
                : 'next'
              : o.vertical
              ? 'vPrevious'
              : 'previous',
          E = (A, fe) => {
            if (o.transitions) {
              const i = Ve(at(j(), o.month, o.year));
              ($.value = $e(Ve(at(j(), A, fe)), i)
                ? s.value[W(!0)]
                : s.value[W(!1)]),
                (p.value = !1),
                e.nextTick(() => {
                  p.value = !0;
                });
            }
          },
          Q = e.computed(() => ({ ...(g.value.calendar ?? {}) })),
          re = e.computed(() => (A) => {
            const fe = hl(A);
            return {
              dp__marker_dot: fe.type === 'dot',
              dp__marker_line: fe.type === 'line',
            };
          }),
          le = e.computed(() => (A) => pe(A, C.value)),
          b = e.computed(() => ({
            dp__calendar: !0,
            dp__calendar_next: B.value.count > 0 && o.instance !== 0,
          })),
          H = e.computed(() => (A) => o.hideOffsetDates ? A.current : !0),
          X = async (A, fe) => {
            const { width: i, height: _ } = A.getBoundingClientRect();
            C.value = fe.value;
            let R = { left: `${i / 2}px` },
              q = -50;
            if ((await e.nextTick(), z.value[0])) {
              const { left: ne, width: T } = z.value[0].getBoundingClientRect();
              ne < 0 &&
                ((R = { left: '0' }), (q = 0), (K.value.left = `${i / 2}px`)),
                window.innerWidth < ne + T &&
                  ((R = { right: '0' }),
                  (q = 0),
                  (K.value.left = `${T - i / 2}px`));
            }
            Y.value = {
              bottom: `${_}px`,
              ...R,
              transform: `translateX(${q}%)`,
            };
          },
          w = async (A, fe, i) => {
            var R, q, ne;
            const _ = Oe(x.value[fe][i]);
            _ &&
              ((R = A.marker) != null &&
              R.customPosition &&
              (ne = (q = A.marker) == null ? void 0 : q.tooltip) != null &&
              ne.length
                ? (Y.value = A.marker.customPosition(_))
                : await X(_, A),
              a('tooltip-open', A.marker));
          },
          G = async (A, fe, i) => {
            var _, R;
            if (Z.value && S.value.enabled && S.value.dragSelect)
              return a('select-date', A);
            a('set-hover-date', A),
              (R = (_ = A.marker) == null ? void 0 : _.tooltip) != null &&
                R.length &&
                (await w(A, fe, i));
          },
          N = (A) => {
            C.value &&
              ((C.value = null),
              (Y.value = JSON.parse(
                JSON.stringify({ bottom: '', left: '', transform: '' })
              )),
              a('tooltip-close', A.marker));
          },
          J = (A) => {
            (P.value.startX = A.changedTouches[0].screenX),
              (P.value.startY = A.changedTouches[0].screenY);
          },
          se = (A) => {
            (P.value.endX = A.changedTouches[0].screenX),
              (P.value.endY = A.changedTouches[0].screenY),
              y();
          },
          h = (A) => {
            o.vertical && !o.inline && A.preventDefault();
          },
          y = () => {
            const A = o.vertical ? 'Y' : 'X';
            Math.abs(P.value[`start${A}`] - P.value[`end${A}`]) > 10 &&
              a(
                'handle-swipe',
                P.value[`start${A}`] > P.value[`end${A}`] ? 'right' : 'left'
              );
          },
          L = (A, fe, i) => {
            A &&
              (Array.isArray(x.value[fe])
                ? (x.value[fe][i] = A)
                : (x.value[fe] = [A])),
              o.arrowNavigation && l(x.value, 'calendar');
          },
          f = (A) => {
            o.monthChangeOnScroll &&
              (A.preventDefault(), a('handle-scroll', A));
          },
          v = (A) =>
            m.value.type === 'local'
              ? pn(A.value, { weekStartsOn: +o.weekStart })
              : m.value.type === 'iso'
              ? mn(A.value)
              : typeof m.value.type == 'function'
              ? m.value.type(A.value)
              : '',
          V = (A) => {
            const fe = A[0];
            return m.value.hideOnOffsetDates
              ? A.some((i) => i.current)
                ? v(fe)
                : ''
              : v(fe);
          },
          d = (A, fe, i = !0) => {
            (i && _a()) ||
              (!i && !_a()) ||
              S.value.enabled ||
              (lt(A, c.value), a('select-date', fe));
          },
          ee = (A) => {
            lt(A, c.value);
          },
          de = (A) => {
            S.value.enabled && S.value.dragSelect
              ? ((Z.value = !0), a('select-date', A))
              : S.value.enabled && a('select-date', A);
          };
        return (
          r({ triggerTransition: E }),
          (A, fe) => (
            e.openBlock(),
            e.createElementBlock(
              'div',
              { class: e.normalizeClass(b.value) },
              [
                e.createElementVNode(
                  'div',
                  {
                    ref_key: 'calendarWrapRef',
                    ref: I,
                    class: e.normalizeClass(Q.value),
                    role: 'grid',
                  },
                  [
                    e.createElementVNode('div', Bs, [
                      A.weekNumbers
                        ? (e.openBlock(),
                          e.createElementBlock(
                            'div',
                            Ss,
                            e.toDisplayString(A.weekNumName),
                            1
                          ))
                        : e.createCommentVNode('', !0),
                      (e.openBlock(!0),
                      e.createElementBlock(
                        e.Fragment,
                        null,
                        e.renderList(D.value, (i, _) => {
                          var R, q;
                          return (
                            e.openBlock(),
                            e.createElementBlock(
                              'div',
                              {
                                key: _,
                                class: 'dp__calendar_header_item',
                                role: 'gridcell',
                                'data-test': 'calendar-header',
                                'aria-label':
                                  (q =
                                    (R = e.unref(u)) == null
                                      ? void 0
                                      : R.weekDay) == null
                                    ? void 0
                                    : q.call(R, _),
                              },
                              [
                                A.$slots['calendar-header']
                                  ? e.renderSlot(A.$slots, 'calendar-header', {
                                      key: 0,
                                      day: i,
                                      index: _,
                                    })
                                  : e.createCommentVNode('', !0),
                                A.$slots['calendar-header']
                                  ? e.createCommentVNode('', !0)
                                  : (e.openBlock(),
                                    e.createElementBlock(
                                      e.Fragment,
                                      { key: 1 },
                                      [
                                        e.createTextVNode(
                                          e.toDisplayString(i),
                                          1
                                        ),
                                      ],
                                      64
                                    )),
                              ],
                              8,
                              $s
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                    As,
                    e.createVNode(
                      e.Transition,
                      { name: $.value, css: !!A.transitions },
                      {
                        default: e.withCtx(() => [
                          p.value
                            ? (e.openBlock(),
                              e.createElementBlock(
                                'div',
                                {
                                  key: 0,
                                  class: 'dp__calendar',
                                  role: 'rowgroup',
                                  onMouseleave:
                                    fe[1] || (fe[1] = (i) => (Z.value = !1)),
                                },
                                [
                                  (e.openBlock(!0),
                                  e.createElementBlock(
                                    e.Fragment,
                                    null,
                                    e.renderList(
                                      O.value,
                                      (i, _) => (
                                        e.openBlock(),
                                        e.createElementBlock(
                                          'div',
                                          {
                                            key: _,
                                            class: 'dp__calendar_row',
                                            role: 'row',
                                          },
                                          [
                                            A.weekNumbers
                                              ? (e.openBlock(),
                                                e.createElementBlock(
                                                  'div',
                                                  Ns,
                                                  [
                                                    e.createElementVNode(
                                                      'div',
                                                      Os,
                                                      e.toDisplayString(
                                                        V(i.days)
                                                      ),
                                                      1
                                                    ),
                                                  ]
                                                ))
                                              : e.createCommentVNode('', !0),
                                            (e.openBlock(!0),
                                            e.createElementBlock(
                                              e.Fragment,
                                              null,
                                              e.renderList(i.days, (R, q) => {
                                                var ne, T, F;
                                                return (
                                                  e.openBlock(),
                                                  e.createElementBlock(
                                                    'div',
                                                    {
                                                      id: e.unref(qa)(R.value),
                                                      ref_for: !0,
                                                      ref: (ie) => L(ie, _, q),
                                                      key: q + _,
                                                      role: 'gridcell',
                                                      class:
                                                        'dp__calendar_item',
                                                      'aria-pressed':
                                                        (R.classData
                                                          .dp__active_date ||
                                                          R.classData
                                                            .dp__range_start ||
                                                          R.classData
                                                            .dp__range_start) ??
                                                        void 0,
                                                      'aria-disabled':
                                                        R.classData
                                                          .dp__cell_disabled ||
                                                        void 0,
                                                      'aria-label':
                                                        (T =
                                                          (ne = e.unref(u)) ==
                                                          null
                                                            ? void 0
                                                            : ne.day) == null
                                                          ? void 0
                                                          : T.call(ne, R),
                                                      tabindex: '0',
                                                      'data-test': R.value,
                                                      onClick: e.withModifiers(
                                                        (ie) => d(ie, R),
                                                        ['prevent']
                                                      ),
                                                      onTouchend: (ie) =>
                                                        d(ie, R, !1),
                                                      onKeydown: (ie) =>
                                                        e.unref(xe)(ie, () =>
                                                          A.$emit(
                                                            'select-date',
                                                            R
                                                          )
                                                        ),
                                                      onMouseenter: (ie) =>
                                                        G(R, _, q),
                                                      onMouseleave: (ie) =>
                                                        N(R),
                                                      onMousedown: (ie) =>
                                                        de(R),
                                                      onMouseup:
                                                        fe[0] ||
                                                        (fe[0] = (ie) =>
                                                          (Z.value = !1)),
                                                    },
                                                    [
                                                      e.createElementVNode(
                                                        'div',
                                                        {
                                                          class:
                                                            e.normalizeClass([
                                                              'dp__cell_inner',
                                                              R.classData,
                                                            ]),
                                                        },
                                                        [
                                                          A.$slots.day &&
                                                          H.value(R)
                                                            ? e.renderSlot(
                                                                A.$slots,
                                                                'day',
                                                                {
                                                                  key: 0,
                                                                  day: +R.text,
                                                                  date: R.value,
                                                                }
                                                              )
                                                            : e.createCommentVNode(
                                                                '',
                                                                !0
                                                              ),
                                                          A.$slots.day
                                                            ? e.createCommentVNode(
                                                                '',
                                                                !0
                                                              )
                                                            : (e.openBlock(),
                                                              e.createElementBlock(
                                                                e.Fragment,
                                                                { key: 1 },
                                                                [
                                                                  e.createTextVNode(
                                                                    e.toDisplayString(
                                                                      R.text
                                                                    ),
                                                                    1
                                                                  ),
                                                                ],
                                                                64
                                                              )),
                                                          R.marker && H.value(R)
                                                            ? (e.openBlock(),
                                                              e.createElementBlock(
                                                                e.Fragment,
                                                                { key: 2 },
                                                                [
                                                                  A.$slots
                                                                    .marker
                                                                    ? e.renderSlot(
                                                                        A.$slots,
                                                                        'marker',
                                                                        {
                                                                          key: 0,
                                                                          marker:
                                                                            R.marker,
                                                                          day: +R.text,
                                                                          date: R.value,
                                                                        }
                                                                      )
                                                                    : (e.openBlock(),
                                                                      e.createElementBlock(
                                                                        'div',
                                                                        {
                                                                          key: 1,
                                                                          class:
                                                                            e.normalizeClass(
                                                                              re.value(
                                                                                R.marker
                                                                              )
                                                                            ),
                                                                          style:
                                                                            e.normalizeStyle(
                                                                              R
                                                                                .marker
                                                                                .color
                                                                                ? {
                                                                                    backgroundColor:
                                                                                      R
                                                                                        .marker
                                                                                        .color,
                                                                                  }
                                                                                : {}
                                                                            ),
                                                                        },
                                                                        null,
                                                                        6
                                                                      )),
                                                                ],
                                                                64
                                                              ))
                                                            : e.createCommentVNode(
                                                                '',
                                                                !0
                                                              ),
                                                          le.value(R.value)
                                                            ? (e.openBlock(),
                                                              e.createElementBlock(
                                                                'div',
                                                                {
                                                                  key: 3,
                                                                  ref_for: !0,
                                                                  ref_key:
                                                                    'activeTooltip',
                                                                  ref: z,
                                                                  class:
                                                                    'dp__marker_tooltip',
                                                                  style:
                                                                    e.normalizeStyle(
                                                                      Y.value
                                                                    ),
                                                                },
                                                                [
                                                                  (F =
                                                                    R.marker) !=
                                                                    null &&
                                                                  F.tooltip
                                                                    ? (e.openBlock(),
                                                                      e.createElementBlock(
                                                                        'div',
                                                                        {
                                                                          key: 0,
                                                                          class:
                                                                            'dp__tooltip_content',
                                                                          onClick:
                                                                            ee,
                                                                        },
                                                                        [
                                                                          (e.openBlock(
                                                                            !0
                                                                          ),
                                                                          e.createElementBlock(
                                                                            e.Fragment,
                                                                            null,
                                                                            e.renderList(
                                                                              R
                                                                                .marker
                                                                                .tooltip,
                                                                              (
                                                                                ie,
                                                                                me
                                                                              ) => (
                                                                                e.openBlock(),
                                                                                e.createElementBlock(
                                                                                  'div',
                                                                                  {
                                                                                    key: me,
                                                                                    class:
                                                                                      'dp__tooltip_text',
                                                                                  },
                                                                                  [
                                                                                    A
                                                                                      .$slots[
                                                                                      'marker-tooltip'
                                                                                    ]
                                                                                      ? e.renderSlot(
                                                                                          A.$slots,
                                                                                          'marker-tooltip',
                                                                                          {
                                                                                            key: 0,
                                                                                            tooltip:
                                                                                              ie,
                                                                                            day: R.value,
                                                                                          }
                                                                                        )
                                                                                      : e.createCommentVNode(
                                                                                          '',
                                                                                          !0
                                                                                        ),
                                                                                    A
                                                                                      .$slots[
                                                                                      'marker-tooltip'
                                                                                    ]
                                                                                      ? e.createCommentVNode(
                                                                                          '',
                                                                                          !0
                                                                                        )
                                                                                      : (e.openBlock(),
                                                                                        e.createElementBlock(
                                                                                          e.Fragment,
                                                                                          {
                                                                                            key: 1,
                                                                                          },
                                                                                          [
                                                                                            e.createElementVNode(
                                                                                              'div',
                                                                                              {
                                                                                                class:
                                                                                                  'dp__tooltip_mark',
                                                                                                style:
                                                                                                  e.normalizeStyle(
                                                                                                    ie.color
                                                                                                      ? {
                                                                                                          backgroundColor:
                                                                                                            ie.color,
                                                                                                        }
                                                                                                      : {}
                                                                                                  ),
                                                                                              },
                                                                                              null,
                                                                                              4
                                                                                            ),
                                                                                            e.createElementVNode(
                                                                                              'div',
                                                                                              null,
                                                                                              e.toDisplayString(
                                                                                                ie.text
                                                                                              ),
                                                                                              1
                                                                                            ),
                                                                                          ],
                                                                                          64
                                                                                        )),
                                                                                  ]
                                                                                )
                                                                              )
                                                                            ),
                                                                            128
                                                                          )),
                                                                          e.createElementVNode(
                                                                            'div',
                                                                            {
                                                                              class:
                                                                                'dp__arrow_bottom_tp',
                                                                              style:
                                                                                e.normalizeStyle(
                                                                                  K.value
                                                                                ),
                                                                            },
                                                                            null,
                                                                            4
                                                                          ),
                                                                        ]
                                                                      ))
                                                                    : e.createCommentVNode(
                                                                        '',
                                                                        !0
                                                                      ),
                                                                ],
                                                                4
                                                              ))
                                                            : e.createCommentVNode(
                                                                '',
                                                                !0
                                                              ),
                                                        ],
                                                        2
                                                      ),
                                                    ],
                                                    40,
                                                    Es
                                                  )
                                                );
                                              }),
                                              128
                                            )),
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                32
                              ))
                            : e.createCommentVNode('', !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ['name', 'css']
                    ),
                  ],
                  2
                ),
              ],
              2
            )
          )
        );
      },
    }),
    tr = (t) => Array.isArray(t),
    _s = (t, r, n, a) => {
      const o = e.ref([]),
        l = e.ref(new Date()),
        s = e.ref(),
        c = () => J(t.isTextInputDate),
        { modelValue: u, calendars: B, time: m, today: S } = Ht(t, r, c),
        {
          defaultedMultiCalendars: g,
          defaultedStartTime: C,
          defaultedRange: Y,
          defaultedConfig: x,
          defaultedTz: I,
          propDates: p,
          defaultedMultiDates: $,
        } = Me(t),
        {
          validateMonthYearInRange: P,
          isDisabled: z,
          isDateRangeAllowed: K,
          checkMinMaxRange: Z,
        } = dt(t),
        {
          updateTimeValues: O,
          getSetDateTime: D,
          setTime: W,
          assignStartTime: E,
          validateTime: Q,
          disabledTimesConfig: re,
        } = er(t, m, u, a),
        le = e.computed(() => (M) => B.value[M] ? B.value[M].month : 0),
        b = e.computed(() => (M) => B.value[M] ? B.value[M].year : 0),
        H = (M) => (!x.value.keepViewOnOffsetClick || M ? !0 : !s.value),
        X = (M, k, U, te = !1) => {
          var ke, Ee;
          H(te) &&
            (B.value[M] || (B.value[M] = { month: 0, year: 0 }),
            (B.value[M].month = Oa(k)
              ? (ke = B.value[M]) == null
                ? void 0
                : ke.month
              : k),
            (B.value[M].year = Oa(U)
              ? (Ee = B.value[M]) == null
                ? void 0
                : Ee.year
              : U));
        },
        w = () => {
          t.autoApply && r('select-date');
        };
      e.onMounted(() => {
        t.shadow ||
          (u.value || (A(), C.value && E(C.value)),
          J(!0),
          t.focusStartDate && t.startDate && A());
      });
      const G = e.computed(() => {
          var M;
          return (M = t.flow) != null && M.length && !t.partialFlow
            ? t.flowStep === t.flow.length
            : !0;
        }),
        N = () => {
          t.autoApply &&
            G.value &&
            r('auto-apply', t.partialFlow ? t.flowStep !== t.flow.length : !1);
        },
        J = (M = !1) => {
          if (u.value)
            return Array.isArray(u.value)
              ? ((o.value = u.value), V(M))
              : y(u.value, M);
          if (g.value.count && M && !t.startDate) return h(j(), M);
        },
        se = () =>
          Array.isArray(u.value) && Y.value.enabled
            ? he(u.value[0]) === he(u.value[1] ?? u.value[0])
            : !1,
        h = (M = new Date(), k = !1) => {
          if (
            ((!g.value.count || !g.value.static || k) && X(0, he(M), ce(M)),
            g.value.count && (!g.value.solo || !u.value || se()))
          )
            for (let U = 1; U < g.value.count; U++) {
              const te = be(j(), {
                  month: le.value(U - 1),
                  year: b.value(U - 1),
                }),
                ke = Jn(te, { months: 1 });
              B.value[U] = { month: he(ke), year: ce(ke) };
            }
        },
        y = (M, k) => {
          h(M),
            W('hours', tt(M)),
            W('minutes', ot(M)),
            W('seconds', Tt(M)),
            g.value.count && k && de();
        },
        L = (M) => {
          if (g.value.count) {
            if (g.value.solo) return 0;
            const k = he(M[0]),
              U = he(M[1]);
            return Math.abs(U - k) < g.value.count ? 0 : 1;
          }
          return 1;
        },
        f = (M, k) => {
          M[1] && Y.value.showLastInRange ? h(M[L(M)], k) : h(M[0], k);
          const U = (te, ke) => [te(M[0]), M[1] ? te(M[1]) : m[ke][1]];
          W('hours', U(tt, 'hours')),
            W('minutes', U(ot, 'minutes')),
            W('seconds', U(Tt, 'seconds'));
        },
        v = (M, k) => {
          if ((Y.value.enabled || t.weekPicker) && !$.value.enabled)
            return f(M, k);
          if ($.value.enabled && k) {
            const U = M[M.length - 1];
            return y(U, k);
          }
        },
        V = (M) => {
          const k = u.value;
          v(k, M), g.value.count && g.value.solo && de();
        },
        d = (M, k) => {
          const U = be(j(), { month: le.value(k), year: b.value(k) }),
            te = M < 0 ? qe(U, 1) : Bt(U, 1);
          P(he(te), ce(te), M < 0, t.preventMinMaxNavigation) &&
            (X(k, he(te), ce(te)),
            r('update-month-year', {
              instance: k,
              month: he(te),
              year: ce(te),
            }),
            g.value.count && !g.value.solo && ee(k),
            n());
        },
        ee = (M) => {
          for (let k = M - 1; k >= 0; k--) {
            const U = Bt(
              be(j(), { month: le.value(k + 1), year: b.value(k + 1) }),
              1
            );
            X(k, he(U), ce(U));
          }
          for (let k = M + 1; k <= g.value.count - 1; k++) {
            const U = qe(
              be(j(), { month: le.value(k - 1), year: b.value(k - 1) }),
              1
            );
            X(k, he(U), ce(U));
          }
        },
        de = () => {
          if (Array.isArray(u.value) && u.value.length === 2) {
            const M = j(j(u.value[1] ? u.value[1] : qe(u.value[0], 1))),
              [k, U] = [he(u.value[0]), ce(u.value[0])],
              [te, ke] = [he(u.value[1]), ce(u.value[1])];
            (k !== te || (k === te && U !== ke)) &&
              g.value.solo &&
              X(1, he(M), ce(M));
          } else
            u.value &&
              !Array.isArray(u.value) &&
              (X(0, he(u.value), ce(u.value)), h(j()));
        },
        A = () => {
          t.startDate &&
            (X(0, he(j(t.startDate)), ce(j(t.startDate))),
            g.value.count && ee(0));
        },
        fe = (M, k) => {
          if (t.monthChangeOnScroll) {
            const U = new Date().getTime() - l.value.getTime(),
              te = Math.abs(M.deltaY);
            let ke = 500;
            te > 1 && (ke = 100),
              te > 100 && (ke = 0),
              U > ke &&
                ((l.value = new Date()),
                d(
                  t.monthChangeOnScroll !== 'inverse' ? -M.deltaY : M.deltaY,
                  k
                ));
          }
        },
        i = (M, k, U = !1) => {
          t.monthChangeOnArrows && t.vertical === U && _(M, k);
        },
        _ = (M, k) => {
          d(M === 'right' ? -1 : 1, k);
        },
        R = (M) => {
          if (p.value.markers) return Qt(M.value, p.value.markers);
        },
        q = (M, k) => {
          switch (t.sixWeeks === !0 ? 'append' : t.sixWeeks) {
            case 'prepend':
              return [!0, !1];
            case 'center':
              return [M == 0, !0];
            case 'fair':
              return [M == 0 || k > M, !0];
            case 'append':
              return [!1, !1];
            default:
              return [!1, !1];
          }
        },
        ne = (M, k, U, te) => {
          if (t.sixWeeks && M.length < 6) {
            const ke = 6 - M.length,
              Ee = (k.getDay() + 7 - te) % 7,
              an = 6 - ((U.getDay() + 7 - te) % 7),
              [qt, Kn] = q(Ee, an);
            for (let vt = 1; vt <= ke; vt++)
              if (Kn ? !!(vt % 2) == qt : qt) {
                const rn = M[0].days[0],
                  Xn = T(We(rn.value, -7), he(k));
                M.unshift({ days: Xn });
              } else {
                const rn = M[M.length - 1],
                  Xn = rn.days[rn.days.length - 1],
                  di = T(We(Xn.value, 1), he(k));
                M.push({ days: di });
              }
          }
          return M;
        },
        T = (M, k) => {
          const U = j(M),
            te = [];
          for (let ke = 0; ke < 7; ke++) {
            const Ee = We(U, ke),
              bt = he(Ee) !== k;
            te.push({
              text: t.hideOffsetDates && bt ? '' : Ee.getDate(),
              value: Ee,
              current: !bt,
              classData: {},
            });
          }
          return te;
        },
        F = (M, k) => {
          const U = [],
            te = new Date(k, M),
            ke = new Date(k, M + 1, 0),
            Ee = t.weekStart,
            bt = Ue(te, { weekStartsOn: Ee }),
            an = (qt) => {
              const Kn = T(qt, M);
              if (
                (U.push({ days: Kn }),
                !U[U.length - 1].days.some((vt) => pe(Ve(vt.value), Ve(ke))))
              ) {
                const vt = We(qt, 7);
                an(vt);
              }
            };
          return an(bt), ne(U, te, ke, Ee);
        },
        ie = (M) => {
          const k = st(j(M.value), m.hours, m.minutes, He());
          r('date-update', k),
            $.value.enabled ? In(k, u, $.value.limit) : (u.value = k),
            a(),
            e.nextTick().then(() => {
              N();
            });
        },
        me = (M) =>
          Y.value.noDisabledRange ? Ia(o.value[0], M).some((U) => z(U)) : !1,
        ze = () => {
          (o.value = u.value ? u.value.slice() : []),
            o.value.length === 2 &&
              !(Y.value.fixedStart || Y.value.fixedEnd) &&
              (o.value = []);
        },
        ue = (M, k) => {
          const U = [j(M.value), We(j(M.value), +Y.value.autoRange)];
          K(U) ? (k && ft(M.value), (o.value = U)) : r('invalid-date', M.value);
        },
        ft = (M) => {
          const k = he(j(M)),
            U = ce(j(M));
          if ((X(0, k, U), g.value.count > 0))
            for (let te = 1; te < g.value.count; te++) {
              const ke = vl(
                be(j(M), { year: b.value(te - 1), month: le.value(te - 1) })
              );
              X(te, ke.month, ke.year);
            }
        },
        et = (M) => {
          if (me(M.value) || !Z(M.value, u.value, Y.value.fixedStart ? 0 : 1))
            return r('invalid-date', M.value);
          o.value = Xa(j(M.value), u, r, Y);
        },
        zt = (M, k) => {
          if ((ze(), Y.value.autoRange)) return ue(M, k);
          if (Y.value.fixedStart || Y.value.fixedEnd) return et(M);
          o.value[0]
            ? Z(j(M.value), u.value) && !me(M.value)
              ? Ce(j(M.value), j(o.value[0]))
                ? (o.value.unshift(j(M.value)), r('range-end', o.value[0]))
                : ((o.value[1] = j(M.value)), r('range-end', o.value[1]))
              : (t.autoApply && r('auto-apply-invalid', M.value),
                r('invalid-date', M.value))
            : ((o.value[0] = j(M.value)), r('range-start', o.value[0]));
        },
        He = (M = !0) =>
          t.enableSeconds
            ? Array.isArray(m.seconds)
              ? M
                ? m.seconds[0]
                : m.seconds[1]
              : m.seconds
            : 0,
        Wt = (M) => {
          o.value[M] = st(o.value[M], m.hours[M], m.minutes[M], He(M !== 1));
        },
        zn = () => {
          var M, k;
          o.value[0] &&
            o.value[1] &&
            +((M = o.value) == null ? void 0 : M[0]) >
              +((k = o.value) == null ? void 0 : k[1]) &&
            (o.value.reverse(),
            r('range-start', o.value[0]),
            r('range-end', o.value[1]));
        },
        nn = () => {
          o.value.length &&
            (o.value[0] && !o.value[1] ? Wt(0) : (Wt(0), Wt(1), a()),
            zn(),
            (u.value = o.value.slice()),
            en(o.value, r, t.autoApply, t.modelAuto));
        },
        Wn = (M, k = !1) => {
          if (z(M.value) || (!M.current && t.hideOffsetDates))
            return r('invalid-date', M.value);
          if (((s.value = JSON.parse(JSON.stringify(M))), !Y.value.enabled))
            return ie(M);
          tr(m.hours) && tr(m.minutes) && !$.value.enabled && (zt(M, k), nn());
        },
        qn = (M, k) => {
          var te;
          X(M, k.month, k.year, !0),
            g.value.count && !g.value.solo && ee(M),
            r('update-month-year', {
              instance: M,
              month: k.month,
              year: k.year,
            }),
            n(g.value.solo ? M : void 0);
          const U =
            (te = t.flow) != null && te.length ? t.flow[t.flowStep] : void 0;
          !k.fromNav && (U === Re.month || U === Re.year) && a();
        },
        Un = (M, k) => {
          Ka({
            value: M,
            modelValue: u,
            range: Y.value.enabled,
            timezone: k ? void 0 : I.value.timezone,
          }),
            w(),
            t.multiCalendars && e.nextTick().then(() => J(!0));
        },
        jn = () => {
          const M = vn(j(), I.value);
          Y.value.enabled
            ? u.value && Array.isArray(u.value) && u.value[0]
              ? (u.value = Ce(M, u.value[0])
                  ? [M, u.value[0]]
                  : [u.value[0], M])
              : (u.value = [M])
            : (u.value = M),
            w();
        },
        Qn = () => {
          if (Array.isArray(u.value))
            if ($.value.enabled) {
              const M = Gn();
              u.value[u.value.length - 1] = D(M);
            } else u.value = u.value.map((M, k) => M && D(M, k));
          else u.value = D(u.value);
          r('time-update');
        },
        Gn = () =>
          Array.isArray(u.value) && u.value.length
            ? u.value[u.value.length - 1]
            : null;
      return {
        calendars: B,
        modelValue: u,
        month: le,
        year: b,
        time: m,
        disabledTimesConfig: re,
        today: S,
        validateTime: Q,
        getCalendarDays: F,
        getMarker: R,
        handleScroll: fe,
        handleSwipe: _,
        handleArrow: i,
        selectDate: Wn,
        updateMonthYear: qn,
        presetDate: Un,
        selectCurrentDate: jn,
        updateTime: (M, k = !0, U = !1) => {
          O(M, k, U, Qn);
        },
        assignMonthAndYear: h,
      };
    },
    Ys = { key: 0 },
    xs = e.defineComponent({
      __name: 'DatePicker',
      props: { ...Ge },
      emits: [
        'tooltip-open',
        'tooltip-close',
        'mount',
        'update:internal-model-value',
        'update-flow-step',
        'reset-flow',
        'auto-apply',
        'focus-menu',
        'select-date',
        'range-start',
        'range-end',
        'invalid-fixed-range',
        'time-update',
        'am-pm-change',
        'time-picker-open',
        'time-picker-close',
        'recalculate-position',
        'update-month-year',
        'auto-apply-invalid',
        'date-update',
        'invalid-date',
        'overlay-toggle',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          {
            calendars: l,
            month: s,
            year: c,
            modelValue: u,
            time: B,
            disabledTimesConfig: m,
            today: S,
            validateTime: g,
            getCalendarDays: C,
            getMarker: Y,
            handleArrow: x,
            handleScroll: I,
            handleSwipe: p,
            selectDate: $,
            updateMonthYear: P,
            presetDate: z,
            selectCurrentDate: K,
            updateTime: Z,
            assignMonthAndYear: O,
          } = _s(o, a, se, h),
          D = e.useSlots(),
          { setHoverDate: W, getDayClassData: E, clearHoverDate: Q } = Zs(u, o),
          { defaultedMultiCalendars: re } = Me(o),
          le = e.ref([]),
          b = e.ref([]),
          H = e.ref(null),
          X = Le(D, 'calendar'),
          w = Le(D, 'monthYear'),
          G = Le(D, 'timePicker'),
          N = (i) => {
            o.shadow || a('mount', i);
          };
        e.watch(
          l,
          () => {
            o.shadow ||
              setTimeout(() => {
                a('recalculate-position');
              }, 0);
          },
          { deep: !0 }
        ),
          e.watch(
            re,
            (i, _) => {
              i.count - _.count > 0 && O();
            },
            { deep: !0 }
          );
        const J = e.computed(
          () => (i) =>
            C(s.value(i), c.value(i)).map((_) => ({
              ..._,
              days: _.days.map(
                (R) => ((R.marker = Y(R)), (R.classData = E(R)), R)
              ),
            }))
        );
        function se(i) {
          var _;
          i || i === 0
            ? (_ = b.value[i]) == null ||
              _.triggerTransition(s.value(i), c.value(i))
            : b.value.forEach((R, q) =>
                R.triggerTransition(s.value(q), c.value(q))
              );
        }
        function h() {
          a('update-flow-step');
        }
        const y = (i, _ = !1) => {
            $(i, _), o.spaceConfirm && a('select-date');
          },
          L = (i, _, R = 0) => {
            var q;
            (q = le.value[R]) == null || q.toggleMonthPicker(i, _);
          },
          f = (i, _, R = 0) => {
            var q;
            (q = le.value[R]) == null || q.toggleYearPicker(i, _);
          },
          v = (i, _, R) => {
            var q;
            (q = H.value) == null || q.toggleTimePicker(i, _, R);
          },
          V = (i, _) => {
            var R;
            if (!o.range) {
              const q = u.value ? u.value : S,
                ne = _ ? new Date(_) : q,
                T = i
                  ? Ue(ne, { weekStartsOn: 1 })
                  : ua(ne, { weekStartsOn: 1 });
              $({
                value: T,
                current: he(ne) === s.value(0),
                text: '',
                classData: {},
              }),
                (R = document.getElementById(qa(T))) == null || R.focus();
            }
          },
          d = (i) => {
            var _;
            (_ = le.value[0]) == null || _.handleMonthYearChange(i, !0);
          },
          ee = (i) => {
            P(0, {
              month: s.value(0),
              year: c.value(0) + (i ? 1 : -1),
              fromNav: !0,
            });
          },
          de = (i, _) => {
            i === Re.time && a(`time-picker-${_ ? 'open' : 'close'}`),
              a('overlay-toggle', { open: _, overlay: i });
          },
          A = (i) => {
            a('overlay-toggle', { open: !1, overlay: i }), a('focus-menu');
          };
        return (
          r({
            clearHoverDate: Q,
            presetDate: z,
            selectCurrentDate: K,
            toggleMonthPicker: L,
            toggleYearPicker: f,
            toggleTimePicker: v,
            handleArrow: x,
            updateMonthYear: P,
            getSidebarProps: () => ({
              modelValue: u,
              month: s,
              year: c,
              time: B,
              updateTime: Z,
              updateMonthYear: P,
              selectDate: $,
              presetDate: z,
            }),
            changeMonth: d,
            changeYear: ee,
            selectWeekDate: V,
          }),
          (i, _) => (
            e.openBlock(),
            e.createElementBlock(
              e.Fragment,
              null,
              [
                e.createVNode(
                  Zt,
                  {
                    'multi-calendars': e.unref(re).count,
                    collapse: i.collapse,
                  },
                  {
                    default: e.withCtx(({ instance: R, index: q }) => [
                      i.disableMonthYearSelect
                        ? e.createCommentVNode('', !0)
                        : (e.openBlock(),
                          e.createBlock(
                            Cs,
                            e.mergeProps(
                              {
                                key: 0,
                                ref: (ne) => {
                                  ne && (le.value[q] = ne);
                                },
                                months: e.unref($a)(
                                  i.formatLocale,
                                  i.locale,
                                  i.monthNameFormat
                                ),
                                years: e.unref(Mn)(
                                  i.yearRange,
                                  i.locale,
                                  i.reverseYears
                                ),
                                month: e.unref(s)(R),
                                year: e.unref(c)(R),
                                instance: R,
                              },
                              i.$props,
                              {
                                onMount:
                                  _[0] ||
                                  (_[0] = (ne) => N(e.unref(wt).header)),
                                onResetFlow:
                                  _[1] ||
                                  (_[1] = (ne) => i.$emit('reset-flow')),
                                onUpdateMonthYear: (ne) => e.unref(P)(R, ne),
                                onOverlayClosed: A,
                                onOverlayOpened:
                                  _[2] ||
                                  (_[2] = (ne) =>
                                    i.$emit('overlay-toggle', {
                                      open: !0,
                                      overlay: ne,
                                    })),
                              }
                            ),
                            e.createSlots({ _: 2 }, [
                              e.renderList(e.unref(w), (ne, T) => ({
                                name: ne,
                                fn: e.withCtx((F) => [
                                  e.renderSlot(
                                    i.$slots,
                                    ne,
                                    e.normalizeProps(e.guardReactiveProps(F))
                                  ),
                                ]),
                              })),
                            ]),
                            1040,
                            [
                              'months',
                              'years',
                              'month',
                              'year',
                              'instance',
                              'onUpdateMonthYear',
                            ]
                          )),
                      e.createVNode(
                        Rs,
                        e.mergeProps(
                          {
                            ref: (ne) => {
                              ne && (b.value[q] = ne);
                            },
                            'mapped-dates': J.value(R),
                            month: e.unref(s)(R),
                            year: e.unref(c)(R),
                            instance: R,
                          },
                          i.$props,
                          {
                            onSelectDate: (ne) => e.unref($)(ne, R !== 1),
                            onHandleSpace: (ne) => y(ne, R !== 1),
                            onSetHoverDate:
                              _[3] || (_[3] = (ne) => e.unref(W)(ne)),
                            onHandleScroll: (ne) => e.unref(I)(ne, R),
                            onHandleSwipe: (ne) => e.unref(p)(ne, R),
                            onMount:
                              _[4] || (_[4] = (ne) => N(e.unref(wt).calendar)),
                            onResetFlow:
                              _[5] || (_[5] = (ne) => i.$emit('reset-flow')),
                            onTooltipOpen:
                              _[6] ||
                              (_[6] = (ne) => i.$emit('tooltip-open', ne)),
                            onTooltipClose:
                              _[7] ||
                              (_[7] = (ne) => i.$emit('tooltip-close', ne)),
                          }
                        ),
                        e.createSlots({ _: 2 }, [
                          e.renderList(e.unref(X), (ne, T) => ({
                            name: ne,
                            fn: e.withCtx((F) => [
                              e.renderSlot(
                                i.$slots,
                                ne,
                                e.normalizeProps(e.guardReactiveProps({ ...F }))
                              ),
                            ]),
                          })),
                        ]),
                        1040,
                        [
                          'mapped-dates',
                          'month',
                          'year',
                          'instance',
                          'onSelectDate',
                          'onHandleSpace',
                          'onHandleScroll',
                          'onHandleSwipe',
                        ]
                      ),
                    ]),
                    _: 3,
                  },
                  8,
                  ['multi-calendars', 'collapse']
                ),
                i.enableTimePicker
                  ? (e.openBlock(),
                    e.createElementBlock('div', Ys, [
                      i.$slots['time-picker']
                        ? e.renderSlot(
                            i.$slots,
                            'time-picker',
                            e.normalizeProps(
                              e.mergeProps(
                                { key: 0 },
                                { time: e.unref(B), updateTime: e.unref(Z) }
                              )
                            )
                          )
                        : (e.openBlock(),
                          e.createBlock(
                            Za,
                            e.mergeProps(
                              { key: 1, ref_key: 'timePickerRef', ref: H },
                              i.$props,
                              {
                                hours: e.unref(B).hours,
                                minutes: e.unref(B).minutes,
                                seconds: e.unref(B).seconds,
                                'internal-model-value': i.internalModelValue,
                                'disabled-times-config': e.unref(m),
                                'validate-time': e.unref(g),
                                onMount:
                                  _[8] ||
                                  (_[8] = (R) => N(e.unref(wt).timePicker)),
                                'onUpdate:hours':
                                  _[9] || (_[9] = (R) => e.unref(Z)(R)),
                                'onUpdate:minutes':
                                  _[10] || (_[10] = (R) => e.unref(Z)(R, !1)),
                                'onUpdate:seconds':
                                  _[11] ||
                                  (_[11] = (R) => e.unref(Z)(R, !1, !0)),
                                onResetFlow:
                                  _[12] ||
                                  (_[12] = (R) => i.$emit('reset-flow')),
                                onOverlayClosed:
                                  _[13] || (_[13] = (R) => de(R, !1)),
                                onOverlayOpened:
                                  _[14] || (_[14] = (R) => de(R, !0)),
                                onAmPmChange:
                                  _[15] ||
                                  (_[15] = (R) => i.$emit('am-pm-change', R)),
                              }
                            ),
                            e.createSlots({ _: 2 }, [
                              e.renderList(e.unref(G), (R, q) => ({
                                name: R,
                                fn: e.withCtx((ne) => [
                                  e.renderSlot(
                                    i.$slots,
                                    R,
                                    e.normalizeProps(e.guardReactiveProps(ne))
                                  ),
                                ]),
                              })),
                            ]),
                            1040,
                            [
                              'hours',
                              'minutes',
                              'seconds',
                              'internal-model-value',
                              'disabled-times-config',
                              'validate-time',
                            ]
                          )),
                    ]))
                  : e.createCommentVNode('', !0),
              ],
              64
            )
          )
        );
      },
    }),
    Vs = (t, r) => {
      const n = e.ref(),
        {
          defaultedMultiCalendars: a,
          defaultedConfig: o,
          defaultedHighlight: l,
          defaultedRange: s,
          propDates: c,
          defaultedFilters: u,
          defaultedMultiDates: B,
        } = Me(t),
        { modelValue: m, year: S, month: g, calendars: C } = Ht(t, r),
        { isDisabled: Y } = dt(t),
        {
          selectYear: x,
          groupedYears: I,
          showYearPicker: p,
          isDisabled: $,
          toggleYearPicker: P,
          handleYearSelect: z,
          handleYear: K,
        } = Ja({
          modelValue: m,
          multiCalendars: a,
          range: s,
          highlight: l,
          calendars: C,
          propDates: c,
          month: g,
          year: S,
          filters: u,
          props: t,
          emit: r,
        }),
        Z = (w, G) =>
          [w, G]
            .map((N) => Ke(N, 'MMMM', { locale: t.formatLocale }))
            .join('-'),
        O = e.computed(
          () => (w) =>
            m.value
              ? Array.isArray(m.value)
                ? m.value.some((G) => Ma(w, G))
                : Ma(m.value, w)
              : !1
        ),
        D = (w) => {
          if (s.value.enabled) {
            if (Array.isArray(m.value)) {
              const G = pe(w, m.value[0]) || pe(w, m.value[1]);
              return Gt(m.value, n.value, w) && !G;
            }
            return !1;
          }
          return !1;
        },
        W = (w, G) => w.quarter === la(G) && w.year === ce(G),
        E = (w) =>
          typeof l.value == 'function'
            ? l.value({ quarter: la(w), year: ce(w) })
            : !!l.value.quarters.find((G) => W(G, w)),
        Q = e.computed(() => (w) => {
          const G = be(new Date(), { year: S.value(w) });
          return hr({ start: Et(G), end: ia(G) }).map((N) => {
            const J = pt(N),
              se = ca(N),
              h = Y(N),
              y = D(J),
              L = E(J);
            return {
              text: Z(J, se),
              value: J,
              active: O.value(J),
              highlighted: L,
              disabled: h,
              isBetween: y,
            };
          });
        }),
        re = (w) => {
          In(w, m, B.value.limit), r('auto-apply', !0);
        },
        le = (w) => {
          (m.value = Fn(m, w, r)), en(m.value, r, t.autoApply, t.modelAuto);
        },
        b = (w) => {
          (m.value = w), r('auto-apply');
        };
      return {
        defaultedConfig: o,
        defaultedMultiCalendars: a,
        groupedYears: I,
        year: S,
        isDisabled: $,
        quarters: Q,
        showYearPicker: p,
        modelValue: m,
        setHoverDate: (w) => {
          n.value = w;
        },
        selectYear: x,
        selectQuarter: (w, G, N) => {
          if (!N)
            return (
              (C.value[G].month = he(ca(w))),
              B.value.enabled ? re(w) : s.value.enabled ? le(w) : b(w)
            );
        },
        toggleYearPicker: P,
        handleYearSelect: z,
        handleYear: K,
      };
    },
    Is = { class: 'dp--quarter-items' },
    Fs = ['data-test', 'disabled', 'onClick', 'onMouseover'],
    Ls = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'QuarterPicker',
      props: { ...Ge },
      emits: [
        'update:internal-model-value',
        'reset-flow',
        'overlay-closed',
        'auto-apply',
        'range-start',
        'range-end',
        'overlay-toggle',
        'update-month-year',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          l = e.useSlots(),
          s = Le(l, 'yearMode'),
          {
            defaultedMultiCalendars: c,
            defaultedConfig: u,
            groupedYears: B,
            year: m,
            isDisabled: S,
            quarters: g,
            modelValue: C,
            showYearPicker: Y,
            setHoverDate: x,
            selectQuarter: I,
            toggleYearPicker: p,
            handleYearSelect: $,
            handleYear: P,
          } = Vs(o, a);
        return (
          r({
            getSidebarProps: () => ({
              modelValue: C,
              year: m,
              selectQuarter: I,
              handleYearSelect: $,
              handleYear: P,
            }),
          }),
          (K, Z) => (
            e.openBlock(),
            e.createBlock(
              Zt,
              {
                'multi-calendars': e.unref(c).count,
                collapse: K.collapse,
                stretch: '',
              },
              {
                default: e.withCtx(({ instance: O }) => [
                  e.createElementVNode(
                    'div',
                    {
                      class: 'dp-quarter-picker-wrap',
                      style: e.normalizeStyle({
                        minHeight: `${e.unref(u).modeHeight}px`,
                      }),
                    },
                    [
                      K.$slots['top-extra']
                        ? e.renderSlot(K.$slots, 'top-extra', {
                            key: 0,
                            value: K.internalModelValue,
                          })
                        : e.createCommentVNode('', !0),
                      e.createElementVNode('div', null, [
                        e.createVNode(
                          Ga,
                          e.mergeProps(K.$props, {
                            items: e.unref(B)(O),
                            instance: O,
                            'show-year-picker': e.unref(Y)[O],
                            year: e.unref(m)(O),
                            'is-disabled': (D) => e.unref(S)(O, D),
                            onHandleYear: (D) => e.unref(P)(O, D),
                            onYearSelect: (D) => e.unref($)(D, O),
                            onToggleYearPicker: (D) =>
                              e.unref(p)(
                                O,
                                D == null ? void 0 : D.flow,
                                D == null ? void 0 : D.show
                              ),
                          }),
                          e.createSlots({ _: 2 }, [
                            e.renderList(e.unref(s), (D, W) => ({
                              name: D,
                              fn: e.withCtx((E) => [
                                e.renderSlot(
                                  K.$slots,
                                  D,
                                  e.normalizeProps(e.guardReactiveProps(E))
                                ),
                              ]),
                            })),
                          ]),
                          1040,
                          [
                            'items',
                            'instance',
                            'show-year-picker',
                            'year',
                            'is-disabled',
                            'onHandleYear',
                            'onYearSelect',
                            'onToggleYearPicker',
                          ]
                        ),
                      ]),
                      e.createElementVNode('div', Is, [
                        (e.openBlock(!0),
                        e.createElementBlock(
                          e.Fragment,
                          null,
                          e.renderList(
                            e.unref(g)(O),
                            (D, W) => (
                              e.openBlock(),
                              e.createElementBlock('div', { key: W }, [
                                e.createElementVNode(
                                  'button',
                                  {
                                    type: 'button',
                                    class: e.normalizeClass([
                                      'dp--qr-btn',
                                      {
                                        'dp--qr-btn-active': D.active,
                                        'dp--qr-btn-between': D.isBetween,
                                        'dp--qr-btn-disabled': D.disabled,
                                        'dp--highlighted': D.highlighted,
                                      },
                                    ]),
                                    'data-test': D.value,
                                    disabled: D.disabled,
                                    onClick: (E) =>
                                      e.unref(I)(D.value, O, D.disabled),
                                    onMouseover: (E) => e.unref(x)(D.value),
                                  },
                                  [
                                    K.$slots.quarter
                                      ? e.renderSlot(K.$slots, 'quarter', {
                                          key: 0,
                                          value: D.value,
                                          text: D.text,
                                        })
                                      : (e.openBlock(),
                                        e.createElementBlock(
                                          e.Fragment,
                                          { key: 1 },
                                          [
                                            e.createTextVNode(
                                              e.toDisplayString(D.text),
                                              1
                                            ),
                                          ],
                                          64
                                        )),
                                  ],
                                  42,
                                  Fs
                                ),
                              ])
                            )
                          ),
                          128
                        )),
                      ]),
                    ],
                    4
                  ),
                ]),
                _: 3,
              },
              8,
              ['multi-calendars', 'collapse']
            )
          )
        );
      },
    }),
    Hs = ['id', 'tabindex', 'role', 'aria-label'],
    zs = { key: 0, class: 'dp--menu-load-container' },
    Ws = [e.createElementVNode('span', { class: 'dp--menu-loader' }, null, -1)],
    qs = { key: 1, class: 'dp--menu-header' },
    Us = { key: 0, class: 'dp__sidebar_left' },
    js = ['data-test', 'onClick', 'onKeydown'],
    Qs = { key: 2, class: 'dp__sidebar_right' },
    Gs = { key: 3, class: 'dp__action_extra' },
    nr = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'DatepickerMenu',
      props: {
        ...Jt,
        shadow: { type: Boolean, default: !1 },
        openOnTop: { type: Boolean, default: !1 },
        internalModelValue: { type: [Date, Array], default: null },
        noOverlayFocus: { type: Boolean, default: !1 },
        collapse: { type: Boolean, default: !1 },
        getInputRect: { type: Function, default: () => ({}) },
        isTextInputDate: { type: Boolean, default: !1 },
      },
      emits: [
        'close-picker',
        'select-date',
        'auto-apply',
        'time-update',
        'flow-step',
        'update-month-year',
        'invalid-select',
        'update:internal-model-value',
        'recalculate-position',
        'invalid-fixed-range',
        'tooltip-open',
        'tooltip-close',
        'time-picker-open',
        'time-picker-close',
        'am-pm-change',
        'range-start',
        'range-end',
        'auto-apply-invalid',
        'date-update',
        'invalid-date',
        'overlay-toggle',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          l = e.ref(null),
          s = e.computed(() => {
            const { openOnTop: T, ...F } = o;
            return {
              ...F,
              flowStep: W.value,
              collapse: o.collapse,
              noOverlayFocus: o.noOverlayFocus,
              menuWrapRef: l.value,
            };
          }),
          { setMenuFocused: c, setShiftKey: u, control: B } = Ua(),
          m = e.useSlots(),
          {
            defaultedTextInput: S,
            defaultedInline: g,
            defaultedConfig: C,
            defaultedUI: Y,
          } = Me(o),
          x = e.ref(null),
          I = e.ref(0),
          p = e.ref(null),
          $ = e.ref(!1),
          P = e.ref(null);
        e.onMounted(() => {
          if (!o.shadow) {
            ($.value = !0), z(), window.addEventListener('resize', z);
            const T = Oe(l);
            if (
              (T && !S.value.enabled && !g.value.enabled && (c(!0), X()), T)
            ) {
              const F = (ie) => {
                C.value.allowPreventDefault && ie.preventDefault(),
                  lt(ie, C.value, !0);
              };
              T.addEventListener('pointerdown', F),
                T.addEventListener('mousedown', F);
            }
          }
        }),
          e.onUnmounted(() => {
            window.removeEventListener('resize', z);
          });
        const z = () => {
            const T = Oe(p);
            T && (I.value = T.getBoundingClientRect().width);
          },
          { arrowRight: K, arrowLeft: Z, arrowDown: O, arrowUp: D } = ut(),
          {
            flowStep: W,
            updateFlowStep: E,
            childMount: Q,
            resetFlow: re,
            handleFlow: le,
          } = ei(o, a, P),
          b = e.computed(() =>
            o.monthPicker
              ? ts
              : o.yearPicker
              ? as
              : o.timePicker
              ? bs
              : o.quarterPicker
              ? Ls
              : xs
          ),
          H = e.computed(() => {
            var ie;
            if (C.value.arrowLeft) return C.value.arrowLeft;
            const T =
                (ie = l.value) == null ? void 0 : ie.getBoundingClientRect(),
              F = o.getInputRect();
            return (F == null ? void 0 : F.width) <
              (I == null ? void 0 : I.value) &&
              (F == null ? void 0 : F.left) <=
                ((T == null ? void 0 : T.left) ?? 0)
              ? `${(F == null ? void 0 : F.width) / 2}px`
              : (F == null ? void 0 : F.right) >=
                  ((T == null ? void 0 : T.right) ?? 0) &&
                (F == null ? void 0 : F.width) < (I == null ? void 0 : I.value)
              ? `${
                  (I == null ? void 0 : I.value) -
                  (F == null ? void 0 : F.width) / 2
                }px`
              : '50%';
          }),
          X = () => {
            const T = Oe(l);
            T && T.focus({ preventScroll: !0 });
          },
          w = e.computed(() => {
            var T;
            return ((T = P.value) == null ? void 0 : T.getSidebarProps()) || {};
          }),
          G = () => {
            o.openOnTop && a('recalculate-position');
          },
          N = Le(m, 'action'),
          J = e.computed(() =>
            o.monthPicker || o.yearPicker
              ? Le(m, 'monthYear')
              : o.timePicker
              ? Le(m, 'timePicker')
              : Le(m, 'shared')
          ),
          se = e.computed(() =>
            o.openOnTop ? 'dp__arrow_bottom' : 'dp__arrow_top'
          ),
          h = e.computed(() => ({
            dp__menu_disabled: o.disabled,
            dp__menu_readonly: o.readonly,
            'dp-menu-loading': o.loading,
          })),
          y = e.computed(() => ({
            dp__menu: !0,
            dp__menu_index: !g.value.enabled,
            dp__relative: g.value.enabled,
            ...(Y.value.menu ?? {}),
          })),
          L = (T) => {
            lt(T, C.value, !0);
          },
          f = () => {
            o.escClose && a('close-picker');
          },
          v = (T) => {
            if (o.arrowNavigation) {
              if (T === Ye.up) return D();
              if (T === Ye.down) return O();
              if (T === Ye.left) return Z();
              if (T === Ye.right) return K();
            } else
              T === Ye.left || T === Ye.up
                ? A('handleArrow', Ye.left, 0, T === Ye.up)
                : A('handleArrow', Ye.right, 0, T === Ye.down);
          },
          V = (T) => {
            u(T.shiftKey),
              !o.disableMonthYearSelect &&
                T.code === ve.tab &&
                T.target.classList.contains('dp__menu') &&
                B.value.shiftKeyInMenu &&
                (T.preventDefault(), lt(T, C.value, !0), a('close-picker'));
          },
          d = () => {
            X(), a('time-picker-close');
          },
          ee = (T) => {
            var F, ie, me;
            (F = P.value) == null || F.toggleTimePicker(!1, !1),
              (ie = P.value) == null || ie.toggleMonthPicker(!1, !1, T),
              (me = P.value) == null || me.toggleYearPicker(!1, !1, T);
          },
          de = (T, F = 0) => {
            var ie, me, ze;
            return T === 'month'
              ? (ie = P.value) == null
                ? void 0
                : ie.toggleMonthPicker(!1, !0, F)
              : T === 'year'
              ? (me = P.value) == null
                ? void 0
                : me.toggleYearPicker(!1, !0, F)
              : T === 'time'
              ? (ze = P.value) == null
                ? void 0
                : ze.toggleTimePicker(!0, !1)
              : ee(F);
          },
          A = (T, ...F) => {
            var ie, me;
            (ie = P.value) != null &&
              ie[T] &&
              ((me = P.value) == null || me[T](...F));
          },
          fe = () => {
            A('selectCurrentDate');
          },
          i = (T, F) => {
            A('presetDate', T, F);
          },
          _ = () => {
            A('clearHoverDate');
          },
          R = (T, F) => {
            A('updateMonthYear', T, F);
          },
          q = (T, F) => {
            T.preventDefault(), v(F);
          },
          ne = (T) => {
            var F, ie, me;
            if ((V(T), T.key === ve.home || T.key === ve.end))
              return A(
                'selectWeekDate',
                T.key === ve.home,
                T.target.getAttribute('id')
              );
            switch (
              ((T.key === ve.pageUp || T.key === ve.pageDown) &&
                (T.shiftKey
                  ? (A('changeYear', T.key === ve.pageUp),
                    (F = Pn(l.value, 'overlay-year')) == null || F.focus())
                  : (A('changeMonth', T.key === ve.pageUp),
                    (ie = Pn(
                      l.value,
                      T.key === ve.pageUp ? 'action-prev' : 'action-next'
                    )) == null || ie.focus()),
                T.target.getAttribute('id') &&
                  ((me = l.value) == null || me.focus({ preventScroll: !0 }))),
              T.key)
            ) {
              case ve.esc:
                return f();
              case ve.arrowLeft:
                return q(T, Ye.left);
              case ve.arrowRight:
                return q(T, Ye.right);
              case ve.arrowUp:
                return q(T, Ye.up);
              case ve.arrowDown:
                return q(T, Ye.down);
              default:
                return;
            }
          };
        return (
          r({ updateMonthYear: R, switchView: de, handleFlow: le }),
          (T, F) => {
            var ie, me, ze;
            return (
              e.openBlock(),
              e.createElementBlock(
                'div',
                {
                  id: T.uid ? `dp-menu-${T.uid}` : void 0,
                  ref_key: 'dpMenuRef',
                  ref: l,
                  tabindex: e.unref(g).enabled ? void 0 : '0',
                  role: e.unref(g).enabled ? void 0 : 'dialog',
                  'aria-label': (ie = T.ariaLabels) == null ? void 0 : ie.menu,
                  class: e.normalizeClass(y.value),
                  style: e.normalizeStyle({ '--dp-arrow-left': H.value }),
                  onMouseleave: _,
                  onClick: L,
                  onKeydown: ne,
                },
                [
                  ((T.disabled || T.readonly) && e.unref(g).enabled) ||
                  T.loading
                    ? (e.openBlock(),
                      e.createElementBlock(
                        'div',
                        { key: 0, class: e.normalizeClass(h.value) },
                        [
                          T.loading
                            ? (e.openBlock(),
                              e.createElementBlock('div', zs, Ws))
                            : e.createCommentVNode('', !0),
                        ],
                        2
                      ))
                    : e.createCommentVNode('', !0),
                  T.$slots['menu-header']
                    ? (e.openBlock(),
                      e.createElementBlock('div', qs, [
                        e.renderSlot(T.$slots, 'menu-header'),
                      ]))
                    : e.createCommentVNode('', !0),
                  !e.unref(g).enabled && !T.teleportCenter
                    ? (e.openBlock(),
                      e.createElementBlock(
                        'div',
                        { key: 2, class: e.normalizeClass(se.value) },
                        null,
                        2
                      ))
                    : e.createCommentVNode('', !0),
                  e.createElementVNode(
                    'div',
                    {
                      ref_key: 'innerMenuRef',
                      ref: p,
                      class: e.normalizeClass({
                        dp__menu_content_wrapper:
                          ((me = T.presetDates) == null ? void 0 : me.length) ||
                          !!T.$slots['left-sidebar'] ||
                          !!T.$slots['right-sidebar'],
                        'dp--menu-content-wrapper-collapsed':
                          t.collapse &&
                          (((ze = T.presetDates) == null
                            ? void 0
                            : ze.length) ||
                            !!T.$slots['left-sidebar'] ||
                            !!T.$slots['right-sidebar']),
                      }),
                      style: e.normalizeStyle({
                        '--dp-menu-width': `${I.value}px`,
                      }),
                    },
                    [
                      T.$slots['left-sidebar']
                        ? (e.openBlock(),
                          e.createElementBlock('div', Us, [
                            e.renderSlot(
                              T.$slots,
                              'left-sidebar',
                              e.normalizeProps(e.guardReactiveProps(w.value))
                            ),
                          ]))
                        : e.createCommentVNode('', !0),
                      T.presetDates.length
                        ? (e.openBlock(),
                          e.createElementBlock(
                            'div',
                            {
                              key: 1,
                              class: e.normalizeClass({
                                'dp--preset-dates-collapsed': t.collapse,
                                'dp--preset-dates': !0,
                              }),
                            },
                            [
                              (e.openBlock(!0),
                              e.createElementBlock(
                                e.Fragment,
                                null,
                                e.renderList(
                                  T.presetDates,
                                  (ue, ft) => (
                                    e.openBlock(),
                                    e.createElementBlock(
                                      e.Fragment,
                                      { key: ft },
                                      [
                                        ue.slot
                                          ? e.renderSlot(T.$slots, ue.slot, {
                                              key: 0,
                                              presetDate: i,
                                              label: ue.label,
                                              value: ue.value,
                                            })
                                          : (e.openBlock(),
                                            e.createElementBlock(
                                              'button',
                                              {
                                                key: 1,
                                                type: 'button',
                                                style: e.normalizeStyle(
                                                  ue.style || {}
                                                ),
                                                class: e.normalizeClass([
                                                  'dp__btn dp--preset-range',
                                                  {
                                                    'dp--preset-range-collapsed':
                                                      t.collapse,
                                                  },
                                                ]),
                                                'data-test':
                                                  ue.testId ?? void 0,
                                                onClick: e.withModifiers(
                                                  (et) => i(ue.value, ue.noTz),
                                                  ['prevent']
                                                ),
                                                onKeydown: (et) =>
                                                  e.unref(xe)(
                                                    et,
                                                    () => i(ue.value, ue.noTz),
                                                    !0
                                                  ),
                                              },
                                              e.toDisplayString(ue.label),
                                              47,
                                              js
                                            )),
                                      ],
                                      64
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            2
                          ))
                        : e.createCommentVNode('', !0),
                      e.createElementVNode(
                        'div',
                        {
                          ref_key: 'calendarWrapperRef',
                          ref: x,
                          class: 'dp__instance_calendar',
                          role: 'document',
                        },
                        [
                          (e.openBlock(),
                          e.createBlock(
                            e.resolveDynamicComponent(b.value),
                            e.mergeProps(
                              { ref_key: 'dynCmpRef', ref: P },
                              s.value,
                              {
                                'flow-step': e.unref(W),
                                onMount: e.unref(Q),
                                onUpdateFlowStep: e.unref(E),
                                onResetFlow: e.unref(re),
                                onFocusMenu: X,
                                onSelectDate:
                                  F[0] ||
                                  (F[0] = (ue) => T.$emit('select-date')),
                                onDateUpdate:
                                  F[1] ||
                                  (F[1] = (ue) => T.$emit('date-update', ue)),
                                onTooltipOpen:
                                  F[2] ||
                                  (F[2] = (ue) => T.$emit('tooltip-open', ue)),
                                onTooltipClose:
                                  F[3] ||
                                  (F[3] = (ue) => T.$emit('tooltip-close', ue)),
                                onAutoApply:
                                  F[4] ||
                                  (F[4] = (ue) => T.$emit('auto-apply', ue)),
                                onRangeStart:
                                  F[5] ||
                                  (F[5] = (ue) => T.$emit('range-start', ue)),
                                onRangeEnd:
                                  F[6] ||
                                  (F[6] = (ue) => T.$emit('range-end', ue)),
                                onInvalidFixedRange:
                                  F[7] ||
                                  (F[7] = (ue) =>
                                    T.$emit('invalid-fixed-range', ue)),
                                onTimeUpdate:
                                  F[8] ||
                                  (F[8] = (ue) => T.$emit('time-update')),
                                onAmPmChange:
                                  F[9] ||
                                  (F[9] = (ue) => T.$emit('am-pm-change', ue)),
                                onTimePickerOpen:
                                  F[10] ||
                                  (F[10] = (ue) =>
                                    T.$emit('time-picker-open', ue)),
                                onTimePickerClose: d,
                                onRecalculatePosition: G,
                                onUpdateMonthYear:
                                  F[11] ||
                                  (F[11] = (ue) =>
                                    T.$emit('update-month-year', ue)),
                                onAutoApplyInvalid:
                                  F[12] ||
                                  (F[12] = (ue) =>
                                    T.$emit('auto-apply-invalid', ue)),
                                onInvalidDate:
                                  F[13] ||
                                  (F[13] = (ue) => T.$emit('invalid-date', ue)),
                                onOverlayToggle:
                                  F[14] ||
                                  (F[14] = (ue) =>
                                    T.$emit('overlay-toggle', ue)),
                                'onUpdate:internalModelValue':
                                  F[15] ||
                                  (F[15] = (ue) =>
                                    T.$emit('update:internal-model-value', ue)),
                              }
                            ),
                            e.createSlots({ _: 2 }, [
                              e.renderList(J.value, (ue, ft) => ({
                                name: ue,
                                fn: e.withCtx((et) => [
                                  e.renderSlot(
                                    T.$slots,
                                    ue,
                                    e.normalizeProps(
                                      e.guardReactiveProps({ ...et })
                                    )
                                  ),
                                ]),
                              })),
                            ]),
                            1040,
                            [
                              'flow-step',
                              'onMount',
                              'onUpdateFlowStep',
                              'onResetFlow',
                            ]
                          )),
                        ],
                        512
                      ),
                      T.$slots['right-sidebar']
                        ? (e.openBlock(),
                          e.createElementBlock('div', Qs, [
                            e.renderSlot(
                              T.$slots,
                              'right-sidebar',
                              e.normalizeProps(e.guardReactiveProps(w.value))
                            ),
                          ]))
                        : e.createCommentVNode('', !0),
                      T.$slots['action-extra']
                        ? (e.openBlock(),
                          e.createElementBlock('div', Gs, [
                            T.$slots['action-extra']
                              ? e.renderSlot(T.$slots, 'action-extra', {
                                  key: 0,
                                  selectCurrentDate: fe,
                                })
                              : e.createCommentVNode('', !0),
                          ]))
                        : e.createCommentVNode('', !0),
                    ],
                    6
                  ),
                  !T.autoApply || e.unref(C).keepActionRow
                    ? (e.openBlock(),
                      e.createBlock(
                        jl,
                        e.mergeProps(
                          { key: 3, 'menu-mount': $.value },
                          s.value,
                          {
                            'calendar-width': I.value,
                            onClosePicker:
                              F[16] ||
                              (F[16] = (ue) => T.$emit('close-picker')),
                            onSelectDate:
                              F[17] || (F[17] = (ue) => T.$emit('select-date')),
                            onInvalidSelect:
                              F[18] ||
                              (F[18] = (ue) => T.$emit('invalid-select')),
                            onSelectNow: fe,
                          }
                        ),
                        e.createSlots({ _: 2 }, [
                          e.renderList(e.unref(N), (ue, ft) => ({
                            name: ue,
                            fn: e.withCtx((et) => [
                              e.renderSlot(
                                T.$slots,
                                ue,
                                e.normalizeProps(
                                  e.guardReactiveProps({ ...et })
                                )
                              ),
                            ]),
                          })),
                        ]),
                        1040,
                        ['menu-mount', 'calendar-width']
                      ))
                    : e.createCommentVNode('', !0),
                ],
                46,
                Hs
              )
            );
          }
        );
      },
    });
  var Nt = ((t) => (
    (t.center = 'center'), (t.left = 'left'), (t.right = 'right'), t
  ))(Nt || {});
  const Ks = ({
      menuRef: t,
      menuRefInner: r,
      inputRef: n,
      pickerWrapperRef: a,
      inline: o,
      emit: l,
      props: s,
      slots: c,
    }) => {
      const { defaultedConfig: u } = Me(s),
        B = e.ref({}),
        m = e.ref(!1),
        S = e.ref({ top: '0', left: '0' }),
        g = e.ref(!1),
        C = e.toRef(s, 'teleportCenter');
      e.watch(C, () => {
        (S.value = JSON.parse(JSON.stringify({}))), K();
      });
      const Y = (w) => {
          if (s.teleport) {
            const G = w.getBoundingClientRect();
            return {
              left: G.left + window.scrollX,
              top: G.top + window.scrollY,
            };
          }
          return { top: 0, left: 0 };
        },
        x = (w, G) => {
          S.value.left = `${w + G - B.value.width}px`;
        },
        I = (w) => {
          S.value.left = `${w}px`;
        },
        p = (w, G) => {
          s.position === Nt.left && I(w),
            s.position === Nt.right && x(w, G),
            s.position === Nt.center &&
              (S.value.left = `${w + G / 2 - B.value.width / 2}px`);
        },
        $ = (w) => {
          const { width: G, height: N } = w.getBoundingClientRect(),
            { top: J, left: se } = s.altPosition ? s.altPosition(w) : Y(w);
          return { top: +J, left: +se, width: G, height: N };
        },
        P = () => {
          (S.value.left = '50%'),
            (S.value.top = '50%'),
            (S.value.transform = 'translate(-50%, -50%)'),
            (S.value.position = 'fixed'),
            delete S.value.opacity;
        },
        z = () => {
          const w = Oe(n),
            { top: G, left: N, transform: J } = s.altPosition(w);
          S.value = { top: `${G}px`, left: `${N}px`, transform: J ?? '' };
        },
        K = (w = !0) => {
          var G;
          if (!o.value.enabled) {
            if (C.value) return P();
            if (s.altPosition !== null) return z();
            if (w) {
              const N = s.teleport
                ? (G = r.value) == null
                  ? void 0
                  : G.$el
                : t.value;
              N && (B.value = N.getBoundingClientRect()),
                l('recalculate-position');
            }
            return re();
          }
        },
        Z = ({ inputEl: w, left: G, width: N }) => {
          window.screen.width > 768 && !m.value && p(G, N), W(w);
        },
        O = (w) => {
          const { top: G, left: N, height: J, width: se } = $(w);
          (S.value.top = `${J + G + +s.offset}px`),
            (g.value = !1),
            m.value || (S.value.left = `${N + se / 2 - B.value.width / 2}px`),
            Z({ inputEl: w, left: N, width: se });
        },
        D = (w) => {
          const { top: G, left: N, width: J } = $(w);
          (S.value.top = `${G - +s.offset - B.value.height}px`),
            (g.value = !0),
            Z({ inputEl: w, left: N, width: J });
        },
        W = (w) => {
          if (s.autoPosition) {
            const { left: G, width: N } = $(w),
              { left: J, right: se } = B.value;
            if (!m.value) {
              if (Math.abs(J) !== Math.abs(se)) {
                if (J <= 0) return (m.value = !0), I(G);
                if (se >= document.documentElement.clientWidth)
                  return (m.value = !0), x(G, N);
              }
              return p(G, N);
            }
          }
        },
        E = () => {
          const w = Oe(n);
          if (w) {
            const { height: G } = B.value,
              { top: N, height: J } = w.getBoundingClientRect(),
              h = window.innerHeight - N - J,
              y = N;
            return G <= h
              ? yt.bottom
              : G > h && G <= y
              ? yt.top
              : h >= y
              ? yt.bottom
              : yt.top;
          }
          return yt.bottom;
        },
        Q = (w) => (E() === yt.bottom ? O(w) : D(w)),
        re = () => {
          const w = Oe(n);
          if (w) return s.autoPosition ? Q(w) : O(w);
        },
        le = function (w) {
          if (w) {
            const G = w.scrollHeight > w.clientHeight,
              J = window.getComputedStyle(w).overflowY.indexOf('hidden') !== -1;
            return G && !J;
          }
          return !0;
        },
        b = function (w) {
          return !w ||
            w === document.body ||
            w.nodeType === Node.DOCUMENT_FRAGMENT_NODE
            ? window
            : le(w)
            ? w
            : b(
                w.assignedSlot && u.value.shadowDom
                  ? w.assignedSlot.parentNode
                  : w.parentNode
              );
        },
        H = (w) => {
          if (w)
            switch (s.position) {
              case Nt.left:
                return { left: 0, transform: 'translateX(0)' };
              case Nt.right:
                return { left: `${w.width}px`, transform: 'translateX(-100%)' };
              default:
                return {
                  left: `${w.width / 2}px`,
                  transform: 'translateX(-50%)',
                };
            }
          return {};
        };
      return {
        openOnTop: g,
        menuStyle: S,
        xCorrect: m,
        setMenuPosition: K,
        getScrollableParent: b,
        shadowRender: (w, G) => {
          var f, v, V;
          const N = document.createElement('div'),
            J = (f = Oe(n)) == null ? void 0 : f.getBoundingClientRect();
          N.setAttribute('id', 'dp--temp-container');
          const se =
            (v = a.value) != null && v.clientWidth ? a.value : document.body;
          se.append(N);
          const h = H(J),
            y = u.value.shadowDom
              ? Object.keys(c).filter((d) =>
                  [
                    'right-sidebar',
                    'left-sidebar',
                    'top-extra',
                    'action-extra',
                  ].includes(d)
                )
              : Object.keys(c),
            L = e.h(
              w,
              {
                ...G,
                shadow: !0,
                style: { opacity: 0, position: 'absolute', ...h },
              },
              Object.fromEntries(y.map((d) => [d, c[d]]))
            );
          e.render(L, N),
            (B.value = (V = L.el) == null ? void 0 : V.getBoundingClientRect()),
            e.render(null, N),
            se.removeChild(N);
        },
      };
    },
    ct = [
      { name: 'clock-icon', use: ['time', 'calendar', 'shared'] },
      {
        name: 'arrow-left',
        use: ['month-year', 'calendar', 'shared', 'year-mode'],
      },
      {
        name: 'arrow-right',
        use: ['month-year', 'calendar', 'shared', 'year-mode'],
      },
      { name: 'arrow-up', use: ['time', 'calendar', 'month-year', 'shared'] },
      { name: 'arrow-down', use: ['time', 'calendar', 'month-year', 'shared'] },
      {
        name: 'calendar-icon',
        use: ['month-year', 'time', 'calendar', 'shared', 'year-mode'],
      },
      { name: 'day', use: ['calendar', 'shared'] },
      {
        name: 'month-overlay-value',
        use: ['calendar', 'month-year', 'shared'],
      },
      {
        name: 'year-overlay-value',
        use: ['calendar', 'month-year', 'shared', 'year-mode'],
      },
      { name: 'year-overlay', use: ['month-year', 'shared'] },
      { name: 'month-overlay', use: ['month-year', 'shared'] },
      { name: 'month-overlay-header', use: ['month-year', 'shared'] },
      { name: 'year-overlay-header', use: ['month-year', 'shared'] },
      { name: 'hours-overlay-value', use: ['calendar', 'time', 'shared'] },
      { name: 'hours-overlay-header', use: ['calendar', 'time', 'shared'] },
      { name: 'minutes-overlay-value', use: ['calendar', 'time', 'shared'] },
      { name: 'minutes-overlay-header', use: ['calendar', 'time', 'shared'] },
      { name: 'seconds-overlay-value', use: ['calendar', 'time', 'shared'] },
      { name: 'seconds-overlay-header', use: ['calendar', 'time', 'shared'] },
      { name: 'hours', use: ['calendar', 'time', 'shared'] },
      { name: 'minutes', use: ['calendar', 'time', 'shared'] },
      { name: 'month', use: ['calendar', 'month-year', 'shared'] },
      { name: 'year', use: ['calendar', 'month-year', 'shared', 'year-mode'] },
      { name: 'action-buttons', use: ['action'] },
      { name: 'action-preview', use: ['action'] },
      { name: 'calendar-header', use: ['calendar', 'shared'] },
      { name: 'marker-tooltip', use: ['calendar', 'shared'] },
      { name: 'action-extra', use: ['menu'] },
      { name: 'time-picker-overlay', use: ['calendar', 'time', 'shared'] },
      { name: 'am-pm-button', use: ['calendar', 'time', 'shared'] },
      { name: 'left-sidebar', use: ['menu'] },
      { name: 'right-sidebar', use: ['menu'] },
      { name: 'month-year', use: ['month-year', 'shared'] },
      { name: 'time-picker', use: ['menu', 'shared'] },
      { name: 'action-row', use: ['action'] },
      { name: 'marker', use: ['calendar', 'shared'] },
      { name: 'quarter', use: ['shared'] },
      { name: 'top-extra', use: ['shared', 'month-year'] },
      { name: 'tp-inline-arrow-up', use: ['shared', 'time'] },
      { name: 'tp-inline-arrow-down', use: ['shared', 'time'] },
      { name: 'menu-header', use: ['menu'] },
    ],
    Xs = [
      { name: 'trigger' },
      { name: 'input-icon' },
      { name: 'clear-icon' },
      { name: 'dp-input' },
    ],
    Js = {
      all: () => ct,
      monthYear: () => ct.filter((t) => t.use.includes('month-year')),
      input: () => Xs,
      timePicker: () => ct.filter((t) => t.use.includes('time')),
      action: () => ct.filter((t) => t.use.includes('action')),
      calendar: () => ct.filter((t) => t.use.includes('calendar')),
      menu: () => ct.filter((t) => t.use.includes('menu')),
      shared: () => ct.filter((t) => t.use.includes('shared')),
      yearMode: () => ct.filter((t) => t.use.includes('year-mode')),
    },
    Le = (t, r, n) => {
      const a = [];
      return (
        Js[r]().forEach((o) => {
          t[o.name] && a.push(o.name);
        }),
        n != null &&
          n.length &&
          n.forEach((o) => {
            o.slot && a.push(o.slot);
          }),
        a
      );
    },
    Lt = (t) => {
      const r = e.computed(
          () => (a) => t.value ? (a ? t.value.open : t.value.close) : ''
        ),
        n = e.computed(
          () => (a) =>
            t.value
              ? a
                ? t.value.menuAppearTop
                : t.value.menuAppearBottom
              : ''
        );
      return {
        transitionName: r,
        showTransition: !!t.value,
        menuTransition: n,
      };
    },
    Ht = (t, r, n) => {
      const { defaultedRange: a, defaultedTz: o } = Me(t),
        l = j(Fe(j(), o.value.timezone)),
        s = e.ref([{ month: he(l), year: ce(l) }]),
        c = (g) => {
          const C = { hours: tt(l), minutes: ot(l), seconds: 0 };
          return a.value.enabled ? [C[g], C[g]] : C[g];
        },
        u = e.reactive({
          hours: c('hours'),
          minutes: c('minutes'),
          seconds: c('seconds'),
        });
      e.watch(
        a,
        (g, C) => {
          g.enabled !== C.enabled &&
            ((u.hours = c('hours')),
            (u.minutes = c('minutes')),
            (u.seconds = c('seconds')));
        },
        { deep: !0 }
      );
      const B = e.computed({
          get: () => t.internalModelValue,
          set: (g) => {
            !t.readonly && !t.disabled && r('update:internal-model-value', g);
          },
        }),
        m = e.computed(() => (g) => s.value[g] ? s.value[g].month : 0),
        S = e.computed(() => (g) => s.value[g] ? s.value[g].year : 0);
      return (
        e.watch(
          B,
          (g, C) => {
            n && JSON.stringify(g ?? {}) !== JSON.stringify(C ?? {}) && n();
          },
          { deep: !0 }
        ),
        { calendars: s, time: u, modelValue: B, month: m, year: S, today: l }
      );
    },
    Zs = (t, r) => {
      const {
          defaultedMultiCalendars: n,
          defaultedMultiDates: a,
          defaultedUI: o,
          defaultedHighlight: l,
          defaultedTz: s,
          propDates: c,
          defaultedRange: u,
        } = Me(r),
        { isDisabled: B } = dt(r),
        m = e.ref(null),
        S = e.ref(Fe(new Date(), s.value.timezone)),
        g = (f) => {
          (!f.current && r.hideOffsetDates) || (m.value = f.value);
        },
        C = () => {
          m.value = null;
        },
        Y = (f) =>
          Array.isArray(t.value) && u.value.enabled && t.value[0] && m.value
            ? f
              ? $e(m.value, t.value[0])
              : Ce(m.value, t.value[0])
            : !0,
        x = (f, v) => {
          const V = () =>
              t.value ? (v ? t.value[0] || null : t.value[1]) : null,
            d = t.value && Array.isArray(t.value) ? V() : null;
          return pe(j(f.value), d);
        },
        I = (f) => {
          const v = Array.isArray(t.value) ? t.value[0] : null;
          return f ? !Ce(m.value ?? null, v) : !0;
        },
        p = (f, v = !0) =>
          (u.value.enabled || r.weekPicker) &&
          Array.isArray(t.value) &&
          t.value.length === 2
            ? r.hideOffsetDates && !f.current
              ? !1
              : pe(j(f.value), t.value[v ? 0 : 1])
            : u.value.enabled
            ? (x(f, v) && I(v)) ||
              (pe(f.value, Array.isArray(t.value) ? t.value[0] : null) && Y(v))
            : !1,
        $ = (f, v) => {
          if (Array.isArray(t.value) && t.value[0] && t.value.length === 1) {
            const V = pe(f.value, m.value);
            return v
              ? $e(t.value[0], f.value) && V
              : Ce(t.value[0], f.value) && V;
          }
          return !1;
        },
        P = (f) =>
          !t.value || (r.hideOffsetDates && !f.current)
            ? !1
            : u.value.enabled
            ? r.modelAuto && Array.isArray(t.value)
              ? pe(f.value, t.value[0] ? t.value[0] : S.value)
              : !1
            : a.value.enabled && Array.isArray(t.value)
            ? t.value.some((v) => pe(v, f.value))
            : pe(f.value, t.value ? t.value : S.value),
        z = (f) => {
          if (u.value.autoRange || r.weekPicker) {
            if (m.value) {
              if (r.hideOffsetDates && !f.current) return !1;
              const v = We(m.value, +u.value.autoRange),
                V = nt(j(m.value), r.weekStart);
              return r.weekPicker ? pe(V[1], j(f.value)) : pe(v, j(f.value));
            }
            return !1;
          }
          return !1;
        },
        K = (f) => {
          if (u.value.autoRange || r.weekPicker) {
            if (m.value) {
              const v = We(m.value, +u.value.autoRange);
              if (r.hideOffsetDates && !f.current) return !1;
              const V = nt(j(m.value), r.weekStart);
              return r.weekPicker
                ? $e(f.value, V[0]) && Ce(f.value, V[1])
                : $e(f.value, m.value) && Ce(f.value, v);
            }
            return !1;
          }
          return !1;
        },
        Z = (f) => {
          if (u.value.autoRange || r.weekPicker) {
            if (m.value) {
              if (r.hideOffsetDates && !f.current) return !1;
              const v = nt(j(m.value), r.weekStart);
              return r.weekPicker ? pe(v[0], f.value) : pe(m.value, f.value);
            }
            return !1;
          }
          return !1;
        },
        O = (f) => Gt(t.value, m.value, f.value),
        D = () =>
          r.modelAuto && Array.isArray(r.internalModelValue)
            ? !!r.internalModelValue[0]
            : !1,
        W = () => (r.modelAuto ? Aa(r.internalModelValue) : !0),
        E = (f) => {
          if (r.weekPicker) return !1;
          const v = u.value.enabled ? !p(f) && !p(f, !1) : !0;
          return (
            !B(f.value) && !P(f) && !(!f.current && r.hideOffsetDates) && v
          );
        },
        Q = (f) => (u.value.enabled ? (r.modelAuto ? D() && P(f) : !1) : P(f)),
        re = (f) => (l.value ? wl(f.value, c.value.highlight) : !1),
        le = (f) => {
          const v = B(f.value);
          return (
            v &&
            (typeof l.value == 'function'
              ? !l.value(f.value, v)
              : !l.value.options.highlightDisabled)
          );
        },
        b = (f) => {
          var v;
          return typeof l.value == 'function'
            ? l.value(f.value)
            : (v = l.value.weekdays) == null
            ? void 0
            : v.includes(f.value.getDay());
        },
        H = (f) =>
          (u.value.enabled || r.weekPicker) &&
          (!(n.value.count > 0) || f.current) &&
          W() &&
          !(!f.current && r.hideOffsetDates) &&
          !P(f)
            ? O(f)
            : !1,
        X = (f) => {
          const { isRangeStart: v, isRangeEnd: V } = J(f),
            d = u.value.enabled ? v || V : !1;
          return {
            dp__cell_offset: !f.current,
            dp__pointer:
              !r.disabled && !(!f.current && r.hideOffsetDates) && !B(f.value),
            dp__cell_disabled: B(f.value),
            dp__cell_highlight:
              !le(f) &&
              (re(f) || b(f)) &&
              !Q(f) &&
              !d &&
              !Z(f) &&
              !(H(f) && r.weekPicker) &&
              !V,
            dp__cell_highlight_active: !le(f) && (re(f) || b(f)) && Q(f),
            dp__today: !r.noToday && pe(f.value, S.value) && f.current,
            'dp--past': Ce(f.value, S.value),
            'dp--future': $e(f.value, S.value),
          };
        },
        w = (f) => ({ dp__active_date: Q(f), dp__date_hover: E(f) }),
        G = (f) => {
          if (t.value && !Array.isArray(t.value)) {
            const v = nt(t.value, r.weekStart);
            return {
              ...h(f),
              dp__range_start: pe(v[0], f.value),
              dp__range_end: pe(v[1], f.value),
              dp__range_between_week: $e(f.value, v[0]) && Ce(f.value, v[1]),
            };
          }
          return { ...h(f) };
        },
        N = (f) => {
          if (t.value && Array.isArray(t.value)) {
            const v = nt(t.value[0], r.weekStart),
              V = t.value[1] ? nt(t.value[1], r.weekStart) : [];
            return {
              ...h(f),
              dp__range_start: pe(v[0], f.value) || pe(V[0], f.value),
              dp__range_end: pe(v[1], f.value) || pe(V[1], f.value),
              dp__range_between_week:
                ($e(f.value, v[0]) && Ce(f.value, v[1])) ||
                ($e(f.value, V[0]) && Ce(f.value, V[1])),
              dp__range_between: $e(f.value, v[1]) && Ce(f.value, V[0]),
            };
          }
          return { ...h(f) };
        },
        J = (f) => {
          const v = n.value.count > 0 ? f.current && p(f) && W() : p(f) && W(),
            V =
              n.value.count > 0
                ? f.current && p(f, !1) && W()
                : p(f, !1) && W();
          return { isRangeStart: v, isRangeEnd: V };
        },
        se = (f) => {
          const { isRangeStart: v, isRangeEnd: V } = J(f);
          return {
            dp__range_start: v,
            dp__range_end: V,
            dp__range_between: H(f),
            dp__date_hover: pe(f.value, m.value) && !v && !V && !r.weekPicker,
            dp__date_hover_start: $(f, !0),
            dp__date_hover_end: $(f, !1),
          };
        },
        h = (f) => ({
          ...se(f),
          dp__cell_auto_range: K(f),
          dp__cell_auto_range_start: Z(f),
          dp__cell_auto_range_end: z(f),
        }),
        y = (f) =>
          u.value.enabled
            ? u.value.autoRange
              ? h(f)
              : r.modelAuto
              ? { ...w(f), ...se(f) }
              : r.weekPicker
              ? N(f)
              : se(f)
            : r.weekPicker
            ? G(f)
            : w(f);
      return {
        setHoverDate: g,
        clearHoverDate: C,
        getDayClassData: (f) =>
          r.hideOffsetDates && !f.current
            ? {}
            : {
                ...X(f),
                ...y(f),
                [r.dayClass ? r.dayClass(f.value, r.internalModelValue) : '']:
                  !0,
                ...(o.value.calendarCell ?? {}),
              },
      };
    },
    dt = (t) => {
      const {
          defaultedFilters: r,
          defaultedRange: n,
          propDates: a,
          defaultedMultiDates: o,
        } = Me(t),
        l = (b) =>
          a.value.disabledDates
            ? typeof a.value.disabledDates == 'function'
              ? a.value.disabledDates(j(b))
              : !!Qt(b, a.value.disabledDates)
            : !1,
        s = (b) =>
          a.value.maxDate
            ? t.yearPicker
              ? ce(b) > ce(a.value.maxDate)
              : $e(b, a.value.maxDate)
            : !1,
        c = (b) =>
          a.value.minDate
            ? t.yearPicker
              ? ce(b) < ce(a.value.minDate)
              : Ce(b, a.value.minDate)
            : !1,
        u = (b) => {
          const H = s(b),
            X = c(b),
            w = l(b),
            N = r.value.months.map((L) => +L).includes(he(b)),
            J = t.disabledWeekDays.length
              ? t.disabledWeekDays.some((L) => +L === oo(b))
              : !1,
            se = C(b),
            h = ce(b),
            y = h < +t.yearRange[0] || h > +t.yearRange[1];
          return !(H || X || w || N || y || J || se);
        },
        B = (b, H) =>
          Ce(...it(a.value.minDate, b, H)) || pe(...it(a.value.minDate, b, H)),
        m = (b, H) =>
          $e(...it(a.value.maxDate, b, H)) || pe(...it(a.value.maxDate, b, H)),
        S = (b, H, X) => {
          let w = !1;
          return (
            a.value.maxDate && X && m(b, H) && (w = !0),
            a.value.minDate && !X && B(b, H) && (w = !0),
            w
          );
        },
        g = (b, H, X, w) => {
          let G = !1;
          return (
            w && (a.value.minDate || a.value.maxDate)
              ? a.value.minDate && a.value.maxDate
                ? (G = S(b, H, X))
                : ((a.value.minDate && B(b, H)) ||
                    (a.value.maxDate && m(b, H))) &&
                  (G = !0)
              : (G = !0),
            G
          );
        },
        C = (b) =>
          Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length
            ? !0
            : a.value.allowedDates
            ? !Qt(b, a.value.allowedDates)
            : !1,
        Y = (b) => !u(b),
        x = (b) =>
          n.value.noDisabledRange
            ? !sa({ start: b[0], end: b[1] }).some((X) => Y(X))
            : !0,
        I = (b) => {
          if (b) {
            const H = ce(b);
            return H >= +t.yearRange[0] && H <= t.yearRange[1];
          }
          return !0;
        },
        p = (b, H) =>
          !!(
            Array.isArray(b) &&
            b[H] &&
            (n.value.maxRange || n.value.minRange) &&
            I(b[H])
          ),
        $ = (b, H, X = 0) => {
          if (p(H, X) && I(b)) {
            const w = aa(b, H[X]),
              G = Ia(H[X], b),
              N = G.length === 1 ? 0 : G.filter((se) => Y(se)).length,
              J = Math.abs(w) - (n.value.minMaxRawRange ? 0 : N);
            if (n.value.minRange && n.value.maxRange)
              return J >= +n.value.minRange && J <= +n.value.maxRange;
            if (n.value.minRange) return J >= +n.value.minRange;
            if (n.value.maxRange) return J <= +n.value.maxRange;
          }
          return !0;
        },
        P = () =>
          !t.enableTimePicker ||
          t.monthPicker ||
          t.yearPicker ||
          t.ignoreTimeValidation,
        z = (b) =>
          Array.isArray(b)
            ? [b[0] ? On(b[0]) : null, b[1] ? On(b[1]) : null]
            : On(b),
        K = (b, H, X) =>
          b.find((w) =>
            +w.hours === tt(H) && w.minutes === '*'
              ? !0
              : +w.minutes === ot(H) && +w.hours === tt(H)
          ) && X,
        Z = (b, H, X) => {
          const [w, G] = b,
            [N, J] = H;
          return !K(w, N, X) && !K(G, J, X) && X;
        },
        O = (b, H) => {
          const X = Array.isArray(H) ? H : [H];
          return Array.isArray(t.disabledTimes)
            ? Array.isArray(t.disabledTimes[0])
              ? Z(t.disabledTimes, X, b)
              : !X.some((w) => K(t.disabledTimes, w, b))
            : b;
        },
        D = (b, H) => {
          const X = Array.isArray(H)
              ? [kt(H[0]), H[1] ? kt(H[1]) : void 0]
              : kt(H),
            w = !t.disabledTimes(X);
          return b && w;
        },
        W = (b, H) =>
          t.disabledTimes
            ? Array.isArray(t.disabledTimes)
              ? O(H, b)
              : D(H, b)
            : H,
        E = (b) => {
          let H = !0;
          if (!b || P()) return !0;
          const X = !a.value.minDate && !a.value.maxDate ? z(b) : b;
          return (
            (t.maxTime || a.value.maxDate) &&
              (H = za(t.maxTime, a.value.maxDate, 'max', Ne(X), H)),
            (t.minTime || a.value.minDate) &&
              (H = za(t.minTime, a.value.minDate, 'min', Ne(X), H)),
            W(b, H)
          );
        },
        Q = (b) => {
          if (!t.monthPicker) return !0;
          let H = !0;
          const X = j(Qe(b));
          if (a.value.minDate && a.value.maxDate) {
            const w = j(Qe(a.value.minDate)),
              G = j(Qe(a.value.maxDate));
            return ($e(X, w) && Ce(X, G)) || pe(X, w) || pe(X, G);
          }
          if (a.value.minDate) {
            const w = j(Qe(a.value.minDate));
            H = $e(X, w) || pe(X, w);
          }
          if (a.value.maxDate) {
            const w = j(Qe(a.value.maxDate));
            H = Ce(X, w) || pe(X, w);
          }
          return H;
        },
        re = e.computed(
          () => (b) => !t.enableTimePicker || t.ignoreTimeValidation ? !0 : E(b)
        ),
        le = e.computed(
          () => (b) =>
            t.monthPicker
              ? Array.isArray(b) && (n.value.enabled || o.value.enabled)
                ? !b.filter((X) => !Q(X)).length
                : Q(b)
              : !0
        );
      return {
        isDisabled: Y,
        validateDate: u,
        validateMonthYearInRange: g,
        isDateRangeAllowed: x,
        checkMinMaxRange: $,
        isValidTime: E,
        isTimeValid: re,
        isMonthValid: le,
      };
    },
    tn = () => {
      const t = e.computed(() => (a, o) => a == null ? void 0 : a.includes(o)),
        r = e.computed(() => (a, o) => a.count ? (a.solo ? !0 : o === 0) : !0),
        n = e.computed(
          () => (a, o) => a.count ? (a.solo ? !0 : o === a.count - 1) : !0
        );
      return { hideNavigationButtons: t, showLeftIcon: r, showRightIcon: n };
    },
    ei = (t, r, n) => {
      const a = e.ref(0),
        o = e.reactive({
          [wt.timePicker]: !t.enableTimePicker || t.timePicker || t.monthPicker,
          [wt.calendar]: !1,
          [wt.header]: !1,
        }),
        l = e.computed(() => t.monthPicker || t.timePicker),
        s = (S) => {
          var g;
          if ((g = t.flow) != null && g.length) {
            if (!S && l.value) return m();
            (o[S] = !0), Object.keys(o).filter((C) => !o[C]).length || m();
          }
        },
        c = () => {
          var S, g;
          (S = t.flow) != null &&
            S.length &&
            a.value !== -1 &&
            ((a.value += 1), r('flow-step', a.value), m()),
            ((g = t.flow) == null ? void 0 : g.length) === a.value &&
              e.nextTick().then(() => u());
        },
        u = () => {
          a.value = -1;
        },
        B = (S, g, ...C) => {
          var Y, x;
          t.flow[a.value] === S &&
            n.value &&
            ((x = (Y = n.value)[g]) == null || x.call(Y, ...C));
        },
        m = (S = 0) => {
          S && (a.value += S),
            B(Re.month, 'toggleMonthPicker', !0),
            B(Re.year, 'toggleYearPicker', !0),
            B(Re.calendar, 'toggleTimePicker', !1, !0),
            B(Re.time, 'toggleTimePicker', !0, !0);
          const g = t.flow[a.value];
          (g === Re.hours || g === Re.minutes || g === Re.seconds) &&
            B(g, 'toggleTimePicker', !0, !0, g);
        };
      return {
        childMount: s,
        updateFlowStep: c,
        resetFlow: u,
        handleFlow: m,
        flowStep: a,
      };
    },
    ti = { key: 1, class: 'dp__input_wrap' },
    ni = [
      'id',
      'name',
      'inputmode',
      'placeholder',
      'disabled',
      'readonly',
      'required',
      'value',
      'autocomplete',
      'aria-disabled',
      'aria-invalid',
    ],
    ai = { key: 2, class: 'dp--clear-btn' },
    ri = ['aria-label'],
    oi = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'DatepickerInput',
      props: {
        isMenuOpen: { type: Boolean, default: !1 },
        inputValue: { type: String, default: '' },
        ...Jt,
      },
      emits: [
        'clear',
        'open',
        'update:input-value',
        'set-input-date',
        'close',
        'select-date',
        'set-empty-date',
        'toggle',
        'focus-prev',
        'focus',
        'blur',
        'real-blur',
        'text-input',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          {
            defaultedTextInput: l,
            defaultedAriaLabels: s,
            defaultedInline: c,
            defaultedConfig: u,
            defaultedRange: B,
            defaultedMultiDates: m,
            defaultedUI: S,
            getDefaultPattern: g,
            getDefaultStartTime: C,
          } = Me(o),
          { checkMinMaxRange: Y } = dt(o),
          x = e.ref(),
          I = e.ref(null),
          p = e.ref(!1),
          $ = e.ref(!1),
          P = e.ref(!1),
          z = e.ref(null),
          K = e.computed(() => ({
            dp__pointer: !o.disabled && !o.readonly && !l.value.enabled,
            dp__disabled: o.disabled,
            dp__input_readonly: !l.value.enabled,
            dp__input: !0,
            dp__input_icon_pad: !o.hideInputIcon,
            dp__input_valid: typeof o.state == 'boolean' ? o.state : !1,
            dp__input_invalid: typeof o.state == 'boolean' ? !o.state : !1,
            dp__input_focus: p.value || o.isMenuOpen,
            dp__input_reg: !l.value.enabled,
            ...(S.value.input ?? {}),
          })),
          Z = () => {
            a('set-input-date', null),
              o.clearable &&
                o.autoApply &&
                (a('set-empty-date'), (x.value = null));
          },
          O = (h) => {
            const y = C();
            return kl(
              h,
              l.value.format ?? g(),
              y ?? Fa({}, o.enableSeconds),
              o.inputValue,
              P.value,
              o.formatLocale
            );
          },
          D = (h) => {
            const { rangeSeparator: y } = l.value,
              [L, f] = h.split(`${y}`);
            if (L) {
              const v = O(L.trim()),
                V = f ? O(f.trim()) : null;
              if (Pt(v, V)) return;
              const d = v && V ? [v, V] : [v];
              Y(V, d, 0) && (x.value = v ? d : null);
            }
          },
          W = () => {
            P.value = !0;
          },
          E = (h) => {
            if (B.value.enabled) D(h);
            else if (m.value.enabled) {
              const y = h.split(';');
              x.value = y.map((L) => O(L.trim())).filter((L) => L);
            } else x.value = O(h);
          },
          Q = (h) => {
            var L;
            const y =
              typeof h == 'string'
                ? h
                : (L = h.target) == null
                ? void 0
                : L.value;
            y !== ''
              ? (l.value.openMenu && !o.isMenuOpen && a('open'),
                E(y),
                a('set-input-date', x.value))
              : Z(),
              (P.value = !1),
              a('update:input-value', y),
              a('text-input', h, x.value);
          },
          re = (h) => {
            l.value.enabled
              ? (E(h.target.value),
                l.value.enterSubmit && $n(x.value) && o.inputValue !== ''
                  ? (a('set-input-date', x.value, !0), (x.value = null))
                  : l.value.enterSubmit &&
                    o.inputValue === '' &&
                    ((x.value = null), a('clear')))
              : H(h);
          },
          le = (h, y) => {
            var L;
            z.value &&
              y &&
              !$.value &&
              (h.preventDefault(),
              ($.value = !0),
              (L = z.value) == null || L.focus()),
              l.value.enabled && l.value.tabSubmit && E(h.target.value),
              l.value.tabSubmit && $n(x.value) && o.inputValue !== ''
                ? (a('set-input-date', x.value, !0, !0), (x.value = null))
                : l.value.tabSubmit &&
                  o.inputValue === '' &&
                  ((x.value = null), a('clear', !0));
          },
          b = () => {
            (p.value = !0),
              a('focus'),
              e.nextTick().then(() => {
                var h;
                l.value.enabled &&
                  l.value.selectOnFocus &&
                  ((h = I.value) == null || h.select());
              });
          },
          H = (h) => {
            if (
              (h.preventDefault(),
              lt(h, u.value, !0),
              l.value.enabled && l.value.openMenu && !c.value.input)
            ) {
              if (l.value.openMenu === 'open' && !o.isMenuOpen)
                return a('open');
              if (l.value.openMenu === 'toggle') return a('toggle');
            } else l.value.enabled || a('toggle');
          },
          X = () => {
            a('real-blur'),
              (p.value = !1),
              (!o.isMenuOpen || (c.value.enabled && c.value.input)) &&
                a('blur'),
              o.autoApply &&
                l.value.enabled &&
                x.value &&
                !o.isMenuOpen &&
                (a('set-input-date', x.value),
                a('select-date'),
                (x.value = null));
          },
          w = (h) => {
            lt(h, u.value, !0), a('clear');
          },
          G = (h, y) => {
            if (
              (h.key === 'Tab' && le(h, y),
              h.key === 'Enter' && re(h),
              !l.value.enabled)
            ) {
              if (h.code === 'Tab') return;
              h.preventDefault();
            }
          },
          N = () => {
            var h;
            (h = I.value) == null || h.focus({ preventScroll: !0 });
          },
          J = (h) => {
            x.value = h;
          },
          se = (h) => {
            h.key === ve.tab && (($.value = !1), le(h));
          };
        return (
          r({ focusInput: N, setParsedDate: J }),
          (h, y) => {
            var L, f;
            return (
              e.openBlock(),
              e.createElementBlock('div', { onClick: H }, [
                h.$slots.trigger && !h.$slots['dp-input'] && !e.unref(c).enabled
                  ? e.renderSlot(h.$slots, 'trigger', { key: 0 })
                  : e.createCommentVNode('', !0),
                !h.$slots.trigger && (!e.unref(c).enabled || e.unref(c).input)
                  ? (e.openBlock(),
                    e.createElementBlock('div', ti, [
                      h.$slots['dp-input'] &&
                      !h.$slots.trigger &&
                      (!e.unref(c).enabled ||
                        (e.unref(c).enabled && e.unref(c).input))
                        ? e.renderSlot(h.$slots, 'dp-input', {
                            key: 0,
                            value: t.inputValue,
                            isMenuOpen: t.isMenuOpen,
                            onInput: Q,
                            onEnter: re,
                            onTab: le,
                            onClear: w,
                            onBlur: X,
                            onKeypress: G,
                            onPaste: W,
                            onFocus: b,
                            openMenu: () => h.$emit('open'),
                            closeMenu: () => h.$emit('close'),
                            toggleMenu: () => h.$emit('toggle'),
                          })
                        : e.createCommentVNode('', !0),
                      h.$slots['dp-input']
                        ? e.createCommentVNode('', !0)
                        : (e.openBlock(),
                          e.createElementBlock(
                            'input',
                            {
                              key: 1,
                              id: h.uid ? `dp-input-${h.uid}` : void 0,
                              ref_key: 'inputRef',
                              ref: I,
                              'data-test': 'dp-input',
                              name: h.name,
                              class: e.normalizeClass(K.value),
                              inputmode: e.unref(l).enabled ? 'text' : 'none',
                              placeholder: h.placeholder,
                              disabled: h.disabled,
                              readonly: h.readonly,
                              required: h.required,
                              value: t.inputValue,
                              autocomplete: h.autocomplete,
                              'aria-disabled': h.disabled || void 0,
                              'aria-invalid': h.state === !1 ? !0 : void 0,
                              onInput: Q,
                              onBlur: X,
                              onFocus: b,
                              onKeypress: G,
                              onKeydown: y[0] || (y[0] = (v) => G(v, !0)),
                              onPaste: W,
                            },
                            null,
                            42,
                            ni
                          )),
                      e.createElementVNode(
                        'div',
                        { onClick: y[3] || (y[3] = (v) => a('toggle')) },
                        [
                          h.$slots['input-icon'] && !h.hideInputIcon
                            ? (e.openBlock(),
                              e.createElementBlock(
                                'span',
                                {
                                  key: 0,
                                  class: 'dp__input_icon',
                                  onClick: y[1] || (y[1] = (v) => a('toggle')),
                                },
                                [e.renderSlot(h.$slots, 'input-icon')]
                              ))
                            : e.createCommentVNode('', !0),
                          !h.$slots['input-icon'] &&
                          !h.hideInputIcon &&
                          !h.$slots['dp-input']
                            ? (e.openBlock(),
                              e.createBlock(
                                e.unref(Ie),
                                {
                                  key: 1,
                                  'aria-label':
                                    (L = e.unref(s)) == null
                                      ? void 0
                                      : L.calendarIcon,
                                  class: 'dp__input_icon dp__input_icons',
                                  onClick: y[2] || (y[2] = (v) => a('toggle')),
                                },
                                null,
                                8,
                                ['aria-label']
                              ))
                            : e.createCommentVNode('', !0),
                        ]
                      ),
                      h.$slots['clear-icon'] &&
                      t.inputValue &&
                      h.clearable &&
                      !h.disabled &&
                      !h.readonly
                        ? (e.openBlock(),
                          e.createElementBlock('span', ai, [
                            e.renderSlot(h.$slots, 'clear-icon', { clear: w }),
                          ]))
                        : e.createCommentVNode('', !0),
                      h.clearable &&
                      !h.$slots['clear-icon'] &&
                      t.inputValue &&
                      !h.disabled &&
                      !h.readonly
                        ? (e.openBlock(),
                          e.createElementBlock(
                            'button',
                            {
                              key: 3,
                              ref_key: 'clearBtnRef',
                              ref: z,
                              'aria-label':
                                (f = e.unref(s)) == null
                                  ? void 0
                                  : f.clearInput,
                              class: 'dp--clear-btn',
                              type: 'button',
                              onBlur: y[4] || (y[4] = (v) => ($.value = !1)),
                              onKeydown:
                                y[5] ||
                                (y[5] = (v) =>
                                  e.unref(xe)(v, () => w(v), !0, se)),
                              onClick:
                                y[6] ||
                                (y[6] = e.withModifiers(
                                  (v) => w(v),
                                  ['prevent']
                                )),
                            },
                            [
                              e.createVNode(e.unref(mt), {
                                class: 'dp__input_icons',
                                'data-test': 'clear-icon',
                              }),
                            ],
                            40,
                            ri
                          ))
                        : e.createCommentVNode('', !0),
                    ]))
                  : e.createCommentVNode('', !0),
              ])
            );
          }
        );
      },
    }),
    li = typeof window < 'u' ? window : void 0,
    Ln = () => {},
    si = (t) => (e.getCurrentScope() ? (e.onScopeDispose(t), !0) : !1),
    ii = (t, r, n, a) => {
      if (!t) return Ln;
      let o = Ln;
      const l = e.watch(
          () => e.unref(t),
          (c) => {
            o(),
              c &&
                (c.addEventListener(r, n, a),
                (o = () => {
                  c.removeEventListener(r, n, a), (o = Ln);
                }));
          },
          { immediate: !0, flush: 'post' }
        ),
        s = () => {
          l(), o();
        };
      return si(s), s;
    },
    ui = (t, r, n, a = {}) => {
      const { window: o = li, event: l = 'pointerdown' } = a;
      return o
        ? ii(
            o,
            l,
            (c) => {
              const u = Oe(t),
                B = Oe(r);
              !u ||
                !B ||
                u === c.target ||
                c.composedPath().includes(u) ||
                c.composedPath().includes(B) ||
                n(c);
            },
            { passive: !0 }
          )
        : void 0;
    },
    ci = e.defineComponent({
      compatConfig: { MODE: 3 },
      __name: 'VueDatePicker',
      props: { ...Jt },
      emits: [
        'update:model-value',
        'update:model-timezone-value',
        'text-submit',
        'closed',
        'cleared',
        'open',
        'focus',
        'blur',
        'internal-model-change',
        'recalculate-position',
        'flow-step',
        'update-month-year',
        'invalid-select',
        'invalid-fixed-range',
        'tooltip-open',
        'tooltip-close',
        'time-picker-open',
        'time-picker-close',
        'am-pm-change',
        'range-start',
        'range-end',
        'date-update',
        'invalid-date',
        'overlay-toggle',
        'text-input',
      ],
      setup(t, { expose: r, emit: n }) {
        const a = n,
          o = t,
          l = e.useSlots(),
          s = e.ref(!1),
          c = e.toRef(o, 'modelValue'),
          u = e.toRef(o, 'timezone'),
          B = e.ref(null),
          m = e.ref(null),
          S = e.ref(null),
          g = e.ref(!1),
          C = e.ref(null),
          Y = e.ref(!1),
          x = e.ref(!1),
          I = e.ref(!1),
          p = e.ref(!1),
          { setMenuFocused: $, setShiftKey: P } = Ua(),
          { clearArrowNav: z } = ut(),
          { validateDate: K, isValidTime: Z } = dt(o),
          {
            defaultedTransitions: O,
            defaultedTextInput: D,
            defaultedInline: W,
            defaultedConfig: E,
            defaultedRange: Q,
            defaultedMultiDates: re,
          } = Me(o),
          { menuTransition: le, showTransition: b } = Lt(O);
        e.onMounted(() => {
          f(o.modelValue),
            e.nextTick().then(() => {
              if (!W.value.enabled) {
                const k = se(C.value);
                k == null || k.addEventListener('scroll', R),
                  window == null || window.addEventListener('resize', q);
              }
            }),
            W.value.enabled && (s.value = !0),
            window == null || window.addEventListener('keyup', ne),
            window == null || window.addEventListener('keydown', T);
        }),
          e.onUnmounted(() => {
            if (!W.value.enabled) {
              const k = se(C.value);
              k == null || k.removeEventListener('scroll', R),
                window == null || window.removeEventListener('resize', q);
            }
            window == null || window.removeEventListener('keyup', ne),
              window == null || window.removeEventListener('keydown', T);
          });
        const H = Le(l, 'all', o.presetDates),
          X = Le(l, 'input');
        e.watch(
          [c, u],
          () => {
            f(c.value);
          },
          { deep: !0 }
        );
        const {
            openOnTop: w,
            menuStyle: G,
            xCorrect: N,
            setMenuPosition: J,
            getScrollableParent: se,
            shadowRender: h,
          } = Ks({
            menuRef: B,
            menuRefInner: m,
            inputRef: S,
            pickerWrapperRef: C,
            inline: W,
            emit: a,
            props: o,
            slots: l,
          }),
          {
            inputValue: y,
            internalModelValue: L,
            parseExternalModelValue: f,
            emitModelValue: v,
            formatInputValue: V,
            checkBeforeEmit: d,
          } = zl(a, o, g),
          ee = e.computed(() => ({
            dp__main: !0,
            dp__theme_dark: o.dark,
            dp__theme_light: !o.dark,
            dp__flex_display: W.value.enabled,
            'dp--flex-display-collapsed': I.value,
            dp__flex_display_with_input: W.value.input,
          })),
          de = e.computed(() =>
            o.dark ? 'dp__theme_dark' : 'dp__theme_light'
          ),
          A = e.computed(() =>
            o.teleport
              ? {
                  to: typeof o.teleport == 'boolean' ? 'body' : o.teleport,
                  disabled: !o.teleport || W.value.enabled,
                }
              : {}
          ),
          fe = e.computed(() => ({ class: 'dp__outer_menu_wrap' })),
          i = e.computed(
            () =>
              W.value.enabled &&
              (o.timePicker || o.monthPicker || o.yearPicker || o.quarterPicker)
          ),
          _ = () => {
            var k, U;
            return (U = (k = S.value) == null ? void 0 : k.$el) == null
              ? void 0
              : U.getBoundingClientRect();
          },
          R = () => {
            s.value && (E.value.closeOnScroll ? He() : J());
          },
          q = () => {
            var U;
            s.value && J();
            const k =
              (U = m.value) == null
                ? void 0
                : U.$el.getBoundingClientRect().width;
            I.value = document.body.offsetWidth <= k;
          },
          ne = (k) => {
            k.key === 'Tab' &&
              !W.value.enabled &&
              !o.teleport &&
              E.value.tabOutClosesMenu &&
              (C.value.contains(document.activeElement) || He()),
              (x.value = k.shiftKey);
          },
          T = (k) => {
            x.value = k.shiftKey;
          },
          F = () => {
            !o.disabled &&
              !o.readonly &&
              (h(nr, o),
              J(!1),
              (s.value = !0),
              s.value && a('open'),
              s.value || zt(),
              f(o.modelValue));
          },
          ie = () => {
            var k;
            (y.value = ''),
              zt(),
              (k = S.value) == null || k.setParsedDate(null),
              a('update:model-value', null),
              a('update:model-timezone-value', null),
              a('cleared'),
              E.value.closeOnClearValue && He();
          },
          me = () => {
            const k = L.value;
            return !k || (!Array.isArray(k) && K(k))
              ? !0
              : Array.isArray(k)
              ? re.value.enabled || (k.length === 2 && K(k[0]) && K(k[1]))
                ? !0
                : Q.value.partialRange && !o.timePicker
                ? K(k[0])
                : !1
              : !1;
          },
          ze = () => {
            d() && me() ? (v(), He()) : a('invalid-select', L.value);
          },
          ue = (k) => {
            ft(), v(), E.value.closeOnAutoApply && !k && He();
          },
          ft = () => {
            S.value && D.value.enabled && S.value.setParsedDate(L.value);
          },
          et = (k = !1) => {
            o.autoApply &&
              Z(L.value) &&
              me() &&
              (Q.value.enabled && Array.isArray(L.value)
                ? (Q.value.partialRange || L.value.length === 2) && ue(k)
                : ue(k));
          },
          zt = () => {
            D.value.enabled || (L.value = null);
          },
          He = () => {
            W.value.enabled ||
              (s.value &&
                ((s.value = !1),
                (N.value = !1),
                $(!1),
                P(!1),
                z(),
                a('closed'),
                y.value && f(c.value)),
              zt(),
              a('blur'));
          },
          Wt = (k, U, te = !1) => {
            if (!k) {
              L.value = null;
              return;
            }
            const ke = Array.isArray(k) ? !k.some((bt) => !K(bt)) : K(k),
              Ee = Z(k);
            ke &&
              Ee &&
              ((p.value = !0),
              (L.value = k),
              U && ((Y.value = te), ze(), a('text-submit')),
              e.nextTick().then(() => {
                p.value = !1;
              }));
          },
          zn = () => {
            o.autoApply && Z(L.value) && v(), ft();
          },
          nn = () => (s.value ? He() : F()),
          Wn = (k) => {
            L.value = k;
          },
          qn = () => {
            D.value.enabled && ((g.value = !0), V()), a('focus');
          },
          Un = () => {
            if (D.value.enabled && ((g.value = !1), f(o.modelValue), Y.value)) {
              const k = yl(C.value, x.value);
              k == null || k.focus();
            }
            a('blur');
          },
          jn = (k) => {
            m.value &&
              m.value.updateMonthYear(0, {
                month: Na(k.month),
                year: Na(k.year),
              });
          },
          Qn = (k) => {
            f(k ?? o.modelValue);
          },
          Gn = (k, U) => {
            var te;
            (te = m.value) == null || te.switchView(k, U);
          },
          ar = (k) =>
            E.value.onClickOutside ? E.value.onClickOutside(k) : He(),
          M = (k = 0) => {
            var U;
            (U = m.value) == null || U.handleFlow(k);
          };
        return (
          ui(B, S, () => ar(me)),
          r({
            closeMenu: He,
            selectDate: ze,
            clearValue: ie,
            openMenu: F,
            onScroll: R,
            formatInputValue: V,
            updateInternalModelValue: Wn,
            setMonthYear: jn,
            parseModel: Qn,
            switchView: Gn,
            toggleMenu: nn,
            handleFlow: M,
            dpWrapMenuRef: B,
          }),
          (k, U) => (
            e.openBlock(),
            e.createElementBlock(
              'div',
              {
                ref_key: 'pickerWrapperRef',
                ref: C,
                class: e.normalizeClass(ee.value),
                'data-datepicker-instance': '',
              },
              [
                e.createVNode(
                  oi,
                  e.mergeProps(
                    {
                      ref_key: 'inputRef',
                      ref: S,
                      'input-value': e.unref(y),
                      'onUpdate:inputValue':
                        U[0] ||
                        (U[0] = (te) => (e.isRef(y) ? (y.value = te) : null)),
                      'is-menu-open': s.value,
                    },
                    k.$props,
                    {
                      onClear: ie,
                      onOpen: F,
                      onSetInputDate: Wt,
                      onSetEmptyDate: e.unref(v),
                      onSelectDate: ze,
                      onToggle: nn,
                      onClose: He,
                      onFocus: qn,
                      onBlur: Un,
                      onRealBlur: U[1] || (U[1] = (te) => (g.value = !1)),
                      onTextInput:
                        U[2] || (U[2] = (te) => k.$emit('text-input', te)),
                    }
                  ),
                  e.createSlots({ _: 2 }, [
                    e.renderList(e.unref(X), (te, ke) => ({
                      name: te,
                      fn: e.withCtx((Ee) => [
                        e.renderSlot(
                          k.$slots,
                          te,
                          e.normalizeProps(e.guardReactiveProps(Ee))
                        ),
                      ]),
                    })),
                  ]),
                  1040,
                  ['input-value', 'is-menu-open', 'onSetEmptyDate']
                ),
                (e.openBlock(),
                e.createBlock(
                  e.resolveDynamicComponent(k.teleport ? e.Teleport : 'div'),
                  e.normalizeProps(e.guardReactiveProps(A.value)),
                  {
                    default: e.withCtx(() => [
                      e.createVNode(
                        e.Transition,
                        {
                          name: e.unref(le)(e.unref(w)),
                          css: e.unref(b) && !e.unref(W).enabled,
                        },
                        {
                          default: e.withCtx(() => [
                            s.value
                              ? (e.openBlock(),
                                e.createElementBlock(
                                  'div',
                                  e.mergeProps(
                                    {
                                      key: 0,
                                      ref_key: 'dpWrapMenuRef',
                                      ref: B,
                                    },
                                    fe.value,
                                    {
                                      class: {
                                        'dp--menu-wrapper': !e.unref(W).enabled,
                                      },
                                      style: e.unref(W).enabled
                                        ? void 0
                                        : e.unref(G),
                                    }
                                  ),
                                  [
                                    e.createVNode(
                                      nr,
                                      e.mergeProps(
                                        { ref_key: 'dpMenuRef', ref: m },
                                        k.$props,
                                        {
                                          'internal-model-value': e.unref(L),
                                          'onUpdate:internalModelValue':
                                            U[3] ||
                                            (U[3] = (te) =>
                                              e.isRef(L)
                                                ? (L.value = te)
                                                : null),
                                          class: {
                                            [de.value]: !0,
                                            'dp--menu-wrapper': k.teleport,
                                          },
                                          'open-on-top': e.unref(w),
                                          'no-overlay-focus': i.value,
                                          collapse: I.value,
                                          'get-input-rect': _,
                                          'is-text-input-date': p.value,
                                          onClosePicker: He,
                                          onSelectDate: ze,
                                          onAutoApply: et,
                                          onTimeUpdate: zn,
                                          onFlowStep:
                                            U[4] ||
                                            (U[4] = (te) =>
                                              k.$emit('flow-step', te)),
                                          onUpdateMonthYear:
                                            U[5] ||
                                            (U[5] = (te) =>
                                              k.$emit('update-month-year', te)),
                                          onInvalidSelect:
                                            U[6] ||
                                            (U[6] = (te) =>
                                              k.$emit(
                                                'invalid-select',
                                                e.unref(L)
                                              )),
                                          onAutoApplyInvalid:
                                            U[7] ||
                                            (U[7] = (te) =>
                                              k.$emit('invalid-select', te)),
                                          onInvalidFixedRange:
                                            U[8] ||
                                            (U[8] = (te) =>
                                              k.$emit(
                                                'invalid-fixed-range',
                                                te
                                              )),
                                          onRecalculatePosition: e.unref(J),
                                          onTooltipOpen:
                                            U[9] ||
                                            (U[9] = (te) =>
                                              k.$emit('tooltip-open', te)),
                                          onTooltipClose:
                                            U[10] ||
                                            (U[10] = (te) =>
                                              k.$emit('tooltip-close', te)),
                                          onTimePickerOpen:
                                            U[11] ||
                                            (U[11] = (te) =>
                                              k.$emit('time-picker-open', te)),
                                          onTimePickerClose:
                                            U[12] ||
                                            (U[12] = (te) =>
                                              k.$emit('time-picker-close', te)),
                                          onAmPmChange:
                                            U[13] ||
                                            (U[13] = (te) =>
                                              k.$emit('am-pm-change', te)),
                                          onRangeStart:
                                            U[14] ||
                                            (U[14] = (te) =>
                                              k.$emit('range-start', te)),
                                          onRangeEnd:
                                            U[15] ||
                                            (U[15] = (te) =>
                                              k.$emit('range-end', te)),
                                          onDateUpdate:
                                            U[16] ||
                                            (U[16] = (te) =>
                                              k.$emit('date-update', te)),
                                          onInvalidDate:
                                            U[17] ||
                                            (U[17] = (te) =>
                                              k.$emit('invalid-date', te)),
                                          onOverlayToggle:
                                            U[18] ||
                                            (U[18] = (te) =>
                                              k.$emit('overlay-toggle', te)),
                                        }
                                      ),
                                      e.createSlots({ _: 2 }, [
                                        e.renderList(e.unref(H), (te, ke) => ({
                                          name: te,
                                          fn: e.withCtx((Ee) => [
                                            e.renderSlot(
                                              k.$slots,
                                              te,
                                              e.normalizeProps(
                                                e.guardReactiveProps({ ...Ee })
                                              )
                                            ),
                                          ]),
                                        })),
                                      ]),
                                      1040,
                                      [
                                        'internal-model-value',
                                        'class',
                                        'open-on-top',
                                        'no-overlay-focus',
                                        'collapse',
                                        'is-text-input-date',
                                        'onRecalculatePosition',
                                      ]
                                    ),
                                  ],
                                  16
                                ))
                              : e.createCommentVNode('', !0),
                          ]),
                          _: 3,
                        },
                        8,
                        ['name', 'css']
                      ),
                    ]),
                    _: 3,
                  },
                  16
                )),
              ],
              2
            )
          )
        );
      },
    }),
    Hn = (() => {
      const t = ci;
      return (
        (t.install = (r) => {
          r.component('Vue3DatePicker', t);
        }),
        t
      );
    })();
  return (
    Object.entries(
      Object.freeze(
        Object.defineProperty(
          { __proto__: null, default: Hn },
          Symbol.toStringTag,
          { value: 'Module' }
        )
      )
    ).forEach(([t, r]) => {
      t !== 'default' && (Hn[t] = r);
    }),
    Hn
  );
})(window.BX.Vue3);

export { VueDatePicker };
