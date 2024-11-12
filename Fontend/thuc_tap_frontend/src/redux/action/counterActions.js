// Định nghĩa các hằng số cho các loại action
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Action creator: Tăng giá trị đếm
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

// Action creator: Giảm giá trị đếm
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
