"use client";

// src/app/page.tsx
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home: React.FC = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to Next.js 14!</h1>
      <p>This is the home page using the new routing system.</p>
      <button onClick={() => router.push("/about")}>去关于页面</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h3>测试vercel构建</h3>
    </div>
  );
};

export default Home;
