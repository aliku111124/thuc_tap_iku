package org.example.backend.mapper.phieuGiamGia;

import javax.annotation.processing.Generated;
import org.example.backend.dto.request.phieuGiamGia.phieuGiamGiaRequestAdd;
import org.example.backend.dto.request.phieuGiamGia.phieuGiamGiaRequestUpdate;
import org.example.backend.dto.response.phieuGiamGia.phieuGiamGiaReponse;
import org.example.backend.models.PhieuGiamGia;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-12T12:45:21+0700",
    comments = "version: 1.5.0.Final, compiler: javac, environment: Java 17.0.10 (Oracle Corporation)"
)
@Component
public class phieuGiamGiaMapperImpl implements phieuGiamGiaMapper {

    @Override
    public void updatePhieuGiamGiaFromDto(phieuGiamGiaRequestUpdate dto, PhieuGiamGia entity) {
        if ( dto == null ) {
            return;
        }

        entity.setMa( dto.getMa() );
        entity.setTen( dto.getTen() );
        entity.setLoai( dto.getLoai() );
        entity.setGiaTri( dto.getGiaTri() );
        entity.setGiamToiDa( dto.getGiamToiDa() );
        entity.setMucDo( dto.getMucDo() );
        entity.setNgayBatDau( dto.getNgayBatDau() );
        entity.setNgayKetThuc( dto.getNgayKetThuc() );
        entity.setSoLuong( dto.getSoLuong() );
        entity.setDieuKien( dto.getDieuKien() );
        entity.setTrangThai( dto.getTrangThai() );
    }

    @Override
    public void createPhieuGiamGiaFromDto(phieuGiamGiaRequestAdd dto, PhieuGiamGia entity) {
        if ( dto == null ) {
            return;
        }

        entity.setMa( dto.getMa() );
        entity.setTen( dto.getTen() );
        entity.setLoai( dto.getLoai() );
        entity.setGiaTri( dto.getGiaTri() );
        entity.setGiamToiDa( dto.getGiamToiDa() );
        entity.setMucDo( dto.getMucDo() );
        entity.setNgayBatDau( dto.getNgayBatDau() );
        entity.setNgayKetThuc( dto.getNgayKetThuc() );
        entity.setSoLuong( dto.getSoLuong() );
        entity.setDieuKien( dto.getDieuKien() );
        entity.setTrangThai( dto.getTrangThai() );
    }

    @Override
    public void getDtoFromPhieuGiamGia(phieuGiamGiaReponse dto, PhieuGiamGia entity) {
        if ( entity == null ) {
            return;
        }

        dto.setId( entity.getId() );
        dto.setMa( entity.getMa() );
        dto.setTen( entity.getTen() );
        dto.setLoai( entity.getLoai() );
        dto.setGiaTri( entity.getGiaTri() );
        dto.setGiamToiDa( entity.getGiamToiDa() );
        dto.setMucDo( entity.getMucDo() );
        dto.setNgayBatDau( entity.getNgayBatDau() );
        dto.setNgayKetThuc( entity.getNgayKetThuc() );
        dto.setSoLuong( entity.getSoLuong() );
        dto.setDieuKien( entity.getDieuKien() );
        dto.setTrangThai( entity.getTrangThai() );
    }
}
