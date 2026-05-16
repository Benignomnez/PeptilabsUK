// Example generator — run: node scripts/generate-product-example.mjs
import { createCanvas } from 'canvas'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))
const W = 1080, H = 1080

function generateProductImage(name, dose, category) {
  const canvas = createCanvas(W, H)
  const ctx = canvas.getContext('2d')

  // ── Background ─────────────────────────────────────────────────────────
  const bg = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W * 0.85)
  bg.addColorStop(0, '#0d1a35')
  bg.addColorStop(1, '#030810')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, W, H)

  // ── Gold ground glow ────────────────────────────────────────────────────
  const groundGlow = ctx.createRadialGradient(W/2, H * 0.82, 0, W/2, H * 0.82, 320)
  groundGlow.addColorStop(0, 'rgba(212,160,23,0.55)')
  groundGlow.addColorStop(0.4, 'rgba(212,160,23,0.18)')
  groundGlow.addColorStop(1, 'transparent')
  ctx.fillStyle = groundGlow
  ctx.fillRect(0, 0, W, H)

  // ── Vial glow ───────────────────────────────────────────────────────────
  const vialGlow = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, 280)
  vialGlow.addColorStop(0, 'rgba(212,160,23,0.22)')
  vialGlow.addColorStop(1, 'transparent')
  ctx.fillStyle = vialGlow
  ctx.fillRect(0, 0, W, H)

  // ── Gold particles ──────────────────────────────────────────────────────
  const rng = (seed) => { let x = Math.sin(seed) * 10000; return x - Math.floor(x) }
  for (let i = 0; i < 80; i++) {
    const px = rng(i * 3.7) * W
    const py = rng(i * 5.3) * H
    const size = rng(i * 1.9) * 2.5 + 0.5
    const alpha = rng(i * 7.1) * 0.4 + 0.1
    ctx.beginPath()
    ctx.arc(px, py, size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(212,160,23,${alpha})`
    ctx.fill()
  }

  // ══ VIAL ════════════════════════════════════════════════════════════════
  const vx = W / 2, vy = H * 0.52
  const vw = 200, vh = 310, vr = 30

  // Vial shadow
  ctx.save()
  ctx.shadowColor = 'rgba(212,160,23,0.5)'
  ctx.shadowBlur = 60

  // Glass body
  const glassGrad = ctx.createLinearGradient(vx - vw/2, 0, vx + vw/2, 0)
  glassGrad.addColorStop(0, 'rgba(200,220,255,0.10)')
  glassGrad.addColorStop(0.3, 'rgba(220,235,255,0.55)')
  glassGrad.addColorStop(0.7, 'rgba(200,220,255,0.45)')
  glassGrad.addColorStop(1, 'rgba(180,200,240,0.12)')
  ctx.fillStyle = glassGrad
  ctx.beginPath()
  ctx.roundRect(vx - vw/2, vy - vh/2, vw, vh, [vr, vr, vr*1.5, vr*1.5])
  ctx.fill()
  ctx.restore()

  // Glass border
  ctx.strokeStyle = 'rgba(200,220,255,0.35)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.roundRect(vx - vw/2, vy - vh/2, vw, vh, [vr, vr, vr*1.5, vr*1.5])
  ctx.stroke()

  // Glass shine left
  const shineGrad = ctx.createLinearGradient(vx - vw/2 + 10, 0, vx - vw/2 + 42, 0)
  shineGrad.addColorStop(0, 'rgba(255,255,255,0)')
  shineGrad.addColorStop(0.5, 'rgba(255,255,255,0.18)')
  shineGrad.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = shineGrad
  ctx.save()
  ctx.beginPath()
  ctx.roundRect(vx - vw/2, vy - vh/2, vw, vh, [vr, vr, vr*1.5, vr*1.5])
  ctx.clip()
  ctx.fillRect(vx - vw/2 + 10, vy - vh/2, 32, vh)
  ctx.restore()

  // ── Neck ─────────────────────────────────────────────────────────────────
  const neckW = vw * 0.62, neckH = 48, neckX = vx - neckW/2, neckY = vy - vh/2 - neckH
  ctx.fillStyle = 'rgba(200,220,255,0.40)'
  ctx.beginPath()
  ctx.roundRect(neckX, neckY, neckW, neckH + 10, [10, 10, 0, 0])
  ctx.fill()
  ctx.strokeStyle = 'rgba(200,220,255,0.30)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  // ── Cap (dark red + silver) ───────────────────────────────────────────────
  const capW = vw * 0.72, capH = 50, capX = vx - capW/2, capY = neckY - capH + 8
  // Silver ring
  const silverGrad = ctx.createLinearGradient(capX, 0, capX + capW, 0)
  silverGrad.addColorStop(0, '#8a9aaa')
  silverGrad.addColorStop(0.4, '#d0dae0')
  silverGrad.addColorStop(0.6, '#c0cad0')
  silverGrad.addColorStop(1, '#7a8a9a')
  ctx.fillStyle = silverGrad
  ctx.beginPath()
  ctx.roundRect(capX, capY + 28, capW, 22, [0, 0, 4, 4])
  ctx.fill()

  // Red cap
  const capGrad = ctx.createLinearGradient(capX, 0, capX + capW, 0)
  capGrad.addColorStop(0, '#5a0a0a')
  capGrad.addColorStop(0.35, '#c01515')
  capGrad.addColorStop(0.65, '#aa1010')
  capGrad.addColorStop(1, '#4a0808')
  ctx.fillStyle = capGrad
  ctx.beginPath()
  ctx.roundRect(capX, capY, capW, 38, [10, 10, 2, 2])
  ctx.fill()
  // Cap shine
  ctx.fillStyle = 'rgba(255,255,255,0.12)'
  ctx.beginPath()
  ctx.roundRect(capX + 10, capY + 4, capW * 0.4, 12, 4)
  ctx.fill()

  // ── Label ─────────────────────────────────────────────────────────────────
  const lx = vx - vw/2 + 6, ly = vy - vh/2 + vh * 0.25, lw = vw - 12, lh = vh * 0.52
  // White label bg
  ctx.save()
  ctx.beginPath()
  ctx.roundRect(lx, ly, lw, lh, 6)
  ctx.clip()
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(lx, ly, lw, lh)
  // Gold top stripe
  ctx.fillStyle = '#d4a017'
  ctx.fillRect(lx, ly, lw, 8)
  // Gold bottom stripe
  ctx.fillStyle = '#d4a017'
  ctx.fillRect(lx, ly + lh - 8, lw, 8)
  // Dark red DNA-stripe bg at bottom
  ctx.fillStyle = '#8b0000'
  ctx.fillRect(lx, ly + lh - 55, lw, 47)

  // PeptiLabs brand text
  ctx.fillStyle = '#8b0000'
  ctx.font = 'bold 18px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('Pepti', vx - 8, ly + 32)
  ctx.fillStyle = '#d4a017'
  ctx.fillText('labs', vx + 16, ly + 32)

  // Product name on label
  ctx.fillStyle = '#8b0000'
  ctx.font = `bold ${name.length > 8 ? 22 : 26}px "Arial Black", Arial`
  ctx.textAlign = 'center'
  ctx.fillText(name, vx, ly + 68)

  // Dose badge on label
  const doseW = 100, doseH = 22, doseX = vx - doseW/2, doseY = ly + 76
  ctx.fillStyle = '#d4a017'
  ctx.beginPath()
  ctx.roundRect(doseX, doseY, doseW, doseH, 4)
  ctx.fill()
  ctx.fillStyle = '#1a0a00'
  ctx.font = 'bold 13px Arial'
  ctx.fillText(dose, vx, doseY + 15)

  // "FOR RESEARCH USE ONLY" text
  ctx.fillStyle = '#ffffff'
  ctx.font = '9px Arial'
  ctx.fillText('FOR RESEARCH USE ONLY', vx, ly + lh - 38)
  ctx.fillText('NOT FOR HUMAN CONSUMPTION', vx, ly + lh - 26)

  // Made in UK flag area (small)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 9px Arial'
  ctx.fillText('🇬🇧 MADE IN UK', vx + 28, ly + 18)

  ctx.restore()

  // ── Reflection ────────────────────────────────────────────────────────────
  ctx.save()
  ctx.globalAlpha = 0.12
  ctx.scale(1, -1)
  ctx.translate(0, -(vy + vh/2) * 2 - 10)
  ctx.beginPath()
  ctx.roundRect(vx - vw/2, vy - vh/2, vw, vh * 0.3, [0, 0, vr, vr])
  ctx.fillStyle = 'rgba(200,220,255,0.5)'
  ctx.fill()
  ctx.restore()

  // ══ PRODUCT NAME (top) ═══════════════════════════════════════════════════
  ctx.textAlign = 'center'
  ctx.shadowColor = 'rgba(0,0,0,0.8)'
  ctx.shadowBlur = 20

  const nameUpper = name.toUpperCase()
  ctx.font = `bold ${nameUpper.length > 12 ? 68 : 80}px "Arial Black", Arial`
  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.5)'
  ctx.fillText(nameUpper, W/2 + 3, 155)
  // White text
  ctx.fillStyle = '#ffffff'
  ctx.fillText(nameUpper, W/2, 152)
  ctx.shadowBlur = 0

  // ── Dose badge (top) ─────────────────────────────────────────────────────
  const topBadgeW = dose.length * 18 + 40
  const topBadgeX = W/2 - topBadgeW/2
  ctx.fillStyle = '#d4a017'
  ctx.beginPath()
  ctx.roundRect(topBadgeX, 168, topBadgeW, 46, 10)
  ctx.fill()
  ctx.fillStyle = '#1a0a00'
  ctx.font = 'bold 26px Arial'
  ctx.fillText(dose, W/2, 199)

  // ── UK Badge (top right) ─────────────────────────────────────────────────
  const bx = W - 140, by = 60, br = 70
  // Outer gold ring
  ctx.strokeStyle = '#d4a017'
  ctx.lineWidth = 4
  ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2); ctx.stroke()
  // Inner dark fill
  ctx.fillStyle = 'rgba(6,13,31,0.85)'
  ctx.beginPath(); ctx.arc(bx, by, br - 4, 0, Math.PI * 2); ctx.fill()
  // UK flag emoji
  ctx.font = '40px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('🇬🇧', bx, by - 4)
  ctx.font = 'bold 11px Arial'
  ctx.fillStyle = '#ffffff'
  ctx.fillText('SHIPS FROM', bx, by + 22)
  ctx.fillStyle = '#d4a017'
  ctx.font = 'bold 13px Arial'
  ctx.fillText('UK', bx, by + 38)

  // ══ BOTTOM TRUST BADGES ══════════════════════════════════════════════════
  const badges = [
    { icon: '🔬', line1: 'PÉPTIDOS DE', line2: 'INVESTIGACIÓN' },
    { icon: '🛡️', line1: 'ESTÁNDARES', line2: 'DE CALIDAD' },
    { icon: '⚗️', line1: 'NO PARA', line2: 'CONSUMO HUMANO' },
    { icon: '🚚', line1: 'ENVÍO DISCRETO', line2: 'DESDE REINO UNIDO' },
  ]
  const badgeY = H - 140
  const badgeSpacing = W / badges.length

  badges.forEach((b, i) => {
    const cx = badgeSpacing * i + badgeSpacing / 2

    // Circle
    ctx.strokeStyle = '#d4a017'
    ctx.lineWidth = 2.5
    ctx.beginPath(); ctx.arc(cx, badgeY, 32, 0, Math.PI * 2); ctx.stroke()
    ctx.fillStyle = 'rgba(212,160,23,0.08)'
    ctx.beginPath(); ctx.arc(cx, badgeY, 32, 0, Math.PI * 2); ctx.fill()

    // Icon
    ctx.font = '26px Arial'
    ctx.textAlign = 'center'
    ctx.fillText(b.icon, cx, badgeY + 10)

    // Text
    ctx.fillStyle = '#d4a017'
    ctx.font = 'bold 11px Arial'
    ctx.fillText(b.line1, cx, badgeY + 52)
    ctx.fillStyle = 'rgba(255,255,255,0.7)'
    ctx.font = '10px Arial'
    ctx.fillText(b.line2, cx, badgeY + 66)
  })

  // Bottom separator line
  ctx.strokeStyle = 'rgba(212,160,23,0.3)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(60, H - 170); ctx.lineTo(W - 60, H - 170)
  ctx.stroke()

  return canvas.toBuffer('image/png')
}

// Generate example
const buf = generateProductImage('BPC-157', '5mg', 'Regeneración & Salud')
const out = join(dirname(fileURLToPath(import.meta.url)), '../public/example-product.png')
writeFileSync(out, buf)
console.log('✅  example saved to public/example-product.png')
