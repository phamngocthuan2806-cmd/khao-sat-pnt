// Lấy các phần tử từ HTML
const surveyForm = document.getElementById('surveyForm');
const resultModal = document.getElementById('resultModal');
const resultContent = document.getElementById('resultContent');

// Lắng nghe sự kiện người dùng bấm "Gửi khảo sát"
surveyForm.addEventListener('submit', function (event) {
    // Ngăn trang web bị tải lại (reload)
    event.preventDefault();

    // 1. Lấy Họ và tên (hoặc Biệt danh)
    const fullname = document.getElementById('fullname').value;

    // 2. Lấy Mức độ yêu thích (Radio button)
    const ratingElement = document.querySelector('input[name="rating"]:checked');
    const rating = ratingElement ? ratingElement.value : 'Chưa chọn';

    // 3. Lấy Danh sách môn thể thao (Checkbox - có thể chọn nhiều môn)
    const sportElements = document.querySelectorAll('input[name="interest"]:checked');
    let sports = [];
    sportElements.forEach((checkbox) => {
        sports.push(checkbox.value);
    });
    // Nếu chọn thì nối lại bằng dấu phẩy, nếu không chọn thì báo "Không chọn môn nào"
    const sportsString = sports.length > 0 ? sports.join(', ') : 'Không chọn môn nào';

    // 4. Lấy Tâm tư mỏng
    const feedback = document.getElementById('feedback').value.trim() || 'Không có tâm tư gì thêm';

    // 5. Đưa dữ liệu đã thu thập vào khung kết quả
    resultContent.innerHTML = `
        <p><strong>Họ và tên:</strong> ${fullname}</p>
        <p><strong>Mức độ yêu thích:</strong> ${rating}</p>
        <p><strong>Môn thể thao giỏi:</strong> ${sportsString}</p>
        <p><strong>Tâm tư gửi Thuận:</strong> ${feedback}</p>
    `;

    // Ẩn Form khảo sát và Hiện khung Cảm ơn
    surveyForm.classList.add('hidden');
    resultModal.classList.remove('hidden');
});

// Hàm quay lại làm lại khảo sát khi bấm nút "Quay về khảo sát"
function resetForm() {
    surveyForm.reset(); // Xóa sạch thông tin cũ trên ô nhập
    surveyForm.classList.remove('hidden'); // Hiện lại form
    resultModal.classList.add('hidden'); // Ẩn khung kết quả
}