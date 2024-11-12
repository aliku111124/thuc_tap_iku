package org.example.backend.mapper;

import javax.annotation.processing.Generated;
import org.example.backend.dto.request.nhanVien.NhanVienRequestAdd;
import org.example.backend.dto.request.nhanVien.NhanVienRequestUpdate;
import org.example.backend.dto.response.NhanVien.NhanVienRespon;
import org.example.backend.models.NguoiDung;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-12T12:45:22+0700",
    comments = "version: 1.5.0.Final, compiler: javac, environment: Java 17.0.10 (Oracle Corporation)"
)
@Component
public class NhanVienMapperImpl implements NhanVienMapper {

    @Override
    public void createToNhanVien(NhanVienRequestAdd dto, NguoiDung entity) {
        if ( dto == null ) {
            return;
        }

        entity.setMa( dto.getMa() );
        entity.setEmail( dto.getEmail() );
        entity.setSdt( dto.getSdt() );
        entity.setMatKhau( dto.getMatKhau() );
        entity.setTen( dto.getTen() );
        entity.setDiaChi( dto.getDiaChi() );
        entity.setNgaySinh( dto.getNgaySinh() );
        entity.setGioiTinh( dto.getGioiTinh() );
        entity.setHinhAnh( dto.getHinhAnh() );
        entity.setCccd( dto.getCccd() );
        entity.setDiem( dto.getDiem() );
        entity.setNguoiTao( dto.getNguoiTao() );
        entity.setNguoiSua( dto.getNguoiSua() );
        entity.setNgayTao( dto.getNgayTao() );
        entity.setNgaySua( dto.getNgaySua() );
        entity.setChucVu( dto.getChucVu() );
        entity.setTrangThai( dto.getTrangThai() );
        entity.setDeleted( dto.getDeleted() );
    }

    @Override
    public void updateToNhanVien(NhanVienRequestUpdate dto, NguoiDung entity) {
        if ( dto == null ) {
            return;
        }

        entity.setMa( dto.getMa() );
        entity.setEmail( dto.getEmail() );
        entity.setSdt( dto.getSdt() );
        entity.setMatKhau( dto.getMatKhau() );
        entity.setTen( dto.getTen() );
        entity.setDiaChi( dto.getDiaChi() );
        entity.setNgaySinh( dto.getNgaySinh() );
        entity.setGioiTinh( dto.getGioiTinh() );
        entity.setHinhAnh( dto.getHinhAnh() );
        entity.setCccd( dto.getCccd() );
        entity.setChucVu( dto.getChucVu() );
        entity.setTrangThai( dto.getTrangThai() );
        entity.setDeleted( dto.getDeleted() );
    }

    @Override
    public void getDtoFormNhanVien(NhanVienRespon dto, NguoiDung entity) {
        if ( entity == null ) {
            return;
        }

        dto.setId( entity.getId() );
        dto.setMa( entity.getMa() );
        dto.setEmail( entity.getEmail() );
        dto.setSdt( entity.getSdt() );
        dto.setMatKhau( entity.getMatKhau() );
        dto.setTen( entity.getTen() );
        dto.setDiaChi( entity.getDiaChi() );
        dto.setNgaySinh( entity.getNgaySinh() );
        dto.setGioiTinh( entity.getGioiTinh() );
        dto.setHinhAnh( entity.getHinhAnh() );
        dto.setCccd( entity.getCccd() );
        dto.setChucVu( entity.getChucVu() );
        dto.setTrangThai( entity.getTrangThai() );
        dto.setDeleted( entity.getDeleted() );
    }
}
