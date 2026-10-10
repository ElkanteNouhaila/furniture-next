// app/[category]/[id]/page.tsx
"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/app/lib/products";
import {
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiChevronRight,
  FiTruck,
  FiRefreshCw,
  FiShield,
  FiMinus,
  FiPlus,
  FiZap,
  FiArrowLeft,
  FiCheck,
} from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useCart } from "@/app/context/cartContext";

// --------------------------------------------------
// Star Rating
// --------------------------------------------------
function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return (
            <FaStar
              key={star}
              className="text-sm text-amber-400"
            />
          );
        }

        if (rating >= star - 0.5) {
          return (
            <FaStarHalfAlt
              key={star}
              className="text-sm text-amber-400"
            />
          );
        }

        return (
          <FaRegStar
            key={star}
            className="text-sm text-amber-400"
          />
        );
      })}
    </div>
  );
}

// --------------------------------------------------
// Badge
// --------------------------------------------------
function Badge({
  label,
  variant,
}: {
  label: string;
  variant: "gold" | "red" | "green";
}) {
  const styles = {
    gold: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-300",
    red: "border-red-200 bg-red-50 text-red-700 dark:border-red-800/60 dark:bg-red-950/40 dark:text-red-300",
    green:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles[variant]}`}
    >
      {label}
    </span>
  );
}

// --------------------------------------------------
// Product Page
// --------------------------------------------------
export default function ProductPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = use(params);
  const product = products[id];
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "description" | "specs"
  >("description");
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  // The product currently has one image.
  // Additional images can be added to product.gallery later.
  const gallery = (
    Array.isArray((product as any)?.gallery) &&
    (product as any).gallery.length > 0
      ? (product as any).gallery
      : [product?.image]
  ).filter(Boolean) as string[];

  const safeActiveImage = Math.min(
    activeImage,
    Math.max(gallery.length - 1, 0)
  );

  const currentImage = gallery[safeActiveImage];

  // ------------------------------------------------
  // Product Not Found
  // ------------------------------------------------
  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-stone-50 px-4 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100">
        <div className="max-w-md space-y-5 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-stone-100 text-4xl dark:bg-stone-900">
            🔍
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b58742]">
            Luxury Touch
          </p>

          <h1 className="text-2xl font-bold">
            Product Not Found
          </h1>

          <p className="text-sm leading-7 text-stone-500 dark:text-stone-400">
            The item you are looking for does not exist or may
            have been removed from our collection.
          </p>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 rounded-full bg-[#b58742] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#9e7436]"
          >
            <FiArrowLeft size={17} />
            Back to Categories
          </Link>
        </div>
      </main>
    );
  }

  // ------------------------------------------------
  // Add to Cart
  // ------------------------------------------------
  const handleAddToCart = () => {
    addToCart(product, qty);
    setAddedToCart(true);

    window.setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  // ------------------------------------------------
  // Share Product
  // ------------------------------------------------
  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Discover ${product.name} at Luxury Touch.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareData.url);
        setShareMessage("Product link copied!");

        window.setTimeout(() => {
          setShareMessage("");
        }, 2000);
      } else {
        setShareMessage("Sharing is not supported by this browser.");

        window.setTimeout(() => {
          setShareMessage("");
        }, 2500);
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }

      setShareMessage("Unable to share this product.");

      window.setTimeout(() => {
        setShareMessage("");
      }, 2500);
    }
  };

  // ------------------------------------------------
  // Page
  // ------------------------------------------------
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100">
      {/* Product breadcrumb and content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400"
        >
          <Link
            href="/"
            className="transition-colors hover:text-[#b58742]"
          >
            Home
          </Link>

          <FiChevronRight className="shrink-0 text-xs text-stone-400" />

          <Link
            href="/categories"
            className="transition-colors hover:text-[#b58742]"
          >
            Categories
          </Link>

          <FiChevronRight className="shrink-0 text-xs text-stone-400" />

          <Link
            href={`/categories/${category}`}
            className="capitalize transition-colors hover:text-[#b58742]"
          >
            {category}
          </Link>

          <FiChevronRight className="shrink-0 text-xs text-stone-400" />

          <span className="max-w-[180px] truncate font-medium text-stone-800 dark:text-stone-100 sm:max-w-[250px]">
            {product.name}
          </span>
        </nav>

        {/* Main Product Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ---------------------------------------- */}
          {/* Left: Product Gallery */}
          {/* ---------------------------------------- */}
          <div className="flex gap-3 sm:gap-4">
            {/* Desktop thumbnails */}
            {gallery.length > 1 && (
              <div className="hidden shrink-0 flex-col gap-3 sm:flex">
                {gallery.map((src, index) => (
                  <button
                    key={`${src}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View product image ${index + 1}`}
                    aria-pressed={safeActiveImage === index}
                    className={`h-[68px] w-[68px] overflow-hidden rounded-xl border-2 transition-all duration-200 md:h-[76px] md:w-[76px] ${
                      safeActiveImage === index
                        ? "scale-[1.03] border-[#b58742] shadow-md"
                        : "border-stone-200 hover:border-stone-400 dark:border-stone-800 dark:hover:border-stone-600"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${product.name} view ${index + 1}`}
                      width={76}
                      height={76}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main image */}
            <div className="min-w-0 flex-1">
              <div className="group relative aspect-square overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-lg dark:border-stone-800 dark:bg-stone-900">
                {currentImage && (
                  <Image
                    src={currentImage}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}

                {!currentImage && (
                  <div className="flex h-full items-center justify-center text-stone-400 dark:text-stone-600">
                    Image unavailable
                  </div>
                )}

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                {/* Wishlist */}
                <button
                  type="button"
                  onClick={() => setWishlisted((value) => !value)}
                  aria-label={
                    wishlisted
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  aria-pressed={wishlisted}
                  className={`absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full shadow-md backdrop-blur-md transition-all duration-200 ${
                    wishlisted
                      ? "scale-105 bg-red-500 text-white"
                      : "bg-white/95 text-stone-600 hover:scale-105 hover:text-red-500 dark:bg-stone-900/90 dark:text-stone-200 dark:hover:text-red-400"
                  }`}
                >
                  <FiHeart
                    size={19}
                    className={wishlisted ? "fill-current" : ""}
                  />
                </button>

                {/* Collection label */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full border border-white/30 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    Luxury Touch Collection
                  </span>
                </div>
              </div>

              {/* Mobile gallery indicators */}
              {gallery.length > 1 && (
                <div className="mt-4 flex justify-center gap-2 sm:hidden">
                  {gallery.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`View product image ${index + 1}`}
                      aria-pressed={safeActiveImage === index}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        safeActiveImage === index
                          ? "w-6 bg-[#b58742]"
                          : "w-2 bg-stone-300 dark:bg-stone-700"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Single image indicator */}
              {gallery.length === 1 && (
                <p className="mt-3 text-center text-xs text-stone-400 dark:text-stone-500">
                  Product image
                </p>
              )}
            </div>
          </div>

          {/* ---------------------------------------- */}
          {/* Right: Product Information */}
          {/* ---------------------------------------- */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            {/* Product title */}
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge label="Featured Collection" variant="gold" />
              </div>

              <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
                {product.name}
              </h1>

              <div className="h-1 w-16 rounded-full bg-[#b58742]" />
            </div>

            {/* Divider */}
            <div className="border-t border-stone-200 dark:border-stone-800" />

            {/* Product details tabs */}
            <section>
              <div
                role="tablist"
                aria-label="Product information"
                className="flex gap-7 border-b border-stone-200 dark:border-stone-800"
              >
                {(["description", "specs"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative pb-3 text-sm font-semibold capitalize transition-colors ${
                      activeTab === tab
                        ? "text-[#b58742]"
                        : "text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100"
                    }`}
                  >
                    {tab === "specs" ? "Specifications" : "Description"}

                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#b58742]" />
                    )}
                  </button>
                ))}
              </div>

              <div
                role="tabpanel"
                className="mt-5 min-h-[100px] text-[15px] leading-7 text-stone-600 dark:text-stone-300"
              >
                {activeTab === "description" && (
                  <p>
                    {product.description ||
                      "Discover refined design and timeless style with this piece from our Luxury Touch collection."}
                  </p>
                )}

                {activeTab === "specs" && (
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="w-28 shrink-0 text-sm text-stone-400 dark:text-stone-500">
                        Category
                      </span>
                      <span className="text-sm font-medium capitalize text-stone-800 dark:text-stone-100">
                        {product.category}
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="w-28 shrink-0 text-sm text-stone-400 dark:text-stone-500">
                        Product
                      </span>
                      <span className="text-sm font-medium text-stone-800 dark:text-stone-100">
                        {product.name}
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <span className="w-28 shrink-0 text-sm text-stone-400 dark:text-stone-500">
                        Collection
                      </span>
                      <span className="text-sm font-medium text-stone-800 dark:text-stone-100">
                        Luxury Touch
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            </section>

            {/* Quantity selector */}
            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                  Quantity
                </span>

                <div className="flex items-center overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-900">
                  <button
                    type="button"
                    onClick={() =>
                      setQty((current) => Math.max(1, current - 1))
                    }
                    disabled={qty <= 1}
                    aria-label="Decrease quantity"
                    className="px-4 py-3 text-stone-600 transition-colors hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-stone-300 dark:hover:bg-stone-800"
                  >
                    <FiMinus size={14} />
                  </button>

                  <span
                    aria-live="polite"
                    className="w-10 text-center text-sm font-bold text-stone-800 dark:text-stone-100"
                  >
                    {qty}
                  </span>

                  <button
                    type="button"
                    onClick={() => setQty((current) => current + 1)}
                    aria-label="Increase quantity"
                    className="px-4 py-3 text-stone-600 transition-colors hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]">
                {/* Add to Cart */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="group flex min-h-[54px] items-center justify-center gap-2 rounded-xl bg-stone-900 px-5 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#b58742] hover:shadow-lg hover:shadow-[#b58742]/20 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-[#b58742] dark:hover:text-white"
                >
                  {addedToCart ? (
                    <>
                      <FiCheck size={19} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <FiShoppingCart
                        size={19}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5"
                      />
                      Add to Cart
                    </>
                  )}
                </button>

                
                {/* Inquire on WhatsApp */}
                <button
                  type="button"
                  onClick={() => {
                    const phoneNumber = "212644072535"; // Replace with your WhatsApp number

                    const message = [
                      "Hello Luxury Touch!",
                      "",
                      "I'm interested in the following product:",
                      `Product: ${product.name}`,
                      `Quantity: ${qty}`,
                      `Product link: ${window.location.href}`,
                      "",
                      "Could you please provide more information about the price and availability?",
                    ].join("\n");

                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                  }}
                  className="flex min-h-[54px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#b58742] to-amber-500 px-5 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:from-[#9e7436] hover:to-amber-600 hover:shadow-lg"
                >
                  <FiZap size={18} />
                  Inquire on WhatsApp
                </button>

                {/* Share */}
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share product"
                  title="Share product"
                  className="relative flex min-h-[54px] items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-5 text-stone-600 transition-all duration-200 hover:border-[#b58742] hover:text-[#b58742] dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-[#b58742] dark:hover:text-[#d4aa68]"
                >
                  <FiShare2 size={19} />
                  <span className="sm:hidden">Share</span>
                </button>
              </div>

              {/* Feedback messages */}
              {(addedToCart || shareMessage) && (
                <p
                  aria-live="polite"
                  className="text-sm font-medium text-[#b58742]"
                >
                  {shareMessage || "Product added to your cart successfully."}
                </p>
              )}
            </section>

            {/* Trust badges */}
            <section className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                {
                  icon: <FiTruck size={19} />,
                  title: "Delivery",
                  subtitle: "Convenient service",
                },
                {
                  icon: <FiRefreshCw size={19} />,
                  title: "Assistance",
                  subtitle: "Customer support",
                },
                {
                  icon: <FiShield size={19} />,
                  title: "Secure",
                  subtitle: "Shop with confidence",
                },
              ].map(({ icon, title, subtitle }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-stone-200 bg-white p-3 text-center transition-all duration-200 hover:border-[#b58742]/40 hover:shadow-md sm:p-4 dark:border-stone-800 dark:bg-stone-900"
                >
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-[#b58742] dark:bg-amber-950/50">
                    {icon}
                  </div>

                  <p className="text-xs font-bold text-stone-800 dark:text-stone-100">
                    {title}
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-stone-400 dark:text-stone-500">
                    {subtitle}
                  </p>
                </div>
              ))}
            </section>

            {/* Wishlist feedback */}
            {wishlisted && (
              <p
                aria-live="polite"
                className="flex items-center gap-2 text-sm text-[#b58742]"
              >
                <FiHeart size={15} className="fill-current" />
                Added to your wishlist for this session.
              </p>
            )}
          </div>
        </div>

        {/* ------------------------------------------ */}
        {/* You Might Also Like */}
        {/* ------------------------------------------ */}
        <section className="mt-20 border-t border-stone-200 pt-12 dark:border-stone-800 sm:mt-24 sm:pt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#b58742]">
                Curated For You
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-3xl">
                You Might Also Like
              </h2>

              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                Discover more pieces from our collection.
              </p>
            </div>

            <Link
              href="/categories"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-[#b58742] transition-colors hover:text-amber-600 sm:inline-flex"
            >
              View All
              <FiChevronRight size={16} />
            </Link>
          </div>

          {/* Existing products from the same category, excluding current */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {Object.values(products)
              .filter(
                (item) =>
                  item.id !== product.id &&
                  item.category.toLowerCase() ===
                    product.category.toLowerCase()
              )
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/${category}/${item.id}`}
                  className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b58742]/40 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900"
                >
                  <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-800">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-4xl text-stone-400">
                        🪑
                      </div>
                    )}

                    <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/40 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      Collection
                    </span>
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="line-clamp-2 text-sm font-semibold text-stone-800 transition-colors group-hover:text-[#b58742] dark:text-stone-100">
                      {item.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                        Discover
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-white transition-colors group-hover:bg-[#b58742] dark:bg-stone-100 dark:text-stone-900 dark:group-hover:bg-[#b58742] dark:group-hover:text-white">
                        <FiChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* No other products */}
          {Object.values(products).filter(
            (item) =>
              item.id !== product.id &&
              item.category.toLowerCase() ===
                product.category.toLowerCase()
          ).length === 0 && (
            <div className="rounded-2xl border border-dashed border-stone-300 px-6 py-10 text-center dark:border-stone-700">
              <p className="text-sm text-stone-500 dark:text-stone-400">
                More products from this collection are coming soon.
              </p>

              <Link
                href="/categories"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#b58742] hover:underline"
              >
                Browse all categories
                <FiArrowLeft size={15} />
              </Link>
            </div>
          )}

          <Link
            href="/categories"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#b58742] hover:underline sm:hidden"
          >
            View All Categories
            <FiArrowLeft size={15} />
          </Link>
        </section>
      </div>
    </main>
  );
}