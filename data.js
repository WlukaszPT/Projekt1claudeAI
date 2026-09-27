window.APP_DATA = {
  BASE_BALANCE: 18450.32,
  FIXED_COSTS: 2380,

  EXPENSE_CATEGORIES: [
    "Mieszkanie i media",
    "Jedzenie",
    "Transport",
    "Subskrypcje",
    "Rozrywka",
    "Koszty stałe",
    "Inne",
  ],

  CATEGORY_COLORS: {
    "Mieszkanie i media": "#3b82f6",
    "Jedzenie": "#22c55e",
    "Transport": "#f7931a",
    "Subskrypcje": "#a855f7",
    "Rozrywka": "#f43f5e",
    "Inne": "#64748b",
  },

  INITIAL_MONTHLY: [
    { month: "Kwiecień", income: 6200, expense: 4300 },
    { month: "Maj", income: 6200, expense: 4750 },
    { month: "Czerwiec", income: 6500, expense: 4100 },
    { month: "Lipiec", income: 6200, expense: 5200 },
    { month: "Sierpień", income: 6800, expense: 4600 },
    { month: "Wrzesień", income: 7100, expense: 4900 },
  ],

  MONTHLY_CATEGORY_BREAKDOWN: {
    "Kwiecień": [
      { category: "Mieszkanie i media", amount: 1700 },
      { category: "Jedzenie", amount: 1050 },
      { category: "Transport", amount: 480 },
      { category: "Subskrypcje", amount: 160 },
      { category: "Rozrywka", amount: 420 },
      { category: "Inne", amount: 490 },
    ],
    "Maj": [
      { category: "Mieszkanie i media", amount: 1750 },
      { category: "Jedzenie", amount: 1150 },
      { category: "Transport", amount: 500 },
      { category: "Subskrypcje", amount: 170 },
      { category: "Rozrywka", amount: 480 },
      { category: "Inne", amount: 700 },
    ],
    "Czerwiec": [
      { category: "Mieszkanie i media", amount: 1700 },
      { category: "Jedzenie", amount: 1000 },
      { category: "Transport", amount: 450 },
      { category: "Subskrypcje", amount: 160 },
      { category: "Rozrywka", amount: 390 },
      { category: "Inne", amount: 400 },
    ],
    "Lipiec": [
      { category: "Mieszkanie i media", amount: 1800 },
      { category: "Jedzenie", amount: 1300 },
      { category: "Transport", amount: 600 },
      { category: "Subskrypcje", amount: 180 },
      { category: "Rozrywka", amount: 700 },
      { category: "Inne", amount: 620 },
    ],
    "Sierpień": [
      { category: "Mieszkanie i media", amount: 1800 },
      { category: "Jedzenie", amount: 1150 },
      { category: "Transport", amount: 520 },
      { category: "Subskrypcje", amount: 180 },
      { category: "Rozrywka", amount: 480 },
      { category: "Inne", amount: 470 },
    ],
    "Wrzesień": [
      { category: "Mieszkanie i media", amount: 1800 },
      { category: "Jedzenie", amount: 1300 },
      { category: "Transport", amount: 600 },
      { category: "Subskrypcje", amount: 200 },
      { category: "Rozrywka", amount: 550 },
      { category: "Inne", amount: 450 },
    ],
  },

  INITIAL_GOALS: [
    { id: 1, name: "Fundusz awaryjny", target: 20000, saved: 12500 },
    { id: 2, name: "Wakacje", target: 6000, saved: 2400 },
    { id: 3, name: "Nowy laptop", target: 5000, saved: 5000 },
  ],

  INITIAL_TRANSACTIONS: [
    { date: "26.09.2026", desc: "Wypłata wynagrodzenia", category: "Wpływy", amount: 7100 },
    { date: "24.09.2026", desc: "Czynsz + media", category: "Mieszkanie i media", amount: -1800 },
    { date: "22.09.2026", desc: "Zakupy spożywcze — Lidl", category: "Jedzenie", amount: -186.42 },
    { date: "20.09.2026", desc: "Abonament Netflix + Spotify", category: "Subskrypcje", amount: -63.98 },
    { date: "18.09.2026", desc: "Paliwo", category: "Transport", amount: -220 },
    { date: "15.09.2026", desc: "Kolacja na mieście", category: "Rozrywka", amount: -145 },
    { date: "12.09.2026", desc: "Zwrot za wspólny wyjazd", category: "Wpływy", amount: 250 },
    { date: "05.09.2026", desc: "Rata ubezpieczenia", category: "Koszty stałe", amount: -180 },
  ],
};
