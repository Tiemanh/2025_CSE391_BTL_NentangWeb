# 📍Component Paradigms: Functional vs Class & Props/State
## 🪄1. Giới Thiệu
Dự án này khám phá sự khác biệt giữa các thành phần (components) Functional và Class trong React, tập trung vào cách triển khai, các phương thức vòng đời (lifecycle methods) và quản lý Props và State. Nó bao gồm các ví dụ thực tế như bộ đếm thời gian (timer), so sánh vòng đời và tương tác giữa thành phần cha-con để minh họa điểm mạnh và trường hợp sử dụng của từng mô hình.
## 🏷️2. Tính năng
- **So sánh chi tiết giữa thành phần Functional và Class trong React**: Nhấn mạnh sự khác biệt về cú pháp, hiệu suất và tính dễ sử dụng của hai mô hình này.
- **Minh họa cách quản lý Props và State**: Thể hiện cách triển khai Props và State trong thành phần Functional (sử dụng hooks như `useState`, `useEffect`) và thành phần Class (sử dụng thuộc tính và phương thức của lớp).
- **Ví dụ thực tế về phương thức vòng đời**: Bao gồm các phương thức như `componentDidMount`, `componentDidUpdate`, và `componentWillUnmount` trong thành phần Class, cùng với cách sử dụng hook `useEffect` để thay thế trong thành phần Functional.
- **Tương tác giữa thành phần cha và con**: Minh họa cách truyền Props từ cha sang con và cơ chế nâng state từ con lên cha để quản lý dữ liệu hiệu quả.
- **Thành phần thẻ hồ sơ (Profile Card) và container**.
## ⚙️3. Công nghệ sử dụng
- **React**: Framework chính để xây dựng các thành phần (components) Functional và Class.
- **JavaScript (ES6+)**: Ngôn ngữ lập trình, bao gồm các tính năng hiện đại như hooks (`useState`, `useEffect`) trong Functional components.
- **HTML/CSS**: Để thiết kế giao diện, bao gồm Thẻ Hồ Sơ (Profile Card) và container.
## 📁4. Cấu trúc dự án
```
public/
  ├── images/
  ├──index.html
src/
  ├── components/
  |   ├──ClassComponent.js
  |   ├──ClassTimer.js
  |   ├──FunctionalComponent.js
  |   ├──FunctionalTimer.js
  |   ├──LifecycleCompare.js
  |   ├──ParentComponent.js
  |   ├──ProfileCard.js
  |   ├──ProfileContainer.js
  ├── App.css
  ├── App.js
  ├── index.js
  ├── webpack.config.js
package-lock.json
package.json
```
## 📖5. Hướng dẫn cài đặt
Để chạy dự án này trên máy tính của bạn, hãy làm theo các bước sau:

**5.1. Cài đặt Node.js**
- Đảm bảo bạn đã cài đặt Node.js (bao gồm npm). Bạn có thể tải từ trang chính thức của Node.js. Dự án yêu cầu Node.js phiên bản 14 hoặc cao hơn.

**5.2. Tải dự án về máy**
- Clone repository từ GitHub về máy của bạn:

    ```
    git clone <URL-cua-repository>
    cd <ten-thu-muc-du-an>
    ```
    
**5.3. Cài đặt dependencies**
- Trong thư mục dự án, chạy lệnh sau để cài đặt các thư viện cần thiết (được liệt kê trong package.json):

    ```
    npm install
    ```
    
**5.4. Chạy dự án**
- Sau khi cài đặt xong, chạy ứng dụng bằng lệnh:

    ```
    npm start
    ```
    
- Ứng dụng sẽ khởi động và mở tại http://localhost:3000 trên trình duyệt mặc định của bạn.
    
**5.5. Build dự án (tùy chọn)**
- Nếu bạn muốn tạo bản build để triển khai, chạy:

    ```
    npm run build
    ```
- File build sẽ được tạo trong thư mục build/.

## 6. 
