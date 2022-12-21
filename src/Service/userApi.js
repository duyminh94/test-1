import fetcher from "./fetcher";

const userApi = {
    getUser: async (value) => {
        return fetcher.get("QuanLyNguoiDung/LayDanhSachNguoiDung", {
            params: {
                tuKhoa: value,
            },
        });
    },

};

export default userApi;