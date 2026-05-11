// Generates public/og-image.png from an SVG template
// Run: node scripts/generate-og.mjs

import { createCanvas } from 'canvas'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dir, '../public/og-image.png')

const W = 1200
const H = 630

const canvas = createCanvas(W, H)
const ctx = canvas.getContext('2d')

// ── Background ──────────────────────────────────────────────────────────
const bg = ctx.createLinearGradient(0, 0, W, H)
bg.addColorStop(0, '#060d1f')
bg.addColorStop(1, '#0d1a35')
ctx.fillStyle = bg
ctx.fillRect(0, 0, W, H)

// ── Grid pattern (subtle) ───────────────────────────────────────────────
ctx.strokeStyle = 'rgba(212,160,23,0.06)'
ctx.lineWidth = 1
for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke() }

// ── Glow circles ───────────────────────────────────────────────────────
const glow1 = ctx.createRadialGradient(900, 150, 0, 900, 150, 320)
glow1.addColorStop(0, 'rgba(212,160,23,0.12)')
glow1.addColorStop(1, 'transparent')
ctx.fillStyle = glow1
ctx.fillRect(0, 0, W, H)

const glow2 = ctx.createRadialGradient(150, 500, 0, 150, 500, 280)
glow2.addColorStop(0, 'rgba(212,160,23,0.08)')
glow2.addColorStop(1, 'transparent')
ctx.fillStyle = glow2
ctx.fillRect(0, 0, W, H)

// ── Gold left accent bar ────────────────────────────────────────────────
ctx.fillStyle = '#d4a017'
ctx.fillRect(0, 0, 6, H)

// ── Flask icon (simplified path) ────────────────────────────────────────
ctx.save()
ctx.translate(80, 120)
ctx.strokeStyle = '#d4a017'
ctx.lineWidth = 5
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
// Body
ctx.beginPath()
ctx.moveTo(20, 0); ctx.lineTo(20, 30)
ctx.moveTo(40, 0); ctx.lineTo(40, 30)
ctx.moveTo(20, 0); ctx.lineTo(40, 0)
ctx.moveTo(20, 30); ctx.bezierCurveTo(5, 50, 0, 70, 5, 90)
ctx.moveTo(40, 30); ctx.bezierCurveTo(55, 50, 60, 70, 55, 90)
ctx.moveTo(5, 90); ctx.bezierCurveTo(5, 100, 55, 100, 55, 90)
ctx.stroke()
// Bubbles inside flask
ctx.fillStyle = 'rgba(212,160,23,0.5)'
ctx.beginPath(); ctx.arc(20, 70, 5, 0, Math.PI * 2); ctx.fill()
ctx.beginPath(); ctx.arc(35, 80, 4, 0, Math.PI * 2); ctx.fill()
ctx.restore()

// ── PEPTILABS text ──────────────────────────────────────────────────────
ctx.font = 'bold 110px "Arial Black", Arial'
ctx.fillStyle = '#ffffff'
ctx.fillText('PEPTI', 80, 280)

const peptiWidth = ctx.measureText('PEPTI').width
ctx.fillStyle = '#d4a017'
ctx.fillText('LABS', 80 + peptiWidth, 280)

// ® symbol
ctx.font = 'bold 40px Arial'
ctx.fillStyle = '#d4a017'
ctx.fillText('®', 80 + peptiWidth + ctx.measureText('LABS').width + 4, 220)

// ── Gold divider line ───────────────────────────────────────────────────
ctx.fillStyle = '#d4a017'
ctx.fillRect(80, 300, 200, 3)

// ── Subtitle ────────────────────────────────────────────────────────────
ctx.font = '500 28px Arial'
ctx.fillStyle = 'rgba(212,160,23,0.8)'
ctx.letterSpacing = '4px'
ctx.fillText('PHARMACEUTICAL GRADE PEPTIDE RESEARCH', 80, 350)

// ── Description ─────────────────────────────────────────────────────────
ctx.font = '400 26px Arial'
ctx.fillStyle = 'rgba(200,200,200,0.85)'
ctx.fillText('Péptidos de alta pureza >99%  ·  Enviados desde Reino Unido 🇬🇧', 80, 410)

// ── Trust badges row ────────────────────────────────────────────────────
const badges = ['✓ GMP Certified', '✓ HPLC Tested', '✓ Envío Discreto', '✓ +99% Pureza']
let bx = 80
ctx.font = '600 20px Arial'
badges.forEach(b => {
  const bw = ctx.measureText(b).width + 32
  // Badge bg
  ctx.fillStyle = 'rgba(212,160,23,0.12)'
  ctx.beginPath()
  ctx.roundRect(bx, 450, bw, 40, 8)
  ctx.fill()
  ctx.strokeStyle = 'rgba(212,160,23,0.3)'
  ctx.lineWidth = 1
  ctx.stroke()
  // Badge text
  ctx.fillStyle = '#d4a017'
  ctx.fillText(b, bx + 16, 476)
  bx += bw + 12
})

// ── CTA button (right side) ──────────────────────────────────────────────
const ctaText = '🛒  Ver Catálogo →'
ctx.font = 'bold 26px Arial'
const ctaW = ctx.measureText(ctaText).width + 48
const ctaX = W - 60 - ctaW
const ctaY = 490
ctx.fillStyle = '#d4a017'
ctx.beginPath()
ctx.roundRect(ctaX, ctaY, ctaW, 52, 10)
ctx.fill()
ctx.fillStyle = '#060d1f'
ctx.textAlign = 'left'
ctx.fillText(ctaText, ctaX + 24, ctaY + 34)

// ── Right side: URL + tagline ────────────────────────────────────────────
ctx.textAlign = 'right'
ctx.font = 'bold 28px Arial'
ctx.fillStyle = '#ffffff'
ctx.fillText('peptilabsuk.com', W - 60, 575)

ctx.font = '400 18px Arial'
ctx.fillStyle = 'rgba(212,160,23,0.6)'
ctx.fillText('Ciencia que transforma · Calidad que se siente', W - 60, 603)

// ── Bottom gold bar ──────────────────────────────────────────────────────
ctx.fillStyle = '#d4a017'
ctx.fillRect(0, H - 8, W, 8)

// ── Save ─────────────────────────────────────────────────────────────────
writeFileSync(OUT, canvas.toBuffer('image/png'))
console.log('✅  og-image.png saved to public/')
