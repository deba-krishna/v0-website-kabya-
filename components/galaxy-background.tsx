"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function GalaxyBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 3
    cameraRef.current = camera

    // Renderer setup with GPU acceleration
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const particlesCount = 600
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)

    const color1 = new THREE.Color(0xc8b6e8) // Soft pastel lavender
    const color2 = new THREE.Color(0xb8c5e0) // Pale blue-grey

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3

      // Create galaxy spiral distribution
      const radius = Math.random() * 5
      const spinAngle = radius * 2
      const branchAngle = ((i % 3) / 3) * Math.PI * 2

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * 0.5
      positions[i3 + 1] = (Math.random() - 0.5) * 2
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * 0.5

      // Gradient colors from pastel lavender to pale blue
      const mixedColor = color1.clone()
      mixedColor.lerp(color2, Math.random())

      colors[i3] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const canvas = document.createElement("canvas")
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext("2d")!

    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    gradient.addColorStop(0, "rgba(200,182,232,0.4)") // Reduced opacity
    gradient.addColorStop(0.5, "rgba(184,197,224,0.2)") // Much lighter
    gradient.addColorStop(1, "rgba(200,182,232,0)") // Fully transparent

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 32, 32)

    const texture = new THREE.CanvasTexture(canvas)

    const material = new THREE.PointsMaterial({
      size: 0.035, // Reduced from 0.05
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.4, // Added reduced opacity
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = particles

    // Mouse move handler for interactivity
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    // Touch move handler for mobile
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouseRef.current.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1
        mouseRef.current.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener("resize", handleResize)

    let animationFrameId: number
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Rotate galaxy slowly - reduced speeds for subtlety
      if (particles) {
        particles.rotation.y += 0.0001 // Reduced from 0.0002
        particles.rotation.x += 0.00005 // Reduced from 0.0001

        // Mouse parallax effect - reduced for subtlety
        particles.rotation.y += mouseRef.current.x * 0.00002 // Reduced from 0.00005
        particles.rotation.x += mouseRef.current.y * 0.00002 // Reduced from 0.00005
      }

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("resize", handleResize)

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }

      geometry.dispose()
      material.dispose()
      texture.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at center, rgba(76, 29, 149, 0.03) 0%, rgba(15, 15, 15, 1) 80%)",
      }}
    />
  )
}
