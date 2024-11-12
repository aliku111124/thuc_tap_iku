    import { useEffect, useState } from 'react';
    import { Form, Table } from 'react-bootstrap';
    import Button from 'react-bootstrap/Button';
    import Modal from 'react-bootstrap/Modal';
    import { useDispatch, useSelector } from 'react-redux';
    import { getAllFindByIdAction, getVouchers } from '../../../../redux/action/voucherActions';
    import ReactPaginate from 'react-paginate';
    import { toastError } from '../../../../configs/ToastConfig';
    import dayjs from 'dayjs';

    function VouchourModal(props) {
        const { show, setShow,onSelectVoucher,handleVoucher } = props;

        const handleClose = () => setShow(false);
        const dispatch = useDispatch();
        const { listPhieuGiamGia, totalPages,voucherDetails } = useSelector((state) => state.voucher);
        useEffect(() => {
            dispatch(getVouchers())
        }, [])

        //thông tin của các phiếu giảm giá
        const [currentPage, setCurrentPage] = useState(1); //Trang Hiện Tại
        const [itemsPerPage, setItemsPerPage] = useState(5); // Số item trên mỗi trang
        const [searchParams, setSearchParams] = useState({
            keyFind: "",
            trangThai: "",
            sapXep: 1,
            minNgay: "",
            maxNgay: "",
            minGia: "",
            maxGia: "",
        });
        const fetchListVoucher = async (page = 0, itemsPerPage = 5) => {
            try {
                const formattedSearchParams = {
                    ...searchParams,
                    minNgay: searchParams.minNgay
                        ? dayjs(searchParams.minNgay).toISOString()
                        : "",
                    maxNgay: searchParams.maxNgay
                        ? dayjs(searchParams.maxNgay).toISOString()
                        : "",
                };
                dispatch(getVouchers(page, itemsPerPage, formattedSearchParams));
            } catch (error) {
                toastError("Lỗi khi lấy danh sách Phiếu Giảm Giá")
                console.log(error);
            }
        };
        const handlePageClick = async (event) => {
            const newPage = event.selected;
            setCurrentPage(newPage + 1); // Cập nhật `currentPage`
            await fetchListVoucher(newPage, itemsPerPage); // Fetch data for the new page
        };

        const handleSearchChange = (e) => {
            const { name, value } = e.target;
            setSearchParams((prev) => ({ ...prev, [name]: value }));
        };
        //lấy id phiếu giảm giá
        const handleRowClick = (idvc) => {
            
            if (idvc) {
                console.log("Voucher được chọn:", idvc);
                onSelectVoucher(idvc);
                handleVoucher(idvc)
                setShow(false);
            } else {
                console.log("Không tìm thấy dữ liệu mã giảm giá");
            }
            
        };
        

    
        
        
        return (
            <>


                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Phiếu giảm giá</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control
                            type="text"
                            name="keyFind"
                            value={searchParams.keyFind}
                            onChange={handleSearchChange}
                            placeholder="Tìm kiếm"
                            className="mr-2"
                        />

                        <Table striped bordered hover className="rounded-table">
                            <thead>
                                <tr>
                                    <th>Mã</th>
                                    <th>Tên</th>
                                    <th>Loại</th>
                                    <th>Giá trị</th>

                                    <th>Số lượng</th>


                                </tr>
                            </thead>
                            <tbody>
                                {listPhieuGiamGia &&
                                    listPhieuGiamGia.length > 0 &&
                                    listPhieuGiamGia.map((item) => (
                                        <tr key={`table-voucher${item.id}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRowClick(item);
                                            }}
                                        >
                                            <td>{item.ma}</td>
                                            <td>{item.ten}</td>
                                            <td>{item.loai ? "Tiền Mặt" : "%"}</td>
                                            <td>{item.giaTri} VND</td>

                                            <td>{item.soLuong}</td>



                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                        <ReactPaginate
                            breakLabel="..." // Hiển thị dấu ba chấm giữa trang đầu và cuối nếu nhiều trang hơn
                            nextLabel="Tiếp"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={0} // Ẩn các trang ở giữa
                            marginPagesDisplayed={1} // Hiển thị trang đầu và trang cuối
                            pageCount={totalPages} // Tổng số trang
                            previousLabel="Trước"
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
                        // forcePage={currentPage - 1}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button> */}
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    export default VouchourModal;