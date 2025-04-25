# 🧊 Scroll-Animated 3D Cube with React Three Fiber

This project renders a textured 3D cube that rotates based on scroll position using **React Three Fiber** and **drei** helpers.

## 🚀 Features

- Scroll-based cube rotation with `ScrollControls`
- 3D cube with different textures on each face
- Orbit controls (drag to rotate the scene)
- Ambient and directional lighting
- Responsive full-screen canvas

## 📸 Preview
![ScreenRecording2025-04-25191404-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/109f8b10-0d7c-4b64-a8f0-6b81098816aa)



## 🛠️ Tech Stack

- React
- React Three Fiber
- drei
- three.js

## 📂 Folder Structure

📁 public └── assets/ ├── grass.jpg ├── senpaisan.jpg └── charizard partner1.jpg

📁 src └── Cube.jsx (main 3D component)

bash
Copy
Edit

## 🧰 Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev  # or npm start
💡 How It Works
The cube rotates based on scroll position, accessed through useScroll() from drei.

useFrame() hooks into the animation loop to continuously update rotation.

Textures are applied to each face of the cube using TextureLoader.

🖼️ Textures Used
/assets/grass.jpg

/assets/senpaisan.jpg

/assets/charizard partner1.jpg

✍️ Author
Your Name – @yourusername

📄 License
This project is open source and available under the MIT License.

yaml
Copy
Edit

---

Let me know if you want to include deploy instructions (like Vercel/Netlify) or if you'd like help generating a project banner or GIF for the README. Want me to drop this into a file for you?
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
