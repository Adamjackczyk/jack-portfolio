"use client"
/**
 * Starfield.tsx
 * Renders a lightweight GPU starfield behind the hero.
 * - GLSL loaded from /public/shaders at runtime (no bundler loaders)
 * - Local stacking: container is z-0; hero content is z-10 in an `isolate` context
 * - Pointer events disabled so canvas never blocks clicks
 */

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function Starfield() {
  const hostRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let renderer: THREE.WebGLRenderer | null = null
    let scene: THREE.Scene | null = null
    let camera: THREE.PerspectiveCamera | null = null
    let points: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial> | null = null
    let raf = 0

    const loadShaders = async () => {
      const [vert, frag] = await Promise.all([
        fetch("/shaders/starfield.vert").then(r => r.text()),
        fetch("/shaders/starfield.frag").then(r => r.text()),
      ])
      return { vert, frag }
    }

    const init = async () => {
      if (!hostRef.current) return
      const { clientWidth: width, clientHeight: height } = hostRef.current

      // Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: "high-performance",
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(width, height)
      renderer.outputColorSpace = THREE.SRGBColorSpace
      renderer.setClearColor(0x000000, 1) // guarantee dark backdrop
      hostRef.current.appendChild(renderer.domElement)

      // Scene + camera
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000)
      camera.position.z = 6

      // Geometry
      const COUNT = 850 
      const positions = new Float32Array(COUNT * 3)
      const scales = new Float32Array(COUNT)
      const colors = new Float32Array(COUNT * 3)

      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3
        const r = 12 * Math.cbrt(Math.random())
        const theta = Math.random() * Math.PI * 2.0
        const phi = Math.acos(2.0 * Math.random() - 1.0)
        positions[i3 + 0] = r * Math.sin(phi) * Math.cos(theta)
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        positions[i3 + 2] = r * Math.cos(phi)
        scales[i] = 0.6 + Math.random() * 0.8
        colors[i3 + 0] = Math.random()
        colors[i3 + 1] = Math.random() * 0.5
        colors[i3 + 2] = Math.random() + 0.5
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1))
      geo.setAttribute("aColor", new THREE.BufferAttribute(colors, 3))

      // Material from external GLSL
      const { vert, frag } = await loadShaders()
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uTime: { value: 0 } },
        vertexShader: vert,
        fragmentShader: frag,
      })

      points = new THREE.Points(geo, mat)
      scene.add(points)

      // Resize
      const onResize = () => {
        if (!hostRef.current || !renderer || !camera) return
        const w = hostRef.current.clientWidth
        const h = hostRef.current.clientHeight
        renderer.setSize(w, h)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      window.addEventListener("resize", onResize)

      // Animate
      const clock = new THREE.Clock()
      const loop = () => {
        const uTime = mat.uniforms.uTime as { value: number }
        uTime.value = clock.getElapsedTime()
        renderer!.render(scene!, camera!)
        raf = requestAnimationFrame(loop)
      }
      loop()

      setReady(true)

      // Cleanup
      return () => {
        cancelAnimationFrame(raf)
        window.removeEventListener("resize", onResize)
        try {
          renderer?.dispose()
          hostRef.current?.removeChild(renderer!.domElement)
        } catch {}
        geo.dispose()
        mat.dispose()
        renderer = null
        scene = null
        camera = null
        points = null
      }
    }

    const cleanupMaybe = init()
    return () => {
      cleanupMaybe?.then(fn => {
        if (typeof fn === "function") fn()
      }).catch(() => {})
    }
  }, [])

  // Absolute background layer inside the hero's isolated stacking context
  return (
    <div
      ref={hostRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden
    >
      {!ready && (
        <div
          className="
            w-full h-full
            bg-[radial-gradient(circle_at_30%_30%,rgba(150,100,255,.25),transparent_60%),
                radial-gradient(circle_at_70%_70%,rgba(150,100,255,.15),transparent_60%)]
          "
        />
      )}
    </div>
  )
}
