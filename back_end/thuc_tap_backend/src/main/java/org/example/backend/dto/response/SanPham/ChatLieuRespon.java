package org.example.backend.dto.response.SanPham;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChatLieuRespon {
    private UUID id;
    private String ma;
    private String ten;
    private String trangThai;


}
