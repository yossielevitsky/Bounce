/**
 * Bounce Gallery Configuration & Albums Data
 * 
 * Cloudinary Account: aeoi2tgz
 * Tag photos in Cloudinary with the album ID (e.g. 'bounce-2021-2022')
 * to have them automatically display on the website.
 */

const GALLERY_CONFIG = {
  // Cloudinary Cloud Name:
  cloudName: 'aeoi2tgz',

  /**
   * Generates an optimized thumbnail URL using Cloudinary on-the-fly transformations.
   */
  getThumbnailUrl(photo) {
    const id = typeof photo === 'string' ? photo : photo.id;
    if (!id) return '';
    if (id.startsWith('http://') || id.startsWith('https://') || id.startsWith('/') || id.startsWith('images/')) {
      return id;
    }
    return `https://res.cloudinary.com/${this.cloudName}/image/upload/c_fill,w_600,h_600,g_auto,q_auto,f_auto/${encodeURIComponent(id)}`;
  },

  /**
   * Generates a high-resolution URL for the fullscreen lightbox viewer.
   */
  getFullUrl(photo) {
    const id = typeof photo === 'string' ? photo : photo.id;
    if (!id) return '';
    if (id.startsWith('http://') || id.startsWith('https://') || id.startsWith('/') || id.startsWith('images/')) {
      return id;
    }
    return `https://res.cloudinary.com/${this.cloudName}/image/upload/c_limit,w_1920,q_auto,f_auto/${encodeURIComponent(id)}`;
  },

  /**
   * Extracts optional caption for a photo
   */
  getCaption(photo) {
    if (typeof photo === 'object' && photo.caption) {
      return photo.caption;
    }
    return '';
  }
};

/**
 * Registry of all albums on the website
 */
const GALLERY_ALBUMS = {
  // ==========================================
  // Category 1: Bounce
  // ==========================================
  'bounce-2021-2022': {
    id: 'bounce-2021-2022',
    title: 'Bounce 2021-2022',
    category: 'bounce',
    categoryTitle: 'Bounce',
    color: 'blue',
    coverImage: 'images/activities.jpg'
  },
  'bounce-2022-2023': {
    id: 'bounce-2022-2023',
    title: 'Bounce 2022-2023',
    category: 'bounce',
    categoryTitle: 'Bounce',
    color: 'blue',
    coverImage: 'images/1790774764195.jpg'
  },
  'bounce-2023-2024': {
    id: 'bounce-2023-2024',
    title: 'Bounce 2023-2024',
    category: 'bounce',
    categoryTitle: 'Bounce',
    color: 'blue',
    coverImage: 'images/WhatsApp%20Image%202026-06-29%20at%2013.11.01.jpeg'
  },
  'bounce-2024-2025': {
    id: 'bounce-2024-2025',
    title: 'Bounce 2024-2025',
    category: 'bounce',
    categoryTitle: 'Bounce',
    color: 'blue',
    coverImage: 'images/outings.jpg'
  },
  'bounce-2025-2026': {
    id: 'bounce-2025-2026',
    title: 'Bounce 2025-2026',
    category: 'bounce',
    categoryTitle: 'Bounce',
    color: 'blue',
    coverImage: 'images/WhatsApp%20Image%202026-06-29%20at%2013.11.02%20(1).jpeg'
  },
  'bounce-2026-2027': {
    id: 'bounce-2026-2027',
    title: 'Bounce 2026-2027',
    category: 'bounce',
    categoryTitle: 'Bounce',
    color: 'blue',
    coverImage: 'images/support.png'
  },

  // ==========================================
  // Category 2: Bounce+
  // ==========================================
  'bounce-plus-2024-2025': {
    id: 'bounce-plus-2024-2025',
    title: 'Bounce+ 2024-2025',
    category: 'bounce-plus',
    categoryTitle: 'Bounce+',
    color: 'pink',
    coverImage: 'images/volunteer.jpg'
  },
  'bounce-plus-2025-2026': {
    id: 'bounce-plus-2025-2026',
    title: 'Bounce+ 2025-2026',
    category: 'bounce-plus',
    categoryTitle: 'Bounce+',
    color: 'pink',
    coverImage: 'images/WhatsApp%20Image%202026-09-03%20at%2020.31.53.jpeg'
  },
  'bounce-plus-2026-2027': {
    id: 'bounce-plus-2026-2027',
    title: 'Bounce+ 2026-2027',
    category: 'bounce-plus',
    categoryTitle: 'Bounce+',
    color: 'pink',
    coverImage: 'images/about-bounce.jpeg'
  },

  // ==========================================
  // Category 3: Chanuka and Purim Parties
  // ==========================================
  'chanuka-purim-2021-2022': {
    id: 'chanuka-purim-2021-2022',
    title: 'Chanuka & Purim 2021-2022',
    category: 'chanuka-purim',
    categoryTitle: 'Chanuka & Purim Parties',
    color: 'orange',
    coverImage: 'images/WhatsApp%20Image%202026-06-29%20at%2013.11.01%20(1).jpeg'
  },
  'chanuka-purim-2022-2023': {
    id: 'chanuka-purim-2022-2023',
    title: 'Chanuka & Purim 2022-2023',
    category: 'chanuka-purim',
    categoryTitle: 'Chanuka & Purim Parties',
    color: 'orange',
    coverImage: 'images/activities.jpg'
  },
  'chanuka-purim-2023-2024': {
    id: 'chanuka-purim-2023-2024',
    title: 'Chanuka & Purim 2023-2024',
    category: 'chanuka-purim',
    categoryTitle: 'Chanuka & Purim Parties',
    color: 'orange',
    coverImage: 'images/1752104826202%20(1).jpg'
  },
  'chanuka-purim-2024-2025': {
    id: 'chanuka-purim-2024-2025',
    title: 'Chanuka & Purim 2024-2025',
    category: 'chanuka-purim',
    categoryTitle: 'Chanuka & Purim Parties',
    color: 'orange',
    coverImage: 'images/outings.jpg'
  },
  'chanuka-purim-2025-2026': {
    id: 'chanuka-purim-2025-2026',
    title: 'Chanuka & Purim 2025-2026',
    category: 'chanuka-purim',
    categoryTitle: 'Chanuka & Purim Parties',
    color: 'orange',
    coverImage: 'images/1790774764195.jpg'
  },
  'chanuka-purim-2026-2027': {
    id: 'chanuka-purim-2026-2027',
    title: 'Chanuka & Purim 2026-2027',
    category: 'chanuka-purim',
    categoryTitle: 'Chanuka & Purim Parties',
    color: 'orange',
    coverImage: 'images/WhatsApp%20Image%202026-06-29%20at%2013.11.01.jpeg'
  },

  // ==========================================
  // Category 4: Mothers Events
  // ==========================================
  'mothers-events-2023-2024': {
    id: 'mothers-events-2023-2024',
    title: 'Mothers Events 2023-2024',
    category: 'mothers-events',
    categoryTitle: 'Mothers Events',
    color: 'green',
    coverImage: 'images/support.png'
  },
  'mothers-events-2024-2025': {
    id: 'mothers-events-2024-2025',
    title: 'Mothers Events 2024-2025',
    category: 'mothers-events',
    categoryTitle: 'Mothers Events',
    color: 'green',
    coverImage: 'images/volunteer.jpg'
  },
  'mothers-events-2026-2027': {
    id: 'mothers-events-2026-2027',
    title: 'Mothers Events 2026-2027',
    category: 'mothers-events',
    categoryTitle: 'Mothers Events',
    color: 'green',
    coverImage: 'images/about-bounce.jpeg'
  },

  // ==========================================
  // Category 5: Siblings Events
  // ==========================================
  'siblings-events-2022-2023': {
    id: 'siblings-events-2022-2023',
    title: 'Siblings Events 2022-2023',
    category: 'siblings-events',
    categoryTitle: 'Siblings Events',
    color: 'pink',
    coverImage: 'images/WhatsApp%20Image%202026-06-29%20at%2013.11.02%20(1).jpeg'
  },
  'siblings-events-2023-2024': {
    id: 'siblings-events-2023-2024',
    title: 'Siblings Events 2023-2024',
    category: 'siblings-events',
    categoryTitle: 'Siblings Events',
    color: 'pink',
    coverImage: 'images/activities.jpg'
  },
  'siblings-events-2024-2025': {
    id: 'siblings-events-2024-2025',
    title: 'Siblings Events 2024-2025',
    category: 'siblings-events',
    categoryTitle: 'Siblings Events',
    color: 'pink',
    coverImage: 'images/WhatsApp%20Image%202026-09-03%20at%2020.31.53.jpeg'
  },
  'siblings-events-2025-2026': {
    id: 'siblings-events-2025-2026',
    title: 'Siblings Events 2025-2026',
    category: 'siblings-events',
    categoryTitle: 'Siblings Events',
    color: 'pink',
    coverImage: 'images/outings.jpg'
  },
  'siblings-events-2026-2027': {
    id: 'siblings-events-2026-2027',
    title: 'Siblings Events 2026-2027',
    category: 'siblings-events',
    categoryTitle: 'Siblings Events',
    color: 'pink',
    coverImage: 'images/1790774764195.jpg'
  },

  // ==========================================
  // Category 6: Shabbaton
  // ==========================================
  'shabbaton-2024-2025': {
    id: 'shabbaton-2024-2025',
    title: 'Shabbaton 2024-2025',
    category: 'shabbaton',
    categoryTitle: 'Shabbaton',
    color: 'blue',
    coverImage: 'images/activities.jpg'
  },
  'shabbaton-2025-2026': {
    id: 'shabbaton-2025-2026',
    title: 'Shabbaton 2025-2026',
    category: 'shabbaton',
    categoryTitle: 'Shabbaton',
    color: 'blue',
    coverImage: 'images/1752104826202%20(1).jpg'
  },
  'shabbaton-2026-2027': {
    id: 'shabbaton-2026-2027',
    title: 'Shabbaton 2026-2027',
    category: 'shabbaton',
    categoryTitle: 'Shabbaton',
    color: 'blue',
    coverImage: 'images/WhatsApp%20Image%202026-06-29%20at%2013.11.01%20(1).jpeg'
  }
};
