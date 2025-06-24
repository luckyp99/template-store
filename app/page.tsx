// File: app/page.tsx
"use client";

export default function Home() {
  const templates = [
    {
      id: 1,
      name: "Notion Life Planner",
      price: 2500,
      desc: "All-in-one Notion template for personal planning.",
      paystack: "https://paystack.shop/pay/rifuca2e54",
    },
    {
      id: 2,
      name: "Modern CV Template",
      price: 3000,
      desc: "Professional resume template in Word & PDF.",
      paystack: "#", // waiting for real link
    },
    {
      id: 3,
      name: "UI Kit Starter Pack",
      price: 4500,
      desc: "Figma-based UI kit for startups & designers.",
      paystack: "#", // waiting for real link
    },
  ];

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">🧩 Digital Template Store</h1>
      <p className="text-gray-600">Buy & download premium templates instantly.</p>

      <div className="grid md:grid-cols-3 gap-4">
        {templates.map((tpl) => (
          <div key={tpl.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{tpl.name}</h2>
            <p className="text-sm text-gray-500">{tpl.desc}</p>
            <p className="text-lg font-bold mt-2">₦{tpl.price.toLocaleString()}</p>
            <a
              href={tpl.paystack}
              className="mt-3 block bg-black text-white text-center py-2 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t text-sm text-gray-500">
        💰 BTC Address: <br />
        <code>bc1qsha2a5lr5wr3v6l08vgjwljx4j756qslvz7tgp</code>
      </div>
    </main>
  );
}
