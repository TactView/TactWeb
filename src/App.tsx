import React, { useState } from "react";
import {
  ChevronDown,
  Bone as Drone,
  Notebook as Robot,
  Target,
  Box,
  Mail,
} from "lucide-react";

type ProductKey = "tactview" | "tactexecute" | "tactintegrate" | "tactsim";

interface Product {
  title: string;
  description: string;
  icon: React.ReactElement;
  demo?: string;
  details: string;
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState<ProductKey | "">("");
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products: Record<ProductKey, Product> = {
    tactview: {
      title: "TactView",
      description:
        "Tactical control of UAVs and UGVs. Integration with vehicles, their autonomy, BMSs and operator controls.",
      icon: <Drone className="w-12 h-12 text-tactview-gold" />,
      demo: "https://placehold.co/600x400.gif",
      details:
        "TactView provides seamless integration between unmanned vehicles and battlefield management systems, enabling efficient tactical control and coordination of multiple autonomous units in real-time combat scenarios.",
    },
    tactexecute: {
      title: "TactExecute",
      description:
        "Mission autonomy execution package. Converting BMS and operator input to tasks for each vehicle using advanced AI algorithms.",
      icon: <Target className="w-12 h-12 text-tactview-gold" />,
      demo: "https://placehold.co/600x400.gif",
      details:
        "TactExecute leverages cutting-edge AI algorithms to translate complex battlefield management system inputs into actionable tasks for autonomous vehicles, ensuring precise mission execution and tactical superiority.",
    },
    tactintegrate: {
      title: "TactIntegrate",
      description:
        "Convert autonomous platforms to be compatible with higher level tasks, enabling tactical maneuvering and coordinated actions.",
      icon: <Robot className="w-12 h-12 text-tactview-gold" />,
      details:
        "TactIntegrate transforms basic autonomous platforms into sophisticated tactical units capable of executing complex maneuvers and coordinated operations in challenging battlefield environments.",
    },
    tactsim: {
      title: "TactSim",
      description:
        "Integration and development of simulation products for operator and AI system training.",
      icon: <Box className="w-12 h-12 text-tactview-gold" />,
      demo: "https://placehold.co/600x400.gif",
      details:
        "TactSim provides comprehensive simulation environments for training both human operators and AI systems, ensuring optimal performance in real-world combat scenarios.",
    },
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8 golden-gradient">
              Future of War is Robotics
            </h1>
            <p className="text-xl mb-8">
              TactView provides cutting-edge solutions for unmanned ground
              vehicles and unmanned aerial vehicles, making the forward line of
              robotics more efficient than ever before.
            </p>
            <img
              src="https://placehold.co/1200x600.gif"
              alt="TactView Demo"
              className="rounded-lg shadow-2xl"
            />
          </div>
        );

      case "products":
        if (selectedProduct && products[selectedProduct]) {
          const product = products[selectedProduct];
          return (
            <div className="max-w-4xl mx-auto">
              <div className="product-card">
                <h2 className="text-3xl font-bold mb-6 golden-gradient">
                  {product.title}
                </h2>

                <p className="text-xl mb-6">{product.description}</p>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-tactview-gold">
                    Overview
                  </h3>
                  <p className="text-lg">{product.details}</p>
                </div>

                {product.demo && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-tactview-gold">
                      Demo
                    </h3>
                    <img
                      src={product.demo}
                      alt={`${product.title} Demo`}
                      className="rounded-lg w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        }

        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {Object.entries(products).map(([key, product]) => (
              <button
                key={key}
                className="product-card text-left hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedProduct(key as ProductKey)}
              >
                <h3 className="text-2xl font-bold mb-4 golden-gradient">
                  {product.title}
                </h3>
                <p className="mb-4">{product.description}</p>
                {product.demo && (
                  <img
                    src={product.demo}
                    alt={`${product.title} Demo`}
                    className="rounded-lg w-full"
                  />
                )}
              </button>
            ))}
          </div>
        );

      case "contact":
        return (
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 golden-gradient">
              Get in Touch
            </h2>
            <div className="product-card">
              <Mail className="w-12 h-12 text-tactview-gold mx-auto mb-4" />
              <p className="text-lg mb-6">
                Interested in TactView products and solutions? We'd love to
                discuss how we can help advance your robotics capabilities.
              </p>
              <p className="text-xl font-semibold golden-gradient">
                tactview-defense@gmail.com
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-tactview-dark relative">
      <div className="flex justify-center p-4">
        <img src="/tactview.png" alt="TactView Logo" className="h-40" />
      </div>

      <div className="flex flex-col items-center mt-4 mb-12">
        <div className="flex items-center space-x-8">
          <button
            className={`nav-item ${
              activeSection === "home" ? "text-tactview-gold" : ""
            }`}
            onClick={() => {
              setActiveSection("home");
              setSelectedProduct("");
            }}
          >
            Home
          </button>

          <div className="relative">
            <button
              className={`nav-item flex items-center ${
                activeSection === "products" || isProductsOpen
                  ? "text-tactview-gold"
                  : ""
              }`}
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {isProductsOpen && (
              <div className="absolute top-full mt-2 w-48 bg-tactview-dark rounded-lg shadow-xl border border-tactview-gold py-2 z-50">
                {Object.entries(products).map(([key, product]) => (
                  <button
                    key={key}
                    className="w-full text-left px-4 py-2 hover:text-tactview-gold transition-colors duration-200"
                    onClick={() => {
                      setActiveSection("products");
                      setSelectedProduct(key as ProductKey);
                      setIsProductsOpen(false);
                    }}
                  >
                    {product.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className={`nav-item ${
              activeSection === "contact" ? "text-tactview-gold" : ""
            }`}
            onClick={() => {
              setActiveSection("contact");
              setSelectedProduct("");
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">{renderContent()}</main>

    </div>
  );
}

export default App;