package org.example.backend.mapper.dotGiamGia;

import javax.annotation.processing.Generated;
import org.example.backend.dto.request.dotGiamGia.DotGiamGiaCreate;
import org.example.backend.dto.request.dotGiamGia.DotGiamGiaUpdate;
import org.example.backend.dto.response.dotGiamGia.DotGiamGiaResponse;
import org.example.backend.models.DotGiamGia;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-12T12:45:21+0700",
    comments = "version: 1.5.0.Final, compiler: javac, environment: Java 17.0.10 (Oracle Corporation)"
)
@Component
public class DotGiamGiaMapperImpl implements DotGiamGiaMapper {

    @Override
    public void updateDotGiamGiaFromDto(DotGiamGiaUpdate dto, DotGiamGia entity) {
        if ( dto == null ) {
            return;
        }

        entity.setMa( dto.getMa() );
        entity.setTen( dto.getTen() );
        entity.setGiaTri( dto.getGiaTri() );
        entity.setNgayBatDau( dto.getNgayBatDau() );
        entity.setNgayKetThuc( dto.getNgayKetThuc() );
        entity.setLoai( dto.getLoai() );
        entity.setTrangThai( dto.getTrangThai() );
        entity.setHinhThuc( dto.getHinhThuc() );
        entity.setDieuKien( dto.getDieuKien() );
    }

    @Override
    public void createDotGiamGiaFromDto(DotGiamGiaCreate dto, DotGiamGia entity) {
        if ( dto == null ) {
            return;
        }

        entity.setMa( dto.getMa() );
        entity.setTen( dto.getTen() );
        entity.setGiaTri( dto.getGiaTri() );
        entity.setNgayBatDau( dto.getNgayBatDau() );
        entity.setNgayKetThuc( dto.getNgayKetThuc() );
        entity.setLoai( dto.getLoai() );
        entity.setTrangThai( dto.getTrangThai() );
        entity.setHinhThuc( dto.getHinhThuc() );
        entity.setDieuKien( dto.getDieuKien() );
    }

    @Override
    public void getDtoFromDotGiamGia(DotGiamGiaResponse dto, DotGiamGia entity) {
        if ( entity == null ) {
            return;
        }

        dto.setHinhThuc( entity.getHinhThuc() );
        dto.setDieuKien( entity.getDieuKien() );
        dto.setId( entity.getId() );
        dto.setMa( entity.getMa() );
        dto.setTen( entity.getTen() );
        dto.setGiaTri( entity.getGiaTri() );
        dto.setNgayBatDau( entity.getNgayBatDau() );
        dto.setNgayKetThuc( entity.getNgayKetThuc() );
        dto.setLoai( entity.getLoai() );
        dto.setTrangThai( entity.getTrangThai() );
    }

    @Override
    public DotGiamGiaCreate switchDotGiamGiaCreateFromUpdate(DotGiamGiaUpdate entity) {
        if ( entity == null ) {
            return null;
        }

        DotGiamGiaCreate.DotGiamGiaCreateBuilder dotGiamGiaCreate = DotGiamGiaCreate.builder();

        dotGiamGiaCreate.ma( entity.getMa() );
        dotGiamGiaCreate.ten( entity.getTen() );
        dotGiamGiaCreate.giaTri( entity.getGiaTri() );
        dotGiamGiaCreate.ngayBatDau( entity.getNgayBatDau() );
        dotGiamGiaCreate.ngayKetThuc( entity.getNgayKetThuc() );
        dotGiamGiaCreate.loai( entity.getLoai() );
        dotGiamGiaCreate.trangThai( entity.getTrangThai() );
        dotGiamGiaCreate.hinhThuc( entity.getHinhThuc() );
        dotGiamGiaCreate.dieuKien( entity.getDieuKien() );

        return dotGiamGiaCreate.build();
    }
}
