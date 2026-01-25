/*
 * @Author: DCBZ
 * @Date: 2026-01-25 14:03:38
 * @LastEditors: your name
 * @LastEditTime: 2026-01-25 15:31:00
 * @Description:
 * @FilePath: \inversa-clone\app\page.tsx
 */
// @ts-nocheck
"use client";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-img">
          <img src="/hero-img.jpg" alt="" />
        </div>
        <div className="hero-mask"></div>
        <div className="hero-grid-overlay">
          <img src="/grid-overlay.svg" alt="" />
        </div>
        <div className="marker marker-1">
          <span className="marker-icon"></span>
          <p className="marker-label">Anchor Field</p>
        </div>
        <div className="marker marker-2">
          <span className="marker-icon"></span>
          <p className="marker-label">B Field</p>
        </div>

        <div className="hero-content">
          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h1>Location Framework</h1>
            </div>
          </div>
          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h2>Coordinate Mapping</h2>
              <p>
                Terrain data is interpreted through directional vectors.
                Movement responds to relative position rather than absolute
                distance.
              </p>
            </div>
          </div>
          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h2>Coordinate Mapping</h2>
              <p>
                Terrain data is interpreted through directional vectors.
                Movement responds to relative position rather than absolute
                distance.
              </p>
            </div>
          </div>
          <div className="hero-content-block">
            <div className="hero-content-copy">
              <h2>Coordinate Mapping</h2>
              <p>
                Terrain data is interpreted through directional vectors.
                Movement responds to relative position rather than absolute
                distance.
              </p>
            </div>
          </div>
        </div>

        <div className="marker marker-3">
          <span className="marker-icon"></span>
          <p className="marker-label">C Field</p>
        </div>

        <div className="hero-scroll-progress-bar"></div>
      </section>
      <section className="outro">
        <p>The system has reached its final spatial state.</p>
      </section>
      <section className="outro"></section>
    </div>
  );
}
