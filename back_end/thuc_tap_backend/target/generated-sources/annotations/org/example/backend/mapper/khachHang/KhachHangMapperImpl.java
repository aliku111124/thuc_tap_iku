package org.example.backend.mapper.khachHang;

import javax.annotation.processing.Generated;
import org.example.backend.dto.request.khachHang.KhachHangCreate;
import org.example.backend.dto.request.khachHang.KhachHangUpdate;
import org.example.backend.dto.response.khachHang.KhachHangResponse;
import org.example.backend.models.NguoiDung;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-12T12:45:22+0700",
    comments = "version: 1.5.0.Final, compiler: javac, environment: Java 17.0.10 (Oracle Corporation)"
)
@Component
public class KhachHangMapperImpl implements KhachHangMapper {

    @Override
    public void createNguoiDungFromDto(KhachHangCreate dto, NguoiDung nguoiDung) {
        if ( dto == null ) {
            return;
        }

        nguoiDung.setMa( dto.getMa() );
        nguoiDung.setEmail( dto.getEmail() );
        nguoiDung.setSdt( dto.getSdt() );
        nguoiDung.setTen( dto.getTen() );
        nguoiDung.setDiaChi( dto.getDiaChi() );
        nguoiDung.setNgaySinh( dto.getNgaySinh() );
        nguoiDung.setGioiTinh( dto.getGioiTinh() );
        nguoiDung.setHinhAnh( dto.getHinhAnh() );
        nguoiDung.setDiem( dto.getDiem() );
        nguoiDung.setChucVu( dto.getChucVu() );
        nguoiDung.setTrangThai( dto.getTrangThai() );
    }

    @Override
    public void updateNguoiDungFromDto(KhachHangUpdate dto, NguoiDung nguoiDung) {
        if ( dto == null ) {
            return;
        }

        nguoiDung.setMa( dto.getMa() );
        nguoiDung.setEmail( dto.getEmail() );
        nguoiDung.setSdt( dto.getSdt() );
        nguoiDung.setTen( dto.getTen() );
        nguoiDung.setDiaChi( dto.getDiaChi() );
        nguoiDung.setNgaySinh( dto.getNgaySinh() );
        nguoiDung.setGioiTinh( dto.getGioiTinh() );
        nguoiDung.setHinhAnh( dto.getHinhAnh() );
        nguoiDung.setDiem( dto.getDiem() );
        nguoiDung.setChucVu( dto.getChucVu() );
        nguoiDung.setTrangThai( dto.getTrangThai() );
    }

    @Override
    public void getDtoFromNguoiDung(KhachHangResponse dto, NguoiDung nguoiDung) {
        if ( nguoiDung == null ) {
            return;
        }

        dto.setId( nguoiDung.getId() );
        dto.setMa( nguoiDung.getMa() );
        dto.setEmail( nguoiDung.getEmail() );
        dto.setSdt( nguoiDung.getSdt() );
        dto.setTen( nguoiDung.getTen() );
        dto.setDiaChi( nguoiDung.getDiaChi() );
        dto.setNgaySinh( nguoiDung.getNgaySinh() );
        dto.setGioiTinh( nguoiDung.getGioiTinh() );
        dto.setHinhAnh( nguoiDung.getHinhAnh() );
        dto.setDiem( nguoiDung.getDiem() );
        dto.setTrangThai( nguoiDung.getTrangThai() );
        dto.setDeleted( nguoiDung.getDeleted() );
        dto.setChucVu( nguoiDung.getChucVu() );
    }

    @Override
    public KhachHangCreate switchKhachHangCreateFromUpdate(KhachHangUpdate nguoiDung) {
        if ( nguoiDung == null ) {
            return null;
        }

        KhachHangCreate.KhachHangCreateBuilder khachHangCreate = KhachHangCreate.builder();

        khachHangCreate.ma( nguoiDung.getMa() );
        khachHangCreate.email( nguoiDung.getEmail() );
        khachHangCreate.sdt( nguoiDung.getSdt() );
        khachHangCreate.ten( nguoiDung.getTen() );
        khachHangCreate.diaChi( nguoiDung.getDiaChi() );
        khachHangCreate.ngaySinh( nguoiDung.getNgaySinh() );
        khachHangCreate.gioiTinh( nguoiDung.getGioiTinh() );
        khachHangCreate.hinhAnh( nguoiDung.getHinhAnh() );
        khachHangCreate.trangThai( nguoiDung.getTrangThai() );
        khachHangCreate.diem( nguoiDung.getDiem() );
        khachHangCreate.chucVu( nguoiDung.getChucVu() );

        return khachHangCreate.build();
    }
}
