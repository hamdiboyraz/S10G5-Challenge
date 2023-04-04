import axios from "axios";
import { toast } from "react-toastify";

// Action Types
export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";

// Actions
export function notEkle(not) {
  return { type: NOT_EKLE, payload: not };
}

export function notSil(notId) {
  return { type: NOT_SIL, payload: notId };
}

export const notEkleAPI = (yeniNot) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      // throw new Error("test");
      if (res.status === 200) {
        console.log(res.data);

        dispatch(notEkle(res.data.json));
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
        toast.success(
          <div>
            Yeni not eklendi!
            <br />
            Notlar sayfasına yönlendiriliyorsunuz...
          </div>
        );
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Not eklenemedi!");
    });
};

export const notSilAPI = (id) => (dispatch) => {
  // console.log("action", id);
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      // throw new Error("test");
      if (res.status === 200) {
        // console.log(res.data.data); // id
        // console.log(id);

        dispatch(notSil(res.data.data));
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin
        toast.success("Not silindi!");
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Not silinirken hatayla karşılaşıldı!");
    });
};
