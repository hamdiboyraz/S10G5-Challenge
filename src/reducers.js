import { NOT_EKLE, NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

// const baslangicDegerleri = {
//   notlar: [
//     {
//       id: "75g1IyB8JLehAr0Lr5v3p",
//       date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
//       body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
//     },
//   ],
// };

const baslangicDegerleri = baslangicNotlariniGetir(s10chLocalStorageKey);

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}

const reducer = (state = baslangicDegerleri, action) => {
  const { type, payload } = action;
  switch (type) {
    case NOT_EKLE:
      const newState = { ...state, notlar: [payload, ...state.notlar] };
      localStorageStateYaz(s10chLocalStorageKey, newState);
      return newState;
    case NOT_SIL:
      const filteredState = state.notlar.filter((el) => el.id !== payload);
      const newFilteredState = { ...state, notlar: filteredState };
      localStorageStateYaz(s10chLocalStorageKey, newFilteredState);
      return newFilteredState;

    default:
      return state;
  }
};

export default reducer;
