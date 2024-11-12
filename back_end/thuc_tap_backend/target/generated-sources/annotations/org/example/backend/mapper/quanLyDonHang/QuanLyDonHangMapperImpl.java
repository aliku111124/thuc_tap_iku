package org.example.backend.mapper.quanLyDonHang;

import javax.annotation.processing.Generated;
import org.example.backend.dto.response.quanLyDonHang.QuanLyDonHangRespose;
import org.example.backend.models.HoaDonChiTiet;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-12T12:45:21+0700",
    comments = "version: 1.5.0.Final, compiler: javac, environment: Java 17.0.10 (Oracle Corporation)"
)
@Component
public class QuanLyDonHangMapperImpl implements QuanLyDonHangMapper {

    @Override
    public void getDtoFormQLDH(QuanLyDonHangRespose dto, HoaDonChiTiet entity) {
        if ( entity == null ) {
            return;
        }

        dto.setId( entity.getId() );
        dto.setNgayTao( entity.getNgayTao() );
        dto.setTrangThai( entity.getTrangThai() );
        dto.setDeleted( entity.getDeleted() );
    }
}
