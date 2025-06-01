import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Bone as Drone,
  Notebook as Robot,
  Target,
  Box,
  Mail,
  X,
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
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

  useEffect(() => {
    const prefetchVideos = () => {
      const videosToPreload = [
        "/assets/execute.mp4",
        "/assets/integrate.mp4",
        "/assets/sim.mp4",
      ];

      videosToPreload.forEach((videoSrc) => {
        const video = document.createElement("video");
        video.preload = "auto";
        video.src = videoSrc;
        video.style.display = "none";
        document.body.appendChild(video);
      });
    };

    const timer = setTimeout(prefetchVideos, 1000);
    return () => clearTimeout(timer);
  }, []);

  const products: Record<ProductKey, Product> = {
    tactview: {
      title: "TactView",
      description:
        "Tactical control of UAVs and UGVs. Integration with vehicles, their autonomy, BMSs and operator controls.",
      icon: <Drone className="w-12 h-12 text-tactview-gold" />,
      demo: "/assets/main.mp4",
      details:
        "TactView provides seamless integration between unmanned vehicles and battlefield management systems, enabling efficient tactical control and coordination of multiple autonomous units in real-time combat scenarios.",
    },
    tactexecute: {
      title: "TactExecute",
      description:
        "Mission autonomy execution package. Converting BMS and operator input to tasks for each vehicle using advanced AI algorithms.",
      icon: <Target className="w-12 h-12 text-tactview-gold" />,
      demo: "/assets/execute.mp4",
      details:
        "TactExecute leverages cutting-edge AI algorithms to translate complex battlefield management system inputs into actionable tasks for autonomous vehicles, ensuring precise mission execution and tactical superiority.",
    },
    tactintegrate: {
      title: "TactIntegrate",
      description:
        "Convert autonomous platforms to be compatible with higher level tasks, enabling tactical maneuvering and coordinated actions.",
      icon: <Robot className="w-12 h-12 text-tactview-gold" />,
      demo: "/assets/integrate.mp4",
      details:
        "TactIntegrate transforms basic autonomous platforms into sophisticated tactical units capable of executing complex maneuvers and coordinated operations in challenging battlefield environments.",
    },
    tactsim: {
      title: "TactSim",
      description:
        "Integration and development of simulation products for operator and AI system training.",
      icon: <Box className="w-12 h-12 text-tactview-gold" />,
      demo: "/assets/sim.mp4",
      details:
        "TactSim provides comprehensive simulation environments for training both human operators and AI systems, ensuring optimal performance in real-world combat scenarios.",
    },
  };

  const handleVideoClick = (videoSrc: string) => {
    setExpandedVideo(videoSrc);
  };

  const closeExpandedVideo = () => {
    setExpandedVideo(null);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 golden-gradient">
              Future of War is Robotics
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              TactView provides cutting-edge solutions for unmanned ground
              vehicles and unmanned aerial vehicles, making the forward line of
              robotics more efficient than ever before.
            </p>
            <video
              src="/assets/main.mp4"
              autoPlay
              loop
              muted
              className="rounded-lg shadow-2xl w-full max-w-[1200px] cursor-pointer"
              onClick={() => handleVideoClick("/assets/main.mp4")}
            />
          </div>
        );

      case "products":
        if (selectedProduct && products[selectedProduct]) {
          const product = products[selectedProduct];
          return (
            <div className="max-w-4xl mx-auto px-4">
              <div className="product-card">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 golden-gradient">
                  {product.title}
                </h2>

                <p className="text-lg md:text-xl mb-4 md:mb-6">
                  {product.description}
                </p>

                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-tactview-gold">
                    Overview
                  </h3>
                  <p className="text-base md:text-lg">{product.details}</p>
                </div>

                {product.demo && (
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-tactview-gold">
                      Demo
                    </h3>
                    <video
                      src={product.demo}
                      autoPlay
                      loop
                      muted
                      className="rounded-lg w-full max-w-[1200px] cursor-pointer"
                      onClick={() => handleVideoClick(product.demo!)}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        }

        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            {Object.entries(products).map(([key, product]) => (
              <button
                key={key}
                className="product-card text-left hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedProduct(key as ProductKey)}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 golden-gradient">
                  {product.title}
                </h3>
                <p className="mb-3 md:mb-4 text-sm md:text-base">
                  {product.description}
                </p>
                {product.demo && (
                  <video
                    src={product.demo}
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(product.demo!);
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        );

      case "contact":
        return (
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 golden-gradient">
              Get in Touch
            </h2>
            <div className="product-card">
              <Mail className="w-10 h-10 md:w-12 md:h-12 text-tactview-gold mx-auto mb-4" />
              <p className="text-base md:text-lg mb-4 md:mb-6">
                Interested in TactView products and solutions? We'd love to
                discuss how we can help advance your robotics capabilities.
              </p>
              <p className="text-lg md:text-xl font-semibold golden-gradient break-all">
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
      <div className="flex justify-center p-4 md:p-8">
        <img src="/tactview.png" alt="TactView Logo" className="h-24 md:h-40" />
      </div>

      <div className="flex flex-col items-center mt-8 md:mt-20 mb-8 md:mb-12">
        <div className="flex items-center space-x-4 md:space-x-24">
          <button
            className={`nav-item text-sm md:text-base ${
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
              className={`nav-item flex items-center text-sm md:text-base ${
                activeSection === "products" || isProductsOpen
                  ? "text-tactview-gold"
                  : ""
              }`}
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products
              <ChevronDown className="ml-1 w-3 h-3 md:w-4 md:h-4" />
            </button>

            {isProductsOpen && (
              <div className="absolute top-full mt-2 w-40 md:w-48 bg-tactview-dark rounded-lg shadow-xl border border-tactview-gold py-2 z-50 left-1/2 transform -translate-x-1/2">
                {Object.entries(products).map(([key, product]) => (
                  <button
                    key={key}
                    className="w-full text-left px-3 md:px-4 py-2 hover:text-tactview-gold transition-colors duration-200 text-sm md:text-base"
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
            className={`nav-item text-sm md:text-base ${
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

      <main className="container mx-auto px-2 md:px-4 pb-8">
        {renderContent()}
      </main>

      {expandedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeExpandedVideo}
        >
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center">
            <button
              onClick={closeExpandedVideo}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-tactview-gold z-10"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <video
              src={expandedVideo}
              autoPlay
              loop
              muted
              className="max-w-full max-h-full rounded-lg"
              controls
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
