/** Index-based image URLs — one unique image per card position */

const img = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`

export const hospitalityImages = {
  "Hotel Room": [
    img("photo-1618773928121-c32242e63f39"),
    img("photo-1648383228240-6ed939727ad6"),
    img("photo-1590490360182-c33d57733427"),
    img("photo-1708397016786-8916880649b8"),
  ],
  "Lobby & Common Areas": [
    img("photo-1587702068694-a909ef4aa346"),
    img("photo-1692214214029-324664cbfb4e"),
    img("photo-1770461129148-0ccbd2d9ffdb"),
    img("photo-1759038086832-795644825e3a"),
  ],
  "Restaurant Area": [
    img("photo-1517248135467-4c7edcad34c4"),
    img("photo-1555396273-367ea4eb4db5"),
    img("photo-1615066390971-03e4e1c36ddf"),
    img("photo-1567074019680-942e115c6a1d"),
  ],
} as const

export const restaurantImages = {
  "Dining Chairs": [
    img("photo-1567538096630-e0c55bd6374c"),
    img("photo-1503602642458-232111445657"),
    img("photo-1592078615290-033ee584e267"),
    img("photo-1683463170518-00d75843f055"),
    img("photo-1586023492125-27b2c045efd7"),
    img("photo-1601640563602-7d787be8c0bb"),
  ],
  "Bar & High Chairs": [
    img("photo-1634798245965-03669c757183"),
    img("photo-1583227061267-8428fb76fbfd"),
    img("photo-1727009938102-347a6a0eddba"),
  ],
  "Solid Wood Tables": [
    img("photo-1615066390971-03e4e1c36ddf"),
    img("photo-1734163860326-3b857eb5744d"),
    img("photo-1594000311835-6d564e5a46b3"),
    img("photo-1619311731741-d82f87274198"),
  ],
  "Booth Seating": [
    img("photo-1555396273-367ea4eb4db5"),
    img("photo-1517248135467-4c7edcad34c4"),
    img("photo-1774295294311-f194e6b9f8a8"),
    img("photo-1669310095420-8cd109dba5cb"),
    img("photo-1503602642458-232111445657"),
    img("photo-1598300042247-d088f8dd3a91"),
    img("photo-1615066390971-03e4e1c36ddf"),
    img("photo-1544161515-4ab6ce6db874"),
  ],
} as const

/** Base / wall / tall cabinet spec cards — unique image per index */
export const cabinetSpecImages = {
  base: [
    img("photo-1556911220-e15b29be8c8f"),
    img("photo-1600585154340-be6161a56a0c"),
    img("photo-1588854337236-6889d631faa8"),
    img("photo-1556909114-f6e7ad7d3136"),
    img("photo-1484154218962-a197022b5858"),
    img("photo-1556912173-3bb406ef7e77?w=600"),
  ],
  wall: [
    img("photo-1722605090433-41d1183a792d"),
    img("photo-1701421047855-d7bafd8d6f69"),
    img("photo-1588854337236-6889d631faa8"),
    img("photo-1610733374054-59454fe657cd"),
  ],
  tall: [
    img("photo-1588854337236-6889d631faa8"),
    img("photo-1541537594862-e040a153cbc7"),
  ],
} as const

function pickByIndex(urls: readonly string[], index: number): string {
  if (!urls.length) return ""
  return urls[index] ?? urls[urls.length - 1]
}

export function getHospitalityImage(
  subcategory: keyof typeof hospitalityImages,
  index: number
): string {
  return pickByIndex(hospitalityImages[subcategory], index)
}

export function getRestaurantImage(
  subcategory: keyof typeof restaurantImages,
  index: number
): string {
  return pickByIndex(restaurantImages[subcategory], index)
}

export function getCabinetSpecImage(
  group: keyof typeof cabinetSpecImages,
  index: number
): string {
  return pickByIndex(cabinetSpecImages[group], index)
}
