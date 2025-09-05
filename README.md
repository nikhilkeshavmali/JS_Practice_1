# 🎨 Mousemove Color Effect (GSAP + JavaScript)

This project creates an interactive color-changing effect using **GSAP** and **JavaScript**.  
When you move your mouse inside the box, the background smoothly transitions between **red** (left side) and **blue** (right side).

---

## 🚀 Demo
Move your mouse inside the rectangle and watch the background color change dynamically.

---

## 🛠️ Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **[GSAP](https://greensock.com/gsap/)** (for smooth animations)

---

## 📂 Project Structure
📦 mousemove-color-effect
┣ 📜 index.html # Main HTML file
┣ 📜 style.css # Styling
┣ 📜 script.js # JavaScript logic with GSAP
┗ 📜 README.md # Project documentation

yaml
Copy code

---

## ⚡ How It Works
1. The **rectangle** (`#center`) is positioned in the middle of the screen.
2. On `mousemove`, the script calculates the **cursor’s X position** inside the box.
3. Using a custom `mapRange` function, the value is mapped to a **color intensity (0–255)**.
4. **GSAP** smoothly animates the background color:
   - Left half → shades of **red**.
   - Right half → shades of **blue**.

---

## 🖥️ Setup & Run
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/mousemove-color-effect.git
Open the folder and run the project:

bash
Copy code
cd mousemove-color-effect
Open index.html in your browser.

📸 Preview

📜 License
This project is free to use and open-source under the MIT License.

✨ Have fun experimenting with GSAP animations!





