USE [master]
GO

CREATE DATABASE [Fpoly_shop]

GO
ALTER DATABASE [Fpoly_shop] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Fpoly_shop].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Fpoly_shop] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Fpoly_shop] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Fpoly_shop] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Fpoly_shop] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Fpoly_shop] SET ARITHABORT OFF 
GO
ALTER DATABASE [Fpoly_shop] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Fpoly_shop] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Fpoly_shop] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Fpoly_shop] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Fpoly_shop] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Fpoly_shop] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Fpoly_shop] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Fpoly_shop] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Fpoly_shop] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Fpoly_shop] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Fpoly_shop] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Fpoly_shop] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Fpoly_shop] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Fpoly_shop] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Fpoly_shop] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Fpoly_shop] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Fpoly_shop] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Fpoly_shop] SET RECOVERY FULL 
GO
ALTER DATABASE [Fpoly_shop] SET  MULTI_USER 
GO
ALTER DATABASE [Fpoly_shop] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Fpoly_shop] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Fpoly_shop] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Fpoly_shop] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Fpoly_shop] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Fpoly_shop] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'amity_shop', N'ON'
GO
ALTER DATABASE [Fpoly_shop] SET QUERY_STORE = OFF
GO
USE [Fpoly_shop]
GO
/****** Object:  Table [dbo].[chat_lieu]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[chat_lieu](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[danh_muc]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[danh_muc](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[de_giay]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[de_giay](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[dia_chi]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dia_chi](
	[id] [uniqueidentifier] NOT NULL,
	[id_nguoi_dung] [uniqueidentifier] NULL,
	[ten_nguoi_nhan] [nvarchar](50) NULL,
	[so_dien_thoai] [nvarchar](20) NULL,
	[ixa] [nvarchar](50) NULL,
	[ihuyen] [nvarchar](50) NULL,
	[ithanh_pho] [nvarchar](50) NULL,
	[dia_chi] [nvarchar](255) NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[trang_thai] [nvarchar](255) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[dot_giam_gia]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dot_giam_gia](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](max) NULL,
	[gia_tri] [money] NULL,
	[ngay_bat_dau] [datetime] NULL,
	[ngay_ket_thuc] [datetime] NULL,
	[loai] [bit] NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[deleted] [bit] NULL,
	[trang_thai] [nvarchar](255) NULL,
	[hinh_thuc] [nvarchar](100) NULL,
	[dieu_kien] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[dot_giam_gia_spct]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dot_giam_gia_spct](
	[id] [uniqueidentifier] NOT NULL,
	[id_spct] [uniqueidentifier] NULL,
	[id_dot_giam_gia] [uniqueidentifier] NULL,
	[trang_thai] [nvarchar](255) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[gio_hang]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[gio_hang](
	[id] [uniqueidentifier] NOT NULL,
	[id_nguoi_dung] [uniqueidentifier] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[gio_hang_chi_tiet]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[gio_hang_chi_tiet](
	[id] [uniqueidentifier] NOT NULL,
	[id_gio_hang] [uniqueidentifier] NULL,
	[id_spct] [uniqueidentifier] NULL,
	[so_luong] [int] NULL,
	[thanh_tien] [money] NULL,
	[trang_thai] [nvarchar](255) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hang]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hang](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hinh_anh]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hinh_anh](
	[id] [uniqueidentifier] NOT NULL,
	[id_spct] [uniqueidentifier] NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[url] [nvarchar](max) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hoa_don]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hoa_don](
	[id] [uniqueidentifier] NOT NULL,
	[id_nguoi_dung] [uniqueidentifier] NULL,
	[id_phieu_giam_gia] [uniqueidentifier] NULL,
	[id_dot_giam_gia] [uniqueidentifier] NULL,
	[ma] [nvarchar](50) NULL,
	[so_dien_thoai] [nvarchar](20) NULL,
	[dia_chi] [nvarchar](255) NULL,
	[gia_goc] [money] NULL,
	[gia_giam] [money] NULL,
	[tong_tien] [money] NULL,
	[email] [nvarchar](255) NULL,
	[loai_hoa_don] [nvarchar](50) NULL,
	[ghi_chu] [nvarchar](max) NULL,
	[qr_code] [nvarchar](255) NULL,
	[tien_van_chuyen] [money] NULL,
	[ngay_du_kien_nhan] [datetime] NULL,
	[ngay_nhan_hang] [datetime] NULL,
	[ngay_tra_hang] [datetime] NULL,
	[nhan_vien] [nvarchar](50) NULL,
	[ngay_mua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hoa_don_chi_tiet]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hoa_don_chi_tiet](
	[id] [uniqueidentifier] NOT NULL,
	[id_hoa_don] [uniqueidentifier] NULL,
	[id_spct] [uniqueidentifier] NULL,
	[so_luong] [int] NULL,
	[gia] [money] NULL,
	[gia_giam] [money] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[trang_thai] [nvarchar](255) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[kich_thuoc]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kich_thuoc](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lich_su_hoa_don]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lich_su_hoa_don](
	[id] [uniqueidentifier] NOT NULL,
	[id_hoa_don] [uniqueidentifier] NULL,
	[mo_ta] [nvarchar](max) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lop_lot]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lop_lot](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[mau_sac]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[mau_sac](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[nguoi_dung]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[nguoi_dung](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[email] [nvarchar](max) NULL,
	[sdt] [nvarchar](20) NULL,
	[mat_khau] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[dia_chi] [nvarchar](255) NULL,
	[ngay_sinh] [datetime] NULL,
	[gioi_tinh] [nvarchar](50) NULL,
	[hinh_anh] [nvarchar](max) NULL,
	[cccd] [nvarchar](50) NULL,
	[diem] [int] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[chuc_vu] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](255) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[ma] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[phieu_giam_gia]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[phieu_giam_gia](
	[id] [uniqueidentifier] NOT NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](max) NULL,
	[loai] [bit] NULL,
	[gia_tri] [money] NULL,
	[giam_toi_da] [money] NULL,
	[muc_do] [nvarchar](50) NULL,
	[ngay_bat_dau] [datetime] NULL,
	[ngay_ket_thuc] [datetime] NULL,
	[so_luong] [int] NULL,
	[dieu_kien] [nvarchar](255) NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[phieu_giam_gia_nguoi_dung]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[phieu_giam_gia_nguoi_dung](
	[id] [uniqueidentifier] NOT NULL,
	[id_nguoi_dung] [uniqueidentifier] NULL,
	[id_phieu_giam_gia] [uniqueidentifier] NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[phieu_giam_gia_san_pham]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[phieu_giam_gia_san_pham](
	[id] [uniqueidentifier] NOT NULL,
	[id_san_pham] [uniqueidentifier] NULL,
	[id_phieu_giam_gia] [uniqueidentifier] NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[san_pham]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[san_pham](
	[id] [uniqueidentifier] NOT NULL,
	[id_lop_lot] [uniqueidentifier] NULL,
	[id_chat_lieu] [uniqueidentifier] NULL,
	[ma] [nvarchar](50) NULL,
	[ten] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[san_pham_chi_tiet]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[san_pham_chi_tiet](
	[id] [uniqueidentifier] NOT NULL,
	[id_san_pham] [uniqueidentifier] NULL,
	[id_mau_sac] [uniqueidentifier] NULL,
	[id_kich_thuoc] [uniqueidentifier] NULL,
	[id_de_giay] [uniqueidentifier] NULL,
	[id_danh_muc] [uniqueidentifier] NULL,
	[id_hang] [uniqueidentifier] NULL,
	[ten] [nvarchar](50) NULL,
	[gia_ban] [money] NULL,
	[gia_nhap] [money] NULL,
	[qr_code] [nvarchar](max) NULL,
	[mo_ta] [nvarchar](255) NULL,
	[so_luong] [int] NULL,
	[so_luong_tra] [int] NULL,
	[hinh_anh] [nvarchar](max) NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[ghi_chu] [nvarchar](255) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[thanh_toan]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[thanh_toan](
	[id] [uniqueidentifier] NOT NULL,
	[id_hoa_don] [uniqueidentifier] NULL,
	[phuong_thuc] [nvarchar](50) NULL,
	[tien_mat] [money] NULL,
	[tien_chuyen_khoan] [money] NULL,
	[tong_tien] [money] NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[trang_thai] [nvarchar](255) NULL,
	[deleted] [bit] NULL,
	[phuong_thuc_vnp] [nvarchar](max) NULL,
	[mo_ta] [nvarchar](255) NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[thong_bao]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[thong_bao](
	[id] [uniqueidentifier] NOT NULL,
	[id_hoa_don] [uniqueidentifier] NULL,
	[id_nguoi_dung] [uniqueidentifier] NULL,
	[loai] [nvarchar](50) NULL,
	[noi_dung] [nvarchar](max) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tra_hang]    Script Date: 9/26/2024 3:51:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tra_hang](
	[id] [uniqueidentifier] NOT NULL,
	[id_spct] [uniqueidentifier] NULL,
	[so_luong] [int] NULL,
	[ly_do] [nvarchar](max) NULL,
	[ngay_tao] [datetime] NULL,
	[ngay_sua] [datetime] NULL,
	[nguoi_tao] [nvarchar](50) NULL,
	[nguoi_sua] [nvarchar](50) NULL,
	[trang_thai] [nvarchar](50) NULL,
	[deleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[chat_lieu] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[chat_lieu] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[chat_lieu] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[chat_lieu] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[danh_muc] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[danh_muc] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[danh_muc] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[danh_muc] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[de_giay] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[de_giay] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[de_giay] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[de_giay] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[dia_chi] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[dia_chi] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[dia_chi] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[dia_chi] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[dot_giam_gia] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[dot_giam_gia] ADD  DEFAULT ((0)) FOR [gia_tri]
GO
ALTER TABLE [dbo].[dot_giam_gia] ADD  DEFAULT (getdate()) FOR [ngay_bat_dau]
GO
ALTER TABLE [dbo].[dot_giam_gia] ADD  DEFAULT (getdate()) FOR [ngay_ket_thuc]
GO
ALTER TABLE [dbo].[dot_giam_gia] ADD  DEFAULT ((0)) FOR [loai]
GO
ALTER TABLE [dbo].[dot_giam_gia] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[dot_giam_gia] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[dot_giam_gia] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[dot_giam_gia] ADD  DEFAULT (N'Tất cả') FOR [hinh_thuc]
GO
ALTER TABLE [dbo].[dot_giam_gia] ADD  DEFAULT ((-1)) FOR [dieu_kien]
GO
ALTER TABLE [dbo].[dot_giam_gia_spct] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[dot_giam_gia_spct] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[gio_hang] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[gio_hang] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[gio_hang] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[gio_hang] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet] ADD  DEFAULT ((0)) FOR [thanh_tien]
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[hang] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[hang] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[hang] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[hang] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[hinh_anh] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[hinh_anh] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[hinh_anh] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[hinh_anh] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[hoa_don] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[hoa_don] ADD  DEFAULT ((0)) FOR [gia_goc]
GO
ALTER TABLE [dbo].[hoa_don] ADD  DEFAULT ((0)) FOR [gia_giam]
GO
ALTER TABLE [dbo].[hoa_don] ADD  DEFAULT ((0)) FOR [tong_tien]
GO
ALTER TABLE [dbo].[hoa_don] ADD  DEFAULT ((0)) FOR [tien_van_chuyen]
GO
ALTER TABLE [dbo].[hoa_don] ADD  DEFAULT (getdate()) FOR [ngay_mua]
GO
ALTER TABLE [dbo].[hoa_don] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[hoa_don] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[hoa_don] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet] ADD  DEFAULT ((0)) FOR [gia]
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet] ADD  DEFAULT ((0)) FOR [gia_giam]
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[kich_thuoc] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[kich_thuoc] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[kich_thuoc] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[kich_thuoc] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[lich_su_hoa_don] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[lich_su_hoa_don] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[lich_su_hoa_don] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[lich_su_hoa_don] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[lop_lot] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[lop_lot] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[lop_lot] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[lop_lot] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[mau_sac] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[mau_sac] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[mau_sac] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[mau_sac] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[nguoi_dung] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[nguoi_dung] ADD  DEFAULT (getdate()) FOR [ngay_sinh]
GO
ALTER TABLE [dbo].[nguoi_dung] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[nguoi_dung] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[nguoi_dung] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[phieu_giam_gia] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[phieu_giam_gia] ADD  DEFAULT ((0)) FOR [loai]
GO
ALTER TABLE [dbo].[phieu_giam_gia] ADD  DEFAULT ((0)) FOR [gia_tri]
GO
ALTER TABLE [dbo].[phieu_giam_gia] ADD  DEFAULT ((0)) FOR [giam_toi_da]
GO
ALTER TABLE [dbo].[phieu_giam_gia] ADD  DEFAULT (getdate()) FOR [ngay_bat_dau]
GO
ALTER TABLE [dbo].[phieu_giam_gia] ADD  DEFAULT (getdate()) FOR [ngay_ket_thuc]
GO
ALTER TABLE [dbo].[phieu_giam_gia] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[phieu_giam_gia] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[phieu_giam_gia] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[phieu_giam_gia_nguoi_dung] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[phieu_giam_gia_nguoi_dung] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[phieu_giam_gia_san_pham] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[phieu_giam_gia_san_pham] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[san_pham] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[san_pham] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[san_pham] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[san_pham] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] ADD  DEFAULT ((0)) FOR [gia_ban]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] ADD  DEFAULT ((0)) FOR [gia_nhap]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[thanh_toan] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[thanh_toan] ADD  DEFAULT ((0)) FOR [tien_mat]
GO
ALTER TABLE [dbo].[thanh_toan] ADD  DEFAULT ((0)) FOR [tien_chuyen_khoan]
GO
ALTER TABLE [dbo].[thanh_toan] ADD  DEFAULT ((0)) FOR [tong_tien]
GO
ALTER TABLE [dbo].[thanh_toan] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[thanh_toan] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[thanh_toan] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[thong_bao] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[thong_bao] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[thong_bao] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[thong_bao] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[tra_hang] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[tra_hang] ADD  DEFAULT (getdate()) FOR [ngay_tao]
GO
ALTER TABLE [dbo].[tra_hang] ADD  DEFAULT (getdate()) FOR [ngay_sua]
GO
ALTER TABLE [dbo].[tra_hang] ADD  DEFAULT ((0)) FOR [deleted]
GO
ALTER TABLE [dbo].[dia_chi]  WITH CHECK ADD  CONSTRAINT [FK_dia_chi.id_nguoi_dung] FOREIGN KEY([id_nguoi_dung])
REFERENCES [dbo].[nguoi_dung] ([id])
GO
ALTER TABLE [dbo].[dia_chi] CHECK CONSTRAINT [FK_dia_chi.id_nguoi_dung]
GO
ALTER TABLE [dbo].[dot_giam_gia_spct]  WITH CHECK ADD  CONSTRAINT [FK_dot_giam_gia_spct.id_dot_giam_gia] FOREIGN KEY([id_dot_giam_gia])
REFERENCES [dbo].[dot_giam_gia] ([id])
GO
ALTER TABLE [dbo].[dot_giam_gia_spct] CHECK CONSTRAINT [FK_dot_giam_gia_spct.id_dot_giam_gia]
GO
ALTER TABLE [dbo].[dot_giam_gia_spct]  WITH CHECK ADD  CONSTRAINT [FK_dot_giam_gia_spct.id_spct] FOREIGN KEY([id_spct])
REFERENCES [dbo].[san_pham_chi_tiet] ([id])
GO
ALTER TABLE [dbo].[dot_giam_gia_spct] CHECK CONSTRAINT [FK_dot_giam_gia_spct.id_spct]
GO
ALTER TABLE [dbo].[gio_hang]  WITH CHECK ADD  CONSTRAINT [FK_gio_hang.id_nguoi_dung] FOREIGN KEY([id_nguoi_dung])
REFERENCES [dbo].[nguoi_dung] ([id])
GO
ALTER TABLE [dbo].[gio_hang] CHECK CONSTRAINT [FK_gio_hang.id_nguoi_dung]
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet]  WITH CHECK ADD  CONSTRAINT [FK_gio_hang_chi_tiet.id_gio_hang] FOREIGN KEY([id_gio_hang])
REFERENCES [dbo].[gio_hang] ([id])
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet] CHECK CONSTRAINT [FK_gio_hang_chi_tiet.id_gio_hang]
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet]  WITH CHECK ADD  CONSTRAINT [FK_gio_hang_chi_tiet.id_spct] FOREIGN KEY([id_spct])
REFERENCES [dbo].[san_pham_chi_tiet] ([id])
GO
ALTER TABLE [dbo].[gio_hang_chi_tiet] CHECK CONSTRAINT [FK_gio_hang_chi_tiet.id_spct]
GO
ALTER TABLE [dbo].[hinh_anh]  WITH CHECK ADD  CONSTRAINT [FK_hinh_anh.id_spct] FOREIGN KEY([id_spct])
REFERENCES [dbo].[san_pham_chi_tiet] ([id])
GO
ALTER TABLE [dbo].[hinh_anh] CHECK CONSTRAINT [FK_hinh_anh.id_spct]
GO
ALTER TABLE [dbo].[hoa_don]  WITH CHECK ADD  CONSTRAINT [FK_hoa_don.id_dot_giam_gia] FOREIGN KEY([id_dot_giam_gia])
REFERENCES [dbo].[dot_giam_gia] ([id])
GO
ALTER TABLE [dbo].[hoa_don] CHECK CONSTRAINT [FK_hoa_don.id_dot_giam_gia]
GO
ALTER TABLE [dbo].[hoa_don]  WITH CHECK ADD  CONSTRAINT [FK_hoa_don.id_nguoi_dung] FOREIGN KEY([id_nguoi_dung])
REFERENCES [dbo].[nguoi_dung] ([id])
GO
ALTER TABLE [dbo].[hoa_don] CHECK CONSTRAINT [FK_hoa_don.id_nguoi_dung]
GO
ALTER TABLE [dbo].[hoa_don]  WITH CHECK ADD  CONSTRAINT [FK_hoa_don.id_phieu_giam_gia] FOREIGN KEY([id_phieu_giam_gia])
REFERENCES [dbo].[phieu_giam_gia] ([id])
GO
ALTER TABLE [dbo].[hoa_don] CHECK CONSTRAINT [FK_hoa_don.id_phieu_giam_gia]
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet]  WITH CHECK ADD  CONSTRAINT [FK_hoa_don_chi_tiet.id_hoa_don] FOREIGN KEY([id_hoa_don])
REFERENCES [dbo].[hoa_don] ([id])
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet] CHECK CONSTRAINT [FK_hoa_don_chi_tiet.id_hoa_don]
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet]  WITH CHECK ADD  CONSTRAINT [FK_hoa_don_chi_tiet.id_spct] FOREIGN KEY([id_spct])
REFERENCES [dbo].[san_pham_chi_tiet] ([id])
GO
ALTER TABLE [dbo].[hoa_don_chi_tiet] CHECK CONSTRAINT [FK_hoa_don_chi_tiet.id_spct]
GO
ALTER TABLE [dbo].[lich_su_hoa_don]  WITH CHECK ADD  CONSTRAINT [FK_lich_su_hoa_don.id_hoa_don] FOREIGN KEY([id_hoa_don])
REFERENCES [dbo].[hoa_don] ([id])
GO
ALTER TABLE [dbo].[lich_su_hoa_don] CHECK CONSTRAINT [FK_lich_su_hoa_don.id_hoa_don]
GO
ALTER TABLE [dbo].[phieu_giam_gia_nguoi_dung]  WITH CHECK ADD  CONSTRAINT [FK_phieu_giam_gia_nguoi_dung.id_nguoi_dung] FOREIGN KEY([id_nguoi_dung])
REFERENCES [dbo].[nguoi_dung] ([id])
GO
ALTER TABLE [dbo].[phieu_giam_gia_nguoi_dung] CHECK CONSTRAINT [FK_phieu_giam_gia_nguoi_dung.id_nguoi_dung]
GO
ALTER TABLE [dbo].[phieu_giam_gia_nguoi_dung]  WITH CHECK ADD  CONSTRAINT [FK_phieu_giam_gia_nguoi_dung.id_phieu_giam_gia] FOREIGN KEY([id_phieu_giam_gia])
REFERENCES [dbo].[phieu_giam_gia] ([id])
GO
ALTER TABLE [dbo].[phieu_giam_gia_nguoi_dung] CHECK CONSTRAINT [FK_phieu_giam_gia_nguoi_dung.id_phieu_giam_gia]
GO
ALTER TABLE [dbo].[phieu_giam_gia_san_pham]  WITH CHECK ADD  CONSTRAINT [FK_phieu_giam_gia_san_pham.id_phieu_giam_gia] FOREIGN KEY([id_phieu_giam_gia])
REFERENCES [dbo].[phieu_giam_gia] ([id])
GO
ALTER TABLE [dbo].[phieu_giam_gia_san_pham] CHECK CONSTRAINT [FK_phieu_giam_gia_san_pham.id_phieu_giam_gia]
GO
ALTER TABLE [dbo].[phieu_giam_gia_san_pham]  WITH CHECK ADD  CONSTRAINT [FK_phieu_giam_gia_san_pham.id_san_pham] FOREIGN KEY([id_san_pham])
REFERENCES [dbo].[san_pham] ([id])
GO
ALTER TABLE [dbo].[phieu_giam_gia_san_pham] CHECK CONSTRAINT [FK_phieu_giam_gia_san_pham.id_san_pham]
GO
ALTER TABLE [dbo].[san_pham]  WITH CHECK ADD  CONSTRAINT [FK_san_pham.id_chat_lieu] FOREIGN KEY([id_chat_lieu])
REFERENCES [dbo].[chat_lieu] ([id])
GO
ALTER TABLE [dbo].[san_pham] CHECK CONSTRAINT [FK_san_pham.id_chat_lieu]
GO
ALTER TABLE [dbo].[san_pham]  WITH CHECK ADD  CONSTRAINT [FK_san_pham.id_lop_lot] FOREIGN KEY([id_lop_lot])
REFERENCES [dbo].[lop_lot] ([id])
GO
ALTER TABLE [dbo].[san_pham] CHECK CONSTRAINT [FK_san_pham.id_lop_lot]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [FK_san_pham_chi_tiet.id_danh_muc] FOREIGN KEY([id_danh_muc])
REFERENCES [dbo].[danh_muc] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [FK_san_pham_chi_tiet.id_danh_muc]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [FK_san_pham_chi_tiet.id_de_giay] FOREIGN KEY([id_de_giay])
REFERENCES [dbo].[de_giay] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [FK_san_pham_chi_tiet.id_de_giay]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [FK_san_pham_chi_tiet.id_hang] FOREIGN KEY([id_hang])
REFERENCES [dbo].[hang] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [FK_san_pham_chi_tiet.id_hang]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [FK_san_pham_chi_tiet.id_kich_thuoc] FOREIGN KEY([id_kich_thuoc])
REFERENCES [dbo].[kich_thuoc] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [FK_san_pham_chi_tiet.id_kich_thuoc]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [FK_san_pham_chi_tiet.id_mau_sac] FOREIGN KEY([id_mau_sac])
REFERENCES [dbo].[mau_sac] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [FK_san_pham_chi_tiet.id_mau_sac]
GO
ALTER TABLE [dbo].[san_pham_chi_tiet]  WITH CHECK ADD  CONSTRAINT [FK_san_pham_chi_tiet.id_san_pham] FOREIGN KEY([id_san_pham])
REFERENCES [dbo].[san_pham] ([id])
GO
ALTER TABLE [dbo].[san_pham_chi_tiet] CHECK CONSTRAINT [FK_san_pham_chi_tiet.id_san_pham]
GO
ALTER TABLE [dbo].[thanh_toan]  WITH CHECK ADD  CONSTRAINT [FK_thanh_toan.id_hoa_don] FOREIGN KEY([id_hoa_don])
REFERENCES [dbo].[hoa_don] ([id])
GO
ALTER TABLE [dbo].[thanh_toan] CHECK CONSTRAINT [FK_thanh_toan.id_hoa_don]
GO
ALTER TABLE [dbo].[thong_bao]  WITH CHECK ADD  CONSTRAINT [FK_thong_bao.id_hoa_don] FOREIGN KEY([id_hoa_don])
REFERENCES [dbo].[hoa_don] ([id])
GO
ALTER TABLE [dbo].[thong_bao] CHECK CONSTRAINT [FK_thong_bao.id_hoa_don]
GO
ALTER TABLE [dbo].[thong_bao]  WITH CHECK ADD  CONSTRAINT [FK_thong_bao.id_nguoi_dung] FOREIGN KEY([id_nguoi_dung])
REFERENCES [dbo].[nguoi_dung] ([id])
GO
ALTER TABLE [dbo].[thong_bao] CHECK CONSTRAINT [FK_thong_bao.id_nguoi_dung]
GO
ALTER TABLE [dbo].[tra_hang]  WITH CHECK ADD  CONSTRAINT [FK_tra_hang.id_spct] FOREIGN KEY([id_spct])
REFERENCES [dbo].[san_pham_chi_tiet] ([id])
GO
ALTER TABLE [dbo].[tra_hang] CHECK CONSTRAINT [FK_tra_hang.id_spct]
GO
use Fpoly_shop
GO
CREATE TRIGGER trg_HoaDon_MaTuDong
ON dbo.hoa_don
AFTER INSERT
AS
BEGIN
    UPDATE dbo.hoa_don
    SET ma = 'HD' + RIGHT('00000' + CAST((SELECT COUNT(*) FROM dbo.hoa_don) AS NVARCHAR(50)), 5)
    WHERE id IN (SELECT id FROM inserted);
END;
GO
USE [master]
GO
ALTER DATABASE [Fpoly_shop] SET  READ_WRITE 
GO


INSERT INTO [dbo].[nguoi_dung] 
    ([id], [ma], [email], [sdt], [mat_khau], [ten], [dia_chi], [ngay_sinh], [gioi_tinh], [hinh_anh], [cccd], [diem], [nguoi_tao], [nguoi_sua], [ngay_tao], [ngay_sua], [chuc_vu], [trang_thai], [deleted]) 
VALUES 
    ('955cf005-c1ff-4e5f-b4c9-02140e85923b', 'ND00', 'nguyenvana@example.com', '0123456789', 'password123', N'Khách lẻ', N', ', '1990-01-01', N'Nam', NULL, '000000000', 100, N'Admin', N'Admin', '2023-01-01 10:00:00', '2023-01-02 15:00:00', N'', N'', 1);
   
INSERT INTO [dbo].[lop_lot] 
    ([id], [ma], [ten], [ngay_tao], [ngay_sua], [nguoi_tao], [nguoi_sua], [trang_thai], [deleted]) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174100', 'LL001', N'Lớp Lót 1', '2023-01-01 10:00:00', '2023-01-02 15:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('223e4567-e89b-12d3-a456-426614174101', 'LL002', N'Lớp Lót 2', '2023-02-01 11:00:00', '2023-02-02 16:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('323e4567-e89b-12d3-a456-426614174102', 'LL003', N'Lớp Lót 3', '2023-03-01 12:00:00', '2023-03-02 17:00:00', N'Admin', N'Admin',  N'Hoạt động', 0);

INSERT INTO [dbo].[chat_lieu] 
    ([id], [ma], [ten], [ngay_tao], [ngay_sua], [nguoi_tao], [nguoi_sua], [trang_thai], [deleted]) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174200', 'CL001', N'Chất Liệu 1', '2023-01-01 10:00:00', '2023-01-02 15:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('223e4567-e89b-12d3-a456-426614174201', 'CL002', N'Chất Liệu 2', '2023-02-01 11:00:00', '2023-02-02 16:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('323e4567-e89b-12d3-a456-426614174202', 'CL003', N'Chất Liệu 3', '2023-03-01 12:00:00', '2023-03-02 17:00:00', N'Admin', N'Admin', N'Hoạt động', 0);

	INSERT INTO [dbo].[san_pham] 
    ([id], [id_lop_lot], [id_chat_lieu], [ma], [ten], [ngay_tao], [ngay_sua], [nguoi_tao], [nguoi_sua], [trang_thai], [deleted]) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174300', '123e4567-e89b-12d3-a456-426614174100', '123e4567-e89b-12d3-a456-426614174200', 'SP001', N'Sản Phẩm 1', '2023-01-01 10:00:00', '2023-01-02 15:00:00', N'Admin', N'Admin',  N'Hoạt động', 0),
    ('223e4567-e89b-12d3-a456-426614174301', '223e4567-e89b-12d3-a456-426614174101', '223e4567-e89b-12d3-a456-426614174201', 'SP002', N'Sản Phẩm 2', '2023-02-01 11:00:00', '2023-02-02 16:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('323e4567-e89b-12d3-a456-426614174302', '323e4567-e89b-12d3-a456-426614174102', '323e4567-e89b-12d3-a456-426614174202', 'SP003', N'Sản Phẩm 3', '2023-03-01 12:00:00', '2023-03-02 17:00:00', N'Admin', N'Admin', N'Hoạt động', 0);

INSERT INTO [dbo].[danh_muc] 
    ([id], [ma], [ten], [ngay_tao], [ngay_sua], [nguoi_tao], [nguoi_sua], [trang_thai], [deleted]) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174400', 'DM001', N'Danh Muc 1', '2023-01-01 10:00:00', '2023-01-02 15:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('223e4567-e89b-12d3-a456-426614174401', 'DM002', N'Danh Muc 2', '2023-02-01 11:00:00', '2023-02-02 16:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('323e4567-e89b-12d3-a456-426614174402', 'DM003', N'Danh Muc 3', '2023-03-01 12:00:00', '2023-03-02 17:00:00', N'Admin', N'Admin', N'Hoạt động', 0);

	INSERT INTO [dbo].[mau_sac] 
    ([id], [ma], [ten], [ngay_tao], [ngay_sua], [nguoi_tao], [nguoi_sua], [trang_thai], [deleted]) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174500', 'MS001', N'Màu Sắc 1', '2023-01-01 10:00:00', '2023-01-02 15:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('223e4567-e89b-12d3-a456-426614174501', 'MS002', N'Màu Sắc 2', '2023-02-01 11:00:00', '2023-02-02 16:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('323e4567-e89b-12d3-a456-426614174502', 'MS003', N'Màu Sắc 3', '2023-03-01 12:00:00', '2023-03-02 17:00:00', N'Admin', N'Admin', N'Hoạt động', 0);

INSERT INTO [dbo].[de_giay] 
    ([id], [ma], [ten], [ngay_tao], [ngay_sua], [nguoi_tao], [nguoi_sua], [trang_thai], [deleted]) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174600', 'DG001', N'Đế Giày 1', '2023-01-01 10:00:00', '2023-01-02 15:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('223e4567-e89b-12d3-a456-426614174601', 'DG002', N'Đế Giày 2', '2023-02-01 11:00:00', '2023-02-02 16:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('323e4567-e89b-12d3-a456-426614174602', 'DG003', N'Đế Giày 3', '2023-03-01 12:00:00', '2023-03-02 17:00:00', N'Admin', N'Admin', N'Hoạt động', 0);

INSERT INTO [dbo].[kich_thuoc] 
    ([id], [ma], [ten], [ngay_tao], [ngay_sua], [nguoi_tao], [nguoi_sua], [trang_thai], [deleted]) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174700', 'KT001', N'Kích Thước 1', '2023-01-01 10:00:00', '2023-01-02 15:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('223e4567-e89b-12d3-a456-426614174701', 'KT002', N'Kích Thước 2', '2023-02-01 11:00:00', '2023-02-02 16:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('323e4567-e89b-12d3-a456-426614174702', 'KT003', N'Kích Thước 3', '2023-03-01 12:00:00', '2023-03-02 17:00:00', N'Admin', N'Admin', N'Hoạt động', 0);

INSERT INTO [dbo].[hang] 
    ([id], [ma], [ten], [ngay_tao], [ngay_sua], [nguoi_tao], [nguoi_sua], [trang_thai], [deleted]) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614175000', 'H001', N'Hãng A', '2023-01-01 10:00:00', '2023-01-02 15:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('223e4567-e89b-12d3-a456-426614175001', 'H002', N'Hãng B', '2023-02-01 11:00:00', '2023-02-02 16:00:00', N'Admin', N'Admin', N'Hoạt động', 0),
    ('323e4567-e89b-12d3-a456-426614175002', 'H003', N'Hãng C', '2023-03-01 12:00:00', '2023-03-02 17:00:00', N'Admin', N'Admin', N'Hoạt động', 0);


INSERT INTO [dbo].[san_pham_chi_tiet] 
    ([id], [id_san_pham], [id_mau_sac], [id_kich_thuoc], [id_de_giay], [id_danh_muc], [id_hang], [ten], [gia_ban], [gia_nhap], [qr_code], [mo_ta], [so_luong], [so_luong_tra], [hinh_anh], [nguoi_tao], [nguoi_sua], [ngay_tao], [ngay_sua], [ghi_chu], [trang_thai], [deleted]) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174800', '123e4567-e89b-12d3-a456-426614174300', '123e4567-e89b-12d3-a456-426614174500', '123e4567-e89b-12d3-a456-426614174700', '123e4567-e89b-12d3-a456-426614174600', '123e4567-e89b-12d3-a456-426614174400', '123e4567-e89b-12d3-a456-426614175000', N'Sản Phẩm Chi Tiết 1', 500000, 300000, NULL, N'Mô tả 1', 100, 5, NULL, N'Admin', N'Admin', '2023-01-01 10:00:00', '2023-01-02 15:00:00', N'Ghi chú 1', N'Hoạt động', 0),
    ('223e4567-e89b-12d3-a456-426614174801', '223e4567-e89b-12d3-a456-426614174301', '223e4567-e89b-12d3-a456-426614174501', '223e4567-e89b-12d3-a456-426614174701', '223e4567-e89b-12d3-a456-426614174601', '223e4567-e89b-12d3-a456-426614174401', '223e4567-e89b-12d3-a456-426614175001', N'Sản Phẩm Chi Tiết 2', 600000, 400000, NULL, N'Mô tả 2', 200, 10, NULL, N'Admin', N'Admin', '2023-02-01 11:00:00', '2023-02-02 16:00:00', N'Ghi chú 2', N'Hoạt động', 0),
    ('323e4567-e89b-12d3-a456-426614174802', '323e4567-e89b-12d3-a456-426614174302', '323e4567-e89b-12d3-a456-426614174502', '323e4567-e89b-12d3-a456-426614174702', '323e4567-e89b-12d3-a456-426614174602', '323e4567-e89b-12d3-a456-426614174402', '323e4567-e89b-12d3-a456-426614175002', N'Sản Phẩm Chi Tiết 3', 700000, 500000, NULL, N'Mô tả 3', 150, 15, NULL, N'Admin', N'Admin', '2023-03-01 12:00:00', '2023-03-02 17:00:00', N'Ghi chú 3', N'Hoạt động', 0);


INSERT INTO [dbo].[nguoi_dung] (
    [id], [ma], [email], [sdt], [mat_khau], [ten], [dia_chi], [ngay_sinh], 
    [gioi_tinh], [hinh_anh], [cccd], [diem], [nguoi_tao], [nguoi_sua], 
    [ngay_tao], [ngay_sua], [chuc_vu], [trang_thai], [deleted]
)
VALUES 
    ('123e4567-e89b-12d3-a456-426614174103', 'NV001', 'user1@example.com', '0123456789', 'password123', 'Nguyen A', '123 Street, Hanoi', '1990-01-01', 'Nam', NULL, '123456789012', 10, 'admin', 'admin', GETDATE(), GETDATE(), 'nhanvien', N'Hoạt động', 0),
    ('123e4567-e89b-12d3-a456-426614174101', 'NV002', 'user2@example.com', '0123456790', 'password234', 'Nguyen B', '456 Street, Hanoi', '1992-02-02', N'Nữ', NULL, '223456789012', 20, 'admin', 'admin', GETDATE(), GETDATE(), 'nhanvien', N'Hoạt động', 0),
    ('123e4567-e89b-12d3-a456-426614174102', 'NV003', 'user3@example.com', '0123456791', 'password345', 'Nguyen C', '789 Street, Hanoi', '1994-03-03', 'Nam', NULL, '323456789012', 30, 'admin', 'admin', GETDATE(), GETDATE(), 'nhanvien', N'Hoạt động', 0),
    ('123e4567-e89b-12d3-a456-426614174105', 'KH004', 'user4@example.com', '0123456792', 'password456', 'Nguyen D', '101 Street, Hanoi', '1988-04-04', N'Nữ', NULL, '423456789012', 40, 'admin', 'admin', GETDATE(), GETDATE(), 'khachhang', N'Hoạt động', 0),
    ('123e4567-e89b-12d3-a456-426614174106', 'KH005', 'user5@example.com', '0123456793', 'password567', 'Nguyen E', '202 Street, Hanoi', '1986-05-05', 'Nam', NULL, '523456789012', 50, 'admin', 'admin', GETDATE(), GETDATE(), 'khachhang',N'Hoạt động', 0),
    ('123e4567-e89b-12d3-a456-426614174104', 'KH006', 'user6@example.com', '0123456794', 'password678', 'Nguyen F', '303 Street, Hanoi', '1996-06-06', N'Nữ', NULL, '623456789012', 60, 'admin', 'admin', GETDATE(), GETDATE(), 'khachhang',N'Hoạt động', 0);

	 
INSERT INTO [dbo].[phieu_giam_gia] (
    [id], [ma], [ten], [loai], [gia_tri], [giam_toi_da], [muc_do], 
    [ngay_bat_dau], [ngay_ket_thuc], [so_luong], [dieu_kien], 
    [nguoi_tao], [nguoi_sua], [ngay_tao], [ngay_sua], [trang_thai], [deleted]
)
VALUES 
    ('123e4567-e89b-12d3-a456-426614174101', 'GG001', N'Giảm giá cho đơn hàng trên 500k', 1, 100000, 200000, 'Mức 1', '2024-11-01', '2024-11-30', 100, 'Đơn hàng trên 500k', 'admin', 'admin', GETDATE(), GETDATE(), N'Hoạt động', 0),
    ('123e4567-e89b-12d3-a456-426614174102', 'GG002', N'Giảm giá cho sản phẩm chọn lọc', 0, 50000, 100000, 'Mức 2', '2024-11-10', '2024-11-25', 50, 'Sản phẩm chọn lọc', 'admin', 'admin', GETDATE(), GETDATE(), N'Hoạt động', 0),
    ('123e4567-e89b-12d3-a456-426614174103', 'GG003', N'Giảm giá vào dịp lễ', 1, 150000, 300000, 'Mức 3', '2024-12-01', '2024-12-31', 200, 'Dịp lễ cuối năm', 'admin', 'admin', GETDATE(), GETDATE(), N'Hoạt động', 0);

INSERT INTO [dbo].[dot_giam_gia] (
    [id], [ma], [ten], [gia_tri], [ngay_bat_dau], [ngay_ket_thuc], [loai],
    [nguoi_sua], [nguoi_tao], [ngay_tao], [ngay_sua], [deleted], [trang_thai], 
    [hinh_thuc], [dieu_kien]
)
VALUES 
    ('123e4567-e89b-12d3-a456-426614174101', 'DG001', N'Khuyến mãi Giáng Sinh 2024', 500000, '2024-12-01', '2024-12-25', 1,'admin', 'admin', GETDATE(), GETDATE(), 0, N'Hoạt động', 'Giảm giá theo đơn hàng', 1),
    
    ('123e4567-e89b-12d3-a456-426614174102', 'DG002', N'Giảm giá ngày lễ Quốc Khánh', 300000, '2024-09-01', '2024-09-05', 0,  'admin', 'admin', GETDATE(), GETDATE(), 0, N'Hoạt động', 'Giảm giá theo sản phẩm', 2),
    
    ('123e4567-e89b-12d3-a456-426614174103', 'DG003', N'Khuyến mãi mùa hè 2024', 1000000, '2024-06-01', '2024-06-30', 1,  'admin', 'admin', GETDATE(), GETDATE(), 0, N'Hoạt động', 'Giảm giá theo combo', 3);
