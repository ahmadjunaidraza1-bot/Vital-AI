import React, { useState } from "react";
import { Container, Row, Col, Carousel, Modal } from "react-bootstrap";

const OurWork = () => {
  const [active, setActive] = useState("All");
  const [subActive, setSubActive] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Cab Booking",
      images: ["/Images/cr5.webp", "/Images/cr10.webp", "/Images/cr4.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Cab Booking",
      images: ["/Images/cr11.webp", "/Images/cr7.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Cab Booking",
      images: ["/Images/cr9.webp", "/Images/cr4.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Cab Booking",
      images: ["/Images/cr8.webp", "/Images/new3.png"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Ladies Bags & Jwellery",
      images: ["/Images/jb1.webp", "/Images/jb2.png"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Ladies Bags & Jwellery",
      images: ["/Images/new1.png", "/Images/new2.png"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Ladies Bags & Jwellery",
      images: ["/Images/p3.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Ladies Bags & Jwellery",
      images: ["/Images/wb (8).webp", "/Images/wb (6).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Ladies Bags & Jwellery",
      images: ["/Images/wb (1).webp", "/Images/wb (2).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Ladies Bags & Jwellery",
      images: ["/Images/wb (4).webp", "/Images/wb (3).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Ladies Bags & Jwellery",
      images: ["/Images/wb (5).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Ladies Bags & Jwellery",
      images: ["/Images/wb (7).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Ladies Bags & Jwellery",
      images: ["/Images/n9 (10).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Ladies Bags & Jwellery",
      images: ["/Images/n9 (64).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/mix (10).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/mix (11).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/n9 (50).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/n9 (51).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/n9 (1).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/n9 (23).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/n9 (24).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/n9 (25).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/n9 (26).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/mix (12).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/mix (13).webp", "/Images/mix (15).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/mix (14).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Clothing",
      images: ["/Images/new.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Leather Collection",
      images: ["/Images/mix (1).webp", "/Images/mix (16).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Leather Collection",
      images: ["/Images/la.webp",],
    },

    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Leather Collection",
      images: ["/Images/mix (17).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Leather Collection",
      images: ["/Images/n9 (3).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Leather Collection",
      images: ["/Images/n9 (4).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Leather Collection",
      images: ["/Images/n9 (5).webp"],
    },

    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/mix (2).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/mix (4).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/mix (3).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/n9 (62).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/n9 (11).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/n9 (12).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/n9 (13).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/n9 (58).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/n9 (59).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/n9 (60).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Belts & Ties",
      images: ["/Images/n9 (61).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Pet Accessories",
      images: ["/Images/mix (7).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Pet Accessories",
      images: ["/Images/mix (9).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Pet Accessories",
      images: ["/Images/mix (8).webp", "/Images/mix.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Pet Accessories",
      images: ["/Images/n9 (53).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Pet Accessories",
      images: ["/Images/n9 (55).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (2).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (3).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (20).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (8).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Social Media Posts & Marketing",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (4).webp"],
    },
    {
      title: "TikTok Shop Video Creatives",
      category: "TikTok Shop Creatives",
      subCategory: "Pet Videos",
      media: [
        { type: "video", src: "/videos/h1.mp4" },
      ],
    },
    {
      title: "TikTok Shop Video Creatives",
      category: "TikTok Shop Creatives",
      subCategory: "Pet Videos",
      media: [
        { type: "video", src: "/videos/h6.mp4" },
      ],
    },
    {
      title: "TikTok Shop Video Creatives",
      category: "TikTok Shop Creatives",
      subCategory: "Cab Booking",
      media: [
        { type: "video", src: "/videos/pd2.mp4" },
      ],
    },
    {
      title: "TikTok Shop Video Creatives",
      category: "TikTok Shop Creatives",
      subCategory: "GYM Wear",
      media: [
        { type: "video", src: "/videos/h3.mp4" },
      ],
    },
    {
      title: "TikTok Shop Video Creatives",
      category: "TikTok Shop Creatives",
      subCategory: "Women Wear",
      media: [
        { type: "video", src: "/videos/h4.mp4" },
      ],
    },
    {
      title: "TikTok Shop Video Creatives",
      category: "TikTok Shop Creatives",
      subCategory: "Ladies Bag",
      media: [
        { type: "video", src: "/videos/h2.mp4" },
      ],
    },
    {
      title: "TikTok Shop Video Creatives",
      category: "TikTok Shop Creatives",
      subCategory: "Mens Wear",
      media: [
        { type: "video", src: "/videos/h5.mp4" },
      ],
    },
    {
      title: "TikTok Shop Video Creatives",
      category: "TikTok Shop Creatives",
      subCategory: "Mens Wear",
      media: [
        { type: "video", src: "/videos/pd1.mp4" },
      ],
    },
    {
      title: "TikTok Shop Video Creatives",
      category: "TikTok Shop Creatives",
      subCategory: "Mens Wear",
      media: [
        { type: "video", src: "/videos/ss1.mp4" },
      ],
    },
    {
      title: "Roofing Service Website",
      category: "AI E-Commerce & AI Websites",
      subCategory: "Service Websites",
      link: "https://roof-services-6jpixek9k-webvitalais-projects.vercel.app/",
      images: ["/Images/roofing.webp", "/Images/roof3.webp", "/Images/roof4.webp"],
    },
    {
      title: "Electricity Services Website",
      category: "AI E-Commerce & AI Websites",
      subCategory: "Service Websites",
      link: "https://star-electric-dod9pzcwu-webvitalais-projects.vercel.app/",
      images: ["/Images/elc1.webp", "/Images/elc2.webp", "/Images/elc3.webp"],
    },
    {
      title: "Dentist Clinic Website",
      category: "AI E-Commerce & AI Websites",
      subCategory: "Clinic Websites",
      link: "https://dentist-3dxrickof-webvitalais-projects.vercel.app/",
      images: ["/Images/dentist.webp", "/Images/dent1.webp", "/Images/dent3.webp"],
    },
    {
      title: "Ranchers UK",
      category: "AI E-Commerce & AI Websites",
      subCategory: "Food Websites",
      link: "https://ranchers-ozz5s77pq-webvitalais-projects.vercel.app/",
      images: ["/Images/ranchers1.webp", "/Images/ranchers2.webp", "/Images/ranchers3.webp"],
    },
    {
      title: "Hair Salon Website",
      category: "AI E-Commerce & AI Websites",
      subCategory: "Beauty Websites",
      link: "https://hair-saloon-5tay1j3hv-webvitalais-projects.vercel.app/",
      images: ["/Images/hair1.webp", "/Images/hair2.webp", "/Images/dent3.webp"],
    },
    {
      title: "Vipers E-Commerce Website",
      category: "AI E-Commerce & AI Websites",
      subCategory: "E-Commerce Stores",
      link: "https://vipers-7b4ipl29z-webvitalais-projects.vercel.app/",
      images: ["/Images/p2.webp", "/Images/viper1.webp", "/Images/viper2.webp"],
    },
    {
      title: "Verdent Gardening Services",
      category: "AI E-Commerce & AI Websites",
      subCategory: "Local Business Websites",
      link: "https://verdent-gardening-3rv1mjov4-webvitalais-projects.vercel.app/",
      images: ["/Images/gard1.webp", "/Images/gard2.webp", "/Images/gard3.webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/9.webp", "/Images/10.webp", "/Images/sl (4).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/11.webp", "/Images/sl (5).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/1.webp", "/Images/4.webp", "/Images/sl (9).webp",],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/2.webp", "/Images/sl (11).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/3.webp", "/Images/sl (12).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/5.webp", "/Images/sl (10).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/6.webp", "/Images/sl (1).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/7.webp", "/Images/sl (2).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/8.webp", "/Images/sl (3).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/bb1.webp", "/Images/bb2.webp", "/Images/sl (7).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/bb3.webp", "/Images/sl (8).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/sl (13).webp", "/Images/sl (16).webp"],
    }, {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Ladies School & Fashion Bags",
      images: ["/Images/sl (15).webp", "/Images/sl (14).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Ladies Jwellery",
      images: ["/Images/wj (2).webp", "/Images/wj (3).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Ladies Jwellery",
      images: ["/Images/wj (4).webp", "/Images/wj (5).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Ladies Jwellery",
      images: ["/Images/wj (6).webp", "/Images/wj (7).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Ladies Jwellery",
      images: ["/Images/wj (10).webp", "/Images/wj (11).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Ladies Jwellery",
      images: ["/Images/wj (14).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/48.webp", "/Images/50.webp", "/Images/49.png"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/la (1).webp", "/Images/la (4).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/la (2).webp", "/Images/la (3).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/p7.webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/46.webp",],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/47.webp",],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/51.webp", "/Images/52.webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (35).webp", "/Images/n9 (36).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (37).webp", "/Images/n9 (47).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (28).webp", "/Images/n9 (29).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (34).webp", "/Images/n9 (67).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (46).webp", "/Images/n9 (48).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (57).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (63).webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/b2.webp", "/Images/b4.webp"],
    },
    {
      title: "AI Product Demo",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/b1.webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/39.webp", "/Images/40.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/34.webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/43.webp", "/Images/n9 (44).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/31.png"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/32.webp", "/Images/n9 (7).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (8).webp", "/Images/n9 (9).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (68).webp", "/Images/n9 (21).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (30).webp", "/Images/n9 (31).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (16).webp", "/Images/n9 (17).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (18).webp", "/Images/n9 (19).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (20).webp", "/Images/n9 (22).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (14).webp", "/Images/n9 (15).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (32).webp", "/Images/n9 (33).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (41).webp", "/Images/n9 (39).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (40).webp", "/Images/n9 (42).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/p4.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/p5.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/p8.webp", "/Images/ti2.png"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/ti1.png"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (65).webp", "/Images/n9 (66).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/p6.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n (1).webp", "/Images/n9 (2).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Mens & Womens Wear",
      images: ["/Images/n9 (68).webp", "/Images/n9 (21).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Sports Accesories",
      images: ["/Images/vg1.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Sports Accesories",
      images: ["/Images/vg6.webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (12).png"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (13).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (9).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Sports Accesories",
      images: ["/Images/vg8.webp", "/Images/vp (7).webp"],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (10).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (14).webp",],
    },
    {
      title: "Pro Chauffeurs",
      category: "Product Demos",
      subCategory: "Sports Accesories",
      images: ["/Images/vp (15).webp"],
    },

  ];

  const categories = [
    "All",
    "AI E-Commerce & AI Websites",
    "Social Media Posts & Marketing",
    "Product Demos",
    "TikTok Shop Creatives",
  ];

  const sectionInfo = {
    "AI E-Commerce & AI Websites": {
      heading: "Websites & E-Commerce Projects",
      desc: "AI-powered websites, service business layouts, booking pages and e-commerce store designs.",
    },
    "Social Media Posts & Marketing": {
      heading: "Social Media Posts & Marketing Creatives",
      desc: "Premium ad creatives, brand campaigns and conversion-focused social media designs.",
    },
    "Product Demos": {
      heading: "AI Product Demos & Virtual Photoshoots",
      desc: "Realistic AI product visuals, model photoshoots and e-commerce product showcases.",
    },
    "TikTok Shop": {
      heading: "TikTok Shop Video Creatives",
      desc: "Auto-scroll product videos designed for TikTok Shop, short-form ads and social selling.",
    },
  };

  const getProjectMedia = (project) => {
    if (project.media) return project.media;
    return project.images.map((img) => ({ type: "image", src: img }));
  };

  const getSubCategories = (items) => {
    return ["All", ...new Set(items.map((item) => item.subCategory))];
  };

  const groupedByCategory = categories
    .filter((cat) => cat !== "All")
    .map((cat) => {
      const categoryProjects =
        active === "All" || active === cat
          ? projects.filter((p) => p.category === cat)
          : [];

      const selectedSub = subActive[cat] || "All";

      const filteredProjects =
        active === "All" || selectedSub === "All"
          ? categoryProjects
          : categoryProjects.filter((p) => p.subCategory === selectedSub);

      return {
        category: cat,
        ...sectionInfo[cat],
        allProjects: categoryProjects,
        projects: filteredProjects,
      };
    })
    .filter((section) => section.projects.length > 0 || section.allProjects.length > 0);

  const renderMedia = (item, popup = false, index = 0) => {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={popup ? "popup-media" : "project-media"}
      />
    );
  }

  return (
    <img
      src={item.src}
      alt="Portfolio work"
      loading={popup || index === 0 ? "eager" : "lazy"}
      fetchPriority={popup || index === 0 ? "high" : "low"}
      decoding="async"
      className={popup ? "popup-media" : "project-media"}
    />
  );
};

  const handleClick = (project) => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
      return;
    }

    setSelectedProject(project);
    setShowModal(true);
  };

  const closePopup = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="portfolio-section">
      <style>{`
        .portfolio-section{
          padding:120px 0;
          background:linear-gradient(180deg,#ffffff 0%,#f8f7ff 100%);
          overflow:hidden;
        }

        .portfolio-container{
          max-width:1500px;
          padding-left:28px;
          padding-right:28px;
        }

        .portfolio-title{
          font-size:14px;
          font-weight:800;
          letter-spacing:3px;
          color:#7c3aed;
          text-transform:uppercase;
        }

        .portfolio-heading{
          font-size:48px;
          font-weight:950;
          background:linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4);
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
        }

        .filter-btn,
        .sub-filter-btn{
          border:1px solid #e5e7eb;
          background:#fff;
          padding:9px 20px;
          border-radius:30px;
          margin:5px;
          font-weight:700;
          cursor:pointer;
          transition:0.3s ease;
          color:#344054;
        }

        .filter-btn:hover,
        .sub-filter-btn:hover{
          border-color:#7c3aed;
          color:#7c3aed;
          transform:translateY(-2px);
        }

        .filter-btn.active,
        .sub-filter-btn.active{
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          color:#fff;
          border-color:transparent;
        }

        .sub-filter-wrap{
          text-align:center;
          margin:22px 0 34px;
        }

        .sub-filter-btn{
          font-size:13px;
          padding:8px 16px;
          background:rgba(255,255,255,0.82);
          backdrop-filter:blur(8px);
          -webkit-backdrop-filter:blur(8px);
        }

        .category-section{
          margin-bottom:75px;
        }

        .section-header{
          text-align:center;
          margin-bottom:20px;
        }

        .section-kicker{
          display:inline-flex;
          padding:8px 18px;
          border-radius:999px;
          background:rgba(124,58,237,0.08);
          color:#7c3aed;
          font-size:13px;
          font-weight:900;
          margin-bottom:14px;
        }

        .section-heading{
          font-size:36px;
          font-weight:950;
          margin-bottom:10px;
          background:linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4);
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
        }

        .section-desc{
          max-width:700px;
          margin:0 auto;
          color:#667085;
          font-size:16px;
          line-height:1.7;
        }

        .project-col{
  display:flex;
  padding-top:24px;
}

        .project-box{
  width:100%;
  position:relative;
  background:#fff;
  border-radius:30px;
  padding:12px;
  box-shadow:0 25px 70px rgba(16,24,40,0.12);
  border:1px solid rgba(124,58,237,0.12);
  cursor:pointer;
  transition:0.35s ease;
  overflow:visible;
}

        .project-box:hover{
          transform:translateY(-8px);
          box-shadow:0 35px 90px rgba(124,58,237,0.22);
        }

        .project-name-badge{
  position:absolute;
  top:-18px;
  left:24px;
  z-index:50;
  padding:10px 18px;
  border-radius:999px;
  background:rgba(255,255,255,0.92);
  color:#111827;
  border:1px solid rgba(255,255,255,0.95);
  backdrop-filter:blur(16px);
  -webkit-backdrop-filter:blur(16px);
  box-shadow:
    0 12px 30px rgba(16,24,40,0.14),
    0 4px 12px rgba(124,58,237,0.12);
  font-size:13px;
  font-weight:900;
  letter-spacing:.3px;
}

        .project-carousel,
        .project-carousel .carousel-inner,
        .project-carousel .carousel-item{
          width:100%;
          height:100%;
          border-radius:24px;
          background:#fff;
        }

        .project-media{
          width:100%;
          height:430px;
          object-fit:contain;
          object-position:center;
          display:block;
          border-radius:24px;
          background:#fff;
        }

        .website-cta{
          position:absolute;
          left:18px;
          bottom:18px;
          z-index:10;
          padding:10px 18px;
          border-radius:30px;
          background:rgba(255,255,255,0.72);
          color:#7c3aed;
          border:1.5px solid #7c3aed;
          font-size:14px;
          font-weight:800;
          backdrop-filter:blur(8px);
          -webkit-backdrop-filter:blur(8px);
          transition:all 0.3s ease;
        }

        .project-box:hover .website-cta{
          background:linear-gradient(90deg,#7c3aed,#ec4899);
          color:#fff;
          border-color:transparent;
          box-shadow:0 12px 30px rgba(124,58,237,0.35);
        }

        .tiktok-feed-wrapper{
          overflow:hidden;
          width:100%;
          position:relative;
          padding:10px 0 30px;
        }

        .tiktok-feed-track{
          display:flex;
          gap:24px;
          width:max-content;
          animation:tiktokAutoScroll 22s linear infinite;
        }

        .tiktok-feed-wrapper:hover .tiktok-feed-track{
          animation-play-state:paused;
        }

        .tiktok-card{
          width:310px;
          flex:0 0 auto;
          background:#fff;
          border-radius:30px;
          padding:12px;
          box-shadow:0 25px 70px rgba(16,24,40,0.14);
          border:1px solid rgba(124,58,237,0.12);
          overflow:hidden;
          transition:0.35s ease;
        }

        .tiktok-card:hover{
          transform:translateY(-8px) scale(1.02);
          box-shadow:0 35px 90px rgba(124,58,237,0.22);
        }

        .tiktok-video{
          width:100%;
          height:540px;
          object-fit:cover;
          display:block;
          border-radius:24px;
          background:#fff;
        }

        @keyframes tiktokAutoScroll{
          from{ transform:translateX(0); }
          to{ transform:translateX(-50%); }
        }

        .carousel-indicators{
          bottom:12px;
          margin-bottom:0;
          gap:7px;
          align-items:center;
        }

        .carousel-indicators [data-bs-target]{
          width:24px;
          height:6px;
          border-radius:999px;
          border:0;
          background:rgba(17,24,39,0.22);
          opacity:1;
          transition:all 0.3s ease;
        }

        .carousel-indicators .active{
          width:38px;
          background:linear-gradient(90deg,#7c3aed,#ec4899,#06b6d4);
          box-shadow:0 6px 18px rgba(124,58,237,0.35);
        }

        .carousel-control-prev,
        .carousel-control-next{
          width:46px;
          height:46px;
          top:50%;
          transform:translateY(-50%);
          background:rgba(255,255,255,0.95);
          border-radius:50%;
          opacity:1;
          margin:0 12px;
          box-shadow:0 10px 25px rgba(0,0,0,0.15);
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon{
          filter:invert(1);
          width:18px;
          height:18px;
        }

        .portfolio-popup .modal-dialog{
          max-width:1180px;
          width:94%;
        }

        .portfolio-popup .modal-content{
          border:none;
          border-radius:34px;
          overflow:hidden;
          background:#ffffff;
          box-shadow:0 40px 120px rgba(16,24,40,0.28);
        }

        .popup-body{
          padding:18px;
          position:relative;
          background:linear-gradient(135deg,#ffffff,#f8f7ff);
        }

        .popup-close{
          position:absolute;
          top:24px;
          right:24px;
          z-index:20;
          width:42px;
          height:42px;
          border-radius:50%;
          border:none;
          background:rgba(255,255,255,0.96);
          color:#111;
          font-size:24px;
          line-height:1;
          box-shadow:0 10px 30px rgba(0,0,0,0.18);
        }

        .popup-carousel,
        .popup-carousel .carousel-inner,
        .popup-carousel .carousel-item{
          width:100%;
          border-radius:26px;
          background:#fff;
        }

        .popup-media{
          width:100%;
          height:76vh;
          max-height:760px;
          object-fit:contain;
          object-position:center;
          background:#fff;
          display:block;
          border-radius:26px;
        }

        @media(max-width:1399px){
          .portfolio-container{
            max-width:1320px;
          }

          .project-media{
            height:400px;
          }
        }

        @media(max-width:1199px){
          .project-media{
            height:390px;
          }

          .tiktok-card{
            width:290px;
          }

          .tiktok-video{
            height:510px;
          }
        }

        @media(max-width:991px){
          .project-media{
            height:420px;
          }

          .tiktok-card{
            width:270px;
          }

          .tiktok-video{
            height:480px;
          }
        }

        @media(max-width:768px){
          .portfolio-section{
            padding:80px 0;
          }

          .portfolio-heading{
            font-size:34px;
          }

          .portfolio-container{
            max-width:100%;
            padding-left:12px;
            padding-right:12px;
          }

          .section-heading{
            font-size:28px;
          }

          .section-desc{
            font-size:14px;
          }

          .project-box{
            border-radius:22px;
            padding:8px;
          }

          .project-name-badge{
  top:-30px;
  left:16px;
  font-size:14px;
  padding:8px 10px;
}
          .project-carousel,
          .project-carousel .carousel-inner,
          .project-carousel .carousel-item{
            border-radius:18px;
          }

          .project-media{
            width:100%;
            height:auto;
            min-height:360px;
            max-height:520px;
            object-fit:contain;
            border-radius:18px;
            background:#fff;
          }

          .website-cta{
            left:14px;
            bottom:14px;
            font-size:13px;
            padding:9px 15px;
          }

          .carousel-indicators [data-bs-target]{
            width:18px;
            height:5px;
          }

          .carousel-indicators .active{
            width:30px;
          }

          .tiktok-feed-track{
            gap:16px;
            animation-duration:18s;
          }

          .tiktok-card{
            width:240px;
            border-radius:24px;
            padding:8px;
          }

          .tiktok-video{
            height:430px;
            border-radius:18px;
          }

          .portfolio-popup .modal-dialog{
            max-width:100%;
            width:100%;
            margin:0;
          }

          .portfolio-popup .modal-content{
            min-height:100vh;
            border-radius:0;
          }

          .popup-body{
            min-height:100vh;
            display:flex;
            align-items:center;
            padding:54px 10px 20px;
            background:#fff;
          }

          .popup-carousel{
            width:100%;
            border-radius:18px;
          }

          .popup-media{
            width:100%;
            height:auto;
            max-height:82vh;
            object-fit:contain;
            border-radius:18px;
            background:#fff;
          }

          .popup-close{
            top:14px;
            right:14px;
          }
        }

        @media(max-width:480px){
          .portfolio-heading{
            font-size:30px;
          }

          .project-media{
            min-height:330px;
          }

          .filter-btn,
          .sub-filter-btn{
            font-size:13px;
            padding:8px 14px;
          }
        }
          .project-media,
.popup-media{
  content-visibility:auto;
}
      `}</style>

      <Container fluid className="portfolio-container">
        <div className="text-center mb-5">
          <h5 className="portfolio-title">Our Work</h5>
          <h1 className="portfolio-heading">Our Latest Projects</h1>
          <p className="text-muted">
            Explore how we've helped businesses grow with AI-powered solutions
          </p>
        </div>

        <div className="text-center mb-5">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {groupedByCategory.map((section) => {
          const subCategories = getSubCategories(section.allProjects);
          const selectedSub = subActive[section.category] || "All";

          return (
            <div className="category-section" key={section.category}>
              <div className="section-header">
                <span className="section-kicker">{section.category}</span>
                <h2 className="section-heading">{section.heading}</h2>
                <p className="section-desc">{section.desc}</p>
              </div>

              {active !== "All" && (
                <div className="sub-filter-wrap">
                  {subCategories.map((sub, i) => (
                    <button
                      key={i}
                      className={`sub-filter-btn ${selectedSub === sub ? "active" : ""
                        }`}
                      onClick={() =>
                        setSubActive((prev) => ({
                          ...prev,
                          [section.category]: sub,
                        }))
                      }
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}

              {section.category === "TikTok Shop" ? (
                <div className="tiktok-feed-wrapper">
                  <div className="tiktok-feed-track">
                    {section.projects[0]?.media &&
                      [
                        ...section.projects[0].media,
                        ...section.projects[0].media,
                      ].map((item, i) => (
                        <div className="tiktok-card" key={i}>
                          <video
                            src={item.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="tiktok-video"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <Row className="g-4 justify-content-center">
                  {section.projects.map((project, index) => (
                    <Col
                      xxl={4}
                      xl={4}
                      lg={5}
                      md={6}
                      sm={10}
                      xs={12}
                      key={index}
                      className="project-col"
                    >
                      <div
                        className="project-box"
                        onClick={() => handleClick(project)}
                      >
                        {project.category === "AI E-Commerce & AI Websites" && (
                          <div className="project-name-badge">
                            {project.title}
                          </div>
                        )}
                        <Carousel
                          interval={2500}
                          indicators={true}
                          controls={false}
                          pause="hover"
                          touch={false}
                          className="project-carousel"
                        >
                          {getProjectMedia(project).map((item, i) => (
                            <Carousel.Item key={i}>
                              {renderMedia(item, false, i)}
                            </Carousel.Item>
                          ))}
                        </Carousel>

                        {project.link && (
                          <div className="website-cta">View Website →</div>
                        )}
                      </div>
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          );
        })}
      </Container>

      <Modal
        show={showModal}
        onHide={closePopup}
        centered
        className="portfolio-popup"
      >
        <Modal.Body className="popup-body">
          <button className="popup-close" onClick={closePopup}>
            ×
          </button>

          {selectedProject && (
            <Carousel
              interval={2200}
              indicators={true}
              controls={true}
              pause="hover"
              touch={true}
              className="popup-carousel"
            >
              {getProjectMedia(selectedProject).map((item, i) => (
                <Carousel.Item key={i}>{renderMedia(item, true, i)}</Carousel.Item>
              ))}
            </Carousel>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default OurWork;