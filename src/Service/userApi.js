import fetcher from "./fetcher";

const userApi = {
  getUser: async (tuKhoa) => {
    return fetcher.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01", {
      params: {
        ...tuKhoa,
      },
    });
  },
};

export default userApi;
