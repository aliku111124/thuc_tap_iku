import { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Container, Nav, Row } from "react-bootstrap";
import { useNavigate, useOutletContext } from "react-router-dom";
import { createOrderDetails, createSell, getAllSell, updateOrder, updateProductQuantity, updateVoucherQuantity } from "../../../services/banHang/BanHangService";
import { toast } from "react-toastify";
import ProductSell from "./banHangTaiQuay/ProductSell";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "../../../redux/action/productDetailAction";
import KhachHangSell from "./banHangTaiQuay/KhachHangSell";
import PaymentInfo from "./banHangTaiQuay/PaymentInfo";
import QRCodeScanner from "./banHangTaiQuay/QRCodeScanner";
const BanHangTaiQuay = () => {

  const dispatch = useDispatch();
  const { selectedCustomer } = useSelector((state) => state.customer || {})
  const { onTitleChange } = useOutletContext();
  // useEffect(() => {
  //   const title = "Bán hàng tại quầy";
  //   getAllSella()
  //   dispatch(getProductsDetail());
  //   setTotalAmount(calculateTotalAmount());
  //   onTitleChange(title);
  // }, [onTitleChange]);

  useEffect(() => {
    const initData = async () => {
      try {
        onTitleChange("Bán hàng tại quầy");
        await getAllSella();
        dispatch(getProductsDetail());
        setTotalAmount(calculateTotalAmount());
      } catch (error) {
        console.error("Error initializing data:", error);
      }
    };
    initData();
  }, [onTitleChange, dispatch]);


  const navigate = useNavigate();
  const [showModalCreateSP, setShowModalCreateSP] = useState(false)//show modal them sp


  const [productDetailList, setProductDetailList] = useState([]); // Trạng thái lưu trữ danh sách sản phẩm gốc
  const [orders, setOrders] = useState([]);

  const [totalAmount, setTotalAmount] = useState(0);//tính tiền sp
  //hiển thị các hóa đơn đã tạo

  const getAllSella = async () => {
    try {
      let res = await getAllSell();

      setOrders(res.data)

    } catch (error) {
      console.log("loi loi", error)
    }

  }

  //thêm hóa đơn
  const handleCreateSell = async () => {

    let res = await createSell()
    if (res.data) {
      toast.success(' Tạo hóa đơn thành công ')
      getAllSella()
    } else {
      toast.error(' Chỉ được tạo 5 hóa đơn ')
    }
  }

  const handleSelectOrder = (selectedId) => {
    setOrders(orders.map(order =>
      ({ ...order, isActive: order.id === selectedId })
    ));
  };

  //thêm sp vào cart
  const handleAddProductsToCart = (selectedProducts) => {

    const activeOrderIndex = orders.findIndex(order => order.isActive);
    if (activeOrderIndex === -1) {
      toast.warn("Vui lòng chọn hóa đơn trước khi thêm sản phẩm!");
      return;
    }

    const updatedOrders = [...orders];
    const activeOrder = updatedOrders[activeOrderIndex];

    // Khởi tạo mảng products nếu chưa có
    if (!Array.isArray(activeOrder.products)) {
      activeOrder.products = [];
    }

    selectedProducts.forEach(selectedProduct => {

      // Kiểm tra từng sản phẩm đã chọn
      if (!selectedProduct) {
        return;
      }

      const existingProduct = activeOrder.products.find(product => product.id === selectedProduct.id);

      if (existingProduct) {
        if (selectedProduct.soLuong > 0) {
          existingProduct.soLuong += 1;
          selectedProduct.soLuong -= 1;
        }
      } else {
        if (selectedProduct.soLuong > 0) {
          activeOrder.products = [
            ...(activeOrder.products || []),
            { ...selectedProduct, soLuong: 1 }
          ];
          selectedProduct.soLuong -= 1;
        }
      }
    });

    setOrders(updatedOrders);
    setTotalAmount(calculateTotalAmount());
    console.log("Updated Orders:", updatedOrders);
    // console.log("chay dau con sau", updateProductStock());
  };



  // // Cập nhật số lượng sản phẩm trong danh sách gốc


  const updateProductStock = (productId, quantityChange) => {
    setProductDetailList((prevList) => {
      const updatedList = prevList.map((product) =>
        product.id === productId
          ? { ...product, soLuong: product.soLuong + quantityChange }
          : product
      );
      console.log("Updated Product Detail List:", updatedList); // Kiểm tra danh sách sản phẩm sau khi cập nhật
      return updatedList;
    });
    // alert("cap nhat  sp")
  };




  // Tăng/giảm số lượng sản phẩm trong giỏ hàng
  const handleQuantityChange = (productId, quantityChange) => {
    console.log("Orders before update:", orders);
    const activeOrderIndex = orders.findIndex(order => order.isActive);
    console.log("Active order index:", activeOrderIndex);
    if (activeOrderIndex !== -1) {
      const updatedOrders = [...orders];
      const activeOrder = updatedOrders[activeOrderIndex];
      const productInCart = activeOrder.products.find(product => product.id === productId);



      if (productInCart.soLuong + quantityChange <= 0) {
        handleRemoveProductFromCart(productId); // Xóa sản phẩm nếu số lượng <= 0
      } else {
        productInCart.soLuong += quantityChange;

        console.log("Orders after quantity update:", updatedOrders);
        console.log("ProductDetailList before stock update:", productDetailList);
        setOrders(updatedOrders);


        // Cập nhật lại số lượng trong productDetailList
        updateProductStock(productId, -quantityChange);
      }
    }
    setTotalAmount(calculateTotalAmount());
    // alert("tang giam so luong sp trong gio hang")
  };


  // // Xóa sản phẩm khỏi giỏ hàng và hoàn lại số lượng


  const handleRemoveProductFromCart = (productId) => {
    const activeOrder = orders.find(order => order.isActive);
    if (!activeOrder) return;

    const productInCart = activeOrder.products.find(product => product.id === productId);
    if (productInCart) {
      // Hoàn lại số lượng vào kho
      updateProductStock(productId, productInCart.soLuong);

      // Cập nhật danh sách đơn hàng bằng cách xóa sản phẩm
      const updatedProducts = activeOrder.products.filter(product => product.id !== productId);
      setOrders(orders.map(order =>
        order.id === activeOrder.id
          ? { ...order, products: updatedProducts }
          : order
      ));
    }
    // alert("xoa sp trong gio hang")
    setTotalAmount(calculateTotalAmount());

  };
  //qr them sp vao cart
  const [showQRScanner,setShowQRScanner] = useState(false)

  

  //tính tiền các sp để thanh toán 
  const calculateTotalAmount = () => {
    const activeOrder = orders.find(order => order.isActive);
    if (!activeOrder) return 0;

    return activeOrder.products.reduce((total, product) => {
      return total + (product.giaBan * product.soLuong);
    }, 0);
  };


  //vouchour
  const [discount, setDiscount] = useState(0);
  const onSelectVoucher = (voucher) => {
    let discountValue = 0;
    if(voucher){
      if (voucher.loai) {
        // Nếu là tiền mặt
        discountValue = voucher.giaTri;
  
      } else {
        // Nếu là %
        discountValue = (totalAmount * voucher.giaTri) / 100;
        if (discountValue >= voucher.giamToiDa) {
          discountValue = voucher.giamToiDa
        }
      }
      setDiscount(discountValue);
    }else{
      setDiscount(discountValue);
    }
  }

  const [selectedVoucher, setSelectedVoucher] = useState(null);

  const handleVoucher = (voucher) => {
    if(voucher){
      setSelectedVoucher(voucher)
    }else{
      setSelectedVoucher(null)
    }
  }


  const [ship, setShip] = useState(0)
  //nút hoàn tất thanh toán
  const handleCompletePayment = async () => {
    const activeOrder = orders.find((order) => order.isActive);
    //setActiveOrder(orders.find((order) => order.isActive))
    if (!activeOrder) {
      toast.warn("Vui lòng chọn hóa đơn để thanh toán!");
      return;
    }

    //tinh tien van chuyen


    if (((calculateTotalAmount(activeOrder.products) || 0)) >= 300000) {
      setShip(0)
    } else {
      setShip(((calculateTotalAmount(activeOrder.products) || 0)) * 0.1)
    }


    // Chuẩn bị dữ liệu để lưu chi tiết sản phẩm
    const orderDetails = activeOrder.products.map((product) => ({
      idHoaDon: activeOrder.id,
      idSpct: product.id,
      soLuong: product.soLuong,
      gia: product.giaBan,
      giaGiam: product.giaGiam || 0,
      trangThai: 1,
    }));


    // Chuẩn bị dữ liệu để cập nhật thông tin hóa đơn
    const orderUpdateData = {
      id: activeOrder.id,
      idNguoiDung:{
        id:"955cf005-c1ff-4e5f-b4c9-02140e85923b"
      },
      idPhieuGiamGia: selectedVoucher || null,
      //idDotGiamGia: activeOrder.idDotGiamGia || null,
      soDienThoai: selectedCustomer?.sdt || null,
      diaChi: selectedCustomer?.diaChi || null,
      giaGoc: calculateTotalAmount(activeOrder.products),
      giaGiam: discount, 
      tongTien: (calculateTotalAmount(activeOrder.products) || 0) - discount,
      loaiHoaDon: "bán hàng tại quầy",
      tienVanChuyen: ship,
      // ghiChu: activeOrder.ghiChu || "",
      // qrCode: activeOrder.qrCode || null,
      trangThai: "Đã thanh toán"
    };

    try {
      // Gọi API lưu chi tiết hóa đơn
      await createOrderDetails(orderDetails);
      // Gọi API cập nhật thông tin hóa đơn
      await updateOrder(orderUpdateData);
      // Cập nhật số lượng sản phẩm sau khi thanh toán
      for (let product of activeOrder.products) {
        await updateProductQuantity(product.id, product.soLuong);
      }
      //cap nhat voucher
      if (selectedVoucher) {
        await updateVoucherQuantity(selectedVoucher.id, 1); 
      }
      toast.success("Thanh toán thành công và lưu dữ liệu vào hệ thống!");

      getAllSella();
      navigate(`/admin/ban-hang-tai-quay`);
      setTotalAmount(0)
      setDiscount(0)
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi thanh toán. Vui lòng thử lại!");
      console.error(error);
    }
    console.log("aaa", activeOrder)
    console.log("Tổng giá gốc:", calculateTotalAmount(activeOrder.products));
    console.log("abc", selectedVoucher);
    console.log("Tổng tiền:", calculateTotalAmount(activeOrder.products) - activeOrder.giaGiam);

  };

  return (
    <>

      <div>
        <button className="btn btn-primary"
          onClick={() => handleCreateSell()}
        >
          Tạo mới hóa đơn
        </button>
      </div>

      <Container>
        <Row>
          <Col>
            <Nav variant="tabs">
              {orders.map((order) => (
                <Nav.Item key={order.id} >
                  <Nav.Link
                    onClick={() => handleSelectOrder(order.id)}
                    active={order.isActive}
                  >
                    {order.ma}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="col-8">
            <h4>Đơn hàng {orders.find(order => order.isActive)?.ma}</h4>
          </Col>
          <Col >
            <ButtonGroup>
              <Button variant="warning" onClick={() => setShowModalCreateSP(true)}>
                Thêm sản phẩm
              </Button>
              <Button variant="success" onClick={() => setShowQRScanner(true)}>
                QR Code sản phẩm
              </Button>
            </ButtonGroup>
          </Col>
        </Row>



      </Container>

      <Container>
        <div>Giỏ hàng</div>
        <Col className="col-8">
          <h4>Đơn hàng {orders.find(order => order.isActive)?.ma}</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Giá bán</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>



            {/* // Cập nhật phần giỏ hàng */}
            <tbody key={orders.find(order => order.isActive)?.id || "default"}>
              {orders.find(order => order.isActive)?.products?.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.ten}</td>
                  <td>
                    {/* Thêm nút tăng/giảm số lượng */}
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleQuantityChange(product.id, -1)}
                        disabled={product.soLuong === 0} // Disable if quantity is 0
                      >
                        -
                      </button>
                      <span className="mx-2">{product.soLuong}</span>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{product.giaBan}</td>
                  <td>
                    <img src={product.hinhAnh} alt={product.ten} style={{ width: "50px", height: "50px" }} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveProductFromCart(product.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </Col>



      </Container>


{/* 
      <KhachHangSell></KhachHangSell> */}


      <PaymentInfo
        totalAmount={totalAmount}
        handleCompletePayment={handleCompletePayment}
        onSelectVoucher={onSelectVoucher}
        discount={discount}
        handleVoucher={handleVoucher}
      />
      {/* modal thêm sp vào hóa đơn */}
      <ProductSell
        show={showModalCreateSP}
        setShow={setShowModalCreateSP}
        handleAddProductsToCart={handleAddProductsToCart}
      />
      <QRCodeScanner
        show={showQRScanner}
        setShow={setShowQRScanner}
        handleAddProductsToCart={handleAddProductsToCart}
      />
    </>

  )


};
export default BanHangTaiQuay;

