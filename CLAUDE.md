# CLAUDE.md

Ten plik zawiera wskazówki dla Claude Code (i innych narzędzi AI) pracujących w tym repozytorium. Projekt dopiero startuje — sekcje oznaczone `TODO` należy uzupełnić, gdy pojawią się pierwsze realne decyzje (framework, baza danych, styl testów itd.).

## Przegląd projektu

- **Typ:** aplikacja webowa/backend
- **Stack:** TypeScript / JavaScript
- **Framework/runtime:** TODO (np. Node.js + Express/Fastify/NestJS, Next.js, Deno...)
- **Baza danych:** TODO
- **Cel projektu:** TODO — krótki opis, co ten projekt robi i dla kogo

## Konwencje kodu

- Preferuj TypeScript nad czystym JavaScript dla nowego kodu; włącz `strict` w `tsconfig.json`.
- Nazwy plików: `kebab-case` dla plików, `PascalCase` dla klas/komponentów, `camelCase` dla funkcji i zmiennych.
- Nie dodawaj zależności bez wyraźnej potrzeby — sprawdź, czy standardowa biblioteka lub już istniejąca zależność wystarczy.
- Formatowanie i lint: TODO (np. ESLint + Prettier — dodać configi i wpisać tu komendy).
- Commity: pisz w trybie rozkazującym, jedno logiczne zmiana na commit.

## Struktura projektu

TODO — opisać układ katalogów, gdy powstanie (np. `src/`, `tests/`, `scripts/`).

## Uruchamianie i testowanie

```bash
# TODO: komenda instalacji zależności, np. npm install
# TODO: komenda uruchomienia dev servera
# TODO: komenda testów
# TODO: komenda lint/typecheck
```

Zanim zgłosisz zadanie jako ukończone:
- Uruchom typecheck i testy, jeśli istnieją.
- Dla zmian UI/frontend: przetestuj funkcję w przeglądarce (happy path + edge case'y), zanim zgłosisz sukces.

## Zasady pracy z Claude

- Nie dodawaj funkcji, refaktoryzacji ani abstrakcji wykraczających poza zakres zadania. Prosty fix nie wymaga porządkowania dookoła.
- Domyślnie bez komentarzy w kodzie — dodawaj je tylko tam, gdzie "dlaczego" nie jest oczywiste z kodu.
- Nie twórz plików `.md` (dokumentacji, planów, podsumowań) bez wyraźnej prośby.
- Preferuj edycję istniejących plików nad tworzeniem nowych.
- Przy zmianach wpływających na bezpieczeństwo (autoryzacja, dane wrażliwe, iniekcje SQL/XSS) zachowaj szczególną ostrożność i wskaż ryzyko, jeśli je zauważysz.

## Znane ograniczenia / kontekst

TODO — tutaj warto dopisywać nietrywialne decyzje architektoniczne, powody dla nietypowych rozwiązań, oraz rzeczy, o których Claude powinien pamiętać, a które nie wynikają wprost z kodu.
