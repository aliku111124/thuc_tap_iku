package org.example.backend.services;

import org.example.backend.common.PageResponse;
import org.example.backend.dto.response.NhanVien.NhanVienRespon;
import org.example.backend.dto.response.quanLyDonHang.QuanLyDonHangRespose;
import org.example.backend.models.HoaDonChiTiet;
import org.example.backend.repositories.HoaDonChiTietRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class HoaDonChiTietService extends GenericServiceImpl<HoaDonChiTiet, UUID> {
    private final HoaDonChiTietRepository hoaDonChiTietRepository;
    public HoaDonChiTietService(JpaRepository<HoaDonChiTiet, UUID> repository ,HoaDonChiTietRepository hoaDonChiTietRepository) {
        super(repository);
        this.hoaDonChiTietRepository = hoaDonChiTietRepository;
    }
//    public PageResponse<List<QuanLyDonHangRespose>> getHoaDon(int page, int size) {
//        Pageable pageable = PageRequest.of(page, size);
//        Page<QuanLyDonHangRespose> qlhdPage = hoaDonChiTietRepository.getByPageHoaDon(pageable);
//
//        return PageResponse.<List<QuanLyDonHangRespose>>builder()
//                .page(qlhdPage.getNumber())
//                .size(qlhdPage.getSize())
//                .totalPage(qlhdPage.getTotalPages())
//                .items(qlhdPage.getContent())
//                .build();
//    }
//    public Page<QuanLyDonHangRespose> getAllBillPage(Pageable pageable){
//        return hoaDonChiTietRepository.getByPageHoaDon(pageable);
//    }
}
