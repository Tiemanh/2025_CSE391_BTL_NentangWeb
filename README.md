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

## 🔎6. So sánh Functional & Class trong React

**6.1 Cú pháp (Syntax) **:

**Functional Component (Ngắn gọn và hiện đại)**

- Dễ viết, dễ đọc.

- Dùng `React Hooks` để xử lý state, hiệu ứng, context, v.v.
 
```jsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted or updated");
    return () => console.log("Unmounted");
  }, [count]);

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
```

**Class Component (Dài dòng, OOP-style)**

```jsx
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    return (
      <div>
        <p>Bạn đã bấm {this.state.count} lần</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Tăng</button>
      </div>
    );
  }
}
```

**6.2 Hiệu suất (Performance)**

**Functional Component**:

- Kết hợp với **Hooks** và **Memoization** (`React.memo`, `useCallback`, `useMemo`) để tối ưu render.

- Dễ kiểm soát side effect thông qua `useEffect`.

**Class Component**:

- Không có hook, cần viết thủ công nhiều logic để kiểm soát hiệu suất.

- Dễ gặp lỗi render lại không cần thiết nếu không xử lý kỹ `shouldComponentUpdate()`.

| Hiệu suất              | Functional Component   | Class Component                    |
| ---------------------- | ---------------------- | ---------------------------------- |
| Dễ tối ưu hóa          | ✅ (hook + memo hóa dễ) | ❌ (phức tạp hơn)                   |
| Gọn và rõ side effects | ✅ (`useEffect`)        | ❌ (phải chia ra nhiều phương thức) |

**6.3 Tính dễ sử dụng (Ease of Use)**

| Tiêu chí                     | Functional Component           | Class Component           |
| ---------------------------- | ------------------------------ | ------------------------- |
| Dễ học với người mới         | ✅                              | ❌ (phức tạp `this`, bind) |
| Dễ chia sẻ logic tái sử dụng | ✅ với `Custom Hooks`           | ❌                         |
| Dễ test và maintain          | ✅                              | ❌                         |
| Hướng phát triển tương lai   | ✅ được React team khuyến khích | ❌                         |

## Kết luận chung:

| Tiêu chí                   | **Functional Component**                       | **Class Component**                  |
| -------------------------- | ---------------------------------------------- | ------------------------------------ |
| Cú pháp                    | Ngắn gọn, dễ viết                              | Dài dòng, phức tạp hơn               |
| Tính năng nâng cao         | Hook hỗ trợ `state`, `effect`, `context`, v.v. | Phải dùng nhiều phương thức vòng đời |
| Quản lý vòng đời           | `useEffect`                                    | `componentDidMount`, v.v.            |
| Dễ đọc, dễ học             | ✅                                              | ❌ (rườm rà, cần hiểu OOP)            |
| Khả năng tái sử dụng logic | ✅ (Custom Hooks)                               | ❌ (khó tách logic)                   |
| Hướng phát triển chính     | ✅ (React team khuyên dùng)                     | ❌ (legacy, ít dùng trong dự án mới)  |
| Tối ưu hiệu suất           | ✅ với `React.memo`, `useCallback`              | ❌ phức tạp hơn                       |

## 7. Quản lý Props và State
cách triển khai Props và State

**Functional Component**

- Sử dụng `Props`
  
Props được truyền vào dưới dạng đối số của hàm:
```jsx
function Greeting({ name }) {
  return <h1>Xin chào, {name}!</h1>;
}
```
- Sử dụng `State` với `useState`
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Khởi tạo state

  return (
    <div>
      <p>Đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
```
- Kết hợp `Props`, `State` và `useEffect`
```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mô phỏng gọi API lấy thông tin user
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]); // Chạy lại khi userId thay đổi

  return <div>{user ? <p>Tên: {user.name}</p> : <p>Đang tải...</p>}</div>;
}
```
**Class Component**

- Sử dụng `Props`
  
  Props được truy cập qua this.props:
```jsx
  class Greeting extends React.Component {
  render() {
    return <h1>Xin chào, {this.props.name}!</h1>;
  }
}
  ```
- Sử dụng `state`

 State được khởi tạo trong constructor và cập nhật bằng this.setState():
 ```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Khởi tạo state
  }

  render() {
    return (
      <div>
        <p>Đã bấm {this.state.count} lần</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Tăng
        </button>
      </div>
    );
  }
}
```

- Kết hợp `Props`, `State` và lifecycle methods
```jsx
 class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    fetch(`/api/users/${this.props.userId}`)
      .then((res) => res.json())
      .then((data) => this.setState({ user: data }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      fetch(`/api/users/${this.props.userId}`)
        .then((res) => res.json())
        .then((data) => this.setState({ user: data }));
    }
  }

  render() {
    const { user } = this.state;
    return <div>{user ? <p>Tên: {user.name}</p> : <p>Đang tải...</p>}</div>;
  }
}
```
## 🕐8. Ví dụ về phương thức vòng đời

Ví dụ: theo dõi cửa sổ trình duyệt

- **8.1 Class Component – Sử dụng Lifecycle Methods**

```jsx
import React from 'react';

class WindowSizeTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    this.handleResize = this.handleResize.bind(this);
  }

  // Khi component được mount
  componentDidMount() {
    console.log('Mounted');
    window.addEventListener('resize', this.handleResize);
  }

  // Khi component được update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.width !== this.state.width) {
      console.log(`Updated: Width changed to ${this.state.width}`);
    }
  }

  // Khi component bị unmount
  componentWillUnmount() {
    console.log('Unmounted');
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return <h2>Chiều rộng cửa sổ: {this.state.width}px</h2>;
  }
}
```
- **8.2 Functional Component – Sử dụng `useEffect`**
```jsx
import { useState, useEffect } from 'react';

function WindowSizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('Mounted');
    
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function = tương đương componentWillUnmount
    return () => {
      console.log('Unmounted');
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Chạy 1 lần sau khi mount

  useEffect(() => {
    console.log(`Updated: Width changed to ${width}`);
  }, [width]); // Chạy khi `width` thay đổi

  return <h2>Chiều rộng cửa sổ: {width}px</h2>;
}
```

## 👨‍👩‍👧9. Tương tác giữa thành phần cha và con
Ví dụ: **Cha** hiển thị số lần người dùng nhấn nút trong **Con**.

- **Con** chỉ có nút "Tăng".

- `State` được lưu ở thành phần **Cha**.

- **Con** nhận `callback` từ **Cha** và gọi khi người dùng nhấn.
**9.1 Functional Component**
 ```jsx
// Cha
import React,  { useState } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>Số lần nhấn: {count}</h2>
      <Child onIncrease={handleIncrease} />
    </div>
  );
}
export default Parent;
```
```jsx
// Con
import React from 'react';

function Child({ onIncrease }) {
  return (
    <div>
      <button onClick={onIncrease}>Tăng từ component con</button>
    </div>
  );
}
export default Child;
```
**9.2 Class Component** 
```jsx
// Cha
import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  handleIncrease() {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  render() {
    return (
      <div>
        <h2>Số lần nhấn: {this.state.count}</h2>
        <Child onIncrease={this.handleIncrease} />
      </div>
    );
  }
}

export default Parent;
```
 ```jsx
// Con
import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <button onClick={this.props.onIncrease}>
        Tăng từ component con
      </button>
    );
  }
}

export default Child;
```






## 📦10. Tài nguyên học tập

**Bài viết và tài liệu**:

- [Components and Prop](https://reactjs.org/docs/components-and-props.html)
  
- [Function Components](https://reactjs.org/docs/components-and-props.html#function-and-class-components)
  
- [Prop vs State](https://www.geeksforgeeks.org/difference-between-state-and-props-in-react)

**Thực hành & Playground**:

- [CodeSandBox - Functional vs Class component](https://codesandbox.io/)

- [Learn React free with Scrimba](https://scrimba.com/learn/learnreact)












