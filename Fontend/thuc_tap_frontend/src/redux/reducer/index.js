import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailReducer from "./productDetailReducer";

import customerReducer from "./customerReducer"
import voucherReducer from "./voucherReducer";
import staffReducer from "./staffReducer";
import saleReducer from "./saleReducer";

// Kết hợp các reducer lại thành một rootReducer
const rootReducer = combineReducers({
  //sản phẩm
  product: productReducer,
  productDetail: productDetailReducer,

  // sale
  sale: saleReducer,

  staff : staffReducer,//nhân viên của lna
  customer:customerReducer,

  // Bạn có thể thêm nhiều reducer khác tại đây
  //voucher
  voucher:voucherReducer,
});

export default rootReducer;
