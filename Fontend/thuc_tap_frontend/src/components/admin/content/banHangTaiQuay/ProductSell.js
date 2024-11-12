import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
// import { getProductsDetail, searchProductsDetail } from '../';
import '../quanLySanPham/scss/BanHang.scss'
import SanPhamChiTietSearch from '../quanLySanPham/fillter/SanPhamChiTietSearch';
import { getProductsDetail, searchProductsDetail } from '../../../../redux/action/productDetailAction';
// import SanPhamChiTietSearch from '';


function ProductSell(props) {
    const { show, setShow, handleAddProductsToCart } = props;
    const handleClose = () => {
        setShow(false)
        setSelectedRows([]);
        
    }

    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useDispatch();
    const { productDetailList, totalPages, totalElements } = useSelector((state) => state.productDetail);

    //search sp de them 
    const handleFiltersChange = (filters) => {
        if (!filters.searchTerm && !filters.trangThai && !filters.giaLonHon && !filters.giaNhoHon) {
            dispatch(getProductsDetail());
        } else {
            dispatch(searchProductsDetail(filters));
        }
    };
    


    // Hàm xử lý khi thay đổi trang
    const handlePageChange = (event) => {
        const newPage = event.selected;
        setCurrentPage(newPage);
        dispatch(getProductsDetail(newPage)); // Gọi API phân trang khi thay đổi trang
    };
    useEffect(() => {
        
        let res = dispatch(getProductsDetail())
        console.log("data", res );
        console.log("data", res.data );


        
    }, [])

    //chon sp them vao gio hang
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectRow = (item) => {
        setSelectedRows((prevSelectedRows) =>
            prevSelectedRows.find((row) => row.id === item.id)
                ? prevSelectedRows.filter((row) => row.id !== item.id)
                : [...prevSelectedRows, item]
        );
    };


    const CreateProductSell = async () => {
        console.log("thuong", selectedRows)
        handleAddProductsToCart(selectedRows)
        handleClose()

    }
    return (
        <>


            <Modal show={show} onHide={handleClose}
                size='xl'
                backdrop='static'
            >

                <Modal.Body>
                    <div className="">
                        <SanPhamChiTietSearch onSubmit={handleFiltersChange} />
                    </div>
                    <table className="table table-hover table border">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Hãng</th>
                                <th scope="col">Màu sắc</th>
                                <th scope="col">Kích thước</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Giá bán</th>

                                <th scope="col">Ảnh</th>

                                <th scope="col">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productDetailList && productDetailList.length > 0 ?
                                productDetailList.map((item, index) => (
                                    <tr key={`table-sole-${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{item.ten}</td>
                                        <td>{item.hang}</td>
                                        <td>{item.mauSac}</td>
                                        <td>{item.kichThuoc}</td>
                                        <td>{item.soLuong}</td>
                                        <td>{item.giaBan}</td>


                                        <td>
                                            <img src={item.hinhAnh} className="imgAnhSpct" >

                                            </img>
                                        </td>

                                        <td>

                                            <input
                                                type="checkbox"
                                                checked={selectedRows.some((row) => row.id === item.id)}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleSelectRow(item);
                                                }}
                                            />

                                        </td>
                                    </tr>
                                )) :
                                <tr>
                                    <td colSpan="10">Not found data</td>
                                </tr>
                            }
                        </tbody>
                    </table>

                    {/* Phân trang */}
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageChange}
                        pageRangeDisplayed={5}
                        pageCount={totalPages}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                    />


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={CreateProductSell}>
                        Thêm vào giỏ hàng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductSell;