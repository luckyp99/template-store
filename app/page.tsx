"use client";

import React from "react";
import { Bitcoin, CheckCircle2 } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Notion Life Planner",
    price: 2500,
    desc: "All-in-one Notion template for personal planning.",
    url: "https://example.com/downloads/notion-life-planner.pdf",
  },
  {
    id: 2,
    name: "Modern CV Template",
    price: 3000,
    desc: "A clean, professional resume template (Word & PDF).",
    url: "https://example.com/downloads/modern-cv-template.pdf",
  },
  {
    id: 3,
    name: "UI Kit Starter Pack",
    price: 4500,
    desc: "Figma-based UI kit for startups & designers.",
    url: "https://example.com/downloads/ui-kit-starter-pack.fig",
  },
];

export default function Home() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🧩 Digital Template Store</h1>
      <p className="text-muted-foreground mb-6">
        Buy & download premium templates instantly.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="border p-4 rounded-xl shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{tpl.name}</h2>
              <p className="text-sm text-gray-500">{tpl.desc}</p>
              <p className="text-lg font-bold">₦{tpl.price.toLocaleString()}</p>
              <form
                method="POST"
                action="https://paystack.com/pay/your-paystack-form-slug"
              >
                <input type="hidden" name="amount" value={tpl.price * 100} />
                <input type="hidden" name="metadata" value={tpl.name} />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded w-full mt-2"
                >
                  Buy Now
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-2">💰 Pay with BTC</h2>
        <div className="flex items-center space-x-2">
          <Bitcoin className="text-yellow-500 w-5 h-5" />
          <code className="break-all">
            bc1qsha2a5lr5wr3v6l08vgjwljx4j756qslvz7tgp
          </code>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <CheckCircle2 className="inline w-4 h-4 mr-1" />
        Powered by Paystack | Built by Code Copilot
      </div>
    </main>
  );
}
