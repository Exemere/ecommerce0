import { ShieldCheck, Truck, CreditCard, Tag } from "lucide-react";

export default function Service() {
  const features = [
    {
      icon: <Tag className="text-red-600 w-8 h-8" />,
      title: "Great Value",
      desc: "We offer competitive prices on our 10 million plus product range.",
    },
    {
      icon: <Truck className="text-red-600 w-8 h-8" />,
      title: "Countrywide Delivery",
      desc: "We ship to all 47 counties.",
    },
    {
      icon: <CreditCard className="text-red-600 w-8 h-8" />,
      title: "Safe Payment",
      desc: "Pay with the world’s most popular and secure payment methods.",
    },
    {
      icon: <ShieldCheck className="text-red-600 w-8 h-8" />,
      title: "Shop with Confidence",
      desc: "Our Buyer Protection covers your purchase from click to delivery.",
    },
  ];

  return (
    <section className="bg-white shadow-sm py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-gray-800">
            <div className="mb-3">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
